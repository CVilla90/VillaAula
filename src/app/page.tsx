import Link from "next/link";
import HeroCloze from "@/components/HeroCloze";
import AccountMenu from "@/components/auth/AccountMenu";
import {
  activeCourseCount,
  levelCatalog,
  levelRange,
  type LevelCatalogEntry,
} from "@/content/catalog";
import {
  BRAND_NOTE,
  BRAND_WORDMARK,
  BYLINE,
  COPYRIGHT_YEAR,
  LEVEL_BAND,
} from "@/lib/site";

const FEATURES = [
  {
    title: "Learn by doing",
    body: "Every topic is a short exercise with instant, kind feedback. No lectures to sit through.",
    icon: <PlayIcon />,
  },
  {
    title: "Grammar, only when you want it",
    body: "The rules wait behind a tap. Peek when you're curious, skip when you're not.",
    icon: <BookIcon />,
  },
  {
    title: "Listen at your pace",
    body: "Natural voices you can slow to 0.75×. Made for ears that are still tuning in.",
    icon: <WaveIcon />,
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Logo />
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="#how"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:text-ink sm:block"
            >
              How it works
            </Link>
            <Link
              href="#levels"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:text-ink sm:block"
            >
              Levels
            </Link>
            <AccountMenu />
          </div>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-12%] h-[440px] w-[440px] rounded-full bg-peach/60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-[-12%] h-[380px] w-[380px] rounded-full bg-coral/10 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="animate-rise font-mono text-xs font-medium tracking-[0.22em] text-muted">
              ENGLISH · {LEVEL_BAND} · SELF-PACED
            </p>
            <h1
              className="animate-rise mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-6xl"
              style={{ animationDelay: "0.08s" }}
            >
              English that
              <br />
              finally <HeroCloze />
            </h1>
            <p
              className="animate-rise mt-6 max-w-md text-lg leading-relaxed text-muted"
              style={{ animationDelay: "0.2s" }}
            >
              A small, modern course that skips the clutter. Short exercises,
              instant feedback, and the grammar tucked away until you want it.
            </p>
            <div
              className="animate-rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/level/1"
                className="group inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-coral/25 transition hover:bg-coral-deep"
              >
                Start Level 1
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center rounded-full border border-line bg-paper px-6 py-3.5 font-semibold text-ink transition hover:border-ink/30"
              >
                See how it works
              </Link>
            </div>
            <p
              className="animate-rise mt-4 text-sm text-muted"
              style={{ animationDelay: "0.36s" }}
            >
              Free to start · Jump in in seconds.
            </p>
          </div>

          <div className="animate-rise" style={{ animationDelay: "0.2s" }}>
            <PreviewCard />
          </div>
        </div>
      </section>

      {/* ---------- LEVELS ---------- */}
      <section id="levels" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs tracking-[0.22em] text-coral">
            FOUR LEVELS · ONE PATH
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Start at the beginning,
            <br />
            finish with a diploma.
          </h2>
          <p className="max-w-lg text-muted">
            Each level is a quick, guided climb — an intro, bite-size lessons, a
            final check, and a diploma you can actually download.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levelCatalog.map((l) => (
            <LevelCard key={l.level} entry={l} />
          ))}
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how" className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:py-24">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-coral">
              HOW IT WORKS
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Built to feel light,
              <br />
              not like homework.
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              The old way buries you in menus and rules. VillaAula does the opposite:
              you practice first, and the theory is one tap away.
            </p>
          </div>
          <div className="grid gap-4">
            {FEATURES.map((f) => (
              <FeatureRow key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-coral px-8 py-14 text-center shadow-xl shadow-coral/20">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            {levelRange()} {activeCourseCount > 1 ? "are" : "is"} ready end to
            end. Start free, no pressure.
          </p>
          <Link
            href="/level/1"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-base font-bold text-coral-deep shadow-lg transition hover:bg-white/90"
          >
            Start Level 1 <span>→</span>
          </Link>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="font-mono text-[11px] tracking-wide text-muted">
              {BRAND_NOTE}
            </p>
          </div>
          <p className="text-sm text-muted">
            {BYLINE} · © {COPYRIGHT_YEAR}
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ============================ pieces ============================ */

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <span className="grid size-8 place-items-center rounded-[10px] bg-coral text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
          <path d="M12 2l2.2 6.4L21 10l-6.8 1.6L12 18l-2.2-6.4L3 10l6.8-1.6z" />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        {BRAND_WORDMARK}
      </span>
    </Link>
  );
}

function PreviewCard() {
  return (
    <div className="floaty relative mx-auto max-w-sm rounded-3xl border border-line bg-paper p-6 shadow-2xl shadow-ink/5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-wider text-muted">UNIT 1</p>
          <p className="font-display text-base font-bold text-ink">Greetings</p>
        </div>
        <ProgressRing percent={20} />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-2 text-sm font-semibold text-white"
        >
          <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
            <path d="M6 4l14 8-14 8z" />
          </svg>
          Listen
        </button>
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted">
          0.75×
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-muted">Complete the greeting</p>
      <p className="mt-1 font-display text-lg font-bold text-ink">
        “Hello, ___ are you?”
      </p>

      <div className="mt-4 grid gap-2">
        <Option label="how" correct />
        <Option label="what" />
        <Option label="who" />
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl bg-teal/10 px-3 py-2.5 text-sm font-semibold text-teal">
        <span className="grid size-5 place-items-center rounded-full bg-teal text-[11px] text-white">
          ✓
        </span>
        Nice — that clicks.
        <span className="ml-auto font-mono text-xs">+10 XP</span>
      </div>
    </div>
  );
}

function Option({ label, correct }: { label: string; correct?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-4 py-2.5 text-sm font-medium ${
        correct
          ? "border-teal bg-teal/5 text-ink"
          : "border-line text-muted"
      }`}
    >
      <span>{label}</span>
      {correct && (
        <span className="grid size-5 place-items-center rounded-full bg-teal text-[11px] text-white">
          ✓
        </span>
      )}
    </div>
  );
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="relative grid size-12 place-items-center">
      <svg viewBox="0 0 40 40" className="size-12 -rotate-90">
        <circle cx="20" cy="20" r={r} fill="none" stroke="var(--color-line)" strokeWidth="4" />
        <circle
          cx="20"
          cy="20"
          r={r}
          fill="none"
          stroke="var(--color-coral)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute font-mono text-[10px] font-bold text-ink">
        {percent}%
      </span>
    </div>
  );
}

function LevelCard({ entry }: { entry: LevelCatalogEntry }) {
  const active = entry.status === "active";
  return (
    <div
      className={`group flex flex-col rounded-2xl border p-5 transition ${
        active
          ? "border-coral/30 bg-paper shadow-lg shadow-coral/5 hover:-translate-y-0.5"
          : "border-line bg-paper/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-xs ${active ? "text-coral" : "text-muted"}`}
        >
          LEVEL {entry.level}
        </span>
        {active ? (
          <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal">
            Ready
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted">
            <LockIcon />
            Soon
          </span>
        )}
      </div>
      <h3 className="mt-3 font-display text-lg font-bold text-ink">
        {entry.title}
      </h3>
      <p className="mt-1 font-mono text-xs leading-relaxed text-muted">
        {entry.focus}
      </p>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-coral" style={{ width: "0%" }} />
      </div>
      {active ? (
        <Link
          href={entry.href ?? `/level/${entry.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-coral"
        >
          Start <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      ) : (
        <span className="mt-4 text-sm text-muted/70">Locked for now</span>
      )}
    </div>
  );
}

function FeatureRow({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-cream/50 p-5">
      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-coral/10 text-coral">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <p className="mt-1 text-muted">{body}</p>
      </div>
    </div>
  );
}

/* ============================ icons ============================ */

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
      <path d="M7 4l13 8-13 8z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 21a2 2 0 0 1 2-2h13" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 12h2M9 7v10M14 4v16M19 9v6M22 12h-1" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
