import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import {
  SESSION_COOKIE,
  authConfigured,
  sessionCookieOptions,
  signSessionToken,
} from "@/lib/auth/session";
import {
  fetchGoogleProfile,
  safeNext,
  appUrl,
  pickLinkedUser,
  mergeGoogleProfile,
} from "@/lib/auth/google";
import { isAdminEmail } from "@/lib/auth/users";

// Step 2 of Google sign-in: verify state, exchange the code for the profile,
// upsert the user, and set the session cookie on the redirect response.
export async function GET(request: Request) {
  const base = appUrl();
  const fail = (reason: string) =>
    NextResponse.redirect(new URL(`/login?error=${reason}`, base));

  if (!authConfigured()) return fail("google_disabled");

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const saved = request.headers
    .get("cookie")
    ?.split(/;\s*/)
    .find((c) => c.startsWith("villaaula_oauth="))
    ?.slice("villaaula_oauth=".length);

  if (!code || !state || !saved) return fail("oauth");
  const [savedState, savedNext] = decodeURIComponent(saved).split("|");
  if (state !== savedState) return fail("state");

  const profile = await fetchGoogleProfile(code);
  if (!profile) return fail("oauth");

  const email = profile.email?.toLowerCase() ?? null;
  const prisma = getPrisma();

  // Resolve which account this Google identity belongs to:
  //   1) one already linked to this Google id, else
  //   2) a manual/email account with the same address — first OAuth login links it,
  //   3) otherwise create a fresh Google account below.
  // NOTE: linking by email trusts the signup email. We don't verify emails yet (no
  // email provider), which is an accepted trade-off at this small, invite-only
  // scale; revisit if VillaAula ever opens to strangers.
  const byGoogleId = await prisma.user.findUnique({
    where: { googleId: profile.sub },
  });
  const byEmail =
    !byGoogleId && email
      ? await prisma.user.findUnique({ where: { email } })
      : null;
  let user = pickLinkedUser(byGoogleId, byEmail);

  if (user) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: mergeGoogleProfile(user, profile),
    });
  } else {
    user = await prisma.user.create({
      data: {
        googleId: profile.sub,
        email,
        name: profile.name ?? null,
        image: profile.picture ?? null,
        role: isAdminEmail(email) ? "admin" : "student",
      },
    });
  }

  const token = await signSessionToken({ userId: user.id, role: user.role });
  const res = NextResponse.redirect(new URL(safeNext(savedNext), base));
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  res.cookies.delete("villaaula_oauth");
  return res;
}
