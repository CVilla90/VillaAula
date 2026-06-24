import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  signSessionToken,
  verifySessionToken,
} from "@/lib/auth/token";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { validateSignup } from "@/lib/auth/validation";
import {
  pickLinkedUser,
  mergeGoogleProfile,
  type LinkableUser,
} from "@/lib/auth/google";
import { isAdminEmail } from "@/lib/auth/users";

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
  it("accepts valid input with an email", () => {
    expect(
      validateSignup({ username: "carlos_90", password: "supersecret", email: "a@b.com" }),
    ).toBeNull();
  });

  it("now requires an email (so OAuth can link the account later)", () => {
    expect(
      validateSignup({ username: "ana", password: "12345678", email: null }),
    ).toMatch(/Email is required/);
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

describe("Google account linking", () => {
  const manualAccount: LinkableUser = {
    id: "u1",
    googleId: null, // signed up manually, not yet Google-linked
    email: "friend@gmail.com",
    name: "Friend",
    image: null,
  };
  const profile = {
    sub: "google-123",
    email: "Friend@Gmail.com", // Google may return mixed case
    name: "Friend G.",
    picture: "https://pic",
  };

  it("prefers the already-Google-linked account over an email match", () => {
    const byGoogleId = { ...manualAccount, id: "byGoogle", googleId: "google-123" };
    const byEmail = { ...manualAccount, id: "byEmail" };
    expect(pickLinkedUser(byGoogleId, byEmail)?.id).toBe("byGoogle");
  });

  it("links a manual account found by email when no Google id matches", () => {
    expect(pickLinkedUser(null, manualAccount)?.id).toBe("u1");
  });

  it("returns null when nothing matches (a fresh account will be created)", () => {
    expect(pickLinkedUser(null, null)).toBeNull();
  });

  it("merges a profile onto a manual account: adds googleId, keeps the user's own name/email", () => {
    const merged = mergeGoogleProfile(manualAccount, profile);
    expect(merged.googleId).toBe("google-123"); // newly linked
    expect(merged.name).toBe("Friend"); // user's chosen name preserved
    expect(merged.email).toBe("friend@gmail.com"); // existing email preserved
    expect(merged.image).toBe("https://pic"); // filled in from Google (was null)
  });

  it("fills email (lowercased) from the profile when the account had none", () => {
    const merged = mergeGoogleProfile({ ...manualAccount, email: null }, profile);
    expect(merged.email).toBe("friend@gmail.com");
  });
});

describe("isAdminEmail (ADMIN_EMAILS allowlist)", () => {
  beforeEach(() =>
    vi.stubEnv("ADMIN_EMAILS", "cavilla@uach.mx,carlosavillah90@gmail.com"),
  );
  afterEach(() => vi.unstubAllEnvs());

  it("recognizes both of Carlos's admin emails, case-insensitively", () => {
    expect(isAdminEmail("cavilla@uach.mx")).toBe(true);
    expect(isAdminEmail("Carlosavillah90@Gmail.com")).toBe(true);
  });

  it("treats a learner email and null as non-admin", () => {
    expect(isAdminEmail("friend@gmail.com")).toBe(false);
    expect(isAdminEmail(null)).toBe(false);
  });
});
