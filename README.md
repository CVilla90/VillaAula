# VillaAula

A lightweight, content-agnostic micro-LMS. Pick a level, work through
lessons (reading, audio, speaking, and four quiz types), pass the final check,
and download a diploma. Built with **Next.js 16 (App Router) + React 19 +
Tailwind v4**, first-party auth (`jose` JWT + bcrypt) with optional Google
OAuth, **Prisma + Postgres** for accounts/progress/grades, and **Gemini** for
speaking-exercise transcription.

> Personal project of Carlos Villa. See **`HANDOFF.md`** for the full design,
> status log, and decisions — it is the source of truth.

## Develop

```bash
npm install        # also runs `prisma generate` (postinstall)
npm run dev        # http://localhost:3000
```

With no `DATABASE_URL` / `AUTH_SECRET`, the app runs in **guest mode**: lessons
work and progress saves to `localStorage` — no accounts. Add the env below to
turn on accounts, persisted grades, and the admin dashboard.

```bash
npm run lint       # eslint
npm test           # vitest (62 tests)
npm run build      # production build
```

## Environment

Copy `.env.example` → `.env` and fill in. Real secrets never get committed
(`.gitignore` excludes `.env*`, keeps `.env.example`).

| Var | Needed for |
|---|---|
| `DATABASE_URL` | Accounts, progress, grades (Postgres). |
| `AUTH_SECRET` | Signing the session JWT (`openssl rand -base64 32`). |
| `NEXT_PUBLIC_APP_URL` | Base URL used to build the OAuth redirect. |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | "Continue with Google" (optional). |
| `ADMIN_EMAILS` | Comma-separated admin allowlist (gates `/admin`). |
| `GEMINI_API_KEY` | Speaking-exercise grading (optional; degrades gracefully). |

## Admin dashboard

Signed-in admins (an `ADMIN_EMAILS` address or a DB `role: "admin"`) get an
**Admin** nav link to:

- **`/admin`** — every learner with their catalog progress, levels completed,
  final-check grades, and last-active date.
- **`/admin/users/[id]`** — a per-learner, per-level breakdown with unit-by-unit
  lesson completion and the recorded final grade.

## Deploy (Replit Autoscale)

`.replit` is committed and tuned for Next.js: **Autoscale** target,
`nodejs-20` + `postgresql-16` modules, `PORT=5000`, `5000 → 80`. Next.js honors
`PORT` and binds `0.0.0.0` by default, so no extra flags are needed.

1. Add Replit's **PostgreSQL** (sets `DATABASE_URL` automatically).
2. Add the Secrets above (`AUTH_SECRET`, `NEXT_PUBLIC_APP_URL`, `ADMIN_EMAILS`,
   optionally `GOOGLE_*` / `GEMINI_API_KEY`).
3. `npm run db:push` (creates tables; idempotent).
4. Deploy. Replit runs `npm install` (→ `prisma generate`), then
   `npm run build`, then `npm run start`. **Do not** add `npm install` to the
   build command.

Full runbook (incl. Google OAuth) is in `HANDOFF.md` §17.
