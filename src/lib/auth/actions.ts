"use server";

import { redirect } from "next/navigation";
import { getPrisma } from "@/lib/db";
import { hashPassword, verifyPassword } from "./password";
import { authConfigured, createSession, deleteSession } from "./session";
import { isAdminEmail } from "./users";
import { safeNext } from "./google";

export interface AuthState {
  error?: string;
}

const USERNAME_RE = /^[a-zA-Z0-9_.-]{3,32}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isUniqueViolation(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2002"
  );
}

export async function signupAction(
  _prev: AuthState | undefined,
  formData: FormData,
): Promise<AuthState> {
  if (!authConfigured()) {
    return { error: "Accounts aren't enabled yet — your progress saves on this device." };
  }

  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const emailRaw = String(formData.get("email") ?? "").trim();
  const email = emailRaw ? emailRaw.toLowerCase() : null;
  const next = safeNext(String(formData.get("next") ?? ""));

  if (!USERNAME_RE.test(username)) {
    return { error: "Username must be 3–32 characters: letters, numbers, . _ or -." };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }
  if (email && !EMAIL_RE.test(email)) {
    return { error: "That email doesn't look right." };
  }

  const prisma = getPrisma();
  const passwordHash = await hashPassword(password);
  const role = isAdminEmail(email) ? "admin" : "student";

  let userId: string;
  try {
    const user = await prisma.user.create({
      data: { username, email, name: name || username, passwordHash, role },
    });
    userId = user.id;
  } catch (error) {
    if (isUniqueViolation(error)) {
      return { error: "That username or email is already taken." };
    }
    return { error: "Something went wrong creating your account." };
  }

  await createSession({ userId, role });
  redirect(next);
}

export async function loginAction(
  _prev: AuthState | undefined,
  formData: FormData,
): Promise<AuthState> {
  if (!authConfigured()) {
    return { error: "Accounts aren't enabled yet — your progress saves on this device." };
  }

  const identifier = String(formData.get("identifier") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = safeNext(String(formData.get("next") ?? ""));

  if (!identifier || !password) {
    return { error: "Enter your username/email and password." };
  }

  const prisma = getPrisma();
  const user = await prisma.user.findFirst({
    where: { OR: [{ username: identifier }, { email: identifier.toLowerCase() }] },
  });
  // Same message whether the user is missing or the password is wrong.
  if (!user?.passwordHash || !(await verifyPassword(password, user.passwordHash))) {
    return { error: "Invalid username/email or password." };
  }

  await createSession({ userId: user.id, role: user.role });
  redirect(next);
}

export async function logoutAction(): Promise<void> {
  await deleteSession();
  redirect("/");
}
