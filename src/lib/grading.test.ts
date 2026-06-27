import { describe, it, expect } from "vitest";
import {
  normalize,
  gradeOpen,
  gradeMultipleChoice,
  gradeTrueFalse,
  gradeMatch,
  gradeQuestion,
} from "@/lib/grading";
import type { Question } from "@/lib/types";

describe("normalize", () => {
  it("lowercases, trims, and collapses whitespace", () => {
    expect(normalize("  Hello   World ")).toBe("hello world");
  });
  it("strips accents", () => {
    expect(normalize("Café ÁÉÍÓÚ")).toBe("cafe aeiou");
  });
  it("strips punctuation and symbols", () => {
    expect(normalize("It's a green book!")).toBe("its a green book");
  });
});

describe("gradeOpen", () => {
  it("accepts a normalized match", () => {
    expect(gradeOpen("ARE", { acceptedAnswers: ["are"] })).toBe(true);
  });
  it("accepts any listed answer", () => {
    expect(gradeOpen("'re", { acceptedAnswers: ["are", "'re"] })).toBe(true);
  });
  it("rejects a wrong answer", () => {
    expect(gradeOpen("is", { acceptedAnswers: ["are"] })).toBe(false);
  });
  it("honors caseSensitive", () => {
    const cfg = { acceptedAnswers: ["Ana"], caseSensitive: true };
    expect(gradeOpen("ana", cfg)).toBe(false);
    expect(gradeOpen("Ana", cfg)).toBe(true);
  });
});

describe("gradeMultipleChoice", () => {
  it("matches a single correct id", () => {
    expect(gradeMultipleChoice(["a"], { options: [], correctIds: ["a"] })).toBe(true);
  });
  it("is order- and duplicate-independent for multi-answer", () => {
    const cfg = { options: [], correctIds: ["a", "b"] };
    expect(gradeMultipleChoice(["b", "a", "a"], cfg)).toBe(true);
  });
  it("rejects a partial selection", () => {
    expect(gradeMultipleChoice(["a"], { options: [], correctIds: ["a", "b"] })).toBe(false);
  });
  it("rejects a wrong id", () => {
    expect(gradeMultipleChoice(["b"], { options: [], correctIds: ["a"] })).toBe(false);
  });
});

describe("gradeTrueFalse", () => {
  it("compares the boolean", () => {
    expect(gradeTrueFalse(true, { correct: true })).toBe(true);
    expect(gradeTrueFalse(false, { correct: true })).toBe(false);
  });
});

describe("gradeMatch", () => {
  const cfg = {
    pairs: [
      { left: "A", right: "1" },
      { left: "B", right: "2" },
    ],
  };
  it("accepts a fully-correct pairing", () => {
    expect(gradeMatch({ A: "1", B: "2" }, cfg)).toBe(true);
  });
  it("rejects a swapped pairing", () => {
    expect(gradeMatch({ A: "2", B: "1" }, cfg)).toBe(false);
  });
  it("rejects a missing pairing", () => {
    expect(gradeMatch({ A: "1" }, cfg)).toBe(false);
  });

  it("resolves bilingual pairs in the active language", () => {
    const biCfg = {
      pairs: [
        { left: { en: "Hook", es: "Gancho" }, right: { en: "Open", es: "Abrir" } },
        { left: { en: "Ask", es: "Petición" }, right: { en: "Close", es: "Cerrar" } },
      ],
    };
    // The player keys the answer by the resolved left, in the active language.
    expect(gradeMatch({ Hook: "Open", Ask: "Close" }, biCfg, "en")).toBe(true);
    expect(gradeMatch({ Gancho: "Abrir", Petición: "Cerrar" }, biCfg, "es")).toBe(true);
    // English keys don't grade as correct when the active language is Spanish.
    expect(gradeMatch({ Hook: "Open", Ask: "Close" }, biCfg, "es")).toBe(false);
  });
});

describe("gradeQuestion dispatch", () => {
  function q(type: Question["type"], config: Question["config"]): Question {
    return { id: "t", type, prompt: "p", config };
  }
  it("routes each type", () => {
    expect(gradeQuestion(q("open", { acceptedAnswers: ["x"] }), "x")).toBe(true);
    expect(
      gradeQuestion(q("multiple_choice", { options: [], correctIds: ["a"] }), ["a"]),
    ).toBe(true);
    expect(gradeQuestion(q("true_false", { correct: false }), false)).toBe(true);
    expect(
      gradeQuestion(q("match", { pairs: [{ left: "A", right: "1" }] }), { A: "1" }),
    ).toBe(true);
  });
  it("treats a wrongly-typed response as incorrect, not a crash", () => {
    // e.g. a number arriving where a string is expected
    expect(gradeQuestion(q("open", { acceptedAnswers: ["x"] }), [] as never)).toBe(false);
    expect(gradeQuestion(q("true_false", { correct: true }), "nope" as never)).toBe(false);
  });
});
