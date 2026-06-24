import { describe, it, expect } from "vitest";
import { courses } from "@/content/catalog";
import { finalTestKey, lessonKey } from "@/lib/progress";
import {
  courseLessonKeys,
  summarizeCourse,
  summarizeLearner,
  type ExamRecord,
} from "./stats";

const level1 = courses.find((c) => c.level === 1)!;

describe("courseLessonKeys", () => {
  it("returns one key per lesson, in syllabus order", () => {
    const keys = courseLessonKeys(level1);
    const expected = level1.units.flatMap((u) =>
      u.lessons.map((l) => lessonKey(level1.slug, u.slug, l.slug)),
    );
    expect(keys).toEqual(expected);
    expect(keys.length).toBeGreaterThan(0);
    expect(new Set(keys).size).toBe(keys.length); // unique
  });
});

describe("summarizeCourse", () => {
  it("is empty for a learner with no progress", () => {
    const stat = summarizeCourse(level1, new Set());
    expect(stat.lessonsDone).toBe(0);
    expect(stat.pct).toBe(0);
    expect(stat.started).toBe(false);
    expect(stat.complete).toBe(false);
    expect(stat.finalPassed).toBe(false);
  });

  it("counts partial lesson progress and marks started", () => {
    const keys = courseLessonKeys(level1);
    const completed = new Set([keys[0]]);
    const stat = summarizeCourse(level1, completed);
    expect(stat.lessonsDone).toBe(1);
    expect(stat.started).toBe(true);
    expect(stat.complete).toBe(false);
    expect(stat.pct).toBe(Math.round((1 / keys.length) * 100));
  });

  it("requires both all lessons AND the final to be complete", () => {
    const keys = courseLessonKeys(level1);
    const lessonsOnly = new Set(keys);
    const noFinal = summarizeCourse(level1, lessonsOnly);
    expect(noFinal.lessonsDone).toBe(keys.length);
    expect(noFinal.pct).toBe(100);
    // Level 1 has a final test, so all-lessons-but-no-final is NOT complete.
    expect(level1.finalTest).toBeTruthy();
    expect(noFinal.finalPassed).toBe(false);
    expect(noFinal.complete).toBe(false);

    const withFinal = new Set([...keys, finalTestKey(level1.slug)]);
    const done = summarizeCourse(level1, withFinal);
    expect(done.finalPassed).toBe(true);
    expect(done.complete).toBe(true);
  });

  it("attaches the exam grade when provided", () => {
    const exam: ExamRecord = {
      courseSlug: level1.slug,
      score: 14,
      total: 16,
      passed: true,
      attempts: 2,
    };
    const stat = summarizeCourse(level1, new Set(), exam);
    expect(stat.exam).toEqual(exam);
  });
});

describe("summarizeLearner", () => {
  it("rolls up across every course", () => {
    const empty = summarizeLearner(courses, []);
    expect(empty.lessonsDone).toBe(0);
    expect(empty.coursesStarted).toBe(0);
    expect(empty.coursesComplete).toBe(0);
    expect(empty.courses.length).toBe(courses.length);
    expect(empty.lessonsTotal).toBe(
      courses.reduce((n, c) => n + courseLessonKeys(c).length, 0),
    );
  });

  it("marks a fully finished course complete and counts its grade", () => {
    const keys = courseLessonKeys(level1);
    const completed = [...keys, finalTestKey(level1.slug)];
    const exams: ExamRecord[] = [
      { courseSlug: level1.slug, score: 16, total: 16, passed: true, attempts: 1 },
    ];
    const summary = summarizeLearner(courses, completed, exams);
    expect(summary.coursesStarted).toBe(1);
    expect(summary.coursesComplete).toBe(1);
    const l1 = summary.courses.find((c) => c.level === 1)!;
    expect(l1.complete).toBe(true);
    expect(l1.exam?.score).toBe(16);
  });

  it("ignores progress keys for courses not in the catalog", () => {
    const summary = summarizeLearner(courses, ["ghost/u1/l1", "final:ghost"]);
    expect(summary.lessonsDone).toBe(0);
    expect(summary.coursesStarted).toBe(0);
  });
});
