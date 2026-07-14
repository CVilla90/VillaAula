/**
 * VillaAula content model (MVP, file-backed).
 *
 * Mirrors the DB schema in HANDOFF.md §7: Content and Question are the reusable
 * primitives; an Exercise is an ordered list of items that each reference either
 * a Content block or a Question. For the file MVP we inline them (no shared id
 * pool yet) — moving to Postgres later is mechanical because the shapes match.
 */

import type { LocalizedText } from "@/lib/i18n";

export type QuestionType =
  | "open"
  | "multiple_choice"
  | "true_false"
  | "match"
  | "speaking"
  | "draft_compare";

/** Open input — graded by normalization against accepted answers (no AI in MVP). */
export interface OpenConfig {
  acceptedAnswers: string[];
  /** Soft max length for the input field. */
  charLimit?: number;
  /** Compare with case + punctuation intact (default false = normalized). */
  caseSensitive?: boolean;
  /** Placeholder shown in the empty field. */
  placeholder?: LocalizedText;
}

export interface ChoiceOption {
  id: string;
  text: LocalizedText;
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
  left: LocalizedText;
  right: LocalizedText;
}

export interface MatchConfig {
  pairs: MatchPair[];
}

/**
 * Speaking input — the learner records themselves saying `target`; the audio is
 * transcribed by Gemini and the transcript is graded with the same normalization
 * as an open answer (lenient by design at low levels — HANDOFF §18.C). No AI
 * "score": correctness is deterministic via `acceptedAnswers`.
 */
export interface SpeakingConfig {
  /** What the learner is asked to say, shown in the prompt area. */
  target: string;
  /** Transcripts that count as correct (normalized match), like OpenConfig. */
  acceptedAnswers: string[];
  /** UI cap on recording length (seconds). */
  maxSeconds?: number;
}

/**
 * Draft & compare (HANDOFF §20.2) — a **non-graded** writing exercise. The learner
 * drafts their own real text (a LinkedIn headline, an About summary, a message),
 * then reveals a strong `model` answer and a self-check `checklist` to compare
 * against. There's no right answer to grade against; it builds the muscle (and, in
 * Phase 2, feeds the Career Kit). It auto-counts as "attempted" once revealed.
 */
export interface DraftCompareConfig {
  /** Placeholder for the learner's textarea. */
  placeholder?: LocalizedText;
  /** A strong model answer, revealed after the learner writes their draft. */
  model: LocalizedText;
  /** Self-check bullet points shown alongside the model. */
  checklist?: LocalizedText[];
  /** Soft max length for the textarea. */
  charLimit?: number;
}

export type QuestionConfig =
  | OpenConfig
  | MultipleChoiceConfig
  | TrueFalseConfig
  | MatchConfig
  | SpeakingConfig
  | DraftCompareConfig;

export interface Question {
  id: string;
  type: QuestionType;
  /** The thing the learner reads and answers. */
  prompt: LocalizedText;
  hint?: LocalizedText;
  points?: number;
  config: QuestionConfig;
  /** Shown after the learner answers (the "why"). */
  explanation?: LocalizedText;
}

export type ContentType = "reading" | "image" | "svg" | "audio";

export interface Content {
  id: string;
  type: ContentType;
  title?: LocalizedText;
  /** Markdown / plain text for readings. */
  body?: LocalizedText;
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
  /**
   * Optional Spanish version of `grammarNote`, shown when the learner flips the
   * EN/ES toggle in `GrammarNote`. The prose is translated, but **grammar terms,
   * target words, and example sentences stay in English** (the language being
   * learned). When absent, the toggle doesn't render.
   */
  grammarNoteEs?: string;
  /**
   * Optional "Go deeper →" links — slugs of `Resource` explainers (HANDOFF §18.J)
   * shown as chips under the grammar note. Each must resolve to a real resource
   * (the validator enforces this).
   */
  deepDives?: string[];
  exercise: Exercise;
}

