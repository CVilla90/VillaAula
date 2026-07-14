import type { Resource } from "@/lib/types";

/** Plural spelling rules + irregular plurals. Original wording (HANDOFF §9). */
export const plurals: Resource = {
  slug: "plurals",
  title: "Plurals: adding the -s (and the ones that don't)",
  summary:
    "One box, two boxes. One child, two children. The spelling rules, and the handful of words that ignore them.",
  wiki: "english",
  section: "Nouns & articles",
  level: 1,
  tags: ["nouns", "plurals", "spelling", "tables", "basics"],
  related: ["countable-uncountable", "articles"],
  body: [
    "Most English plurals are just **+ s**. The rules below cover the exceptions — and they're the same spelling rules you'll meet again when you add **-s** to a verb for *he / she / it* (*she watch**es***), so learning them once pays twice.",
    "",
    "Remember: **uncountable** nouns have no plural at all — see [countable & uncountable](/learn/countable-uncountable).",
  ].join("\n"),
  tables: [
    {
      title: "The spelling rules",
      columns: ["If the word ends in…", "Do this", "Examples"],
      rows: [
        ["most sounds", "+ **s**", "book → book**s** · car → car**s**"],
        ["-s, -ss, -sh, -ch, -x, -z", "+ **es** *(you need the extra syllable to say it)*", "bus → bus**es** · watch → watch**es** · box → box**es**"],
        ["consonant + **y**", "-y → **ies**", "city → cit**ies** · baby → bab**ies**"],
        ["vowel + **y**", "just + **s**", "day → day**s** · boy → boy**s**"],
        ["-f / -fe", "usually → **ves**", "knife → kni**ves** · leaf → lea**ves**"],
        ["consonant + **o**", "usually + **es**", "potato → potato**es** · tomato → tomato**es**"],
        ["vowel + **o**", "+ **s**", "video → video**s** · radio → radio**s**"],
      ],
      note:
        "Read the -es rule out loud and it explains itself: *boxs* is unpronounceable; *boxes* gives your mouth the syllable it needs.",
    },
    {
      title: "Irregular plurals — memorise these",
      columns: ["Singular", "Plural", "Español"],
      rows: [
        ["man", "**men**", "hombre → hombres"],
        ["woman", "**women** *(sounds “wimin”)*", "mujer → mujeres"],
        ["child", "**children**", "niño → niños"],
        ["person", "**people**", "persona → personas"],
        ["foot", "**feet**", "pie → pies"],
        ["tooth", "**teeth**", "diente → dientes"],
        ["mouse", "**mice**", "ratón → ratones"],
        ["life", "**lives**", "vida → vidas"],
        ["wife", "**wives**", "esposa → esposas"],
      ],
      note: "*persons* exists, but only in legal or official English. In real life: **people**.",
    },
    {
      title: "No change at all",
      caption: "Same word, singular or plural. The number tells you which.",
      columns: ["Word", "Example"],
      rows: [
        ["fish", "one fish · ten **fish**"],
        ["sheep", "one sheep · ten **sheep**"],
        ["deer", "one deer · ten **deer**"],
        ["series", "one series · two **series**"],
        ["aircraft", "one aircraft · five **aircraft**"],
      ],
    },
  ],
};
