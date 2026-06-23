"use client";

import Link from "next/link";
import type { Course } from "@/lib/types";
import { finalTestKey, lessonKey } from "@/lib/progress";
import { useProgress } from "@/components/progress/ProgressProvider";

export default function Syllabus({ course }: { course: Course }) {
  const { completed } = useProgress();

  const ordered = course.units.flatMap((u) =>
    u.lessons.map((l) => ({
      unit: u,
      lesson: l,
      key: lessonKey(course.slug, u.slug, l.slug),
    })),
  );
  const done = ordered.filter((x) => completed[x.key]).length;
  const total = ordered.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const nextUp = ordered.find((x) => !completed[x.key]) ?? ordered[0];
  const lessonsDone = total > 0 && done === total;
  const finalDone = course.finalTest
    ? Boolean(completed[finalTestKey(course.slug)])
    : true;
  const nextHref = !lessonsDone
    ? nextUp
      ? `/level/${course.slug}/unit/${nextUp.unit.slug}/lesson/${nextUp.lesson.slug}`
      : `/level/${course.slug}`
    : course.finalTest && !finalDone
      ? `/level/${course.slug}/final-test`
      : `/level/${course.slug}/conclusion`;
  const nextLabel = !lessonsDone
    ? done === 0
      ? "Start"
      : "Continue"
    : course.finalTest && !finalDone
      ? "Final check"
      : "Diploma";

  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-line bg-paper p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold text-ink">Your progress</p>
            <p className="font-mono text-xs text-muted">
              {done} / {total} lessons
            </p>
          </div>
          <Link
            href={nextHref}
            className="shrink-0 rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white transition hover:bg-coral-deep"
          >
            {nextLabel} →
          </Link>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-coral transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {course.units.map((u) => (
        <section key={u.id} className="mt-8">
          <h2 className="font-display text-lg font-extrabold text-ink">
            Unit {u.number}: {u.title}
          </h2>
          <p className="mt-1 text-sm text-muted">{u.summary}</p>
          <ol className="mt-4 space-y-2">
            {u.lessons.map((l, i) => {
              const key = lessonKey(course.slug, u.slug, l.slug);
              const isDone = !!completed[key];
              return (
                <li key={l.id}>
                  <Link
                    href={`/level/${course.slug}/unit/${u.slug}/lesson/${l.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 transition hover:border-coral/40 hover:bg-cream/40"
                  >
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                        isDone ? "bg-teal text-white" : "bg-coral/10 text-coral"
                      }`}
                    >
                      {isDone ? "✓" : i + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-sm font-bold text-ink">
                        {l.title}
                      </span>
                      <span className="block font-mono text-xs text-muted">
                        {l.topic}
                      </span>
                    </span>
                    <span aria-hidden className="text-muted">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      {course.finalTest && (
        <section className="mt-8">
          <h2 className="font-display text-lg font-extrabold text-ink">
            Final: {course.finalTest.title}
          </h2>
          <p className="mt-1 text-sm text-muted">
            A compact review across all {course.units.length} units, followed by
            your conclusion and diploma.
          </p>
          <div className="mt-4 grid gap-2">
            <Link
              href={`/level/${course.slug}/final-test`}
              className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 transition hover:border-coral/40 hover:bg-cream/40"
            >
              <span
                className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  finalDone ? "bg-teal text-white" : "bg-coral/10 text-coral"
                }`}
              >
                {finalDone ? "✓" : "F"}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-sm font-bold text-ink">
                  Final check
                </span>
                <span className="block font-mono text-xs text-muted">
                  Passing score: {course.finalTest.passingScore}
                </span>
              </span>
              <span aria-hidden className="text-muted">
                →
              </span>
            </Link>
            <Link
              href={`/level/${course.slug}/conclusion`}
              className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 transition hover:border-coral/40 hover:bg-cream/40"
            >
              <span
                className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  lessonsDone && finalDone
                    ? "bg-teal text-white"
                    : "bg-coral/10 text-coral"
                }`}
              >
                {lessonsDone && finalDone ? "✓" : "D"}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-sm font-bold text-ink">
                  Conclusion & diploma
                </span>
                <span className="block font-mono text-xs text-muted">
                  {lessonsDone && finalDone ? "Unlocked" : "Unlock after final"}
                </span>
              </span>
              <span aria-hidden className="text-muted">
                →
              </span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
