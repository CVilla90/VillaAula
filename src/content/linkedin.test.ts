import { describe, it, expect } from "vitest";
import { linkedin } from "@/content/linkedin";
import { linkedinProgram } from "@/content/programs/linkedin";
import { validateCatalog } from "@/content/validate";
import { isLocalizedPair, localizedNonEmpty, type LocalizedText } from "@/lib/i18n";
import type { Course, Question, DraftCompareConfig } from "@/lib/types";

/** Every LocalizedText value reachable in a course's exercises/content. */
function localizedValues(course: Course): LocalizedText[] {
  const out: LocalizedText[] = [];
  const push = (v: LocalizedText | undefined) => {
    if (v !== undefined) out.push(v);
  };
  const fromQuestion = (q: Question) => {
    push(q.prompt);
    push(q.hint);
    push(q.explanation);
    const cfg = q.config as unknown as Record<string, unknown>;
    if (q.type === "multiple_choice") {
      for (const o of (cfg.options as { text: LocalizedText }[]) ?? []) push(o.text);
    }
    if (q.type === "match") {
      for (const p of (cfg.pairs as { left: LocalizedText; right: LocalizedText }[]) ?? []) {
        push(p.left);
        push(p.right);
      }
    }
    if (q.type === "open") push(cfg.placeholder as LocalizedText | undefined);
    if (q.type === "draft_compare") {
      const d = q.config as DraftCompareConfig;
      push(d.placeholder);
      push(d.model);
      for (const c of d.checklist ?? []) push(c);
    }
  };
  const exercises = [
    ...course.units.flatMap((u) => u.lessons.map((l) => l.exercise)),
    ...(course.finalTest ? [course.finalTest.exercise] : []),
  ];
  for (const ex of exercises) {
    for (const item of ex.items) {
      if (item.kind === "content") {
        push(item.content.title);
        push(item.content.body);
      } else {
        fromQuestion(item.question);
      }
    }
  }
  return out;
}

describe("LinkedIn course (HANDOFF §20)", () => {
  it("is structurally valid", () => {
    const issues = validateCatalog([linkedin]);
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });

  it("is marked bilingual with a Spanish intro", () => {
    expect(linkedin.bilingual).toBe(true);
    expect(linkedin.introEs && linkedin.introEs.trim().length).toBeTruthy();
  });

  it("has 8 units and a capstone final test", () => {
    expect(linkedin.units).toHaveLength(8);
    expect(linkedin.finalTest).toBeTruthy();
    expect(linkedin.finalTest!.passingScore).toBeGreaterThan(0);
  });

  it("uses the new draft_compare type for the build exercises", () => {
    const types = linkedin.units
      .flatMap((u) => u.lessons)
      .flatMap((l) => l.exercise.items)
      .filter((i) => i.kind === "question")
      .map((i) => (i.kind === "question" ? i.question.type : ""));
    expect(types).toContain("draft_compare");
  });

  it("has both EN and ES filled for every bilingual field (no half-translation)", () => {
    const bad = localizedValues(linkedin)
      .filter(isLocalizedPair)
      .filter((v) => !localizedNonEmpty(v));
    expect(bad, JSON.stringify(bad, null, 2)).toEqual([]);
  });

  it("registers a single-course program with a certificate (no badges)", () => {
    expect(linkedinProgram.courses).toHaveLength(1);
    expect(linkedinProgram.courses[0].slug).toBe("linkedin");
    expect(linkedinProgram.certificates).toHaveLength(1);
  });
});

describe("validateCatalog checks draft_compare", () => {
  function draftCourse(config: unknown): Course {
    return {
      id: "dc",
      slug: "dc",
      level: 7,
      title: "DC",
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
                      id: "dcq",
                      type: "draft_compare",
                      prompt: "Write yours",
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

  it("accepts a well-formed draft_compare", () => {
    expect(
      validateCatalog([draftCourse({ model: "a strong example" })]),
    ).toEqual([]);
  });

  it("flags a blank model and a half-translated checklist item", () => {
    const issues = validateCatalog([
      draftCourse({ model: "", checklist: [{ en: "ok", es: "" }] }),
    ]);
    expect(issues.some((i) => /blank or half-translated model/.test(i.message))).toBe(true);
    expect(issues.some((i) => /blank or half-translated checklist/.test(i.message))).toBe(true);
  });

  it("flags a half-translated prompt", () => {
    const issues = validateCatalog([
      draftCourse({ model: "ok" }),
    ].map((c) => {
      const q = c.units[0].lessons[0].exercise.items[0];
      if (q.kind === "question") q.question.prompt = { en: "hi", es: "  " };
      return c;
    }));
    expect(issues.some((i) => /blank or half-translated prompt/.test(i.message))).toBe(true);
  });
});
