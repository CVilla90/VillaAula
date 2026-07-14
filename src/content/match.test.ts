import { describe, it, expect } from "vitest";
import { courses } from "@/content/catalog";
import { isOneToOneMatch, isMatchOptionLocked, gradeMatch } from "@/lib/grading";
import { t } from "@/lib/i18n";
import type { Course, MatchConfig, Question } from "@/lib/types";

/**
 * Regression guard for the Level 2 "countable / uncountable" bug: a match question
 * with 3 rows but only 2 distinct answers was unanswerable, because the UI let each
 * answer be used once. Every match question must be *completable* — every row must
 * have an option still available when the others are filled.
 */

function matchQuestions(course: Course): Question[] {
  const exercises = [
    ...course.units.flatMap((u) => u.lessons.map((l) => l.exercise)),
    ...(course.finalTest ? [course.finalTest.exercise] : []),
  ];
  return exercises
    .flatMap((ex) => ex.items)
    .flatMap((item) => (item.kind === "question" ? [item.question] : []))
    .filter((q) => q.type === "match");
}

/**
 * The UI rule, restated: distinct answers become the dropdown options, and an option
 * is locked once another row takes it — but *only* in a one-to-one question. So a
 * one-to-one question needs at least as many distinct answers as it has rows; a
 * classification question ("countable"/"uncountable") reuses answers and is always fine.
 */
function isCompletable(config: MatchConfig): boolean {
  const distinctAnswers = new Set(config.pairs.map((p) => t(p.right, "en"))).size;
  return isOneToOneMatch(config) ? distinctAnswers >= config.pairs.length : true;
}

describe("match questions", () => {
  it("every match question in the catalog is completable", () => {
    const broken: string[] = [];
    for (const course of courses) {
      for (const q of matchQuestions(course)) {
        if (!isCompletable(q.config as MatchConfig)) broken.push(`${course.slug}: ${q.id}`);
      }
    }
    expect(broken, `unanswerable match questions:\n${broken.join("\n")}`).toEqual([]);
  });

  it("classifies one-to-one vs classification questions", () => {
    expect(
      isOneToOneMatch({
        pairs: [
          { left: "I", right: "me" },
          { left: "he", right: "him" },
        ],
      }),
    ).toBe(true);
    expect(
      isOneToOneMatch({
        pairs: [
          { left: "apple", right: "countable" },
          { left: "rice", right: "uncountable" },
          { left: "sandwich", right: "countable" },
        ],
      }),
    ).toBe(false);
  });

  it("grades a classification question where rows share an answer", () => {
    const config: MatchConfig = {
      pairs: [
        { left: "apple", right: "countable" },
        { left: "rice", right: "uncountable" },
        { left: "sandwich", right: "countable" },
      ],
    };
    expect(
      gradeMatch({ apple: "countable", rice: "uncountable", sandwich: "countable" }, config),
    ).toBe(true);
    expect(
      gradeMatch({ apple: "countable", rice: "uncountable", sandwich: "uncountable" }, config),
    ).toBe(false);
  });

  /* The bug itself: "sandwich" could never be answered, because "apple" had taken the
     only "countable" option. The dropdown must keep it available. */
  it("never locks a shared answer in a classification question", () => {
    const config: MatchConfig = {
      pairs: [
        { left: "apple", right: "countable" },
        { left: "rice", right: "uncountable" },
        { left: "sandwich", right: "countable" },
      ],
    };
    const answered = { apple: "countable", rice: "uncountable" };
    expect(isMatchOptionLocked(config, answered, "sandwich", "countable")).toBe(false);
  });

  it("still locks a taken answer in a one-to-one question", () => {
    const config: MatchConfig = {
      pairs: [
        { left: "I", right: "me" },
        { left: "he", right: "him" },
      ],
    };
    expect(isMatchOptionLocked(config, { I: "me" }, "he", "me")).toBe(true);
    expect(isMatchOptionLocked(config, { I: "me" }, "he", "him")).toBe(false);
    // The row's own choice is never locked for itself (it stays selectable/visible).
    expect(isMatchOptionLocked(config, { I: "me" }, "I", "me")).toBe(false);
  });
});
