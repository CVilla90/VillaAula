/**
 * Bilingual content (HANDOFF §20.5) — a tiny, dependency-free localization layer.
 *
 * The platform's first programs (English) are authored in a single language, so a
 * field is just a `string`. The LinkedIn program is bilingual EN/ES, so its fields
 * are `{ en, es }`. `LocalizedText` is the union of the two, which means:
 *
 *   - **Existing English content stays plain strings, untouched** — a `string` is a
 *     valid `LocalizedText`, and `t(string)` returns it verbatim.
 *   - **New bilingual content uses `{ en, es }`** and the same `t(value, lang)` call
 *     resolves it, so render sites don't branch on the shape.
 *
 * Resolution falls back to English when a Spanish value is missing, so a partially
 * translated field can never render blank. This generalizes to any future bilingual
 * program (it is not English/Spanish specific beyond the two keys).
 */

export type Lang = "en" | "es";

/** A user-facing string that may be authored once (English) or in both EN and ES. */
export type LocalizedText = string | { en: string; es: string };

/** The bilingual object shape (the non-string arm of LocalizedText). */
export type LocalizedPair = { en: string; es: string };

export function isLocalizedPair(value: LocalizedText): value is LocalizedPair {
  return typeof value === "object" && value !== null && "en" in value;
}

/**
 * Resolve a `LocalizedText` to the requested language. Plain strings pass through;
 * a `{ en, es }` returns the requested language, falling back to `en` when the
 * requested value is empty/missing (so a half-translated field never renders blank).
 */
export function t(value: LocalizedText, lang: Lang = "en"): string {
  if (typeof value === "string") return value;
  const picked = value[lang];
  if (typeof picked === "string" && picked.trim().length > 0) return picked;
  return value.en;
}

/** True when a `LocalizedText` carries a distinct Spanish version (i.e. is bilingual). */
export function hasEs(value: LocalizedText): boolean {
  return isLocalizedPair(value) && value.es.trim().length > 0;
}

/**
 * A `LocalizedText` is "non-empty" when its resolved English (the always-present
 * arm) has content. Used by the content validator so a bilingual field can't ship
 * with a blank prompt/option. For a pair, both arms must be non-empty.
 */
export function localizedNonEmpty(value: unknown): value is LocalizedText {
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "object" && value !== null && "en" in value && "es" in value) {
    const v = value as LocalizedPair;
    return (
      typeof v.en === "string" &&
      v.en.trim().length > 0 &&
      typeof v.es === "string" &&
      v.es.trim().length > 0
    );
  }
  return false;
}
