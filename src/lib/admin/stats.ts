/**
 * Admin progress/grade analytics — PURE + isomorphic (no React, no Prisma, no
 * Next). Given the course catalog + a learner's completed progress keys + their
 * recorded exam results, it derives a per-course and overall summary the admin
 * dashboard renders. Kept pure so it's unit-testable without a DB (see
 * stats.test.ts) and reusable from any server component.
 *
 * The progress `key` strings are the same ones used everywhere else (see
 * lib/progress.ts): "courseSlug/unitSlug/lessonSlug" for a lesson and
 * "final:courseSlug" for a passed final test.
 */

import type { Course } from "@/lib/types";
import { finalTestKey, lessonKey } from "@/lib/progress";

/** A learner's grade on one course's final check (mirrors ExamResult). */
export interface ExamRecord {
  courseSlug: string;
  score: number;
  total: number;
  passed: boolean;
  attempts: number;
}

/** One course's worth of a learner's progress. */
export interface CourseProgressStat {
  slug: string;
  level: number;
  title: string;
  lessonsDone: number;
  lessonsTotal: number;
  /** Whole-number percent of lessons completed (0–100). */
  pct: number;
  /** The final check has been passed (its progress key is present). */
  finalPassed: boolean;
  /** Any lesson done or the final passed. */
  started: boolean;
  /** All lessons done AND (no final, or final passed). */
  complete: boolean;
  /** Real recorded grade, when the learner has taken the final. */
  exam?: ExamRecord;
}

/** A learner's progress rolled up across the whole catalog. */
export interface LearnerSummary {
  lessonsDone: number;
  lessonsTotal: number;
  /** Whole-number percent of all catalog lessons completed (0–100). */
  pct: number;
  coursesStarted: number;
  coursesComplete: number;
  courses: CourseProgressStat[];
}

/** Every lesson progress key for a course, in syllabus order. */
export function courseLessonKeys(course: Course): string[] {
  return course.units.flatMap((u) =>
    u.lessons.map((l) => lessonKey(course.slug, u.slug, l.slug)),
  );
}

function pctOf(done: number, total: number): number {
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

/** Per-course progress for one learner. */
export function summarizeCourse(
  course: Course,
  completed: Set<string>,
  exam?: ExamRecord,
): CourseProgressStat {
  const lessonKeys = courseLessonKeys(course);
  const lessonsDone = lessonKeys.filter((k) => completed.has(k)).length;
  const lessonsTotal = lessonKeys.length;
  const finalPassed = course.finalTest
    ? completed.has(finalTestKey(course.slug))
    : false;
  const allLessonsDone = lessonsTotal > 0 && lessonsDone === lessonsTotal;
  const complete = allLessonsDone && (course.finalTest ? finalPassed : true);
  return {
    slug: course.slug,
    level: course.level,
    title: course.title,
    lessonsDone,
    lessonsTotal,
    pct: pctOf(lessonsDone, lessonsTotal),
    finalPassed,
    started: lessonsDone > 0 || finalPassed,
    complete,
    exam,
  };
}

/** Roll a learner's keys + grades up across the whole catalog. */
export function summarizeLearner(
  courses: Course[],
  completedKeys: Iterable<string>,
  exams: ExamRecord[] = [],
): LearnerSummary {
  const completed = new Set(completedKeys);
  const examBySlug = new Map(exams.map((e) => [e.courseSlug, e]));
  const courseStats = courses.map((c) =>
    summarizeCourse(c, completed, examBySlug.get(c.slug)),
  );
  const lessonsDone = courseStats.reduce((n, c) => n + c.lessonsDone, 0);
  const lessonsTotal = courseStats.reduce((n, c) => n + c.lessonsTotal, 0);
  return {
    lessonsDone,
    lessonsTotal,
    pct: pctOf(lessonsDone, lessonsTotal),
    coursesStarted: courseStats.filter((c) => c.started).length,
    coursesComplete: courseStats.filter((c) => c.complete).length,
    courses: courseStats,
  };
}
