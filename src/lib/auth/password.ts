import bcrypt from "bcryptjs";

/** Hash a plaintext password for storage. */
export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 10);
}

/** Constant-time-ish compare of a plaintext password against a stored hash. */
export function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
