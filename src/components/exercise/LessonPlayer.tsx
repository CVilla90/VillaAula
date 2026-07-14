"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Course, Unit, Lesson } from "@/lib/types";
import { lessonKey } from "@/lib/progress";
import { getResource, resourceHref } from "@/content/resources";
import { useProgress } from "@/components/progress/ProgressProvider";
import { ContentLangToggle } from "@/components/i18n/ContentLang";
import GrammarNote from "./GrammarNote";
import ReadingBlock from "./ReadingBlock";
import QuestionCard from "./QuestionCard";
import SpeakingQuestion from "./SpeakingQuestion";
import DraftCompare from "./DraftCompare";

export default function LessonPlayer({
  course,
  unit,
  lesson,
  courseNoun = "Level",
}: {
  course: Course;
  unit: Unit;
  lesson: Lesson;
  courseNoun?: string;
}) {
  const total = useMemo(
    () => lesson.exercise.items.filter((i) => i.kind === "question").length,
    [lesson],
  );
  const [results, setResults] = useState<Record<string, boolean>>({});
  const { markCompleted } = useProgress();

  const answered = Object.keys(results).length;
  const correctCount = Object.values(results).filter(Boolean).length;
  const allAnswered = total > 0 && answered >= total;

  const savedRef = useRef(false);
  useEffect(() => {
    if (allAnswered && !savedRef.current) {
      savedRef.current = true;
      markCompleted(lessonKey(course.slug, unit.slug, lesson.slug));
    }
  }, [allAnswered, course.slug, unit.slug, lesson.slug, markCompleted]);

  const lessonIndex = unit.lessons.findIndex((l) => l.id === lesson.id);
  const orderedLessons = course.units.flatMap((u) =>
    u.lessons.map((l) => ({ unit: u, lesson: l })),
  );
  const courseLessonIndex = orderedLessons.findIndex(
    (item) => item.lesson.id === lesson.id,
  );
  const next = orderedLessons[courseLessonIndex + 1];

  let qNum = 0;

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <div className="flex items-center justify-between">
        <Link
          href={`/course/${course.slug}`}
          className="font-mono text-xs text-muted transition hover:text-coral"
        >
          ← {courseNoun} {course.level} · {unit.title}
        </Link>
        <span className="flex items-center gap-3">
          {course.bilingual && <ContentLangToggle />}
          <span className="font-mono text-xs text-muted">
            Lesson {lessonIndex + 1} / {unit.lessons.length}
          </span>
        </span>
      </div>

      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        {lesson.topic.toUpperCase()}
      </p>
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink">
        {lesson.title}
      </h1>

      <div className="mt-5">
        <GrammarNote
          md={lesson.grammarNote}
          mdEs={lesson.grammarNoteEs}
          summary={course.noteLabel}
          useGlobalLang={course.bilingual}
        />
      </div>

      {lesson.deepDives && lesson.deepDives.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
            Go deeper
          </span>
          {lesson.deepDives.map((slug) => {
            const dive = getResource(slug);
            if (!dive) return null;
            return (
              <Link
                key={slug}
                href={resourceHref(slug)}
                className="inline-flex items-center gap-1 rounded-full border border-coral/30 bg-coral/5 px-3 py-1 text-xs font-semibold text-coral-deep transition hover:bg-coral/10"
              >
                {dive.title}
                <span aria-hidden>→</span>
              </Link>
            );
          })}
        </div>
      )}

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
          ) : item.question.type === "speaking" ? (
            <SpeakingQuestion
              key={item.question.id}
              question={item.question}
              index={++qNum}
              onAnswered={(id, ok) => setResults((r) => ({ ...r, [id]: ok }))}
            />
          ) : item.question.type === "draft_compare" ? (
            <DraftCompare
              key={item.question.id}
              question={item.question}
              index={++qNum}
              onAnswered={(id, ok) => setResults((r) => ({ ...r, [id]: ok }))}
            />
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
                href={`/course/${course.slug}/unit/${next.unit.slug}/lesson/${next.lesson.slug}`}
                className="rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white transition hover:bg-coral-deep"
              >
                Next: {next.lesson.title} →
              </Link>
            ) : course.finalTest ? (
              <Link
                href={`/course/${course.slug}/final-test`}
                className="rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white transition hover:bg-coral-deep"
              >
                Final check →
              </Link>
            ) : (
              <Link
                href={`/course/${course.slug}`}
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
