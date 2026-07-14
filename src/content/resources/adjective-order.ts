import type { Resource } from "@/lib/types";

/** The adjective-order rule natives follow without knowing it. Original wording (§9). */
export const adjectiveOrder: Resource = {
  slug: "adjective-order",
  title: "Adjective order: the secret rule",
  summary:
    "A lovely little old rectangular green French silver whittling knife. Change the order and it sounds wrong — here's why.",
  wiki: "english",
  section: "Describing & comparing",
  level: 2,
  tags: ["adjectives", "word order", "tables"],
  related: ["comparatives"],
  body: [
    "English speakers put adjectives in a fixed order and **can't tell you what it is**. They only know when it's broken: *a **green big** dragon* sounds wrong to every native ear, and not one of them could explain it.",
    "",
    "Here's the order they're all silently obeying:",
    "",
    "**opinion → size → age → shape → colour → origin → material → purpose → NOUN**",
    "",
    "*a **lovely little old round red Mexican wooden serving** bowl* — technically correct, and absurd. Which points at the real rule of thumb:",
    "",
    "## In real life, use two",
    "Natives rarely stack more than **two or three** adjectives. If you need more, break the sentence up or use a phrase: *a beautiful old table **made of oak***. Nobody will ever fault you for using fewer adjectives.",
    "",
    "So the practical takeaway is small: when you *do* use two, **opinion comes before fact** (*a **nice big** house*), and **colour comes late** (*a **big red** car*, never *a red big car*).",
  ].join("\n"),
  tables: [
    {
      title: "The order, position by position",
      columns: ["#", "Type", "Answers", "Examples"],
      rows: [
        ["1", "Opinion", "What do you think of it?", "lovely · beautiful · horrible · nice"],
        ["2", "Size", "How big?", "big · small · tiny · enormous"],
        ["3", "Age", "How old?", "old · new · young · ancient"],
        ["4", "Shape", "What shape?", "round · square · thin · flat"],
        ["5", "Colour", "What colour?", "red · green · dark blue"],
        ["6", "Origin", "Where from?", "Mexican · French · northern"],
        ["7", "Material", "Made of what?", "wooden · silver · plastic · cotton"],
        ["8", "Purpose", "What's it for?", "*serving* bowl · *running* shoes · *sleeping* bag"],
      ],
      note:
        "The purpose word sits closest to the noun because it's practically part of it: a *running shoe* is one thing, not a shoe that runs.",
    },
    {
      title: "Right and wrong",
      columns: ["Natural", "Wrong", "Why"],
      rows: [
        ["a **big red** car", "~~a red big car~~", "Size before colour"],
        ["a **nice old** friend", "~~an old nice friend~~", "Opinion before age"],
        ["a **small wooden** box", "~~a wooden small box~~", "Size before material"],
        ["**delicious Italian** food", "~~Italian delicious food~~", "Opinion before origin"],
      ],
    },
    {
      title: "Commas between adjectives?",
      caption: "Only when the adjectives are the same *type* and could swap places.",
      columns: ["Sentence", "Comma?", "Test"],
      rows: [
        ["a cold**,** wet night", "Yes", "Both are opinion/quality — *a wet, cold night* works too"],
        ["a big red car", "No", "Different types — they can't swap"],
        ["a long**,** boring film", "Yes", "You could say *and* between them"],
      ],
      note:
        "The test: if **and** would fit between the two adjectives, use a comma. If it wouldn't, don't.",
    },
  ],
};
