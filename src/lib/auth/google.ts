/**
 * Google OAuth 2.0 (authorization-code flow) implemented with plain `fetch` —
 * no auth library, so it's robust against Next 16 / NextAuth churn. All helpers
 * no-op gracefully when the client isn't configured.
 */

/** Manual signup works without these; only "Continue with Google" needs them. */
export function googleConfigured(): boolean {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
}

/** Public base URL, no trailing slash. Drives the OAuth redirect URI. */
export function appUrl(): string {
  return (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function googleRedirectUri(): string {
  return `${appUrl()}/api/auth/google/callback`;
}

export function googleAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID ?? "",
    redirect_uri: googleRedirectUri(),
    response_type: "code",
    scope: "openid email profile",
    state,
    access_type: "online",
    prompt: "select_account",
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

export interface GoogleProfile {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
}

/** Exchange an auth code for an access token, then fetch the user's profile. */
export async function fetchGoogleProfile(code: string): Promise<GoogleProfile | null> {
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID ?? "",
      client_secret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      redirect_uri: googleRedirectUri(),
      grant_type: "authorization_code",
    }),
  });
  if (!tokenRes.ok) return null;
  const token = (await tokenRes.json()) as { access_token?: string };
  if (!token.access_token) return null;

  const profileRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  if (!profileRes.ok) return null;
  const profile = (await profileRes.json()) as GoogleProfile;
  return profile.sub ? profile : null;
}

/** Only allow same-origin relative redirects (prevents open-redirect abuse). */
export function safeNext(next: string | null | undefined, fallback = "/levels"): string {
  if (next && next.startsWith("/") && !next.startsWith("//")) return next;
  return fallback;
}
