import type { Course, Question, Resource } from "@/lib/types";
import { level1 } from "@/content/level1";
import { level2 } from "@/content/level2";
import { level3 } from "@/content/level3";
import { level4 } from "@/content/level4";
import { lessonReferencedSlugs } from "@/content/links";
import { getResource } from "@/content/resources";

/**
 * The course catalog — the single source of truth for "what levels exist."
 *
 * Authored courses live as `Course` data (src/content/*) and are registered in
 * `courses` below. The landing page and /levels render from `levelCatalog`, which
 * merges the real courses with placeholder entries for levels that aren't authored
 * yet. Add a `Course` here and its card lights up everywhere automatically — no
 * page edits. (Previously the level cards were a hand-typed array duplicated across
 * two pages; see REFACTOR.md F1.)
 */

export const courses: Course[] = [level1, level2, level3, level4];

const courseBySlug = new Map(courses.map((c) => [c.slug, c]));
const courseByLevel = new Map(courses.map((c) => [c.level, c]));

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
 * course page (`/level/[slug]`) so dives are discovered in the context of a course.
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

/* --------------------------- level catalog --------------------------- */

export type LevelStatus = "active" | "soon";

export interface LevelCatalogEntry {
  level: number;
  /** Route slug. For "soon" levels this is the slug the course will claim. */
  slug: string;
  title: string;
  /** Short grammar-spine label shown on the card. */
  focus: string;
  status: LevelStatus;
  /** `/level/{slug}` when active; undefined while "soon". */
  href?: string;
}

/** How many levels the program spans end to end (each is a 4-unit course). */
export const TOTAL_LEVELS = 4;

/**
 * Presentation metadata for every level. The `title` here is only used for levels
 * that aren't authored yet — an active level's title comes from its `Course`, so it
 * can never drift. `focus` is the one home for each card's grammar-spine label.
 *
 * NOTE (content track, REFACTOR.md §6): all four levels are now authored from the
 * real curricula (reference/s1–s4, spines in CURRICULA_SPINE.md). The program is
 * content-complete end to end (Level 1 → Level 4).
 */
const LEVEL_META: Record<number, { title: string; focus: string }> = {
  1: { title: "Foundations", focus: "be · routines · comparisons · can" },
  2: { title: "Everyday Stories", focus: "habits · can · going to · quantity · past" },
  3: {
    title: "Telling More",
    focus: "past continuous · present perfect · conditionals · modals",
  },
  4: {
    title: "Real Conversations",
    focus: "reported speech · conditionals · gerunds & infinitives · linking words",
  },
};

export const levelCatalog: LevelCatalogEntry[] = Array.from(
  { length: TOTAL_LEVELS },
  (_, i): LevelCatalogEntry => {
    const level = i + 1;
    const meta = LEVEL_META[level];
    const course = courseByLevel.get(level);
    if (course) {
      return {
        level,
        slug: course.slug,
        title: course.title,
        focus: meta.focus,
        status: "active",
        href: `/level/${course.slug}`,
      };
    }
    return { level, slug: String(level), title: meta.title, focus: meta.focus, status: "soon" };
  },
);

export const activeCourseCount = levelCatalog.filter(
  (l) => l.status === "active",
).length;

/** Human label for the ready levels, e.g. "Level 1", "Levels 1 and 2", "Levels 1–3". */
export function levelRange(): string {
  const active = levelCatalog
    .filter((l) => l.status === "active")
    .map((l) => l.level)
    .sort((a, b) => a - b);
  if (active.length === 0) return "";
  if (active.length === 1) return `Level ${active[0]}`;
  if (active.length === 2) return `Levels ${active[0]} and ${active[1]}`;
  return `Levels ${active[0]}–${active[active.length - 1]}`;
}
