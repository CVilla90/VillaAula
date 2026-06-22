/**
 * Progress keys + localStorage primitives. Pure (no React) so both the client
 * ProgressProvider and server code can share the key builders.
 *
 * A "completed" unit is identified by a string key:
 *   - lesson:     "courseSlug/unitSlug/lessonSlug"
 *   - final test: "final:courseSlug"
 *   - course:     "course:courseSlug"
 * The DB `Progress.key` column stores these verbatim, so signed-in progress and
 * localStorage progress use one shared key space (migration = a straight insert).
 */

const KEY = "wishub:completed";

export function lessonKey(
  courseSlug: string,
  unitSlug: string,
  lessonSlug: string,
): string {
  return `${courseSlug}/${unitSlug}/${lessonSlug}`;
}

export function finalTestKey(courseSlug: string): string {
  return `final:${courseSlug}`;
}

export function courseKey(courseSlug: string): string {
  return `course:${courseSlug}`;
}

export function isCourseComplete(
  completed: Record<string, boolean>,
  courseSlug: string,
  lessonKeys: string[],
): boolean {
  return (
    lessonKeys.every((key) => completed[key]) &&
    Boolean(completed[finalTestKey(courseSlug)])
  );
}

/* ----------------------------- localStorage ---------------------------- */

export function getLocalCompleted(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(
      window.localStorage.getItem(KEY) ?? "{}",
    ) as Record<string, boolean>;
  } catch {
    return {};
  }
}

export function addLocalKey(key: string): void {
  if (typeof window === "undefined") return;
  const cur = getLocalCompleted();
  if (cur[key]) return;
  cur[key] = true;
  window.localStorage.setItem(KEY, JSON.stringify(cur));
}

/** Called after a guest's progress has been merged into their new account. */
export function clearLocalCompleted(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function keysToRecord(keys: string[]): Record<string, boolean> {
  return Object.fromEntries(keys.map((k) => [k, true]));
}
