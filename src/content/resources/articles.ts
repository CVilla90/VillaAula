import type { Resource } from "@/lib/types";

/** a / an / the / zero article. Original wording (HANDOFF §9). */
export const articles: Resource = {
  slug: "articles",
  title: "a, an, the — and nothing at all",
  summary:
    "Three tiny words that natives never think about and learners never stop thinking about. Here's the logic.",
  wiki: "english",
  section: "Nouns & articles",
  level: 1,
  tags: ["articles", "nouns", "tables", "basics"],
  related: ["countable-uncountable", "plurals"],
  body: [
    "The choice comes down to one question: **does my listener already know which one I mean?**",
    "",
    "- No, this is new information → **a / an**. *I saw **a** dog.*",
    "- Yes, they know exactly which → **the**. ***The** dog was barking.* *(the one I just mentioned)*",
    "- I'm talking about the thing **in general**, not a specific one → **no article**. *I like **dogs**.*",
    "",
    "That last case is the one Spanish speakers miss most, because Spanish keeps the article: *Me gustan **los** perros* → *I like ~~the~~ dogs.*",
    "",
    "## a or an?",
    "It follows the **sound**, not the letter. **an** before a vowel *sound*: *an apple*, *an hour* (the *h* is silent). **a** before a consonant *sound*: *a car*, *a university* (it starts with a *y* sound).",
  ].join("\n"),
  tables: [
    {
      title: "Which article?",
      columns: ["Situation", "Article", "Example"],
      rows: [
        ["First mention — new to the listener", "a / an", "I bought **a** book."],
        ["Second mention — now they know it", "the", "**The** book was expensive."],
        ["Only one exists in the world", "the", "**the** sun · **the** internet"],
        ["Only one *here*, obvious from context", "the", "Close **the** door."],
        ["A job or a role", "a / an", "She's **an** architect."],
        ["Things in general (plural)", "*(none)*", "I like **cats**."],
        ["Things in general (uncountable)", "*(none)*", "**Water** is free."],
        ["Superlatives — there's only one best", "the", "**the** best day"],
        ["Countries, most", "*(none)*", "**Mexico** · **Spain**"],
        ["Countries that are plural or a union", "the", "**the** United States · **the** Netherlands"],
        ["Meals, languages, sports", "*(none)*", "I have **lunch** · I speak **English** · I play **tennis**"],
      ],
    },
    {
      title: "Where Spanish keeps the article and English drops it",
      caption: "Learn these five and most of your article mistakes disappear.",
      columns: ["English", "Spanish", "Not"],
      rows: [
        ["I like **coffee**.", "Me gusta **el** café.", "~~I like the coffee~~ *(unless you mean a specific cup)*"],
        ["**Life** is short.", "**La** vida es corta.", "~~The life is short~~"],
        ["I go to **school**.", "Voy a **la** escuela.", "~~I go to the school~~ *(as a student)*"],
        ["**Doctor Ruiz** called.", "**El** doctor Ruiz llamó.", "~~The doctor Ruiz~~"],
        ["I speak **Spanish**.", "Hablo **el** español.", "~~I speak the Spanish~~"],
      ],
      note:
        "*I go to **the** school* is grammatical — but it means you went to the building for some other reason, not that you study there. The article changes the meaning, not just the style.",
    },
  ],
};
