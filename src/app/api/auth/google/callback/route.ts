import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import {
  SESSION_COOKIE,
  authConfigured,
  sessionCookieOptions,
  signSessionToken,
} from "@/lib/auth/session";
import { fetchGoogleProfile, safeNext, appUrl } from "@/lib/auth/google";
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
    .find((c) => c.startsWith("wishub_oauth="))
    ?.slice("wishub_oauth=".length);

  if (!code || !state || !saved) return fail("oauth");
  const [savedState, savedNext] = decodeURIComponent(saved).split("|");
  if (state !== savedState) return fail("state");

  const profile = await fetchGoogleProfile(code);
  if (!profile) return fail("oauth");

  const email = profile.email?.toLowerCase() ?? null;
  const prisma = getPrisma();

  // Find by Google id first, then link an existing account by email, else create.
  let user = await prisma.user.findUnique({ where: { googleId: profile.sub } });
  if (!user && email) {
    user = await prisma.user.findUnique({ where: { email } });
  }

  if (user) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        googleId: user.googleId ?? profile.sub,
        image: user.image ?? profile.picture ?? null,
        name: user.name ?? profile.name ?? null,
        email: user.email ?? email,
      },
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
  res.cookies.delete("wishub_oauth");
  return res;
}
