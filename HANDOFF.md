# WISHUB — HANDOFF

> **Read this file first.** It is the single source of truth for continuing this project
> in a fresh window, a different account, or a different agent. Keep it updated at the
> end of every working session (see **§2 Status Log**).

---

## 0. START HERE (30-second orientation)

- **Product:** **WISHUB** — a lightweight, content-agnostic micro-LMS. First real use:
  Carlos teaching a friend ESL (English) as a fast *skim* of a beginner course.
- **Brand / product name:** `WISHUB`. Directory / repo: `WISHUB`.
- **Official backronym:** **W**eb **I**nteractive **S**tudy **H**ub for **U**niversal **B**ilinguals.
- **Admin / owner:** Carlos — `cavilla@uach.mx` (hard-coded super-admin via env allowlist).
- **Owner context:** This is one of Carlos's **personal** projects (like HolIA/Atina,
  MUSAI, Cátedra). It is **not** Creai work and **not** an official UACH project. Keep
  those worlds separate (see his `user_identity` memory).
- **Status:** **Phases 0–3 substantially DONE (2026-06-22, autonomous `/loop`).** Level 1
  (Units 1–4 + final + diploma) and now **Level 2 (Everyday Stories — A2: past/future/quantity,
  2 units + final + diploma)** are live. **Auth + Postgres + server-persisted progress** built
  (manual signup + Google OAuth, guest→account merge), plus **real edge-tts audio** on Level 1.
  All four `/loop` steps (UI/UX → platform spine → audio → Level 2) are complete; build+lint green.
  **Next action (Carlos):** follow **§17** to turn on auth/DB on Replit (Postgres + secrets +
  `npm run db:push`) and smoke-test live — the auth/OAuth/DB runtime is the one thing the loop
  couldn't test. Then optional round-2 dev (Level 2 audio, expand L2 to 4 units, admin authoring).
- **Deadline pressure:** Carlos starts the first formal class **today (2026-06-22)**.
  Goal = something real and usable for Level 1, even if rough. Dirty hardcoding is OK.

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
- ⏭ **Next iter:** add **Level 2 audio** (one listening block per unit: add the Content blocks,
  rerun `tools/generate_audio.py` with the new CLIPS, set `mediaUrl`) for parity with Level 1.

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

Keeping the four types in one `Question` table via JSON `config` avoids schema churn.
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
  pre-generated, not runtime.

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

- **Super-admin:** `cavilla@uach.mx`, set via an env allowlist (survives DB resets).
- **Roles:** `admin` | `teacher` | `student` | `guest`.
- **Guests:** controlled per course by `Course.acceptsGuests` (admin toggle).
- Admin can **create / edit / remove** courses, units, lessons, content blocks, questions
  (Phase 3 authoring UI).

---

## 13. OPEN DECISIONS / PENDING ON CARLOS

- [ ] **Design vibe** — confirm "Warm & encouraging + subtle gamification" or pick another.
- [ ] **Domains** — buy `wishub.mx` (+ `wishub.io`); run final trademark check.
- [ ] **Deploy target** — Vercel vs Replit Autoscale (decide before Phase 3 deploy).
- [ ] **Auth provider** — Google only, or also allow a guest/anon path for non-`@uach.mx`
      friends (the friend may not have a uach.mx account).
- [ ] **Object storage** choice for audio/images (Supabase / R2 / Replit) — Phase 2/3.

---

## 14. REPO / FOLDER STRUCTURE

```
Brainstorm/WISHUB/             # project root — the Next.js app lives here (scaffold in Phase 0)
  HANDOFF.md                   # this file
  reference/                   # source book screenshots (s1u1..s1u4.png) — reference only, do not copy content
  (Phase 0 adds: package.json, src/, public/, etc.)
```

---

## 15. DEV COMMANDS (fill in after scaffold)

```powershell
# from Brainstorm/WISHUB
npm install         # once
npm run dev         # http://localhost:3000 (Next.js 16, Turbopack)
npm run build       # production build
npm run lint        # eslint
```
Note: scaffolded via create-next-app into a lowercase temp dir, then moved into `WISHUB/`
(npm forbids capitals in the package name; `package.json` name is `wishub`). Source book
screenshots live in `reference/`.

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

1. **Add Postgres** on Replit (built-in PostgreSQL) → it sets `DATABASE_URL` automatically.
2. **Set Secrets** (Replit "Secrets" = env vars):
   - `AUTH_SECRET` — `openssl rand -base64 32`, paste the output.
   - `NEXT_PUBLIC_APP_URL` — the deploy URL, e.g. `https://wishub.<user>.replit.app`.
   - `ADMIN_EMAILS` — `cavilla@uach.mx` (default).
   - *(optional)* `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` for Google sign-in.
3. **Create the tables**: `npm run db:push` (idempotent; no migrations folder needed yet).
4. **(optional) Google OAuth**: at <https://console.cloud.google.com/apis/credentials> create
   an OAuth 2.0 **Web** client. The Authorized redirect URI must be **exactly**
   `<NEXT_PUBLIC_APP_URL>/api/auth/google/callback`. Without these secrets the
   "Continue with Google" button just hides; username/password still works.
5. **Deploy** (Autoscale). `postinstall` runs `prisma generate`. Keep the Secrets present at
   build time (Replit does) so the cookie-reading layout renders dynamically.
6. **Smoke test live**: sign up (username+password) → redirect to `/levels` → finish a lesson →
   reload → progress persists → (if configured) try Google → pass the final check → download
   the diploma. Check Replit logs if anything misbehaves.

Without any of this, the app still runs in **guest/localStorage mode** (no accounts), so
local dev and a no-DB deploy both keep working.
