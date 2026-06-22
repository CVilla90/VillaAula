"use client";

import Link from "next/link";
import type { Course } from "@/lib/types";
import { lessonKey, useCompleted } from "@/lib/progress";

export default function Syllabus({ course }: { course: Course }) {
  const completed = useCompleted();

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
          {nextUp && (
            <Link
              href={`/level/${course.slug}/unit/${nextUp.unit.slug}/lesson/${nextUp.lesson.slug}`}
              className="shrink-0 rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white transition hover:bg-coral-deep"
            >
              {done === 0 ? "Start" : done === total ? "Review" : "Continue"} →
            </Link>
          )}
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
    </div>
  );
}
