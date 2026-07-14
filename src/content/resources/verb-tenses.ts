import type { Resource } from "@/lib/types";

/** The whole tense system on one page. Original wording (HANDOFF §9). */
export const verbTenses: Resource = {
  slug: "verb-tenses",
  title: "The tenses, on one page",
  summary:
    "Twelve tenses, one formula each. Print this, or keep it open — it's the map of the whole language.",
  wiki: "english",
  section: "Tenses",
  level: 3,
  tags: ["tenses", "verbs", "tables"],
  related: ["verb-forms", "present-continuous", "present-perfect"],
  body: [
    "English tenses look like a long list, but they're built from just **two questions**:",
    "",
    "- **When?** past · present · future",
    "- **How?** simple (a fact) · continuous (in progress) · perfect (looking back from a point) · perfect continuous (looking back at something still running)",
    "",
    "Three times × four shapes = the twelve tenses below. Each one is a helper verb plus a form from the [four verb columns](/learn/verb-forms) — nothing more.",
    "",
    "## Read the table like this",
    "Find the **when** (the row group), then the **how** (the shape). The formula column tells you exactly which words to put in which order.",
  ].join("\n"),
  tables: [
    {
      title: "Present",
      columns: ["Tense", "Formula", "Example", "Use it for"],
      rows: [
        [
          "Simple present",
          "base (+ **-s** for he/she/it)",
          "She **works** here.",
          "Habits, routines, facts",
        ],
        [
          "Present continuous",
          "am / is / are + **-ing**",
          "She **is working** now.",
          "Happening right now, or a temporary arrangement",
        ],
        [
          "Present perfect",
          "have / has + **past participle**",
          "She **has worked** here for a year.",
          "Past action with a present result; life experience so far",
        ],
        [
          "Present perfect continuous",
          "have / has been + **-ing**",
          "She **has been working** all morning.",
          "Something that started earlier and is *still going*",
        ],
      ],
      note:
        "The classic Spanish-speaker trap: for something happening *right now*, English needs the continuous. *I work now* ≠ *I am working now*.",
    },
    {
      title: "Past",
      columns: ["Tense", "Formula", "Example", "Use it for"],
      rows: [
        [
          "Simple past",
          "**past** form",
          "She **worked** here in 2019.",
          "Finished action, finished time",
        ],
        [
          "Past continuous",
          "was / were + **-ing**",
          "She **was working** when I called.",
          "In progress in the past — often interrupted",
        ],
        [
          "Past perfect",
          "had + **past participle**",
          "She **had worked** there before she moved.",
          "The earlier of two past events",
        ],
        [
          "Past perfect continuous",
          "had been + **-ing**",
          "She **had been working** for hours.",
          "How long something had been running, up to a past point",
        ],
      ],
      note:
        "If the time is finished (*yesterday*, *last year*, *in 2019*), you need the **simple past**, never the present perfect.",
    },
    {
      title: "Future",
      columns: ["Tense", "Formula", "Example", "Use it for"],
      rows: [
        [
          "Simple future",
          "will + **base**",
          "She **will work** tomorrow.",
          "A decision made now; a prediction",
        ],
        [
          "Going to",
          "am / is / are going to + **base**",
          "She **is going to work** tomorrow.",
          "A plan already decided; evidence you can see",
        ],
        [
          "Future continuous",
          "will be + **-ing**",
          "She **will be working** at 9.",
          "In progress at a future moment",
        ],
        [
          "Future perfect",
          "will have + **past participle**",
          "She **will have worked** here two years by May.",
          "Finished *before* a future point",
        ],
      ],
      note:
        "English very often uses the **present continuous** for fixed future plans: *I'm meeting her on Friday.* It sounds more natural than *I will meet her*.",
    },
    {
      title: "Negatives and questions — the same trick every time",
      caption:
        "Whatever the helper verb is, the negative adds *not* to it and the question moves it to the front.",
      columns: ["Tense", "Statement", "Negative", "Question"],
      rows: [
        ["Simple present", "She works.", "She **doesn't** work.", "**Does** she work?"],
        ["Present continuous", "She is working.", "She **isn't** working.", "**Is** she working?"],
        ["Simple past", "She worked.", "She **didn't** work.", "**Did** she work?"],
        ["Present perfect", "She has worked.", "She **hasn't** worked.", "**Has** she worked?"],
        ["Future", "She will work.", "She **won't** work.", "**Will** she work?"],
      ],
      note:
        "After *do / does / did*, the main verb goes back to its **base** form: *She didn't ~~worked~~ **work***.",
    },
  ],
};
