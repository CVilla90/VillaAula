import type { Lesson } from "@/lib/types";
import type { LocalizedText } from "@/lib/i18n";

/** Every string variant of a LocalizedText (both EN and ES for a bilingual field). */
function allText(value: LocalizedText | undefined): string[] {
  if (value == null) return [];
  return typeof value === "string" ? [value] : [value.en, value.es];
}

/**
 * Pull every `/learn/<slug>` target out of the `[label](/learn/slug)` links in a
 * markdown string. Shared by the catalog (backlinks), the validator (dead-link
 * guard), and RichText. Kept dependency-free (type-only import) so it's cheap to
 * import anywhere.
 */
const LEARN_LINK_RE = /\[[^\]]+\]\(\/learn\/([a-z0-9-]+)\)/g;

export function extractLearnSlugs(text: string): string[] {
  const out: string[] = [];
  let m: RegExpExecArray | null;
  LEARN_LINK_RE.lastIndex = 0;
  while ((m = LEARN_LINK_RE.exec(text)) !== null) out.push(m[1]);
  return out;
}

/**
 * Every Deep-Dive slug a lesson references — its `deepDives` list plus any inline
 * `/learn/<slug>` links in the grammar notes (EN + ES) or reading bodies.
 */
export function lessonReferencedSlugs(lesson: Lesson): string[] {
  const slugs = new Set<string>(lesson.deepDives ?? []);
  const texts = [lesson.grammarNote, lesson.grammarNoteEs ?? ""];
  for (const item of lesson.exercise.items) {
    if (item.kind === "content") texts.push(...allText(item.content.body));
  }
  for (const t of texts) for (const s of extractLearnSlugs(t)) slugs.add(s);
  return [...slugs];
}
