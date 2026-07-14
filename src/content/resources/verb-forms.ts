import type { Resource } from "@/lib/types";

/**
 * The table the learners keep asking for: the four forms of a verb, side by side.
 * Original wording; the verb list is common vocabulary (HANDOFF §9).
 */
export const verbForms: Resource = {
  slug: "verb-forms",
  title: "Verb forms: the four columns",
  summary:
    "Base · past · past participle · -ing. Learn a verb once, in all four shapes, and every tense becomes available to you.",
  wiki: "english",
  section: "Verbs",
  level: 2,
  tags: ["verbs", "irregular", "tables"],
  related: ["verb-tenses", "present-perfect", "to-be-forms"],
  body: [
    "Every English verb has **four shapes**. Tenses are built by picking a shape and putting the right helper in front of it — so once you know the four columns, you can build any tense.",
    "",
    "## What each column is for",
    "- **Base** — the dictionary form. Used after *to*, after modals (*can go*), and for the present (*I work*).",
    "- **Simple present (he/she/it)** — the base **+ -s**. This is the only change the present tense makes: *she work**s***.",
    "- **Simple past** — the finished past: *I **went** yesterday.*",
    "- **Past participle** — the form used after *have* (present perfect: *I have **gone***) and after *be* (passive: *it was **made** in Mexico*).",
    "- **-ing (gerund / present participle)** — used after *be* for continuous tenses (*I am **going***) and as a noun (***Swimming** is fun*).",
    "",
    "## Regular verbs are the easy half",
    "A **regular** verb makes both its past and its past participle with **-ed** — the same word twice: *work → worked → worked*. If a verb is regular, you only have to learn one new form.",
    "",
    "The list below is the set worth memorising: the **irregular** verbs, where the past and the participle go their own way. They're also the most common verbs in the language, which is exactly why they survived being irregular.",
    "",
    "Once these are automatic, go and see how they slot into each tense in the [tense table](/learn/verb-tenses).",
  ].join("\n"),
  tables: [
    {
      title: "Regular verbs — the -ed pattern",
      caption:
        "Past and past participle are identical. Learn the pattern, not the words.",
      columns: ["Base", "He / she / it", "Simple past", "Past participle", "-ing", "Español"],
      rows: [
        ["work", "works", "worked", "worked", "working", "trabajar"],
        ["live", "lives", "lived", "lived", "living", "vivir"],
        ["play", "plays", "played", "played", "playing", "jugar"],
        ["study", "studies", "studied", "studied", "studying", "estudiar"],
        ["stop", "stops", "stopped", "stopped", "stopping", "parar"],
        ["want", "wants", "wanted", "wanted", "wanting", "querer"],
        ["need", "needs", "needed", "needed", "needing", "necesitar"],
        ["watch", "watches", "watched", "watched", "watching", "ver / mirar"],
      ],
      note:
        "Spelling: a final consonant often doubles (*stop → stopped*), and a final -y after a consonant becomes -ied (*study → studied*).",
    },
    {
      title: "Irregular verbs — the ones to memorise",
      caption:
        "The most common verbs in English, and the ones that refuse the -ed rule. Bold = the form learners most often get wrong.",
      columns: ["Base", "He / she / it", "Simple past", "Past participle", "-ing", "Español"],
      rows: [
        ["be", "is", "was / were", "**been**", "being", "ser / estar"],
        ["have", "has", "had", "had", "having", "tener / haber"],
        ["do", "does", "did", "**done**", "doing", "hacer"],
        ["go", "goes", "went", "**gone**", "going", "ir"],
        ["make", "makes", "made", "made", "making", "hacer / fabricar"],
        ["take", "takes", "took", "**taken**", "taking", "tomar"],
        ["get", "gets", "got", "gotten / got", "getting", "obtener"],
        ["see", "sees", "saw", "**seen**", "seeing", "ver"],
        ["come", "comes", "came", "**come**", "coming", "venir"],
        ["give", "gives", "gave", "**given**", "giving", "dar"],
        ["know", "knows", "knew", "**known**", "knowing", "saber / conocer"],
        ["think", "thinks", "thought", "thought", "thinking", "pensar"],
        ["say", "says", "said", "said", "saying", "decir"],
        ["tell", "tells", "told", "told", "telling", "contar / decir"],
        ["find", "finds", "found", "found", "finding", "encontrar"],
        ["eat", "eats", "ate", "**eaten**", "eating", "comer"],
        ["drink", "drinks", "drank", "**drunk**", "drinking", "beber"],
        ["write", "writes", "wrote", "**written**", "writing", "escribir"],
        ["read", "reads", "read *(sounds “red”)*", "read *(sounds “red”)*", "reading", "leer"],
        ["speak", "speaks", "spoke", "**spoken**", "speaking", "hablar"],
        ["buy", "buys", "bought", "bought", "buying", "comprar"],
        ["bring", "brings", "brought", "brought", "bringing", "traer"],
        ["leave", "leaves", "left", "left", "leaving", "salir / dejar"],
        ["put", "puts", "put", "put", "putting", "poner"],
        ["run", "runs", "ran", "**run**", "running", "correr"],
        ["sleep", "sleeps", "slept", "slept", "sleeping", "dormir"],
        ["feel", "feels", "felt", "felt", "feeling", "sentir"],
        ["meet", "meets", "met", "met", "meeting", "conocer / reunirse"],
        ["pay", "pays", "paid", "paid", "paying", "pagar"],
        ["send", "sends", "sent", "sent", "sending", "enviar"],
        ["teach", "teaches", "taught", "taught", "teaching", "enseñar"],
        ["understand", "understands", "understood", "understood", "understanding", "entender"],
      ],
      note:
        "Notice the families: *think / bring / buy / teach* all end **-ought / -aught**; *put / read / cost* don't change at all. Learning them in families is far easier than learning 32 separate words.",
    },
    {
      title: "The three groups, at a glance",
      caption: "Every irregular verb falls into one of these shapes.",
      columns: ["Group", "Pattern", "Examples"],
      rows: [
        ["All three the same", "base = past = participle", "put · cut · cost · read"],
        ["Past = participle", "two forms only", "make → made → made · buy → bought → bought"],
        ["All three different", "three forms to learn", "go → went → gone · see → saw → seen"],
      ],
    },
  ],
};
