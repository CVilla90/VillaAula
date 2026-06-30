import type { Course } from "@/lib/types";

/**
 * Level 5 — C1 ("nuance · idiom · register · richer discourse"). Authored to the
 * C1/C2 pedagogy in CURRICULA_C1_C2_AWS_SAA.md (Part 1) and AUTHORING_GUIDE.md §3.B:
 * at C1 there is no textbook grammar spine, so each **unit is a real-world theme** and
 * its four lessons **rotate the four skills** — reading · listening · speaking · writing.
 *
 * The collapsible note panel is no longer "grammar"; it's a **language note** carrying
 * the nuance (collocation, register, connotation, discourse markers, idiom). Set via
 * `noteLabel`. Every lesson still ships grammarNote + grammarNoteEs (test-enforced).
 *
 * 100% original content (§9). 6 units · 24 lessons · 6 listening clips · 6 speaking ·
 * 6 draft-compare · 12-question final (pass 9).
 */
export const level5: Course = {
  id: "level-5",
  slug: "5",
  level: 5,
  title: "Saying It Well",
  intro:
    "Welcome to C1 — the level where English stops being about rules and starts being about choices. You already have the grammar; now we work on the things fluent speakers do without thinking: matching your tone to the room, reading between the lines of an article, softening a hard message, catching an idiom, conceding a point and still winning the argument, and telling a story someone wants to hear. Each unit is a theme, and you'll read, listen, speak, and write your way through it.",
  acceptsGuests: true,
  noteLabel: "Language note — the nuance",
  units: [
    // ============================== UNIT 1 ==============================
    {
      id: "c5u1",
      slug: "1",
      number: 1,
      title: "Register & Tone",
      summary:
        "The same idea, dressed for the occasion — formal and informal register, softening, and the distance your words put between you and the listener.",
      lessons: [
        // ---- L1: READING — reading register ----
        {
          id: "c5u1l1",
          slug: "reading-register",
          title: "Two emails, one message",
          topic: "register · formal vs informal markers",
          grammarNote: [
            "**Register** is how formal your language is. The same message can be dressed up or",
            "down, mostly through word choice:",
            "- **Latinate / longer verbs feel formal**: *obtain, require, assist, regarding*.",
            "- **Phrasal verbs & contractions feel informal**: *get, need, help out, I'm, can't*.",
            "- Formal writing avoids slang and keeps sentences fuller: *I would be grateful if…*",
            "vs *Can you…?*",
            "Read the **clues**, not just the words — register tells you the writer's relationship",
            "to the reader.",
          ].join("\n"),
          grammarNoteEs: [
            "El **register** (registro) es qué tan formal es tu lenguaje. El mismo mensaje puede",
            "vestirse formal o informal, sobre todo por la elección de palabras:",
            "- **Verbos latinos / largos suenan formales**: *obtain, require, assist, regarding*.",
            "- **Phrasal verbs y contracciones suenan informales**: *get, need, help out, I'm, can't*.",
            "- La escritura formal evita el slang y usa frases más completas: *I would be grateful if…*",
            "vs *Can you…?*",
            "Lee las **pistas**, no solo las palabras — el registro revela la relación del autor con",
            "el lector.",
          ].join("\n"),
          exercise: {
            id: "c5u1l1-ex",
            title: "Practice: reading the register",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u1l1-r1",
                  type: "reading",
                  emoji: "✉️",
                  title: "Same favour, two ways",
                  body: "Email A: \"Dear Ms Reyes, I am writing to enquire whether it would be possible to bring our meeting forward to Thursday. I would be most grateful for your understanding. Kind regards, T. Vargas.\"\n\nEmail B: \"Hey Sam — any chance we could move Thursday's catch-up earlier? Totally get it if not! Cheers, Tom.\" Both ask for the same thing. Only the relationship — and the register — has changed.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l1-q1",
                  type: "multiple_choice",
                  prompt: "Which phrase signals the **formal** email?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "I am writing to enquire whether…" },
                      { id: "b", text: "any chance we could…" },
                      { id: "c", text: "Totally get it if not!" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Enquire whether* is Latinate and full — a formal-register marker.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l1-q2",
                  type: "true_false",
                  prompt: "The two emails ask for different things.",
                  points: 1,
                  config: { correct: false },
                  explanation: "Same request (move the meeting earlier) — only the register differs.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l1-q3",
                  type: "open",
                  prompt: "Give the **formal** verb that means *ask (to find out)*, used in Email A. ___",
                  points: 1,
                  config: { acceptedAnswers: ["enquire", "inquire"], charLimit: 12 },
                  explanation: "*Enquire / inquire* — the formal cousin of *ask*.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — tone in speech ----
        {
          id: "c5u1l2",
          slug: "listening-tone",
          title: "It's how you say it",
          topic: "tone · softening in speech",
          grammarNote: [
            "In speech, **tone** softens or sharpens a message even when the words barely change:",
            "- *I was wondering if you could…* is gentler than *Can you…?*",
            "- *It might be worth…* is a soft suggestion, not an order.",
            "- A rising, unsure delivery invites the listener in; a flat, clipped one shuts them out.",
            "Listen for the **frame** around the request, not only the request itself.",
          ].join("\n"),
          grammarNoteEs: [
            "Al hablar, el **tone** (tono) suaviza o endurece un mensaje aunque las palabras casi",
            "no cambien:",
            "- *I was wondering if you could…* es más amable que *Can you…?*",
            "- *It might be worth…* es una sugerencia suave, no una orden.",
            "- Una entrega ascendente e insegura invita al oyente; una plana y cortante lo cierra.",
            "Escucha el **marco** que rodea la petición, no solo la petición en sí.",
          ].join("\n"),
          exercise: {
            id: "c5u1l2-ex",
            title: "Practice: hearing the tone",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u1l2-a1",
                  type: "audio",
                  title: "Listen: a careful voicemail",
                  transcript:
                    "Hi, it's Dana. Sorry to bother you on a Friday. I was wondering if you might have a moment next week to look over the budget with me. There's no rush at all, so whenever suits you is fine. Thanks so much, and have a lovely weekend.",
                  voice: "en-US-AriaNeural",
                  mediaUrl: "/audio/c5u1l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l2-q1",
                  type: "multiple_choice",
                  prompt: "What is the speaker's tone?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Polite and low-pressure" },
                      { id: "b", text: "Urgent and demanding" },
                      { id: "c", text: "Cold and annoyed" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“No rush at all… whenever suits you” — a soft, low-pressure ask.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l2-q2",
                  type: "true_false",
                  prompt: "Dana needs the budget looked at immediately.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“There's no rush at all” — the opposite of urgent.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l2-q3",
                  type: "open",
                  prompt: "Fill the softener: “I was ___ if you might have a moment.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["wondering"], charLimit: 12 },
                  explanation: "*I was wondering if…* is the classic softening frame.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — hedging ----
        {
          id: "c5u1l3",
          slug: "speaking-hedging",
          title: "Softening the edges",
          topic: "hedging · diplomatic language",
          grammarNote: [
            "**Hedging** makes a strong claim sound careful and open to discussion:",
            "- *tend to, generally, in some cases* — soften a generalisation.",
            "- *might, could, perhaps, it seems* — soften certainty.",
            "- *a bit, somewhat, fairly* — soften degree.",
            "*That's wrong* → *I'm not sure that's quite right.* Same point, far more diplomatic.",
          ].join("\n"),
          grammarNoteEs: [
            "El **hedging** (matización) hace que una afirmación fuerte suene cuidadosa y abierta",
            "al debate:",
            "- *tend to, generally, in some cases* — suavizan una generalización.",
            "- *might, could, perhaps, it seems* — suavizan la certeza.",
            "- *a bit, somewhat, fairly* — suavizan el grado.",
            "*That's wrong* → *I'm not sure that's quite right.* Mismo punto, mucho más diplomático.",
          ].join("\n"),
          exercise: {
            id: "c5u1l3-ex",
            title: "Practice: hedging",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u1l3-q1",
                  type: "multiple_choice",
                  prompt: "Which is the most **diplomatic** way to disagree?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "I'm not sure I'd put it quite that way." },
                      { id: "b", text: "That's completely wrong." },
                      { id: "c", text: "No. Just no." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Hedged disagreement keeps the door open and the relationship intact.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l3-q2",
                  type: "open",
                  prompt: "Soften “People are lazy” with one hedging word: “People ___ to be lazy.”",
                  points: 1,
                  config: { acceptedAnswers: ["tend"], charLimit: 8 },
                  explanation: "*tend to* turns a blunt generalisation into a careful one.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l3-q3",
                  type: "speaking",
                  prompt: "Disagree politely with: “Remote work makes people less productive.”",
                  points: 1,
                  config: {
                    target: "I'm not sure that's always true; it might depend on the person.",
                    acceptedAnswers: [
                      "im not sure thats always true it might depend on the person",
                      "i am not sure that is always true it might depend on the person",
                      "im not sure thats always true it may depend on the person",
                    ],
                    maxSeconds: 12,
                  },
                  explanation: "Hedges (*not sure, always, might, depend*) soften the pushback.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — polite rewrite ----
        {
          id: "c5u1l4",
          slug: "writing-polite",
          title: "From blunt to gracious",
          topic: "writing · softening a hard message",
          grammarNote: [
            "To soften a written message without losing the point:",
            "- swap commands for questions: *Send it.* → *Could you send it when you get a chance?*",
            "- add a cushion: *Thanks for your patience.* / *I know this is short notice.*",
            "- replace blame with the issue: *You forgot the file* → *The file didn't come through.*",
            "Politeness isn't weakness — it's the packaging that makes the message land.",
          ].join("\n"),
          grammarNoteEs: [
            "Para suavizar un mensaje escrito sin perder el punto:",
            "- cambia órdenes por preguntas: *Send it.* → *Could you send it when you get a chance?*",
            "- añade un colchón: *Thanks for your patience.* / *I know this is short notice.*",
            "- reemplaza la culpa por el problema: *You forgot the file* → *The file didn't come through.*",
            "La cortesía no es debilidad — es el empaque que hace que el mensaje aterrice.",
          ].join("\n"),
          exercise: {
            id: "c5u1l4-ex",
            title: "Practice: rewrite it politely",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u1l4-q1",
                  type: "draft_compare",
                  prompt:
                    "A colleague missed a deadline and it's holding up your work. Write a short message (2–3 sentences) that is firm about the problem but stays warm and professional.",
                  points: 1,
                  config: {
                    placeholder: "Hi Alex, I wanted to check in about…",
                    model:
                      "Hi Alex, I hope things aren't too hectic on your end. I'm still waiting on the figures we agreed on for Tuesday, and it's started to hold up the report. Could you let me know when you think you can get them over? Happy to help if anything's in the way.",
                    checklist: [
                      "Did you name the issue clearly (the missing figures)?",
                      "Did you avoid blaming language (\"you failed to…\")?",
                      "Did you add a cushion or an offer to help?",
                      "Would you be comfortable receiving this message yourself?",
                    ],
                    charLimit: 500,
                  },
                  explanation: "Firm on the problem, soft on the person — that's C1 register control.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u1l4-q2",
                  type: "open",
                  prompt: "Turn the order “Fix this” into a request: “Could you ___ this when you get a chance?” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["fix"], charLimit: 8 },
                  explanation: "Same verb, wrapped in *Could you… when you get a chance?* — far softer.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 2 ==============================
    {
      id: "c5u2",
      slug: "2",
      number: 2,
      title: "News & Media",
      summary:
        "How the news is built — separating fact from opinion, hearing the writer's slant, and noticing the words that spin a story.",
      lessons: [
        // ---- L1: READING — fact vs opinion ----
        {
          id: "c5u2l1",
          slug: "reading-fact-opinion",
          title: "Fact, opinion, or spin?",
          topic: "fact vs opinion · author stance",
          grammarNote: [
            "Skilled readers separate three things in an article:",
            "- **Fact** — checkable: *The bill passed by 12 votes.*",
            "- **Opinion** — the writer's view, often flagged: *arguably, it's clear that, sadly.*",
            "- **Spin** — loaded word choice that nudges you: a *crisis* vs a *challenge*; *slashed*",
            "vs *reduced*.",
            "Ask: *would everyone agree, or is this the writer's framing?*",
          ].join("\n"),
          grammarNoteEs: [
            "Los buenos lectores separan tres cosas en un artículo:",
            "- **Fact** (hecho) — verificable: *The bill passed by 12 votes.*",
            "- **Opinion** — la visión del autor, a menudo marcada: *arguably, it's clear that, sadly.*",
            "- **Spin** — elección de palabras cargada que te empuja: un *crisis* vs un *challenge*;",
            "*slashed* vs *reduced*.",
            "Pregúntate: *¿estarían todos de acuerdo, o es el encuadre del autor?*",
          ].join("\n"),
          exercise: {
            id: "c5u2l1-ex",
            title: "Practice: reading critically",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u2l1-r1",
                  type: "reading",
                  emoji: "📰",
                  title: "The new bridge",
                  body: "The city council approved the riverside bridge on Monday by a vote of nine to four. Supporters say it will cut the cross-town commute by roughly ten minutes. Critics, however, call the £40-million price tag a reckless gamble with public money. Construction is expected to begin in spring. Whether the bridge proves a bargain or a boondoggle, one thing is certain: residents will be debating it for years.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l1-q1",
                  type: "multiple_choice",
                  prompt: "Which sentence is **fact**, not opinion?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The council approved the bridge by nine votes to four." },
                      { id: "b", text: "The price tag is a reckless gamble." },
                      { id: "c", text: "Residents will be debating it for years." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "The vote count is checkable; the others are judgement and prediction.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l1-q2",
                  type: "multiple_choice",
                  prompt: "The word **boondoggle** suggests the writer thinks the bridge might be…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "a wasteful project" },
                      { id: "b", text: "a clever bargain" },
                      { id: "c", text: "a legal problem" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Boondoggle* = a wasteful, pointless project — loaded, negative spin.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l1-q3",
                  type: "true_false",
                  prompt: "“Critics call the price a reckless gamble” reports an opinion, not a fact.",
                  points: 1,
                  config: { correct: true },
                  explanation: "The article reports that critics *hold* this view — it's attributed opinion.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — a news bulletin ----
        {
          id: "c5u2l2",
          slug: "listening-news",
          title: "Gist, then detail",
          topic: "listening · gist vs detail",
          grammarNote: [
            "With longer audio, listen in **two passes**:",
            "- first for the **gist** — what's the story about, overall?",
            "- then for **detail** — names, numbers, the one fact a question hangs on.",
            "Don't panic at unknown words; the gist usually survives a few gaps. Signposts like",
            "*meanwhile, however, in other news* tell you a new point is coming.",
          ].join("\n"),
          grammarNoteEs: [
            "Con audio más largo, escucha en **dos pasadas**:",
            "- primero el **gist** (la idea general) — ¿de qué trata la historia?",
            "- luego el **detail** — nombres, números, el dato del que depende una pregunta.",
            "No te asustes por palabras desconocidas; el gist suele sobrevivir algunos huecos.",
            "Señales como *meanwhile, however, in other news* avisan que viene un punto nuevo.",
          ].join("\n"),
          exercise: {
            id: "c5u2l2-ex",
            title: "Practice: news listening",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u2l2-a1",
                  type: "audio",
                  title: "Listen: the evening update",
                  transcript:
                    "Good evening. Our top story: the city's new cycling network opened today, adding twenty kilometres of protected lanes across the centre. Officials say they hope it will ease the worsening traffic and cut emissions. Reaction has been mixed — cyclists welcomed it warmly, while some shop owners worry about losing parking. Meanwhile, in weather, expect heavy rain overnight before a brighter, calmer weekend.",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/c5u2l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l2-q1",
                  type: "multiple_choice",
                  prompt: "Gist: what is the top story about?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "A new cycling network opening" },
                      { id: "b", text: "A weather emergency" },
                      { id: "c", text: "Shops closing downtown" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "The lead story is the new protected cycling lanes.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l2-q2",
                  type: "open",
                  prompt: "Detail: how many kilometres of lanes were added? (a number)",
                  points: 1,
                  config: { acceptedAnswers: ["20", "twenty"], charLimit: 8 },
                  explanation: "“…adding twenty kilometres of protected lanes.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l2-q3",
                  type: "true_false",
                  prompt: "Everyone reacted to the lanes in the same way.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“Reaction has been mixed” — cyclists pleased, some shop owners worried.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — summarise & react ----
        {
          id: "c5u2l3",
          slug: "speaking-react",
          title: "What do you make of it?",
          topic: "speaking · summarise and respond",
          grammarNote: [
            "To react to a story like a fluent speaker, use a **two-step move**:",
            "- summarise neutrally: *So the gist is that…* / *Apparently…*",
            "- then add your stance: *What strikes me is… / I can see why…, but…*",
            "This separates *what was said* from *what you think*, which sounds measured and clear.",
          ].join("\n"),
          grammarNoteEs: [
            "Para reaccionar a una noticia como hablante fluido, usa un **movimiento de dos pasos**:",
            "- resume neutralmente: *So the gist is that…* / *Apparently…*",
            "- luego añade tu postura: *What strikes me is… / I can see why…, but…*",
            "Esto separa *lo que se dijo* de *lo que piensas*, lo que suena medido y claro.",
          ].join("\n"),
          exercise: {
            id: "c5u2l3-ex",
            title: "Practice: summarise and react",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u2l3-q1",
                  type: "multiple_choice",
                  prompt: "Which phrase **summarises** a story before you give your view?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "So the gist is that…" },
                      { id: "b", text: "I totally disagree because…" },
                      { id: "c", text: "Whatever, it's boring." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*So the gist is that…* signals a neutral summary before your stance.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l3-q2",
                  type: "speaking",
                  prompt: "Summarise the bridge story, then give one opinion (start with “So the gist is…”).",
                  points: 1,
                  config: {
                    target: "So the gist is that the council approved a new bridge, and I think it could be worth the cost.",
                    acceptedAnswers: [
                      "so the gist is that the council approved a new bridge and i think it could be worth the cost",
                      "so the gist is the council approved a new bridge and i think it could be worth the cost",
                      "so the gist is that they approved a new bridge and i think it could be worth the cost",
                    ],
                    maxSeconds: 14,
                  },
                  explanation: "Neutral summary, then a hedged opinion — the C1 react move.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — a balanced report ----
        {
          id: "c5u2l4",
          slug: "writing-balanced",
          title: "Both sides, briefly",
          topic: "writing · balanced reporting",
          grammarNote: [
            "A balanced short report presents **both sides** before any conclusion:",
            "- *On the one hand… on the other hand…*",
            "- *Supporters argue… Critics counter…*",
            "- attribute opinions (*according to, X says*) and keep your own voice out until the end.",
            "Neutral verbs help: *said, reported, noted* — not *admitted, claimed* (those carry spin).",
          ].join("\n"),
          grammarNoteEs: [
            "Un reporte breve y equilibrado presenta **ambos lados** antes de cualquier conclusión:",
            "- *On the one hand… on the other hand…*",
            "- *Supporters argue… Critics counter…*",
            "- atribuye las opiniones (*according to, X says*) y deja tu voz fuera hasta el final.",
            "Verbos neutrales ayudan: *said, reported, noted* — no *admitted, claimed* (esos llevan spin).",
          ].join("\n"),
          exercise: {
            id: "c5u2l4-ex",
            title: "Practice: write it balanced",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u2l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Your town wants to ban cars from the main square. Write a short, balanced paragraph (3–4 sentences) presenting both sides before a brief closing thought.",
                  points: 1,
                  config: {
                    placeholder: "Supporters of the ban argue that…",
                    model:
                      "Supporters of the ban argue that a car-free square would be safer, quieter and better for local cafés. Critics counter that older residents and delivery drivers would struggle, and that nearby streets would simply absorb the traffic. According to the council, a six-month trial is the fairest way to test both claims. On balance, a trial seems sensible before anything permanent.",
                    checklist: [
                      "Did you give a genuine point to each side?",
                      "Did you attribute opinions (supporters argue / critics counter)?",
                      "Did you keep loaded, one-sided words out of the body?",
                      "Did your own view appear only at the end?",
                    ],
                    charLimit: 600,
                  },
                  explanation: "Both sides fairly, attribution, opinion held to the close — balanced reporting.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u2l4-q2",
                  type: "multiple_choice",
                  prompt: "Which reporting verb is the most **neutral**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "noted" },
                      { id: "b", text: "admitted" },
                      { id: "c", text: "boasted" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Noted* is neutral; *admitted* and *boasted* smuggle in a judgement.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 3 ==============================
    {
      id: "c5u3",
      slug: "3",
      number: 3,
      title: "Work & Persuasion",
      summary:
        "The language of getting things done — pitching an idea, the phrasal verbs of meetings, and persuading without pushing.",
      lessons: [
        // ---- L1: READING — a proposal ----
        {
          id: "c5u3l1",
          slug: "reading-proposal",
          title: "Reading a pitch",
          topic: "persuasion · structure of a proposal",
          grammarNote: [
            "A persuasive proposal usually moves in a shape you can spot:",
            "- **problem** → **proposal** → **benefit** → **call to action**.",
            "Persuasive language leans on benefit verbs (*save, boost, unlock, streamline*) and",
            "confident framing (*this would let us…*). Read for the **logic**, and notice where claims",
            "are backed by evidence and where they're just confident.",
          ].join("\n"),
          grammarNoteEs: [
            "Una propuesta persuasiva suele moverse en una forma que puedes detectar:",
            "- **problem** → **proposal** → **benefit** → **call to action**.",
            "El lenguaje persuasivo se apoya en verbos de beneficio (*save, boost, unlock, streamline*)",
            "y en un encuadre seguro (*this would let us…*). Lee buscando la **lógica**, y nota dónde",
            "las afirmaciones tienen evidencia y dónde solo suenan seguras.",
          ].join("\n"),
          exercise: {
            id: "c5u3l1-ex",
            title: "Practice: reading a proposal",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u3l1-r1",
                  type: "reading",
                  emoji: "📊",
                  title: "A four-day week",
                  body: "Our team loses hours every Friday to low-energy, low-output work. I'm proposing a three-month trial of a four-day week, with the same pay and targets. Early studies elsewhere suggest output holds steady or rises as people focus harder in less time. If it works, we keep a happier, sharper team; if it doesn't, we simply stop. I'd like to bring this to the leadership meeting on the 14th — can we put it on the agenda?",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l1-q1",
                  type: "multiple_choice",
                  prompt: "What is the **call to action** at the end?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Put the idea on the leadership agenda for the 14th." },
                      { id: "b", text: "Cut everyone's pay." },
                      { id: "c", text: "Cancel Fridays permanently today." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "The closing ask is to get it onto the agenda — a clear call to action.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l1-q2",
                  type: "true_false",
                  prompt: "The writer claims the change is permanent and cannot be reversed.",
                  points: 1,
                  config: { correct: false },
                  explanation: "It's a **three-month trial** — “if it doesn't [work], we simply stop.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l1-q3",
                  type: "open",
                  prompt: "Which single word names what is being offered: a three-month ___? ",
                  points: 1,
                  config: { acceptedAnswers: ["trial"], charLimit: 10 },
                  explanation: "A *trial* lowers the risk — a classic persuasive move.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — a meeting pitch ----
        {
          id: "c5u3l2",
          slug: "listening-pitch",
          title: "Selling it in the room",
          topic: "listening · meetings & phrasal verbs",
          grammarNote: [
            "Meetings run on **phrasal verbs** — listen for them:",
            "- *kick off* (start) · *run through* (review) · *bring forward* (move earlier)",
            "- *flag up* (raise) · *follow up* (check later) · *roll out* (launch widely)",
            "Catching the phrasal verb often is catching the action item.",
          ].join("\n"),
          grammarNoteEs: [
            "Las juntas funcionan con **phrasal verbs** — escúchalos:",
            "- *kick off* (empezar) · *run through* (repasar) · *bring forward* (adelantar)",
            "- *flag up* (señalar) · *follow up* (dar seguimiento) · *roll out* (lanzar ampliamente)",
            "Captar el phrasal verb a menudo es captar la tarea pendiente.",
          ].join("\n"),
          exercise: {
            id: "c5u3l2-ex",
            title: "Practice: meeting language",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u3l2-a1",
                  type: "audio",
                  title: "Listen: kicking off the meeting",
                  transcript:
                    "Right, let's kick off. I'll quickly run through last week's numbers, then I want to flag up a risk with the supplier. If everyone's happy, we'll bring the launch forward by a week and roll it out to the whole region. Can someone follow up with the design team afterwards?",
                  voice: "en-US-AndrewNeural",
                  mediaUrl: "/audio/c5u3l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l2-q1",
                  type: "multiple_choice",
                  prompt: "“Bring the launch **forward** by a week” means the launch will be…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "earlier than planned" },
                      { id: "b", text: "later than planned" },
                      { id: "c", text: "cancelled" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Bring forward* = move to an earlier time.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l2-q2",
                  type: "match",
                  prompt: "Match each meeting phrasal verb to its meaning:",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "kick off", right: "start" },
                      { left: "run through", right: "review" },
                      { left: "flag up", right: "raise as a concern" },
                    ],
                  },
                  explanation: "kick off = start · run through = review · flag up = raise a concern.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l2-q3",
                  type: "true_false",
                  prompt: "Someone is asked to follow up with the design team after the meeting.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“Can someone **follow up** with the design team afterwards?” ✓",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — pitch in 30 seconds ----
        {
          id: "c5u3l3",
          slug: "speaking-pitch",
          title: "Thirty seconds to convince",
          topic: "speaking · the mini-pitch",
          grammarNote: [
            "A tight spoken pitch hits three beats fast:",
            "- the **hook**: the problem in one line.",
            "- the **idea**: what you propose, plainly.",
            "- the **payoff**: the benefit, with a number if you have one.",
            "End on the ask. Brevity *is* persuasion — say less, mean more.",
          ].join("\n"),
          grammarNoteEs: [
            "Un pitch hablado y conciso golpea tres tiempos rápido:",
            "- el **hook** (gancho): el problema en una línea.",
            "- la **idea**: lo que propones, claramente.",
            "- el **payoff**: el beneficio, con un número si lo tienes.",
            "Termina con la petición. La brevedad *es* persuasión — di menos, significa más.",
          ].join("\n"),
          exercise: {
            id: "c5u3l3-ex",
            title: "Practice: the mini-pitch",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u3l3-q1",
                  type: "open",
                  prompt: "Name the first beat of a pitch — the one-line problem that grabs attention: the ___.",
                  points: 1,
                  config: { acceptedAnswers: ["hook"], charLimit: 8 },
                  explanation: "The *hook* opens a pitch by naming the problem fast.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l3-q2",
                  type: "speaking",
                  prompt: "Give a 1-sentence pitch for a quiet room at work (problem → idea → benefit).",
                  points: 1,
                  config: {
                    target: "Open offices kill focus, so let's turn the small meeting room into a quiet space and get our deep work done faster.",
                    acceptedAnswers: [
                      "open offices kill focus so lets turn the small meeting room into a quiet space and get our deep work done faster",
                      "open offices kill focus so let us turn the small meeting room into a quiet space and get our deep work done faster",
                      "open offices kill focus so lets make the small meeting room a quiet space and get our deep work done faster",
                    ],
                    maxSeconds: 14,
                  },
                  explanation: "Problem (focus), idea (quiet room), payoff (faster deep work) — in one breath.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — persuasive follow-up ----
        {
          id: "c5u3l4",
          slug: "writing-followup",
          title: "The follow-up that lands",
          topic: "writing · persuasive follow-up",
          grammarNote: [
            "A persuasive follow-up email is short and forward-moving:",
            "- **remind** of the value, don't re-explain everything: *As we discussed, this would…*",
            "- **lower the barrier**: offer a small, easy next step (*a 15-minute call?*).",
            "- **make saying yes easy**: propose a specific time, not “let me know.”",
          ].join("\n"),
          grammarNoteEs: [
            "Un correo de seguimiento persuasivo es corto y avanza:",
            "- **recuerda** el valor, no re-expliques todo: *As we discussed, this would…*",
            "- **baja la barrera**: ofrece un siguiente paso pequeño y fácil (*a 15-minute call?*).",
            "- **facilita el sí**: propón una hora específica, no “let me know.”",
          ].join("\n"),
          exercise: {
            id: "c5u3l4-ex",
            title: "Practice: write the follow-up",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u3l4-q1",
                  type: "draft_compare",
                  prompt:
                    "You pitched the four-day-week trial last week and heard nothing back. Write a short, warm follow-up (2–3 sentences) that nudges without nagging and proposes an easy next step.",
                  points: 1,
                  config: {
                    placeholder: "Hi Priya, just following up on…",
                    model:
                      "Hi Priya, just circling back on the four-day-week trial we talked about. I know the calendar's packed, so no pressure at all — but if it's still of interest, I'd be happy to put together a one-page plan and walk you through it in fifteen minutes. Would Thursday afternoon work?",
                    checklist: [
                      "Did you remind, not re-explain the whole idea?",
                      "Did you keep the pressure low while still moving forward?",
                      "Did you offer a small, concrete next step?",
                      "Did you propose a specific time to make 'yes' easy?",
                    ],
                    charLimit: 500,
                  },
                  explanation: "Remind → lower the barrier → specific time. That's a follow-up that lands.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u3l4-q2",
                  type: "true_false",
                  prompt: "A strong follow-up ends with the vague “let me know if you're interested.”",
                  points: 1,
                  config: { correct: false },
                  explanation: "Propose a **specific** next step/time — it makes saying yes effortless.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 4 ==============================
    {
      id: "c5u4",
      slug: "4",
      number: 4,
      title: "Idioms & Figurative Language",
      summary:
        "When words don't mean what they say — idioms, metaphor, connotation, and the collocations that make English sound native.",
      lessons: [
        // ---- L1: READING — idiom in context ----
        {
          id: "c5u4l1",
          slug: "reading-idiom",
          title: "Reading between the lines",
          topic: "idiom · meaning in context",
          deepDives: ["phrasal-verbs"],
          grammarNote: [
            "An **idiom** means something different from its literal words — *break the ice*,",
            "*the last straw*, *on the fence*. You rarely get a definition; you infer it from",
            "**context**. If a phrase seems odd taken literally, it's probably an idiom — ask what",
            "would make sense *here*.",
          ].join("\n"),
          grammarNoteEs: [
            "Un **idiom** (modismo) significa algo distinto de sus palabras literales — *break the",
            "ice*, *the last straw*, *on the fence*. Rara vez recibes una definición; lo infieres del",
            "**contexto**. Si una frase suena rara tomada literalmente, probablemente es un idiom —",
            "pregúntate qué tendría sentido *aquí*.",
          ].join("\n"),
          exercise: {
            id: "c5u4l1-ex",
            title: "Practice: idioms in a story",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u4l1-r1",
                  type: "reading",
                  emoji: "📖",
                  title: "The new job",
                  body: "On her first day, Lena was thrown in at the deep end — three meetings before lunch and a project already behind schedule. She kept her cards close to her chest, listening more than she spoke. By Friday, when a tense call nearly went off the rails, she stepped in and smoothed things over. Her manager later admitted she'd hit the ground running.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l1-q1",
                  type: "multiple_choice",
                  prompt: "“Thrown in at the deep end” means Lena…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "had to handle hard tasks with little preparation" },
                      { id: "b", text: "went swimming on her first day" },
                      { id: "c", text: "was given an easy first week" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Thrown in at the deep end* = facing difficulty immediately, unprepared.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l1-q2",
                  type: "multiple_choice",
                  prompt: "“Hit the ground running” suggests Lena…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "started strongly and effectively" },
                      { id: "b", text: "fell over on day one" },
                      { id: "c", text: "quit quickly" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Hit the ground running* = begin a new role energetically and well.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l1-q3",
                  type: "open",
                  prompt: "Which idiom in the story means *she kept her plans private*? “She kept her cards close to her ___.”",
                  points: 1,
                  config: { acceptedAnswers: ["chest"], charLimit: 8 },
                  explanation: "*Keep your cards close to your chest* = stay private about your intentions.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — idioms in speech ----
        {
          id: "c5u4l2",
          slug: "listening-idioms",
          title: "Catching idioms by ear",
          topic: "listening · idioms & connotation",
          grammarNote: [
            "Idioms come fast in speech, often softening bad news or adding colour:",
            "- *it's not rocket science* (it's simple) · *a blessing in disguise* (a hidden good)",
            "- *cost an arm and a leg* (very expensive) · *under the weather* (a bit ill)",
            "Notice the **connotation** — most idioms carry a feeling, not just a fact.",
          ].join("\n"),
          grammarNoteEs: [
            "Los idioms vienen rápido al hablar, a menudo suavizando malas noticias o dando color:",
            "- *it's not rocket science* (es simple) · *a blessing in disguise* (un bien oculto)",
            "- *cost an arm and a leg* (carísimo) · *under the weather* (algo enfermo)",
            "Nota la **connotation** (connotación) — la mayoría de los idioms llevan un sentimiento,",
            "no solo un hecho.",
          ].join("\n"),
          exercise: {
            id: "c5u4l2-ex",
            title: "Practice: idioms by ear",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u4l2-a1",
                  type: "audio",
                  title: "Listen: a friend's week",
                  transcript:
                    "Honestly, it's been a bit of a rollercoaster. The car broke down and the repair cost an arm and a leg, which was the last straw after a rough month. But losing that contract turned out to be a blessing in disguise — it pushed me to start my own thing. So I'm feeling under the weather today, but oddly hopeful.",
                  voice: "en-US-AvaMultilingualNeural",
                  mediaUrl: "/audio/c5u4l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l2-q1",
                  type: "multiple_choice",
                  prompt: "“The repair cost an arm and a leg” means it was…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "very expensive" },
                      { id: "b", text: "dangerous" },
                      { id: "c", text: "free" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Cost an arm and a leg* = extremely expensive.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l2-q2",
                  type: "true_false",
                  prompt: "Losing the contract turned out to have a hidden upside for the speaker.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“A blessing in disguise — it pushed me to start my own thing.” ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l2-q3",
                  type: "open",
                  prompt: "Which idiom means the speaker feels slightly ill? “feeling ___ the weather” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["under"], charLimit: 8 },
                  explanation: "*Under the weather* = a little unwell.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — use an idiom naturally ----
        {
          id: "c5u4l3",
          slug: "speaking-idiom",
          title: "Make it sound native",
          topic: "speaking · idiom + collocation",
          grammarNote: [
            "Idioms only sound native if you use the **right collocation** — the words that",
            "naturally go together: you *make* a decision, *take* a risk, *break* a habit.",
            "Force-fitting an idiom sounds worse than not using one. Pick a familiar idiom and place",
            "it where it truly fits.",
          ].join("\n"),
          grammarNoteEs: [
            "Los idioms solo suenan nativos si usas la **collocation** correcta — las palabras que",
            "van juntas naturalmente: *make* a decision, *take* a risk, *break* a habit.",
            "Forzar un idiom suena peor que no usar ninguno. Elige un idiom conocido y colócalo donde",
            "de verdad encaje.",
          ].join("\n"),
          exercise: {
            id: "c5u4l3-ex",
            title: "Practice: idiom + collocation",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u4l3-q1",
                  type: "multiple_choice",
                  prompt: "Choose the natural collocation: “I had to ___ a difficult decision.”",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "make" },
                      { id: "b", text: "do" },
                      { id: "c", text: "take" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "We **make** a decision (not *do* or *take* one).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l3-q2",
                  type: "speaking",
                  prompt: "Tell us about a hard choice using the idiom “on the fence”.",
                  points: 1,
                  config: {
                    target: "I was on the fence about moving cities, but in the end I decided to take the risk.",
                    acceptedAnswers: [
                      "i was on the fence about moving cities but in the end i decided to take the risk",
                      "i was on the fence about moving cities but in the end i took the risk",
                      "i was on the fence about moving but in the end i decided to take the risk",
                    ],
                    maxSeconds: 13,
                  },
                  explanation: "*On the fence* (undecided) + *take the risk* (right collocation) = natural.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — colour without cliché ----
        {
          id: "c5u4l4",
          slug: "writing-figurative",
          title: "Colour, not cliché",
          topic: "writing · metaphor & freshness",
          grammarNote: [
            "Figurative language adds colour, but **tired idioms** (*at the end of the day*, *think",
            "outside the box*) dull writing. Better:",
            "- use one **fresh** image instead of three clichés.",
            "- let a simple metaphor carry the feeling: *the inbox was a rising tide.*",
            "- if an idiom adds nothing, cut it. Clarity beats decoration.",
          ].join("\n"),
          grammarNoteEs: [
            "El lenguaje figurado añade color, pero los **idioms gastados** (*at the end of the day*,",
            "*think outside the box*) apagan la escritura. Mejor:",
            "- usa una imagen **fresca** en vez de tres clichés.",
            "- deja que una metáfora simple lleve el sentimiento: *the inbox was a rising tide.*",
            "- si un idiom no aporta nada, córtalo. La claridad gana a la decoración.",
          ].join("\n"),
          exercise: {
            id: "c5u4l4-ex",
            title: "Practice: write with colour",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u4l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Describe a stressful but exciting day (3–4 sentences). Use exactly ONE fresh image or idiom — and no tired clichés.",
                  points: 1,
                  config: {
                    placeholder: "By nine the day had already…",
                    model:
                      "By nine the day was a train I was running to catch and never quite boarding. Messages piled up faster than I could clear them, each one small but insistent. Somewhere around three, the noise finally settled, and I realised I'd done more than I thought. Tired, yes — but it was the good kind of tired.",
                    checklist: [
                      "Did you use exactly one fresh image (not a stock cliché)?",
                      "Did the metaphor carry a real feeling, not just decorate?",
                      "Could a reader picture the day clearly?",
                      "Did you cut any idiom that added nothing?",
                    ],
                    charLimit: 600,
                  },
                  explanation: "One fresh image (the train), clear feeling, no cliché pile-up — C1 colour control.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u4l4-q2",
                  type: "multiple_choice",
                  prompt: "Which phrase is a **tired cliché** best avoided in fresh writing?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "think outside the box" },
                      { id: "b", text: "the inbox was a rising tide" },
                      { id: "c", text: "a train I kept running to catch" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Think outside the box* is worn out; the other two are fresh images.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 5 ==============================
    {
      id: "c5u5",
      slug: "5",
      number: 5,
      title: "Argument & Debate",
      summary:
        "Holding your ground gracefully — discourse markers, conceding a point, and speaking at length without losing the thread.",
      lessons: [
        // ---- L1: READING — an argument's structure ----
        {
          id: "c5u5l1",
          slug: "reading-argument",
          title: "Following the thread",
          topic: "discourse markers · argument structure",
          grammarNote: [
            "**Discourse markers** are the signposts of an argument — they tell you what the next",
            "sentence *does*:",
            "- add: *moreover, what's more* · contrast: *however, yet, that said*",
            "- concede: *admittedly, granted, to be fair* · conclude: *therefore, in short*",
            "Track the markers and you can follow a complex argument even when the vocabulary is hard.",
          ].join("\n"),
          grammarNoteEs: [
            "Los **discourse markers** son las señales de un argumento — te dicen qué *hace* la",
            "siguiente oración:",
            "- añadir: *moreover, what's more* · contrastar: *however, yet, that said*",
            "- conceder: *admittedly, granted, to be fair* · concluir: *therefore, in short*",
            "Sigue los marcadores y podrás seguir un argumento complejo aunque el vocabulario sea difícil.",
          ].join("\n"),
          exercise: {
            id: "c5u5l1-ex",
            title: "Practice: reading an argument",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u5l1-r1",
                  type: "reading",
                  emoji: "🗣️",
                  title: "Should phones be banned in schools?",
                  body: "Phones are an obvious distraction in class, and many teachers want them gone. Admittedly, a total ban is hard to enforce and can cut students off from useful tools. However, the evidence on focus is hard to ignore: attention rises when screens disappear. That said, the answer may not be banning phones but teaching students to manage them. In short, the goal should be attention, not prohibition for its own sake.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l1-q1",
                  type: "multiple_choice",
                  prompt: "The word **Admittedly** signals that the writer is about to…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "concede a point against their own side" },
                      { id: "b", text: "add more evidence for their side" },
                      { id: "c", text: "conclude the argument" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Admittedly* concedes — it grants the other side a fair point.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l1-q2",
                  type: "multiple_choice",
                  prompt: "What is the writer's final position?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Teach students to manage phones, focusing on attention" },
                      { id: "b", text: "Ban all phones with no exceptions" },
                      { id: "c", text: "Give every student more screen time" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“The goal should be attention, not prohibition for its own sake.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l1-q3",
                  type: "open",
                  prompt: "Which marker introduces the conclusion? “___ short, the goal should be attention.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["in"], charLimit: 6 },
                  explanation: "*In short* signals the wrap-up.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — a debate ----
        {
          id: "c5u5l2",
          slug: "listening-debate",
          title: "Who concedes what?",
          topic: "listening · concession in debate",
          grammarNote: [
            "In a debate, strong speakers **concede before they counter**:",
            "- *You make a fair point, but…* · *I take your point; even so…*",
            "Conceding isn't losing — it shows you've heard the other side, then earns you the turn",
            "to answer. Listen for the pivot word (*but, even so, still*) — the real claim follows it.",
          ].join("\n"),
          grammarNoteEs: [
            "En un debate, los buenos oradores **conceden antes de contraargumentar**:",
            "- *You make a fair point, but…* · *I take your point; even so…*",
            "Conceder no es perder — muestra que escuchaste al otro lado, y te gana el turno para",
            "responder. Escucha la palabra pivote (*but, even so, still*) — la afirmación real va después.",
          ].join("\n"),
          exercise: {
            id: "c5u5l2-ex",
            title: "Practice: hearing concession",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u5l2-a1",
                  type: "audio",
                  title: "Listen: two views on city cars",
                  transcript:
                    "Speaker one: We should charge drivers to enter the city centre. Speaker two: I take your point about pollution, and it's a real problem. Even so, a charge hits lower-paid workers hardest, and the buses aren't ready yet. So I'd agree with the goal, but I'd fix public transport first.",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/c5u5l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l2-q1",
                  type: "multiple_choice",
                  prompt: "What does Speaker two **concede**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "That pollution is a real problem" },
                      { id: "b", text: "That the charge is a perfect idea" },
                      { id: "c", text: "That buses are already excellent" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“I take your point about pollution… it's a real problem” — the concession.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l2-q2",
                  type: "true_false",
                  prompt: "Speaker two rejects the goal entirely.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“I'd agree with the goal, but I'd fix public transport first” — agrees with the goal.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l2-q3",
                  type: "open",
                  prompt: "Which two words are the pivot into the counter-argument? “___ ___, a charge hits lower-paid workers hardest.”",
                  points: 1,
                  config: { acceptedAnswers: ["even so"], charLimit: 12 },
                  explanation: "*Even so* pivots from the concession to the real objection.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — defend a position ----
        {
          id: "c5u5l3",
          slug: "speaking-defend",
          title: "Concede, then counter",
          topic: "speaking · the concession move",
          grammarNote: [
            "The most persuasive speaking move at C1 is **concede-then-counter**:",
            "1. grant the other side something true: *That's a fair point…*",
            "2. pivot: *…but / even so…*",
            "3. land your stronger reason.",
            "It makes you sound reasonable *and* convincing — not stubborn.",
          ].join("\n"),
          grammarNoteEs: [
            "El movimiento hablado más persuasivo en C1 es **conceder-luego-contraargumentar**:",
            "1. concede algo cierto al otro lado: *That's a fair point…*",
            "2. pivota: *…but / even so…*",
            "3. aterriza tu razón más fuerte.",
            "Te hace sonar razonable *y* convincente — no terco.",
          ].join("\n"),
          exercise: {
            id: "c5u5l3-ex",
            title: "Practice: concede then counter",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u5l3-q1",
                  type: "open",
                  prompt: "Complete the concession opener: “That's a ___ point, but…” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["fair", "good", "valid"], charLimit: 8 },
                  explanation: "*That's a fair/good/valid point, but…* opens the concede-then-counter move.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l3-q2",
                  type: "speaking",
                  prompt: "Reply to “We should ban cars downtown” using concede-then-counter.",
                  points: 1,
                  config: {
                    target: "That's a fair point about pollution, but I'd fix public transport first.",
                    acceptedAnswers: [
                      "thats a fair point about pollution but id fix public transport first",
                      "that is a fair point about pollution but i would fix public transport first",
                      "thats a fair point about pollution but i would fix public transport first",
                    ],
                    maxSeconds: 12,
                  },
                  explanation: "Concession (*fair point*) → pivot (*but*) → stronger reason. Reasonable and firm.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — a short argument ----
        {
          id: "c5u5l4",
          slug: "writing-argument",
          title: "Make the case",
          topic: "writing · the mini-essay",
          grammarNote: [
            "A tight argumentative paragraph has a shape:",
            "- **claim** (your position) → **reason** → **concession** (*granted…*) → **rebuttal**",
            "→ **restated claim**.",
            "Stitch it with discourse markers so the logic shows. One concession makes you far more",
            "convincing than pretending the other side has no case.",
          ].join("\n"),
          grammarNoteEs: [
            "Un párrafo argumentativo conciso tiene una forma:",
            "- **claim** (tu postura) → **reason** → **concession** (*granted…*) → **rebuttal**",
            "→ **restated claim**.",
            "Cóselo con discourse markers para que la lógica se vea. Una concesión te hace mucho",
            "más convincente que fingir que el otro lado no tiene caso.",
          ].join("\n"),
          exercise: {
            id: "c5u5l4-ex",
            title: "Practice: write the case",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u5l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Argue for or against working from home (4–5 sentences). Include at least one concession and one discourse marker.",
                  points: 1,
                  config: {
                    placeholder: "I'd argue that working from home…",
                    model:
                      "I'd argue that working from home is, on balance, a clear win. It saves hours of commuting and lets people focus without constant interruptions. Granted, it can blur the line between work and rest, and new staff may miss the informal learning of an office. However, those problems can be managed with clear hours and the occasional team day. In short, flexibility beats a rigid office for most knowledge work.",
                    checklist: [
                      "Is your claim clear in the first sentence?",
                      "Did you give a genuine concession (granted / admittedly)?",
                      "Did you rebut it rather than ignore it?",
                      "Do discourse markers show the logic (however, in short)?",
                    ],
                    charLimit: 700,
                  },
                  explanation: "Claim → reason → concession → rebuttal → restated claim. A complete mini-argument.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u5l4-q2",
                  type: "true_false",
                  prompt: "Including a fair concession usually makes an argument **less** convincing.",
                  points: 1,
                  config: { correct: false },
                  explanation: "A handled concession makes you more credible — it shows you've weighed both sides.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 6 ==============================
    {
      id: "c5u6",
      slug: "6",
      number: 6,
      title: "Narrative & Description",
      summary:
        "Telling a story someone wants to hear — pacing, vivid description, and showing instead of telling.",
      lessons: [
        // ---- L1: READING — show, don't tell ----
        {
          id: "c5u6l1",
          slug: "reading-description",
          title: "Show, don't tell",
          topic: "description · inference from detail",
          grammarNote: [
            "Good description **shows** through concrete detail and lets the reader infer the feeling:",
            "- *tell*: *She was nervous.*",
            "- *show*: *She read the message twice and put the phone face-down.*",
            "As a reader, the meaning lives in the details — infer the emotion the writer never names.",
          ].join("\n"),
          grammarNoteEs: [
            "La buena descripción **muestra** con detalle concreto y deja que el lector infiera el",
            "sentimiento:",
            "- *tell*: *She was nervous.*",
            "- *show*: *She read the message twice and put the phone face-down.*",
            "Como lector, el significado vive en los detalles — infiere la emoción que el autor nunca nombra.",
          ].join("\n"),
          exercise: {
            id: "c5u6l1-ex",
            title: "Practice: reading the details",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u6l1-r1",
                  type: "reading",
                  emoji: "🚪",
                  title: "The interview",
                  body: "Mateo arrived twenty minutes early and walked the block three times. In the lobby he straightened a tie that was already straight, then checked the time on a clock he'd checked a minute before. When his name was called, he stood too quickly, knocked his knee on the table, and laughed at himself. By the time he sat down across from the panel, though, his voice had steadied.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l1-q1",
                  type: "multiple_choice",
                  prompt: "What is Mateo feeling at the start, even though the text never says it?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Nervous" },
                      { id: "b", text: "Bored" },
                      { id: "c", text: "Angry" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Pacing the block, fixing a straight tie, re-checking the clock — all *show* nerves.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l1-q2",
                  type: "true_false",
                  prompt: "By the time he sits down, he has started to calm down.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“His voice had steadied” — the detail shows him settling. ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l1-q3",
                  type: "open",
                  prompt: "One word: the writing technique of revealing emotion through action instead of naming it is “___, don't tell.”",
                  points: 1,
                  config: { acceptedAnswers: ["show"], charLimit: 8 },
                  explanation: "*Show, don't tell* — the heart of vivid narrative.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — a story told aloud ----
        {
          id: "c5u6l2",
          slug: "listening-story",
          title: "A story, well told",
          topic: "listening · narrative pacing",
          grammarNote: [
            "Spoken stories use **pacing** to hold you:",
            "- the setup is unhurried, then *suddenly / before I knew it* speeds things up.",
            "- the teller plants a detail early that pays off later.",
            "Listen for the **turn** — the moment the story pivots — and for the point the teller is",
            "really making.",
          ].join("\n"),
          grammarNoteEs: [
            "Las historias habladas usan el **pacing** (ritmo) para atraparte:",
            "- el inicio va sin prisa, luego *suddenly / before I knew it* acelera todo.",
            "- el narrador planta un detalle al inicio que paga después.",
            "Escucha el **turn** (giro) — el momento en que la historia pivota — y el punto que el",
            "narrador realmente quiere transmitir.",
          ].join("\n"),
          exercise: {
            id: "c5u6l2-ex",
            title: "Practice: story listening",
            items: [
              {
                kind: "content",
                content: {
                  id: "c5u6l2-a1",
                  type: "audio",
                  title: "Listen: the lost wallet",
                  transcript:
                    "So I was rushing for the last train, completely stressed, when I dropped my wallet on the platform without noticing. A stranger picked it up and ran after me — and I, being paranoid, actually sped up, thinking he was after my bag. He finally caught me, out of breath, and just handed it over with a smile. I felt terrible for misjudging him. Funny how the worst moments can restore your faith in people.",
                  voice: "en-US-AriaNeural",
                  mediaUrl: "/audio/c5u6l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l2-q1",
                  type: "multiple_choice",
                  prompt: "Why did the speaker speed up when the stranger ran after them?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "They wrongly thought the stranger was a thief" },
                      { id: "b", text: "They were racing the stranger for fun" },
                      { id: "c", text: "They had missed the train" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“Being paranoid… thinking he was after my bag.” A misjudgement.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l2-q2",
                  type: "true_false",
                  prompt: "The stranger returned the wallet.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“He… just handed it over with a smile.” ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l2-q3",
                  type: "multiple_choice",
                  prompt: "What's the **point** the speaker is really making?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Bad moments can renew your faith in people" },
                      { id: "b", text: "Never run for a train" },
                      { id: "c", text: "Strangers can't be trusted" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“The worst moments can restore your faith in people” — the takeaway.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — tell a short story ----
        {
          id: "c5u6l3",
          slug: "speaking-narrate",
          title: "Your turn to tell it",
          topic: "speaking · narrating with a point",
          grammarNote: [
            "A good spoken anecdote has a **shape**: a quick setup, a turn (*then, suddenly*), and",
            "a point that makes it worth telling. Keep tenses consistent (past for the events, present",
            "for the moral: *…and that's why I always…*). One vivid detail beats five vague ones.",
          ].join("\n"),
          grammarNoteEs: [
            "Una buena anécdota hablada tiene una **forma**: un setup rápido, un giro (*then, suddenly*),",
            "y un punto que la hace valer la pena. Mantén los tiempos consistentes (pasado para los",
            "eventos, presente para la moraleja: *…and that's why I always…*). Un detalle vívido vale",
            "más que cinco vagos.",
          ].join("\n"),
          exercise: {
            id: "c5u6l3-ex",
            title: "Practice: tell a story",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u6l3-q1",
                  type: "multiple_choice",
                  prompt: "Which word best signals the **turn** in a spoken story?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Suddenly" },
                      { id: "b", text: "Firstly" },
                      { id: "c", text: "Therefore" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Suddenly* marks the pivot; *firstly/therefore* belong to lists and logic.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l3-q2",
                  type: "speaking",
                  prompt: "Tell a 2-sentence story about a time you were wrong about someone — end with a point.",
                  points: 1,
                  config: {
                    target: "I once judged a quiet coworker as unfriendly, but he turned out to be the kindest person on the team. Ever since, I try not to judge people too quickly.",
                    acceptedAnswers: [
                      "i once judged a quiet coworker as unfriendly but he turned out to be the kindest person on the team ever since i try not to judge people too quickly",
                      "i once thought a quiet coworker was unfriendly but he turned out to be the kindest person on the team ever since i try not to judge people too quickly",
                      "i once judged a quiet coworker as unfriendly but he turned out to be the kindest person on the team and ever since i try not to judge people too quickly",
                    ],
                    maxSeconds: 18,
                  },
                  explanation: "Setup → turn (*but*) → point in the present. A complete little story.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — a vivid scene ----
        {
          id: "c5u6l4",
          slug: "writing-scene",
          title: "Paint the place",
          topic: "writing · descriptive writing",
          grammarNote: [
            "To describe a place so a reader *sees* it:",
            "- pick **three precise details**, not ten vague ones (*the smell of wet bread*, not",
            "*it was nice*).",
            "- use the **senses** — sound and smell, not only sight.",
            "- let one detail carry the mood. Specific is vivid; general is forgettable.",
          ].join("\n"),
          grammarNoteEs: [
            "Para describir un lugar de modo que el lector lo *vea*:",
            "- elige **tres detalles precisos**, no diez vagos (*the smell of wet bread*, no",
            "*it was nice*).",
            "- usa los **sentidos** — sonido y olor, no solo la vista.",
            "- deja que un detalle lleve el ambiente. Lo específico es vívido; lo general se olvida.",
          ].join("\n"),
          exercise: {
            id: "c5u6l4-ex",
            title: "Practice: write a scene",
            items: [
              {
                kind: "question",
                question: {
                  id: "c5u6l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Describe a place you know well (a market, a kitchen, a street) in 3–4 sentences so a reader can see, hear, and smell it. Use three precise sensory details.",
                  points: 1,
                  config: {
                    placeholder: "The market wakes up before the city does…",
                    model:
                      "The market wakes up before the city does. By six, crates of oranges glow under bare bulbs, and the air is thick with coffee, wet cardboard, and frying dough. A woman calls out prices in a voice worn smooth by thirty years of mornings. You don't walk through this place so much as let it carry you.",
                    checklist: [
                      "Did you use at least three precise, concrete details?",
                      "Did you include more than one sense (sound, smell — not only sight)?",
                      "Did one detail set the mood?",
                      "Did you avoid vague words like 'nice', 'good', 'beautiful'?",
                    ],
                    charLimit: 600,
                  },
                  explanation: "Three senses, concrete detail, one mood-setting image — descriptive writing at C1.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c5u6l4-q2",
                  type: "multiple_choice",
                  prompt: "Which detail is the most **vivid** (shows rather than tells)?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "the air was thick with coffee and frying dough" },
                      { id: "b", text: "the market was really nice" },
                      { id: "c", text: "there were a lot of good things" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Concrete, sensory detail beats vague praise every time.",
                },
              },
            ],
          },
        },
      ],
    },
  ],
  finalTest: {
    id: "c5-final",
    slug: "final-test",
    title: "Level 5 review",
    intro:
      "A C1 skim across all six themes — register, media literacy, persuasion, idiom, argument, and narrative. Twelve questions mixing reading, language, and judgement. Score 9 of 12 to earn your Level 5 diploma.",
    passingScore: 9,
    exercise: {
      id: "c5-final-ex",
      title: "Level 5 final",
      items: [
        {
          kind: "question",
          question: {
            id: "c5-final-q1",
            type: "multiple_choice",
            prompt: "Which sentence is the most **formal** register?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "I am writing to enquire about the vacancy." },
                { id: "b", text: "Hey, is that job still going?" },
                { id: "c", text: "Any chance the role's open?" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Enquire about the vacancy* is Latinate and full — formal register.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q2",
            type: "open",
            prompt: "Soften “People are unreliable” with one hedge: “People can ___ to be unreliable.” (one word)",
            points: 1,
            config: { acceptedAnswers: ["tend"], charLimit: 8 },
            explanation: "*tend to* hedges a blunt generalisation.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q3",
            type: "multiple_choice",
            prompt: "Which is **fact**, not opinion?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "The library closes at nine on weekdays." },
                { id: "b", text: "The library is the best building in town." },
                { id: "c", text: "Everyone should read more." },
              ],
              correctIds: ["a"],
            },
            explanation: "A closing time is checkable; the others are judgement.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q4",
            type: "multiple_choice",
            prompt: "A writer calls a project a “boondoggle.” Their view is that it is…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "wasteful" },
                { id: "b", text: "excellent" },
                { id: "c", text: "neutral" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Boondoggle* = a wasteful, pointless project — negative spin.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q5",
            type: "match",
            prompt: "Match each meeting phrasal verb to its meaning:",
            points: 1,
            config: {
              pairs: [
                { left: "kick off", right: "start" },
                { left: "bring forward", right: "move earlier" },
                { left: "follow up", right: "check later" },
              ],
            },
            explanation: "kick off = start · bring forward = move earlier · follow up = check later.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q6",
            type: "open",
            prompt: "A low-risk way to test a proposal is to run a three-month ___. (one word)",
            points: 1,
            config: { acceptedAnswers: ["trial"], charLimit: 10 },
            explanation: "A *trial* lowers risk — a persuasive move.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q7",
            type: "multiple_choice",
            prompt: "“She was thrown in at the deep end” means she…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "faced hard tasks with little preparation" },
                { id: "b", text: "had an easy start" },
                { id: "c", text: "learned to swim" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Thrown in at the deep end* = into difficulty with no warm-up.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q8",
            type: "open",
            prompt: "Natural collocation: we ___ a decision. (one word)",
            points: 1,
            config: { acceptedAnswers: ["make"], charLimit: 8 },
            explanation: "We **make** a decision.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q9",
            type: "multiple_choice",
            prompt: "“Admittedly, the plan is expensive, but…” — the word **Admittedly** is…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "a concession" },
                { id: "b", text: "a conclusion" },
                { id: "c", text: "an addition" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Admittedly* concedes a point before the counter.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q10",
            type: "true_false",
            prompt: "Conceding a fair point usually makes your argument more credible.",
            points: 1,
            config: { correct: true },
            explanation: "A handled concession shows you've weighed both sides. ✓",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q11",
            type: "multiple_choice",
            prompt: "Which sentence **shows** nervousness rather than telling it?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "He checked the same clock twice in a minute." },
                { id: "b", text: "He was very nervous." },
                { id: "c", text: "He felt anxious inside." },
              ],
              correctIds: ["a"],
            },
            explanation: "The action *shows* the feeling; the others simply name it.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c5-final-q12",
            type: "multiple_choice",
            prompt: "Which is the most **vivid** description?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "the air was thick with coffee and wet cardboard" },
                { id: "b", text: "the place was nice" },
                { id: "c", text: "there were many things there" },
              ],
              correctIds: ["a"],
            },
            explanation: "Concrete, sensory detail is vivid; vague praise is forgettable.",
          },
        },
      ],
    },
  },
  conclusion: {
    title: "You've reached C1 — Level 5 done.",
    body:
      "You can now do the things that separate a fluent speaker from a correct one: match your register to the room, read an article for its slant, soften a hard message, catch an idiom on the fly, concede a point and still make your case, and tell a story worth hearing. The grammar was never the hard part at this level — the choices were, and you're making them well. One level left: C2, where precision and subtlety become second nature.",
    nextSteps: [
      "Rewrite a blunt message you've sent into something warmer — without losing the point.",
      "Read an opinion article and underline three words that carry the writer's slant.",
      "In your next disagreement, concede one real point before you counter.",
      "Tell someone a two-minute story with a setup, a turn, and a point.",
    ],
  },
  diploma: {
    title: "VillaAula Saying It Well Diploma",
    subtitle: "Level 5 (C1)",
    issuer: "VillaAula",
  },
};
