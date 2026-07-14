import type { Resource } from "@/lib/types";

/** Wh- words + question word order. Original wording (HANDOFF §9). */
export const questionWords: Resource = {
  slug: "question-words",
  title: "Asking questions: the wh- words",
  summary:
    "who, what, where, when, why, how — plus the word order that makes a question a question.",
  wiki: "english",
  section: "Sentence building",
  level: 1,
  tags: ["questions", "tables", "basics"],
  related: ["verb-tenses", "prepositions"],
  body: [
    "English questions have a **fixed word order**, and it never changes:",
    "",
    "**Question word → helper → subject → main verb**",
    "",
    "*Where **do** you live?* · *What **is** she doing?* · *Why **did** they leave?*",
    "",
    "## The mistake to avoid",
    "In Spanish you can ask by changing your intonation and keeping the statement order. English can't do that in writing — it needs the **helper verb** (*do / does / did / is / are / have / will*) in front of the subject.",
    "",
    "*~~Where you live?~~* → *Where **do** you live?*",
    "",
    "And once the helper is doing the work, the main verb goes back to its **base** form: *Where did you ~~went~~ **go**?*",
  ].join("\n"),
  tables: [
    {
      title: "The question words",
      columns: ["Word", "Asks about", "Example", "Español"],
      rows: [
        ["**who**", "a person *(subject)*", "**Who** called you?", "quién"],
        ["**whom**", "a person *(object — formal)*", "**Whom** did you call?", "a quién"],
        ["**whose**", "possession", "**Whose** book is this?", "de quién"],
        ["**what**", "a thing — open choice", "**What** do you want?", "qué"],
        ["**which**", "a thing — limited choice", "**Which** one, the red or the blue?", "cuál"],
        ["**where**", "a place", "**Where** are you?", "dónde"],
        ["**when**", "a time", "**When** does it start?", "cuándo"],
        ["**why**", "a reason", "**Why** are you laughing?", "por qué"],
        ["**how**", "a manner or method", "**How** did you get here?", "cómo"],
      ],
      note:
        "*what* vs *which*: use **which** when the options are already on the table (*which day suits you?*), **what** when they aren't (*what day is it?*).",
    },
    {
      title: "The *how* family",
      caption: "*how* + another word covers most of the questions you'll ever need.",
      columns: ["Phrase", "Asks about", "Example"],
      rows: [
        ["how many", "number *(countable)*", "**How many** people came?"],
        ["how much", "amount *(uncountable)* · price", "**How much** does it cost?"],
        ["how long", "duration", "**How long** have you lived here?"],
        ["how often", "frequency", "**How often** do you travel?"],
        ["how far", "distance", "**How far** is the station?"],
        ["how old", "age", "**How old** is she?"],
      ],
    },
    {
      title: "Word order, tense by tense",
      columns: ["Tense", "Question"],
      rows: [
        ["Simple present", "Where **do** you work?"],
        ["Present continuous", "What **are** you doing?"],
        ["Simple past", "When **did** she leave?"],
        ["Present perfect", "How long **have** you known him?"],
        ["Future", "Who **will** drive?"],
        ["With *be*", "Why **is** he late? *(no helper needed — *be* moves itself)*"],
      ],
      note:
        "One exception: when the question word **is** the subject, no helper is needed. *Who **called**?* — not *~~Who did call?~~*",
    },
  ],
};
