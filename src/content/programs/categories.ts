import type { Category } from "@/lib/types";

/**
 * Catalog categories (HANDOFF §19) — the cross-cutting shelves a Program sits on
 * (Languages · Cloud & Certs · Career). Phase A seeds only "Languages"; more land
 * with the second program. Keep slugs stable — they'll key `/topics/[tag]` later.
 */
export const categories: Category[] = [
  {
    slug: "languages",
    title: "Languages",
    blurb: "Learn to read, listen, and speak — one short exercise at a time.",
  },
  {
    slug: "career",
    title: "Career",
    blurb: "Practical, job-ready skills — build something you can actually use.",
  },
];
