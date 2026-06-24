"use server";

import { getPrisma } from "@/lib/db";
import { getCurrentUser } from "./users";

/**
 * Real exam grades for signed-in learners (HANDOFF §18.E). Like progress-actions,
 * each is a no-op / null without a session, so the client can call them
 * unconditionally. Guests never write here — their final check stays a local-only
 * pass/fail, and no diploma is issued (see DiplomaPanel gating).
 */

/** Non-sensitive view returned to the UI. */
export interface ExamResultView {
  score: number;
  total: number;
  passed: boolean;
  attempts: number;
}

export async function recordExamResult(input: {
  courseSlug: string;
  score: number;
  total: number;
  passed: boolean;
}): Promise<void> {
  const user = await getCurrentUser();
  if (!user || !input.courseSlug) return;
  const { courseSlug, score, total, passed } = input;
  await getPrisma().examResult.upsert({
    where: { userId_courseSlug: { userId: user.id, courseSlug } },
    create: { userId: user.id, courseSlug, score, total, passed, attempts: 1 },
    update: { score, total, passed, attempts: { increment: 1 } },
  });
}

export async function getExamResult(
  courseSlug: string,
): Promise<ExamResultView | null> {
  const user = await getCurrentUser();
  if (!user) return null;
  const row = await getPrisma().examResult.findUnique({
    where: { userId_courseSlug: { userId: user.id, courseSlug } },
  });
  if (!row) return null;
  return {
    score: row.score,
    total: row.total,
    passed: row.passed,
    attempts: row.attempts,
  };
}
