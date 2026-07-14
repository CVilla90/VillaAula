import type { Resource } from "@/lib/types";

/** The pronoun grid. Original wording (HANDOFF §9). */
export const pronouns: Resource = {
  slug: "pronouns",
  title: "Pronouns: the whole grid",
  summary:
    "I · me · my · mine · myself. Five columns, seven people — and then you never have to guess again.",
  wiki: "english",
  section: "Pronouns & determiners",
  level: 2,
  tags: ["pronouns", "tables", "basics"],
  related: ["verb-forms", "to-be-forms"],
  body: [
    "Pronouns are the words that stand in for a name, so you don't have to keep repeating it. English has **five sets** of them, and the whole system fits in one grid.",
    "",
    "## Which column do I need?",
    "- **Subject** — it *does* the verb. ***She** called me.*",
    "- **Object** — it *receives* the verb, or follows a preposition. *I called **her**.* / *with **her***",
    "- **Possessive adjective** — sits *before* a noun. ***Her** car is new.*",
    "- **Possessive pronoun** — stands *alone*, with no noun after it. *That car is **hers**.*",
    "- **Reflexive** — the subject and the object are the same person. *She hurt **herself**.*",
    "",
    "The one to be careful with is the difference between the two possessives: **her car** (adjective, noun follows) vs **that's hers** (pronoun, nothing follows). Never both: ~~*that's hers car*~~.",
  ].join("\n"),
  tables: [
    {
      title: "The pronoun grid",
      columns: [
        "Subject",
        "Object",
        "Possessive adjective",
        "Possessive pronoun",
        "Reflexive",
        "Español",
      ],
      rows: [
        ["I", "me", "my", "mine", "myself", "yo"],
        ["you", "you", "your", "yours", "yourself", "tú / usted"],
        ["he", "him", "his", "his", "himself", "él"],
        ["she", "her", "her", "hers", "herself", "ella"],
        ["it", "it", "its", "—", "itself", "ello / eso"],
        ["we", "us", "our", "ours", "ourselves", "nosotros"],
        ["you", "you", "your", "yours", "yourselves", "ustedes"],
        ["they", "them", "their", "theirs", "themselves", "ellos / ellas"],
      ],
      note:
        "**its** (no apostrophe) = possessive. **it's** (apostrophe) = *it is*. This is the single most common spelling mistake in English — natives make it too.",
    },
    {
      title: "See it in one sentence",
      caption: "The same person, in all five columns.",
      columns: ["Column", "Example"],
      rows: [
        ["Subject", "**She** teaches English."],
        ["Object", "I asked **her** a question."],
        ["Possessive adjective", "**Her** class is on Monday."],
        ["Possessive pronoun", "This book is **hers**."],
        ["Reflexive", "She taught **herself** to draw."],
      ],
    },
    {
      title: "*you* does a lot of work",
      caption:
        "English dropped the singular/plural difference that Spanish keeps — one word covers *tú*, *usted*, and *ustedes*.",
      columns: ["Spanish", "English", "Note"],
      rows: [
        ["tú", "you", "Informal singular"],
        ["usted", "you", "Formal singular — English shows respect with *word choice*, not a different pronoun"],
        ["ustedes / vosotros", "you", "Plural. Say *you all* / *you guys* if you must be clear"],
      ],
      note:
        "Only the reflexive keeps the difference: *yourself* (one person) vs *yourselves* (more than one).",
    },
  ],
};
