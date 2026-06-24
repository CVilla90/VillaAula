"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Course, FinalTest } from "@/lib/types";
import { finalTestKey } from "@/lib/progress";
import { useProgress } from "@/components/progress/ProgressProvider";
import { useSessionUser } from "@/components/auth/SessionProvider";
import { recordExamResult } from "@/lib/auth/exam-actions";
import QuestionCard from "./QuestionCard";
import ReadingBlock from "./ReadingBlock";
import SpeakingQuestion from "./SpeakingQuestion";

export default function FinalTestPlayer({
  course,
  test,
}: {
  course: Course;
  test: FinalTest;
}) {
  const total = useMemo(
    () => test.exercise.items.filter((item) => item.kind === "question").length,
    [test],
  );
  const [results, setResults] = useState<Record<string, boolean>>({});
  const { markCompleted } = useProgress();
  const { signedIn } = useSessionUser();
  const savedRef = useRef(false);

  const answered = Object.keys(results).length;
  const correctCount = Object.values(results).filter(Boolean).length;
  const allAnswered = total > 0 && answered >= total;
  const passed = allAnswered && correctCount >= test.passingScore;

  useEffect(() => {
    if (passed && !savedRef.current) {
      savedRef.current = true;
      markCompleted(finalTestKey(course.slug));
      // Persist the real grade for signed-in learners (guests stay local pass/fail).
      if (signedIn) {
        recordExamResult({
          courseSlug: course.slug,
          score: correctCount,
          total,
          passed: true,
        }).catch(() => {});
      }
    }
  }, [passed, course.slug, markCompleted, signedIn, correctCount, total]);

  let qNum = 0;

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <Link
        href={`/level/${course.slug}`}
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        &larr; Level {course.level}
      </Link>

      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        FINAL CHECK
      </p>
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink">
        {test.title}
      </h1>
      <p className="mt-3 leading-relaxed text-muted">{test.intro}</p>

      <div className="sticky top-3 z-10 mt-8 rounded-xl border border-line bg-cream/90 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between text-xs font-medium text-muted">
          <span>Passing score: {test.passingScore} correct</span>
          <span className="font-mono">
            {correctCount} / {total}
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
        {test.exercise.items.map((item) =>
          item.kind === "content" ? (
            <ReadingBlock key={item.content.id} content={item.content} />
          ) : item.question.type === "speaking" ? (
            <SpeakingQuestion
              key={item.question.id}
              question={item.question}
              index={++qNum}
              onAnswered={(id, ok) =>
                setResults((current) => ({ ...current, [id]: ok }))
              }
            />
          ) : (
            <QuestionCard
              key={item.question.id}
              question={item.question}
              index={++qNum}
              onAnswered={(id, ok) =>
                setResults((current) => ({ ...current, [id]: ok }))
              }
            />
          ),
        )}
      </div>

      {allAnswered && (
        <div
          className={`mt-8 rounded-2xl border p-6 text-center ${
            passed
              ? "border-teal/40 bg-teal/5"
              : "border-coral/40 bg-coral/5"
          }`}
        >
          <p className="font-display text-xl font-extrabold text-ink">
            {passed ? "Final check complete" : "Keep going"}
          </p>
          <p className="mt-2 text-sm text-muted">
            {passed
              ? `You scored ${correctCount} of ${total}.`
              : `You have ${correctCount} correct. Retry the questions marked not quite until you reach ${test.passingScore}.`}
          </p>
          {passed && (
            <div className="mt-5 flex justify-center">
              <Link
                href={`/level/${course.slug}/conclusion`}
                className="rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white transition hover:bg-coral-deep"
              >
                Finish Level {course.level} &rarr;
              </Link>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
