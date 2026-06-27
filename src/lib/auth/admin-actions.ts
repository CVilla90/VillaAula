"use server";

import { revalidatePath } from "next/cache";
import { getPrisma } from "@/lib/db";
import { requireAdmin } from "@/lib/admin/data";
import { ASSIGNABLE_ROLES, type AssignableRole } from "./roles";

/**
 * Admin-only Server Actions for managing a learner's account from
 * `/admin/users/[id]` (HANDOFF §18.L + §18.M cheap interim).
 *
 * Every action **re-checks `requireAdmin()` server-side** — the client is never
 * trusted, and `requireAdmin()` redirects non-admins / accounts-off before any
 * write runs. Only the fields below are writable here:
 *   - name, email  → §18.L (fixing a learner's details; name prints on the diploma)
 *   - role         → §18.M interim (tag trusted users; full privileges land later)
 * username and password are deliberately NOT editable through this surface.
 */

export interface AdminActionState {
  error?: string;
  ok?: string;
}

function isUniqueViolation(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2002"
  );
}

function revalidateLearner(userId: string): void {
  revalidatePath("/admin");
  revalidatePath(`/admin/users/${userId}`);
}

/** Edit a learner's display `name` (diploma) and `email`. Admin-only. */
export async function updateLearnerProfile(
  _prev: AdminActionState | undefined,
  formData: FormData,
): Promise<AdminActionState> {
  await requireAdmin();

  const userId = String(formData.get("userId") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const emailRaw = String(formData.get("email") ?? "").trim();
  const email = emailRaw ? emailRaw.toLowerCase() : null;

  if (!userId) return { error: "Missing learner id." };
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "That email doesn't look valid." };
  }

  try {
    await getPrisma().user.update({
      where: { id: userId },
      // Only these two columns — never username/password/role here.
      data: { name: name || null, email },
    });
  } catch (error) {
    if (isUniqueViolation(error)) {
      return { error: "That email is already used by another account." };
    }
    return { error: "Couldn't save those details. Try again." };
  }

  revalidateLearner(userId);
  return { ok: "Details saved." };
}

/**
 * Tag a learner with a role (§18.M interim). Setting `admin` grants admin access
 * immediately (role === "admin"); the allowlisted super-admin emails keep their
 * access regardless of this column, so an admin can't lock themselves out.
 */
export async function updateLearnerRole(
  _prev: AdminActionState | undefined,
  formData: FormData,
): Promise<AdminActionState> {
  await requireAdmin();

  const userId = String(formData.get("userId") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();

  if (!userId) return { error: "Missing learner id." };
  if (!ASSIGNABLE_ROLES.includes(role as AssignableRole)) {
    return { error: "Unknown role." };
  }

  try {
    await getPrisma().user.update({ where: { id: userId }, data: { role } });
  } catch {
    return { error: "Couldn't update the role. Try again." };
  }

  revalidateLearner(userId);
  return { ok: "Role updated." };
}
