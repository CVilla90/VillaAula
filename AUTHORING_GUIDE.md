# VillaAula — Course Authoring Guide

> **Audience: any AI model or agent (Claude, Codex, Gemini, …) asked to add or extend a
> course.** This is the single, self-contained workflow. Follow it top to bottom and your
> course will compile, validate, route, and ship without a human untangling it afterward.
>
> Read **`HANDOFF.md` §0** first for project context (what VillaAula is, who owns it). This
> file is the *how-to-author* contract; HANDOFF is the *what-happened/what's-next* log.

---

## 0. The 60-second mental model

VillaAula is a **content-agnostic micro-LMS**. Everything a learner sees is **file-backed
TypeScript data** under `src/content/` — there is no CMS and (for content) no database. You
author a `Course` object, register it in two index files, run the green gate, and the routes,
dashboards, badges, and diploma all light up automatically.

```
Program  (a catalog entry, e.g. "English A1→C2")   src/content/programs/*.ts
  └─ Course   (one climb/level/module, e.g. "Level 5")   src/content/<name>.ts
       └─ Unit   (a theme, ~4–5 lessons)
            └─ Lesson   (one skim: a note panel + one Exercise)
                 └─ Exercise   (ordered list of items)
                      ├─ Content item   (reading / audio / image / svg)
                      └─ Question item  (open / multiple_choice / true_false /
                                         match / speaking / draft_compare)
  └─ FinalTest (one Exercise of questions + a passing score)
  └─ Conclusion + Diploma
```

The **types are the spec.** `src/lib/types.ts` is short and fully commented — when in doubt,
read it, not your memory. The **validator** (`src/content/validate.ts`) and its **tests**
(`src/content/validate.test.ts`) are the gate: if they pass, the content is structurally sound.

---

## 1. The authoring loop (do these in order)

1. **Decide the shape** — program it belongs to, how many units/lessons, which skills, mono- or
   bilingual. (§3, §7.)
2. **Write the `Course` file** — `src/content/<name>.ts`, exporting one `Course`. (§4, §5.)
3. **Generate any audio** — add clips to `tools/generate_audio.py`, run it, commit the MP3s. (§6.)
4. **Register the course** in `src/content/catalog.ts` (the `courses` array). (§8.)
5. **Wire it into a program** — flip a `status:"soon"` rung to `"active"`, or add a new
   `ProgramCourseRef` / a whole new `Program`. (§8.)
6. **Run the green gate** — `tsc`, `eslint`, `vitest`, `next build`. Fix until clean. (§9.)
7. **Runtime smoke** — start the dev server, open a couple of the new routes. (§9.)
8. **Update `HANDOFF.md` §2** (status log) and bump the test count in `README.md`. (§10.)

Never skip 6. The validator catches duplicate ids, dead audio links, unanswerable questions,
half-translated bilingual fields, and orphan courses *before* a learner ever sees them.

---

## 2. §9 COPYRIGHT — the one hard rule

**Write 100% original prompts, readings, titles, and example text.** Do **not** copy sentences,
reading passages, or exercise items from a textbook, a website, or another course. Invent your
own names, scenarios, and stories.

The single exception is **keywords that are proper nouns or fixed terms** — they stay verbatim
because they *are* the thing being taught:

- A language course: grammar terms (`present perfect`), the target words, and short example
  sentences stay in English even inside Spanish prose.
- A technical course (e.g. AWS): service names (`S3`, `Lambda`), console/CLI terms, and product
  names stay verbatim. Never paste vendor docs/whitepaper prose — explain it in your own words.

This mirrors the bilingual rule (§7): *instructions/prose → target language; keywords/proper
names → leave as-is.*

---

## 3. Choosing the lesson shape

Two patterns are in the repo; pick the one that fits the subject:

### A. Grammar-spine (the A1–B2 / Levels 1–4 pattern)
Each lesson = **one grammar point** + vocab + a skill activity. Works when the *grammar is the
syllabus*. Unit = a loose theme holding ~5 related grammar points. See `src/content/level4.ts`.

