import type { Resource } from "@/lib/types";

/** The four conditionals in one table. Original wording (HANDOFF §9). */
export const conditionals: Resource = {
  slug: "conditionals",
  title: "The conditionals: if…, then…",
  summary:
    "Zero, first, second, third. Four *if* sentences, four different distances from reality.",
  wiki: "english",
  section: "Sentence building",
  level: 3,
  tags: ["conditionals", "tables"],
  related: ["first-conditional", "modal-verbs", "verb-tenses"],
  body: [
    "Every conditional is two halves: the ***if*** half (the condition) and the **result** half. What changes between them is **how likely you think it is** — the further from reality, the further back the verb goes in time.",
    "",
    "That's the trick worth internalising: English signals *unreality by moving the tense backwards*. A past tense in an *if* sentence usually isn't about the past at all — it's about distance from the truth.",
    "",
    "## Comma rule",
    "If the *if* half comes first, put a comma: *If it rains, I'll stay home.* If it comes second, don't: *I'll stay home if it rains.* Same sentence either way.",
    "",
    "For the one you'll use most in daily life, see the [deep dive on the first conditional](/learn/first-conditional).",
  ].join("\n"),
  tables: [
    {
      title: "The four conditionals",
      columns: ["Type", "If half", "Result half", "Example", "Means"],
      rows: [
        [
          "**Zero**",
          "if + present",
          "present",
          "If you **heat** ice, it **melts**.",
          "Always true — a fact or a law",
        ],
        [
          "**First**",
          "if + present",
          "will + base",
          "If it **rains**, I **will stay** home.",
          "Real and possible — this might well happen",
        ],
        [
          "**Second**",
          "if + past",
          "would + base",
          "If I **had** money, I **would travel**.",
          "Imaginary or unlikely — but I don't have it",
        ],
        [
          "**Third**",
          "if + past perfect",
          "would have + participle",
          "If I **had studied**, I **would have passed**.",
          "Impossible — the past is done, this is regret",
        ],
      ],
      note:
        "Never put *will* in the *if* half: *~~If it will rain~~* → *If it **rains**…* The condition stays in the present, the result carries the future.",
    },
    {
      title: "Second conditional: the *were* rule",
      caption: "In an unreal condition, *was* becomes *were* — for every person.",
      columns: ["Standard", "Common in speech", "Note"],
      rows: [
        ["If I **were** you, I'd apologise.", "If I *was* you…", "***If I were you*** is the fixed phrase for advice — use it"],
        ["If she **were** here, she'd know.", "If she *was* here…", "*were* is the careful, correct form"],
      ],
    },
    {
      title: "Other ways to say *if*",
      columns: ["Word", "Meaning", "Example"],
      rows: [
        ["unless", "if **not**", "**Unless** you hurry, you'll miss it. *(= if you don't hurry)*"],
        ["as long as / provided that", "only on this condition", "You can borrow it **as long as** you return it."],
        ["in case", "as a precaution *(before, not after)*", "Take an umbrella **in case** it rains."],
        ["even if", "it makes no difference", "I'll go **even if** it rains."],
        ["I wish / if only", "regret or longing", "**I wish** I **spoke** French. *(but I don't)*"],
      ],
      note:
        "*in case* ≠ *if*. *I'll take an umbrella **if** it rains* = I'll wait and see. *…**in case** it rains* = I'm taking it now, just to be safe.",
    },
  ],
};
