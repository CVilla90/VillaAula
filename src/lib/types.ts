/**
 * WISHUB content model (MVP, file-backed).
 *
 * Mirrors the DB schema in HANDOFF.md §7: Content and Question are the reusable
 * primitives; an Exercise is an ordered list of items that each reference either
 * a Content block or a Question. For the file MVP we inline them (no shared id
 * pool yet) — moving to Postgres later is mechanical because the shapes match.
 */

export type QuestionType =
  | "open"
  | "multiple_choice"
  | "true_false"
  | "match";

/** Open input — graded by normalization against accepted answers (no AI in MVP). */
export interface OpenConfig {
  acceptedAnswers: string[];
  /** Soft max length for the input field. */
  charLimit?: number;
  /** Compare with case + punctuation intact (default false = normalized). */
  caseSensitive?: boolean;
  /** Placeholder shown in the empty field. */
  placeholder?: string;
}

export interface ChoiceOption {
  id: string;
  text: string;
}

export interface MultipleChoiceConfig {
  options: ChoiceOption[];
  /** One id for single-answer; multiple ids for multi-answer. */
  correctIds: string[];
  shuffle?: boolean;
}

export interface TrueFalseConfig {
  correct: boolean;
}

export interface MatchPair {
  left: string;
  right: string;
}

export interface MatchConfig {
  pairs: MatchPair[];
}

export type QuestionConfig =
  | OpenConfig
  | MultipleChoiceConfig
  | TrueFalseConfig
  | MatchConfig;

export interface Question {
  id: string;
  type: QuestionType;
  /** The thing the learner reads and answers. */
  prompt: string;
  hint?: string;
  points?: number;
  config: QuestionConfig;
  /** Shown after the learner answers (the "why"). */
  explanation?: string;
}

export type ContentType = "reading" | "image" | "svg" | "audio";

export interface Content {
  id: string;
  type: ContentType;
  title?: string;
  /** Markdown / plain text for readings. */
  body?: string;
  /** For audio/image assets (pre-generated; Phase 2). */
  mediaUrl?: string;
  /** Text transcript for audio/read-aloud blocks. */
  transcript?: string;
  /** Voice label from the authoring-time TTS pipeline. */
  voice?: string;
  /** Decorative emoji for lightweight imagery. */
  emoji?: string;
}

export type ExerciseItem =
  | { kind: "content"; content: Content }
  | { kind: "question"; question: Question };

export interface Exercise {
  id: string;
  title: string;
  items: ExerciseItem[];
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  /** Short grammar focus, e.g. "am / is / are". */
  topic: string;
  /** Markdown lesson, hidden behind an expander by default. */
  grammarNote: string;
  exercise: Exercise;
}

export interface Unit {
  id: string;
  slug: string;
  number: number;
  title: string;
  summary: string;
  lessons: Lesson[];
}

export interface FinalTest {
  id: string;
  slug: string;
  title: string;
  intro: string;
  passingScore: number;
  exercise: Exercise;
}

export interface CourseConclusion {
  title: string;
  body: string;
  nextSteps: string[];
}

export interface DiplomaConfig {
  title: string;
  subtitle: string;
  issuer: string;
}

export interface Course {
  id: string;
  slug: string;
  level: number;
  title: string;
  intro: string;
  acceptsGuests: boolean;
  units: Unit[];
  finalTest?: FinalTest;
  conclusion?: CourseConclusion;
  diploma?: DiplomaConfig;
}
