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

const KEY = "villaaula:completed";
/** Older brand key(s) read once and migrated forward, so existing local progress survives the rebrand. */
const LEGACY_KEYS = ["wishub:completed"];

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
    const raw = window.localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Record<string, boolean>;
    // One-time migration from a previous brand key (e.g. the old "wishub:completed").
    for (const legacy of LEGACY_KEYS) {
      const old = window.localStorage.getItem(legacy);
      if (old) {
        window.localStorage.setItem(KEY, old);
        window.localStorage.removeItem(legacy);
        return JSON.parse(old) as Record<string, boolean>;
      }
    }
    return {};
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
