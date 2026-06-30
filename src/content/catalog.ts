import type { Course, Question, Resource } from "@/lib/types";
import { level1 } from "@/content/level1";
import { level2 } from "@/content/level2";
import { level3 } from "@/content/level3";
import { level4 } from "@/content/level4";
import { level5 } from "@/content/level5";
import { level6 } from "@/content/level6";
import { linkedin } from "@/content/linkedin";
import { englishForArchitects } from "@/content/english-for-architects";
import { lessonReferencedSlugs } from "@/content/links";
import { getResource } from "@/content/resources";

/**
 * The course catalog — the single source of truth for "what courses exist."
 *
 * Authored courses live as `Course` data (src/content/*) and are registered in
 * `courses` below. Add a `Course` here and it's available to `getCourse` and to the
 * programs that reference its slug (`content/programs`). The ladder/landing/dashboard
 * all render from that program layer now — see HANDOFF §19.
 */

export const courses: Course[] = [
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  linkedin,
  englishForArchitects,
];

const courseBySlug = new Map(courses.map((c) => [c.slug, c]));

export function getCourse(slug: string): Course | undefined {
  return courseBySlug.get(slug);
}

/**
 * Find a question by id across every course. Used server-side (e.g. the speaking
 * analyze route) so grading reads the authoritative config from content, never
 * values supplied by the client. Lazily built + cached.
 */
let questionIndex: Map<string, Question> | null = null;
export function getQuestionById(id: string): Question | undefined {
  if (!questionIndex) {
    questionIndex = new Map();
    for (const course of courses) {
      const exercises = [
        ...course.units.flatMap((u) => u.lessons.map((l) => l.exercise)),
        ...(course.finalTest ? [course.finalTest.exercise] : []),
      ];
      for (const ex of exercises) {
        for (const item of ex.items) {
          if (item.kind === "question") questionIndex.set(item.question.id, item.question);
        }
      }
    }
  }
  return questionIndex.get(id);
}

/** A pointer back to a lesson that references a Deep Dive (for "used in" backlinks). */
export interface LessonRef {
  courseSlug: string;
  level: number;
  unitSlug: string;
  lessonSlug: string;
  lessonTitle: string;
}

/**
 * Lessons that link to a given Deep Dive — via their `deepDives` list or an inline
 * `/learn/<slug>` link. Powers the "Used in these lessons" backlinks on a dive page.
 */
export function lessonsUsingResource(slug: string): LessonRef[] {
  const out: LessonRef[] = [];
  for (const course of courses) {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        if (lessonReferencedSlugs(lesson).includes(slug)) {
          out.push({
            courseSlug: course.slug,
            level: course.level,
            unitSlug: unit.slug,
            lessonSlug: lesson.slug,
            lessonTitle: lesson.title,
          });
        }
      }
    }
  }
  return out;
}

/**
 * The Deep Dives a course covers — every resource its lessons reference (through a
 * lesson's `deepDives` list or an inline `/learn/<slug>` link), de-duplicated and
 * in resource order. The association is derived, so a single dive can belong to
 * several courses at once (reuse) without any extra bookkeeping. Surfaced on the
 * course page (`/course/[slug]`) so dives are discovered in the context of a course.
 */
export function courseDeepDives(course: Course): Resource[] {
  const slugs = new Set<string>();
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      for (const s of lessonReferencedSlugs(lesson)) slugs.add(s);
    }
  }
  return [...slugs]
    .map((s) => getResource(s))
    .filter((r): r is Resource => Boolean(r));
}

// NOTE (HANDOFF §19): the ESL-specific "level catalog" (levelCatalog / LEVEL_META /
// levelRange / TOTAL_LEVELS) that used to live here is gone — the ladder is now
// program data (`content/programs`, the English program). This module stays focused
// on the course primitives + Deep-Dive associations.
