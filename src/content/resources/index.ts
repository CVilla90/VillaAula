import type { Resource } from "@/lib/types";
import { getWiki, wikis } from "@/content/wikis";
import { toBe } from "./to-be";
import { presentContinuous } from "./present-continuous";
import { presentPerfect } from "./present-perfect";
import { firstConditional } from "./first-conditional";
import { phrasalVerbs } from "./phrasal-verbs";
import { verbForms } from "./verb-forms";
import { verbTenses } from "./verb-tenses";
import { pronouns } from "./pronouns";
import { toBeForms } from "./to-be-forms";
import { countableUncountable } from "./countable-uncountable";
import { modalVerbs } from "./modal-verbs";
import { articles } from "./articles";
import { comparatives } from "./comparatives";
import { prepositions } from "./prepositions";
import { questionWords } from "./question-words";
import { conditionals } from "./conditionals";
import { plurals } from "./plurals";
import { adjectiveOrder } from "./adjective-order";
import { whatIsAnAiCodingAgent } from "./what-is-an-ai-coding-agent";
import { terminalBasics } from "./terminal-basics";
import { promptingHabits } from "./prompting-habits";
import { claudeCodeCommands } from "./claude-code-commands";
import { codexCommands } from "./codex-commands";

/**
 * The wiki library — every reference page across every wiki (HANDOFF §18.J → §22).
 * Mirrors `content/catalog.ts`: add a `Resource` file, register it here, and it shows
 * up on its wiki's index and gets a `/wiki/[wiki]/[slug]` page automatically.
 * File-backed (no DB), guest-readable.
 *
 * A page's `wiki` field decides which universe of courses it belongs to — that's the
 * only thing tying it to a course. Pages are reused freely across courses and programs.
 */
export const resources: Resource[] = [
  // English wiki — explainers
  toBe,
  presentContinuous,
  presentPerfect,
  firstConditional,
  phrasalVerbs,
  // English wiki — reference tables
  verbForms,
  verbTenses,
  pronouns,
  toBeForms,
  countableUncountable,
  modalVerbs,
  articles,
  comparatives,
  prepositions,
  questionWords,
  conditionals,
  plurals,
  adjectiveOrder,
  // AI Coding wiki — shared by the Claude Code and Codex courses
  whatIsAnAiCodingAgent,
  terminalBasics,
  promptingHabits,
  claudeCodeCommands,
  codexCommands,
];

const bySlug = new Map(resources.map((r) => [r.slug, r]));

export function getResource(slug: string): Resource | undefined {
  return bySlug.get(slug);
}

/** All resource slugs (for dead-link validation). */
export const resourceSlugs: ReadonlySet<string> = new Set(bySlug.keys());

/** The canonical URL of a page. Authors may still write `/learn/<slug>` links in
 *  content — those 308-redirect here (see next.config.ts). */
export function resourceHref(slug: string): string {
  const r = bySlug.get(slug);
  return r ? `/wiki/${r.wiki}/${r.slug}` : `/learn/${slug}`;
}

export function resourcesInWiki(wikiSlug: string): Resource[] {
  return resources.filter((r) => r.wiki === wikiSlug);
}

export interface WikiSection {
  title: string;
  resources: Resource[];
}

/**
 * A wiki's pages, grouped into its sections. Section order follows the wiki's authored
 * `sections` list; anything else falls to the end alphabetically, so a page whose section
 * is a typo still shows up (it just sorts last) rather than vanishing.
 */
export function wikiSections(wikiSlug: string): WikiSection[] {
  const wiki = getWiki(wikiSlug);
  const order = wiki?.sections ?? [];
  const groups = new Map<string, Resource[]>();

  for (const r of resourcesInWiki(wikiSlug)) {
    const key = r.section ?? "Reference";
    const arr = groups.get(key) ?? [];
    arr.push(r);
    groups.set(key, arr);
  }

  const rank = (title: string) => {
    const i = order.indexOf(title);
    return i === -1 ? order.length : i;
  };

  return Array.from(groups.entries())
    .map(([title, rs]) => ({
      title,
      resources: [...rs].sort((a, b) => (a.level ?? 0) - (b.level ?? 0)),
    }))
    .sort((a, b) => rank(a.title) - rank(b.title) || a.title.localeCompare(b.title));
}

/** Every wiki that actually has pages — what `/wiki/[wiki]` prerenders. */
export function populatedWikis() {
  return wikis.filter((w) => resourcesInWiki(w.slug).length > 0);
}
