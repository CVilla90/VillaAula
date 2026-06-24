import Link from "next/link";
import { courses, getCourse } from "@/content/catalog";
import { listLearners, requireAdmin } from "@/lib/admin/data";
import { summarizeLearner } from "@/lib/admin/stats";

/** Reading the session cookie forces dynamic rendering — never prerender this. */
export const dynamic = "force-dynamic";

function fmtDate(d: Date | null): string {
  if (!d) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

function displayName(l: {
  name: string | null;
  username: string | null;
  email: string | null;
}): string {
  return l.name || l.username || l.email || "Unnamed learner";
}

export default async function AdminPage() {
  const admin = await requireAdmin();
  const learners = await listLearners();

  const rows = learners.map((l) => ({
    learner: l,
    summary: summarizeLearner(courses, l.completedKeys, l.exams),
  }));

  const totalLearners = learners.length;
  const activeLearners = rows.filter((r) => r.summary.coursesStarted > 0).length;
  const finishers = rows.filter((r) => r.summary.coursesComplete > 0).length;

  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-mono text-xs text-muted transition hover:text-coral"
        >
          ← Home
        </Link>
        <span className="font-mono text-xs text-muted">
          {admin.name || admin.email}
        </span>
      </div>

      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        ADMIN DASHBOARD
      </p>
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink">
        Learners
      </h1>
      <p className="mt-3 max-w-lg text-muted">
        Everyone with an account, their progress through the catalog, and their
        final-check grades. Click a learner for the full breakdown.
      </p>

      {/* Quick stats */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { label: "Learners", value: totalLearners },
          { label: "Started a course", value: activeLearners },
          { label: "Finished a level", value: finishers },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-line bg-paper p-4"
          >
            <p className="font-display text-2xl font-extrabold text-ink">
              {s.value}
            </p>
            <p className="font-mono text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {totalLearners === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-line bg-paper/60 p-8 text-center text-muted">
          No learners yet. Accounts appear here as soon as someone signs up.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-paper">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left font-mono text-[11px] uppercase tracking-wide text-muted">
                <th className="px-4 py-3 font-medium">Learner</th>
                <th className="px-4 py-3 font-medium">Lessons</th>
                <th className="px-4 py-3 font-medium">Grades</th>
                <th className="px-4 py-3 font-medium">Last active</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map(({ learner, summary }) => (
                <tr
                  key={learner.id}
                  className="border-b border-line/60 last:border-0 transition hover:bg-cream/40"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/users/${learner.id}`}
                      className="block font-display font-bold text-ink hover:text-coral"
                    >
                      {displayName(learner)}
                    </Link>
                    <span className="block font-mono text-xs text-muted">
                      {learner.email || learner.username || "—"}
                      {learner.isAdmin && (
                        <span className="ml-2 rounded bg-coral/10 px-1.5 py-0.5 text-[10px] font-semibold text-coral">
                          ADMIN
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-line">
                        <div
                          className="h-full rounded-full bg-coral"
                          style={{ width: `${summary.pct}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-muted">
                        {summary.lessonsDone}/{summary.lessonsTotal}
                      </span>
                    </div>
                    <span className="mt-1 block font-mono text-[11px] text-muted">
                      {summary.coursesComplete} of {summary.courses.length}{" "}
                      levels done
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {learner.exams.length === 0 ? (
                      <span className="text-muted">—</span>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {learner.exams
                          .slice()
                          .sort((a, b) => {
                            const la = getCourse(a.courseSlug)?.level ?? 0;
                            const lb = getCourse(b.courseSlug)?.level ?? 0;
                            return la - lb;
                          })
                          .map((e) => {
                            const level = getCourse(e.courseSlug)?.level;
                            return (
                              <span
                                key={e.courseSlug}
                                title={`Level ${level ?? "?"}: ${e.score}/${e.total} (${e.attempts} attempt${e.attempts === 1 ? "" : "s"})`}
                                className={`rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold ${
                                  e.passed
                                    ? "bg-teal/10 text-teal"
                                    : "bg-coral/10 text-coral"
                                }`}
                              >
                                L{level ?? "?"} {e.score}/{e.total}
                              </span>
                            );
                          })}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">
                    {fmtDate(learner.lastActivity)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/users/${learner.id}`}
                      className="font-mono text-xs text-coral hover:underline"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
