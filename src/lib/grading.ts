/**
 * Deterministic grading for WISHUB (MVP). No AI / no network — just normalization
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

/** `answer` maps each left label to the right label the learner paired with it. */
export function gradeMatch(
  answer: Record<string, string>,
  config: MatchConfig,
): boolean {
  return config.pairs.every((p) => answer[p.left] === p.right);
}

export type QuestionResponse =
  | string // open
  | string[] // multiple_choice
  | boolean // true_false
  | Record<string, string>; // match

/** Single entry point used by the UI. Returns whether the response is correct. */
export function gradeQuestion(q: Question, response: QuestionResponse): boolean {
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
      );
    case "speaking":
      // Speaking is graded asynchronously server-side (lib/ai/gemini.ts) from a
      // transcription, not through this synchronous path.
      return false;
  }
}
