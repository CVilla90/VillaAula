import type { Resource } from "@/lib/types";

/** Comparative + superlative forms. Original wording (HANDOFF §9). */
export const comparatives: Resource = {
  slug: "comparatives",
  title: "Comparing things: -er, -est, more, most",
  summary:
    "Bigger, the biggest, more beautiful, the most beautiful. Count the syllables and the rule picks itself.",
  wiki: "english",
  section: "Describing & comparing",
  level: 2,
  tags: ["adjectives", "comparatives", "tables"],
  related: ["adjective-order"],
  body: [
    "English has two ways to compare, and **the length of the adjective decides which one** you use.",
    "",
    "- **Short** adjective (one syllable) → add **-er / -est**: *fast → faster → the fastest*",
    "- **Long** adjective (three or more) → put **more / most** in front: *expensive → more expensive → the most expensive*",
    "- **Two syllables** → usually *more/most*, **but** those ending in **-y** take **-ier/-iest**: *happy → happier → the happiest*",
    "",
    "Never both: ~~*more bigger*~~. Pick one.",
    "",
    "## Than and the",
    "A comparison of two things takes **than**: *She is taller **than** me.* A superlative takes **the**, because there's only one winner: *She is **the** tallest.*",
  ].join("\n"),
  tables: [
    {
      title: "The rules by length",
      columns: ["Adjective", "Rule", "Comparative", "Superlative"],
      rows: [
        ["tall *(1 syllable)*", "+ -er / -est", "taller", "the tallest"],
        ["big *(1 syllable, ends CVC)*", "double the consonant", "bigger", "the biggest"],
        ["nice *(ends in -e)*", "just add -r / -st", "nicer", "the nicest"],
        ["happy *(2 syllables, -y)*", "-y → -ier / -iest", "happier", "the happiest"],
        ["modern *(2 syllables)*", "more / most", "more modern", "the most modern"],
        ["expensive *(3+ syllables)*", "more / most", "more expensive", "the most expensive"],
      ],
    },
    {
      title: "The irregulars — there are only a few",
      columns: ["Adjective", "Comparative", "Superlative", "Note"],
      rows: [
        ["good", "better", "the best", "—"],
        ["bad", "worse", "the worst", "—"],
        ["far", "farther / further", "the farthest / furthest", "*further* also means *additional*"],
        ["little", "less", "the least", "with uncountables"],
        ["much / many", "more", "the most", "—"],
      ],
      note: "*gooder* and *baddest* do not exist. These five are the whole irregular list.",
    },
    {
      title: "Other ways to compare",
      columns: ["Pattern", "Meaning", "Example"],
      rows: [
        ["as … as", "They're equal", "She is **as tall as** her brother."],
        ["not as … as", "The first is less", "Today is **not as cold as** yesterday."],
        ["the same as", "Identical", "My phone is **the same as** yours."],
        ["different from", "Not alike", "This one is **different from** that one."],
        ["-er and -er", "It keeps changing", "It's getting **colder and colder**."],
        ["the … the …", "Two things change together", "**The more** you practise, **the easier** it gets."],
      ],
    },
  ],
};
