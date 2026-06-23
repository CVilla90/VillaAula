import { cookies } from "next/headers";
import { dbConfigured } from "@/lib/db";
import {
  SESSION_COOKIE,
  sessionCookieOptions,
  signSessionToken,
  verifySessionToken,
  type SessionPayload,
} from "./token";

/**
 * Cookie-bound session helpers. The JWT crypto lives in ./token (pure, testable);
 * this layer reads/writes the httpOnly cookie. Note `cookies()` is async in Next 16.
 *
 * Auth is only "configured" when BOTH a database and a signing secret exist;
 * otherwise login/signup are disabled and the app falls back to localStorage
 * progress, so local dev runs with no setup.
 *
 * The token primitives are re-exported so Route Handlers can set the cookie on a
 * `NextResponse` directly (where the `cookies()` helper is awkward), while Server
 * Actions / Server Components use `createSession`.
 */

export { SESSION_COOKIE, sessionCookieOptions, signSessionToken } from "./token";
export type { SessionPayload } from "./token";

/** True when both a Postgres URL and a session signing secret are set. */
export function authConfigured(): boolean {
  return dbConfigured() && Boolean(process.env.AUTH_SECRET);
}

/** Set the session cookie from a Server Action / Server Component context. */
export async function createSession(payload: SessionPayload): Promise<void> {
  const token = await signSessionToken(payload);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, sessionCookieOptions());
}

export async function getSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function deleteSession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
