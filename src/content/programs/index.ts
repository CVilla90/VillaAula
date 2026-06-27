import type {
  Category,
  Course,
  Credential,
  Program,
  ProgramCourseRef,
} from "@/lib/types";
import { getCourse } from "@/content/catalog";
import { englishProgram } from "./english";
import { linkedinProgram } from "./linkedin";
import { categories } from "./categories";

/**
 * The **program catalog** (HANDOFF §19) — the single source of truth for "what
 * programs exist." Mirrors content/catalog.ts: register a Program here and it lights
 * up the catalog/dashboard automatically. File-backed (no DB). Course↔Program is
 * many-to-many — a course slug may appear in several programs' `courses` lists.
 */
export const programs: Program[] = [englishProgram, linkedinProgram];

export { categories };

const programBySlug = new Map(programs.map((p) => [p.slug, p]));
const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));

/**
 * The program the platform leads with today (HANDOFF §19.4 — "English-first now").
 * The home page and default metadata feature this one. Sourced from data, not
 * hardcoded copy, so flipping to a neutral multi-program home later is a one-liner.
 */
export const FEATURED_PROGRAM_SLUG = "english";

export function getProgram(slug: string): Program | undefined {
  return programBySlug.get(slug);
}

export function featuredProgram(): Program {
  return getProgram(FEATURED_PROGRAM_SLUG) ?? programs[0];
}

/**
 * The CEFR-style span a ladder program covers, e.g. "A1 → C2" — derived from the
 * first and last course bands. Empty for a program whose courses carry no band.
 */
export function programBand(program: Program): string {
  const bands = program.courses.map((c) => c.band).filter((b): b is string => Boolean(b));
  if (bands.length === 0) return "";
  if (bands.length === 1) return bands[0];
  return `${bands[0]} → ${bands[bands.length - 1]}`;
}

/** Human label for the program's ready courses, e.g. "Levels 1–4" / "Level 1". */
export function activeCourseLabel(program: Program): string {
  const noun = program.courseNoun ?? "Course";
  const active = resolveProgramCourses(program)
    .filter((c) => c.status === "active")
    .map((c) => c.slug);
  if (active.length === 0) return "";
  if (active.length === 1) return `${noun} ${active[0]}`;
  return `${noun}s ${active[0]}–${active[active.length - 1]}`;
}

/** How many courses in the program are authored and playable now. */
export function activeCourseCount(program: Program): number {
  return resolveProgramCourses(program).filter((c) => c.status === "active").length;
}

export function getCategory(slug: string): Category | undefined {
  return categoryBySlug.get(slug);
}

/** The first program that contains this course (for "back to program" links). */
export function programForCourse(courseSlug: string): Program | undefined {
  return programs.find((p) => p.courses.some((c) => c.slug === courseSlug));
}

/** Programs grouped under a category, in registration order. */
export function programsInCategory(slug: string): Program[] {
  return programs.filter((p) => p.category === slug);
}

/**
 * A program course resolved for display: the authored Course when present, plus the
 * effective title/focus/band/href and an `active | soon` status. Centralizes the
 * "real course vs soon stub" merge so pages don't each re-implement it. Status is
 * derived from whether the Course actually resolves, so a typo'd "active" slot can't
 * render a dead link (the validator separately flags the declared/real mismatch).
 */
export interface ResolvedProgramCourse {
  ref: ProgramCourseRef;
  status: "active" | "soon";
  slug: string;
  title: string;
  focus?: string;
  band?: string;
  course?: Course;
  /** `/course/{slug}` when active; undefined while "soon". */
  href?: string;
}

export function resolveProgramCourse(ref: ProgramCourseRef): ResolvedProgramCourse {
  const course = ref.status === "active" ? getCourse(ref.slug) : undefined;
  return {
    ref,
    status: course ? "active" : "soon",
    slug: ref.slug,
    title: ref.title ?? course?.title ?? `Course ${ref.slug}`,
    focus: ref.focus,
    band: ref.band,
    course,
    href: course ? `/course/${course.slug}` : undefined,
  };
}

export function resolveProgramCourses(program: Program): ResolvedProgramCourse[] {
  return program.courses.map(resolveProgramCourse);
}

/** The first course in a program that isn't authored yet — the "recommended next" hint. */
export function firstActiveCourse(program: Program): ResolvedProgramCourse | undefined {
  return resolveProgramCourses(program).find((c) => c.status === "active");
}

/**
 * A program's **course badges** — derived, one per course, so they can never drift
 * from the ladder. A single-course program gets no badge (the certificate covers it),
 * matching §19.3.
 */
export function programBadges(program: Program): Credential[] {
  if (program.courses.length < 2) return [];
  const noun = program.courseNoun ?? "Course";
  return program.courses.map((ref): Credential => ({
    id: `${program.slug}-${ref.slug}`,
    kind: "badge",
    title: `${program.title} · ${noun} ${ref.slug}`,
    subtitle: ref.band,
    requires: { type: "course", courseSlug: ref.slug },
  }));
}

/** A program's hand-authored certificates (CEFR milestones + the capstone). */
export function programCertificates(program: Program): Credential[] {
  return program.certificates ?? [];
}

/** Every credential the program defines — derived badges + authored certificates. */
export function programCredentials(program: Program): Credential[] {
  return [...programBadges(program), ...programCertificates(program)];
}
