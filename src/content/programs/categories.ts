import type { Category } from "@/lib/types";

/**
 * Catalog categories (HANDOFF §19) — the cross-cutting shelves a Program sits on
 * (Languages · Cloud & Certs · Career). All three are live now (the AWS SAA ladder
 * lit up "Cloud & Certs"). Keep slugs stable — they'll key `/topics/[tag]` later.
 */
export const categories: Category[] = [
  {
    slug: "languages",
    title: "Languages",
    blurb: "Learn to read, listen, and speak — one short exercise at a time.",
  },
  {
    slug: "cloud-certs",
    title: "Cloud & Certs",
    blurb: "Pass the exam by building the mental model — short, scenario-first practice.",
  },
  {
    slug: "career",
    title: "Career",
    blurb: "Practical, job-ready skills — build something you can actually use.",
  },
  {
    slug: "professional-english",
    title: "Professional English",
    blurb: "English for your profession — the way the job actually demands it. Explanations in EN/ES; the English stays English.",
  },
  {
    slug: "ai-coding",
    title: "AI & Coding",
    blurb: "Work with an AI that actually touches your files. Starts at \"what is a terminal\" — no experience assumed.",
  },
];
