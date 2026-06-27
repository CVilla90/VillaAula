import type { Resource } from "@/lib/types";
import { toBe } from "./to-be";
import { presentContinuous } from "./present-continuous";
import { presentPerfect } from "./present-perfect";
import { firstConditional } from "./first-conditional";
import { phrasalVerbs } from "./phrasal-verbs";

/**
 * The Deep Dives library (HANDOFF §18.J) — the single source of truth for the
 * standalone topic explainers surfaced at /learn. Mirrors `content/catalog.ts`:
 * add a `Resource` file, register it here, and it shows up on the index and gets
 * its own /learn/[slug] page automatically. File-backed (no DB), guest-readable.
 */
export const resources: Resource[] = [
  toBe,
  presentContinuous,
  presentPerfect,
  firstConditional,
  phrasalVerbs,
];

const bySlug = new Map(resources.map((r) => [r.slug, r]));

export function getResource(slug: string): Resource | undefined {
  return bySlug.get(slug);
}

/** All resource slugs (for dead-link validation). */
export const resourceSlugs: ReadonlySet<string> = new Set(bySlug.keys());

export interface ResourceGroup {
  level: number;
  resources: Resource[];
}

/** Group the library by level for the /learn index (ungrouped → level 0 bucket). */
export function resourcesByLevel(): ResourceGroup[] {
  const groups = new Map<number, Resource[]>();
  for (const r of resources) {
    const lvl = r.level ?? 0;
    const arr = groups.get(lvl) ?? [];
    arr.push(r);
    groups.set(lvl, arr);
  }
  return Array.from(groups.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([level, rs]) => ({ level, resources: rs }));
}
