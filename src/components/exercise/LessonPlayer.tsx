"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Course, Unit, Lesson } from "@/lib/types";
import { lessonKey, markCompleted } from "@/lib/progress";
import GrammarNote from "./GrammarNote";
import ReadingBlock from "./ReadingBlock";
import QuestionCard from "./QuestionCard";

export default function LessonPlayer({
  course,
  unit,
  lesson,
}: {
  course: Course;
  unit: Unit;
  lesson: Lesson;
}) {
  const total = useMemo(
    () => lesson.exercise.items.filter((i) => i.kind === "question").length,
    [lesson],
  );
  const [results, setResults] = useState<Record<string, boolean>>({});

  const answered = Object.keys(results).length;
  const correctCount = Object.values(results).filter(Boolean).length;
  const allAnswered = total > 0 && answered >= total;

  const savedRef = useRef(false);
  useEffect(() => {
    if (allAnswered && !savedRef.current) {
      savedRef.current = true;
      markCompleted(lessonKey(course.slug, unit.slug, lesson.slug));
    }
  }, [allAnswered, course.slug, unit.slug, lesson.slug]);

  const lessonIndex = unit.lessons.findIndex((l) => l.id === lesson.id);
  const next = unit.lessons[lessonIndex + 1];

  let qNum = 0;

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <div className="flex items-center justify-between">
        <Link
          href={`/level/${course.slug}`}
          className="font-mono text-xs text-muted transition hover:text-coral"
        >
          ← Level {course.level} · {unit.title}
        </Link>
        <span className="font-mono text-xs text-muted">
          Lesson {lessonIndex + 1} / {unit.lessons.length}
        </span>
      </div>

      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        {lesson.topic.toUpperCase()}
      </p>
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink">
        {lesson.title}
      </h1>

      <div className="mt-5">
        <GrammarNote md={lesson.grammarNote} />
      </div>

      <div className="sticky top-3 z-10 mt-8 rounded-xl border border-line bg-cream/90 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between text-xs font-medium text-muted">
          <span>Progress</span>
          <span className="font-mono">
            {correctCount} / {total} correct
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-coral transition-all duration-500"
            style={{ width: `${total ? (answered / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {lesson.exercise.items.map((item) =>
          item.kind === "content" ? (
            <ReadingBlock key={item.content.id} content={item.content} />
          ) : (
            <QuestionCard
              key={item.question.id}
              question={item.question}
              index={++qNum}
              onAnswered={(id, ok) =>
                setResults((r) => ({ ...r, [id]: ok }))
              }
            />
          ),
        )}
      </div>

      {allAnswered && (
        <div className="mt-8 rounded-2xl border border-teal/40 bg-teal/5 p-6 text-center">
          <p className="text-3xl" aria-hidden>
            🎉
          </p>
          <h2 className="mt-2 font-display text-xl font-extrabold text-ink">
            Lesson complete
          </h2>
          <p className="mt-1 text-sm text-muted">
            You got {correctCount} of {total} right.
          </p>
          <div className="mt-5 flex justify-center">
            {next ? (
              <Link
                href={`/level/${course.slug}/unit/${unit.slug}/lesson/${next.slug}`}
                className="rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white transition hover:bg-coral-deep"
              >
                Next: {next.title} →
              </Link>
            ) : (
              <Link
                href={`/level/${course.slug}`}
                className="rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white transition hover:bg-coral-deep"
              >
                Back to {unit.title} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
