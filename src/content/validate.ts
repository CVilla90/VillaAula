/**
 * Content integrity checks (REFACTOR.md F5). The MVP authored content as inline TS
 * and verified "no collisions / no broken keys" by hand. This makes that automatic
 * so adding a course (or AI-generating one — HANDOFF §18.D) can't silently ship a
 * duplicate id, an unanswerable question, or a dead audio link.
 *
 * `validateCatalog` is pure/isomorphic (no fs) so it runs in the test suite and,
 * if desired, a dev-time guard. The on-disk audio-file check needs Node fs and
 * lives in `validateAudioFiles` (call it from tests only).
 *
 * ── Canonical ID scheme (convention for NEW content, e.g. L3/L4 in §6) ──
 *   unit:     c{level}u{n}              e.g. c3u1
 *   lesson:   c{level}u{n}l{n}          e.g. c3u1l2
 *   question: {lessonId}-q{n}           e.g. c3u1l2-q3
 *   content:  {lessonId}-{a|r|i}{n}     audio/reading/image  e.g. c3u1l2-a1
 * Existing L1/L2 ids predate this and are left as-is (they're unique — the checker
 * enforces *uniqueness + structural correctness*, not naming style).
 */

import type {
  Course,
  Question,
  OpenConfig,
  MultipleChoiceConfig,
  TrueFalseConfig,
  MatchConfig,
  Exercise,
} from "@/lib/types";

export interface ValidationIssue {
  /** Course slug the problem belongs to ("*" for catalog-wide issues). */
  course: string;
  /** Human path to the problem, e.g. "unit 2 / lesson articles / q u2-l1-q1". */
  where: string;
  message: string;
}

function nonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

function validateQuestion(q: Question): string[] {
  const out: string[] = [];
  switch (q.type) {
    case "open": {
      const c = q.config as OpenConfig;
      if (!Array.isArray(c.acceptedAnswers) || c.acceptedAnswers.length === 0) {
        out.push("open question has no acceptedAnswers");
      } else if (!c.acceptedAnswers.every(nonEmpty)) {
        out.push("open question has a blank accepted answer");
      }
      break;
    }
    case "multiple_choice": {
      const c = q.config as MultipleChoiceConfig;
      if (!Array.isArray(c.options) || c.options.length < 2) {
        out.push("multiple_choice needs at least 2 options");
      }
      const ids = (c.options ?? []).map((o) => o.id);
      if (new Set(ids).size !== ids.length) {
        out.push("multiple_choice has duplicate option ids");
      }
      if (!Array.isArray(c.correctIds) || c.correctIds.length === 0) {
        out.push("multiple_choice has no correctIds");
      } else if (!c.correctIds.every((id) => ids.includes(id))) {
        out.push("multiple_choice correctIds reference a missing option");
      }
      break;
    }
    case "true_false": {
      const c = q.config as TrueFalseConfig;
      if (typeof c.correct !== "boolean") {
        out.push("true_false is missing its boolean `correct`");
      }
      break;
    }
    case "match": {
      const c = q.config as MatchConfig;
      if (!Array.isArray(c.pairs) || c.pairs.length === 0) {
        out.push("match has no pairs");
      }
      const lefts = (c.pairs ?? []).map((p) => p.left);
      if (new Set(lefts).size !== lefts.length) {
        out.push("match has duplicate left labels");
      }
      if (!(c.pairs ?? []).every((p) => nonEmpty(p.left) && nonEmpty(p.right))) {
        out.push("match has a blank left/right");
      }
      break;
    }
  }
  return out;
}

/** Walk an exercise, collecting ids and per-question issues. */
function checkExercise(
  exercise: Exercise,
  where: string,
  course: string,
  contentIds: Map<string, string>,
  questionIds: Map<string, string>,
  issues: ValidationIssue[],
): number {
  let questionCount = 0;
  for (const item of exercise.items) {
    if (item.kind === "content") {
      const c = item.content;
      const prev = contentIds.get(c.id);
      if (prev) issues.push({ course, where, message: `duplicate content id "${c.id}" (also in ${prev})` });
      else contentIds.set(c.id, where);
      if (c.type === "audio" && !nonEmpty(c.mediaUrl) && !nonEmpty(c.transcript)) {
        issues.push({ course, where, message: `audio "${c.id}" has neither mediaUrl nor transcript` });
      }
    } else {
      questionCount++;
      const q = item.question;
      const prev = questionIds.get(q.id);
      if (prev) issues.push({ course, where, message: `duplicate question id "${q.id}" (also in ${prev})` });
      else questionIds.set(q.id, where);
      for (const m of validateQuestion(q)) {
        issues.push({ course, where: `${where} / q ${q.id}`, message: m });
      }
    }
  }
  return questionCount;
}

export function validateCatalog(courses: Course[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const contentIds = new Map<string, string>(); // id -> where (global)
  const questionIds = new Map<string, string>();
  const courseSlugs = new Set<string>();

  for (const course of courses) {
    const c = course.slug;
    if (courseSlugs.has(c)) issues.push({ course: c, where: "course", message: `duplicate course slug "${c}"` });
    courseSlugs.add(c);

    const unitSlugs = new Set<string>();
    for (const unit of course.units) {
      if (unitSlugs.has(unit.slug)) {
        issues.push({ course: c, where: `unit ${unit.slug}`, message: `duplicate unit slug "${unit.slug}" in course` });
      }
      unitSlugs.add(unit.slug);

      const lessonSlugs = new Set<string>();
      for (const lesson of unit.lessons) {
        const where = `unit ${unit.slug} / lesson ${lesson.slug}`;
        if (lessonSlugs.has(lesson.slug)) {
          issues.push({ course: c, where, message: `duplicate lesson slug "${lesson.slug}" in unit ${unit.slug}` });
        }
        lessonSlugs.add(lesson.slug);
        checkExercise(lesson.exercise, where, c, contentIds, questionIds, issues);
      }
    }

    if (course.finalTest) {
      const where = `final test ${course.finalTest.slug}`;
      const qCount = checkExercise(course.finalTest.exercise, where, c, contentIds, questionIds, issues);
      const pass = course.finalTest.passingScore;
      if (pass < 1 || pass > qCount) {
        issues.push({ course: c, where, message: `passingScore ${pass} out of range (1..${qCount})` });
      }
    }
  }

  return issues;
}

/** Throws a readable error if the catalog has any integrity problems. */
export function assertValidCatalog(courses: Course[]): void {
  const issues = validateCatalog(courses);
  if (issues.length) {
    throw new Error(
      `Content validation failed (${issues.length}):\n` +
        issues.map((i) => `  [${i.course}] ${i.where}: ${i.message}`).join("\n"),
    );
  }
}

/** Every audio block's mediaUrl that points under /public must exist on disk. */
export interface AudioFileChecker {
  exists: (publicRelativePath: string) => boolean;
}

export function validateAudioFiles(
  courses: Course[],
  checker: AudioFileChecker,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const course of courses) {
    const lessons = course.units.flatMap((u) => u.lessons);
    const exercises = [
      ...lessons.map((l) => l.exercise),
      ...(course.finalTest ? [course.finalTest.exercise] : []),
    ];
    for (const ex of exercises) {
      for (const item of ex.items) {
        if (item.kind !== "content") continue;
        const url = item.content.mediaUrl;
        if (!url || !url.startsWith("/")) continue; // remote/none — skip
        if (!checker.exists(url)) {
          issues.push({
            course: course.slug,
            where: `content ${item.content.id}`,
            message: `mediaUrl "${url}" not found under public/`,
          });
        }
      }
    }
  }
  return issues;
}