### B. Theme + four-skills (the C1–C2 / Levels 5–6 pattern)
At C1/C2 the grammar is mostly consolidation, so the syllabus becomes **nuance, register, idiom,
discourse, fluency** — which only live *inside* the skills. So each **unit is a real-world theme**
and its lessons **rotate the four skills**:

| Lesson | Skill | Built on |
|---|---|---|
| 1 | **Reading** | `reading` Content + `multiple_choice`/`open`/`true_false` (inference, stance) |
| 2 | **Listening** | `audio` Content + comprehension Qs (longer/natural delivery, implied meaning) |
| 3 | **Speaking** | `speaking` question (longer turns, opinion, paraphrase) |
| 4 | **Writing** | `draft_compare` (+ `open`) — structured writing, self-compare to a model |

The collapsible note panel changes job: rename it from "Grammar — show me the rule" to a
**language/nuance note** with `Course.noteLabel` (e.g. `"Language note — the nuance"`). It still
needs `grammarNote` + `grammarNoteEs` on **every** lesson (the test enforces it — §5).

> **Rule of thumb:** no unit should be all-MCQ. Each unit touches every skill at least once; the
> final test mixes skills.

### C. Decision/scenario (a cert-prep pattern, e.g. AWS SAA)
`multiple_choice` (incl. multi-answer) + `match` (item ⇄ use-case) carry the load; `open` for
"name the thing"; `draft_compare` for "sketch a design, compare to a reference." No speaking/
listening. See `CURRICULA_C1_C2_AWS_SAA.md` Part 2 for the worked example.

---

## 4. The canonical ID scheme

IDs must be **globally unique** across the whole catalog (the validator checks this). Use:

```
unit:     c{level}u{n}            e.g. c5u1
lesson:   c{level}u{n}l{n}        e.g. c5u1l2
question: {lessonId}-q{n}         e.g. c5u1l2-q3
content:  {lessonId}-{a|r|i|s}{n} audio/reading/image/svg   e.g. c5u1l2-a1
exercise: {lessonId}-ex           e.g. c5u1l2-ex
final:    c{level}-final, c{level}-final-ex, c{level}-final-q{n}
course:   id "level-5", slug "5"  (slug is the /course/<slug> URL segment)
```

`level` is a number you assign (5, 6, …). For non-level programs (LinkedIn, AWS) the precedent
uses a descriptive course id/slug (`linkedin`, `aws-foundations`) and `level: 1`. Keep the
prefix unique per course so question ids never collide.

---

## 5. Anatomy of a `Course` file

Open `src/content/level4.ts` and read it alongside this — it is the reference implementation.
The skeleton:

```ts
import type { Course } from "@/lib/types";

export const level5: Course = {
  id: "level-5",
  slug: "5",
  level: 5,
  title: "…",
  intro: "…",               // shown on the course page
  acceptsGuests: true,
  noteLabel: "Language note — the nuance",   // optional; renames the note panel
  units: [
    {
      id: "c5u1", slug: "1", number: 1,
      title: "…", summary: "…",
      lessons: [
        {
          id: "c5u1l1", slug: "register-reading",
          title: "…", topic: "…",
          grammarNote: ["line", "- **bold** point", "*example*"].join("\n"),
          grammarNoteEs: ["línea", "..."].join("\n"),   // REQUIRED on every lesson
          deepDives: ["optional-resource-slug"],         // optional
          exercise: {
            id: "c5u1l1-ex", title: "…",
            items: [
              { kind: "content",  content: { id: "c5u1l1-r1", type: "reading", emoji: "📰", title: "…", body: "…" } },
              { kind: "question", question: { id: "c5u1l1-q1", type: "multiple_choice", prompt: "…", points: 1,
                  config: { options: [ { id: "a", text: "…" }, { id: "b", text: "…" } ], correctIds: ["a"] },
                  explanation: "…" } },
            ],
          },
        },
        // …more lessons
      ],
    },
    // …more units
  ],
  finalTest: {
    id: "c5-final", slug: "final-test", title: "…", intro: "…",
    passingScore: 9,                 // must be 1..(number of questions)
    exercise: { id: "c5-final-ex", title: "…", items: [ /* questions only */ ] },
  },
  conclusion: { title: "…", body: "…", nextSteps: ["…", "…"] },
  diploma: { title: "…", subtitle: "Level 5 (C1)", issuer: "VillaAula" },
};
```

