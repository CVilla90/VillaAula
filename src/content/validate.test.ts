import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { courses } from "@/content/catalog";
import { resources } from "@/content/resources";
import { wikis } from "@/content/wikis";
import { programs, categories } from "@/content/programs";
import {
  validateCatalog,
  validateAudioFiles,
  validateResources,
  validateDeepDiveLinks,
  validatePrograms,
} from "@/content/validate";
import type { Category, Course, Program, Resource } from "@/lib/types";

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

  it("has a structurally valid wiki with no dead links (HANDOFF §22)", () => {
    const issues = validateResources(resources, wikis);
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });

  it("gives every program a wiki its courses can share", () => {
    // A program may legitimately have no wiki; but if it names one, it must exist.
    const dangling = programs
      .filter((p) => p.wiki && !wikis.some((w) => w.slug === p.wiki))
      .map((p) => `${p.slug} → ${p.wiki}`);
    expect(dangling, JSON.stringify(dangling)).toEqual([]);
  });

  it("has every course Deep-Dive reference resolving to a resource", () => {
    const issues = validateDeepDiveLinks(courses, resources);
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });

  it("has a valid program catalog (HANDOFF §19)", () => {
    const issues = validatePrograms(programs, categories, courses);
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });
});

describe("validatePrograms catches problems", () => {
  const cats: Category[] = [{ slug: "languages", title: "Languages" }];
  const program = (over: Partial<Program>): Program => ({
    slug: "p",
    title: "P",
    tagline: "t",
    summary: "s",
    kind: "ladder",
    category: "languages",
    courses: [{ slug: "1", status: "active" }],
    ...over,
  });
  const course1: Course = {
    id: "1",
    slug: "1",
    level: 1,
    title: "One",
    intro: "",
    acceptsGuests: true,
    units: [],
  };

  it("accepts a well-formed single program", () => {
    expect(validatePrograms([program({})], cats, [course1])).toEqual([]);
  });

  it("flags an unknown category", () => {
    const issues = validatePrograms([program({ category: "ghost" })], cats, [course1]);
    expect(issues.some((i) => /category "ghost"/.test(i.message))).toBe(true);
  });

  it("flags an 'active' course slot with no authored course", () => {
    const issues = validatePrograms(
      [program({ courses: [{ slug: "99", status: "active" }] })],
      cats,
      [course1],
    );
    expect(issues.some((i) => /"active" but no authored course/.test(i.message))).toBe(true);
  });

  it("flags a 'soon' course slot missing its title", () => {
    const issues = validatePrograms(
      [program({ courses: [{ slug: "1", status: "active" }, { slug: "2", status: "soon" }] })],
      cats,
      [course1],
    );
    expect(issues.some((i) => /"soon" course needs a title/.test(i.message))).toBe(true);
  });

  it("flags a certificate requiring a course no program declares", () => {
    const issues = validatePrograms(
      [
        program({
          certificates: [
            {
              id: "p-cap",
              kind: "certificate",
              title: "Cap",
              requires: { type: "courses", courseSlugs: ["1", "ghost"] },
            },
          ],
        }),
      ],
      cats,
      [course1],
    );
    expect(issues.some((i) => /requires course "ghost"/.test(i.message))).toBe(true);
  });

  it("flags an authored course that isn't in any program", () => {
    const orphan: Course = { ...course1, id: "2", slug: "2", title: "Two" };
    const issues = validatePrograms([program({})], cats, [course1, orphan]);
    expect(issues.some((i) => /authored course "2" isn't in any program/.test(i.message))).toBe(true);
  });
});

describe("validateResources & validateDeepDiveLinks catch problems", () => {
  const dive = (over: Partial<Resource>): Resource => ({
    slug: "x",
    title: "X",
    summary: "s",
    wiki: "w",
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
    expect(issues.some((i) => /"ghost", which doesn't exist/.test(i.message))).toBe(true);
  });

  it("flags a page that belongs to no registered wiki", () => {
    const issues = validateResources([dive({ wiki: "ghost-wiki" })], [
      { slug: "w", title: "W", tagline: "t", summary: "s" },
    ]);
    expect(issues.some((i) => /not a registered wiki/.test(i.message))).toBe(true);
  });

  it("flags a page with neither body nor tables", () => {
    const issues = validateResources([dive({ body: undefined })]);
    expect(issues.some((i) => /neither a body nor any tables/.test(i.message))).toBe(true);
  });

  it("flags a ragged table row", () => {
    const issues = validateResources([
      dive({
        tables: [
          { title: "T", columns: ["a", "b"], rows: [["1", "2"], ["1"]] },
        ],
      }),
    ]);
    expect(issues.some((i) => /row 2 has 1 cells, expected 2/.test(i.message))).toBe(true);
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
