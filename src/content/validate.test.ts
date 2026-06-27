import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { courses } from "@/content/catalog";
import { resources } from "@/content/resources";
import {
  validateCatalog,
  validateAudioFiles,
  validateResources,
  validateDeepDiveLinks,
} from "@/content/validate";
import type { Course, Resource } from "@/lib/types";

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

  // The grammar EN/ES toggle only shows when a Spanish note exists; every lesson
  // ships one so the toggle is consistent. A new lesson without one fails here.
  it("has a Spanish grammar note for every lesson", () => {
    const missing = courses.flatMap((c) =>
      c.units.flatMap((u) =>
        u.lessons
          .filter((l) => !l.grammarNoteEs || l.grammarNoteEs.trim() === "")
          .map((l) => `${c.slug} / ${u.slug} / ${l.slug}`),
      ),
    );
    expect(missing, JSON.stringify(missing, null, 2)).toEqual([]);
  });

  it("has structurally valid Deep Dives with no dead links", () => {
    const issues = validateResources(resources);
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });

  it("has every course Deep-Dive reference resolving to a resource", () => {
    const issues = validateDeepDiveLinks(courses, resources);
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });
});

describe("validateResources & validateDeepDiveLinks catch problems", () => {
  const dive = (over: Partial<Resource>): Resource => ({
    slug: "x",
    title: "X",
    summary: "s",
    body: "b",
    ...over,
  });

  it("flags a duplicate resource slug", () => {
    const issues = validateResources([dive({}), dive({})]);
    expect(issues.some((i) => /duplicate resource slug/.test(i.message))).toBe(true);
  });

  it("flags a related slug that doesn't resolve", () => {
    const issues = validateResources([dive({ related: ["ghost"] })]);
    expect(issues.some((i) => /related "ghost"/.test(i.message))).toBe(true);
  });

  it("flags a body link to a missing resource", () => {
    const issues = validateResources([
      dive({ body: "see [this](/learn/ghost)" }),
    ]);
    expect(issues.some((i) => /\/learn\/ghost/.test(i.message))).toBe(true);
  });

  it("flags a lesson deepDive pointing at a missing resource", () => {
    const course: Course = {
      id: "c",
      slug: "c",
      level: 1,
      title: "C",
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
              deepDives: ["ghost"],
              exercise: { id: "ex", title: "E", items: [] },
            },
          ],
        },
      ],
    };
    const issues = validateDeepDiveLinks([course], [dive({ slug: "real" })]);
    expect(issues.some((i) => /\/learn\/ghost/.test(i.message))).toBe(true);
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

describe("validateCatalog checks speaking questions", () => {
  function speakingCourse(config: unknown): Course {
    return {
      id: "s",
      slug: "s",
      level: 8,
      title: "S",
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
                      id: "sp",
                      type: "speaking",
                      prompt: "Say it",
                      config: config as never,
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    };
  }

  it("accepts a well-formed speaking question", () => {
    const ok = validateCatalog([
      speakingCourse({ target: "My name is Ana", acceptedAnswers: ["my name is ana"] }),
    ]);
    expect(ok).toEqual([]);
  });

  it("flags a missing target and empty acceptedAnswers", () => {
    const bad = validateCatalog([speakingCourse({ target: "", acceptedAnswers: [] })]);
    expect(bad.some((i) => /no target phrase/.test(i.message))).toBe(true);
    expect(bad.some((i) => /no acceptedAnswers/.test(i.message))).toBe(true);
  });
});
