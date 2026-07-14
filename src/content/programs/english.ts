import type { Program } from "@/lib/types";

/**
 * The **English** program (HANDOFF §19) — VillaAula's first program and, today, its
 * flagship. A CEFR ladder from absolute-beginner A1 to mastery C2. Levels 1–4 are
 * authored Courses (slugs "1"–"4"); Levels 5–6 (C1/C2) are "soon" stubs, so the full
 * A1→C2 climb is visible without pretending content exists that doesn't yet.
 *
 * This file is the home for the program-voice strings (tagline/summary) and the ESL
 * display dressing — "Level N", the CEFR bands — that used to be hardcoded on the
 * *platform* (lib/site.ts `LEVEL_BAND`, catalog.ts `LEVEL_META`/`levelRange`). The
 * platform (VillaAula) stays topic-agnostic; English-specific copy lives here.
 */
export const englishProgram: Program = {
  slug: "english",
  title: "English",
  tagline: "English that finally clicks",
  summary:
    "A guided climb from your very first words to confident, near-native fluency — the whole CEFR ladder, A1 to C2. Short exercises, instant feedback, and the grammar tucked away until you want it.",
  kind: "ladder",
  category: "languages",
  courseNoun: "Level",
  // Shared with English for Architects — same language, same grammar wiki (§22).
  wiki: "english",
  courses: [
    { slug: "1", status: "active", band: "A1", focus: "be · routines · comparisons · can" },
    { slug: "2", status: "active", band: "A2", focus: "habits · can · going to · quantity · past" },
    { slug: "3", status: "active", band: "B1", focus: "past continuous · present perfect · conditionals · modals" },
    { slug: "4", status: "active", band: "B2", focus: "reported speech · conditionals · gerunds & infinitives · linking words" },
    {
      slug: "5",
      status: "active",
      band: "C1",
      focus: "register & nuance · idiom · four skills integrated (read · listen · speak · write)",
    },
    {
      slug: "6",
      status: "active",
      band: "C2",
      focus: "subtlety & precision · rhetoric · near-native four-skill mastery",
    },
  ],
  certificates: [
    {
      id: "english-foundation",
      kind: "certificate",
      title: "English · Foundation",
      subtitle: "CEFR A1–A2",
      requires: { type: "courses", courseSlugs: ["1", "2"] },
    },
    {
      id: "english-independent",
      kind: "certificate",
      title: "English · Independent",
      subtitle: "CEFR B1–B2",
      requires: { type: "courses", courseSlugs: ["3", "4"] },
    },
    {
      id: "english-proficiency",
      kind: "certificate",
      title: "English · Proficiency",
      subtitle: "CEFR C1–C2",
      requires: { type: "courses", courseSlugs: ["5", "6"] },
    },
    {
      id: "english-capstone",
      kind: "certificate",
      title: "English · A1–C2 Capstone",
      subtitle: "The full ladder, start to fluent",
      requires: { type: "program", programSlug: "english" },
    },
  ],
};
