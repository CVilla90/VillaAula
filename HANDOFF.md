# WISHUB — HANDOFF

> **Read this file first.** It is the single source of truth for continuing this project
> in a fresh window, a different account, or a different agent. Keep it updated at the
> end of every working session (see **§2 Status Log**).

---

## 0. START HERE (30-second orientation)

- **Product:** **VillaAula** — a lightweight, content-agnostic micro-LMS. First real use:
  Carlos teaching a friend ESL (English) as a fast *skim* of a beginner course.
- **Brand / product name:** `VillaAula` (renamed from **WISHUB** on 2026-06-23). ⚠️ **The on-disk
  directory is still `Brainstorm/WISHUB/`** — the Session 11 plan to rename the folder to `VillaAula`
  was **never completed on disk** (only the *brand* changed). Use the real path **`Brainstorm/WISHUB/`**.
  GitHub repo: **`CVilla90/VillaAula`** (https://github.com/CVilla90/VillaAula.git). Deploy URL is
  `villaaula.replit.app`. Nothing in the code depends on the folder name (all imports use the `@/`
  alias / relative paths), and no other project references it — so the folder rename remains a safe,
  optional cosmetic cleanup (free the folder from Cursor first — see the Session 11 log).
- **Name meaning:** *Villa* (Carlos's surname; also Spanish for a small house/town) + *Aula*
  (Spanish for *classroom*). It's a name, not an acronym — the old WISHUB backronym is retired.
- **Admin / owner:** Carlos — `cavilla@uach.mx` (hard-coded super-admin via env allowlist).
- **Owner context:** This is one of Carlos's **personal** projects (like HolIA/Atina,
  MUSAI, Cátedra). It is **not** Creai work and **not** an official UACH project. Keep
  those worlds separate (see his `user_identity` memory).
- **Status (2026-06-26, latest first — full log in §2):**
  - ✅ **§19 PROGRAMS CATALOG — PHASE A SHIPPED (Session 15, 2026-06-26).** VillaAula now models a
    **multi-program catalog** over the courses (file-backed, no DB): a `Program` entity wraps Levels 1–4
    (+ C1/C2 "soon" stubs) into one **English A1→C2** ladder; **badges per course + certificates per
    program** (CEFR milestones + capstone) defined as data; the route **`/level/` → `/course/`** with
    redirects; **`/levels` → a real program dashboard at `/programs/[slug]`** (live progress + credential
    wall); the **landing is now a catalog view** (featured English program + a quiet "Languages" category
    + client-side search); platform voice **de-ESL'd** (English copy now sourced from the program, not
    `lib/site.ts`). Green: tsc + eslint + **76 tests** (1 known-local auth fail) + `next build` (16 pages).
    **Phase B/C** (credential SVG artifacts + `/c/[id]` public page, real multi-program catalog, DB) wait
    on a 2nd program / §18.I. See **§19**. ⚠️ Untested at runtime live (no Postgres in dev); the dynamic
    `/course/[slug]` render wasn't smoke-tested (build-validated only).
  - ✅ **SESSION 13 BUILD QUEUE SHIPPED + a "grammar EN/ES toggle" cherry (Session 14, 2026-06-26).**
    All three queued builds are live: **§18.K Stripe support footer** (discreet `<details>` "Support
    this project" → ❤️ Chip-in to the Stripe link; `SUPPORT_URL` in `lib/site.ts`), **§18.L admin
    edits a learner's name/email** + **§18.M cheap-interim role dropdown** (both on `/admin/users/[id]`
    via `requireAdmin()`-guarded Server Actions in `lib/auth/admin-actions.ts`, **no schema change**),
    and **§18.J Deep Dives** (new `Resource` model + `src/content/resources/` with **5 seed dives**,
    `/learn` index + `/learn/[slug]` pages, `RichText` now renders `[label](/learn/slug)` links + `#`/`##`
    headings, a **"Go deeper →" chip** on 5 wired lessons, dead-link validator + tests). **Cherry:** every
    `GrammarNote` now has an **EN/ES toggle** — all **80** grammar notes got a `grammarNoteEs` (prose in
    Spanish, **grammar terms + examples kept in English**), choice persists in localStorage. ✅ green gate:
    tsc + eslint + **69 tests** (68 pass; the 1 "fail" is the known local-only auth-env test — green in CI)
    + `next build` (19 routes; `/learn/[slug]` SSG-prerenders all 5 dives). Runtime-verified on the dev
    server: home (nav + footer), `/learn`, dive pages (headings, internal links, "used in" backlinks, 404
    guard), and a lesson (EN/ES toggle + Spanish payload + Go-deeper chip). ⚠️ The **DB-backed admin edits
    (§18.L/M) are untested live** (no Postgres in dev) — confirm at go-live, like the rest of the admin UI.
  - 🎉 **FIRST PRODUCTION USE = SUCCESS (Session 13).** Carlos ran a real live class on VillaAula and
    it went well end-to-end. Live-usage learnings drive the new build queue below (esp. learners
    wanting deeper explanations → the **Deep Dives** feature, §18.J).
  - 🗒️ **Session 13 = planning/documentation only (no code).** Locked 4 next-session builds
    (§18.K Stripe support footer · §18.L admin-edits-learner-info · §18.J Deep Dives · §18.M TA/
    professor roles) + answered the Google-OAuth-verification question (**no verification needed** —
    basic scopes only; see §17 step 4). Build starts next session.
  - ✅ **Admin dashboard + Replit deploy prep (Session 10).** Admins (allowlisted email / DB role)
    get **`/admin`** (learner roster: progress bar, levels-complete, final-grade pills, last active)
    and **`/admin/users/[id]`** (per-level breakdown + unit-by-unit lesson ticks + recorded grade),
    all behind `requireAdmin()`; an "Admin" nav link shows only for admins. Pure analytics in
    `lib/admin/stats.ts` (+8 tests → **62**). Added **`.replit`** (Next.js-tuned Autoscale + Postgres,
    `PORT=5000`) so the repo is push-ready for Replit. Green gate clean; DB-backed admin views need a
    live smoke test at go-live (no Postgres in dev).
  - ✅ **Rebrand WISHUB → VillaAula + auth gating (Session 9).** Whole product rebranded
    (brand strings, diploma titles/issuers, cookies/storage keys with a legacy-localStorage
    migration, package name). **Account-linking hardened:** signup **email is now required**
    (unverified) so a manual `friend@gmail.com` / admin account auto-links the first time they
    use Google OAuth; pure `pickLinkedUser`/`mergeGoogleProfile` helpers + tests (**54 tests**).
    **§18.E auth gating shipped:** diploma is **login-gated** (guests audit, can't claim), the
    **free-text name input is gone for signed-in users** (uses the account name), and **real exam
    grades persist** (new `ExamResult` model + `recordExamResult`/`getExamResult`). ⚠️ the DB-backed
    parts (linking, exam grades) are **built but untested live** — confirm on go-live.
  - ✅ **De-hardcode/harden pass (REFACTOR.md A–D):** course catalog is a single source of truth,
    brand/palette centralized (`lib/site.ts`), a content **validator** (`content/validate.ts`) +
    **vitest** suite (grown to **46 tests** by Session 8) guard correctness.
  - ✅ **Speaking exercises (Phase S) DONE & LIVE-VERIFIED:** new `speaking` question type, browser
    MediaRecorder → `POST /api/speaking/analyze` → **Gemini `gemini-3.1-flash-lite`** transcribes,
    WISHUB's own `gradeOpen` grades. Inert without `GEMINI_API_KEY` (in gitignored `.env`). Live on
    **Level 1** (2 questions). Plans/spec: `SPEAKING_AND_CURRICULA.md`; AudioReviewer was the concept ref.
  - ✅ **Level 2 fully rebuilt** to its REAL `s2` curriculum spine (4 units, 20 lessons, 16-Q final,
    4 speaking) — the old 2-unit "past/future/quantity" guess is gone. Extracted spines live in
    `CURRICULA_SPINE.md`.
  - 🏁 **ALL FOUR LEVELS CONTENT-COMPLETE & LIVE — Phase C done (Session 6).** Levels 1–4 each =
    4 units / 20 lessons, every level with a 16-Q final (pass 12, except L1/L2 per their spec),
    conclusion, diploma, speaking questions, and listening. `levelRange()` reads "Levels 1–4".
    Spines: L1 foundations · L2 A2 (habits→past) · L3 B1 (past continuous→present perfect→
    conditionals→modals) · L4 B1+/B2 (reported speech→conditionals & verbals→future/ability→media).
    All authored from the real curricula (`reference/s1–s4`, spines in `CURRICULA_SPINE.md`).
  - 🏁 **Listening pass done (Session 7, `LISTENING_PASS.md`):** **1 short casual edge-tts listening
    + comprehension Q per unit** across all 4 levels (10 new clips, 5 MCQ + 5 T/F) — now at parity
    with speaking. 16 MP3s in `public/audio/`. Verified on the prod server.
  - ✅ **Login feature — scaffold built + security core hardened (Session 8).** Full dual auth
    (manual username/password + Google OAuth) + Prisma `User`/`Progress` + JWT sessions was already
    built (Session 3) and audited correct. Session 8 extracted the crypto/validation into pure
    testable modules (`lib/auth/token.ts`, `validation.ts`) + **10 unit tests** (46 total). Guest mode
    verified (login/signup render, OAuth degrades gracefully). **⚠️ live signup/login/OAuth runtime
    still untested** (no Postgres in dev) — needs Carlos's go-live to confirm.
    **🔑 Decision: OAuth client owned by personal Gmail, not `cavilla@uach.mx`** (see §17 step 4).
  - 🗺️ **BIG FUTURE DIRECTION — APPROVED PLAN in §19 (2026-06-26):** evolve VillaAula from a single
    4-level ESL course set into a **multi-program learning catalog** (Program → Course; badges per course
    + certificates per program incl. ESL CEFR milestone certs; English-first now but built as a theme
    over a neutral catalog; landing → searchable catalog later). **Planning only, no build started**;
    Phase A is pure data + a vocab/brand pass (no DB). Read **§19** before touching the catalog/landing.
  - **NEXT SESSION — START HERE:** the Session-13 build queue (Session 14) **and §19 Phase A** (Session 15)
    are **DONE**. What remains:
    1. **Carlos (still pending): go-live on Replit** (§17) — Postgres + secrets + `db:push`, then the
       live smoke test of signup/login/**OAuth**/speaking/admin **+ the §18.L/M admin edits and the
       §18.J Deep Dives**. **Also runtime-confirm the new routes** post-deploy: `/programs/english`
       dashboard, a `/course/1` page, and that old `/level/1` + `/levels` links **308-redirect**.
       **OAuth verification is NOT required** (basic scopes — see §17 step 4); just **Confirm/Publish**.
    2. **§19 Phase B (when a 2nd program lands, or sooner if wanted)** — ship the **credential artifacts**
       (badge/cert SVG reusing the diploma machinery + the public **`/c/[id]`** page + LinkedIn "Add to
       profile" deep-link) and the ESL milestone tiers as *earnable* (right now the dashboard shows the
       credential wall as a roadmap; completion lights chips but there's no downloadable artifact yet).
    3. **More Deep Dives content (§18.J)** — mechanism shipped with **5 seed dives**; authoring more +
       wiring `deepDives`/inline `[label](/learn/slug)` links is the ongoing AI-authored part.
    4. **Grammar translations upkeep (cherry)** — all 80 notes have `grammarNoteEs`; a content test fails
       if a *new* lesson ships without one. Keep terms/examples in English.
    5. **TA & Professor roles (§18.M)** — cheap interim (role dropdown) **built**; real per-role
       privileges **deferred** (blocked on content→Postgres §18.I). §19 reframes this as "professors own
       **programs**."
    6. Optional later: §18.I content bank (TS→Postgres — programs/courses/categories become rows), §18.B
       calibration audit, mobile/PWA (§18.G).
- **History note:** the first formal class was **2026-06-22**; the original "ship a rough Level 1
  fast" pressure is long past — the product is now content-complete (L1–L4) and hardened. Current
  focus is the **login go-live**, not content.

---

## 1. WHAT WISHUB IS

A small, polished LMS: fast, modern, delightful UI/UX, with reusable content. The hook of
ed-tech is UI/UX, so **frontend quality is the priority.**

**Shape of the product:**
- Nice **landing/home page** with a **Login** button.
- Pick one of **four levels** (Level 1–4). Only **Level 1 is being built now**; the other
  three exist as structure/placeholders so the platform reads as professional.
- Each **Level** is a real course: **Intro → Syllabus → Lessons/Exercises → Final Test →
  Conclusion → downloadable Diploma.**
- Each **exercise** can carry its own **grammar lesson**, hidden by default behind an
  **expandable** ("Show grammar") button.
- **Agnostic platform:** the friend is User Zero, but nothing should hardcode "English" or
  "this friend." Levels/courses are data.

**Exercise (question) types for MVP:**
1. **Open input** — char limit, expected answer(s), graded by **normalization** (lowercase,
   trim, strip punctuation/accents, synonym list). *(AI/Gemini grading is explicitly
   DEFERRED — see §4.)*
2. **Multiple choice** (single correct, optionally multi-correct later).
3. **True / False.**
4. **Match the columns** (pairs).

**Content (non-question) blocks:**
- **Readings**, **audio** (TTS), **images** (SVG / emoji — no generative images).
- Content blocks are **reusable** and **separate** from questions, then **linked** into an
  exercise. Example targets: *(a)* one reading + 10 MCQs; *(b)* reuse that same reading +
  just 1 open question. This reuse model is the core of the data design (see §7).

**Admin / authoring:** create / edit / remove courses, units, lessons, content blocks,
and questions. (Authoring UI is built *after* the learner runtime — see §3.)

**Guests:** each course has an `acceptsGuests` toggle the admin controls.

---

## 2. STATUS LOG (newest first — UPDATE EVERY SESSION)

### 2026-06-26 — Session 15 (PROGRAMS catalog — §19 Phase A SHIPPED)
Autonomous `/loop "continue the approved plan"`. Built **all of §19 Phase A** — the platform now models
a **multi-program catalog** on top of the courses, file-backed (no DB), green gate clean (tsc + eslint +
**76 tests** [68→75 pass, +7 new; the 1 "fail" is the known local-only auth-env test] + `next build`,
16 SSG/static pages incl. `/programs/english`). Redirects runtime-verified (308s).
- ✅ **Program/Category/Credential model** (`lib/types.ts`): `Program` (kind `ladder|collection`, a
  `category`, an ordered `courses: ProgramCourseRef[]` of active/“soon” slots, `courseNoun`, authored
  `certificates`), `Credential` (`badge|certificate` + `CredentialRequirement` of `course|courses|program`),
  `Category`. **Course↔Program is many-to-many** (a slug may sit in several programs).
- ✅ **`src/content/programs/`** — the program catalog (mirrors `content/catalog.ts`): `english.ts`
  wraps **Levels 1–4** (active, bands A1/A2/B1/B2) **+ Levels 5–6** (“soon” C1/C2 stubs) into one
  **English A1→C2 ladder**, with CEFR-milestone certs (Foundation/Independent/Proficiency) + an A1–C2
  capstone; `categories.ts` seeds **“Languages”**; `index.ts` accessors (`getProgram`, `programForCourse`,
  `resolveProgramCourses`, **derived** `programBadges` (one per course), `programCertificates`,
  `featuredProgram`, `programBand`, `activeCourseLabel`/`Count`). Validator `validatePrograms` + 7 tests.
- ✅ **Route rename `/level/[slug]` → `/course/[slug]`** (dir moved; all internal links rewired) with a
  **wildcard 308 redirect** for the whole old tree + `/levels` → `/programs/english` in `next.config.ts`.
  Progress survives (keyed by course slug, not path).
- ✅ **Program dashboard `/programs/[slug]`** (replaces `/levels`): `ProgramDashboard` (client) shows the
  ladder with **live per-course progress**, a recommended next step, and a **credential wall** (badges +
  certs) that lights up as courses complete. Server passes only progress *keys* (no catalog bloat).
- ✅ **Landing = a view over the catalog** (`components/catalog/Catalog.tsx`): English featured in the
  hero (copy now **program-driven**, not hardcoded), then a `WHAT YOU CAN LEARN` section with a
  client-side **search** + the **“Languages”** category + a rich program card. Reads focused, not empty.
- ✅ **De-ESL’d the platform voice:** removed `TAGLINE`/`LEVEL_BAND`/`META_DESCRIPTION` from `lib/site.ts`
  and the whole ESL `levelCatalog`/`LEVEL_META`/`levelRange` block from `catalog.ts` — that copy is now
  sourced from the English **program** (`featuredProgram()`/`programBand()`); `layout.tsx` title too.
- ⚠️ **Side effect:** a clean `next build` needed clearing `.next`, which **killed a running `npm run dev`**
  (shared `.next`). If Carlos had a dev server up, restart it (`npm run dev`). Lesson: don't `rm -rf .next`
  while a dev server runs — a plain `next build` regenerates the route validators anyway.

### 2026-06-26 — Session 14 (shipped the Session-13 build queue + grammar EN/ES toggle)
Autonomous `/loop`: "finish everything per the HANDOFF" + one cherry. All four queued builds shipped,
green gate clean (tsc + eslint + 69 tests [1 known-local auth-env fail] + `next build`, 19 routes), and
runtime-verified on the dev server.
- ✅ **§18.K — Stripe support footer.** `SUPPORT_URL` added to `lib/site.ts`; a discreet native
  `<details>` **"Support this project"** in the homepage footer (no client JS, matches `GrammarNote`'s
  idiom) → warm no-pressure note + **❤️ Chip-in** button (`target="_blank" rel="noopener noreferrer"`).
- ✅ **§18.L — Admin edits a learner's name/email** + ✅ **§18.M cheap-interim role dropdown.** New
  `lib/auth/admin-actions.ts` (`"use server"`): `updateLearnerProfile` (name + email only) and
  `updateLearnerRole` (role tag). **Both re-check `requireAdmin()` server-side**, handle the email
  `@unique` P2002, and `revalidatePath('/admin' + '/admin/users/[id]')`. **No schema change** (existing
  `User.name/email/role`). Client `components/admin/EditLearnerForm.tsx` (two `useActionState` forms) on
  `/admin/users/[id]`; username/password stay out of the UI; self-service name edit stays OFF
  (diploma-abuse guard). Assignable roles (`student|ta|teacher|admin`) live in `lib/auth/roles.ts` (a
  plain module — a `"use server"` file may export only async fns). Admin allowlist (`ADMIN_EMAILS`) means
  Carlos can't lock himself out by changing his own DB role. ⚠️ DB-backed → **untested live** (no dev DB).
- ✅ **§18.J — Deep Dives.** New `Resource` type (`lib/types.ts`) + `src/content/resources/` (5 seed
  dives: **to-be · present-continuous · present-perfect · first-conditional · phrasal-verbs**, original
  wording per §9) aggregated in `resources/index.ts` (`resources`, `getResource`, `resourceSlugs`,
  `resourcesByLevel`). Routes **`/learn`** (index grouped by level) + **`/learn/[slug]`** (SSG via
  `generateStaticParams`; title/summary/body, **"Used in these lessons"** backlinks via new
  `catalog.lessonsUsingResource`, **Related** chips). `RichText` now renders `[label](/learn/slug)`
  internal links **and `#`/`##` headings** (shared link util `content/links.ts`). New `deepDives?: string[]`
  on `Lesson` → a **"Go deeper →" chip** row in `LessonPlayer` (wired into 5 lessons across L1/L3/L4).
  Homepage nav gained a **Deep Dives** link. Validator extended (`validateResources` +
  `validateDeepDiveLinks` — unique slugs, required fields, every `related`/`deepDives`/inline `/learn`
  link resolves) with **6 new tests** (2 positive over real content + 4 negative). Guest-readable (no gate).
- 🍒 **Cherry — grammar EN/ES toggle.** `GrammarNote` is now a client component with a small **EN | ES**
  segmented toggle in the expanded body (not the `<summary>`, so it never collapses the panel); choice
  persists in `localStorage` (`villaaula:grammarLang`). New `grammarNoteEs?` on `Lesson`; **all 80 grammar
  notes** got a Spanish version (translated the *prose*, **kept grammar terms + target words + example
  sentences in English**). Authored via a scratchpad extract→translate-JSON→insert pipeline (indentation
  auto-detected per file). A `validate.test.ts` case fails if any lesson lacks `grammarNoteEs`. Toggle
  hides automatically when a note has no ES version (future-proof).
- 🧪 **Runtime smoke (dev server, guest/no-DB):** `/` (Deep Dives nav + Support footer), `/learn`
  (index), `/learn/to-be` (heading + inline `/learn/present-continuous` link + "Used in these lessons"),
  `/learn/does-not-exist` → 404, `/learn/phrasal-verbs` → backlink to the L4 lesson, and
  `/level/1/unit/1/lesson/to-be` (Grammar summary + **EN/ES toggle** + Spanish payload present +
  **Go-deeper** chip) — all 200/correct.
- 🔧 **Follow-up (same session, Carlos's feedback):** **(a) Deep Dives are now course-scoped.** A new
  `catalog.courseDeepDives(course)` derives a course's dives from the resources its lessons reference
  (`deepDives` + inline `/learn` links), so the **course page `/level/[slug]` now shows a "Deep Dives"
  section** with only that course's topics — and a dive **belongs to several courses automatically**
  (reuse) with no extra data. Demonstrated: `present-continuous` wired into an L1 **and** an L2 lesson
  (shows on both course pages); `present-perfect` into an L3 **and** an L4 lesson. The global homepage
  "Deep Dives" nav link was **removed** (entry now lives on the course page); the global `/learn` library
  + `/learn/[slug]` detail pages stay (detail back-link → `/learn`; "Used in these lessons" now lists all
  courses that use a dive). **(b) Slim top bar.** New `components/TopBar.tsx` (+ extracted shared
  `components/Logo.tsx`) added once in `layout.tsx`: a **static (NOT sticky)** slim bar — Logo→home +
  `AccountMenu` — so you can always get home from inside a lesson. Hidden on `/`, `/login`, `/signup`
  (those own their chrome) via `usePathname()`. ✅ re-gated (tsc/eslint/69 tests/build) + dev-server
  smoke (course Deep Dives sections, cross-course reuse, TopBar on inner pages but not home).
- **NEXT:** Carlos's Replit go-live (§17) — now also confirms §18.L/M admin edits against real rows;
  then author more Deep Dives + grammar coverage as desired.

### 2026-06-23 — Session 13 (first prod use 🎉 + next-session planning/docs)
- 🎉 **First production class = success.** Carlos taught a real live class on VillaAula end-to-end and
  it went well. **This session was planning + documentation only — no code changed.**
- 👂 **Top live-usage learning:** several learners wanted to go **deeper on specific topics** mid-course
  → drives the new **Deep Dives** feature (§18.J): a library of in-depth, reusable topic explainers,
  hyperlinked from wherever the topic is mentioned in a course.
- 🗒️ **Documented 4 next-session builds** (full specs in §18):
  - **§18.K Stripe support footer** — discreet "Support this project" disclosure on the homepage footer
    → warm "free but has costs" note + ❤️ button → Carlos's Stripe link
    `https://buy.stripe.com/dRmaEWeSY7VNbxW7i1cEw00`. `SUPPORT_URL` lives in `lib/site.ts`.
  - **§18.L Admin edits learner personal info** — `name`(+`email`) editable from `/admin/users/[id]`,
    `requireAdmin()`-guarded Server Action, **existing columns → no schema change**. Username /
    password / role stay out of the UI. **Self-service name edit stays OFF** (diploma-abuse guard).
  - **§18.J Deep Dives** — file-backed `Resource` explainers + `/learn` & `/learn/[slug]` routes +
    `RichText` internal links + a "Go deeper →" chip on lessons. No DB (TS content, AI-authored per §18.D).
  - **§18.M TA & Professor roles** — privilege matrix drafted. **Build deferred** — needs the
    content→Postgres migration (§18.I) first (no DB-owned courses exist yet).
- 🔑 **Answered the Google-OAuth-verification question** (Carlos hit Google's "switch to production"
  dialog): the app requests only the basic `openid email profile` scopes (`lib/auth/google.ts:26`),
  which **Google never gates behind app verification.** The production dialog's three triggers —
  **>10 domains / a logo / sensitive-or-restricted scopes** — **none apply** (≤2 domains, basic scopes;
  only caveat = don't upload a custom consent-screen logo). → **Confirm/Publish is safe**; no "unverified
  app" warning, any Gmail can sign in. The only failure mode is leaving it in **Testing** (then only
  added test users can sign in). Captured in §17 step 4.
- 🧪 **Why we can't test OAuth this session:** local `.env` has only `AUTH_SECRET` + `GEMINI_API_KEY` —
  **no `DATABASE_URL`, no `GOOGLE_CLIENT_ID/SECRET`, no `NEXT_PUBLIC_APP_URL`** — so `authConfigured()`
  is false and the Google route returns `google_disabled` (button hidden). Carlos *did* create the
  OAuth client (the gitignored `client_secret_*.json` from Session 11), but it isn't wired into a
  running instance. Real OAuth test = **Replit go-live** (§17 step 4/6), or a local Postgres + creds.
- 🧱 **DB constraint locked in (Carlos):** all future schema work must be **additive / non-breaking**
  (don't break prod — though real data is still tiny). §18.L and §18.J both honor this (no schema change).
- **NEXT:** execute the queue in §0 (§18.K → §18.L → §18.J), plus Carlos's go-live (§17).

### 2026-06-23 — Session 12 (REAL first push to personal GitHub + identity rewrite)
> Back-filled in Session 13 — this session happened but was never written to the HANDOFF at the time.
- 🐙 **The actual first push.** Found the remote `CVilla90/VillaAula` **completely empty** and the whole
  Session 9/10/11 work **uncommitted** (last commit was Session 8). Committed the rebrand/admin/deploy
  work and pushed `main` → `origin/main`.
- 🔒 **Fixed wrong git identity (worlds-stay-separate, see [[user_identity]]):** the repo was wired to the
  **work** account (HTTPS remote + `carlosvilla@creai.mx`; all commits work-authored) — wrong for a
  personal project. Repointed remote → `git@github-personal:CVilla90/VillaAula.git` (personal SSH alias),
  set identity → `Carlos Villa <carlosavillah90@gmail.com>`, and **re-authored ALL commits to the personal
  identity** via `git filter-branch --env-filter` (purged `refs/original/` backups) so zero Creai email
  remains. Secret guard confirmed only `.env.example` (placeholders) is committed.
- 🚀 **Replit go-live started:** Carlos was **mid-entering Secrets** when this session paused. (The first
  production class — Session 13 — confirms the deploy ultimately worked.)
- 📁 **Folder still named `WISHUB` on disk** — the Session 11 rename was never completed (cosmetic only;
  git/GitHub are unaffected since nothing references the folder name).

### 2026-06-23 — Session 11 (directory rename WISHUB → VillaAula + GitHub repo)
- 📁 **Directory renamed `WISHUB` → `VillaAula`** (reverses the Session 9 "keep the folder to avoid
  churn" call, at Carlos's request so the folder matches the brand). **Verified safe before renaming:**
  - A full scan found **zero references to the folder name in any other project** (no BoardCraft /
    AudioReviewer / sibling cross-link) — so nothing external breaks.
  - In-project, **no code depends on the folder name**: all imports use the `@/` alias or relative
    paths; `tsconfig`/`.replit`/configs use no absolute paths. The only literal `wishub` strings left
    in code are the **deliberate localStorage legacy-migration key** `wishub:completed` in
    `lib/progress.ts` (must stay — carries old guest progress forward) and a historical comment.
  - Fixed leftovers: `package-lock.json` `name` `wishub`→`villaaula`; `tools/generate_audio.py`
    path/brand comments → VillaAula.
- 🔒 **Caught + gitignored a real secret** (carried from Session 10): a downloaded Google OAuth
  `client_secret_*.apps.googleusercontent.com.json` was sitting untracked in the repo root; added
  `client_secret*.json` / `*-credentials.json` to `.gitignore` so a push can't leak it.
- 🐙 **GitHub repo created by Carlos: `CVilla90/VillaAula`** (https://github.com/CVilla90/VillaAula.git).
  Remote wired. ⚠️ **CORRECTION (logged Session 13):** the "initial push" claimed here **never actually
  happened** — the remote stayed empty and the rebrand/admin/deploy work was left uncommitted. The
  **real first push + identity rewrite happened in Session 12** (below). The folder rename was also not
  completed on disk (still `WISHUB`).
- ⚙️ **Rename mechanics (Windows note for future sessions):** the folder couldn't be renamed while
  **Cursor** had it open as the workspace (the editor's file watcher holds a handle on the open root
  folder; killing the integrated terminals was NOT enough). Resolution = free the folder in Cursor
  (close folder / quit), then `Rename-Item`. Kill any leftover `next dev` node processes first too.

### 2026-06-23 — Session 10 (admin dashboard + Replit deploy prep)
- 🎛️ **Admin dashboard shipped (Carlos's request #1 — "see how a user is doing").** An admin
  (allowlisted email or DB `role:"admin"`) now has a full progress/grades cockpit:
  - **`/admin`** — learner roster: every account with a progress bar (lessons done / total across
    the whole catalog), levels-complete count, **final-check grade pills** (L1 14/16, colored
    teal=passed / coral=not yet), last-active date, and quick stats (learners / started / finished).
  - **`/admin/users/[id]`** — per-learner breakdown: header card, joined/last-active, and a
    **per-level section** with progress bar, the recorded final grade (score/total · passed ·
    attempts), and a **unit-by-unit lesson tick list** so you can see exactly which lessons are done.
  - **Security:** every entry point goes through `requireAdmin()` (`lib/admin/data.ts`) which
    redirects when accounts are off (no DB), signed-out (`/login?next=/admin`), or non-admin (`/`).
    Both pages are `force-dynamic` (read the session cookie). An **"Admin" link** appears in the
    nav only for admins (`isAdmin` now flows through `SessionProvider` → set in `layout.tsx`).
  - **Pure analytics core:** `lib/admin/stats.ts` (`courseLessonKeys`/`summarizeCourse`/
    `summarizeLearner`) turns progress keys + `ExamResult`s + the catalog into the summaries —
    no React/Prisma, fully unit-tested. **+8 tests → 62 total.**
- 🚀 **Replit deploy prep (Carlos's request #2).** Added **`.replit`** (tuned for Next.js 16, not the
  Python pattern): `modules = nodejs-20 + web + postgresql-16`, **Autoscale** deployment with
  `build = npm run build` / `run = npm run start`, `[env] PORT = "5000"`, port `5000 → 80`, and a dev
  workflow. Key Next-on-Replit quirks captured: **Next honors `PORT`** (verified in the bundled docs)
  and **binds `0.0.0.0` by default**, so no `-H`/`-p` flags needed; **don't add `npm install` to the
  build** (Replit runs it, which fires `postinstall: prisma generate`). The repo is now **push-ready
  for Replit** — `.gitignore` already excludes `.env*`/`node_modules`/`.next` and keeps `.env.example`.
- ✅ **Green gate:** `tsc` + `eslint` + **62 tests** + `next build` (14 routes; `/admin` + `/admin/
  users/[id]` both correctly `ƒ` dynamic) all clean. **Runtime smoke (no-DB dev):** `/` → 200, no
  Admin link for guests; `/admin` → **307 → `/`** (guard fires when accounts are off). DB-backed admin
  views (real rows) still need a **live smoke test at go-live** (no Postgres in dev), same as §18.E.
- **NEXT:** Carlos's go-live (§17) — now also confirms the admin dashboard against real accounts.

### 2026-06-23 — Session 9 (rebrand → VillaAula + auth gating §18.E)
- 🏷️ **Rebrand WISHUB → VillaAula** (Carlos's call; deploy URL already `villaaula.replit.app`):
  - Brand source of truth `lib/site.ts`: `BRAND`/`BRAND_WORDMARK` = `VillaAula`; the WISHUB
    backronym is retired and replaced by `BRAND_NOTE` ("A little classroom of your own") in the
    footer. Diploma defaults + all 4 per-course diploma `title`/`issuer` strings, the diploma SVG
    issuer, and the download filename (`villaaula-level-N-diploma.svg`) updated. Landing copy +
    internal code comments swept. `package.json` name → `villaaula`; prisma/.env headers updated.
  - **Internal keys renamed** (clean break — app isn't live): session cookie `villaaula_session`,
    OAuth state cookie `villaaula_oauth`, localStorage `villaaula:completed`. Added a **one-time
    legacy migration** in `progress.ts` so any existing `wishub:completed` local progress carries
    over. **Directory/repo stays `WISHUB`** (only the brand changed).
- 🔗 **Account-linking hardened (Carlos's request #2):** so a friend who signs up manually with
  `friend@gmail.com` (and the admin emails) gets **auto-linked** when Google OAuth goes live:
  - **Signup email is now REQUIRED** (still *unverified* — no email provider) — `validation.ts`
    + the signup form field. Without an email there's nothing to link on later.
  - Extracted pure, testable helpers `pickLinkedUser` (Google-id match wins, else email match) and
    `mergeGoogleProfile` (fills missing fields, never overwrites the user's own) into `auth/google.ts`;
    the callback route now uses them. The existing find-by-googleId→link-by-email→create flow is
    unchanged in behavior, just clearer + covered.
  - `.env.example` `ADMIN_EMAILS` now lists **both** `cavilla@uach.mx,carlosavillah90@gmail.com`.
  - **+8 unit tests** (linking helpers + email-required validation + `isAdminEmail` for both admin
    emails, case-insensitive) → **54 tests** total, all green.
- 🎓 **§18.E auth gating shipped** (the "NEXT SESSION" build item):
  - **Diploma is login-gated.** When accounts are enabled, a guest on the conclusion page sees a
    "log in / create account to claim" card instead of the download; the free-text name input is
    **removed for signed-in users** (diploma is issued in the **account name**). The no-DB fallback
    (pure-guest/localStorage mode) keeps the editable name + local diploma so dev/no-DB deploys work.
  - **Real exam grades persist:** new Prisma **`ExamResult`** model (`score`/`total`/`passed`/
    `attempts`, unique per user+course) + `auth/exam-actions.ts` (`recordExamResult`/`getExamResult`).
    `FinalTestPlayer` records the grade on pass (signed-in only); the conclusion's "Final check"
    pill now shows the saved `score / total`. Ran `prisma generate`; **`db:push` needed at go-live**.
- ✅ **Green gate:** `tsc` + `eslint` + **54 tests** + `next build` (12 routes) all clean. **Runtime
  smoke (no-DB dev server):** `/` shows VillaAula ×8 / zero WISHUB + footer note; `/login`,
  `/signup` (guest "coming soon" card + VillaAula wordmark), `/level/1/conclusion` ("VillaAula
  Foundations Diploma") all 200.
- ⚠️ **Untested live** (no Postgres in dev): the OAuth linking runtime + exam-grade writes/reads +
  the signed-in/guest diploma gate. Carlos's go-live (§17) is the confirmation.

### 2026-06-23 — Session 8 (auth hardening — building the login feature)
- 🧭 **Decision (Carlos):** the **Google OAuth client is owned by his personal Gmail**, not
  `cavilla@uach.mx` — keeps the personal project off the UACH Workspace rail (control/longevity) and
  avoids Internal/External + admin-policy friction. Consent screen = **External, Published**, basic
  scopes only (no verification). Both emails stay in `ADMIN_EMAILS`. (See §17 step 4.)
- 🔎 **Audit:** the full auth scaffold (Prisma User/Progress, jose JWT sessions, bcrypt, dual-auth
  Server Actions, Google OAuth code-flow with CSRF state + account-linking, providers, login/signup
  UI) was **already built** in Session 3 and is correct — no rebuild needed.
- ✅ **Hardened the security core (testable without a DB):** extracted `lib/auth/token.ts` (pure JWT
  sign/verify, no `next/headers`) and `lib/auth/validation.ts` (pure signup rules). `session.ts` now
  does cookie I/O only + re-exports token primitives (callers unchanged); `signupAction` uses
  `validateSignup()`. New `lib/auth/auth.test.ts` — **10 tests** (JWT round-trip, wrong-secret /
  tampered / unset-secret rejection, sign-throws-without-secret, bcrypt, validation). **46 tests** total.
- ✅ **Verified guest mode (prod server):** `/login` + `/signup` → 200 (render "accounts saved on this
  device"); `/api/auth/google` → 307 `/login?error=google_disabled` when unconfigured.
- ⚠️ **Still untested live** (no local Postgres here): the signup/login/OAuth **runtime** + DB writes.
  Query shapes are typechecked against the schema; crypto is unit-tested. Carlos's go-live smoke test
  (§17 step 6) is the final confirmation once `DATABASE_URL` + the OAuth client are set.
- ⏭ **Offered next:** §18.E gating — login REQUIRED for diploma/grades, remove the free-text diploma
  name (use account name), persist real exam scores.

### 2026-06-23 — Session 7 (listening pass — `LISTENING_PASS.md`)
- 🎯 **Goal (Carlos):** distribute **short, casual listening** like speaking — **1 per unit, 4/level**
  (10 new edge-tts clips). Comprehension = **mixed MCQ + T/F**. Spec: `LISTENING_PASS.md`.
- 🏁 **DONE — 10 listening clips added, 1 per unit across all 4 levels (5 MCQ + 5 T/F).** Each is a
  short casual edge-tts clip + comprehension Q, in a lesson that had no speaking/listening:
  - **L1**: U1 `to-be` ("a quick hello", MCQ). *(U2/U3/U4 already had listening.)*
  - **L2**: U1 `how-often` (T/F) · U2 `would-like` (MCQ) · U4 `used-to-do` (T/F). *(U3 already had it.)*
  - **L3**: U1 `interrupted` (MCQ) · U3 `preferences` (T/F) · U4 `advice-obligation` (MCQ). *(U2 had it.)*
  - **L4**: U1 `reported-statements` (T/F) · U2 `second-conditional` (MCQ) · U4 `phrasal-verbs` (T/F).
    *(U3 had it.)*
  - **Every unit in the program now has exactly 1 listening + (L2–L4) 1 speaking.** 16 MP3s in
    `public/audio/`; `tools/generate_audio.py` CLIPS updated.
  - ✅ tsc + lint + 36 tests (`validateAudioFiles` covers all 16) + build. **Verified on the prod
    server**: sampled one lesson per level → audio `<source>` + comprehension question both render;
    all 10 new MP3s serve 200.
- 🌙 **Loop wound down here (2026-06-23). Listening pass complete; clean tree, build green.** Next
  remains **Carlos's go-live (§17)** + deferred REFACTOR §3-E/§3-F (need live DB).

### 2026-06-23 — Session 6 (curricula loop — finish L3, author L4)
- ✅ **C2 part 2 — Level 3 COMPLETE & WIRED LIVE.** Authored **Unit 3 "What If?"** (zero
  conditional · first conditional · connectors `unless/as long as/in case` · first-conditional +
  modals · preferences `would rather/prefer/better`) and **Unit 4 "What Should I Do?"** (should vs
  have to · must/mustn't · may/might/need to · polite requests could/would · modal+have:
  must/should/might have). Now **4 units / 20 lessons / 4 speaking / 1 new reading**; final test
  extended **10→16 Q (pass 12)**, conclusion finalized. **Wired into `catalog.ts`** (`courses` +
  real `LEVEL_META[3].focus`); the Level 3 card auto-activates. Removed the standalone
  `validate.test.ts` L3 case (the `courses` test covers it now). ✅ tsc + lint + **36 tests** +
  build green; 12 routes. `levelRange()` now reads "Levels 1–3" everywhere automatically.
- ✅ **C3 — Level 4 authored & wired (NEW).** Extracted the real `s4u1–s4u4` spine (cropped via
  the tts-venv `crop.py`, read the legible tiles) into `CURRICULA_SPINE.md`, then authored
  `content/level4.ts` (B1+/B2): **U1 "Who Said What?"** (perfect-tense review → reported speech:
  statements / commands / questions / time-place refs), **U2 "What Would You Do?"** (infinitives ·
  gerunds · 2nd conditional · wish/if-only present · 3rd conditional + wish past), **U3 "Do You
  Watch Sports?"** (present-for-future · have to · be able to across tenses), **U4 "How Addictive
  Is It?"** (phrasal verbs · linking words · irregular comparatives · -ever words · adverbs of
  place). 4 units / 20 lessons / 4 speaking / 2 readings; 16-Q final (pass 12). Wired into
  `catalog.ts` (`courses` + `LEVEL_META[4]`); the L4 card auto-activated. ✅ green gate.
- ✅ **C4 — audio + polish (NEW).** Added one edge-tts **listening block + comprehension Q** to each
  new level (L2 `c2u3l3` was/were · L3 `c3u2l1` present perfect · L4 `c4u3l2` future plans),
  generated the 3 MP3s via `tools/generate_audio.py` (throwaway tts venv) into `public/audio/`,
  updated `CLIPS`. Deleted the two **orphaned** old-L2 clips (`l2-u1-a1`, `l2-u2-a1`).
  `validateAudioFiles` green. ✅ tsc + lint + 36 tests + build.
- ✅ **Runtime smoke test:** dev server up, all L3/L4 routes (intro/lessons/final/conclusion) →
  **200**; landing renders "Levels 1–4", both new cards show "Ready" with correct focus labels, the
  L4 audio `<audio src="/audio/c4u3l2-a1.mp3">` renders, L3 final shows "Score 12 of 16".
- 🏁 **Phase C COMPLETE (C1–C4). The whole program (Levels 1–4) is content-complete and live.**
  Remaining work is **Carlos's go-live (§17)** + deferred engineering (REFACTOR §3-E/§3-F, need live
  DB). Clean working tree, build green, 36 tests pass — safe to stop here.

### 2026-06-22 — Session 5 (speaking + curricula loop — `SPEAKING_AND_CURRICULA.md`)
- ✅ **Iteration S1 done (speaking model + AI service + analyze route):**
  - `lib/types.ts`: new `speaking` question type + `SpeakingConfig` (`target`, `acceptedAnswers`,
    `maxSeconds`). `content/validate.ts` validates it (non-empty target + answers) — exhaustive
    switches in `grading.ts`/`QuestionCard.tsx` updated with safe `speaking` cases.
  - `lib/ai/gemini.ts`: `@google/genai` lazy client (inert without `GEMINI_API_KEY`, like
    `lib/db.ts`), `geminiConfigured()`, `GEMINI_MODEL = "gemini-3.1-flash-lite"` (matches SUSAI).
    **Design choice:** Gemini ONLY transcribes; WISHUB's own `gradeOpen` decides correctness
    (lenient, deterministic, testable — better than letting the model score).
  - `POST /api/speaking/analyze` (Next `formData()`, no multer): looks the `SpeakingConfig` up from
    content **by `questionId`** (never trusts client answers), 10 MB cap, friendly 503 without a key.
  - `.env.example` gained `GEMINI_API_KEY`; real key stored in **gitignored `.env`** (verified not
    tracked). `npm i @google/genai`.
  - ✅ **Live Gemini call smoke-tested:** generated a TTS clip → `gemini-3.1-flash-lite` transcribed
    it correctly. Model id + audio multimodal + key all confirmed working (no committed live test —
    costs quota). ⚠️ content note: lenient `acceptedAnswers` should include homophones (Ana/Anna).
  - ✅ tsc + lint + build + **36 tests** green; `/api/speaking/analyze` route registered.
- ✅ **Iteration S2 done (recorder + speaking UI + dispatch):**
  - `hooks/useRecorder.ts`: MediaRecorder wrapper (start/stop, elapsed + hard cap, playback
    object-URL, `unsupported`/`denied` states, full cleanup). One-time capability detection is a
    post-mount effect (SSR-safe; lint rule disabled on that line with rationale).
  - `components/exercise/SpeakingQuestion.tsx`: record → playback → "Check my answer" →
    `POST /api/speaking/analyze` → shows "we heard …" + ✓/almost + feedback. Has a **Skip** (mic
    denied / no mic → never traps the learner) and, when **speaking is disabled (no key)**, shows a
    friendly note and auto-marks attempted so the lesson never blocks.
  - `speakingEnabled` (= `geminiConfigured()`) now flows to the client via `SessionProvider`
    (layout computes it server-side, like `authEnabled`). Dispatch added in **LessonPlayer** and
    **FinalTestPlayer** (speaking → `SpeakingQuestion`, else `QuestionCard`). Route strips codec
    params from the blob mime (`audio/webm;codecs=opus` → `audio/webm`) for Gemini.
  - ✅ tsc + lint + build + 36 tests green. Full record→route round-trip verified in S3 (needs a
    real L1 speaking question to exist).
- ✅ **Iteration S3 done (Level 1 speaking + full live verification):**
  - Added two very-basic **"repeat this phrase" speaking questions** to Level 1 (closed targets so
    the deterministic grading works): `l3-q4` "Good morning!" (greetings lesson) and `l4-q4` "The
    sky is blue." (colors lesson). Validator/tests green over them.
  - ✅ **Full route round-trip verified live** (dev server + real Gemini): TTS clip of the target →
    `POST /api/speaking/analyze` → `{transcription, correct:true, feedback}`; a **mismatched** clip →
    `correct:false` with helpful feedback; an **unknown questionId → 404** (server-side lookup
    rejects it). Confirms formData→Buffer→`getQuestionById`→Gemini→`gradeOpen` end to end.
  - ✅ tsc + lint + build + 36 tests green.
- 🏁 **Phase S (speaking) COMPLETE & LIVE-VERIFIED.** The feature works end to end with
  `GEMINI_API_KEY` set; without it, speaking degrades gracefully (friendly note, auto-pass, never
  blocks). For Replit go-live, add `GEMINI_API_KEY` to Secrets (see §17 style). Speaking is also
  ready to drop into L2/L3/L4 as they're authored.
- ✅ **C1 (part 1) — Level 2 spine extracted.** Cropped+upscaled `s2u1–s2u4` (scratchpad
  `crop.py` via the tts venv; 2×3 tiles at 2.5× = fully legible) and read the real 4-unit A2 spine
  into **`CURRICULA_SPINE.md`** (the authoring contract): U1 directions/present-simple+frequency/
  can/present-continuous · U2 going-to/will/quantity(some-any, there is-are, how much-many)/
  articles · U3 adverbs+purpose/subject-object pronouns/was-were/simple-past-regular+questions ·
  U4 simple-past irregulars/used-to/duration/last-ago. Confirms the **shipped 2-unit L2 was a wrong
  guess** — full rebuild justified. ⚠️ §9: invent original reading titles (don't reuse the book's).
- ✅ **C1 (part 2) — Level 2 Units 1 & 2 authored (real content).** Rewrote `content/level2.ts`
  from `CURRICULA_SPINE.md`: **Unit 1 "Getting Around"** (directions/imperatives · present-simple +
  frequency · `can` · present-continuous yes/no · present-continuous Wh- + clothes) and **Unit 2
  "Plans & Plenty"** (going-to · will/won't · countable-uncountable + would-like · some/any + there
  is/are · how much/many + articles). 5 lessons each, 100% original, A2-calibrated, mixed types incl.
  **2 speaking** + 2 readings; new canonical IDs (`c2u1l1`…). 10-Q final (pass 8), conclusion,
  diploma. Updated `LEVEL_META[2].focus`. ✅ tsc + lint + build + 36 tests (validator over the new
  content) green. (Old `l2-u1-a1.mp3`/`l2-u2-a1.mp3` now unreferenced — regenerated in C4.)
- ✅ **C1 COMPLETE — Level 2 fully rebuilt (4 units, 20 lessons).** Added **Unit 3 "Back Then"**
  (adverbs+purpose · subject/object pronouns · was/were · simple-past regular · simple-past
  questions) and **Unit 4 "When It Happened"** (irregular past · used-to actions · used-to states ·
  past duration · last/ago). Extended the final test to **16 questions (pass 12)** across all units;
  full conclusion + diploma. 4 speaking questions total, 100% original, A2-calibrated. ✅ tsc + lint +
  build + 36 tests (validator over all of L2) green.
- ✅ **C2 (extract) — Level 3 spine captured** in `CURRICULA_SPINE.md` (B1): U1 **Past Continuous**
  (basic/interrupted/specific-time/while/atmosphere), U2 **Present Perfect** (ever-never/for-since/
  vs-simple-past/just-already-yet), U3 **Conditionals** (zero/first/connectors/+modals/preferences),
  U4 **Modals** (have-to-should/must/may-might/requests/modal+have). 7 src lessons in U4 collapse to 5.
- ✅ **C2 (author, part 1) — Level 3 Units 1 & 2 authored** in `content/level3.ts`: **Unit 1 "In
  the Middle of It"** (past continuous: basic / interrupted-`when` / specific-time / `while` /
  atmosphere) and **Unit 2 "Have You Ever?"** (present perfect: basic / ever-never / for-since /
  vs-simple-past / just-already-yet). 10 lessons, 100% original B1, 2 speaking + 1 reading, 10-Q
  final (pass 8), conclusion, diploma. **Deliberately NOT wired into `courses` yet** (so the
  Level 3 card stays "Soon" — no half-course shown to learners); a `validate.test.ts` case checks
  the WIP content (`validateCatalog([level3])` → clean). ✅ tsc + lint + build + **37 tests** green.

- 🌙 **STOPPED FOR THE NIGHT (2026-06-22). Clean state: working tree committed, build green, 37
  tests pass.** Everything below is the menu for tomorrow.

  **TOMORROW — START HERE (resume the loop):**
  `/loop WISHUB\SPEAKING_AND_CURRICULA.md and WISHUB\HANDOFF.md — continue Phase C from C2 part 2`
  1. **C2 part 2 — finish Level 3:** add **Units 3 & 4** to `content/level3.ts` (U3 conditionals:
     zero/first/connectors `if-unless-when-as long as`/first+modals/preferences `would rather`;
     U4 modals: have-to-should/must/may-might/requests/modal+have — spine in `CURRICULA_SPINE.md`).
     Extend the final test to ~16 Q (pass 12), finalize the conclusion. **Then WIRE IT LIVE:** in
     `content/catalog.ts` `import { level3 }` + add to `courses`, and set the real
     `LEVEL_META[3].focus` (`"past continuous · present perfect · conditionals · modals"`). The
     card auto-activates. Move the L3 validate test from the standalone case into the main
     `courses` check (or just delete it — `courses` will cover it).
  2. **C3 — Level 4:** extract `s4u1–s4u4` spine (crop+read via scratchpad `crop.py` + the tts
     venv, 2×3 @2.5×; add to `CURRICULA_SPINE.md`), author `content/level4.ts`, wire into catalog.
     (From thumbnails L4 ≈ simple past/irregulars, used-to, duration, last-ago at higher depth —
     confirm by reading.)
  3. **C4 — audio + polish:** generate edge-tts MP3s for the new listening/reading blocks
     (`tools/generate_audio.py` — add CLIPS, run via the tts venv), set `mediaUrl`s, confirm
     `validateAudioFiles` green. With 4 active levels, `levelRange()` auto-reads "Levels 1–4".
     Optional: delete the now-orphaned `public/audio/l2-u1-a1.mp3` & `l2-u2-a1.mp3` (old L2).
  4. **Then Carlos's go-live items** (unchanged): set `GEMINI_API_KEY` (speaking) + Postgres/auth
     secrets on Replit per §17; smoke-test. Deferred engineering: REFACTOR.md §3-E (auth gating +
     scores) and §3-F (TS→Postgres content).

  **Reusable how-to (so tomorrow is fast):**
  - **Read a dense syllabus PNG:** `tools/.ttsenv/Scripts/python.exe <scratchpad>/crop.py
    reference/sNuM.png <scratchpad>/out 2 3 2.5` → Read the `r*c*.png` tiles (left tiles c0 =
    Lesson/Grammar/Vocab = the spine).
  - **Author a level:** copy the shape of `content/level2.ts` (now the canonical 4-unit example);
    canonical IDs `c{level}u{n}l{n}` / `…-q{n}` / `…-c{n}`/`-a{n}`; one short exercise per lesson
    (grammar note + ~3 mixed questions incl. **speaking**); §9 = original wording, **invent
    reading titles** (don't reuse the book's). Calibrate per level (§18.B).
  - **Speaking is DONE & live-verified** — just add `type:"speaking"` questions; closed
    "repeat this phrase" targets with lenient `acceptedAnswers`; avoid number homophones.
  - **Green gate every iteration:** `npx tsc --noEmit && npm run lint && npm test && (rm -rf
    .next && npm run build)`. Commit per iteration. **Never `git add` `.env`** (guard:
    `git status --short | grep -i '\.env$'`).
  - **Secret:** `GEMINI_API_KEY` lives in gitignored `WISHUB/.env` (already set, verified
    untracked). Next dev auto-loads it.

### 2026-06-22 — Session 4 (de-hardcode / harden — planning)
- 📋 Did a full read of `src/` and wrote **`REFACTOR.md`** — the de-hardcode/best-practices
  punch-list. Headline finding: the **course catalog is hand-typed in 3 disconnected places**
  (`page.tsx` + `levels/page.tsx` `LEVELS` arrays) while the real courses live as data, and it
  already lies (`Syllabus.tsx` says "all four units" — Level 2 has 2). Plan is 6 loop-ready
  iterations: **A** catalog single-source-of-truth → **B** shared site/brand/palette config →
  **C** content integrity + ID normalization + validator → **D** vitest + core unit tests →
  **E** `⚠ BEHAVIOR` auth-gating + real exam scores (HANDOFF §18.E) → **F** `⚠ BEHAVIOR` the big
  TS→Postgres relational content model (§7/§18.I). A–D are behavior-preserving and fully
  loop-verifiable; **E & F deferred to a later session (live DB / UX — can't be loop-verified).**
- ✅ **Scope locked (Carlos):** the loop runs **A → B → C → D, then stops.** E/F later.
- 📥 **Carlos uploaded the real curricula for ALL FOUR levels** to `reference/`
  (`s1u1…s4u4` — **every level is a 4-unit program**). This **unblocks HANDOFF §18.A / §13**
  (was pending). Consequences captured in `REFACTOR.md §6` (a **content track after the loop**):
  the shipped **Level 2 is wrong** (only 2 units, generic A2 inference) → **rebuild to
  `s2u1–s2u4`**; **author Levels 3 & 4 from scratch** (`s3`/`s4`). ⚠️ the source PNGs are dense
  and downscale poorly — read them zoomed/cropped before authoring.
- Working tree clean on `master` (own git repo, no remote) → every loop iteration is reversible.
- ✅ **Iteration A done (catalog = single source of truth):** new `src/content/catalog.ts` owns
  `courses` + `getCourse` (moved out of `content/level1.ts`) and a derived **`levelCatalog`** —
  active levels come from the real `Course` data, levels 3–4 are `status:"soon"` stubs that
  auto-light-up when authored. **Killed both hand-typed `LEVELS` arrays** (`page.tsx` +
  `levels/page.tsx`); repointed the 4 route imports to `@/content/catalog`. Copy is now derived:
  `levelRange()`/`activeCourseCount` ("Levels 1 and 2 are ready"), and `Syllabus.tsx`'s false
  "all four units" → `{course.units.length}`. ✅ tsc + lint + build green; all 11 routes intact.
- ✅ **Iteration B done (shared site/brand/palette config):** new `src/lib/site.ts` is the one
  home for `BRAND`/wordmark/`BACKRONYM`/`TAGLINE`/`BYLINE`/`LEVEL_BAND`/diploma defaults and the
  `PALETTE` (mirrors the `globals.css` tokens). Repointed `layout.tsx` (metadata), `page.tsx`
  (logo, hero band, footer), `AuthShell`/`AuthForm` (wordmark + "New to WISHUB?"), and the
  **diploma SVG now reads every colour from `PALETTE`** instead of re-hardcoding hex. Left alone
  (correctly): internal storage keys/cookies (`wishub:completed`, `wishub_session`), per-course
  diploma content data, and `globals.css` (the canonical token source). Minor note: the logo
  SVG markup is still duplicated between `page.tsx` and `AuthShell` — a small `<Logo>` extraction
  for a later tidy. ✅ tsc + lint + build green; 11 routes intact.
- ✅ **Iteration C done (content validator):** new `src/content/validate.ts` — `validateCatalog`
  (pure/isomorphic) checks unique course/unit/lesson slugs, **globally unique content/question
  ids**, MCQ `correctIds ⊆ options`, non-empty open answers, well-formed match pairs, audio
  blocks having mediaUrl-or-transcript, and finalTest `passingScore` within `1..questionCount`;
  plus `assertValidCatalog` (throws) and a Node-only `validateAudioFiles` (mediaUrl exists under
  `public/`). **Decision:** did *not* mass-rename existing IDs — they're already unique; the
  checker enforces uniqueness + structural correctness, and the canonical ID scheme is documented
  in the file header for new content (L3/L4). Compiles green (tsc/lint/build); **executed against
  real content in Iteration D** (vitest), where any violation gets fixed.
- ✅ **Iteration D done (test harness — FINAL loop step):** added **vitest** (`vitest.config.ts`
  with the `@/`→`src` alias; `npm test`/`test:watch`). **34 tests across 4 files**, all green:
  `grading.test.ts` (normalize accents/punct/case + all 4 graders + dispatch + wrong-type safety),
  `progress.test.ts` (key builders, `isCourseComplete`, server-safe localStorage), `google.test.ts`
  (`safeNext` open-redirect cases), and `validate.test.ts` — which **runs the validator over the
  REAL content** (proves no dup ids, valid MCQ keys, in-range passing scores) **and checks every
  audio `mediaUrl` exists on disk**, plus negative cases. Content came back clean. ✅ tsc + lint +
  build green; 11 routes intact.
- 🏁 **A–D loop COMPLETE (2026-06-22).** The de-hardcode/harden pass is done: catalog is a single
  source of truth, brand/palette centralized, content integrity is enforced by a validator + a
  test suite. All behavior-preserving; 4 clean commits on `master`. **Deferred (a later session):**
  Iteration **E** (auth gating + real exam scores, REFACTOR.md §3-E) and **F** (TS→Postgres content
  model) — both need the live DB. **Next concrete work = the §6 content track:** rebuild Level 2 to
  its real 4-unit `s2u1–s2u4` spine, author Levels 3 & 4 from `s3`/`s4` (read the dense PNGs zoomed),
  each registered in `courses` and checked by the validator.
- 🗺️ **Next loop spec written → `SPEAKING_AND_CURRICULA.md`.** Carlos also wants **speaking
  exercises** (a new `speaking` question type, browser MediaRecorder → `@google/genai` multimodal
  transcribe+grade, ported from `AudioReviewer/`) added to Level 1 first, *then* the L2 rebuild and
  L3/L4 authoring. Next loop = **Phase S** (S1 model+AI route, S2 recorder+UI, S3 L1 speaking) →
  **Phase C** (C1 rebuild L2, C2 L3, C3 L4, C4 audio/polish). ⚠️ Speaking needs `GEMINI_API_KEY`
  (Carlos) and is built behind a `geminiConfigured()` fallback — the loop won't make live calls;
  **Carlos smoke-tests the Gemini runtime** (like the auth §17 handback).

### 2026-06-22 — Session 3 (autonomous `/loop`)
**Decisions locked this session (Carlos):** ships **online on Replit** with **Replit's
default Postgres** (real DB by the time the friend uses it). Auth = **dual**: in-app
**manual account creation** (username/email + password, hashed) **AND Google OAuth** —
manual is required because the friend may not have a Google account. **No email validation
for now** (no Resend/email API) — signup is fully in-app. Progress + diploma must persist
per-user server-side. Loop order: (1) UI/UX pass → (2) Postgres + dual-auth + server-progress
spine & harden L1→diploma → (3) real edge-tts audio → (4) Level 2.

- ✅ **Baseline commit** of the (previously uncommitted) Phase 2 working tree, so all
  autonomous edits are reversible.
- ✅ **Iter 1 — UI/UX detail pass (step 1):**
  - **Mention-vs-use typography fix** (the reported "We use the for…" confusion): `RichText`
    now takes a `variant="prompt"`. In a question prompt, a studied term (`**word**`) renders
    as a highlighted coral chip and a `___` blank renders as a real underlined gap; the prompt
    text weight dropped from `font-bold`→`font-semibold` so the chip actually stands out (the
    old bug: bold-inside-bold rendered *lighter*). Default `<strong>` is now `font-bold`.
  - Emphasized two bare grammar-term prompts ("**simple present**", "**present continuous**").
  - **Match input** (`QuestionCard`): answers are de-duplicated + sorted deterministically so
    they no longer line up positionally with the prompts (was a giveaway), and once an answer
    is chosen it's disabled in other rows (can't reuse one answer for two prompts).
  - **Open answers: press Enter to check** (was click-only).
  - Landing copy: dropped the soon-to-be-false "No account needed" / "No sign-up" lines.
  - ✅ `tsc`, `eslint`, and `next build` all green.
- ✅ **Iter 2 — platform spine foundation (step 2, part 1):**
  - **Two version decisions forced by brand-new tooling (both deliberate, for a feature
    that can't be live-tested in the loop):**
    1. **Auth = first-party, NOT NextAuth.** Next 16 renamed `middleware.ts`→`proxy.ts` and
       made `cookies()` async; its own auth guide now recommends a `jose` JWT-in-httpOnly-cookie
       + Server Actions + bcrypt pattern. NextAuth v5 (beta) on Next 16 is an untestable gamble,
       so we use the documented first-party pattern. Google OAuth will be a plain
       authorization-code flow with `fetch` (no fragile lib).
    2. **Prisma pinned to v6 (6.19.3).** Prisma 7 dropped `url` from the schema datasource
       (requires driver adapters + `prisma.config.ts`) — newer than training, more moving parts.
       v6 is stable, matches Carlos's Atina setup, works on Replit.
  - Deps added: `jose`, `bcryptjs`, `@prisma/client`/`prisma` v6 (+ `@types/bcryptjs`).
  - `prisma/schema.prisma`: **User** (one row supports BOTH manual `username`+`passwordHash`
    AND Google `googleId`+`email`; both unique+nullable so accounts link by email later;
    `role`) + **Progress** (`@@unique([userId, key])`, `key` mirrors the localStorage keys
    exactly so migration is a straight insert). Client generated.
  - `src/lib/db.ts`: lazy Prisma singleton (never constructed without `DATABASE_URL`, which
    would throw) + `dbConfigured()`.
  - `src/lib/auth/`: `session.ts` (jose sign/verify, async `cookies()`, `authConfigured()` =
    DB **and** `AUTH_SECRET`), `password.ts` (bcrypt), `users.ts` (DAL `getCurrentUser()` +
    `ADMIN_EMAILS` allowlist). All inert when env is absent → local dev runs unchanged.
  - `.env.example` (DATABASE_URL, AUTH_SECRET, NEXT_PUBLIC_APP_URL, GOOGLE_*, ADMIN_EMAILS);
    `.gitignore` un-ignores `.env.example`. `package.json`: `postinstall: prisma generate` +
    `db:push`/`db:migrate`/`db:studio`. ✅ `tsc` + `next build` green.
- ✅ **Iter 3 — dual auth surface (step 2, part 2):**
  - **Server Actions** (`src/lib/auth/actions.ts`): `signupAction` (username 3–32 + password ≥8,
    optional name/email; admin role auto-set from `ADMIN_EMAILS`; P2002 → "taken"),
    `loginAction` (by username OR email; uniform error message), `logoutAction`. Redirects use
    `safeNext` (same-origin only) and fire outside try/catch.
  - **Google OAuth** (plain `fetch`, no lib): `GET /api/auth/google` sets a short-lived
    `wishub_oauth` state cookie and redirects to consent; `GET /api/auth/google/callback`
    verifies state, exchanges the code, reads `/userinfo`, upserts (by googleId → link by email
    → create), and sets the session cookie on the `NextResponse`. `session.ts` refactored to
    share `signSessionToken`/`SESSION_COOKIE`/`sessionCookieOptions` between both paths.
  - **UI**: `/login` + `/signup` (`AuthForm` client comp via `useActionState`; `AuthShell`
    chrome). Shows "Continue with Google" only when configured; when auth is unconfigured it
    shows a friendly "accounts coming soon — progress saves on this device" card. OAuth error
    codes surface as friendly copy. Landing "Log in" now → `/login`.
  - ✅ `tsc` + `next build` green; routes `/login`, `/signup`, `/api/auth/google[/callback]`.
  - ⚠️ **Untested live** (no DB/creds in the loop): the signup/login/OAuth *runtime* needs
    Carlos to set env on Replit + `npm run db:push`. Logic is conventional + reviewed.
- ✅ **Iter 4 — server-persisted progress (step 2, part 3 — the "save his progress" core):**
  - `progress.ts` refactored to pure key builders + localStorage primitives (no React).
  - `src/lib/auth/progress-actions.ts` (Server Actions): `getProgressKeys`, `addProgressKey`
    (upsert on `userId_key`), `mergeProgressKeys` (transactional). All no-op without a session.
  - `SessionProvider` (client context, fed by the root layout's `getCurrentUser()`) +
    `ProgressProvider` (`useProgress()` → `{ completed, markCompleted, ready }`): **server mode**
    when signed in (loads DB keys, writes via actions), **local mode** otherwise (localStorage).
    On first sign-in it **merges any guest localStorage progress into the account, then clears it**.
  - Root `layout.tsx` now async: wraps the app in both providers. `AccountMenu` (name + Log out
    when signed in, else Log in) replaces the landing's static Log in. `DiplomaPanel` defaults the
    learner name to the account name. `LessonPlayer`/`FinalTestPlayer`/`Syllabus` now read/write
    progress through `useProgress`.
  - Fixed an iter-1 nit: prompt weight `font-semibold`→`font-medium` (Hanken only loads 500/700/800,
    so 600 wasn't a real weight; 500 also makes the coral term-chips pop more).
  - ✅ `tsc` + `eslint` + `next build` all green.
  - ⚠️ **Replit note:** the session nav + server-progress need the env present **at build time**
    (so the cookie-reading layout renders dynamically). Replit Secrets are available at build, so
    this is automatic there; `npm run dev` is always dynamic. Only a "build with no env, then run
    with env" would show a stale logged-out nav — not a normal flow.
  - ⚠️ Still **untested live** (no DB/creds in loop). Carlos on Replit: set env (DATABASE_URL,
    AUTH_SECRET, NEXT_PUBLIC_APP_URL, optionally GOOGLE_*) → `npm run db:push` → deploy.
- ✅ **Iter 5 — end-to-end hardening (step 2 complete):**
  - Re-read the whole L1 flow: lesson route, final-test route, `/levels`, level hub, conclusion.
    All use async `params` + `notFound()` correctly; nav links/targets are consistent.
  - Verified **no progress-key collisions** (all unit slugs `1–4`, all lesson slugs unique) and
    the gating logic: lesson "complete" = all questions attempted (lenient by design), but the
    **diploma still requires passing the 12-question final at ≥10**, so it stays meaningful.
  - Added **`SaveProgressNudge`**: a subtle guest-only banner (shown only when accounts are
    enabled) on the level hub + conclusion, linking to `/login`/`/signup` with `next` set to the
    current path. Extended the session context with `authEnabled`.
  - Added **§17 — a Replit go-live runbook** so Carlos can flip auth/DB on.
  - ✅ `tsc` + `eslint` + `next build` green.
- ✅ **Iter 6 — real edge-tts audio (step 3 done):**
  - `tools/generate_audio.py`: edge-tts generator (BoardCraft approach, HANDOFF §10). Run via a
    **throwaway venv** `tools/.ttsenv/` (gitignored) made from `py -3` — deliberately NOT the
    CreAI venv that `python` resolves to (worlds-stay-separate). `CLIPS` mirrors the audio blocks.
  - Generated 3 MP3s → `public/audio/{u2-l3-a1,u3-l2-a1,u4-l5-a1}.mp3` (~28–48 KB), at **normal
    rate** (the player owns speed: defaults to 0.75x, plus 1x/1.15x). Set `mediaUrl` on those
    Content blocks, so `AudioBlock` now plays real `<audio>` instead of the speechSynthesis fallback.
  - ✅ `tsc` + `next build` green. To regenerate: see the docstring in `tools/generate_audio.py`.
- ✅ **Iter 7 — Level 2 content (step 4 done; ALL 4 LOOP STEPS COMPLETE):**
  - `src/content/level2.ts`: **"Everyday Stories" (A2)** — Unit 1 *Back in time* (was/were,
    regular -ed, irregulars, did/didn't) + Unit 2 *What's next* (going to, will, some/any,
    how much/many), each 4 lessons; 10-question final (pass 8), conclusion, diploma. 100%
    original. Registered in `courses` (`src/content/level1.ts`); `getCourse("2")` resolves.
  - Lit up Level 2 on the landing + `/levels` (status active, real focus labels), relabeled the
    still-locked L3/L4 to a forward A2→B1 path so they don't look like repeats of L1.
  - **Bugs fixed:** the two level cards hardcoded `/level/1` (Level 2 would've linked to L1);
    the diploma SVG seal hardcoded "1" (now uses `course.level`). Copy updated to "Levels 1 and 2".
  - ✅ `tsc` + `eslint` + `next build` green.
- ✅ **All four planned `/loop` steps are complete.** Remaining is **Carlos's live Replit
  setup (§17)** plus optional round-2 enhancements:
  - generate edge-tts audio for Level 2 (rerun `tools/generate_audio.py` with new CLIPS),
  - expand Level 2 to 4 units for parity with Level 1,
  - the **admin authoring UI** (Phase 3 item §3.16) so content isn't code-only,
  - a focused correctness review of the auth/OAuth/progress code before/after the first deploy.

### 2026-06-22 — Session 3, round 2 (post-plan enhancements)
- ✅ **Iter 8 — correctness review of the untested platform code.** Re-read auth actions,
  session, both Google routes, progress actions/provider, DAL. **No hard bugs** — the flows
  (signup/login/logout, OAuth state+exchange+upsert, cookie setting on Server Action vs Route
  Handler responses, redirect-outside-try-catch, guarded DB access) are correct. Two changes:
  - `ProgressProvider` first-login load did 2 DB round-trips (merge then fetch); now uses
    `mergeProgressKeys`'s return directly → 1 round-trip.
  - Documented the **email-linking trade-off** in the OAuth callback: because manual signup
    emails aren't verified (by design — no email provider), linking Google↔manual by email is
    trusted at this small scale. Revisit if WISHUB ever opens to strangers.
  - ✅ `tsc` + `eslint` + `next build` green.
- ✅ **Iter 9 — Level 2 audio (parity with Level 1).** Added a listening block + comprehension
  question to Level 2 Unit 1 (*was/were*, `l2-u1-a1`) and Unit 2 (*going to*, `l2-u2-a1`),
  extended `tools/generate_audio.py` CLIPS, generated both MP3s into `public/audio/`. Now 5
  generated clips total. ✅ `tsc` + `next build` green.
- 🏁 **Loop wound down here (2026-06-22).** All four planned steps + round-2 (review, audio
  parity) are done and committed. Stopping autonomous iteration so the next big items get
  explicit scope. **Open menu for next session / Carlos:**
  1. **Go live** — the real unblock: follow **§17** on Replit (Postgres + secrets + `db:push`),
     then smoke-test the auth/OAuth/progress runtime (the one thing untested in the loop).
  2. **Admin authoring UI** (Phase 3, §3.16) — CRUD on courses/units/lessons/questions so content
     isn't code-only. Largest remaining feature; worth scoping deliberately.
  3. **Expand Level 2 to 4 units** for full parity with Level 1.
  4. **Polish round 2** — a second visual sweep over the new auth pages + Level 2.

### 2026-06-22 — Session 2 (Phase 2 learner path)
- ✅ **Level 1 expanded to Units 1–4:** added `src/content/level1-phase2.ts` with original
  beginner ESL lessons for articles, demonstratives, present continuous, possessives,
  clothes/appearance, places, routines, third-person present simple, prepositions,
  questions/negatives, have/has, comparatives, superlatives, as...as, and can/can't.
- ✅ **Audio/read-aloud support added:** `src/components/exercise/AudioBlock.tsx` renders
  real `<audio>` playback when `mediaUrl` exists and a browser `speechSynthesis` fallback
  when only a transcript exists. Speed controls: `0.75x`, `1x`, `1.15x`.
  **Important:** persistent edge-tts MP3 generation/storage is still TODO; the UI/data path
  is ready for those files.
- ✅ **Final check added:** route `src/app/level/[slug]/final-test/page.tsx` plus
  `FinalTestPlayer` with passing-score logic and progress persistence via `finalTestKey`.
- ✅ **Conclusion + diploma added:** route `src/app/level/[slug]/conclusion/page.tsx` plus
  `DiplomaPanel`, completion status, learner-name input, and downloadable SVG diploma.
- ✅ **Navigation updated:** syllabus and lesson flow now continue across units and then to
  final check → conclusion/diploma. Landing/levels copy now says Level 1 is complete.
- ✅ **Validation green:** `npm.cmd run lint` passes. `npm.cmd run build` passes with
  Next.js 16.2.9 (routes: `/`, `/_not-found`, `/levels`, `/level/[slug]`,
  `/level/[slug]/final-test`, `/level/[slug]/conclusion`,
  `/level/[slug]/unit/[unit]/lesson/[lesson]`). On Windows, sandboxed PowerShell may hit
  `EPERM` on `.next/trace`; rerun build outside the shell sandbox or use a clean `.next`.
- ⏭ **Next:** generate/stage real edge-tts MP3 files for the transcript audio blocks, then
  begin Phase 3 (Postgres/Prisma, Auth.js Google login, admin allowlist, authoring UI).

### 2026-06-21 — Session 1 (planning + branding)
- ✅ Reviewed source program: `WISHUB/reference/s1u1.png … s1u4.png` (source book
  screenshots, Units 1–4). Beginner A1→A2 English.
- ✅ Agreed: build our own micro-LMS; source book is **inspiration only** (see §9 copyright).
- ✅ Locked stack, architecture, data model, design direction (this doc).
- ✅ **Name locked: WISHUB** after research (Lumina/Lumen/Vela/Prism all taken in edtech;
  earlier dictionary-name options were rejected; settled on WISHUB).
  - Web check: no education/LMS product named "WisHub." Other-category uses exist
    (wishub.app = wishlist app; thewishub.com = events; eSurfing Cloud "WisHub" = cloud
    compute). Edtech trademark lane looks clear; **prime domains taken** → plan to grab
    `wishub.mx` (+ `wishub.io`). **Final TM/domain clearance is Carlos's to run.**
- ✅ Found reusable audio engine in **BoardCraft** (`BoardCraft/README.md`, `AGENTS.md`):
  `edge-tts` neural voices, free, bilingual, rate control + SRT timing. Adopt for WISHUB
  audio (Phase 2). See §10.
- ✅ Renamed project directory to `WISHUB`; screenshots moved to `WISHUB/reference/`.
- ✅ **Phase 0 done:** scaffolded **Next.js 16.2.9 + React 19 + Tailwind v4** at the `WISHUB/`
  root (App Router, `src/` dir, `@/*` alias). `npm install` ok. Dev: `npm run dev` →
  http://localhost:3000 (both `/` and `/levels` return 200, no errors).
- ✅ **Landing page v1 built** — `src/app/page.tsx`, `src/components/HeroCloze.tsx`,
  `src/app/globals.css`, `src/app/layout.tsx`, `src/app/levels/page.tsx` (stub).
  Design = warm coral-on-cream; **Hanken Grotesk** display / **Inter** body / **Geist Mono**
  accents. Signature = the hero headline is a live fill-in-the-blank exercise ("English that
  finally ⟦clicks⟧" → types in, turns teal + check) plus a product preview card. Four-levels
  section maps to the real §9 grammar spine. **Pending Carlos's brand approval.**
- ✅ Landing approved by Carlos; running autonomously via `/loop` (dynamic mode) to finish
  through Phase 1.
- ✅ **Phase 1 — data layer done:** `src/lib/types.ts` (content schema §7),
  `src/lib/grading.ts` (`normalize` + `gradeQuestion` for all 4 types),
  `src/content/level1.ts` (original Unit 1 — 5 lessons: to-be / numbers+age /
  greetings+pronouns / colors / people+jobs; exercises use MCQ, open, true/false, match
  + 2 short readings; `courses` + `getCourse(slug)` helpers). `tsc --noEmit` clean.
- ✅ **Phase 1 — lesson player done:** `src/components/RichText.tsx` (mini-markdown, no dep),
  `exercise/GrammarNote.tsx` (native `<details>`), `exercise/ReadingBlock.tsx`,
  `exercise/QuestionCard.tsx` (open / MCQ / true-false / match inputs + Check / Try-again +
  feedback, wired to `gradeQuestion`), `exercise/LessonPlayer.tsx` (progress bar + completion
  + next-lesson link), route `app/level/[slug]/unit/[unit]/lesson/[lesson]/page.tsx`
  (Next 16 async `params`). Live: `/level/1/unit/1/lesson/to-be` → 200, `tsc` clean.
- ✅ **Phase 1 — navigation shell + progress done:** real `/levels` (four levels, L1 active),
  `app/level/[slug]/page.tsx` (intro + `Syllabus`), `src/components/Syllabus.tsx`
  (units/lessons with completion ticks + Continue/Start/Review), `src/lib/progress.ts`
  (localStorage completion + `useCompleted` hook). LessonPlayer marks completion on finish;
  landing CTAs now point to `/level/1`. `tsc` clean; `/levels` & `/level/1` → 200.
  **End-to-end flow works:** landing → level → syllabus → lesson → complete → next, persisted.
- ✅ **Phase 1 COMPLETE (build green):** added `app/not-found.tsx`; `npm run build` succeeds
  (Compiled ✓, TypeScript ✓; routes `/`, `/_not-found`, `/levels`, `/level/[slug]`,
  `/level/[slug]/unit/[unit]/lesson/[lesson]`). Unit 1 learner runtime works end-to-end and
  is committed. **`/loop` stopped here — target reached.**
- ▶ **Run it:** `npm run dev` → http://localhost:3000 (landing → Start Level 1 → syllabus →
  lessons → complete, progress saved in localStorage).
- ⏭ **Phase 2 (next session):** audio (edge-tts speed knob), Units 2–4, final test +
  Conclusion + downloadable diploma — see §3.
- ⚠️ Next.js 16 is newer than the agent's training; see repo `AGENTS.md` (it points to
  `node_modules/next/dist/docs/`). Only stable App Router basics used so far.

---

## 3. IMMEDIATE NEXT STEPS (build sequence)

Priority is "**friend can use Unit 1 tomorrow**." Get a working learner experience fast,
seed content as code, defer the heavy stuff.

**Phase 0 — Scaffold (do now)**
1. From `Brainstorm/WISHUB/`: `npx create-next-app@latest .` (TS, Tailwind, App Router,
   src dir, import alias `@/*`). (Scaffold into the project root; `HANDOFF.md` and
   `reference/` are non-conflicting.)
2. Add **shadcn/ui** + **Framer Motion**. Set up the design tokens from §8.
3. `git init` + initial commit (makes all later autonomous work reversible).

**Phase 1 — Learner runtime + Unit 1 (the tomorrow target)**
4. Content as **typed TS/JSON data** matching the §7 schema (NO database yet). Seed
   **Level 1 → Unit 1** with original exercises (see §9 for the grammar spine to cover).
5. Routes: `/` (landing + login button), `/levels` (pick 1–4), `/level/1` (intro +
   syllabus), `/level/1/unit/1/lesson/[n]` (the exercise player).
6. Build the four **question types** (open / MCQ / T-F / match) + **normalization grading**.
7. **Expandable grammar lesson** component (hidden by default).
8. **Progress** in `localStorage` (single-user MVP; no auth backend needed yet).
9. Polish: progress ring, correct/incorrect feedback, completion state. Ship.

**Phase 2 — After the first class**
10. Add **audio** content blocks (edge-tts pre-generated MP3 + speed knob via
    `playbackRate` / edge-tts `rate`; optional SRT read-along). Reuse BoardCraft (§10).
11. Add **reading** + **image (SVG/emoji)** content blocks polish.
12. Author **Units 2–4** of Level 1.
13. **Final test + Conclusion + downloadable Diploma** (PDF via React-PDF or SVG template).

**Phase 3 — Make it a real platform**
14. Move content from TS files → **Postgres + Prisma** (schema already mirrors §7, so this
    is mostly mechanical).
15. **Auth.js + Google** login; admin allowlist (`cavilla@uach.mx`); `acceptsGuests`
    per-course; guest role.
16. **Admin authoring UI** (CRUD on courses/units/lessons/content/questions).
17. Deploy (Vercel preferred for Next.js, or Replit Autoscale to match his other tools).

**Why this order:** the UI/UX hook is the *learner* experience, not the admin panel. Seeding
content as code lets the friend start after Phase 1; the DB + auth + authoring come later
without rework because the data shapes are fixed up front.

---

## 4. PRODUCT DECISIONS (locked for MVP)

- **No AI grading / no Gemini for MVP.** Open answers graded by deterministic
  **normalization** only (lowercase, trim, collapse whitespace, strip punctuation +
  accents, optional accepted-answers/synonyms list, optional case sensitivity flag).
  Gemini semantic grading is a **Phase 3+** fallback, behind a per-question flag. No API
  keys needed now.
  > **Update (2026-06-22):** AI is no longer *permanently* deferred. The §18 roadmap brings
  > **Gemini** in for **speaking grading (§18.C)** and **AI-first content authoring (§18.D)** —
  > a future phase needing `GEMINI_API_KEY`. Text MCQ/open/T-F/match stay deterministic.
- **Audio:** `edge-tts` (free, no key), **pre-generated at authoring time** → stored MP3.
  **Speed knob** for beginners = HTML5 `audio.playbackRate` (modern browsers preserve
  pitch) and/or pre-rendered slow track via edge-tts `rate`. (Deferred to Phase 2.)
- **Images:** SVG + emoji only (no generative images).
- **Progress:** `localStorage` for MVP → Postgres later.
- **Grammar lesson:** per-exercise, collapsed by default, expandable.
- **Copyright stance:** source book = inspiration only; we author 100% original content and
  never reuse the book's name or its exact titles/readings publicly (see §9).

---

## 5. TECH STACK (and why)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | One codebase for landing + learner SPA + API (route handlers / server actions). SSR for a fast, pretty landing. Best fit for a content+UI product; nothing extra to host. |
| UI | **Tailwind + shadcn/ui (Radix) + Framer Motion** | Total visual control + accessible primitives + the micro-animations that make ed-tech feel alive. This is the UX hook. |
| Data (MVP) | **Typed TS/JSON content files** | Zero infra; ship Unit 1 tonight. Shapes mirror the future DB schema (§7) so migration is mechanical. |
| Data (later) | **Postgres + Prisma** | The content↔question reuse model is relational. Prisma is Carlos's muscle memory (Atina). |
| Auth (later) | **Auth.js (NextAuth), Google** | He's done Google `@uach.mx` login in Cátedra. Admin = env allowlist; guests per-course. |
| Audio | **edge-tts** (reused from BoardCraft) | Free, no API key, natural bilingual voices, rate control, SRT timing. |
| Diploma | **React-PDF or SVG→PDF** | Generate on course completion. |
| Storage (later) | **Object storage** (Supabase / R2 / Replit) | For pre-generated audio + uploaded images. |
| Deploy | **Vercel** (or Replit Autoscale) | Vercel = best Next.js DX. Replit keeps parity with his other tools. |

**Tradeoff noted:** Carlos knows NestJS+Prisma; a NestJS API + Vite/React SPA is valid too.
We chose **Next.js full-stack** because it's *less* to build/maintain for a content+UI app
(no separate API service, unified auth, SSR landing). Prisma carries over either way.

---

## 6. ARCHITECTURE (short)

```
                 ┌───────────────────────────────────────────┐
   Browser ────► │  Next.js (Vercel / Replit)                │
   (learner /    │  • Landing + Auth (Google) [Phase 3]      │
    admin)       │  • Learner player (RSC + client widgets)  │
                 │  • Admin authoring UI       [Phase 3]     │
                 │  • Route handlers / Server Actions = API  │
                 └───────┬───────────────────┬───────────────┘
                         │                   │
              MVP: TS/JSON content     Later: Postgres (Prisma)
                         │                   │  courses, units, lessons,
                         │                   │  content, questions, items,
                         │                   │  enrollments, attempts, users
                         │
                 ┌───────▼──────────────────────────────┐
                 │ Authoring-time media (offline)        │
                 │ • edge-tts → MP3 (+ SRT)  [BoardCraft]│
                 │ • stored in object storage / public/  │
                 └───────────────────────────────────────┘
```

---

## 7. DATA MODEL (the core — reusable content)

**Key idea:** `Content` and `Question` are **independent, reusable rows**. An `Exercise`
is just an **ordered list of references** to them via `ExerciseItem`. That single join is
what enables "1 reading + 10 MCQs" OR "reuse that reading + 1 open question."

```
Course (a level, 1–4)
  id, slug, level, title, intro, syllabus(JSON), acceptsGuests:bool,
  order, hasFinalTest:bool, diploma(JSON)
   └─ Unit (module)        id, courseId, title, order
        └─ Lesson          id, unitId, title, order, grammarNote(rich, expandable)
             └─ Exercise   id, lessonId, title, order
                  └─ ExerciseItem   id, exerciseId, position, refType:('content'|'question'), refId
                                          │                               │
   Content  (REUSABLE) ─────────────────-┘                               │
     id, type:('reading'|'audio'|'image'|'svg'), title,
     body(rich text / markdown), mediaUrl, voice, meta(JSON)             │
   Question (REUSABLE) ──────────────────────────────────────────────────┘
     id, type:('open'|'multiple_choice'|'true_false'|'match'),
     prompt, points, config(JSON), answerKey(JSON)

   User        id, email, role:('admin'|'teacher'|'student'|'guest')
   Enrollment  id, userId, courseId, role, progress(JSON %), completedAt → diploma
   Attempt     id, userId, questionId, response(JSON), score, gradedBy:('auto'|'ai')
```

**`Question.config` (JSON) by type:**
- `open`: `{ acceptedAnswers: string[], charLimit, caseSensitive:bool, normalize:bool, useAiFallback:false }`
- `multiple_choice`: `{ options: {id,text}[], correctIds: string[], shuffle:bool }`
- `true_false`: `{ correct: boolean }`
- `match`: `{ pairs: {left, right}[], shuffleRight:bool }`
- *(planned)* `speaking`: `{ target: string, acceptedAnswers: string[], maxSeconds, level }` — learner
  records audio; AI transcribes + grades (lenient at L1). See §18.C.

Keeping the types in one `Question` table via JSON `config` avoids schema churn.
For the MVP TS-file version, model these as TS types/interfaces with the same shape.

---

## 8. DESIGN DIRECTION (working default — adjustable)

**Vibe (working choice, pending Carlos's final nod): "Warm & encouraging" base with subtle
gamification.** Deliberately the opposite of a cold, dated platform.

- **Personality:** human, supportive, modern, fast. Generous whitespace, soft surfaces,
  rounded corners. Celebrate progress (gentle confetti on completion, a progress ring).
- **Palette:** warm neutrals + **one vivid accent** (coral / terracotta / warm amber).
  ⚠️ **Avoid** TypingBee's honey `#FFC107` so WISHUB has its own identity. Add a calm
  secondary (teal or indigo) for "info/learning" states. Green = correct, soft red = retry.
- **Type:** friendly geometric/rounded sans for UI (Inter / Geist / Nunito Sans).
  Optional characterful display face for hero headings only.
- **Microinteractions (Framer Motion):** smooth expand for grammar notes; answer feedback
  (green pulse / soft shake); page/section transitions; XP/progress animations.
- **Learner accessibility:** large tap targets, clear audio controls, comfortable line
  length + spacing, captions/subtitles for audio.
- **Other vibe options on the table if Carlos wants to switch:** Clean modern minimal /
  Playful & gamified (Duolingo-energy) / Editorial & premium. The four aren't exclusive —
  the real product is usually a blend.

---

## 9. CONTENT PLAN + SYLLABUS SPINE

**COPYRIGHT — read carefully.** The source book is **inspiration only**.
- ✅ We may follow the **grammar progression** and **universal vocab themes** (numbers,
  colors, family, daily routines, comparatives…). A CEFR grammar sequence is **not**
  copyrightable.
- ❌ We must **not** copy the book's readings, images, exact exercise wording, unit/reading
  **titles**, or its **name/branding** anywhere. Write 100% original prompts, readings, and
  titles. When in doubt, invent fresh.

**Source screenshots:** `WISHUB/reference/s1u1.png … s1u4.png`. The book is A1→A2 (beginner),
organized by skill (Grammar / Vocabulary / Listening / Reading / Writing / Speaking) with
CLIL sidebars + an Academic/Professional-skills section + workbook + self-evaluation per
unit. For WISHUB we collapse this into **one quick exercise per topic** (it's a skim).

**Grammar spine to COVER with our own original content (Level 1):**

- **Unit 1 — basics & identity.** Cardinal/ordinal numbers, age, dates, prices, months;
  imperatives; personal pronouns (sing/plural); **verb _to be_** (affirmative / negative /
  yes-no / Wh- questions); the alphabet; colors. Themes: numbers, classroom objects,
  greetings, occupations, family, personal info.
- **Unit 2 — things & actions now.** Definite/indefinite **articles**; **demonstratives**
  (this/that/these/those) + yes-no questions; **present continuous**; _to be_ yes-no/Wh-;
  **possessive case + possessive adjectives**. Themes: school subjects/objects, body,
  clothes, family/nationalities, appearance.
- **Unit 3 — places & routines.** **There is / There are** + **prepositions of place**;
  **simple present** (3rd person, affirmative/interrogative); **prepositions of time
  at/on/in**; **simple present negative**; **simple present yes/no + short answers**.
  Themes: house & furniture, jobs/routines, times of day, daily activities.
- **Unit 4 — describing & comparing.** Verb **have**; **comparative adjectives**;
  **superlative adjectives**; **comparison of equality (as…as)**; **can / can't** (ability).
  Themes: appearance, shopping, animals/abilities, descriptions.

Each topic → one short original exercise (mix of the four question types) + an expandable
grammar note + optional reading/image/audio block.

---

## 10. REUSABLE ASSETS

**BoardCraft** (`C:\Users\carlo\code\Brainstorm\BoardCraft`) — experimental local-first
video/lesson tool. **Reuse its audio pipeline for WISHUB:**
- **`edge-tts`** neural voices — free, no API key. Bilingual voices already used there:
  `en-US-AvaMultilingualNeural`, `en-US-AndrewNeural`, `en-US-AriaNeural`, `en-US-GuyNeural`,
  `es-MX-DaliaNeural`, `es-MX-JorgeNeural`, `es-ES-ElviraNeural`, `es-ES-AlvaroNeural`.
- It persists **narration MP3 + cue timings (SRT)** → we get a **speed knob** (rate /
  playbackRate) and optional **read-along highlighting** for readings.
- Endpoints/scripts of interest: `POST /api/tts/generate`,
  `scripts/generate_lesson_narration.py`, `boardcraft_media.py`, profile
  `profiles/uach_education.json`.
- **Integration options for WISHUB:** (a) call edge-tts from Node via a port like
  `msedge-tts`/`node-edge-tts`, or (b) batch-generate MP3s with BoardCraft's Python scripts
  at authoring time and drop the files into WISHUB storage/`public/`. Either way audio is
  pre-generated, not runtime. **(DONE in this repo:** `tools/generate_audio.py` does exactly (b).)

**AudioReviewer** (`C:\Users\carlo\code\Brainstorm\AudioReviewer`) — Carlos's ~2025 **ESL speaking /
pronunciation** app (A1–C2). Stack: React+TS+Tailwind+shadcn front · Express + **Google Gemini** +
Drizzle + Postgres back · Multer audio uploads. **Reuse for WISHUB speaking exercises (§18.C):**
- `server/services/gemini.ts` — level-appropriate question generation + pronunciation analysis.
- the **audio-recorder** component (browser MediaRecorder) and `shared/schema.ts`.
- Port *concepts* to WISHUB's Next 16 + Prisma stack (don't copy Drizzle/Express). Brings in a
  `GEMINI_API_KEY` (AI was deferred in the MVP — see §4).

---

## 11. BRANDING

- **Public name:** **WISHUB.**
- **Backronym:** Web Interactive Study Hub for Universal Bilinguals.
  (Warm alt: "…for Upcoming Bilinguals.")
- **Story / tagline ideas:** "A hub for your English wishes." / "English, finally — the
  way it clicks."
- **Domains to secure (Carlos):** `wishub.mx` (primary, Mexico-fit), `wishub.io` backup.
  `.com`/`.app` are taken by unrelated products. **Carlos to run final TM + domain check.**
- **Avoid brand collision** with his TypingBee honey/bee theme — WISHUB has its own
  warm-but-distinct identity (see §8 palette note).

---

## 12. ADMIN & ACCESS RULES

- **Super-admin:** Carlos — `ADMIN_EMAILS="cavilla@uach.mx,carlosavillah90@gmail.com"` (env
  allowlist, survives DB resets).
- **Roles:** `admin` | `teacher` | `student` | `guest`.
- **Login REQUIRED to save progress, save exam grades, and get a diploma** (decision 2026-06-22,
  see §18.E). The diploma name is the **account name** — no free-text input. Guests may try
  lessons but nothing persists and no diploma.
- **Google OAuth is open to ALL Google accounts** (no domain restriction) — the friend can use any
  personal Gmail.
- Admin can **create / edit / remove** courses/units/lessons/content/questions — but the intended
  primary path is **AI-first generation**, with manual CRUD as the rare fallback (see §18.D).
- **Admin dashboard (live, Session 10):** `/admin` (learner roster — progress, levels complete,
  final-grade pills, last active) and `/admin/users/[id]` (per-level breakdown + unit-by-unit lesson
  ticks + recorded grade). Gated by `requireAdmin()` (`src/lib/admin/data.ts`); the "Admin" nav link
  shows only for admins. Analytics are pure + tested in `src/lib/admin/stats.ts`.

---

## 13. OPEN DECISIONS / PENDING ON CARLOS

**Resolved:** design vibe (warm coral, approved) · deploy target (**Replit + its Postgres**) ·
auth (**dual: manual + Google open to all accounts**) · audio (edge-tts, pre-generated to
`public/`) · **guests may audit the full course but get no saved progress and no diploma**.

**Pending on Carlos (blocks the §18 roadmap):**
- [ ] **Upload real curricula** to `WISHUB/reference/` as `s2` / `s3` / `s4` (Levels 2/3/4) —
      current Level 2 is a provisional CEFR inference (§18.A).
- [ ] **Create the personal GitHub repo `CVilla90/…`** and do the first push (§18.H).
- [ ] **Go live on Replit** per §17 (Postgres + secrets + `db:push`), then smoke-test auth.
- [ ] **`GEMINI_API_KEY`** — Carlos will provide it; needed when speaking grading / AI-first
      authoring start (§18.C/D).
- [ ] (lower priority) Domains `wishub.mx`/`wishub.io` + trademark check; object storage choice
      (Supabase / R2 / Replit) if audio/images outgrow `public/`.

---

## 14. REPO / FOLDER STRUCTURE

```
Brainstorm/VillaAula/          # project root — the Next.js app lives here (renamed from WISHUB, Session 11)
  HANDOFF.md                   # this file
  reference/                   # source book screenshots (s1u1..s1u4.png) — reference only, do not copy content
  src/  public/  prisma/  tools/  .replit  package.json  …
```

---

## 15. DEV COMMANDS (fill in after scaffold)

```powershell
# from Brainstorm/VillaAula
npm install         # once
npm run dev         # http://localhost:3000 (Next.js 16, Turbopack)
npm run build       # production build
npm run lint        # eslint
```
Note: scaffolded via create-next-app into a lowercase temp dir, then moved into the project
folder (npm forbids capitals in the package name; `package.json` name is `villaaula`). The folder
was renamed `WISHUB`→`VillaAula` in Session 11. Source book screenshots live in `reference/`.

---

## 16. CONVENTIONS & GUARDRAILS

- **Secrets:** never commit real secrets. `.env.example` = placeholders only; real values in
  local `.env` or the deploy platform's secrets panel. (Carlos's standing rule.)
- **No copied book content** (titles/readings/images) and don't reuse the source book's name
  in the product.
- **Keep worlds separate:** this is Carlos's personal project — not Creai, not an official
  UACH project. Don't mix branding or claims across those lines.
- **Frontend quality is the product.** When trading off, favor learner UX polish.
- **Keep this HANDOFF current** — append to §2 Status Log every session.

---

## 17. DEPLOY / AUTH SETUP RUNBOOK (Replit) — for Carlos

Dual auth + server-persisted progress is **built but untested live** (the loop has no DB or
OAuth creds). To turn it on:

> **Replit config is committed (`.replit`, Session 10).** It targets **Autoscale**, declares the
> **nodejs-20 + web + postgresql-16** modules, builds with `npm run build`, runs `npm run start`,
> sets `PORT=5000`, and maps `5000 → 80`. Next.js honors `PORT` and binds `0.0.0.0` by default, so
> no flags are needed. **Do not** add `npm install` to the build — Replit runs it automatically (and
> that triggers `postinstall: prisma generate`). So the Replit-side steps are just: add Postgres,
> set Secrets, `db:push`, deploy.

1. **Add Postgres** on Replit (built-in PostgreSQL) → it sets `DATABASE_URL` automatically.
2. **Set Secrets** (Replit "Secrets" = env vars):
   - `AUTH_SECRET` — `openssl rand -base64 32`, paste the output.
   - `NEXT_PUBLIC_APP_URL` — the deploy URL: `https://villaaula.replit.app` (no trailing slash).
   - `ADMIN_EMAILS` — `cavilla@uach.mx,carlosavillah90@gmail.com` (both of Carlos's emails).
   - *(optional)* `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` for Google sign-in.
3. **Create the tables**: `npm run db:push` (idempotent; no migrations folder needed yet).
4. **(optional) Google OAuth**: create the OAuth client under Carlos's **personal Gmail**
   (`carlosavillah90@gmail.com`), **NOT** `cavilla@uach.mx` — VillaAula is a personal project, and a
   Workspace-owned client would be subject to UACH admin policy + Internal/External limits and could
   die if that account is deactivated (decision 2026-06-23).
   - Console → new project "VillaAula". **OAuth consent screen → User type: External.** App name
     "VillaAula", support + developer email = his. Scopes are only `openid email profile` (basic) → **no
     Google verification needed**, so **Publish** the app (or add the friend as a Test user) so any
     Gmail can sign in.
   - **⚠️ "Switch to production / verification?" (answered Session 13):** Google's production dialog warns
     you'd need to submit for verification *only if* the app has **>10 domains, a logo, OR sensitive/
     restricted scopes.** VillaAula has **none of those** (≤2 domains, no sensitive scopes) → **click
     Confirm/Publish; no verification submission, no "unverified app" warning.** Only caveat: **don't
     upload a custom consent-screen logo** (a logo can trigger an optional brand review — not blocking
     for basic scopes, but skip it for zero friction). Leaving the app in **Testing** is the only thing
     that limits sign-in (to added test users) — so Publish.
   - **Credentials → Create OAuth client ID → Web application.** Authorized redirect URI must be
     **exactly** `<NEXT_PUBLIC_APP_URL>/api/auth/google/callback`. Add **both** the local
     (`http://localhost:3000/api/auth/google/callback`) and the Replit
     (`https://<repl>.replit.app/api/auth/google/callback`) URIs so dev + prod both work.
   - Copy Client ID + secret → `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`. Without these the
     "Continue with Google" button just hides; username/password still works.
5. **Deploy** (Autoscale). `postinstall` runs `prisma generate`. Keep the Secrets present at
   build time (Replit does) so the cookie-reading layout renders dynamically.
6. **Smoke test live**: sign up (username+password) → redirect to `/levels` → finish a lesson →
   reload → progress persists → (if configured) try Google → pass the final check → download
   the diploma. Then sign in as an **admin email** (`ADMIN_EMAILS`) and open **`/admin`** → confirm
   the learner shows up with their progress + grade, and `/admin/users/[id]` shows the breakdown.
   Check Replit logs if anything misbehaves.

Without any of this, the app still runs in **guest/localStorage mode** (no accounts), so
local dev and a no-DB deploy both keep working.

---

## 18. ROADMAP — post-loop directions (planned 2026-06-22, Carlos)

> Captured for a future session. **No build started on these yet.** Several are **blocked on
> Carlos** (curriculum uploads, repo, Gemini key). Items A–B come first — they reshape content.

### A. Real curricula replace the inferred content (⛔ blocks Level 2–4 content work)
- **Level 2 as shipped is PROVISIONAL** — it was built from a *generic CEFR A2 inference*, NOT
  Carlos's actual program (the loop never had his Level 2 source). Treat current `level2.ts` as a
  placeholder to be realigned, not the truth.
- **Carlos uploads his real programs** to `WISHUB/reference/` as **`s2`** (Level 2), **`s3`**
  (Level 3), **`s4`** (Level 4) — same role/format as `s1u1…s1u4` for Level 1. **§9 copyright
  still applies**: follow the program's grammar/skill spine, write 100% original prompts/readings.
- When `s2` lands → rebuild/realign Level 2 to match it. Then author **Levels 3 & 4** from `s3`/`s4`.

### B. Level calibration — difficulty must match the level
- **Level 1 = very basic** across every skill. Example: a **speaking** exercise at L1 asks for a
  **single word or a short sentence** only; readings/prompts stay short. Complexity scales up by
  level. Audit Level 1 (and realigned Level 2) against this once curricula arrive.

### C. Speaking exercises + AI grading — reuse **AudioReviewer**
- New **`speaking` question type**: the prompt asks the learner to *say* a target; they record via
  the browser **MediaRecorder**; audio → server → **AI (Gemini)** transcribes + grades, with
  optional pronunciation feedback. For L1, grade **leniently**: transcribe → reuse the existing
  `normalize`/`gradeOpen` against accepted answers. Expectations scale with level.
- **Reuse `Brainstorm/AudioReviewer`** (Carlos's ~2025 ESL pronunciation app; A1–C2, React+TS+
  Tailwind+shadcn front / Express + **Gemini** + Drizzle + Postgres back). Mine its
  `server/services/gemini.ts` (level-appropriate question generation + pronunciation analysis), its
  audio-recorder component, and `shared/schema.ts`. **Port concepts** to WISHUB's Next 16 + Prisma
  stack — don't copy Drizzle/Express directly.
- ⚠️ This **reintroduces AI/Gemini**, which the MVP deferred (see §4). Needs `GEMINI_API_KEY`.
  Use the latest Gemini model.

### D. AI-first content authoring (the platform's authoring philosophy)
- WISHUB is **AI-first for content**: Carlos (admin) will generate **~99% of content via an AI
  agent**, hand-editing only rarely. So the planned "admin authoring UI" (§3 Phase 3.16) is
  **reframed**: the *primary* path is **AI generation** — admin gives a topic / level / program
  excerpt → an AI agent emits a `Course`/`Unit`/`Lesson`/`Question[]` that matches `lib/types.ts`
  → admin reviews & approves → persist to DB. Manual CRUD is the **rare fallback**.
- Learners are always **human**. The §7 content schema is the AI's output contract. Same Gemini
  dependency as (C).

### E. Auth gating tightened — ✅ DONE (Session 9, 2026-06-23) · needs live DB smoke test
> Shipped: login-gated diploma, account-name diploma (free-text input removed for signed-in users),
> and persisted real exam grades (`ExamResult` model). The no-DB fallback keeps local diplomas.
> (Original decision 2026-06-22 — supersedes the guest-friendly model.)
- **Login is REQUIRED to: save progress, save exam grades, and generate a diploma.**
- The **diploma name comes from the authenticated account** — **remove the free-text name input**
  in `DiplomaPanel` (so anonymous users can't print diplomas under arbitrary names).
- **Guests are welcome to *audit* the full course** — read/try every lesson — but **nothing
  persists and no diploma** (confirmed 2026-06-22). Nudge them to log in to save (the
  `SaveProgressNudge` exists; extend the gate to the diploma + grades). This updates §4/§12.
- **Persist real exam grades** (score per attempt), not just a pass/fail completion key — extend
  the data model (e.g. an `Attempt`/`ExamResult` row with score, or a score field on the final-test
  progress).

### F. Admin & Google OAuth
- Admin = Carlos: **`ADMIN_EMAILS="cavilla@uach.mx,carlosavillah90@gmail.com"`**.
- **Google OAuth open to all Google accounts** (no domain restriction — current code has no `hd`
  param, so already open; just confirm). The friend can use any personal Gmail.

### G. Mobile-first + PWA
- Treat **mobile-first** as a guardrail — verify the learner flow holds on small screens.
- Eventually ship a **PWA**: web app manifest + service worker, installable, offline caching of
  lessons/audio. Milestone after content + auth are live.

### H. Repo / ownership
- Personal project → **personal GitHub `CVilla90`** (Carlos to create the repo). Strictly
  **personal** — not Creai, not UACH. **Don't push until the repo exists.**

### I. Content bank — reusable, re-organizable resources (nice-to-have, later phase)
- **Goal:** as LMS admin, browse *every* resource (descriptions, readings, audio, speaking prompts,
  questions) across all levels in one UI; **reorganize** them within lessons / units / levels
  (move/drag); and **reuse** one resource (e.g. a Level 1 reading) inside another course (Level 2)
  **without duplicating it**.
- **DB model:** this finally realizes the **original §7 relational design** that the MVP inlined
  into TS files. Detach into first-class tables — `Content` and `Question` are standalone reusable
  rows; **`ExerciseItem` becomes a join** (`exerciseId`, `position`, `refType:'content'|'question'`,
  `refId`). One resource row → referenced by many `ExerciseItem`s across courses.
- **Preserve the "original semantic":** each resource keeps **provenance** (e.g. `originLessonId` /
  tags / canonical topic), and the UI shows "used in: L1·U1·to-be, L2·U3·…" so an admin/professor
  sees where it came from and everywhere it's reused. Editing a shared resource should **warn it
  affects all usages** (or support copy-on-edit / versioning).
- **Builds on:** the TS→Postgres content migration (§3 Phase 3.14) is the prerequisite; AI-first
  authoring (§18.D) generates *into* this bank; the admin UI (§18.D) browses/reorganizes it.
- **Priority: LOW** — Carlos likely won't use it himself ("a feature I'll probably never use").
  Plan only; build only if WISHUB grows into a multi-course / multi-author LMS.

### J. Deep Dives — in-depth topic resources, hyperlinked from courses (from first-prod feedback)
> ✅ **MECHANISM SHIPPED Session 14** (type + `src/content/resources/` + `/learn` & `/learn/[slug]` +
> `RichText` links/headings + "Go deeper" chip + validator/tests), seeded with **5 dives**. Authoring
> more explainers is the ongoing AI-authored part. Below is the original spec.
> Planned Session 13 from real live-class usage: learners wanted to go **deeper on specific topics**
> mid-course. Deep Dives = a library of standalone, reusable explainers, linked from wherever a topic
> is mentioned. **No DB** (file-backed, like all current content) — honors the additive-only rule.
- **Name:** working title **"Deep Dives"** (clear + functional); route `/learn`. Cozy alternates Carlos
  can veto: *The Library*, *Field Notes*, *The Bookshelf* (fit the "little classroom" brand).
- **Data (`lib/types.ts` + `src/content/resources/`):** new `Resource` type
  `{ slug, title, summary, body (rich markdown, longer than a grammarNote), level?, tags?, related?: string[] }`.
  `slug` globally unique + stable (`to-be`, `present-perfect`, `first-conditional`). Aggregate into a
  `resources` array + `getResource(slug)` (mirror `content/catalog.ts`). AI-authored (§18.D); §9 copyright applies.
- **Routes:** `/learn` (index, grouped by level/tag) + `/learn/[slug]` (full explainer with examples,
  "used in these lessons" backlinks, related dives). **Guest-readable** (reference, not graded — no login gate).
- **Linking from course content (the core ask):**
  - Extend `RichText.renderInline` to render `[label](/learn/slug)` markdown links as styled internal
    `<Link>`s (keep it dependency-free, alongside the existing `**`/`*`/`` ` ``/`___` tokens).
  - Add optional `deepDives?: string[]` on `Lesson` (and/or `Question`) → a **"Go deeper →"** chip row
    under the grammar note. This is the discoverable, non-noisy path (vs. auto-linking every term).
  - Authors can also inline-link a term in a grammarNote/reading: "…uses the
    [present perfect](/learn/present-perfect)…".
- **Validator + tests:** extend `content/validate.ts` — unique resource slugs + every `deepDives` /
  `/learn/<slug>` reference resolves (dead-link guard). Add vitest cases.
- **Scope:** the *mechanism* (type + routes + RichText links + chip + validator) ≈ one session; the
  *content* (writing each explainer) is the ongoing AI-authored part.

### K. Support / donations — discreet Stripe footer (Carlos's request, Session 13)
> ✅ **SHIPPED Session 14.** `SUPPORT_URL` in `lib/site.ts`; `SupportProject` `<details>` in the
> homepage footer (`page.tsx`) → warm note + ❤️ Chip-in. Below is the original spec.
- Add `SUPPORT_URL = "https://buy.stripe.com/dRmaEWeSY7VNbxW7i1cEw00"` to `lib/site.ts`.
- A small **`SupportProject`** disclosure in the **homepage footer** (`page.tsx`). Use a native
  `<details>` (no client JS — matches `GrammarNote`'s idiom) labelled **"Support this project"**.
  Expanded: a warm, no-pressure note — *"VillaAula is completely free to use. It does have hosting +
  maintenance costs, though — if it's helped you, you're welcome to chip in whatever you like."* — and
  a **❤️ button** linking to `SUPPORT_URL` (`target="_blank" rel="noopener noreferrer"`).
- **Tone/placement:** quiet footer, not a loud header; muted small text. (Same tasteful donation tone
  as Carlos's CV Labs UACH tools, but this is a **personal** project — no UACH/CV-Labs branding.)
- Homepage footer now; could later lift into a shared app-wide footer.

### L. Admin edits a learner's personal info (Carlos's request, Session 13)
> ✅ **SHIPPED Session 14** (built per spec; **untested live** — needs the go-live DB). `updateLearnerProfile`
> in `lib/auth/admin-actions.ts` + `EditLearnerForm` on `/admin/users/[id]`. Below is the original spec.
- **Goal:** when a learner typed their info wrong (esp. the **name**, which prints on the diploma), an
  **admin** can fix it. Self-service name editing stays **OFF** to prevent "rename → print a diploma
  under any name" abuse (the diploma is account-named — see §12/§18.E). *(Note: there is currently no
  self-service profile/name edit page anyway, so this vector is already closed — keep it that way.)*
- **Editable:** `name` (primary) and `email`. **NOT** `username`, **NOT** password — not via the UI.
  (Role-setting is §18.M, separate.)
- **Where:** an "Edit details" form on `/admin/users/[id]` — a small client component (`useActionState`,
  like `AuthForm`) → a new `updateLearnerProfile` Server Action in `lib/auth/admin-actions.ts`.
- **Security:** the action **re-checks `requireAdmin()` server-side** (never trust the client), takes
  `{ userId, name, email }`, writes only those columns, then `revalidatePath('/admin')` +
  `/admin/users/[id]`. Handle the `email` `@unique` P2002 gracefully (email is unique + feeds the admin
  allowlist + OAuth-linking, so warn on collision).
- **DB:** uses existing `User.name`/`User.email` → **NO schema change** (honors the additive-only rule).

### M. TA & Professor roles — privilege model (planned Session 13; build deferred)
> ✅ **CHEAP INTERIM SHIPPED Session 14**: an admin-only **role dropdown** (`student|ta|teacher|admin`)
> on `/admin/users/[id]` (`updateLearnerRole`). The real **per-role privileges stay deferred** (blocked
> on content→Postgres §18.I). Below is the original privilege matrix.
- **Context:** Carlos will **manually** promote trusted people to **Professor** (author their own
  courses) or **TA/Assistant** (help with a course). `User.role` already exists
  (`admin|teacher|student|guest`). Privileges were undecided — proposed matrix:

  | Role | Author content | See learner data | Assign roles |
  |---|---|---|---|
  | **admin** (Carlos) | all courses | all learners (`/admin`) | yes |
  | **professor** | **their own** courses (CRUD) | learners in **their** courses | no |
  | **ta / assistant** | none | **assigned** courses (read, maybe grade) | no |
  | **student** | none | self only | no |
  | **guest** | none | none | no |

- **Assignment & scoping need DB:** a professor must *own* courses and a TA be *assigned* to them →
  needs `Course.ownerId` + an assignment/enrollment table. **Courses currently live in TS files**, so
  there is nothing DB-owned for a professor to manage yet. **⛔ Blocked on §18.I (content→Postgres) +
  the AI-first authoring UI (§18.D).** Until then, elevated roles would be dead UI.
- **Cheap interim (optional):** add a role dropdown on `/admin/users/[id]` (admin-only) so Carlos can
  *tag* trusted users now, even before the privileges light up. Only build if useful.
- **Order:** content→Postgres (§18.I) → AI authoring UI (§18.D) → per-course ownership + role-scoped
  dashboards. This is a real platform-growth phase, not a quick add.

### Suggested order once unblocked
1. Carlos uploads `s2`/`s3`/`s4` + creates the `CVilla90` repo (+ first push).
2. Realign Level 2 to `s2`; recalibrate Level 1 to "very basic" (B).
3. Auth gating tightened (E) — small, no new deps, high value, unblocks trustworthy diplomas.
4. Gemini integration → speaking exercises (C), then AI-first authoring (D).
5. Levels 3 & 4 content (from `s3`/`s4`), then mobile/PWA polish (G).

---

## 19. PROGRAMS, CATALOG & CREDENTIALS — approved plan (2026-06-26)

> **Status: APPROVED — ✅ PHASE A SHIPPED (Session 15, 2026-06-26).** Captured from a design discussion
> with Carlos on 2026-06-26; **Phase A built the same session** (entity model + English program + route
> rename + dashboard + catalog landing + voice de-ESL, all file-backed — see §19.8 + the Session 15 log).
> The agreed direction: evolve VillaAula from a single 4-level ESL course set into a **multi-program
> learning catalog** (ESL today; AWS SAA, "LinkedIn profile basics", etc. later). **Nothing in Phase A
> needed the DB** — `Program`, badges, and certificate definitions are file-backed like `Course`/`Resource`.
> Honors the additive-only DB rule. **Phase B/C still pending** (artifacts + scale).

### 19.0 The core reframe — platform ≠ program
Today the *platform* and the *ESL content* are the same thing (hero = "English that finally clicks", the
catalog is `levelCatalog`, the band is "A1 → A2"). The unlocking move is to **separate the platform
identity from the program identity**:
- **VillaAula** (platform) is topic-agnostic — and the brand already is ("a little classroom of your
  own", not "an English app"). Its voice becomes about *learning*, not English.
- **"English, A1→C2"** becomes the tagline of *one program* inside it. "English that finally clicks"
  isn't retired — it moves down to where it belongs (the ESL program).
- **Principle: lead with English, build with the catalog.** Present an English-first site *now* (honest
  about thin inventory), but make "English" a **theme/skin over a catalog**, not hardcoded — so adding a
  second program later is a config/data change, not a redesign.

### 19.1 Entity model
A new layer on top of what exists:
```
Platform (VillaAula)
└─ Program        ← NEW. The catalog primitive. Has its own certificate(s).
     └─ Course    ← today's "Level". Units → lessons → final → (badge).
          └─ Unit → Lesson → Exercise
Category/Topic    ← cross-cutting tags (Languages · Cloud & Certs · Career), separate from Programs.
```
- **Program is the catalog unit; a lone course is just a one-course program.** "Sometimes one course
  *is* the program" (e.g. *LinkedIn profile basics*) → a degenerate single-course program whose UI
  **collapses**: skip the program dashboard, drop straight into the course.
- **Course↔Program is many-to-many** (model the join from day one even if it's 1:N now) — a course can
  later live in several programs (e.g. "Business English" in both ESL and a Career program). Same reuse
  instinct as Deep Dives (§18.J).
- **Program shape: `kind: "ladder" | "collection"`.** Ladder (ESL A1→C2) renders as ordered rungs with a
  recommended next step; collection renders as an unordered grid.
- **Gating is SOFT (decided):** recommend an order, **guests can audit anything**, but **an account is
  required to save progress and to earn badges/certificates**. Conversion nudge hangs on the *reward*
  moment ("sign in to claim your badge / save your streak"), not a generic signup wall.

### 19.2 Vocabulary (DECIDED)
- **Top layer = "Program"** — plain English; fits a 6-course ladder and a 1-course mini-course. (Rejected
  "Track/Path" = ordered-only; "Specialization" = corporate.)
- **Middle layer = "Course"** (the generic entity), with ESL still *labeling* its courses **"Level 1 ·
  A1"**. Every topic has "courses"; only English has "levels" ("AWS SAA Level 1" reads wrong). So "Level"
  stays an **ESL display label**, not the platform's word.
- Net: **Program → Course**; "Level N" is how the English program dresses up its courses.

### 19.3 Credentials — badges + certificates (DECIDED)
Replaces "a diploma per level". Two tiers + ESL milestones:
- **Finish a course → Badge.** Light, frequent, collectible — keeps momentum *without* spending the big
  moment. The earned-badge row becomes the future "My Learning" progress wall (gamification for free).
- **Finish a program → Certificate (fanfare).** A graduation should mean finishing a *journey*, not one
  course — that's what's worth sharing.
- **ESL milestone certificates** (because a single cert only at C2 is years away → churn): the English
  program declares certificates at the CEFR bands — **Foundation (A1–A2) · Independent (B1–B2) ·
  Proficiency (C1–C2)** — plus an **A1–C2 capstone**. Real, shareable graduations along the way;
  CEFR bands are credentials employers recognize.
- **Single-course programs → just the certificate** on completion (a separate badge would be redundant).
- This removes the "diploma-per-level takeaway" worry: ESL learners still earn real certificates (at
  A/B/C), just better-paced, collecting badges in between.
- **All credentials:** account-required (ties to soft-gating decision), **account-named** (anti-abuse —
  same as today's diploma), and built around a **stable public URL** (e.g. `/c/[id]`) **from day one**.
  Why now: LinkedIn "Add to profile" wants name + issuer + issue date + a credential URL; retrofitting a
  verifiable id later is painful, adding the URL now is free. Artifact reuses the diploma-SVG machinery,
  re-scoped (course badge / program certificate).
- ⚠️ Migration note: the current per-course **diploma** + `ExamResult` stay as the engine; "diploma" is
  re-skinned to "badge" at course level, and the new "certificate" is the program-completion artifact
  (new `program:{slug}` completion key — additive).

### 19.4 Brand altitude (DECIDED)
**English-first now, but built as "a program," not "the platform."** A neutral "skills platform"
homepage would feel empty and oversell thin inventory (the thing to avoid). English-first is honest and
converts; "English" is a theme over the catalog so flipping to multi-program later is config, not a
redesign.

### 19.5 Landing & catalog — scale the model, render minimal
The landing becomes a **view over the catalog**, so the same components show one focused program now and
a browseable marketplace later — no second redesign.
- **Now (1 program):** ESL-forward landing; under the hood "Programs catalog → render the one we have",
  English program featured big. A `<SearchBar>` and a single category section ("Languages") may exist but
  stay quiet. Reads as *focused*, not *empty*.
- **Later (N programs):** same page grows into **category sections** (Netflix-style rows: Languages ·
  Cloud & Certs · Career) + program cards + a now-load-bearing search.
- **Search:** start as a **client-side fuzzy filter** over the static catalog (cheap, feels real); upgrade
  to real search (Postgres full-text / a service) only when content is in the DB and the catalog is big.
  Don't build search infra for one program.

### 19.6 Information architecture / routing (target)
- `/` — catalog/landing (curated now → browseable later).
- `/programs/[slug]` — **program dashboard** (the "big dashboard showing each level", generalized from
  today's `/levels`): per-course progress, recommended next course, badge wall, certificate status.
- `/course/[slug]` — today's `/level/[slug]`, **renamed**.
- `/topics/[tag]` — category/topic browse (later).
- `/c/[id]` — public certificate/badge page (for LinkedIn share + future verification).

### 19.7 Gotchas to plan for
- **Vocabulary/URL rename** (`/level/` → `/course/`, "Levels 1–4" copy → program-driven) is breaking —
  do it early while small, with **redirects** from the old paths. Good news: **progress keys are already
  keyed by course slug**, so progress survives a *route* rename as long as slugs stay stable.
- **De-ESL the copy** the same way the brand was centralized in `lib/site.ts`: `levelRange()`, the CEFR
  band, "Four levels, one path" all become **program-driven**, not platform-driven.
- **Keep the brand neutral at the platform level**, accent per program — otherwise a cloud-cert program
  rendered in coral-ESL styling feels off.

### 19.8 Phasing (honest about inventory)
- **Phase A — ✅ SHIPPED (Session 15):** introduced the `Program` entity (`lib/types.ts` +
  `src/content/programs/`); wrapped the 4 levels (+ C1/C2 as `status:"soon"` stubs) into one **"English
  A1→C2"** ladder; split platform-voice from program-voice (removed `TAGLINE`/`LEVEL_BAND` from
  `lib/site.ts` + the `levelCatalog`/`LEVEL_META`/`levelRange` block from `catalog.ts`); renamed
  `/level/[slug]` → `/course/[slug]` with 308 redirects; reframed `/levels` → the **`/programs/[slug]`**
  dashboard (live progress + credential wall); made the landing a **catalog view** (featured program +
  "Languages" category + client search); defined **course badges (derived) + program/CEFR-milestone
  certificates** as data + a `validatePrograms` validator. No artifact generator (that's Phase B). **No DB.**
- **Phase B — when the 2nd program lands (AWS SAA / LinkedIn):** turn the landing into a real catalog
  (category sections + cards + lightweight client-side search); ship the **badge/certificate artifacts**
  (SVG + `/c/[id]` public page + LinkedIn "Add to profile" deep-link) and the ESL milestone tiers.
- **Phase C — platform scale (converges with existing roadmap):** §18.I (TS→Postgres relational content)
  makes programs/courses/categories first-class rows; §18.D (AI-first authoring) generates *into*
  programs; §18.M (professor/TA roles) becomes "professors own programs"; adds per-program **enrollment**,
  a personal **"My Learning"** dashboard, and **real search**. Programs are a natural addition to that
  schema, not a detour.

### 19.9 Decision log (this session)
- ✅ Top entity = **Program**; mid entity = **Course** ("Level N · A1" is an ESL-only label).
- ✅ Credentials = **badge per course + certificate per program**, with **ESL milestone certificates** at
  CEFR bands (Foundation/Independent/Proficiency) + A1–C2 capstone; single-course program → certificate
  only. All account-gated, account-named, with a stable public `/c/[id]` URL; LinkedIn-shareable.
- ✅ Gating = **soft** (recommended order, guests audit anything, account required to save/earn).
- ✅ Brand = **English-first now**, built as a program/theme over a neutral catalog.
- ✅ Strategy = **lead with English, build with the catalog**; Phase A is pure data + vocab/brand pass.
- 🔓 Still open (decide at build time): exact program/category slugs & copy; certificate visual design;
  whether C1/C2 ship as "soon" stubs or are hidden until authored; search ranking once it's load-bearing.