/**
 * A reference table — the "just show me the forms" artifact learners keep asking for
 * (verb forms, pronouns, tenses…). Deliberately plain data, not markdown, so it can be
 * rendered as a real, scrollable, accessible `<table>` instead of ASCII art. Cell text
 * goes through the same inline formatter as everything else, so **bold** / `code` work.
 */
export interface GrammarTable {
  title: string;
  /** One line of context above the table. */
  caption?: string;
  columns: string[];
  /** Each row must have exactly `columns.length` cells (the validator enforces it). */
  rows: string[][];
  /** A short "watch out" note under the table. */
  note?: string;
}

/**
 * A wiki page — a standalone, reusable reference article (HANDOFF §18.J "Deep Dives",
 * generalized in §22 into the shared **Wiki**). Lives in `src/content/resources/`,
 * surfaced at `/wiki/[wiki]` and `/wiki/[wiki]/[slug]`, and linked from courses via a
 * lesson's `deepDives` or inline `[label](/learn/slug)` links. Guest-readable reference
 * (not graded), so no login gate. §9 copyright applies: original wording only.
 *
 * A page carries prose (`body`), tables (`tables`), or both — an explainer, a cheat
 * sheet, or an explainer *with* the cheat sheet at the end.
 */
export interface Resource {
  /** Globally unique, stable, kebab-case (e.g. "present-perfect"). The URL slug. */
  slug: string;
  title: string;
  /** One-line teaser shown on the wiki index and link previews. */
  summary: string;
  /**
   * Which wiki this page belongs to (`Wiki.slug`) — the universe of related courses
   * that share it. Every course in a program with the same `wiki` links to these pages.
   */
  wiki: string;
  /** Section heading within the wiki index, e.g. "Verbs" or "Pronouns & determiners". */
  section?: string;
  /** Rich markdown body (longer than a grammarNote). May use [label](/learn/slug) links. */
  body?: string;
  /** Reference tables, rendered after the body. */
  tables?: GrammarTable[];
  /** Roughly which course level the topic belongs to, for ordering within a section. */
  level?: number;
  /** Free-form topic tags for grouping/filtering. */
  tags?: string[];
  /** Slugs of related pages, shown as "Related" links. */
  related?: string[];
}

/**
 * A **Wiki** — one shared reference space for a *universe* of related courses (HANDOFF
 * §22). The English ladder (Levels 1–6) and English for Architects are different courses
 * in different programs, but they teach the same language, so they share one grammar
 * wiki: a page written once is reachable from every course that touches the topic.
 *
 * A `Program` points at a wiki by slug; several programs may point at the same one.
 */
export interface Wiki {
  /** Stable kebab slug — the `/wiki/[slug]` route. */
  slug: string;
  title: string;
  /** The subject-line, e.g. "Every rule, in one place." */
  tagline: string;
  summary: string;
  /** Section order on the index. Sections not listed here fall to the end, alphabetically. */
  sections?: string[];
  /** How the wiki calls its pages ("Grammar", "Reference"). Default "Reference". */
  noun?: string;
}

/* ----------------------- programs & credentials (HANDOFF §19) ----------------------- */

/**
 * Ladder = an ordered climb with a recommended next step (ESL A1→C2); collection =
 * an unordered grid of independent courses.
 */
export type ProgramKind = "ladder" | "collection";

/**
 * One course slot in a Program: a reference to a Course by slug, plus per-program
 * display dressing. `status:"active"` resolves to an authored Course; `status:"soon"`
 * is a stub for a course that's planned but not authored yet — it must then carry its
 * own `title`/`focus`, since there's no Course to borrow them from.
 */
export interface ProgramCourseRef {
  /** Course slug. Resolves to a real Course when `status:"active"`. */
  slug: string;
  status: "active" | "soon";
  /** Per-program label, e.g. the CEFR band "A1" for the English ladder. */
  band?: string;
  /** Title for "soon" stubs (active slots use the Course's own title). */
  title?: string;
  /** Short focus/spine label (for "soon" stubs, or to override a card label). */
  focus?: string;
}

