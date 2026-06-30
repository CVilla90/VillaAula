import type { Course } from "@/lib/types";

/**
 * Level 6 — C2 ("subtlety · precision · near-native fluency"). The top of the ladder.
 * Authored to the C1/C2 pedagogy in CURRICULA_C1_C2_AWS_SAA.md (Part 1) and
 * AUTHORING_GUIDE.md §3.B: theme-based units that rotate the four skills, with the
 * note panel carrying mastery-level nuance (precision, implicature, rhetoric, register).
 *
 * C2 = less scaffolding, longer texts/audio, more open-ended judgement. The final unit
 * is an integrated capstone (read→summarise, lecture→respond, essay).
 *
 * 100% original content (§9). 6 units · 24 lessons · 6 listening clips · 6 speaking ·
 * 6 draft-compare · 12-question final (pass 9).
 */
export const level6: Course = {
  id: "level-6",
  slug: "6",
  level: 6,
  title: "The Fine Print",
  intro:
    "This is C2 — mastery. At this level English isn't about being understood; it's about being exactly as understood as you intend. You'll cut a sentence to its sharpest form, hear what a speaker means without saying, name the devices that make a speech land, move between the registers of law, medicine and the lab, think aloud without stumbling, and pull it all together in a capstone that reads, listens, speaks, and writes at once. Less is taught here and more is asked — which is the point.",
  acceptsGuests: true,
  noteLabel: "Language note — the nuance",
  units: [
    // ============================== UNIT 1 ==============================
    {
      id: "c6u1",
      slug: "1",
      number: 1,
      title: "Precision & Concision",
      summary:
        "Saying exactly what you mean in as few words as it takes — near-synonyms, redundancy, and the right word over the almost-right one.",
      lessons: [
        // ---- L1: READING — near-synonyms ----
        {
          id: "c6u1l1",
          slug: "reading-precision",
          title: "The almost-right word",
          topic: "near-synonyms · precise meaning",
          grammarNote: [
            "Near-synonyms are rarely interchangeable — the difference is the point:",
            "- *childish* (negative) vs *childlike* (innocent, positive)",
            "- *notorious* (famous for something bad) vs *famous* (neutral)",
            "- *economical* (thrifty, good) vs *cheap* (low quality, often bad)",
            "At C2, reading well means catching the **connotation** the writer chose on purpose.",
          ].join("\n"),
          grammarNoteEs: [
            "Los casi-sinónimos rara vez son intercambiables — la diferencia es el punto:",
            "- *childish* (negativo) vs *childlike* (inocente, positivo)",
            "- *notorious* (famoso por algo malo) vs *famous* (neutral)",
            "- *economical* (ahorrativo, bueno) vs *cheap* (baja calidad, a menudo malo)",
            "En C2, leer bien es captar la **connotation** que el autor eligió a propósito.",
          ].join("\n"),
          exercise: {
            id: "c6u1l1-ex",
            title: "Practice: choosing precisely",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u1l1-r1",
                  type: "reading",
                  emoji: "🔍",
                  title: "Two reviews of the same café",
                  body: "The first reviewer called the café \"economical and unpretentious — exactly what the neighbourhood needed.\" The second called it \"cheap and forgettable.\" Neither lied about the prices or the plain décor. They simply chose words that carried their verdict: one heard thrift and honesty, the other heard corner-cutting. Same facts, opposite connotations.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l1-q1",
                  type: "multiple_choice",
                  prompt: "Why do the two reviews feel so different despite agreeing on the facts?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "They chose words with opposite connotations" },
                      { id: "b", text: "They visited different cafés" },
                      { id: "c", text: "One made up the prices" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Economical* vs *cheap* carry the same fact with opposite feeling.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l1-q2",
                  type: "multiple_choice",
                  prompt: "Which word would you use to praise someone's curiosity?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "childlike" },
                      { id: "b", text: "childish" },
                      { id: "c", text: "infantile" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Childlike* is positive (innocent wonder); *childish/infantile* are insults.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l1-q3",
                  type: "open",
                  prompt: "Which word means *famous for something bad*? ___",
                  points: 1,
                  config: { acceptedAnswers: ["notorious"], charLimit: 12 },
                  explanation: "*Notorious* carries a negative reputation; *famous* is neutral.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — vague vs precise speech ----
        {
          id: "c6u1l2",
          slug: "listening-vague",
          title: "Padding and precision",
          topic: "listening · filler vs substance",
          grammarNote: [
            "Even fluent speakers pad: *kind of, sort of, basically, at the end of the day, you*",
            "*know*. Padding buys thinking time but blurs meaning. At C2 you can:",
            "- hear the **filler** and listen past it to the real claim,",
            "- and, in your own speech, replace a vague phrase with one exact word.",
            "*\"It's kind of a big deal\"* → *\"It's significant.\"*",
          ].join("\n"),
          grammarNoteEs: [
            "Incluso los hablantes fluidos rellenan: *kind of, sort of, basically, at the end of the*",
            "*day, you know*. El relleno gana tiempo para pensar pero difumina el significado. En C2",
            "puedes:",
            "- oír el **filler** y escuchar más allá de él la afirmación real,",
            "- y, en tu propio habla, cambiar una frase vaga por una palabra exacta.",
            "*\"It's kind of a big deal\"* → *\"It's significant.\"*",
          ].join("\n"),
          exercise: {
            id: "c6u1l2-ex",
            title: "Practice: hearing past the padding",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u1l2-a1",
                  type: "audio",
                  title: "Listen: a padded explanation",
                  transcript:
                    "So, basically, the thing is, at the end of the day, we kind of need to, you know, sort of rethink the whole budget, because, like, the numbers are basically not really adding up the way we, sort of, hoped they would. But the core point is simple: we are spending more than we earn.",
                  voice: "en-US-AndrewNeural",
                  mediaUrl: "/audio/c6u1l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l2-q1",
                  type: "multiple_choice",
                  prompt: "Beneath the padding, what is the speaker's actual point?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "We are spending more than we earn." },
                      { id: "b", text: "The budget is perfectly balanced." },
                      { id: "c", text: "The numbers don't matter." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“The core point is simple: we are spending more than we earn.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l2-q2",
                  type: "true_false",
                  prompt: "Most of the speaker's words carry real information.",
                  points: 1,
                  config: { correct: false },
                  explanation: "Most are filler (*basically, kind of, you know*); one short sentence holds the meaning.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l2-q3",
                  type: "open",
                  prompt: "Replace the padded phrase with one precise word: “It's kind of a big deal” → “It's ___.”",
                  points: 1,
                  config: { acceptedAnswers: ["significant", "important", "serious", "major"], charLimit: 14 },
                  explanation: "One exact word (*significant*) beats a vague phrase.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — say it in fewer words ----
        {
          id: "c6u1l3",
          slug: "speaking-concise",
          title: "In ten words or fewer",
          topic: "speaking · concision under pressure",
          grammarNote: [
            "Concision is a skill you can practise out loud: take a rambling thought and **compress**",
            "it. Strategies:",
            "- cut the wind-up (*What I'm trying to say is…* → just say it),",
            "- one strong verb instead of a weak verb + noun (*make a decision* → *decide*),",
            "- trust the listener; don't repeat the point three ways.",
          ].join("\n"),
          grammarNoteEs: [
            "La concisión es una destreza que puedes practicar en voz alta: toma un pensamiento",
            "divagante y **comprímelo**. Estrategias:",
            "- corta el preámbulo (*What I'm trying to say is…* → solo dilo),",
            "- un verbo fuerte en vez de verbo débil + sustantivo (*make a decision* → *decide*),",
            "- confía en quien escucha; no repitas el punto de tres formas.",
          ].join("\n"),
          exercise: {
            id: "c6u1l3-ex",
            title: "Practice: compress it",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u1l3-q1",
                  type: "multiple_choice",
                  prompt: "Which is the most **concise** version?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "We must decide today." },
                      { id: "b", text: "We really need to come to some kind of a decision at some point today." },
                      { id: "c", text: "What I'm trying to say is that a decision needs to be made by us today." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "One strong verb (*decide*), no wind-up — the tightest of the three.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l3-q2",
                  type: "speaking",
                  prompt: "Compress this into one short sentence: “Due to the fact that it was raining quite heavily, we made the decision to postpone the event.”",
                  points: 1,
                  config: {
                    target: "We postponed the event because of the rain.",
                    acceptedAnswers: [
                      "we postponed the event because of the rain",
                      "we postponed the event due to the rain",
                      "we postponed the event because it was raining",
                    ],
                    maxSeconds: 10,
                  },
                  explanation: "*Made the decision to postpone* → *postponed*; *due to the fact that* → *because of*.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — cut the redundancy ----
        {
          id: "c6u1l4",
          slug: "writing-cut",
          title: "Kill your darlings",
          topic: "writing · editing for concision",
          grammarNote: [
            "Strong writing is rewritten writing. On a second pass, hunt for:",
            "- **redundancy**: *advance planning, end result, completely finished* — cut a word.",
            "- **weak intensifiers**: *very, really, quite* — usually delete or replace.",
            "- **throat-clearing**: *It is important to note that…* — start with the point.",
            "If a word can go without loss, it should.",
          ].join("\n"),
          grammarNoteEs: [
            "La buena escritura es escritura reescrita. En una segunda pasada, caza:",
            "- **redundancy**: *advance planning, end result, completely finished* — corta una palabra.",
            "- **intensificadores débiles**: *very, really, quite* — normalmente bórralos o reemplázalos.",
            "- **carraspeo**: *It is important to note that…* — empieza con el punto.",
            "Si una palabra puede irse sin pérdida, debe irse.",
          ].join("\n"),
          exercise: {
            id: "c6u1l4-ex",
            title: "Practice: edit it down",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u1l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Here is a bloated paragraph. Rewrite it in your own words, as tight as you can, keeping every real point:\n\n\"It is important to note that, at the end of the day, the basic fundamental reason why the project ultimately failed in the end was due to the fact that there was a complete and total lack of any clear communication whatsoever between the various different teams.\"",
                  points: 1,
                  config: {
                    placeholder: "The project failed because…",
                    model:
                      "The project failed because the teams didn't communicate clearly.",
                    checklist: [
                      "Did you cut redundancies (basic fundamental, complete and total)?",
                      "Did you remove throat-clearing (It is important to note that)?",
                      "Did you keep the one real point (poor communication caused the failure)?",
                      "Is your version under fifteen words?",
                    ],
                    charLimit: 300,
                  },
                  explanation: "Forty words of padding collapse to one clean sentence with nothing lost.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u1l4-q2",
                  type: "multiple_choice",
                  prompt: "Which phrase is **redundant** (one word should go)?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "end result" },
                      { id: "b", text: "clear plan" },
                      { id: "c", text: "final report" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A *result* is already an end; *end result* repeats itself.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 2 ==============================
    {
      id: "c6u2",
      slug: "2",
      number: 2,
      title: "Implicature & Subtext",
      summary:
        "What people mean without saying it — implication, irony, understatement, and reading the space between the lines.",
      lessons: [
        // ---- L1: READING — subtext ----
        {
          id: "c6u2l1",
          slug: "reading-subtext",
          title: "What isn't said",
          topic: "implicature · reading between the lines",
          grammarNote: [
            "**Implicature** is meaning the words don't state but clearly suggest:",
            "- *\"It's an interesting choice\"* about a bad decision = polite disapproval.",
            "- *\"Some people might disagree\"* = *I disagree.*",
            "- a reference that's praised only for being *brief* = it's faint praise, i.e. criticism.",
            "Read the **gap** between what's said and what's meant — that's where C2 lives.",
          ].join("\n"),
          grammarNoteEs: [
            "La **implicature** (implicatura) es el significado que las palabras no afirman pero",
            "claramente sugieren:",
            "- *\"It's an interesting choice\"* sobre una mala decisión = desaprobación cortés.",
            "- *\"Some people might disagree\"* = *yo no estoy de acuerdo.*",
            "- una recomendación elogiada solo por ser *breve* = elogio tibio, es decir, crítica.",
            "Lee el **gap** entre lo dicho y lo que se quiere decir — ahí vive el C2.",
          ].join("\n"),
          exercise: {
            id: "c6u2l1-ex",
            title: "Practice: reading the gap",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u2l1-r1",
                  type: "reading",
                  emoji: "✍️",
                  title: "A reference letter",
                  body: "\"I have known Daniel for two years. He always arrives on time and his desk is impeccably tidy. He has never caused any conflict in the office. I am confident he would suit a role that does not place excessive demands on creativity. He is, without question, punctual.\" The writer never says a negative word — and yet anyone in hiring reads it instantly.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l1-q1",
                  type: "multiple_choice",
                  prompt: "What does the letter actually imply about Daniel?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "He is reliable but not especially talented or creative" },
                      { id: "b", text: "He is the most brilliant candidate available" },
                      { id: "c", text: "He is dishonest and often late" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Praising only punctuality and tidiness, and 'roles without creative demands', damns with faint praise.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l1-q2",
                  type: "true_false",
                  prompt: "The writer states any direct criticism of Daniel.",
                  points: 1,
                  config: { correct: false },
                  explanation: "Every sentence is literally positive — the criticism lives entirely in the implicature.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l1-q3",
                  type: "open",
                  prompt: "The technique of criticising someone by praising only trivial things is called damning with ___ praise. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["faint"], charLimit: 8 },
                  explanation: "*Damning with faint praise* — the exact move in the letter.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — irony & understatement ----
        {
          id: "c6u2l2",
          slug: "listening-irony",
          title: "She can't be serious",
          topic: "listening · irony & understatement",
          grammarNote: [
            "**Irony** says the opposite of what's meant; **understatement** says less than is meant:",
            "- in a downpour: *\"Lovely weather.\"* (irony)",
            "- about a disaster: *\"That could have gone better.\"* (understatement)",
            "The clue is the **mismatch** between words and situation, often carried by a dry tone.",
            "Take it literally and you miss the whole point.",
          ].join("\n"),
          grammarNoteEs: [
            "La **irony** dice lo contrario de lo que se quiere; el **understatement** dice menos:",
            "- bajo un aguacero: *\"Lovely weather.\"* (ironía)",
            "- sobre un desastre: *\"That could have gone better.\"* (atenuación)",
            "La pista es el **mismatch** entre las palabras y la situación, a menudo con tono seco.",
            "Si lo tomas literal, pierdes todo el punto.",
          ].join("\n"),
          exercise: {
            id: "c6u2l2-ex",
            title: "Practice: hearing irony",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u2l2-a1",
                  type: "audio",
                  title: "Listen: after the presentation",
                  transcript:
                    "Well, that went brilliantly. The projector died, my notes were in the wrong order, and I called the client by the wrong name twice. Twice! But apart from that small detail, I'd say it was a triumph. Honestly, I've had worse Mondays — though I'm struggling to remember when.",
                  voice: "en-US-AriaNeural",
                  mediaUrl: "/audio/c6u2l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l2-q1",
                  type: "multiple_choice",
                  prompt: "What does the speaker really mean by “that went brilliantly”?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The presentation went badly" },
                      { id: "b", text: "The presentation was a success" },
                      { id: "c", text: "The projector worked perfectly" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Irony — the listed disasters reverse the literal meaning of *brilliantly*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l2-q2",
                  type: "true_false",
                  prompt: "“Apart from that small detail” is an example of understatement.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Calling a string of failures a 'small detail' deliberately says less than is meant. ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l2-q3",
                  type: "multiple_choice",
                  prompt: "“I've had worse Mondays — though I'm struggling to remember when” suggests…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "this was one of the worst Mondays" },
                      { id: "b", text: "Mondays are usually worse" },
                      { id: "c", text: "the speaker loved the day" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "The self-correction admits, ironically, that few Mondays were worse.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — imply, don't state ----
        {
          id: "c6u2l3",
          slug: "speaking-imply",
          title: "Saying no without saying no",
          topic: "speaking · diplomatic implicature",
          grammarNote: [
            "Sometimes the fluent move is to **imply** rather than state — to decline, doubt, or",
            "criticise without bluntness:",
            "- decline: *\"I'll see what I can do\"* (often a soft no).",
            "- doubt: *\"That's one way to look at it.\"*",
            "- redirect: *\"Interesting — have we considered the cost?\"*",
            "The skill is being understood *and* leaving everyone's dignity intact.",
          ].join("\n"),
          grammarNoteEs: [
            "A veces el movimiento fluido es **implicar** en vez de afirmar — declinar, dudar o",
            "criticar sin brusquedad:",
            "- declinar: *\"I'll see what I can do\"* (a menudo un no suave).",
            "- dudar: *\"That's one way to look at it.\"*",
            "- redirigir: *\"Interesting — have we considered the cost?\"*",
            "La destreza es ser entendido *y* dejar intacta la dignidad de todos.",
          ].join("\n"),
          exercise: {
            id: "c6u2l3-ex",
            title: "Practice: implying it",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u2l3-q1",
                  type: "multiple_choice",
                  prompt: "Which reply most diplomatically signals doubt about an idea?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "That's certainly one way to look at it." },
                      { id: "b", text: "That's a terrible idea." },
                      { id: "c", text: "Yes, perfect, no notes." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "It implies disagreement while leaving room to discuss — no bluntness.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l3-q2",
                  type: "speaking",
                  prompt: "A friend asks you to invest in a risky scheme. Decline without a flat 'no' — imply your hesitation.",
                  points: 1,
                  config: {
                    target: "It sounds interesting, but I'd want to look into the numbers before I commit to anything.",
                    acceptedAnswers: [
                      "it sounds interesting but id want to look into the numbers before i commit to anything",
                      "it sounds interesting but i would want to look into the numbers before i commit to anything",
                      "it sounds interesting but id want to look into the numbers before committing to anything",
                    ],
                    maxSeconds: 13,
                  },
                  explanation: "A soft, implied no — interested in theory, clearly not committing.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — controlled understatement ----
        {
          id: "c6u2l4",
          slug: "writing-understate",
          title: "Less is more",
          topic: "writing · understatement & restraint",
          grammarNote: [
            "Restraint can hit harder than emphasis. In writing:",
            "- **understatement** lets the reader supply the force: *The result was not ideal.*",
            "- trust the facts; piling on adjectives weakens them (*absolutely devastating tragedy*).",
            "- a dry final line can land a whole paragraph: *We will not be returning.*",
            "Say a little less than you feel and the reader leans in.",
          ].join("\n"),
          grammarNoteEs: [
            "La contención puede golpear más fuerte que el énfasis. Al escribir:",
            "- el **understatement** deja que el lector aporte la fuerza: *The result was not ideal.*",
            "- confía en los hechos; amontonar adjetivos los debilita (*absolutely devastating tragedy*).",
            "- una línea final seca puede rematar un párrafo: *We will not be returning.*",
            "Di un poco menos de lo que sientes y el lector se inclina hacia ti.",
          ].join("\n"),
          exercise: {
            id: "c6u2l4-ex",
            title: "Practice: write with restraint",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u2l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write a short, deadpan review (3–4 sentences) of a genuinely terrible meal — but never use an obviously angry or extreme word. Let understatement do the work.",
                  points: 1,
                  config: {
                    placeholder: "The soup arrived first, eventually…",
                    model:
                      "The soup arrived lukewarm, which gave us time to study the menu's spelling. Our waiter visited the table once, briefly, and seemed surprised to find us still there. The main course was technically food. We left a generous tip for the comedy.",
                    checklist: [
                      "Did you avoid extreme words (terrible, disgusting, awful)?",
                      "Did understatement carry the criticism?",
                      "Is there a dry line that lands the whole piece?",
                      "Would a reader smile and still know exactly how bad it was?",
                    ],
                    charLimit: 500,
                  },
                  explanation: "No extreme word appears, yet the verdict is unmistakable — that's controlled understatement.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u2l4-q2",
                  type: "true_false",
                  prompt: "Adding more extreme adjectives always makes criticism more powerful.",
                  points: 1,
                  config: { correct: false },
                  explanation: "Piling on adjectives often weakens it; restraint can hit harder.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 3 ==============================
    {
      id: "c6u3",
      slug: "3",
      number: 3,
      title: "Rhetoric & Persuasion",
      summary:
        "The machinery of a memorable argument — rhetorical devices, the rule of three, and the structure of a speech that moves people.",
      lessons: [
        // ---- L1: READING — rhetorical devices ----
        {
          id: "c6u3l1",
          slug: "reading-rhetoric",
          title: "The shape of a great line",
          topic: "rhetoric · devices in persuasion",
          grammarNote: [
            "Memorable lines often use a named device:",
            "- **tricolon** (rule of three): *clear, fair, and final.*",
            "- **anaphora** (repeated opening): *We will… We will… We will…*",
            "- **antithesis** (balanced opposites): *not the end, but the beginning.*",
            "Spotting the device tells you where the writer wants the emphasis — and why it sticks.",
          ].join("\n"),
          grammarNoteEs: [
            "Las líneas memorables suelen usar un recurso con nombre:",
            "- **tricolon** (regla de tres): *clear, fair, and final.*",
            "- **anaphora** (apertura repetida): *We will… We will… We will…*",
            "- **antithesis** (opuestos equilibrados): *not the end, but the beginning.*",
            "Detectar el recurso te dice dónde quiere el énfasis el autor — y por qué se queda.",
          ].join("\n"),
          exercise: {
            id: "c6u3l1-ex",
            title: "Practice: spotting rhetoric",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u3l1-r1",
                  type: "reading",
                  emoji: "🎙️",
                  title: "The founder's closing words",
                  body: "\"We started with nothing. We built it in a garage. We answered every email ourselves. They told us it couldn't be done; we did it anyway. This is not the finish line — it is the starting line. So tonight we don't celebrate an ending. We celebrate a beginning.\"",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l1-q1",
                  type: "multiple_choice",
                  prompt: "“We started… We built… We answered…” is an example of which device?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "anaphora (repeated opening words)" },
                      { id: "b", text: "antithesis (balanced opposites)" },
                      { id: "c", text: "understatement" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Repeating “We…” at the start of clauses is anaphora.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l1-q2",
                  type: "multiple_choice",
                  prompt: "“Not the finish line — it is the starting line” works by…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "antithesis — balancing two opposites" },
                      { id: "b", text: "a rule of three" },
                      { id: "c", text: "irony" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Two opposed ideas in balanced form = antithesis.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l1-q3",
                  type: "open",
                  prompt: "A list of three for rhythm (“clear, fair, and final”) is called a ___. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["tricolon"], charLimit: 12 },
                  explanation: "*Tricolon* — the rule of three.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — a persuasive speech ----
        {
          id: "c6u3l2",
          slug: "listening-speech",
          title: "Why it moves you",
          topic: "listening · rhetoric by ear",
          grammarNote: [
            "Heard aloud, rhetoric works through **rhythm and pause**:",
            "- a tricolon builds, then the third item lands hardest.",
            "- a pause before a key word makes the room wait for it.",
            "- a rhetorical question (*Is that fair?*) pulls the listener in without an answer.",
            "Notice where the speaker slows down — that's where the point is.",
          ].join("\n"),
          grammarNoteEs: [
            "Escuchada en voz alta, la retórica funciona por **ritmo y pausa**:",
            "- un tricolon construye, y el tercer elemento aterriza más fuerte.",
            "- una pausa antes de una palabra clave hace que la sala la espere.",
            "- una pregunta retórica (*Is that fair?*) atrae al oyente sin necesitar respuesta.",
            "Nota dónde el orador desacelera — ahí está el punto.",
          ].join("\n"),
          exercise: {
            id: "c6u3l2-ex",
            title: "Practice: a speech by ear",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u3l2-a1",
                  type: "audio",
                  title: "Listen: a campaign for the library",
                  transcript:
                    "They say the library is a luxury we can no longer afford. But ask yourself: what does it cost a child to grow up without books? The library is where the curious become capable, where the lonely find company, where a whole town keeps its memory. Close it, and we don't save money. We spend our future. So I ask you tonight — is that a saving, or is that a loss?",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/c6u3l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l2-q1",
                  type: "multiple_choice",
                  prompt: "“where the curious become capable, where the lonely find company, where a whole town keeps its memory” is a…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "tricolon (rule of three)" },
                      { id: "b", text: "rhetorical question" },
                      { id: "c", text: "understatement" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Three parallel clauses building to the strongest — a tricolon.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l2-q2",
                  type: "true_false",
                  prompt: "The speaker uses a rhetorical question to end the appeal.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“Is that a saving, or is that a loss?” — a closing rhetorical question. ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l2-q3",
                  type: "multiple_choice",
                  prompt: "What is the speaker's core claim?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Closing the library costs more than it saves" },
                      { id: "b", text: "The library should charge higher fees" },
                      { id: "c", text: "Books are a luxury" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“Close it, and we don't save money. We spend our future.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — use a device ----
        {
          id: "c6u3l3",
          slug: "speaking-device",
          title: "Land it with three",
          topic: "speaking · deploying a device",
          grammarNote: [
            "You don't need a podium to use rhetoric. In everyday persuasion:",
            "- a **rule of three** makes a point feel complete: *cheaper, faster, kinder.*",
            "- end on the strongest of the three.",
            "- a single rhetorical question can replace a paragraph of argument.",
            "Used sparingly, one device makes a sentence memorable.",
          ].join("\n"),
          grammarNoteEs: [
            "No necesitas un podio para usar la retórica. En la persuasión diaria:",
            "- una **regla de tres** hace que un punto se sienta completo: *cheaper, faster, kinder.*",
            "- termina con el más fuerte de los tres.",
            "- una sola pregunta retórica puede reemplazar un párrafo de argumento.",
            "Usado con mesura, un recurso vuelve memorable una oración.",
          ].join("\n"),
          exercise: {
            id: "c6u3l3-ex",
            title: "Practice: use the rule of three",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u3l3-q1",
                  type: "multiple_choice",
                  prompt: "Which sentence uses the **rule of three** most effectively?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "It's faster, cheaper, and far more reliable." },
                      { id: "b", text: "It's faster and also it is cheaper too." },
                      { id: "c", text: "It is, in some respects, arguably better." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Three balanced items, strongest last — a clean tricolon.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l3-q2",
                  type: "speaking",
                  prompt: "Persuade someone to walk to work using a rule of three (three benefits, strongest last).",
                  points: 1,
                  config: {
                    target: "Walking to work is cheaper, healthier, and it clears your head before the day begins.",
                    acceptedAnswers: [
                      "walking to work is cheaper healthier and it clears your head before the day begins",
                      "walking to work is cheaper healthier and clears your head before the day begins",
                      "walking to work is cheaper its healthier and it clears your head before the day begins",
                    ],
                    maxSeconds: 13,
                  },
                  explanation: "Three benefits, the most human one last — the tricolon does the persuading.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — a persuasive close ----
        {
          id: "c6u3l4",
          slug: "writing-peroration",
          title: "End on a line they'll remember",
          topic: "writing · the persuasive close",
          grammarNote: [
            "The **close** is where persuasion is won or lost. Strong closes:",
            "- return to an image or phrase from the opening (a sense of completion),",
            "- shrink to one short, balanced sentence after longer ones,",
            "- leave the reader with a choice or a challenge, not a summary.",
            "Make the last line the one they'd quote.",
          ].join("\n"),
          grammarNoteEs: [
            "El **close** (cierre) es donde se gana o se pierde la persuasión. Cierres fuertes:",
            "- vuelven a una imagen o frase de la apertura (sensación de cierre),",
            "- se encogen a una oración corta y equilibrada tras otras más largas,",
            "- dejan al lector con una elección o un reto, no con un resumen.",
            "Haz que la última línea sea la que citarían.",
          ].join("\n"),
          exercise: {
            id: "c6u3l4-ex",
            title: "Practice: write the close",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u3l4-q1",
                  type: "draft_compare",
                  prompt:
                    "You're ending a short speech urging your town to plant more trees. Write the final 2–3 sentences only — the close — using at least one rhetorical device and a memorable last line.",
                  points: 1,
                  config: {
                    placeholder: "We cannot plant a forest in a day…",
                    model:
                      "We cannot plant a forest in a day, and no one here will sit in the full shade of these trees. We plant them for the strangers who come after us — the way strangers once planted them for us. That is not charity. That is how a town remembers it has a future.",
                    checklist: [
                      "Did you use at least one device (tricolon, antithesis, anaphora)?",
                      "Is the final sentence short and quotable?",
                      "Does it leave a challenge or image, not a dry summary?",
                      "Would someone remember the last line tomorrow?",
                    ],
                    charLimit: 500,
                  },
                  explanation: "Antithesis (charity vs memory) + a short, quotable last line — a real peroration.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u3l4-q2",
                  type: "open",
                  prompt: "Repeating the same word at the start of successive clauses (“We will… We will…”) is called ___. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["anaphora"], charLimit: 12 },
                  explanation: "*Anaphora* — repeated openings for rhythm and force.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 4 ==============================
    {
      id: "c6u4",
      slug: "4",
      number: 4,
      title: "Specialized Registers",
      summary:
        "The dialects of expertise — the careful hedging of science, the precision of law, the shorthand of tech, and how to move between them.",
      lessons: [
        // ---- L1: READING — register flavours ----
        {
          id: "c6u4l1",
          slug: "reading-registers",
          title: "Spot the field",
          topic: "specialized register · legal / scientific / technical",
          grammarNote: [
            "Each field has a fingerprint:",
            "- **legal**: precise, hedged against loopholes — *the party of the first part; hereinafter.*",
            "- **scientific**: cautious, passive, qualified — *the data suggest; results may indicate.*",
            "- **technical/tech**: dense with terms and shorthand — *deploy the build to staging.*",
            "Recognising the register tells you how confident a claim really is.",
          ].join("\n"),
          grammarNoteEs: [
            "Cada campo tiene una huella:",
            "- **legal**: preciso, cubierto contra vacíos legales — *the party of the first part; hereinafter.*",
            "- **scientific**: cauteloso, pasivo, matizado — *the data suggest; results may indicate.*",
            "- **technical/tech**: denso en términos y abreviaturas — *deploy the build to staging.*",
            "Reconocer el registro te dice qué tan segura es realmente una afirmación.",
          ].join("\n"),
          exercise: {
            id: "c6u4l1-ex",
            title: "Practice: name the register",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u4l1-r1",
                  type: "reading",
                  emoji: "⚖️",
                  title: "Three sentences, three worlds",
                  body: "Sentence 1: \"The data suggest a modest correlation, though further study is required before any causal claim can be made.\" Sentence 2: \"The tenant shall vacate the premises no later than the date specified herein, failing which the deposit may be forfeited.\" Sentence 3: \"Roll back the release, clear the cache, and redeploy once the pipeline goes green.\" Same language; three different professions.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l1-q1",
                  type: "match",
                  prompt: "Match each sentence to its register:",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "The data suggest a modest correlation…", right: "scientific" },
                      { left: "The tenant shall vacate the premises…", right: "legal" },
                      { left: "Roll back the release, clear the cache…", right: "technical" },
                    ],
                  },
                  explanation: "Hedged caution = scientific; *shall / herein* = legal; deploy/cache = technical.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l1-q2",
                  type: "multiple_choice",
                  prompt: "Why does the scientific sentence say “suggest” rather than “prove”?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Scientific register hedges claims until evidence is strong" },
                      { id: "b", text: "The writer forgot the right word" },
                      { id: "c", text: "It means exactly the same as 'prove'" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Cautious hedging (*suggest, may indicate*) is a hallmark of scientific register.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l1-q3",
                  type: "open",
                  prompt: "The formal word meaning *in this document* (seen in sentence 2) is ___.",
                  points: 1,
                  config: { acceptedAnswers: ["herein"], charLimit: 10 },
                  explanation: "*Herein* = in this document — classic legal register.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — an expert explains ----
        {
          id: "c6u4l2",
          slug: "listening-expert",
          title: "Plain words for hard ideas",
          topic: "listening · de-jargoning expertise",
          grammarNote: [
            "Real experts can **switch register** — translating jargon into plain speech for a",
            "non-expert. Listen for the move:",
            "- a term, then a plain gloss: *\"latency — basically the delay before it responds.\"*",
            "- an analogy that carries the idea (*\"think of it like a queue\"*).",
            "The ability to drop the jargon on demand is itself a mark of mastery.",
          ].join("\n"),
          grammarNoteEs: [
            "Los verdaderos expertos pueden **cambiar de registro** — traducir la jerga a habla",
            "sencilla para un no-experto. Escucha el movimiento:",
            "- un término, luego una glosa simple: *\"latency — basically the delay before it responds.\"*",
            "- una analogía que lleva la idea (*\"think of it like a queue\"*).",
            "Poder soltar la jerga cuando hace falta es en sí una señal de dominio.",
          ].join("\n"),
          exercise: {
            id: "c6u4l2-ex",
            title: "Practice: expert, in plain words",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u4l2-a1",
                  type: "audio",
                  title: "Listen: a doctor explains",
                  transcript:
                    "Your results show mild hypertension — which, in plain terms, just means your blood pressure runs a little high. Think of the arteries like a garden hose: if the pressure stays up for years, it slowly wears the walls. The good news is it's very manageable. A bit less salt, a daily walk, and we'll check again in three months. Nothing to lose sleep over tonight.",
                  voice: "en-US-AvaMultilingualNeural",
                  mediaUrl: "/audio/c6u4l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l2-q1",
                  type: "multiple_choice",
                  prompt: "How does the doctor make “hypertension” understandable?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "By giving a plain gloss and a garden-hose analogy" },
                      { id: "b", text: "By using more medical terms" },
                      { id: "c", text: "By refusing to explain it" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Term → plain gloss (“blood pressure runs a little high”) → analogy (hose).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l2-q2",
                  type: "true_false",
                  prompt: "The doctor presents the condition as serious and urgent tonight.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“Very manageable… nothing to lose sleep over tonight.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l2-q3",
                  type: "open",
                  prompt: "What everyday object does the doctor compare the arteries to? a garden ___",
                  points: 1,
                  config: { acceptedAnswers: ["hose"], charLimit: 8 },
                  explanation: "“Think of the arteries like a garden hose.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — explain to a novice ----
        {
          id: "c6u4l3",
          slug: "speaking-explain",
          title: "Explain it to a ten-year-old",
          topic: "speaking · register-switching",
          grammarNote: [
            "Explaining something you know well to a complete novice is a C2 stress test:",
            "- lead with a familiar **analogy**, not the definition.",
            "- introduce at most one new term, and gloss it immediately.",
            "- check understanding (*does that make sense so far?*).",
            "If you can't explain it simply, you don't yet own it.",
          ].join("\n"),
          grammarNoteEs: [
            "Explicar algo que dominas a un completo principiante es una prueba de C2:",
            "- empieza con una **analogía** familiar, no con la definición.",
            "- introduce a lo más un término nuevo, y glósalo de inmediato.",
            "- verifica la comprensión (*does that make sense so far?*).",
            "Si no puedes explicarlo simple, aún no lo dominas.",
          ].join("\n"),
          exercise: {
            id: "c6u4l3-ex",
            title: "Practice: explain simply",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u4l3-q1",
                  type: "multiple_choice",
                  prompt: "What's the best **opening** when explaining a hard idea to a novice?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "A familiar analogy" },
                      { id: "b", text: "The full technical definition" },
                      { id: "c", text: "A list of acronyms" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "An analogy gives the listener something familiar to hang the new idea on.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l3-q2",
                  type: "speaking",
                  prompt: "Explain what 'interest' on savings is, to a child, using one everyday analogy.",
                  points: 1,
                  config: {
                    target: "Interest is like a tree that grows from your money; the bank pays you a little extra each year just for leaving it there.",
                    acceptedAnswers: [
                      "interest is like a tree that grows from your money the bank pays you a little extra each year just for leaving it there",
                      "interest is like a tree that grows from your money the bank pays you a little extra every year just for leaving it there",
                      "interest is like a small tree that grows from your money the bank pays you a little extra each year for leaving it there",
                    ],
                    maxSeconds: 16,
                  },
                  explanation: "Analogy first (a growing tree), no jargon — a clean register switch.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — translate the jargon ----
        {
          id: "c6u4l4",
          slug: "writing-plain",
          title: "Jargon in, plain out",
          topic: "writing · plain-language rewriting",
          grammarNote: [
            "Turning specialist text into plain English is a prized C2 skill:",
            "- replace the term with its meaning, or define it once in plain words.",
            "- break a long, hedged sentence into shorter ones.",
            "- keep the **accuracy** — plain isn't the same as wrong or dumbed-down.",
            "The test: a smart non-expert understands it on the first read.",
          ].join("\n"),
          grammarNoteEs: [
            "Convertir texto especializado en inglés sencillo es una destreza valiosa de C2:",
            "- reemplaza el término por su significado, o defínelo una vez en palabras simples.",
            "- divide una oración larga y matizada en varias más cortas.",
            "- mantén la **exactitud** — sencillo no es lo mismo que incorrecto o simplón.",
            "La prueba: un no-experto inteligente lo entiende en la primera lectura.",
          ].join("\n"),
          exercise: {
            id: "c6u4l4-ex",
            title: "Practice: plain-language rewrite",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u4l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Rewrite this notice in plain English (2–3 sentences) that any tenant could understand at a glance, keeping the meaning exact:\n\n\"Lessees are hereby notified that egress through the rear aperture is prohibited during such periods as the premises are subject to maintenance operations.\"",
                  points: 1,
                  config: {
                    placeholder: "Please don't use the back door…",
                    model:
                      "Please don't use the back door while repairs are going on. We'll let you know as soon as it's open again. Thanks for your patience.",
                    checklist: [
                      "Did you replace jargon (lessees, egress, aperture) with plain words?",
                      "Did you keep the exact meaning (no back door during maintenance)?",
                      "Is it readable at a single glance?",
                      "Does it stay polite and clear?",
                    ],
                    charLimit: 400,
                  },
                  explanation: "Same rule, plain words, meaning intact — that's a true register switch.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u4l4-q2",
                  type: "multiple_choice",
                  prompt: "“Egress through the rear aperture” means…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "leaving through the back door" },
                      { id: "b", text: "entering through the roof" },
                      { id: "c", text: "opening a window" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Egress* = exit; *rear aperture* = back opening/door.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 5 ==============================
    {
      id: "c6u5",
      slug: "5",
      number: 5,
      title: "Spontaneous Fluency",
      summary:
        "Thinking on your feet — buying time gracefully, recovering from a stumble, and speaking at length without a script.",
      lessons: [
        // ---- L1: READING — discourse of speech ----
        {
          id: "c6u5l1",
          slug: "reading-fillers",
          title: "How fluent speech really works",
          topic: "fluency · natural spoken discourse",
          grammarNote: [
            "Even near-native speech isn't perfectly smooth — it's smoothly **managed**. Useful moves:",
            "- buy time without 'um': *That's a good question… / Let me put it this way…*",
            "- self-correct cleanly: *…or rather… / what I mean is…*",
            "- signpost the next idea: *The other thing worth saying is…*",
            "Fluency isn't the absence of pauses; it's filling them with purpose.",
          ].join("\n"),
          grammarNoteEs: [
            "Incluso el habla casi nativa no es perfectamente fluida — está fluidamente **gestionada**.",
            "Movimientos útiles:",
            "- gana tiempo sin 'um': *That's a good question… / Let me put it this way…*",
            "- autocorrígete con limpieza: *…or rather… / what I mean is…*",
            "- señaliza la siguiente idea: *The other thing worth saying is…*",
            "La fluidez no es la ausencia de pausas; es llenarlas con propósito.",
          ].join("\n"),
          exercise: {
            id: "c6u5l1-ex",
            title: "Practice: reading spoken strategy",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u5l1-r1",
                  type: "reading",
                  emoji: "💬",
                  title: "An interview answer, transcribed",
                  body: "\"Why did I leave my last job? That's a fair question. I suppose the honest answer is that I'd stopped learning — or rather, I'd learned everything the role could teach me. What I mean is, I wasn't unhappy; I was just ready. And the other thing worth saying is that this role does exactly what mine had stopped doing: it stretches me.\"",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l1-q1",
                  type: "multiple_choice",
                  prompt: "What is “That's a fair question” doing here?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Buying a moment to think while staying fluent" },
                      { id: "b", text: "Criticising the interviewer" },
                      { id: "c", text: "Ending the answer" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A time-buying opener that sounds composed, not stalling.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l1-q2",
                  type: "multiple_choice",
                  prompt: "“…or rather, I'd learned everything the role could teach me” is an example of…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "a clean self-correction" },
                      { id: "b", text: "a rhetorical question" },
                      { id: "c", text: "an idiom" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Or rather* signals a smooth refinement of what was just said.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l1-q3",
                  type: "open",
                  prompt: "Which two words signpost a new point? “The other thing worth ___ is…” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["saying"], charLimit: 10 },
                  explanation: "*The other thing worth saying is…* introduces a fresh idea cleanly.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — recovery in real time ----
        {
          id: "c6u5l2",
          slug: "listening-recovery",
          title: "Catching a stumble",
          topic: "listening · self-repair",
          grammarNote: [
            "Confident speakers stumble and **recover** without drama:",
            "- they restart a tangled sentence cleanly: *Sorry, let me start that again.*",
            "- they reach for a word out loud: *the — what's the word — the deadline.*",
            "- they finish the thought rather than abandoning it.",
            "Hearing the repair as normal (not failure) is part of understanding real speech.",
          ].join("\n"),
          grammarNoteEs: [
            "Los hablantes seguros tropiezan y se **recuperan** sin drama:",
            "- reinician una oración enredada con limpieza: *Sorry, let me start that again.*",
            "- buscan una palabra en voz alta: *the — what's the word — the deadline.*",
            "- terminan la idea en vez de abandonarla.",
            "Oír la reparación como algo normal (no un fracaso) es parte de entender el habla real.",
          ].join("\n"),
          exercise: {
            id: "c6u5l2-ex",
            title: "Practice: hearing self-repair",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u5l2-a1",
                  type: "audio",
                  title: "Listen: a slightly flustered update",
                  transcript:
                    "So the launch is on the — sorry, let me start that again. The launch is confirmed for the fifteenth, not the fifth; I keep mixing those up. We're waiting on one approval, the — what's the word — the compliance sign-off, and once that's in, we're good to go. Anyway, the point is: we're on track.",
                  voice: "en-US-AndrewNeural",
                  mediaUrl: "/audio/c6u5l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l2-q1",
                  type: "multiple_choice",
                  prompt: "When is the launch actually confirmed for?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "the fifteenth" },
                      { id: "b", text: "the fifth" },
                      { id: "c", text: "it's not confirmed" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "The speaker self-corrects: “the fifteenth, not the fifth.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l2-q2",
                  type: "true_false",
                  prompt: "The speaker abandons the update when they stumble.",
                  points: 1,
                  config: { correct: false },
                  explanation: "They recover each time and finish: “the point is, we're on track.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l2-q3",
                  type: "open",
                  prompt: "Which approval are they still waiting on? the compliance ___",
                  points: 1,
                  config: { acceptedAnswers: ["sign-off", "signoff", "sign off"], charLimit: 14 },
                  explanation: "“…the compliance sign-off, and once that's in, we're good to go.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — speak at length ----
        {
          id: "c6u5l3",
          slug: "speaking-extended",
          title: "Sixty seconds, no script",
          topic: "speaking · extended unscripted turn",
          grammarNoteEs: [
            "Para hablar más tiempo sin congelarte, ten una **mini-estructura** lista:",
            "- *point → example → so-what.*",
            "- estira con un ejemplo concreto (*for instance, the other day…*).",
            "- aterriza en una conclusión en vez de irte apagando.",
            "Una estructura simple convierte 'no sé qué decir' en un minuto cómodo.",
          ].join("\n"),
          grammarNote: [
            "To speak for longer without freezing, keep a tiny **structure** ready:",
            "- *point → example → so-what.*",
            "- stretch with a concrete example (*for instance, the other day…*).",
            "- land on a conclusion instead of trailing off.",
            "A simple structure turns 'I don't know what to say' into a comfortable minute.",
          ].join("\n"),
          exercise: {
            id: "c6u5l3-ex",
            title: "Practice: the extended turn",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u5l3-q1",
                  type: "multiple_choice",
                  prompt: "Which structure best helps you speak at length on the spot?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "point → example → so-what" },
                      { id: "b", text: "say everything you know at once" },
                      { id: "c", text: "repeat the question until time runs out" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A claim, a concrete example, and a takeaway fills a minute naturally.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l3-q2",
                  type: "speaking",
                  prompt: "Answer in 2–3 sentences: “Is it better to be an expert in one thing or good at many?” Use point → example → so-what.",
                  points: 1,
                  config: {
                    target: "I'd say depth usually wins; for instance, the people I trust most are deep in one craft, and that mastery makes everything else they learn faster. So if I had to choose, I'd go deep first and broaden later.",
                    acceptedAnswers: [
                      "id say depth usually wins for instance the people i trust most are deep in one craft and that mastery makes everything else they learn faster so if i had to choose id go deep first and broaden later",
                      "i would say depth usually wins for instance the people i trust most are deep in one craft and that mastery makes everything else they learn faster so if i had to choose i would go deep first and broaden later",
                      "id say depth usually wins for example the people i trust most are deep in one craft and that mastery makes everything else they learn faster so if i had to choose id go deep first and broaden later",
                    ],
                    maxSeconds: 22,
                  },
                  explanation: "Point (depth wins) → example (people I trust) → so-what (go deep first). A full, unscripted minute.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — capture spoken voice ----
        {
          id: "c6u5l4",
          slug: "writing-voice",
          title: "Writing the way you'd say it",
          topic: "writing · natural spoken voice",
          grammarNote: [
            "Some writing (a talk script, a personal note, a podcast intro) should sound **spoken**:",
            "- shorter sentences; the occasional fragment for rhythm.",
            "- contractions and direct address (*you*).",
            "- read it aloud — if you'd never say it, rewrite it.",
            "Conversational isn't careless; it's a register you control on purpose.",
          ].join("\n"),
          grammarNoteEs: [
            "Cierta escritura (un guion de charla, una nota personal, una intro de podcast) debe sonar",
            "**hablada**:",
            "- oraciones más cortas; algún fragmento ocasional para el ritmo.",
            "- contracciones y trato directo (*you*).",
            "- léelo en voz alta — si nunca lo dirías, reescríbelo.",
            "Lo conversacional no es descuidado; es un registro que controlas a propósito.",
          ].join("\n"),
          exercise: {
            id: "c6u5l4-ex",
            title: "Practice: write it spoken",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u5l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write the opening 3–4 sentences of a short talk introducing yourself to a friendly audience. Make it sound like you actually talking — warm, spoken, not a formal bio.",
                  points: 1,
                  config: {
                    placeholder: "Hi everyone — so, a bit about me…",
                    model:
                      "Hi everyone. So, a bit about me — I didn't plan to end up doing this. I trained as one thing, got curious about another, and somehow the curiosity won. These days I spend my time helping people say what they mean in a second language. And honestly? It's the best job I've ever had.",
                    checklist: [
                      "Could you imagine saying this out loud, naturally?",
                      "Did you use contractions and direct address?",
                      "Are the sentences short, with maybe one fragment for rhythm?",
                      "Does it sound warm rather than like a formal résumé?",
                    ],
                    charLimit: 500,
                  },
                  explanation: "Spoken rhythm, contractions, a fragment (“And honestly?”) — a controlled conversational register.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u5l4-q2",
                  type: "true_false",
                  prompt: "A reliable test of spoken-style writing is to read it aloud and ask if you'd actually say it.",
                  points: 1,
                  config: { correct: true },
                  explanation: "If you'd never say it aloud, it isn't really spoken register. ✓",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 6 ==============================
    {
      id: "c6u6",
      slug: "6",
      number: 6,
      title: "Capstone: Integrated Tasks",
      summary:
        "Everything at once — read a dense passage and summarise it, hear a short lecture and respond, and write a tight closing essay.",
      lessons: [
        // ---- L1: READING — read & summarise ----
        {
          id: "c6u6l1",
          slug: "capstone-summary",
          title: "Read it, then say it in one line",
          topic: "integration · reading to summary",
          grammarNote: [
            "Summarising is comprehension made visible. A strong summary:",
            "- captures the **main claim**, not the first or the loudest sentence.",
            "- drops examples and asides; keeps the load-bearing idea.",
            "- is in **your own words** — a copied sentence isn't a summary.",
            "If you can compress a passage to one true line, you understood it.",
          ].join("\n"),
          grammarNoteEs: [
            "Resumir es la comprensión hecha visible. Un buen resumen:",
            "- capta la **afirmación principal**, no la primera ni la más ruidosa.",
            "- descarta ejemplos y rodeos; conserva la idea que sostiene todo.",
            "- está en **tus propias palabras** — una oración copiada no es un resumen.",
            "Si puedes comprimir un pasaje a una línea verdadera, lo entendiste.",
          ].join("\n"),
          exercise: {
            id: "c6u6l1-ex",
            title: "Practice: read and summarise",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u6l1-r1",
                  type: "reading",
                  emoji: "🧠",
                  title: "On the myth of multitasking",
                  body: "We like to believe we can do several demanding things at once, but the brain doesn't truly run parallel streams of attention; it switches between them, and each switch carries a small cost. Studies of so-called multitaskers find they are often slower and more error-prone, not faster, because the constant switching fragments their focus. The apparent productivity of juggling is largely an illusion — what feels like doing more is usually doing each thing worse. The practical lesson is not that we should never switch, but that deep work rewards protecting one task at a time.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l1-q1",
                  type: "multiple_choice",
                  prompt: "Which is the best **one-line summary**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Multitasking mostly hurts focus and quality, so protect one task at a time." },
                      { id: "b", text: "The brain runs many streams of attention at once." },
                      { id: "c", text: "Studies are often slow and error-prone." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "It captures the main claim + the practical lesson, in fresh words.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l1-q2",
                  type: "true_false",
                  prompt: "The passage argues we should never switch tasks under any circumstances.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“Not that we should never switch” — the claim is about protecting deep work.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l1-q3",
                  type: "open",
                  prompt: "The passage says the productivity of juggling is largely an ___. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["illusion"], charLimit: 12 },
                  explanation: "“The apparent productivity of juggling is largely an illusion.”",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING — lecture to notes ----
        {
          id: "c6u6l2",
          slug: "capstone-lecture",
          title: "A lecture, in three points",
          topic: "integration · listening to notes",
          grammarNote: [
            "Note-taking from a talk is selective listening:",
            "- catch the **structure** words (*firstly, the key point is, to sum up*).",
            "- write the claim, not the speaker's every word.",
            "- a good set of notes is short enough to reread and complete enough to rebuild the talk.",
            "Listen for the skeleton; let the flesh go.",
          ].join("\n"),
          grammarNoteEs: [
            "Tomar notas de una charla es escucha selectiva:",
            "- capta las palabras de **estructura** (*firstly, the key point is, to sum up*).",
            "- escribe la afirmación, no cada palabra del orador.",
            "- buenas notas son cortas para releer y completas para reconstruir la charla.",
            "Escucha el esqueleto; deja ir la carne.",
          ].join("\n"),
          exercise: {
            id: "c6u6l2-ex",
            title: "Practice: lecture notes",
            items: [
              {
                kind: "content",
                content: {
                  id: "c6u6l2-a1",
                  type: "audio",
                  title: "Listen: a mini-lecture on sleep",
                  transcript:
                    "Today, three quick points about sleep. Firstly, it isn't passive rest — the brain is busy filing away the day's memories. Secondly, the hours before midnight aren't magically better; what matters is keeping a consistent schedule. And thirdly, the biggest enemy of good sleep for most people isn't coffee — it's the bright screen we stare at right up until we close our eyes. To sum up: sleep is active, consistency beats timing, and dimming the screens matters more than you'd think.",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/c6u6l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l2-q1",
                  type: "multiple_choice",
                  prompt: "According to the talk, what matters most for sleep timing?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "A consistent schedule" },
                      { id: "b", text: "Always sleeping before midnight" },
                      { id: "c", text: "Never drinking coffee" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“What matters is keeping a consistent schedule.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l2-q2",
                  type: "true_false",
                  prompt: "The speaker says sleep is passive rest with nothing happening in the brain.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“It isn't passive rest — the brain is busy filing away the day's memories.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l2-q3",
                  type: "open",
                  prompt: "The talk names the biggest enemy of good sleep as the bright ___. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["screen", "screens"], charLimit: 10 },
                  explanation: "“…the bright screen we stare at right up until we close our eyes.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING — synthesise a response ----
        {
          id: "c6u6l3",
          slug: "capstone-respond",
          title: "Pull it together, out loud",
          topic: "integration · synthesised spoken response",
          grammarNote: [
            "The capstone speaking task: take what you read and heard and **synthesise** a response:",
            "- name the common thread (*both make the same point: …*),",
            "- add your own judgement (*what convinces me is…*),",
            "- keep it structured even though it's spontaneous.",
            "Synthesis — not summary — is the top of the skill: your voice on top of the sources.",
          ].join("\n"),
          grammarNoteEs: [
            "La tarea capstone de habla: toma lo que leíste y escuchaste y **sintetiza** una respuesta:",
            "- nombra el hilo común (*both make the same point: …*),",
            "- añade tu propio juicio (*what convinces me is…*),",
            "- mantenlo estructurado aunque sea espontáneo.",
            "La síntesis — no el resumen — es la cima de la destreza: tu voz sobre las fuentes.",
          ].join("\n"),
          exercise: {
            id: "c6u6l3-ex",
            title: "Practice: synthesise",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u6l3-q1",
                  type: "multiple_choice",
                  prompt: "What makes a response **synthesis** rather than just summary?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "It connects the sources and adds your own judgement" },
                      { id: "b", text: "It repeats each source in order" },
                      { id: "c", text: "It only quotes the longest source" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Synthesis links the ideas and layers your view on top.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l3-q2",
                  type: "speaking",
                  prompt: "The reading was about focus; the talk was about sleep. Connect them in 2–3 sentences and add your view.",
                  points: 1,
                  config: {
                    target: "Both make the same point: our attention is fragile, whether it's broken by multitasking or by screens before bed. What convinces me is that the fix is the same in each case, which is to protect one thing at a time. So I'd treat focus and sleep as two sides of the same habit.",
                    acceptedAnswers: [
                      "both make the same point our attention is fragile whether its broken by multitasking or by screens before bed what convinces me is that the fix is the same in each case which is to protect one thing at a time so id treat focus and sleep as two sides of the same habit",
                      "both make the same point our attention is fragile whether it is broken by multitasking or by screens before bed what convinces me is that the fix is the same in each case which is to protect one thing at a time so i would treat focus and sleep as two sides of the same habit",
                      "both make the same point our attention is fragile whether broken by multitasking or by screens before bed what convinces me is the fix is the same in each case protect one thing at a time so id treat focus and sleep as two sides of the same habit",
                    ],
                    maxSeconds: 26,
                  },
                  explanation: "Common thread + your judgement + a closing synthesis — the top of the skill.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING — the capstone essay ----
        {
          id: "c6u6l4",
          slug: "capstone-essay",
          title: "The closing essay",
          topic: "integration · the short essay",
          grammarNote: [
            "Your final task brings every skill together in a short essay:",
            "- a clear thesis up front; one idea per paragraph.",
            "- evidence or example for each claim; a concession handled.",
            "- precise words, controlled register, a close that lands.",
            "This is C2 on the page: organised thought, said exactly, nothing wasted.",
          ].join("\n"),
          grammarNoteEs: [
            "Tu tarea final reúne todas las destrezas en un ensayo corto:",
            "- una tesis clara al frente; una idea por párrafo.",
            "- evidencia o ejemplo para cada afirmación; una concesión manejada.",
            "- palabras precisas, registro controlado, un cierre que aterriza.",
            "Esto es C2 en la página: pensamiento organizado, dicho con exactitud, nada desperdiciado.",
          ].join("\n"),
          exercise: {
            id: "c6u6l4-ex",
            title: "Practice: the capstone essay",
            items: [
              {
                kind: "question",
                question: {
                  id: "c6u6l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write a tight 5–6 sentence essay on: “Has constant connectivity made us better informed or just busier?” Use a clear thesis, one concession, precise words, and a memorable close.",
                  points: 1,
                  config: {
                    placeholder: "We have never had more information, and never felt less informed…",
                    model:
                      "We have never had more information, and rarely felt less informed. Constant connectivity hands us the world's news, but it hands it to us faster than we can think, so we mistake the feeling of keeping up for the work of understanding. Granted, the same tools let a curious person learn almost anything on demand — the access is real and remarkable. But access isn't attention, and being reachable isn't the same as being informed. The question, then, isn't whether to connect, but whether we still know how to stop. An informed mind, in the end, is made not by what it can reach, but by what it chooses to sit with.",
                    checklist: [
                      "Is there a clear thesis in the first sentence?",
                      "Did you handle one genuine concession (Granted…)?",
                      "Are the words precise and the register controlled?",
                      "Does the final sentence land and stay with the reader?",
                    ],
                    charLimit: 900,
                  },
                  explanation: "Thesis, concession, precision, antithesis (access vs attention), a quotable close — the full C2 essay.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c6u6l4-q2",
                  type: "true_false",
                  prompt: "A strong short essay can simply list facts with no thesis or close.",
                  points: 1,
                  config: { correct: false },
                  explanation: "A thesis and a deliberate close are what make it an essay, not a list.",
                },
              },
            ],
          },
        },
      ],
    },
  ],
  finalTest: {
    id: "c6-final",
    slug: "final-test",
    title: "Level 6 review",
    intro:
      "The summit check — a C2 skim across precision, implicature, rhetoric, register, fluency, and integration. Twelve questions of word-choice, inference, and judgement. Score 9 of 12 to earn your Level 6 diploma and complete the A1–C2 ladder.",
    passingScore: 9,
    exercise: {
      id: "c6-final-ex",
      title: "Level 6 final",
      items: [
        {
          kind: "question",
          question: {
            id: "c6-final-q1",
            type: "multiple_choice",
            prompt: "Which word praises someone's wonder and curiosity (positive)?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "childlike" },
                { id: "b", text: "childish" },
                { id: "c", text: "infantile" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Childlike* is positive; *childish/infantile* are negative.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q2",
            type: "open",
            prompt: "Cut the redundancy: in “end result”, which one word can go? ___",
            points: 1,
            config: { acceptedAnswers: ["end"], charLimit: 8 },
            explanation: "A *result* is already an end — drop *end*.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q3",
            type: "multiple_choice",
            prompt: "A reference praises only that a candidate is “punctual and tidy.” This implies…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "faint praise — they're reliable but not impressive" },
                { id: "b", text: "the candidate is brilliant" },
                { id: "c", text: "the candidate is dishonest" },
              ],
              correctIds: ["a"],
            },
            explanation: "Damning with faint praise — the implicature is lukewarm.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q4",
            type: "multiple_choice",
            prompt: "After a disaster, “That could have gone better” is an example of…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "understatement" },
                { id: "b", text: "anaphora" },
                { id: "c", text: "a tricolon" },
              ],
              correctIds: ["a"],
            },
            explanation: "Saying far less than is meant = understatement.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q5",
            type: "open",
            prompt: "A list of three for rhythm (“clear, fair, and final”) is a ___. (one word)",
            points: 1,
            config: { acceptedAnswers: ["tricolon"], charLimit: 12 },
            explanation: "*Tricolon* — the rule of three.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q6",
            type: "multiple_choice",
            prompt: "“We will fight. We will build. We will win.” uses which device?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "anaphora" },
                { id: "b", text: "understatement" },
                { id: "c", text: "irony" },
              ],
              correctIds: ["a"],
            },
            explanation: "Repeated opening words across clauses = anaphora.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q7",
            type: "match",
            prompt: "Match each phrase to its register:",
            points: 1,
            config: {
              pairs: [
                { left: "the data suggest a correlation", right: "scientific" },
                { left: "the tenant shall vacate the premises", right: "legal" },
                { left: "redeploy once the pipeline goes green", right: "technical" },
              ],
            },
            explanation: "Hedged caution = scientific; shall/premises = legal; deploy/pipeline = technical.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q8",
            type: "open",
            prompt: "The legal word meaning *in this document* is ___.",
            points: 1,
            config: { acceptedAnswers: ["herein"], charLimit: 10 },
            explanation: "*Herein* = in this document.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q9",
            type: "multiple_choice",
            prompt: "Mid-sentence, a fluent speaker says “…or rather, I'd say”. This is…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "a clean self-correction" },
                { id: "b", text: "a rhetorical question" },
                { id: "c", text: "a concession" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Or rather* smoothly refines what was just said.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q10",
            type: "multiple_choice",
            prompt: "Best structure for speaking at length on the spot:",
            points: 1,
            config: {
              options: [
                { id: "a", text: "point → example → so-what" },
                { id: "b", text: "say everything at once" },
                { id: "c", text: "repeat the question" },
              ],
              correctIds: ["a"],
            },
            explanation: "Claim, example, takeaway — fills a turn naturally.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q11",
            type: "multiple_choice",
            prompt: "Which is the best **one-line summary** of: “multitasking fragments focus, so deep work rewards one task at a time”?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "Protect one task at a time; multitasking mostly hurts quality." },
                { id: "b", text: "The brain runs many streams at once." },
                { id: "c", text: "Studies are slow and error-prone." },
              ],
              correctIds: ["a"],
            },
            explanation: "Captures the main claim + the lesson, in fresh words.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c6-final-q12",
            type: "true_false",
            prompt: "Synthesis means connecting sources and adding your own judgement, not just summarising each.",
            points: 1,
            config: { correct: true },
            explanation: "Synthesis layers your view on top of the linked sources. ✓",
          },
        },
      ],
    },
  },
  conclusion: {
    title: "C2 — and the whole ladder, complete.",
    body:
      "You've reached the top. From the very first to be in Level 1 to the integrated capstone here, you've built English that does exactly what you want it to: precise when precision matters, implied when bluntness would cost you, structured when you persuade, plain when you explain, and steady when you have to think on your feet. There's no higher rung — what's left is simply living in the language: reading what you love, arguing what you believe, and writing things only you could write. Congratulations. You didn't just learn English. You made it yours.",
    nextSteps: [
      "Read something difficult on purpose, and write a one-line summary of its real argument.",
      "Rewrite a paragraph of your own until not one word can be cut.",
      "Explain something you know well to someone who knows nothing about it.",
      "Write a short essay on a question you actually care about — thesis, concession, and a close you'd quote.",
    ],
  },
  diploma: {
    title: "VillaAula The Fine Print Diploma",
    subtitle: "Level 6 (C2)",
    issuer: "VillaAula",
  },
};
