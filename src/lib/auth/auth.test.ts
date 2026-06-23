import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  signSessionToken,
  verifySessionToken,
} from "@/lib/auth/token";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { validateSignup } from "@/lib/auth/validation";

const SECRET = "test-secret-at-least-32-characters-long-abcdef";

describe("session token (jose)", () => {
  beforeEach(() => vi.stubEnv("AUTH_SECRET", SECRET));
  afterEach(() => vi.unstubAllEnvs());

  it("round-trips the payload", async () => {
    const token = await signSessionToken({ userId: "u1", role: "student" });
    expect(await verifySessionToken(token)).toEqual({
      userId: "u1",
      role: "student",
    });
  });

  it("rejects a token signed with a different secret", async () => {
    const token = await signSessionToken({ userId: "u1", role: "admin" });
    vi.stubEnv("AUTH_SECRET", "a-completely-different-secret-value-123456");
    expect(await verifySessionToken(token)).toBeNull();
  });

  it("rejects a tampered / non-JWT string", async () => {
    expect(await verifySessionToken("not.a.real.jwt")).toBeNull();
  });

  it("verifying returns null when AUTH_SECRET is unset", async () => {
    const token = await signSessionToken({ userId: "u1", role: "student" });
    vi.unstubAllEnvs(); // AUTH_SECRET gone
    expect(await verifySessionToken(token)).toBeNull();
  });

  it("signing throws when AUTH_SECRET is unset", async () => {
    vi.unstubAllEnvs();
    await expect(
      signSessionToken({ userId: "u1", role: "student" }),
    ).rejects.toThrow();
  });
});

describe("password hashing (bcrypt)", () => {
  it("verifies the correct password and rejects a wrong one", async () => {
    const hash = await hashPassword("correct horse battery staple");
    expect(hash).not.toBe("correct horse battery staple"); // actually hashed
    expect(await verifyPassword("correct horse battery staple", hash)).toBe(true);
    expect(await verifyPassword("wrong password", hash)).toBe(false);
  });
});

describe("validateSignup", () => {
  it("accepts valid input (with and without email)", () => {
    expect(
      validateSignup({ username: "carlos_90", password: "supersecret", email: "a@b.com" }),
    ).toBeNull();
    expect(
      validateSignup({ username: "ana", password: "12345678", email: null }),
    ).toBeNull();
  });

  it("rejects a too-short or malformed username", () => {
    expect(
      validateSignup({ username: "ab", password: "supersecret", email: null }),
    ).toMatch(/Username/);
    expect(
      validateSignup({ username: "has space", password: "supersecret", email: null }),
    ).toMatch(/Username/);
  });

  it("rejects a short password", () => {
    expect(
      validateSignup({ username: "carlos", password: "short", email: null }),
    ).toMatch(/8 characters/);
  });

  it("rejects a malformed email", () => {
    expect(
      validateSignup({ username: "carlos", password: "supersecret", email: "nope" }),
    ).toMatch(/email/);
  });
});
