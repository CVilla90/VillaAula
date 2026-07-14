import type { Resource } from "@/lib/types";

/** Countable/uncountable + the quantifier grid. Original wording (HANDOFF §9). */
export const countableUncountable: Resource = {
  slug: "countable-uncountable",
  title: "Countable & uncountable nouns",
  summary:
    "much or many? a few or a little? It all comes down to one question: can you count it?",
  wiki: "english",
  section: "Nouns & articles",
  level: 2,
  tags: ["nouns", "quantifiers", "tables"],
  related: ["articles", "plurals"],
  body: [
    "Ask one question of every noun: **can I put a number in front of it?**",
    "",
    "- *three **apples*** ✓ → **countable**. It has a plural, and it can take *a / an*.",
    "- ~~*three rices*~~ ✗ → **uncountable**. No plural, no *a / an*. You count the *container*, not the thing: *three bowls of rice*.",
    "",
    "Everything else — *much* vs *many*, *a few* vs *a little* — follows automatically from that one answer.",
    "",
    "## The trap: Spanish and English disagree",
    "Some nouns are countable in Spanish but **uncountable** in English. These are worth memorising, because they sound wrong to a native ear:",
    "",
    "- **advice** — *~~an advice~~* → *a piece of advice* / *some advice*",
    "- **information** — *~~informations~~* → *some information*",
    "- **furniture**, **luggage**, **homework**, **work**, **money**, **bread**, **news**",
    "",
    "*news* looks plural but takes a singular verb: *The news **is** good.*",
  ].join("\n"),
  tables: [
    {
      title: "Which word goes with which noun",
      caption: "The quantifier grid — the reason this distinction matters at all.",
      columns: ["Meaning", "Countable", "Uncountable", "Both"],
      rows: [
        ["A lot", "many *(many books)*", "much *(much time)*", "a lot of · lots of"],
        ["A small amount", "a few *(a few friends)*", "a little *(a little milk)*", "some"],
        ["Almost none", "few *(few people came)*", "little *(little hope)*", "hardly any"],
        ["Questions", "How **many**…?", "How **much**…?", "Do you have any…?"],
        ["Zero", "no / none", "no / none", "not any"],
        ["Article", "a / an · the", "*(no article)* · the", "the"],
      ],
      note:
        "In everyday positive sentences, natives reach for **a lot of** far more than *much* or *many*: *I have a lot of work.* Save *much* / *many* mainly for questions and negatives.",
    },
    {
      title: "*a few* vs *few* — a small word, a big change in meaning",
      columns: ["Phrase", "Feeling", "Example"],
      rows: [
        ["a few / a little", "Positive — *some, and that's fine*", "I have **a few** friends here. *(enough)*"],
        ["few / little", "Negative — *not enough*", "I have **few** friends here. *(lonely)*"],
      ],
    },
    {
      title: "Countable or uncountable?",
      caption: "The everyday nouns learners most often trip on.",
      columns: ["Countable", "Uncountable"],
      rows: [
        ["an apple · apples", "rice"],
        ["a sandwich · sandwiches", "bread"],
        ["a coin · coins", "money"],
        ["a suitcase · suitcases", "luggage"],
        ["a job · jobs", "work"],
        ["a chair · chairs", "furniture"],
        ["a suggestion · suggestions", "advice"],
        ["a bottle of water · bottles", "water"],
      ],
      note:
        "Many nouns can be **both**, with a shift in meaning: *two coffees* = two cups of coffee. The countable version means *a portion of* it.",
    },
  ],
};