/** A badge is earned for one course; a certificate for a milestone or a whole program. */
export type CredentialKind = "badge" | "certificate";

/** What earns a credential. */
export type CredentialRequirement =
  /** Finish one course. */
  | { type: "course"; courseSlug: string }
  /** Finish every listed course (e.g. an ESL CEFR-band milestone). */
  | { type: "courses"; courseSlugs: string[] }
  /** Finish every authored course in the program (the capstone). */
  | { type: "program"; programSlug: string };

/**
 * A credential a learner can earn (HANDOFF §19.3). A **badge** is light and frequent
 * (one per course); a **certificate** is the bigger, shareable artifact for a CEFR
 * milestone or a whole program. The artifact generator (SVG + the public `/c/[id]`
 * page) is Phase B — for Phase A these are just data so the model can ship.
 */
export interface Credential {
  /** Stable, kebab-case, globally unique — the namespace for the public `/c/[id]` URL. */
  id: string;
  kind: CredentialKind;
  title: string;
  subtitle?: string;
  requires: CredentialRequirement;
}

/**
 * A learning **Program** — the catalog primitive (HANDOFF §19). Groups one or more
 * Courses under a shared identity and credential(s). The platform (VillaAula) stays
 * topic-agnostic; a Program (e.g. "English, A1→C2") is where the subject-matter voice
 * lives. A single-course program is valid (its UI collapses straight into the course).
 * File-backed today, like Course/Resource; maps cleanly to Postgres rows under §18.I.
 * Course↔Program is many-to-many — a course slug may appear in several programs.
 */
export interface Program {
  /** Stable kebab slug — the `/programs/[slug]` route. */
  slug: string;
  title: string;
  /** Program-voice tagline (the subject line, e.g. "English that finally clicks"). */
  tagline: string;
  /** Longer blurb for the program dashboard. */
  summary: string;
  kind: ProgramKind;
  /** Category slug this program belongs to (e.g. "languages"). */
  category: string;
  /** The courses in this program, in recommended order. */
  courses: ProgramCourseRef[];
  /** How this program dresses up the generic "Course", e.g. ESL → "Level". Default "Course". */
  courseNoun?: string;
  /**
   * The `Wiki.slug` this program's courses share (HANDOFF §22). Programs that teach the
   * same subject point at the same wiki — that's what makes a "universe" of related
   * courses: English A1→C2 and English for Architects both read from the `english` wiki.
   */
  wiki?: string;
  /** Hand-authored certificates (milestones + capstone). Course badges are derived. */
  certificates?: Credential[];
}

/**
 * A cross-cutting Category/Topic (Languages · Cloud & Certs · Career) — separate from
 * Programs, used to group them on the catalog. Phase A seeds just one ("Languages").
 */
export interface Category {
  /** Stable kebab slug — keys the future `/topics/[tag]` browse. */
  slug: string;
  title: string;
  /** Optional one-liner for the category section header. */
  blurb?: string;
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
  /**
   * When true, the course's exercise/content fields are authored bilingually
   * (`LocalizedText` `{en, es}`) and the lesson player shows an EN|ES toggle
   * (HANDOFF §20.5). English-only courses omit this (their fields are plain strings).
   */
  bilingual?: boolean;
  /** Optional Spanish version of `intro`, shown when bilingual + ES is selected. */
  introEs?: string;
  /**
   * Label for the collapsible lesson note (the ESL "grammar" panel). Defaults to
   * "Grammar — show me the rule"; a non-ESL course can rename it ("Key idea — the why").
   */
  noteLabel?: string;
  units: Unit[];
  finalTest?: FinalTest;
  conclusion?: CourseConclusion;
  diploma?: DiplomaConfig;
}