**Per-question-type config** (all in `types.ts`):

- `open` → `{ acceptedAnswers: string[], charLimit?, caseSensitive?, placeholder? }`. Graded by
  **normalization** (lowercase, trim, strip punctuation/accents). List every acceptable variant
  incl. contractions/homophones (`["color","colour"]`, `["ana","anna"]`).
- `multiple_choice` → `{ options: {id,text}[], correctIds: string[], shuffle? }`. **2–4 options**
  (keep it tight), unique option ids, `correctIds` must reference real ids. Multi-answer = list
  several ids.
- `true_false` → `{ correct: boolean }`.
- `match` → `{ pairs: {left,right}[] }`. Left labels must be unique.
- `speaking` → `{ target: string, acceptedAnswers: string[], maxSeconds? }`. The learner records;
  Gemini transcribes; **our own `gradeOpen` decides correctness** against `acceptedAnswers` (write
  them lowercase, normalized, with natural variants). Inert without `GEMINI_API_KEY` — the UI
  auto-passes so it never blocks. Keep `target` short enough to say in `maxSeconds` (~8–12s).
- `draft_compare` → `{ model: LocalizedText, checklist?: LocalizedText[], placeholder?, charLimit? }`.
  **Non-graded**: learner writes their real text, then reveals your strong `model` + a self-check
  `checklist`. Auto-counts as attempted. Great for writing skills.

**Content blocks:**

- `reading` → `{ title, body, emoji? }`. Body is plain text/markdown. Keep readings original (§9)
  and level-appropriate (longer + more inference at C1/C2).
- `audio` → `{ title, transcript, voice, mediaUrl }`. See §6 — the MP3 must exist on disk.
- `image`/`svg` → emoji or inline SVG only (no generative images).

