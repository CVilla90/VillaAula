import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/content/catalog";
import { getLearner, requireAdmin } from "@/lib/admin/data";
import { summarizeLearner } from "@/lib/admin/stats";
import { lessonKey } from "@/lib/progress";

export const dynamic = "force-dynamic";

function fmtDateTime(d: Date | null): string {
  if (!d) return "—";
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
}

export default async function AdminLearnerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const learner = await getLearner(id);
  if (!learner) notFound();

  const summary = summarizeLearner(courses, learner.completedKeys, learner.exams);
  const completed = new Set(learner.completedKeys);
  const name = learner.name || learner.username || learner.email || "Unnamed learner";

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <Link
        href="/admin"
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← All learners
      </Link>

      <div className="mt-6 flex items-center gap-4">
        {learner.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={learner.image}
            alt=""
            className="size-12 rounded-full border border-line object-cover"
          />
        ) : (
          <span className="grid size-12 place-items-center rounded-full bg-coral/10 font-display text-lg font-extrabold text-coral">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
        <div>
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
            {name}
            {learner.isAdmin && (
              <span className="ml-2 align-middle rounded bg-coral/10 px-1.5 py-0.5 text-[11px] font-semibold text-coral">
                ADMIN
              </span>
            )}
          </h1>
          <p className="font-mono text-xs text-muted">
            {learner.email || "no email"}
            {learner.username ? ` · @${learner.username}` : ""}
          </p>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Lessons done", value: `${summary.lessonsDone}/${summary.lessonsTotal}` },
          { label: "Levels finished", value: `${summary.coursesComplete}/${summary.courses.length}` },
          { label: "Joined", value: new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(learner.createdAt) },
          { label: "Last active", value: fmtDateTime(learner.lastActivity) },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-paper p-3">
            <dd className="font-display text-base font-bold text-ink">{s.value}</dd>
            <dt className="font-mono text-[11px] text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>

      <h2 className="mt-10 font-display text-lg font-extrabold text-ink">
        Per-level breakdown
      </h2>

      <div className="mt-4 space-y-4">
        {courses.map((course) => {
          const stat = summary.courses.find((c) => c.slug === course.slug)!;
          return (
            <section
              key={course.id}
              className="rounded-2xl border border-line bg-paper p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-xs text-coral">
                    LEVEL {course.level}
                  </p>
                  <h3 className="font-display text-base font-bold text-ink">
                    {course.title}
                  </h3>
                </div>
                <div className="text-right">
                  {stat.exam ? (
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                        stat.exam.passed
                          ? "bg-teal/10 text-teal"
                          : "bg-coral/10 text-coral"
                      }`}
                    >
                      Final {stat.exam.score}/{stat.exam.total}
                      {stat.exam.passed ? " · passed" : " · not yet"}
                      {stat.exam.attempts > 1 ? ` · ${stat.exam.attempts} tries` : ""}
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-muted">
                      Final not taken
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-coral transition-all"
                    style={{ width: `${stat.pct}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-muted">
                  {stat.lessonsDone}/{stat.lessonsTotal} lessons
                </span>
                {stat.complete && (
                  <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal">
                    Complete
                  </span>
                )}
              </div>

              {/* Unit-by-unit lesson ticks */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.units.map((u) => (
                  <div key={u.id}>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      Unit {u.number}: {u.title}
                    </p>
                    <ul className="mt-1 space-y-1">
                      {u.lessons.map((l) => {
                        const done = completed.has(
                          lessonKey(course.slug, u.slug, l.slug),
                        );
                        return (
                          <li
                            key={l.id}
                            className="flex items-center gap-2 text-sm"
                          >
                            <span
                              className={`grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold ${
                                done
                                  ? "bg-teal text-white"
                                  : "bg-line text-muted"
                              }`}
                            >
                              {done ? "✓" : ""}
                            </span>
                            <span
                              className={done ? "text-ink" : "text-muted"}
                            >
                              {l.title}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
