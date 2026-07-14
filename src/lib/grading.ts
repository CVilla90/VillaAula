/**
 * Deterministic grading for VillaAula (MVP). No AI / no network — just normalization
 * and comparison. A Gemini semantic fallback for open answers is a later phase
 * (HANDOFF §4), gated per-question.
 */

import type {
  Question,
  OpenConfig,
  MultipleChoiceConfig,
  TrueFalseConfig,
  MatchConfig,
} from "./types";
import { t, type Lang } from "./i18n";

/** lowercase, trim, strip accents + punctuation, collapse whitespace. */
export function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // accents
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "") // punctuation/symbols
    .replace(/\s+/g, " ")
    .trim();
}

export function gradeOpen(value: string, config: OpenConfig): boolean {
  if (config.caseSensitive) {
    const v = value.trim();
    return config.acceptedAnswers.some((a) => a.trim() === v);
  }
  const v = normalize(value);
  return config.acceptedAnswers.some((a) => normalize(a) === v);
}

export function gradeMultipleChoice(
  selectedIds: string[],
  config: MultipleChoiceConfig,
): boolean {
  const got = [...new Set(selectedIds)].sort();
  const want = [...new Set(config.correctIds)].sort();
  return got.length === want.length && got.every((id, i) => id === want[i]);
}

export function gradeTrueFalse(value: boolean, config: TrueFalseConfig): boolean {
  return value === config.correct;
}

/**
 * `answer` maps each (resolved) left label to the right label the learner paired
 * with it. Pairs may be bilingual (`LocalizedText`), so both sides are resolved in
 * the active language — the player keys the answer the same way (§20.5).
 */
export function gradeMatch(
  answer: Record<string, string>,
  config: MatchConfig,
  lang: Lang = "en",
): boolean {
  return config.pairs.every((p) => answer[t(p.left, lang)] === t(p.right, lang));
}

/**
 * Two shapes of match question live in the same type:
 *
 * - **one-to-one** (`I→me`, `he→him`) — every right label is used exactly once, so an
 *   answer may only be chosen by one row, and locking a taken choice is a helpful hint.
 * - **classification** (`apple→countable`, `rice→uncountable`, `sandwich→countable`) —
 *   several rows legitimately share a right label.
 *
 * Telling them apart matters: locking taken choices in a classification question makes
 * it **unanswerable** (3 rows, 2 distinct labels → a row that can never be filled), which
 * is exactly what stranded the Level 2 countable/uncountable lesson.
 */
export function isOneToOneMatch(config: MatchConfig, lang: Lang = "en"): boolean {
  const rights = config.pairs.map((p) => t(p.right, lang));
  return new Set(rights).size === rights.length;
}

/** The distinct answers offered in each row's dropdown, sorted so they don't line up
 *  with the prompts (and deterministically, so SSR and hydration agree). */
export function matchOptions(config: MatchConfig, lang: Lang = "en"): string[] {
  return [...new Set(config.pairs.map((p) => t(p.right, lang)))].sort();
}

/**
 * Should `option` be greyed out for the row `left`, given the answers so far? Only in a
 * one-to-one question, where another row has already claimed it. In a classification
 * question every option stays available to every row — see `isOneToOneMatch`.
 */
export function isMatchOptionLocked(
  config: MatchConfig,
  answer: Record<string, string>,
  left: string,
  option: string,
  lang: Lang = "en",
): boolean {
  if (!isOneToOneMatch(config, lang)) return false;
  return Object.entries(answer).some(
    ([otherLeft, chosen]) => otherLeft !== left && chosen === option,
  );
}

export type QuestionResponse =
  | string // open
  | string[] // multiple_choice
  | boolean // true_false
  | Record<string, string>; // match

/** Single entry point used by the UI. Returns whether the response is correct. */
export function gradeQuestion(
  q: Question,
  response: QuestionResponse,
  lang: Lang = "en",
): boolean {
  switch (q.type) {
    case "open":
      return gradeOpen(
        typeof response === "string" ? response : "",
        q.config as OpenConfig,
      );
    case "multiple_choice":
      return gradeMultipleChoice(
        Array.isArray(response) ? (response as string[]) : [],
        q.config as MultipleChoiceConfig,
      );
    case "true_false":
      return gradeTrueFalse(
        typeof response === "boolean" ? response : false,
        q.config as TrueFalseConfig,
      );
    case "match":
      return gradeMatch(
        typeof response === "object" && !Array.isArray(response)
          ? (response as Record<string, string>)
          : {},
        q.config as MatchConfig,
        lang,
      );
    case "speaking":
      // Speaking is graded asynchronously server-side (lib/ai/gemini.ts) from a
      // transcription, not through this synchronous path.
      return false;
    case "draft_compare":
      // Non-graded (HANDOFF §20.2): the learner self-assesses against a model.
      // Revealing the model marks it attempted; it always "counts" as done.
      return true;
  }
}
