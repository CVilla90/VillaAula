import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { dbConfigured } from "@/lib/db";

/**
 * Stateless session: a signed JWT in an httpOnly cookie (the pattern the Next 16
 * auth guide recommends). Note `cookies()` is async in Next 16.
 *
 * Auth is only "configured" when BOTH a database and a signing secret exist;
 * otherwise login/signup are disabled and the app falls back to localStorage
 * progress, so local dev runs with no setup.
 */

const COOKIE = "wishub_session";
const ALG = "HS256";
const MAX_AGE_S = 60 * 60 * 24 * 30; // 30 days

export interface SessionPayload {
  userId: string;
  role: string;
}

function secretKey(): Uint8Array | null {
  const s = process.env.AUTH_SECRET;
  return s ? new TextEncoder().encode(s) : null;
}

/** True when both a Postgres URL and a session signing secret are set. */
export function authConfigured(): boolean {
  return dbConfigured() && Boolean(process.env.AUTH_SECRET);
}

export async function createSession(payload: SessionPayload): Promise<void> {
  const key = secretKey();
  if (!key) throw new Error("AUTH_SECRET is not set");
  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_S}s`)
    .sign(key);
  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_S,
  });
}

export async function getSession(): Promise<SessionPayload | null> {
  const key = secretKey();
  if (!key) return null;
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
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

export async function deleteSession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}
