import { SignJWT, jwtVerify } from "jose";

/**
 * Pure session-token crypto — no I/O. The signed JWT is the security core of auth,
 * so it lives here free of `next/headers`, which keeps it unit-testable. The cookie
 * read/write wrappers (createSession/getSession/deleteSession) live in ./session.
 */

export const SESSION_COOKIE = "wishub_session";
const ALG = "HS256";
export const MAX_AGE_S = 60 * 60 * 24 * 30; // 30 days

export interface SessionPayload {
  userId: string;
  role: string;
}

function secretKey(): Uint8Array | null {
  const s = process.env.AUTH_SECRET;
  return s ? new TextEncoder().encode(s) : null;
}

export function sessionCookieOptions(maxAge: number = MAX_AGE_S) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export async function signSessionToken(payload: SessionPayload): Promise<string> {
  const key = secretKey();
  if (!key) throw new Error("AUTH_SECRET is not set");
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_S}s`)
    .sign(key);
}

/** Verify a token; returns its payload, or null if invalid/expired/unsigned. */
export async function verifySessionToken(
  token: string,
): Promise<SessionPayload | null> {
  const key = secretKey();
  if (!key) return null;
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: [ALG] });
    if (typeof payload.userId === "string" && typeof payload.role === "string") {
      return { userId: payload.userId, role: payload.role };
    }
    return null;
  } catch {
    return null; // expired or tampered
  }
}
