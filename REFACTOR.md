# WISHUB — DE-HARDCODE & HARDEN (refactor plan)

> Companion to `HANDOFF.md`. The HANDOFF tells the story of *what was built fast*; this
> file is the punch-list for *making it right* — single source of truth, data-driven,
> scalable, tested. Written 2026-06-22 after a full read of `src/`.
>
> **Nothing here changes what the learner sees** (except the items explicitly tagged
> `⚠ BEHAVIOR` — diploma gating). It is an internal-quality pass. The app currently
> builds green and works; every iteration below must keep it that way.

---

## 0. How to run this as a `/loop`

Each **Iteration** (A–F) is one self-contained loop step. The protocol:

1. **One iteration per loop turn.** Smallest shippable unit.
2. **Behavior-preserving** unless tagged `⚠ BEHAVIOR`. The pages should render identically.
3. **Green gate before committing:** `npx tsc --noEmit` + `npm run lint` + `npm run build`
   all pass. (On Windows the sandbox can `EPERM` on `.next/trace`; rerun build with a clean
   `.next` if so — see HANDOFF §2/2026-06-22.)
4. **Commit per iteration** with a clear message; the repo is local `master`, no remote, so
   every step is reversible (`git revert`/`git reset`).
5. **Append a one-line note to HANDOFF §2** (status log) after each iteration.
6. **Stop and hand back to Carlos** at the `🛑 LIVE` markers — anything that needs a real
   Postgres/OAuth runtime can't be verified inside the loop.

