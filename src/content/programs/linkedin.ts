import type { Program } from "@/lib/types";

/**
 * **LinkedIn: Zero to Job-Ready** (HANDOFF §20) — VillaAula's second program and its
 * first non-ESL one, so shipping it realizes §19 Phase B (a real **Career** category
 * and a genuine two-category catalog).
 *
 * It's a single-course program: one guided **learn → build → interview** journey of
 * 8 units + a capstone. Per §19.3 a single-course program earns just the certificate
 * (no per-course badges). Phase 1 ships the Learn units, bilingual EN/ES; the Career
 * Kit deliverable (Phase 2) and the mock interview (Phase 3) come with the go-live DB.
 */
export const linkedinProgram: Program = {
  slug: "linkedin",
  title: "LinkedIn: Zero to Job-Ready",
  tagline: "Turn an empty profile into interviews",
  summary:
    "A guided walk through the whole LinkedIn-to-job flow: a profile recruiters and ATS both love, a network that opens doors, and the messages that get replies. Learn it in short exercises — in English or Spanish — and leave with a profile you can use today.",
  kind: "collection",
  category: "career",
  courseNoun: "Course",
  courses: [
    {
      slug: "linkedin",
      status: "active",
      focus: "profile · about · experience · proof · network · job search · outreach",
    },
  ],
  certificates: [
    {
      id: "linkedin-job-ready",
      kind: "certificate",
      title: "LinkedIn · Job-Ready",
      subtitle: "Profile to outreach, end to end",
      requires: { type: "program", programSlug: "linkedin" },
    },
  ],
};
