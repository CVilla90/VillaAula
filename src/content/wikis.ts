import type { Wiki } from "@/lib/types";

/**
 * The wikis — one shared reference space per *universe* of related courses (HANDOFF §22).
 *
 * A wiki is not owned by a course or even by a program: the English ladder (Levels 1–6)
 * and English for Architects sit in different programs but teach the same language, so
 * they read from the same `english` wiki. Write the page on the past participle once, and
 * every course that touches it can link to it.
 *
 * To attach a program to a wiki, set `Program.wiki` to one of these slugs.
 */
export const wikis: Wiki[] = [
  {
    slug: "english",
    title: "English Grammar Wiki",
    tagline: "Every form, in one place.",
    summary:
      "The tables and explainers behind the lessons — verb forms, pronouns, tenses, the little words that trip everyone up. Nothing here is graded. Come back whenever you need to check a form, and take what you need.",
    noun: "Grammar",
    sections: [
      "Verbs",
      "Tenses",
      "Pronouns & determiners",
      "Nouns & articles",
      "Describing & comparing",
      "Sentence building",
    ],
  },
  {
    slug: "ai-coding",
    title: "AI Coding Wiki",
    tagline: "The words, the commands, the habits.",
    summary:
      "A plain-language reference for working with AI coding assistants: what the jargon means, the commands worth memorising, and the prompting habits that separate a good session from a frustrating one. Shared by every course in the AI Coding program.",
    noun: "Reference",
    sections: ["Getting started", "Commands", "Prompting", "Jargon"],
  },
];

const byWikiSlug = new Map(wikis.map((w) => [w.slug, w]));

export function getWiki(slug: string): Wiki | undefined {
  return byWikiSlug.get(slug);
}

export const wikiSlugs: ReadonlySet<string> = new Set(byWikiSlug.keys());
