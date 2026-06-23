/**
 * Pure signup/credential validation — no I/O, so it's unit-testable and shared by
 * the signup Server Action (which can't itself export sync helpers under
 * "use server"). Keep the rules and their messages here.
 */

export const USERNAME_RE = /^[a-zA-Z0-9_.-]{3,32}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface SignupInput {
  username: string;
  password: string;
  /** Optional; null when the learner leaves it blank. */
  email: string | null;
}

/** Returns a human-readable error message, or null when the input is valid. */
export function validateSignup({
  username,
  password,
  email,
}: SignupInput): string | null {
  if (!USERNAME_RE.test(username)) {
    return "Username must be 3–32 characters: letters, numbers, . _ or -.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }
  if (email && !EMAIL_RE.test(email)) {
    return "That email doesn't look right.";
  }
  return null;
}
