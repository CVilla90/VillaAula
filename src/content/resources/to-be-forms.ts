import type { Resource } from "@/lib/types";

/** Conjugation table for *to be*. Original wording (HANDOFF §9). */
export const toBeForms: Resource = {
  slug: "to-be-forms",
  title: "to be — the full conjugation",
  summary:
    "am · is · are · was · were · been. The most irregular verb in English, and the one you'll use most.",
  wiki: "english",
  section: "Verbs",
  level: 1,
  tags: ["verbs", "to be", "tables", "basics"],
  related: ["to-be", "verb-forms", "pronouns"],
  body: [
    "*to be* refuses every rule, so it gets its own table. The good news: there are only a handful of forms, and you'll use them so often that they become automatic fast.",
    "",
    "For *why* it behaves this way and how to use it, read the [deep dive on to be](/learn/to-be).",
  ].join("\n"),
  tables: [
    {
      title: "Present and past",
      columns: ["Person", "Present", "Contraction", "Past", "Negative (past)"],
      rows: [
        ["I", "am", "I'm", "was", "wasn't"],
        ["you", "are", "you're", "were", "weren't"],
        ["he / she / it", "is", "he's · she's · it's", "was", "wasn't"],
        ["we", "are", "we're", "were", "weren't"],
        ["they", "are", "they're", "were", "weren't"],
      ],
      note:
        "Past is easy: **was** for I / he / she / it, **were** for you / we / they. That's the whole rule.",
    },
    {
      title: "The other forms",
      columns: ["Form", "Word", "Where it appears"],
      rows: [
        ["Base", "be", "*I want to **be** a teacher.* · after modals: *I will **be** there.*"],
        ["Past participle", "been", "after *have*: *I have **been** to Spain.*"],
        ["-ing", "being", "*You're **being** funny.* (behaving that way right now)"],
      ],
    },
    {
      title: "Negatives and questions",
      caption: "*be* needs no helper — it *is* the helper. Nothing borrowed from *do*.",
      columns: ["", "Statement", "Negative", "Question"],
      rows: [
        ["Present", "She **is** tired.", "She **isn't** tired.", "**Is** she tired?"],
        ["Past", "They **were** here.", "They **weren't** here.", "**Were** they here?"],
        ["I (present)", "I **am** ready.", "I'**m not** ready.", "**Am** I ready?"],
      ],
      note:
        "There is no *amn't*. For *I*, the negative is **I'm not** — and the question tag English actually uses is *aren't I?*",
    },
    {
      title: "Where Spanish uses another verb",
      caption: "These are the sentences that give Spanish speakers away. English uses *be*.",
      columns: ["English", "Spanish", "Not"],
      rows: [
        ["I **am** 20 (years old).", "Tengo 20 años.", "~~I have 20 years~~"],
        ["I **am** hungry / thirsty.", "Tengo hambre / sed.", "~~I have hunger~~"],
        ["I **am** cold / hot.", "Tengo frío / calor.", "~~I have cold~~"],
        ["I **am** afraid.", "Tengo miedo.", "~~I have fear~~"],
        ["You **are** right.", "Tienes razón.", "~~You have reason~~"],
      ],
    },
  ],
};