**Scope locked (Carlos, 2026-06-22): run A → B → C → D, then STOP.** E and F are deferred to
a later session (they touch the live DB / UX and can't be loop-verified). Don't start E/F in
this loop.

> **Heads-up for the content track that follows this loop:** Carlos has now uploaded the real
> curricula for **all four levels** to `reference/` — `s1u1…s1u4`, `s2u1…s2u4`, `s3u1…s3u4`,
> `s4u1…s4u4`. **Every level is a 4-unit program.** That means (1) the shipped **Level 2 is
> wrong** — it has only 2 units and was a generic A2 *inference*; it must be **rebuilt to match
> `s2u1–s2u4`**; and (2) **Levels 3 & 4 are authored from scratch** from `s3`/`s4`. This is a
> separate, large **content track** — see §6 — done *after* A–D, because A (catalog) + C
> (validator) are exactly the foundation that makes adding/correcting courses safe.

---

## 1. The core problem (one sentence)

The **course catalog is hand-typed in three disconnected places** while the **real courses
live as data** — so the platform's "what levels exist" truth is duplicated, drifts, and
already lies in two spots. Everything else is smaller. Fix the catalog first.

---

## 2. Findings (the full inventory)

Severity: 🔴 must-fix (correctness/scale) · 🟡 should-fix (quality) · ⚪ nice-to-have.

### 🔴 F1 — Duplicated, hardcoded level catalog (the headline)
- `src/app/page.tsx` (lines ~5–30) and `src/app/levels/page.tsx` (lines ~3–28) each define
  an **identical hand-typed `LEVELS` array** (`{n, name, focus, status}`).
- This is disconnected from the actual `courses` registry. Level 1 & 2 exist as real
  `Course` objects in `src/content/`, but their card name/focus/status are re-typed by hand,
  twice. Levels 3 & 4 exist **only** as these stubs.
- Consequences: adding a course means editing 3 files; `status` can drift from reality;
  the `focus` labels are hand-maintained copies that can disagree with the course content.

### 🔴 F2 — The course registry lives inside `content/level1.ts`
- `courses` and `getCourse()` are exported from `src/content/level1.ts`. Every route does
  `import { getCourse } from "@/content/level1"` — semantically wrong (the Level-2 page
  imports the *level1* module to find Level 2). The registry has no home of its own.

### 🔴 F3 — Hardcoded copy that becomes false as content grows
- `Syllabus.tsx` (~line 114): *"A compact review across **all four units**"* — **already
  wrong for Level 2**, which has 2 units.
- `page.tsx`: *"Levels 1 and 2 are ready end to end"*, `"FOUR LEVELS · ONE PATH"`,
  `"ENGLISH · A1 → A2"`. `levels/page.tsx`: *"Levels 1 and 2 are complete now."*
- All of these should be **derived** from the catalog (`{activeCount}`, `{units.length}`).

### 🔴 F4 — Levels 3 & 4 are presentation-only stubs, not data
- They aren't `Course` objects, so they can never "light up" automatically when content
  lands; someone must remember to flip a hardcoded `status`. Their invented `focus` copy
  isn't backed by a curriculum (real `s3`/`s4` are pending from Carlos — HANDOFF §18.A).

### 🟡 F5 — Inconsistent IDs + zero integrity checks
- IDs differ by file: `l1`, `u2-l1`, `l2-u1-l1`; questions `l1-q1` vs `u2-l1-q1`. Slugs are
  reused across courses (unit slug `"1"`, `"2"`). HANDOFF says collisions were checked
  **by hand**. Nothing guards it. (Note: progress keys use **slugs**, not IDs, so IDs can be
  renamed freely without touching saved progress — verified in `lib/progress.ts`.)

### 🟡 F6 — No tests at all
- `gradeQuestion`, `normalize`, the progress key builders, `isCourseComplete`, `safeNext`
  are pure and trivial to test, and they're the *correctness core* of a platform that will
  soon ingest AI-generated content. Currently 0 tests.

### 🟡 F7 — Scattered brand/byline/palette literals
- `"wishub"`, the backronym, `"Built by Carlos Villa · © 2026"`, the page title/description,
  and the diploma SVG's hex colors (`#ff5a4d`, `#16a394`, `#fbf4ec`…) are duplicated across
  `layout.tsx`, `page.tsx`, `DiplomaPanel.tsx`. The diploma re-hardcodes the design tokens
  instead of referencing them.

### 🟡 F8 — `⚠ BEHAVIOR` Diploma name input contradicts the locked decision (HANDOFF §18.E/§12)
- §18.E says: diploma name = the authenticated account, **remove the free-text input**, and
  **require login** to save progress / save grades / get a diploma. But `DiplomaPanel.tsx`
  still renders an editable name `<input>` defaulting to `"WISHUB Learner"`, and the download
  isn't gated behind sign-in — so a guest can still print a diploma under any name.

### 🟡 F9 — `⚠ BEHAVIOR` Grades aren't really persisted
- The DB `Progress` model is a **set of boolean keys**. The final test stores only a
  pass/fail key (`final:slug`) — the actual score is thrown away. §18.E wants a real
  `Attempt`/`ExamResult` row (score, total, passed). The completion semantics are also
  lenient (lesson "done" = every question *attempted*, not *correct*) — fine as a default,
  but the score should be captured.

### 🔴 F10 — Content is fully inlined in TS; the §7 reuse model isn't realized (the big one)
- `Content` and `Question` are meant to be **reusable rows** referenced by an `ExerciseItem`
  join (HANDOFF §7). The MVP inlined them as a discriminated union holding the object inline:
  no shared id pool, no reuse, no DB. This is the headline *scalability* item and the
  prerequisite for AI-first authoring (§18.D) and the content bank (§18.I). **Large, and not
  fully verifiable in the loop** (no live DB) — see Iteration F.

### ⚪ F11 — Smaller items
- `getCourse` is a linear `find` (fine at N=2; make it a `Map` when the registry is extracted).
- The landing `PreviewCard` is a fully fake/hardcoded marketing mock ("UNIT 1 / Greetings",
  20%, fake options). Acceptable as decoration — just document that it's *not* real data so
  nobody wires it up expecting it to be.
- `bcrypt` rounds (10) and session `MAX_AGE_S` (30d) are reasonable; leave them, but move to
  the shared config so they're discoverable.

---

## 3. Iterations (the loop)

### Iteration A — Course catalog as the single source of truth  🔴 (fixes F1–F4, F11)
**Goal:** one module owns "what courses/levels exist"; the landing + `/levels` + all copy
derive from it; L3/L4 are catalog data, not hand-typed cards.

- New `src/content/catalog.ts` (or `index.ts`):
  - Move `courses` + `getCourse` here out of `level1.ts`; make `getCourse` a `Map` lookup.
  - Export a `levelCatalog` array covering **every** level: active levels derived from
    `courses` (level, title, a `focus`/tagline, `status: "active"`, href `/level/{slug}`),
    plus explicit **`status: "soon"` stubs** for L3 & L4 (title + focus only — no fake
    curriculum). A helper merges them so a level "lights up" automatically when its real
    4-unit `Course` is authored (§6) and added — **zero page edits** at that point. Keep the
    stub `focus` strings provisional; the content track replaces them with the real spine.
  - Add `activeCourseCount`, and `levelRange()` (e.g. `"Levels 1 and 2"` / `"Levels 1–3"`)
    so copy is derived, not typed.
- Delete the `LEVELS` array from `page.tsx` **and** `levels/page.tsx`; both map over
  `levelCatalog`.
- Repoint every `import { getCourse } from "@/content/level1"` → `@/content/catalog` (4 route
  files: `level/[slug]/page.tsx`, `.../final-test/page.tsx`, `.../conclusion/page.tsx`,
  `.../unit/[unit]/lesson/[lesson]/page.tsx`).
- Data-derive the false copy: `Syllabus.tsx` "all four units" → `{units.length}` units;
  landing/levels "Levels 1 and 2" → `levelRange()`; "FOUR LEVELS" → `{levelCatalog.length}`.
- **Done when:** no `LEVELS` literal remains; adding a `Course` to `courses` makes its card
  appear on both pages with zero other edits; build green.

### Iteration B — Shared site/brand/config constants  🟡 (fixes F7, F11)
**Goal:** one place for brand strings, byline, tagline, A-level label, diploma defaults, and
the palette; the diploma references the design tokens instead of re-hardcoding hex.
- New `src/lib/site.ts`: `BRAND` (`"WISHUB"`/`"wishub"`), `BACKRONYM`, `BYLINE`, `TAGLINE`,
  `LEVEL_RANGE_LABEL`, diploma defaults (title/subtitle/issuer fallbacks), and a `PALETTE`
  object mirroring `globals.css` (single source for the SVG).
- Replace the scattered literals in `layout.tsx` (metadata), `page.tsx` (logo, footer, hero
  eyebrow), `levels/page.tsx`, `DiplomaPanel.tsx` (SVG colors ← `PALETTE`).
- **Done when:** grepping the brand string / a diploma hex finds one definition; build green.

### Iteration C — Content integrity + ID normalization  🟡 (fixes F5)
**Goal:** make adding content safe; catch mistakes automatically.
- Normalize IDs to a documented scheme (e.g. `c{level}-u{n}-l{n}` for lessons,
  `…-q{n}` questions, `…-a{n}`/`…-c{n}` content). Safe — IDs aren't persisted (slugs are).
- New `src/content/validate.ts`: assert, over all `courses`,
  - globally-unique content/question IDs; unique unit & lesson slugs *within* a course;
  - MCQ `correctIds ⊆ options[].id` and non-empty; `open.acceptedAnswers` non-empty;
  - `match.pairs` well-formed; `true_false.correct` present;
  - every audio `mediaUrl` points to a file that exists under `public/`.
- Call it from the test suite (Iteration D) and optionally a dev-only assertion.
- **Done when:** `validateContent(courses)` returns no errors; build green.

### Iteration D — Test harness + core unit tests  🟡 (fixes F6)
**Goal:** lock the correctness core before it scales.
- Add **vitest** (+ `"test"` script). Tests for: `normalize` (accents/punct/case/whitespace),
  `gradeOpen/MC/TF/match` + `gradeQuestion` dispatch, progress key builders +
  `isCourseComplete`, `safeNext` (open-redirect cases), and `validateContent(courses)` passing
  over the real content.
- **Done when:** `npm test` green in CI-less local run; build green.

### Iteration E — Auth gating + real grades  🟡 `⚠ BEHAVIOR` 🛑 LIVE (fixes F8, F9; HANDOFF §18.E)
**Goal:** trustworthy diplomas; persist actual scores. *Changes UX; logic-only parts ship in
the loop, the live DB path is verified by Carlos on Replit.*
- `DiplomaPanel.tsx`: remove the free-text name input; diploma name = account name; **gate the
  download behind `signedIn`** (guests get the "log in to earn your diploma" nudge, which
  already exists). Keep guest *auditing* of lessons.
- Persist a real score: add a Prisma `ExamResult` (or `Attempt`) model (`userId`, `courseSlug`,
  `score`, `total`, `passed`, `createdAt`) + a server action `recordExamResult`; call it from
  `FinalTestPlayer` on completion (in addition to the existing pass key, for guests' local
  mode). Localstorage fallback keeps the pass key.
- `npm run db:push` is **Carlos's step on Replit** — the loop preps schema + code, builds
  green, and stops at 🛑. Note this clearly in HANDOFF §2 and §17.

### Iteration F — Relational content model (TS → Postgres)  🔴 `⚠ BEHAVIOR` 🛑 LIVE (fixes F10)
**The headline scalability item, and the riskiest. Strongly consider a dedicated session over
autonomous looping** — it needs a live DB to verify, which the loop can't do.
- Prisma models for `Course/Unit/Lesson/Exercise/ExerciseItem(join)/Content/Question` per
  HANDOFF §7, with `Content`/`Question` as standalone reusable rows + provenance (§18.I).
- A **seed script** that loads the current TS content into the DB (the shapes already match).
- A data-access layer: `getCourse` reads from DB **when `dbConfigured()`**, else falls back to
  the TS content — so local/no-DB dev is unchanged and the cutover is reversible.
- **Loop-safe subset:** add the schema + seed script + DAL scaffolding *behind the
  `dbConfigured()` fallback*, keep TS as the live source, build green, then 🛑 hand the live
  migration + verification to Carlos. Do **not** rip out the TS content in the loop.

---

## 4. What this is NOT touching
- The auth/session/OAuth core (`session.ts`, `users.ts`, `actions.ts`, `google.ts`,
  `password.ts`) — reviewed, conventional, correct. Leave it.
- The visual design / palette / copy *voice* — this is an internal-quality pass, not a
  redesign. Pixels stay put (except the diploma name input removal in E).
- Real Level 2–4 curricula — blocked on Carlos's `s2`/`s3`/`s4` uploads (HANDOFF §18.A).

## 5. Suggested stopping points for the loop
- **This loop runs A → B → C → D, then stops** (Carlos, 2026-06-22). All four are
  behavior-preserving and fully loop-verifiable.
- **Deferred to a later session:** E (auth gating + scores; ships code, but `db:push`/verify
  is Carlos's) and F (TS→Postgres content model; needs a live DB).

---

## 6. Content track — real curricula (separate effort, AFTER the A–D loop)

> Not part of the de-hardcode loop. Queued because Carlos uploaded the real programs on
> 2026-06-22. Build on the A–D foundation (catalog + validator) so each course is added with
> zero page edits and is integrity-checked on the way in.

**Source (all in `reference/`, each level = 4 units):**
`s1u1–s1u4` (L1, already authored) · `s2u1–s2u4` (L2) · `s3u1–s3u4` (L3) · `s4u1–s4u4` (L4).
Layout is a dense skills grid (Grammar / Vocabulary / Listening / Reading / Writing / Speaking
per lesson). ⚠️ **The PNGs are high-density and downscale poorly** — read them **zoomed/cropped
per-column** for fidelity before authoring; don't author from the thumbnail.

**Tasks:**
1. **Correct Level 2** — the shipped `src/content/level2.ts` is a *provisional generic-A2
   inference* with **only 2 units**. Rebuild it to the real **4-unit** spine in `s2u1–s2u4`
   (the real L2 runs Past Continuous / Present Perfect / digital-world & public-places themes —
   clearly different from the shipped "past/future/some-any"). Replace, don't patch.
2. **Author Level 3** from `s3u1–s3u4` (4 units) — reported speech, conditionals, etc.
3. **Author Level 4** from `s4u1–s4u4` (4 units) — reported speech / more advanced.
4. For each: real `focus` label into the catalog (§3-A), flip its stub to a real `Course`,
   register in `courses`, run the validator (§3-C), regenerate audio (`tools/generate_audio.py`).

**Guardrails:** HANDOFF §9 copyright still binds — follow the program's grammar/skill **spine**,
write **100% original** prompts/readings/titles; never copy the book's wording, titles, images,
or name. HANDOFF §18.B calibration: keep difficulty matched to the level (L1 = very basic;
complexity scales up).
