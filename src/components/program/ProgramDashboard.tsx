"use client";

import Link from "next/link";
import { useProgress } from "@/components/progress/ProgressProvider";

/**
 * The program dashboard (HANDOFF §19.6) — the "big board" generalized from the old
 * `/levels` page. Shows the ladder of courses with live per-course progress, a
 * recommended next step, and the credential wall (badges + certificates) lighting up
 * as courses are finished. Client component: progress lives in localStorage / the
 * account via `useProgress`. The credential *artifacts* (SVG + `/c/[id]`) are Phase B
 * — here the wall is the roadmap, with earned items marked.
 */

export interface CourseSpec {
  slug: string;
  title: string;
  band?: string;
  focus?: string;
  /** `/course/{slug}` when active; undefined while "soon". */
  href?: string;
  status: "active" | "soon";
  /** Progress keys for every lesson (empty for "soon" courses). */
  lessonKeys: string[];
  /** Progress key for the final test, or null if the course has none. */
  finalKey: string | null;
}

export interface CredentialSpec {
  id: string;
  kind: "badge" | "certificate";
  title: string;
  subtitle?: string;
  /** Course slugs whose completion earns this credential (all of them). */
  requiredCourseSlugs: string[];
}

export default function ProgramDashboard({
  title,
  tagline,
  summary,
  band,
  courseNoun,
  courses,
  credentials,
}: {
  title: string;
  tagline: string;
  summary: string;
  band: string;
  courseNoun: string;
  courses: CourseSpec[];
  credentials: CredentialSpec[];
}) {
  const { completed } = useProgress();

  const coursePct = (c: CourseSpec): number => {
    const total = c.lessonKeys.length + (c.finalKey ? 1 : 0);
    if (!total) return 0;
    const done =
      c.lessonKeys.filter((k) => completed[k]).length +
      (c.finalKey && completed[c.finalKey] ? 1 : 0);
    return Math.round((done / total) * 100);
  };
  const isComplete = (c: CourseSpec): boolean =>
    c.status === "active" &&
    c.lessonKeys.every((k) => completed[k]) &&
    (c.finalKey ? Boolean(completed[c.finalKey]) : true);

  const completeMap = new Map(courses.map((c) => [c.slug, isComplete(c)]));
  const activeSlugs = new Set(
    courses.filter((c) => c.status === "active").map((c) => c.slug),
  );
  const earned = (cr: CredentialSpec): boolean =>
    cr.requiredCourseSlugs.length > 0 &&
    cr.requiredCourseSlugs.every(
      (s) => activeSlugs.has(s) && completeMap.get(s),
    );

  // Recommended next: first active course that isn't finished yet.
  const next =
    courses.find((c) => c.status === "active" && !completeMap.get(c.slug)) ??
    courses.find((c) => c.status === "active");
  const nextStarted = next ? coursePct(next) > 0 : false;

  const badges = credentials.filter((c) => c.kind === "badge");
  const certs = credentials.filter((c) => c.kind === "certificate");

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <Link
        href="/"
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← Home
      </Link>

      <p className="mt-6 font-mono text-xs tracking-[0.22em] text-coral">
        {title.toUpperCase()}
        {band ? ` · ${band}` : ""} · PROGRAM
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink">
        {tagline}
      </h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted">{summary}</p>

      {next?.href && (
        <Link
          href={next.href}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white shadow-lg shadow-coral/20 transition hover:bg-coral-deep"
        >
          {nextStarted ? "Continue" : "Start"} {courseNoun} {next.slug}
          <span aria-hidden>→</span>
        </Link>
      )}

      {/* ---------------- ladder ---------------- */}
      <section className="mt-10">
        <h2 className="font-display text-lg font-extrabold text-ink">
          The {courseNoun.toLowerCase()}s
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {courses.map((c) => {
            const active = c.status === "active";
            const pct = coursePct(c);
            const done = isComplete(c);
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs ${active ? "text-coral" : "text-muted"}`}
                  >
                    {courseNoun.toUpperCase()} {c.slug}
                    {c.band ? ` · ${c.band}` : ""}
                  </span>
                  {done ? (
                    <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal">
                      ✓ Done
                    </span>
                  ) : active ? (
                    <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal">
                      Ready
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-muted">Soon</span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {c.title}
                </h3>
                {c.focus && (
                  <p className="mt-1 font-mono text-xs leading-relaxed text-muted">
                    {c.focus}
                  </p>
                )}
                {active && (
                  <>
                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-coral transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-coral">
                      {pct > 0 ? "Continue" : "Start"}{" "}
                      <span aria-hidden>→</span>
                    </span>
                  </>
                )}
                {!active && (
                  <span className="mt-4 text-sm text-muted/70">Locked for now</span>
                )}
              </>
            );
            return active && c.href ? (
              <Link
                key={c.slug}
                href={c.href}
                className="flex flex-col rounded-2xl border border-coral/30 bg-paper p-5 shadow-lg shadow-coral/5 transition hover:-translate-y-0.5"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={c.slug}
                className="flex flex-col rounded-2xl border border-line bg-paper/50 p-5"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- credentials ---------------- */}
      {(badges.length > 0 || certs.length > 0) && (
        <section className="mt-12">
          <h2 className="font-display text-lg font-extrabold text-ink">
            What you&apos;ll earn
          </h2>
          <p className="mt-1 text-sm text-muted">
            A badge for each {courseNoun.toLowerCase()} you finish, and a shareable
            certificate at each milestone — lighting up as you climb.
          </p>

          {badges.length > 0 && (
            <>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-muted">
                Badges
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {badges.map((cr) => (
                  <CredentialChip key={cr.id} cred={cr} earned={earned(cr)} />
                ))}
              </div>
            </>
          )}

          {certs.length > 0 && (
            <>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-muted">
                Certificates
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {certs.map((cr) => {
                  const got = earned(cr);
                  return (
                    <div
                      key={cr.id}
                      className={`flex items-center gap-3 rounded-2xl border p-4 ${
                        got
                          ? "border-teal/40 bg-teal/5"
                          : "border-line bg-paper/60"
                      }`}
                    >
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full text-sm ${
                          got ? "bg-teal text-white" : "bg-line text-muted"
                        }`}
                        aria-hidden
                      >
                        {got ? "✓" : "◎"}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-sm font-bold text-ink">
                          {cr.title}
                        </span>
                        {cr.subtitle && (
                          <span className="block font-mono text-[11px] text-muted">
                            {cr.subtitle}
                            {got ? " · earned" : ""}
                          </span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </section>
      )}
    </main>
  );
}

function CredentialChip({
  cred,
  earned,
}: {
  cred: CredentialSpec;
  earned: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
        earned
          ? "border-teal/40 bg-teal/5 text-teal"
          : "border-line bg-paper/60 text-muted"
      }`}
    >
      <span aria-hidden>{earned ? "✓" : "○"}</span>
      {cred.title}
    </span>
  );
}
