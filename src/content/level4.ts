import type { Course } from "@/lib/types";

/**
 * Level 4 — B1+/B2, authored from the real program spine (reference/s4u1–s4u4,
 * captured in CURRICULA_SPINE.md). 100% original content (HANDOFF §9).
 *
 * The most advanced level — speaking is calibrated up (a full sentence or two),
 * readings run a little longer.
 *
 * Arc: Unit 1 reporting what others said (reported speech) → Unit 2 the unreal &
 * the verbal (infinitives, gerunds, 2nd/3rd conditionals, wish) → Unit 3 the future
 * from the present, obligation & ability → Unit 4 media language (phrasal verbs,
 * linking words, irregular comparatives, -ever words, adverbs of place).
 *
 * Complete: 4 units · 20 lessons · 4 speaking · 16-question final (pass 12).
 */
export const level4: Course = {
  id: "level-4",
  slug: "4",
  level: 4,
  title: "Real Conversations",
  intro:
    "This is the top of the program — the level where English starts to feel like your own. You'll report what other people said, imagine how things could have gone differently, talk about plans and abilities, and connect your ideas the way fluent speakers do. The grammar is more advanced, but you already have the foundation. Let's finish strong.",
  acceptsGuests: true,
  units: [
    // ============================== UNIT 1 ==============================
    {
      id: "c4u1",
      slug: "1",
      number: 1,
      title: "Who Said What?",
      summary:
        "Report what other people said, asked, and ordered — and review the perfect tenses that make it possible.",
      lessons: [
        // ---- L1: perfect tenses revision ----
        {
          id: "c4u1l1",
          slug: "perfect-review",
          title: "Looking back further",
          topic: "present perfect vs. past perfect",
          grammarNote: [
            "Two perfect tenses you'll lean on here:",
            "- **present perfect** = *have / has + participle* → links the past to **now**.",
            "  *I **have finished** the report.*",
            "- **past perfect** = *had + participle* → an action **before another past action**.",
            "  *By the time I arrived, the meeting **had** already **started**.*",
            "",
            "The past perfect is the \"earlier past\" — useful for putting events in order.",
          ].join("\n"),
          exercise: {
            id: "c4u1l1-ex",
            title: "Practice: ordering the past",
            items: [
              {
                kind: "content",
                content: {
                  id: "c4u1l1-c1",
                  type: "reading",
                  emoji: "📱",
                  title: "Out of date already",
                  body: "Daniel was excited about his new phone. But by the time it arrived, a newer model had already come out. He had waited three weeks for it, and now it felt old. He has decided to keep it anyway — it still works perfectly.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l1-q1",
                  type: "multiple_choice",
                  prompt: "From the reading: when the phone arrived, a newer model ___.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "had already come out" },
                      { id: "b", text: "comes out" },
                      { id: "c", text: "will come out" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "It happened **before** the arrival → past perfect: *had already come out*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l1-q2",
                  type: "open",
                  prompt: "Past participle of **break**: ___",
                  points: 1,
                  config: { acceptedAnswers: ["broken"], charLimit: 10 },
                  explanation: "Irregular: **broken** (have/had broken).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l1-q3",
                  type: "true_false",
                  prompt:
                    "“By the time we got there, the show had ended.” — The show ended before we arrived.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Past perfect = the earlier action. The show ended first. ✓",
                },
              },
            ],
          },
        },
        // ---- L2: reported statements ----
        {
          id: "c4u1l2",
          slug: "reported-statements",
          title: "Did he say that?",
          topic: "reported speech · statements",
          grammarNote: [
            "To report what someone **said**, the verb usually shifts one step back:",
            "- present → past: *\"I **am** busy\"* → *He said he **was** busy.*",
            "- *will* → *would*: *\"I **will** call\"* → *She said she **would** call.*",
            "- *can* → *could*: *\"I **can** help\"* → *He said he **could** help.*",
            "",
            "**say** has no person after it; **tell** needs one: *say (that)… / tell **someone** (that)…*",
          ].join("\n"),
          exercise: {
            id: "c4u1l2-ex",
            title: "Practice: reporting statements",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u1l2-q1",
                  type: "multiple_choice",
                  prompt: "“I am busy,” she said. → She said she ___ busy.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "is" },
                      { id: "b", text: "was" },
                      { id: "c", text: "will be" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Present → past: *am* → **was**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l2-q2",
                  type: "open",
                  prompt: "“I will help you,” he said. → He said he ___ help me. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["would"], charLimit: 8 },
                  explanation: "*will* → **would**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l2-q3",
                  type: "true_false",
                  prompt: "“He said me that he was tired.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "*say* takes no person: *He **told** me…* or *He **said** that…*",
                },
              },
            ],
          },
        },
        // ---- L3: reported commands ----
        {
          id: "c4u1l3",
          slug: "reported-commands",
          title: "Did he tell you that?",
          topic: "reported speech · orders & requests",
          grammarNote: [
            "Report an **order, instruction, or request** with **tell / ask + person + (not) to +**",
            "**verb**:",
            "*\"Sit down.\"* → *He **told** me **to sit** down.*",
            "*\"Please wait.\"* → *She **asked** me **to wait**.*",
            "*\"Don't be late.\"* → *They **told** us **not to be** late.*",
          ].join("\n"),
          exercise: {
            id: "c4u1l3-ex",
            title: "Practice: reporting commands",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u1l3-q1",
                  type: "multiple_choice",
                  prompt: "“Close the door,” he said. → He told me ___ the door.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "to close" },
                      { id: "b", text: "close" },
                      { id: "c", text: "closing" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Reported command → **to** + verb: *to close*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l3-q2",
                  type: "open",
                  prompt: "“Don't run,” she said. → She told us ___ to run. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["not"], charLimit: 6 },
                  explanation: "Negative command → **not** to + verb.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l3-q3",
                  type: "true_false",
                  prompt: "We can say “She asked me to wait.”",
                  points: 1,
                  config: { correct: true },
                  explanation: "*ask + person + to + verb* is a correct reported request. ✓",
                },
              },
            ],
          },
        },
        // ---- L4: reported questions ----
        {
          id: "c4u1l4",
          slug: "reported-questions",
          title: "May I come in?",
          topic: "reported speech · questions",
          grammarNote: [
            "Reported questions use **statement word order** (no auxiliary *do/does*, no question",
            "mark), and the verb shifts back:",
            "- yes/no → **ask if / whether**: *\"Are you ready?\"* → *She asked **if** I **was** ready.*",
            "- Wh- → keep the question word: *\"Where do you live?\"* → *He asked where I **lived**.*",
          ].join("\n"),
          exercise: {
            id: "c4u1l4-ex",
            title: "Practice: reporting questions",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u1l4-q1",
                  type: "multiple_choice",
                  prompt: "“Are you ready?” she asked. → She asked ___ I was ready.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "if" },
                      { id: "b", text: "that" },
                      { id: "c", text: "do" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Yes/no question → **if** (or *whether*).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l4-q2",
                  type: "open",
                  prompt: "“Where do you live?” → He asked where I ___. (live → past)",
                  points: 1,
                  config: { acceptedAnswers: ["lived"], charLimit: 8 },
                  explanation: "Statement order + backshift: *where I **lived***.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l4-q3",
                  type: "true_false",
                  prompt: "Reported questions keep the question word order (“…where do you live”).",
                  points: 1,
                  config: { correct: false },
                  explanation: "They use **statement** order: *…where I lived* (no *do*).",
                },
              },
            ],
          },
        },
        // ---- L5: time & place references ----
        {
          id: "c4u1l5",
          slug: "reported-time-place",
          title: "Then and there",
          topic: "reported speech · time & place words",
          grammarNote: [
            "When you report later or elsewhere, time and place words also shift:",
            "- *now* → **then** · *today* → **that day** · *tomorrow* → **the next day**",
            "- *yesterday* → **the day before** · *here* → **there** · *this* → **that**",
            "*\"I'll do it tomorrow.\"* → *He said he'd do it **the next day**.*",
          ].join("\n"),
          exercise: {
            id: "c4u1l5-ex",
            title: "Practice: shifting the words",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u1l5-q1",
                  type: "multiple_choice",
                  prompt: "“I'll finish it tomorrow,” he said. → He said he'd finish it ___.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "tomorrow" },
                      { id: "b", text: "the next day" },
                      { id: "c", text: "yesterday" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*tomorrow* → **the next day**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l5-q2",
                  type: "open",
                  prompt: "“I am here now.” → She said she was there ___. (now → ?)",
                  points: 1,
                  config: { acceptedAnswers: ["then"], charLimit: 6 },
                  explanation: "*now* → **then**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u1l5-q3",
                  type: "speaking",
                  prompt: "Report what someone said:",
                  points: 1,
                  config: {
                    target: "She said she was very tired that day.",
                    acceptedAnswers: [
                      "she said she was very tired that day",
                      "she said that she was very tired that day",
                    ],
                    maxSeconds: 10,
                  },
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 2 ==============================
    {
      id: "c4u2",
      slug: "2",
      number: 2,
      title: "What Would You Do?",
      summary:
        "Imagine, regret, and weigh choices — infinitives and gerunds, the second and third conditionals, and wishes.",
      lessons: [
        // ---- L1: infinitives ----
        {
          id: "c4u2l1",
          slug: "infinitives",
          title: "To do…",
          topic: "infinitives · to + verb",
          grammarNote: [
            "Many verbs are followed by the **to-infinitive**: *want, decide, hope, need, plan,",
            "would like* — *I **decided to start** a business.*",
            "Use the infinitive to express **purpose** (= *in order to*):",
            "*She went to the bank **to get** a loan.*",
          ].join("\n"),
          exercise: {
            id: "c4u2l1-ex",
            title: "Practice: infinitives",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u2l1-q1",
                  type: "multiple_choice",
                  prompt: "I decided ___ my own company.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "to start" },
                      { id: "b", text: "starting" },
                      { id: "c", text: "start" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*decide* → **to** + verb: *to start*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l1-q2",
                  type: "open",
                  prompt: "She saved money ___ buy a car. (purpose, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["to"], charLimit: 6 },
                  explanation: "Purpose → **to** buy (= in order to).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l1-q3",
                  type: "true_false",
                  prompt: "“I want go home.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "*want* → **to**: *I want **to** go home.*",
                },
              },
            ],
          },
        },
        // ---- L2: gerunds ----
        {
          id: "c4u2l2",
          slug: "gerunds",
          title: "…or doing?",
          topic: "gerunds · verb + -ing",
          grammarNote: [
            "Other verbs are followed by the **gerund** (-ing): *enjoy, avoid, finish, keep,",
            "mind, suggest* — *I **enjoy listening** to music.*",
            "After a **preposition**, always use the gerund:",
            "*She's good **at painting**. · Thanks **for helping**.*",
          ].join("\n"),
          exercise: {
            id: "c4u2l2-ex",
            title: "Practice: gerunds",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u2l2-q1",
                  type: "multiple_choice",
                  prompt: "I enjoy ___ to music in the evening.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "to listen" },
                      { id: "b", text: "listening" },
                      { id: "c", text: "listen" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*enjoy* → **-ing**: *listening*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l2-q2",
                  type: "open",
                  prompt: "She's good at ___ (paint). (-ing form)",
                  points: 1,
                  config: { acceptedAnswers: ["painting"], charLimit: 10 },
                  explanation: "After *at* (a preposition) → **painting**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l2-q3",
                  type: "true_false",
                  prompt: "After a preposition we use the -ing form.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Yes — *interested in **learning**, before **leaving***. ✓",
                },
              },
            ],
          },
        },
        // ---- L3: second conditional ----
        {
          id: "c4u2l3",
          slug: "second-conditional",
          title: "What would you do?",
          topic: "second conditional · unreal present",
          grammarNote: [
            "The **second conditional** imagines an **unreal or unlikely** present/future:",
            "**If + past simple, would + base verb.**",
            "*If I **had** more time, I **would learn** the piano. · If I **won** the lottery,",
            "I **would travel**.*",
            "",
            "With *to be*, **were** is used for all persons: *If I **were** you, I'd rest.*",
          ].join("\n"),
          exercise: {
            id: "c4u2l3-ex",
            title: "Practice: imagining",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u2l3-q1",
                  type: "multiple_choice",
                  prompt: "If I ___ rich, I would help everyone.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "were" },
                      { id: "b", text: "am" },
                      { id: "c", text: "will be" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Unreal → past form; *to be* uses **were** for all persons.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l3-q2",
                  type: "open",
                  prompt: "If I won the lottery, I ___ buy a house. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["would"], charLimit: 6 },
                  explanation: "Result of an unreal *if* → **would** buy.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l3-q3",
                  type: "true_false",
                  prompt: "The second conditional describes a real, likely future.",
                  points: 1,
                  config: { correct: false },
                  explanation: "It's **unreal/unlikely**. The *first* conditional is the real one.",
                },
              },
            ],
          },
        },
        // ---- L4: I wish / If only (present) ----
        {
          id: "c4u2l4",
          slug: "wish-present",
          title: "I wish…",
          topic: "wish / if only · present regret",
          grammarNote: [
            "**wish / if only + past simple** expresses a **regret or desire about now**:",
            "*I **wish** I **knew** the answer. · **If only** I **had** more time.*",
            "With *to be*, use **were**: *I wish I **were** taller.*",
            "Note: the past form here points to the **present**, not the past.",
          ].join("\n"),
          exercise: {
            id: "c4u2l4-ex",
            title: "Practice: wishes",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u2l4-q1",
                  type: "multiple_choice",
                  prompt: "I wish I ___ taller.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "were" },
                      { id: "b", text: "am" },
                      { id: "c", text: "will be" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*wish* + past; *to be* → **were**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l4-q2",
                  type: "open",
                  prompt: "If only I ___ speak French! (ability — past of “can”, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["could"], charLimit: 8 },
                  explanation: "*can* → **could** after *if only*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l4-q3",
                  type: "true_false",
                  prompt: "“I wish I have a car.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "*wish* takes the past: *I wish I **had** a car.*",
                },
              },
            ],
          },
        },
        // ---- L5: third conditional + wish (past) ----
        {
          id: "c4u2l5",
          slug: "third-conditional",
          title: "What would you have done?",
          topic: "third conditional · past regret",
          grammarNote: [
            "The **third conditional** imagines a **different past**:",
            "**If + past perfect, would have + past participle.**",
            "*If I **had studied**, I **would have passed**. · If you **had told** me, I",
            "**would have helped**.*",
            "**wish / if only + past perfect** = a **past regret**: *I wish I **had listened**.*",
          ].join("\n"),
          exercise: {
            id: "c4u2l5-ex",
            title: "Practice: a different past",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u2l5-q1",
                  type: "multiple_choice",
                  prompt: "If I had known, I ___ come earlier.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "would have" },
                      { id: "b", text: "would" },
                      { id: "c", text: "will have" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Unreal past → **would have** + participle.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l5-q2",
                  type: "open",
                  prompt: "I wish I ___ studied harder. (past regret — one word)",
                  points: 1,
                  config: { acceptedAnswers: ["had"], charLimit: 6 },
                  explanation: "*wish* + **past perfect**: *had studied*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u2l5-q3",
                  type: "speaking",
                  prompt: "Say a third-conditional regret:",
                  points: 1,
                  config: {
                    target: "If I had known, I would have helped you.",
                    acceptedAnswers: [
                      "if i had known i would have helped you",
                      "if id known i would have helped you",
                    ],
                    maxSeconds: 10,
                  },
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 3 ==============================
    {
      id: "c4u3",
      slug: "3",
      number: 3,
      title: "Do You Watch Sports?",
      summary:
        "Talk about schedules and plans, what you have to do, and what you're able to do — now, before, and in the future.",
      lessons: [
        // ---- L1: present simple for timetables ----
        {
          id: "c4u3l1",
          slug: "present-timetables",
          title: "It starts at eight",
          topic: "present simple · timetables & events",
          grammarNote: [
            "Use the **present simple** for **scheduled** or **timetabled** events, even in the",
            "future:",
            "*The match **starts** at eight. · The train **leaves** at six tomorrow.*",
            "It's also used to **narrate** fast events (sports commentary, instructions).",
          ].join("\n"),
          exercise: {
            id: "c4u3l1-ex",
            title: "Practice: schedules",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u3l1-q1",
                  type: "multiple_choice",
                  prompt: "The match ___ at eight tonight.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "starts" },
                      { id: "b", text: "is starting" },
                      { id: "c", text: "will start" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A fixed schedule → present simple: **starts**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l1-q2",
                  type: "open",
                  prompt: "The plane ___ at noon. (leave — timetable)",
                  points: 1,
                  config: { acceptedAnswers: ["leaves"], charLimit: 8 },
                  explanation: "Timetable → **leaves**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l1-q3",
                  type: "true_false",
                  prompt: "We can use the present simple for a fixed future schedule.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Yes — *The show **begins** at nine tomorrow.* ✓",
                },
              },
            ],
          },
        },
        // ---- L2: present simple vs continuous for future ----
        {
          id: "c4u3l2",
          slug: "future-present-forms",
          title: "What are you doing this weekend?",
          topic: "present continuous · future arrangements",
          grammarNote: [
            "For the future, choose by **type of plan**:",
            "- **present continuous** = a personal **arrangement**: *I**'m meeting** Sam tomorrow.*",
            "- **present simple** = a **timetable**: *The café **opens** at nine.*",
            "If it's *your* plan with another person, use the continuous.",
          ].join("\n"),
          exercise: {
            id: "c4u3l2-ex",
            title: "Practice: plans vs. timetables",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u3l2-q1",
                  type: "multiple_choice",
                  prompt: "I ___ my friends this weekend — we arranged it last week.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "am seeing" },
                      { id: "b", text: "see" },
                      { id: "c", text: "saw" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A personal arrangement → present continuous: **am seeing**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l2-q2",
                  type: "open",
                  prompt: "The shop ___ at 9 every day. (open — timetable)",
                  points: 1,
                  config: { acceptedAnswers: ["opens"], charLimit: 8 },
                  explanation: "A regular timetable → **opens**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l2-q3",
                  type: "true_false",
                  prompt: "“I'm playing tennis with Ana tomorrow” is a correct future arrangement.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Present continuous for an arrangement with someone. ✓",
                },
              },
            ],
          },
        },
        // ---- L3: have to ----
        {
          id: "c4u3l3",
          slug: "have-to",
          title: "Do I have to?",
          topic: "have to · obligation & necessity",
          grammarNote: [
            "- **have to / has to + verb** = obligation/necessity: *I **have to** wear a uniform.*",
            "- **don't / doesn't have to** = it's **not necessary**: *You **don't have to** come.*",
            "- past: **had to**: *Yesterday I **had to** work late.*",
            "",
            "⚠️ *don't have to* (not necessary) ≠ *mustn't* (forbidden).",
          ].join("\n"),
          exercise: {
            id: "c4u3l3-ex",
            title: "Practice: have to",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u3l3-q1",
                  type: "multiple_choice",
                  prompt: "Do I ___ buy skis, or can I rent them?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "have to" },
                      { id: "b", text: "having to" },
                      { id: "c", text: "had to" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Present obligation question → **have to**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l3-q2",
                  type: "open",
                  prompt: "Yesterday I ___ to work late. (past of “have to”, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["had"], charLimit: 6 },
                  explanation: "Past obligation → **had** to.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l3-q3",
                  type: "true_false",
                  prompt: "“You don't have to come” means coming is forbidden.",
                  points: 1,
                  config: { correct: false },
                  explanation: "It means it's **not necessary** — you can if you want.",
                },
              },
            ],
          },
        },
        // ---- L4: be able to (different tenses) ----
        {
          id: "c4u3l4",
          slug: "be-able-to",
          title: "Always been able to",
          topic: "be able to · ability across tenses",
          grammarNote: [
            "**be able to** = *can*, but it works in **every tense**:",
            "- present: *I **am able to** swim.* · past: *I **was able to** finish.*",
            "- future: *I **will be able to** drive.* · perfect: *I**'ve been able to** help.*",
            "Use it where *can/could* can't go (after *will*, *have*, etc.).",
          ].join("\n"),
          exercise: {
            id: "c4u3l4-ex",
            title: "Practice: be able to",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u3l4-q1",
                  type: "multiple_choice",
                  prompt: "Next year I ___ to drive.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "will be able" },
                      { id: "b", text: "can" },
                      { id: "c", text: "am able" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Future ability → **will be able** to (not *will can*).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l4-q2",
                  type: "open",
                  prompt: "She ___ able to swim when she was five. (was / were)",
                  points: 1,
                  config: { acceptedAnswers: ["was"], charLimit: 6 },
                  explanation: "*She* → **was** able to.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l4-q3",
                  type: "true_false",
                  prompt: "“I will can help” is correct English.",
                  points: 1,
                  config: { correct: false },
                  explanation: "Two modals can't stack: *I **will be able to** help.*",
                },
              },
            ],
          },
        },
        // ---- L5: be able to (revision) ----
        {
          id: "c4u3l5",
          slug: "ability-review",
          title: "Will I be able to?",
          topic: "ability · can / could / be able to",
          grammarNote: [
            "Pick the right ability form by **time**:",
            "- now → **can** / **am able to** · general past → **could**",
            "- one past success → **was able to / managed to** · future → **will be able to**",
            "*As a child I **could** read; that day I **was able to** read the whole book.*",
          ].join("\n"),
          exercise: {
            id: "c4u3l5-ex",
            title: "Practice: choosing the form",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u3l5-q1",
                  type: "multiple_choice",
                  prompt: "After months of practice, she finally ___ play the song. (one past success)",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "was able to" },
                      { id: "b", text: "can" },
                      { id: "c", text: "will be able to" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A specific past achievement → **was able to**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l5-q2",
                  type: "open",
                  prompt: "When I was young, I ___ run very fast. (general past ability, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["could"], charLimit: 8 },
                  explanation: "General past ability → **could**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u3l5-q3",
                  type: "speaking",
                  prompt: "Talk about an ability of yours:",
                  points: 1,
                  config: {
                    target: "I have always been able to swim.",
                    acceptedAnswers: [
                      "i have always been able to swim",
                      "ive always been able to swim",
                    ],
                    maxSeconds: 9,
                  },
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 4 ==============================
    {
      id: "c4u4",
      slug: "4",
      number: 4,
      title: "How Addictive Is It?",
      summary:
        "The language of media and opinions — phrasal verbs, linking words, irregular comparisons, -ever words, and adverbs of place.",
      lessons: [
        // ---- L1: phrasal verbs ----
        {
          id: "c4u4l1",
          slug: "phrasal-verbs",
          title: "Take your chance",
          topic: "phrasal verbs",
          grammarNote: [
            "A **phrasal verb** is a verb + a small word (particle) whose meaning is often new:",
            "*give **up*** = quit · *take **off*** = remove / leave the ground · *look **after***",
            "= take care of · *find **out*** = discover.",
            "*Please **take off** your shoes. · I'll **find out** the time.*",
          ].join("\n"),
          exercise: {
            id: "c4u4l1-ex",
            title: "Practice: phrasal verbs",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u4l1-q1",
                  type: "multiple_choice",
                  prompt: "Please ___ your shoes before you come in.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "take off" },
                      { id: "b", text: "take after" },
                      { id: "c", text: "take up" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Remove → **take off**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l1-q2",
                  type: "open",
                  prompt: "It's hard to ___ up smoking. (quit — one word)",
                  points: 1,
                  config: { acceptedAnswers: ["give"], charLimit: 6 },
                  explanation: "*give up* = quit.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l1-q3",
                  type: "match",
                  prompt: "Match each phrasal verb to its meaning:",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "give up", right: "quit" },
                      { left: "look after", right: "take care of" },
                      { left: "find out", right: "discover" },
                    ],
                  },
                  explanation: "give up = quit · look after = take care of · find out = discover.",
                },
              },
            ],
          },
        },
        // ---- L2: linking words ----
        {
          id: "c4u4l2",
          slug: "linking-words",
          title: "Read all about it",
          topic: "linking words & phrases",
          grammarNote: [
            "Linkers connect ideas:",
            "- **contrast**: *however, although, but* — *It was late; **however**, she kept working.*",
            "- **result**: *so, therefore* — *It rained, **so** we stayed in.*",
            "- **reason**: *because, since* — *We left **because** it was boring.*",
          ].join("\n"),
          exercise: {
            id: "c4u4l2-ex",
            title: "Practice: linking ideas",
            items: [
              {
                kind: "content",
                content: {
                  id: "c4u4l2-c1",
                  type: "reading",
                  emoji: "📰",
                  title: "Screens everywhere",
                  body: "Many people read the news on their phones now. Print newspapers are still sold; however, far fewer are bought each year. Some readers miss paper because it feels calmer. Others prefer screens, since the news updates instantly. Whatever the format, people clearly still want to know what's happening.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l2-q1",
                  type: "multiple_choice",
                  prompt: "It was raining; ___, we still went out.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "however" },
                      { id: "b", text: "because" },
                      { id: "c", text: "so" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Contrast → **however**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l2-q2",
                  type: "open",
                  prompt: "___ it was late, she kept working. (contrast linker, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["although"], charLimit: 10 },
                  explanation: "*Although* + clause shows contrast.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l2-q3",
                  type: "true_false",
                  prompt: "From the reading: fewer print newspapers are bought each year.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“…far fewer are bought each year.” ✓",
                },
              },
            ],
          },
        },
        // ---- L3: irregular comparatives/superlatives ----
        {
          id: "c4u4l3",
          slug: "irregular-comparatives",
          title: "Better or worse?",
          topic: "irregular comparatives & superlatives",
          grammarNote: [
            "A few adjectives are **irregular**:",
            "- *good* → **better** → the **best**",
            "- *bad* → **worse** → the **worst**",
            "- *far* → **further / farther** → the **furthest / farthest**",
            "*This show is **better** than that one — it's the **best** on TV.*",
          ].join("\n"),
          exercise: {
            id: "c4u4l3-ex",
            title: "Practice: better & worse",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u4l3-q1",
                  type: "multiple_choice",
                  prompt: "This series is ___ than the last one.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "more good" },
                      { id: "b", text: "better" },
                      { id: "c", text: "gooder" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*good* → **better**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l3-q2",
                  type: "open",
                  prompt: "It's the ___ film I've ever seen. (bad → superlative)",
                  points: 1,
                  config: { acceptedAnswers: ["worst"], charLimit: 8 },
                  explanation: "*bad* → the **worst**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l3-q3",
                  type: "true_false",
                  prompt: "“This is more good than that.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "*good* is irregular: *This is **better**…*",
                },
              },
            ],
          },
        },
        // ---- L4: -ever words ----
        {
          id: "c4u4l4",
          slug: "ever-words",
          title: "Whatever you like",
          topic: "-ever words",
          grammarNote: [
            "Add **-ever** to a question word to mean *any / it doesn't matter which*:",
            "- **whatever** = anything · **whoever** = any person · **whenever** = any time",
            "- **wherever** = any place · **however** = in any way",
            "***Whatever** you do, don't give up. · Sit **wherever** you like.*",
          ].join("\n"),
          exercise: {
            id: "c4u4l4-ex",
            title: "Practice: -ever words",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u4l4-q1",
                  type: "multiple_choice",
                  prompt: "___ you do, don't give up.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Whatever" },
                      { id: "b", text: "Whoever" },
                      { id: "c", text: "Wherever" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Anything you do* → **Whatever**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l4-q2",
                  type: "open",
                  prompt: "Call me ___ you need help. (any time — one word)",
                  points: 1,
                  config: { acceptedAnswers: ["whenever"], charLimit: 10 },
                  explanation: "Any time → **whenever**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l4-q3",
                  type: "speaking",
                  prompt: "Use an -ever word in a sentence:",
                  points: 1,
                  config: {
                    target: "You can sit wherever you like.",
                    acceptedAnswers: [
                      "you can sit wherever you like",
                      "you can sit wherever you want",
                    ],
                    maxSeconds: 8,
                  },
                },
              },
            ],
          },
        },
        // ---- L5: adverbs of place ----
        {
          id: "c4u4l5",
          slug: "adverbs-of-place",
          title: "Here and there",
          topic: "adverbs of place & word order",
          grammarNote: [
            "**Adverbs of place** say *where*: *here, there, everywhere, nearby, outside.*",
            "They usually come **after** the verb (and its object):",
            "*I looked **everywhere**. · She's waiting **outside**.*",
            "After **here/there** at the start, the verb can come first: ***Here comes** the bus!*",
          ].join("\n"),
          exercise: {
            id: "c4u4l5-ex",
            title: "Practice: where",
            items: [
              {
                kind: "question",
                question: {
                  id: "c4u4l5-q1",
                  type: "multiple_choice",
                  prompt: "I looked ___ but couldn't find my keys.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "everywhere" },
                      { id: "b", text: "every place" },
                      { id: "c", text: "all" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "In all places → **everywhere**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l5-q2",
                  type: "open",
                  prompt: "Here ___ the bus! (come — inversion after “here”)",
                  points: 1,
                  config: { acceptedAnswers: ["comes"], charLimit: 8 },
                  explanation: "*Here **comes** the bus!* — verb before the subject.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c4u4l5-q3",
                  type: "true_false",
                  prompt: "Adverbs of place usually come after the verb and its object.",
                  points: 1,
                  config: { correct: true },
                  explanation: "*I put it **there**. · We met them **outside**.* ✓",
                },
              },
            ],
          },
        },
      ],
    },
  ],
  finalTest: {
    id: "c4-final",
    slug: "final-test",
    title: "Level 4 review",
    intro:
      "The final check of the whole program — reported speech, conditionals & wishes, future-from-present, ability, and the language of media. Score 12 of 16 to earn your Level 4 diploma.",
    passingScore: 12,
    exercise: {
      id: "c4-final-ex",
      title: "Level 4 final",
      items: [
        {
          kind: "question",
          question: {
            id: "c4-final-q1",
            type: "multiple_choice",
            prompt: "By the time we arrived, the film ___ started.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "had already" },
                { id: "b", text: "has already" },
                { id: "c", text: "already" },
              ],
              correctIds: ["a"],
            },
            explanation: "Earlier past → past perfect: **had already** started.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q2",
            type: "open",
            prompt: "“I am tired,” he said. → He said he ___ tired. (one word)",
            points: 1,
            config: { acceptedAnswers: ["was"], charLimit: 6 },
            explanation: "Present → past: *am* → **was**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q3",
            type: "multiple_choice",
            prompt: "“Sit down,” she said. → She told me ___ down.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "to sit" },
                { id: "b", text: "sit" },
                { id: "c", text: "sitting" },
              ],
              correctIds: ["a"],
            },
            explanation: "Reported command → **to** + verb.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q4",
            type: "open",
            prompt: "“Are you ready?” → She asked ___ I was ready. (yes/no — one word)",
            points: 1,
            config: { acceptedAnswers: ["if", "whether"], charLimit: 8 },
            explanation: "Yes/no reported question → **if** (or *whether*).",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q5",
            type: "multiple_choice",
            prompt: "I decided ___ a company.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "to start" },
                { id: "b", text: "starting" },
                { id: "c", text: "start" },
              ],
              correctIds: ["a"],
            },
            explanation: "*decide* → **to** + verb.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q6",
            type: "multiple_choice",
            prompt: "I enjoy ___ books on the train.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "to read" },
                { id: "b", text: "reading" },
                { id: "c", text: "read" },
              ],
              correctIds: ["b"],
            },
            explanation: "*enjoy* → **-ing**: reading.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q7",
            type: "multiple_choice",
            prompt: "If I ___ rich, I would travel the world.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "were" },
                { id: "b", text: "am" },
                { id: "c", text: "will be" },
              ],
              correctIds: ["a"],
            },
            explanation: "Second conditional (unreal) → **were**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q8",
            type: "open",
            prompt: "I wish I ___ the answer. (know → present wish, one word)",
            points: 1,
            config: { acceptedAnswers: ["knew"], charLimit: 8 },
            explanation: "*wish* + past simple → **knew**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q9",
            type: "multiple_choice",
            prompt: "If I had known, I ___ helped you.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "would have" },
                { id: "b", text: "would" },
                { id: "c", text: "will have" },
              ],
              correctIds: ["a"],
            },
            explanation: "Third conditional → **would have** + participle.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q10",
            type: "open",
            prompt: "The train ___ at six tomorrow. (leave — timetable)",
            points: 1,
            config: { acceptedAnswers: ["leaves"], charLimit: 8 },
            explanation: "Timetable → present simple **leaves**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q11",
            type: "multiple_choice",
            prompt: "Do I ___ wear a uniform at this job?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "have to" },
                { id: "b", text: "had to" },
                { id: "c", text: "having to" },
              ],
              correctIds: ["a"],
            },
            explanation: "Present obligation question → **have to**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q12",
            type: "multiple_choice",
            prompt: "Next year I ___ to drive.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "will be able" },
                { id: "b", text: "will can" },
                { id: "c", text: "can" },
              ],
              correctIds: ["a"],
            },
            explanation: "Future ability → **will be able** to.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q13",
            type: "open",
            prompt: "Please take ___ your shoes. (phrasal verb — remove, one word)",
            points: 1,
            config: { acceptedAnswers: ["off"], charLimit: 6 },
            explanation: "*take **off*** = remove.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q14",
            type: "multiple_choice",
            prompt: "It was late; ___, she kept working.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "however" },
                { id: "b", text: "because" },
                { id: "c", text: "so" },
              ],
              correctIds: ["a"],
            },
            explanation: "Contrast → **however**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q15",
            type: "multiple_choice",
            prompt: "This film is ___ than the book.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "more good" },
                { id: "b", text: "better" },
                { id: "c", text: "best" },
              ],
              correctIds: ["b"],
            },
            explanation: "*good* → **better**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c4-final-q16",
            type: "open",
            prompt: "___ you do, stay honest. (= anything you do — one word)",
            points: 1,
            config: { acceptedAnswers: ["whatever"], charLimit: 10 },
            explanation: "Anything you do → **Whatever**.",
          },
        },
      ],
    },
  },
  conclusion: {
    title: "You finished Level 4 — and the whole program!",
    body:
      "This is the summit. You can report what other people said, imagine how things could have been different, talk about plans and abilities across every tense, and link your ideas like a confident speaker. From *to be* in Level 1 to reported speech and third conditionals here, you've built real English — the kind that holds a real conversation. Be proud, and keep speaking.",
    nextSteps: [
      "Tell a short story and report what two people said.",
      "Describe one thing you'd do differently — use a third conditional.",
      "Share your weekend plans using the present continuous for the future.",
      "Read a news article and notice the linking words (however, although, therefore).",
    ],
  },
  diploma: {
    title: "WISHUB Real Conversations Diploma",
    subtitle: "Level 4 (B1+/B2)",
    issuer: "WISHUB",
  },
};
