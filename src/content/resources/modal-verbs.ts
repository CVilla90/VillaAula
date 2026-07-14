import type { Resource } from "@/lib/types";

/** The modal grid. Original wording (HANDOFF §9). */
export const modalVerbs: Resource = {
  slug: "modal-verbs",
  title: "Modal verbs: can, must, should…",
  summary:
    "The little verbs that add an attitude — ability, permission, obligation, doubt. One table, no conjugation.",
  wiki: "english",
  section: "Verbs",
  level: 3,
  tags: ["verbs", "modals", "tables"],
  related: ["verb-forms", "conditionals"],
  body: [
    "A **modal** doesn't describe an action — it describes your *attitude* to the action: is it possible, necessary, advisable, allowed?",
    "",
    "## The three rules that cover every modal",
    "1. **No -s.** *She can* — never *~~she cans~~*.",
    "2. **Base verb after it.** *You should **go***, never *~~should to go~~* or *~~should going~~*.",
    "3. **No *do* in questions or negatives.** The modal moves to the front by itself: ***Can** you help?* / *You **can't** park here.*",
    "",
    "That's the whole grammar. The rest is choosing the right one.",
  ].join("\n"),
  tables: [
    {
      title: "What each modal means",
      columns: ["Modal", "Meaning", "Example", "Negative"],
      rows: [
        ["can", "Ability · informal permission", "I **can** swim.", "can't / cannot"],
        ["could", "Past ability · polite request · possibility", "**Could** you help me?", "couldn't"],
        ["may", "Formal permission · possibility", "You **may** leave.", "may not"],
        ["might", "A real but uncertain possibility", "It **might** rain.", "might not"],
        ["must", "Strong obligation *(from me)* · near-certainty", "I **must** go. · You **must** be tired.", "mustn't"],
        ["have to", "Obligation *(from outside — a rule)*", "I **have to** wear a helmet.", "don't have to"],
        ["should", "Advice — the right thing to do", "You **should** rest.", "shouldn't"],
        ["will", "Future · a promise", "I **will** call you.", "won't"],
        ["would", "Hypothetical · polite offer", "I **would** love to.", "wouldn't"],
        ["shall", "Offers and suggestions *(formal / British)*", "**Shall** we begin?", "shan't"],
      ],
    },
    {
      title: "The one that catches everyone: *mustn't* vs *don't have to*",
      caption: "They look like opposites of the same thing. They are not.",
      columns: ["Phrase", "Meaning", "Example"],
      rows: [
        ["**mustn't**", "It is **forbidden** — don't do it", "You **mustn't** tell her. *(it's a secret)*"],
        ["**don't have to**", "It is **not necessary** — but you may", "You **don't have to** tell her. *(your call)*"],
      ],
      note: "Say the wrong one and you've either banned something or made it optional. Worth ten seconds of care.",
    },
    {
      title: "How sure am I?",
      caption: "Modals are how English measures confidence.",
      columns: ["Modal", "Confidence", "Example"],
      rows: [
        ["must", "~95% — I'm nearly certain", "She **must** be home; the light is on."],
        ["should", "~70% — I expect so", "The train **should** arrive at six."],
        ["may / might / could", "~40% — maybe", "He **might** be asleep."],
        ["can't", "~95% certain **not**", "That **can't** be right."],
      ],
      note:
        "For the past, add *have* + past participle: *She **must have** left.* / *He **might have** forgotten.*",
    },
  ],
};
