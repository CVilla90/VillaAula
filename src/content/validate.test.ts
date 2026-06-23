import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { courses } from "@/content/catalog";
import { validateCatalog, validateAudioFiles } from "@/content/validate";
import type { Course } from "@/lib/types";

const publicDir = fileURLToPath(new URL("../../public", import.meta.url));

describe("real content", () => {
  it("passes structural validation", () => {
    const issues = validateCatalog(courses);
    // Print them so a failure is actionable, not just "expected 0".
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });

  it("has every audio mediaUrl present on disk", () => {
    const issues = validateAudioFiles(courses, {
      exists: (rel) => existsSync(path.join(publicDir, rel)),
    });
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });
});

describe("validateCatalog catches problems", () => {
  const bad: Course = {
    id: "bad",
    slug: "x",
    level: 9,
    title: "Bad",
    intro: "",
    acceptsGuests: false,
    units: [
      {
        id: "u",
        slug: "1",
        number: 1,
        title: "U",
        summary: "",
        lessons: [
          {
            id: "l",
            slug: "a",
            title: "L",
            topic: "",
            grammarNote: "",
            exercise: {
              id: "ex",
              title: "E",
              items: [
                {
                  kind: "question",
                  question: {
                    id: "dup",
                    type: "multiple_choice",
                    prompt: "",
                    config: {
                      options: [
                        { id: "a", text: "a" },
                        { id: "b", text: "b" },
                      ],
                      correctIds: ["zzz"],
                    },
                  },
                },
                {
                  kind: "question",
                  question: {
                    id: "dup", // duplicate id
                    type: "open",
                    prompt: "",
                    config: { acceptedAnswers: [] }, // empty
                  },
                },
              ],
            },
          },
        ],
      },
    ],
  };

  const issues = validateCatalog([bad]);

  it("flags a duplicate question id", () => {
    expect(issues.some((i) => /duplicate question id/.test(i.message))).toBe(true);
  });
  it("flags MCQ correctIds that reference a missing option", () => {
    expect(issues.some((i) => /missing option/.test(i.message))).toBe(true);
  });
  it("flags an open question with no accepted answers", () => {
    expect(issues.some((i) => /no acceptedAnswers/.test(i.message))).toBe(true);
  });
});
