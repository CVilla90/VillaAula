import type { Resource } from "@/lib/types";

/** Deep Dive — present perfect. Original wording (HANDOFF §9). */
export const presentPerfect: Resource = {
  slug: "present-perfect",
  title: "Present perfect, in depth",
  summary:
    "The tense that links the past to now — experiences, results, and how it differs from the simple past.",
  wiki: "english",
  section: "Tenses",
  level: 3,
  tags: ["tenses", "past"],
  related: ["present-continuous", "first-conditional"],
  body: [
    "The **present perfect** connects a past action to **now**. It's not really about *when* — it's about the *result* or *experience* you carry into the present.",
    "",
    "## The formula",
    "**have / has + past participle**",
    "- I **have visited** Japan. · She **has finished** the report.",
    "",
    "Regular participles add **-ed**; common irregulars are worth memorizing: *be → been, see → seen, do → done, go → gone, eat → eaten.*",
    "",
    "## Present perfect vs. simple past",
    "- **Present perfect** — the time is unfinished or unstated: *I **have seen** that film.*",
    "- **Simple past** — the time is finished and known: *I **saw** it **yesterday**.*",
    "",
    "If you can add *yesterday*, *last week*, or *in 2019*, use the simple past.",
    "",
    "## Useful partners",
    "- **ever / never** for experience: *Have you **ever** been abroad?* / *I've **never** tried it.*",
    "- **for / since** for duration: *for two years* · *since 2015*.",
    "- **just / already / yet** for recency: *I've **just** arrived.* / *Have you finished **yet**?*",
    "",
    "Unlike the [present continuous](/learn/present-continuous), the present perfect isn't about an action in progress — it's about a finished action that still matters now.",
  ].join("\n"),
};