**The `grammarNoteEs` requirement is a hard test.** `validate.test.ts` fails if *any* lesson
across the catalog lacks a non-empty `grammarNoteEs`. Translate the **prose** to Spanish but keep
grammar terms, target words, and example sentences in English (it's the language being learned).

---

## 6. Audio pipeline (listening lessons)

Audio is a **pre-generated authoring-time asset** (edge-tts, free, no API key). Steps:

1. Author the `audio` Content block with a `transcript`, a `voice`, and
   `mediaUrl: "/audio/<contentId>.mp3"`.
2. Add a matching entry to `CLIPS` in `tools/generate_audio.py` (`id` = the content id, `text` =
   the transcript verbatim, `voice` = the same voice).
3. Generate (Windows, from `WISHUB/`):
   ```
   tools/.ttsenv/Scripts/python tools/generate_audio.py
   ```
   (The venv already exists with `edge-tts` installed. If not: `py -3 -m venv tools/.ttsenv` then
   `tools/.ttsenv/Scripts/python -m pip install edge-tts`.)
4. Commit the new `public/audio/*.mp3`.

Voices in use: `en-US-AriaNeural`, `en-US-GuyNeural`, `en-US-AndrewNeural`,
`en-US-AvaMultilingualNeural`. Generate at **normal rate** — the player owns playback speed.

`validateAudioFiles` (a test) fails if a `mediaUrl` under `/` has no file on disk, so the clip and
the content block must ship together. (An audio block with a transcript but *no* `mediaUrl` is
allowed — it falls back to the browser voice — but real MP3s are the norm.)

---

## 7. Bilingual courses (only if the program is bilingual)

English Levels 1–6 are **monolingual** — fields are plain `string`s. Don't add `{en,es}` to them.

A **bilingual** course (the LinkedIn precedent) sets `Course.bilingual: true` (+ `introEs`) and
authors user-facing fields as `LocalizedText = string | { en, es }`. The render layer resolves via
`t(value, lang)` and shows a global EN|ES toggle. Rules:

- *Instructions / prose / conceptual options* → write both `{ en, es }` (native Spanish, not a
  gloss).
- *Keywords, tools, proper UI names, concrete English artifacts* → stay English (add a short
  Spanish gloss in parentheses if helpful).
- The validator checks **both arms** are non-empty — no half-translations.

API lives in `src/lib/i18n.ts` (`LocalizedText`, `t`, `hasEs`, `localizedNonEmpty`). The
EN/ES *grammar-note* toggle (`grammarNoteEs`) is **separate** and applies to every course,
bilingual or not.

---

## 8. Registering the course (two files)

**A. `src/content/catalog.ts`** — import and add to the `courses` array:

```ts
import { level5 } from "@/content/level5";
export const courses: Course[] = [level1, level2, level3, level4, level5, linkedin];
```

That alone wires `/course/5`, its lessons, final test, and conclusion (routes read `getCourse`).

**B. `src/content/programs/<program>.ts`** — make the course visible in a program. For an existing
ladder rung that was a `"soon"` stub, flip it:

```ts
// before
{ slug: "5", status: "soon", band: "C1", title: "Level 5", focus: "…" },
// after
{ slug: "5", status: "active", band: "C1", focus: "…" },
```

(An `"active"` rung borrows its title from the authored Course, so you can drop `title`.) To add a
**new program** or **category**, copy `programs/english.ts` / `programs/categories.ts` and register
it in `programs/index.ts`. Certificates/badges are data: a ladder auto-derives **one badge per
course**; you hand-author **certificates** (milestones + capstone) on the program. Every credential
requirement must reference a course slug some program declares (the validator checks it).

> A course must live in **at least one program** or `validatePrograms` flags it as an orphan.

---

## 9. The green gate (must be clean before you stop)

Run from `WISHUB/`:

```bash
npx tsc --noEmit          # types
npx eslint .              # lint
npm test                  # vitest — the validator + unit tests
npm run build             # next build — must produce the new routes
```

Notes:
- **One test is a known local-only failure** (an auth-env test that needs CI env). Everything
  else must be green. The content tests to watch: *structural validation*, *audio mediaUrl present*,
  *Spanish grammar note for every lesson*, *valid program catalog*.
- After `next build`, **don't run `next dev` without clearing `.next`** — Turbopack serves a stale
  manifest and lesson routes 404. Either clear `.next` or just keep one of build/dev at a time.
- **Runtime smoke:** `npm run dev`, then open the course page, one lesson per skill, the final test,
  and the conclusion. Confirm audio `<source>` renders and the EN/ES note toggle shows.
- The app runs in **guest mode without a DB** (progress in localStorage) — fine for smoke-testing
  content. Accounts/grades/admin need Postgres (Carlos's go-live, HANDOFF §17).

This is also the **`.replit`-tuned Autoscale** deploy target (PORT 5000) — see `README.md`.

---

## 10. Finish: update the logs

- **`HANDOFF.md` §2 Status Log** — add a dated entry (newest first): what you built, the test
  count, anything untested-live, and the "NEXT" pointer. Update the §0 status bullets.
- **`README.md`** — bump the `npm test` count if it changed.
- If you discovered something non-obvious about the pipeline, **update this file.**

---

## 11. Quick checklist (paste into your scratch notes)

```
[ ] Course file exports one `Course`; ids follow the c{level}u{n}l{n} scheme
[ ] Every lesson has grammarNote AND grammarNoteEs (non-empty)
[ ] MCQs have 2–4 options, unique ids, valid correctIds
[ ] Each listening clip: content block + CLIPS entry + generated MP3 on disk
[ ] speaking/draft_compare configs filled (target+acceptedAnswers / model)
[ ] finalTest.passingScore within 1..#questions
[ ] conclusion + diploma present
[ ] Registered in catalog.ts `courses`
[ ] Program rung flipped to "active" (or new program added) — no orphan course
[ ] §9: all prose original; only fixed keywords verbatim
[ ] tsc + eslint + vitest + next build clean
[ ] Runtime smoke passed
[ ] HANDOFF §2 + README updated
```
