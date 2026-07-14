import type { Resource } from "@/lib/types";

/** in / on / at for time and place. Original wording (HANDOFF §9). */
export const prepositions: Resource = {
  slug: "prepositions",
  title: "in, on, at — time and place",
  summary:
    "Three words, one pattern: big → small. Get the pattern and you'll almost never pick the wrong one.",
  wiki: "english",
  section: "Sentence building",
  level: 1,
  tags: ["prepositions", "tables", "basics"],
  related: ["question-words"],
  body: [
    "*in*, *on* and *at* look arbitrary, but they follow a **zoom lens**: **in** is the widest, **at** is the narrowest, **on** sits in between.",
    "",
    "- **in** a country, a city, a month, a year — a big container you're *inside* of",
    "- **on** a street, a surface, a day — something you're *on top of* or a single named day",
    "- **at** an address, a point, a clock time — a precise spot",
    "",
    "*I live **in** Mexico, **on** Juárez Street, **at** number 12. I'll see you **in** July, **on** Monday, **at** 6 o'clock.* Same order, both times.",
  ].join("\n"),
  tables: [
    {
      title: "Time",
      columns: ["Preposition", "Use for", "Examples"],
      rows: [
        ["**in**", "Months · years · seasons · centuries · parts of the day", "in July · in 2026 · in summer · in the morning"],
        ["**on**", "Days · dates · named days", "on Monday · on 3 May · on my birthday · on Christmas Day"],
        ["**at**", "Clock times · night · the weekend *(US)* · festivals", "at 7:30 · at night · at Christmas"],
        ["*(none)*", "Before *next / last / this / every / tomorrow / yesterday*", "See you **next** Monday. *(not ~~on next Monday~~)*"],
      ],
      note:
        "Two to memorise because they break the pattern: **at night** (not *in the night*) and **in the morning / afternoon / evening**.",
    },
    {
      title: "Place",
      columns: ["Preposition", "Use for", "Examples"],
      rows: [
        ["**in**", "Enclosed spaces · cities · countries", "in the box · in the kitchen · in Chihuahua · in Mexico"],
        ["**on**", "Surfaces · streets · floors · transport lines", "on the table · on the wall · on Main Street · on the second floor · on the bus"],
        ["**at**", "A point · an address · a place you go for its purpose", "at the door · at 25 Oak Road · at the station · at work · at school"],
      ],
      note:
        "*in the bus* vs *on the bus*: **on** for public transport (bus, train, plane), **in** for a car or a taxi. It comes from whether you can stand up in it.",
    },
    {
      title: "Fixed phrases you just learn",
      caption: "No logic here — these are set expressions.",
      columns: ["Phrase", "Meaning"],
      rows: [
        ["on time", "punctual — exactly when planned"],
        ["in time", "early enough — with room to spare"],
        ["at the end", "the final point *(at the end of the film)*"],
        ["in the end", "finally, after everything *(in the end, we stayed home)*"],
        ["on foot", "walking"],
        ["at least", "the minimum"],
      ],
    },
  ],
};
