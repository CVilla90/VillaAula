import { redirect } from "next/navigation";
import { getPrisma } from "@/lib/db";
import { authConfigured } from "@/lib/auth/session";
import { getCurrentUser, type CurrentUser } from "@/lib/auth/users";
import type { ExamRecord } from "./stats";

/**
 * Server-side data access for the admin dashboard. NOT a Server Actions module —
 * these are plain async functions called from the admin server components. Every
 * entry point is gated by `requireAdmin()`, which redirects non-admins (and the
 * no-DB / accounts-off case) away, so a learner can never reach another learner's
 * data. Only Carlos's allowlisted emails (or a DB `role: "admin"`) pass.
 */

/** A learner row with their progress keys + recorded grades, for the dashboard. */
export interface AdminLearner {
  id: string;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  role: string;
  isAdmin: boolean;
  createdAt: Date;
  completedKeys: string[];
  exams: ExamRecord[];
  /** Most recent progress/grade write, or null if they've done nothing. */
  lastActivity: Date | null;
}

/** Admin allowlist check, reused by the row mapper. */
function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}
function isAdminRow(role: string, email: string | null): boolean {
  return role === "admin" || Boolean(email && adminEmails().includes(email.toLowerCase()));
}

/**
 * Require an authenticated admin. Redirects home when accounts are off (no DB),
 * when signed out, or when the user isn't an admin. Returns the admin on success.
 */
export async function requireAdmin(): Promise<CurrentUser> {
  if (!authConfigured()) redirect("/");
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/admin");
  if (!user.isAdmin) redirect("/");
  return user;
}

type UserWithRelations = {
  id: string;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  role: string;
  createdAt: Date;
  progress: { key: string; completedAt: Date }[];
  examResults: {
    courseSlug: string;
    score: number;
    total: number;
    passed: boolean;
    attempts: number;
    updatedAt: Date;
  }[];
};

function toAdminLearner(u: UserWithRelations): AdminLearner {
  const activityDates = [
    ...u.progress.map((p) => p.completedAt),
    ...u.examResults.map((e) => e.updatedAt),
  ];
  const lastActivity = activityDates.length
    ? new Date(Math.max(...activityDates.map((d) => d.getTime())))
    : null;
  return {
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
    image: u.image,
    role: u.role,
    isAdmin: isAdminRow(u.role, u.email),
    createdAt: u.createdAt,
    completedKeys: u.progress.map((p) => p.key),
    exams: u.examResults.map((e) => ({
      courseSlug: e.courseSlug,
      score: e.score,
      total: e.total,
      passed: e.passed,
      attempts: e.attempts,
    })),
    lastActivity,
  };
}

/** Every learner with their progress + grades, newest sign-up last. */
export async function listLearners(): Promise<AdminLearner[]> {
  const users = await getPrisma().user.findMany({
    include: { progress: true, examResults: true },
    orderBy: { createdAt: "asc" },
  });
  return users.map(toAdminLearner);
}

/** One learner's full record, or null if the id doesn't exist. */
export async function getLearner(id: string): Promise<AdminLearner | null> {
  const user = await getPrisma().user.findUnique({
    where: { id },
    include: { progress: true, examResults: true },
  });
  return user ? toAdminLearner(user) : null;
}
