import { NextResponse } from "next/server";
import { authConfigured, sessionCookieOptions } from "@/lib/auth/session";
import { googleAuthUrl, googleConfigured, safeNext, appUrl } from "@/lib/auth/google";

// Step 1 of Google sign-in: stash a CSRF state (+ where to return) in a short-lived
// cookie, then redirect the browser to Google's consent screen.
export async function GET(request: Request) {
  const base = appUrl();
  if (!authConfigured() || !googleConfigured()) {
    return NextResponse.redirect(new URL("/login?error=google_disabled", base));
  }

  const url = new URL(request.url);
  const next = safeNext(url.searchParams.get("next"));
  const state = crypto.randomUUID();

  const res = NextResponse.redirect(googleAuthUrl(state));
  res.cookies.set("wishub_oauth", `${state}|${next}`, sessionCookieOptions(600));
  return res;
}
