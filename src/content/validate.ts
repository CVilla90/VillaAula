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
  SpeakingConfig,
  Exercise,
  Resource,
  Program,
  Category,
} from "@/lib/types";
import { extractLearnSlugs, lessonReferencedSlugs } from "@/content/links";
import { programBadges } from "@/content/programs";

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
    case "speaking": {
      const c = q.config as SpeakingConfig;
      if (!nonEmpty(c.target)) {
        out.push("speaking question has no target phrase");
      }
      if (!Array.isArray(c.acceptedAnswers) || c.acceptedAnswers.length === 0) {
        out.push("speaking question has no acceptedAnswers");
      } else if (!c.acceptedAnswers.every(nonEmpty)) {
        out.push("speaking question has a blank accepted answer");
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

/**
 * Deep Dives integrity (HANDOFF §18.J): unique resource slugs, required fields,
 * and every `related` / inline `/learn/<slug>` link resolves (dead-link guard).
 */
export function validateResources(resources: Resource[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const seen = new Set<string>();
  const slugSet = new Set(resources.map((r) => r.slug));
  for (const r of resources) {
    const where = `resource ${r.slug}`;
    if (seen.has(r.slug)) {
      issues.push({ course: "learn", where, message: `duplicate resource slug "${r.slug}"` });
    }
    seen.add(r.slug);
    if (!nonEmpty(r.title)) issues.push({ course: "learn", where, message: "resource has no title" });
    if (!nonEmpty(r.summary)) issues.push({ course: "learn", where, message: "resource has no summary" });
    if (!nonEmpty(r.body)) issues.push({ course: "learn", where, message: "resource has no body" });
    for (const rel of r.related ?? []) {
      if (!slugSet.has(rel)) {
        issues.push({ course: "learn", where, message: `related "${rel}" has no matching resource` });
      }
    }
    for (const s of extractLearnSlugs(r.body)) {
      if (!slugSet.has(s)) {
        issues.push({ course: "learn", where, message: `body links to /learn/${s}, which doesn't exist` });
      }
    }
  }
  return issues;
}

/**
 * Every Deep-Dive reference a course makes — a lesson's `deepDives` list or an
 * inline `/learn/<slug>` link in its notes/readings — must resolve to a resource.
 */
export function validateDeepDiveLinks(
  courses: Course[],
  resources: Resource[],
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const slugSet = new Set(resources.map((r) => r.slug));
  for (const course of courses) {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        const where = `unit ${unit.slug} / lesson ${lesson.slug}`;
        for (const s of lessonReferencedSlugs(lesson)) {
          if (!slugSet.has(s)) {
            issues.push({ course: course.slug, where, message: `Deep-Dive link "/learn/${s}" has no resource` });
          }
        }
      }
    }
  }
  return issues;
}

/**
 * Programs/categories/credentials integrity (HANDOFF §19). Verifies the catalog
 * layer that sits on top of courses: unique slugs, resolvable category, every
 * "active" course slot maps to an authored Course, every "soon" slot carries its
 * own title, unique credential ids (incl. derived badges), and every credential
 * requirement resolves to a declared course/program. Pure — pass the data in.
 */
export function validatePrograms(
  programs: Program[],
  categories: Category[],
  courses: Course[],
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const scope = "programs";

  // Categories: unique slugs + a title.
  const catSlugs = new Set<string>();
  for (const c of categories) {
    const where = `category ${c.slug}`;
    if (catSlugs.has(c.slug)) issues.push({ course: scope, where, message: `duplicate category slug "${c.slug}"` });
    catSlugs.add(c.slug);
    if (!nonEmpty(c.title)) issues.push({ course: scope, where, message: "category has no title" });
  }

  const authored = new Set(courses.map((c) => c.slug));
  const declared = new Set<string>(); // every course slug any program references
  const allProgramSlugs = new Set(programs.map((p) => p.slug));
  for (const p of programs) for (const ref of p.courses) declared.add(ref.slug);

  const seenProgram = new Set<string>();
  const credentialIds = new Map<string, string>();
  const coursesInAProgram = new Set<string>();

  for (const p of programs) {
    const where = `program ${p.slug}`;
    if (seenProgram.has(p.slug)) issues.push({ course: scope, where, message: `duplicate program slug "${p.slug}"` });
    seenProgram.add(p.slug);

    if (!nonEmpty(p.title)) issues.push({ course: scope, where, message: "program has no title" });
    if (!nonEmpty(p.tagline)) issues.push({ course: scope, where, message: "program has no tagline" });
    if (!catSlugs.has(p.category)) issues.push({ course: scope, where, message: `category "${p.category}" has no matching category` });
    if (p.courses.length === 0) issues.push({ course: scope, where, message: "program has no courses" });

    const seenCourse = new Set<string>();
    for (const ref of p.courses) {
      const rw = `${where} / course ${ref.slug}`;
      if (seenCourse.has(ref.slug)) issues.push({ course: scope, where: rw, message: `duplicate course "${ref.slug}" in program` });
      seenCourse.add(ref.slug);
      coursesInAProgram.add(ref.slug);
      if (ref.status === "active" && !authored.has(ref.slug)) {
        issues.push({ course: scope, where: rw, message: `course is "active" but no authored course has slug "${ref.slug}"` });
      }
      if (ref.status === "soon" && !nonEmpty(ref.title)) {
        issues.push({ course: scope, where: rw, message: `"soon" course needs a title (no authored course to borrow one)` });
      }
    }

    // Credentials: ids unique across all programs (incl. derived badges); requirements resolve.
    const creds = [...programBadges(p), ...(p.certificates ?? [])];
    for (const cr of creds) {
      const cw = `${where} / credential ${cr.id}`;
      const prev = credentialIds.get(cr.id);
      if (prev) issues.push({ course: scope, where: cw, message: `duplicate credential id "${cr.id}" (also in ${prev})` });
      else credentialIds.set(cr.id, where);
      if (!nonEmpty(cr.title)) issues.push({ course: scope, where: cw, message: "credential has no title" });
      const req = cr.requires;
      if (req.type === "course") {
        if (!declared.has(req.courseSlug)) issues.push({ course: scope, where: cw, message: `requires course "${req.courseSlug}" which no program declares` });
      } else if (req.type === "courses") {
        for (const s of req.courseSlugs) {
          if (!declared.has(s)) issues.push({ course: scope, where: cw, message: `requires course "${s}" which no program declares` });
        }
      } else if (!allProgramSlugs.has(req.programSlug)) {
        issues.push({ course: scope, where: cw, message: `requires program "${req.programSlug}" which doesn't exist` });
      }
    }
  }

  // Soft: every authored course should live in at least one program (no orphans).
  for (const c of courses) {
    if (!coursesInAProgram.has(c.slug)) {
      issues.push({ course: scope, where: `course ${c.slug}`, message: `authored course "${c.slug}" isn't in any program` });
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
