import type { Course } from "@/lib/types";
import { level1 } from "@/content/level1";
import { level2 } from "@/content/level2";

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

export const courses: Course[] = [level1, level2];

const courseBySlug = new Map(courses.map((c) => [c.slug, c]));
const courseByLevel = new Map(courses.map((c) => [c.level, c]));

export function getCourse(slug: string): Course | undefined {
  return courseBySlug.get(slug);
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
 * NOTE (content track, REFACTOR.md §6): levels 2–4 focus labels are provisional —
 * the real curricula (reference/s2–s4) replace them when those courses are authored.
 */
const LEVEL_META: Record<number, { title: string; focus: string }> = {
  1: { title: "Foundations", focus: "be · routines · comparisons · can" },
  2: { title: "Everyday Stories", focus: "past · future · some / any" },
  3: { title: "Telling More", focus: "present perfect · adverbs · because" },
  4: { title: "Real Conversations", focus: "conditionals · should · phrasal verbs" },
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
