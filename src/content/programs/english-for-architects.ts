import type { Program } from "@/lib/types";

/**
 * **English for Architects** — VillaAula's first **Professional English (ESP)** program
 * (PROFESSIONAL_ENGLISH_PROPOSAL.md, approved 2026-06-28). It opens a new catalog shelf,
 * "Professional English", built so the series can grow (English for Engineers, Doctors…).
 *
 * Single-course "collection" program, so per §19.3 it earns just the certificate (no
 * per-course badges). The course teaches a B1/B2 architect to *operate* in English across
 * the whole project arc; the EN/ES toggle only translates the explanation notes (it's an
 * ESL course — the English content stays English). See the course file's header.
 */
export const englishForArchitectsProgram: Program = {
  slug: "english-for-architects",
  title: "English for Architects",
  tagline: "Work as an architect — in English",
  summary:
    "Professional English for architects and students: not a vocabulary list, but the communication the job demands — pitching a concept, surviving a crit, managing a client, writing an RFI nobody can misread, coordinating, running a site, and telling the story of your work. You leave with a Portfolio Pack of real professional writing. Exercises are in English; explanations can flip to Spanish, with the key terms kept in English.",
  kind: "collection",
  category: "professional-english",
  courseNoun: "Course",
  courses: [
    {
      slug: "architects",
      status: "active",
      focus: "concept · crit · client · documents · coordination · site · sustainability · the project story",
    },
  ],
  certificates: [
    {
      id: "english-for-architects-professional",
      kind: "certificate",
      title: "English for Architects · Professional",
      subtitle: "Concept to completion, in English",
      requires: { type: "program", programSlug: "english-for-architects" },
    },
  ],
};
