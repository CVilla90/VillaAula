import type { Course } from "@/lib/types";

/**
 * Level 3 — B1, authored from the real program spine (reference/s3u1–s3u4, captured
 * in CURRICULA_SPINE.md). 100% original content (HANDOFF §9).
 *
 * Arc: Unit 1 the past in progress (past continuous) → Unit 2 experience up to now
 * (present perfect) → Unit 3 conditionals & preferences → Unit 4 modals.
 *
 * Complete: 4 units · 20 lessons · 4 speaking · 16-question final (pass 12).
 */
export const level3: Course = {
  id: "level-3",
  slug: "3",
  level: 3,
  title: "Telling More",
  intro:
    "You can talk about now, the future, and the past — Level 3 helps you say more. Describe what was happening in the middle of a story, talk about what you've done and experienced, imagine what could happen, and give advice. The sentences get longer; so does what you can express.",
  acceptsGuests: true,
  units: [
    // ============================== UNIT 1 ==============================
    {
      id: "c3u1",
      slug: "1",
      number: 1,
      title: "In the Middle of It",
      summary:
        "Describe actions in progress in the past — what was happening, what interrupted it, and the scene around it.",
      lessons: [
        // ---- L1: past continuous (basic) ----
        {
          id: "c3u1l1",
          slug: "past-continuous",
          title: "Were you working?",
          topic: "past continuous · was/were + -ing",
          grammarNote: [
            "The **past continuous** describes an action **in progress** at a moment in the past:",
            "**was / were + verb-ing.**",
            "- I / he / she / it **was** working. · you / we / they **were** working.",
            "",
            "Negative: **wasn't / weren't** + -ing. Question: *__Were__ you working?*",
            "It's the background, not a finished event.",
          ].join("\n"),
          exercise: {
            id: "c3u1l1-ex",
            title: "Practice: in progress",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u1l1-q1",
                  type: "multiple_choice",
                  prompt: "This time yesterday, we ___ dinner.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "were having" },
                      { id: "b", text: "was having" },
                      { id: "c", text: "are having" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*We* → **were** + having.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l1-q2",
                  type: "open",
                  prompt: "Write the -ing form of **write**: ___",
                  points: 1,
                  config: { acceptedAnswers: ["writing"], charLimit: 10 },
                  explanation: "Drop the *e*: **writing**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l1-q3",
                  type: "true_false",
                  prompt: "“They was playing.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "*They* → **were** playing.",
                },
              },
            ],
          },
        },
        // ---- L2: interrupted (when) ----
        {
          id: "c3u1l2",
          slug: "interrupted",
          title: "When it happened",
          topic: "past continuous + simple past · when",
          grammarNote: [
            "A long action **in progress** (past continuous) can be **interrupted** by a short",
            "action (simple past). Join them with **when**:",
            "*I **was sleeping** **when** the phone **rang**.*",
            "",
            "The continuous = the background; the simple past = the interruption.",
          ].join("\n"),
          exercise: {
            id: "c3u1l2-ex",
            title: "Practice: interruptions",
            items: [
              {
                kind: "content",
                content: {
                  id: "c3u1l2-a1",
                  type: "audio",
                  title: "Listen: a sudden call",
                  transcript:
                    "I was cooking dinner when the phone rang. It was my brother. He was calling from the airport to say hello.",
                  voice: "en-US-AndrewNeural",
                  mediaUrl: "/audio/c3u1l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l2-q4",
                  type: "multiple_choice",
                  prompt: "From the audio, what was the speaker doing when the phone rang?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Cooking dinner" },
                      { id: "b", text: "Sleeping" },
                      { id: "c", text: "Driving" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“I **was cooking dinner** when the phone rang.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l2-q1",
                  type: "multiple_choice",
                  prompt: "I ___ a shower when the doorbell rang.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "took" },
                      { id: "b", text: "was taking" },
                      { id: "c", text: "take" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "The longer background action → **was taking**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l2-q2",
                  type: "open",
                  prompt: "Join: “She was reading ___ the lights went out.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["when"], charLimit: 6 },
                  explanation: "**when** introduces the interruption.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l2-q3",
                  type: "true_false",
                  prompt:
                    "In “When I arrived, they were eating,” the eating started after I arrived.",
                  points: 1,
                  config: { correct: false },
                  explanation: "They **were already eating** — it was in progress.",
                },
              },
            ],
          },
        },
        // ---- L3: specific time ----
        {
          id: "c3u1l3",
          slug: "specific-time",
          title: "At that moment",
          topic: "past continuous · a specific past time",
          grammarNote: [
            "Use the **past continuous** to say what was happening **at a specific past time**:",
            "*At midnight, they **were** still **dancing**. · At nine, I **was driving** to work.*",
            "Ask: *__What were you doing__ at seven?*",
          ].join("\n"),
          exercise: {
            id: "c3u1l3-ex",
            title: "Practice: at that time",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u1l3-q1",
                  type: "multiple_choice",
                  prompt: "At midnight, they ___ still dancing.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "was" },
                      { id: "b", text: "were" },
                      { id: "c", text: "are" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*They* → **were** dancing.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l3-q2",
                  type: "open",
                  prompt: "What ___ you doing at seven? (was / were — for “you”)",
                  points: 1,
                  config: { acceptedAnswers: ["were"], charLimit: 6 },
                  explanation: "*You* → **were**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l3-q3",
                  type: "true_false",
                  prompt: "The past continuous shows an action that finished quickly.",
                  points: 1,
                  config: { correct: false },
                  explanation: "It shows an action **in progress**, not a quick, finished one.",
                },
              },
            ],
          },
        },
        // ---- L4: while (simultaneous) ----
        {
          id: "c3u1l4",
          slug: "while",
          title: "Two things at once",
          topic: "past continuous + while",
          grammarNote: [
            "When **two actions** were in progress **at the same time**, use **while** and the",
            "past continuous for both:",
            "*__While__ I **was cooking**, she **was studying**.*",
          ].join("\n"),
          exercise: {
            id: "c3u1l4-ex",
            title: "Practice: at the same time",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u1l4-q1",
                  type: "multiple_choice",
                  prompt: "___ I was cooking, the kids were playing.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "While" },
                      { id: "b", text: "When" },
                      { id: "c", text: "Since" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Two actions at once → **While**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l4-q2",
                  type: "open",
                  prompt: "Complete: “While he was driving, I ___ sleeping.” (was / were)",
                  points: 1,
                  config: { acceptedAnswers: ["was"], charLimit: 6 },
                  explanation: "*I* → **was** sleeping.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l4-q3",
                  type: "true_false",
                  prompt: "“While” connects two actions happening at the same time.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Yes — both in the past continuous. ✓",
                },
              },
            ],
          },
        },
        // ---- L5: atmosphere / scene ----
        {
          id: "c3u1l5",
          slug: "atmosphere",
          title: "Setting the scene",
          topic: "past continuous · background",
          grammarNote: [
            "Stories often open with the **past continuous** to paint the **scene** — everything",
            "that was going on in the background:",
            "*It **was raining**. People **were hurrying** home. A man **was waiting** on the corner.*",
          ].join("\n"),
          exercise: {
            id: "c3u1l5-ex",
            title: "Practice: the scene",
            items: [
              {
                kind: "content",
                content: {
                  id: "c3u1l5-c1",
                  type: "reading",
                  emoji: "🌧️",
                  title: "That evening",
                  body: "It was getting dark. The rain was falling softly, and the streets were shining under the lamps. In the café on the corner, two friends were laughing while an old song was playing.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l5-q1",
                  type: "multiple_choice",
                  prompt: "From the reading, what were the two friends doing?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "They were laughing." },
                      { id: "b", text: "They were sleeping." },
                      { id: "c", text: "They were cooking." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“…two friends **were laughing**.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l5-q2",
                  type: "open",
                  prompt: "From the reading: an old song ___ playing. (was / were)",
                  points: 1,
                  config: { acceptedAnswers: ["was"], charLimit: 6 },
                  explanation: "*A song* (singular) → **was** playing.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u1l5-q3",
                  type: "speaking",
                  prompt: "Set a scene out loud:",
                  points: 1,
                  config: {
                    target: "The sun was shining and the birds were singing.",
                    acceptedAnswers: [
                      "the sun was shining and the birds were singing",
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
      id: "c3u2",
      slug: "2",
      number: 2,
      title: "Have You Ever?",
      summary:
        "Talk about experience and results that matter now — what you've done, for how long, and whether it's happened yet.",
      lessons: [
        // ---- L1: present perfect (basic) ----
        {
          id: "c3u2l1",
          slug: "present-perfect",
          title: "What have you done?",
          topic: "present perfect · have/has + participle",
          grammarNote: [
            "The **present perfect** connects the past to **now** — an experience or a result:",
            "**have / has + past participle.**",
            "*I **have visited** Japan. · She **has finished** the report.*",
            "",
            "Participles: regular add **-ed**; common irregulars: *be → been, see → seen,",
            "do → done, go → gone, eat → eaten.*",
          ].join("\n"),
          exercise: {
            id: "c3u2l1-ex",
            title: "Practice: present perfect",
            items: [
              {
                kind: "content",
                content: {
                  id: "c3u2l1-a1",
                  type: "audio",
                  title: "Listen: things I've done",
                  transcript:
                    "I have visited many countries. I have seen the ocean, and I have tried lots of new food. But I have never been to Japan.",
                  voice: "en-US-AvaMultilingualNeural",
                  mediaUrl: "/audio/c3u2l1-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l1-q4",
                  type: "multiple_choice",
                  prompt: "From the audio, where has the speaker never been?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Japan" },
                      { id: "b", text: "The ocean" },
                      { id: "c", text: "Another country" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“I have **never been to Japan**.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l1-q1",
                  type: "multiple_choice",
                  prompt: "She ___ finished her homework.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "have" },
                      { id: "b", text: "has" },
                      { id: "c", text: "had" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*She* → **has** finished.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l1-q2",
                  type: "open",
                  prompt: "Past participle of **see**: ___",
                  points: 1,
                  config: { acceptedAnswers: ["seen"], charLimit: 8 },
                  explanation: "Irregular: **seen** (have seen).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l1-q3",
                  type: "true_false",
                  prompt: "“I have ate lunch.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "Participle of *eat* is **eaten**: *I have eaten.*",
                },
              },
            ],
          },
        },
        // ---- L2: ever / never ----
        {
          id: "c3u2l2",
          slug: "ever-never",
          title: "Ever and never",
          topic: "present perfect · ever / never",
          grammarNote: [
            "Ask about experience with **ever** (in questions):",
            "*__Have__ you **ever** **been** to Japan?*",
            "Say *no experience* with **never** (a negative idea, with a positive verb):",
            "*I **have never** **seen** snow.*",
          ].join("\n"),
          exercise: {
            id: "c3u2l2-ex",
            title: "Practice: ever / never",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u2l2-q1",
                  type: "multiple_choice",
                  prompt: "___ you ever been to Japan?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Have" },
                      { id: "b", text: "Did" },
                      { id: "c", text: "Are" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Present perfect question: **Have** you ever…?",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l2-q2",
                  type: "open",
                  prompt: "“I have ___ seen snow.” = not ever (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["never"], charLimit: 8 },
                  explanation: "**never** = not ever.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l2-q3",
                  type: "true_false",
                  prompt: "“Have you ever tried sushi?” is a correct question.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Have + you + ever + past participle. ✓",
                },
              },
            ],
          },
        },
        // ---- L3: for / since ----
        {
          id: "c3u2l3",
          slug: "for-since",
          title: "For and since",
          topic: "present perfect · for / since",
          grammarNote: [
            "With the present perfect, say **how long** something has continued:",
            "- **for** + a **period**: *for five years, for two hours.*",
            "- **since** + a **starting point**: *since 2015, since Monday.*",
            "*I've lived here **for** five years. · We've known them **since** 2015.*",
          ].join("\n"),
          exercise: {
            id: "c3u2l3-ex",
            title: "Practice: for / since",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u2l3-q1",
                  type: "multiple_choice",
                  prompt: "I've lived here ___ five years.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "for" },
                      { id: "b", text: "since" },
                      { id: "c", text: "from" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A period → **for** five years.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l3-q2",
                  type: "open",
                  prompt: "“We've known each other ___ 2015.” (for / since)",
                  points: 1,
                  config: { acceptedAnswers: ["since"], charLimit: 8 },
                  explanation: "A starting point → **since** 2015.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l3-q3",
                  type: "true_false",
                  prompt: "We use “since” with a period like “three days”.",
                  points: 1,
                  config: { correct: false },
                  explanation: "A period uses **for**: *for three days.*",
                },
              },
            ],
          },
        },
        // ---- L4: present perfect vs simple past ----
        {
          id: "c3u2l4",
          slug: "perfect-vs-past",
          title: "Then vs. now",
          topic: "present perfect vs. simple past",
          grammarNote: [
            "Use the **present perfect** when the **time is unfinished or not stated**:",
            "*I **have seen** that film.*",
            "Use the **simple past** when the time is **finished and known** (yesterday, last week,",
            "in 2019, … ago):",
            "*I **saw** it **yesterday**.*",
          ].join("\n"),
          exercise: {
            id: "c3u2l4-ex",
            title: "Practice: which past?",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u2l4-q1",
                  type: "multiple_choice",
                  prompt: "I ___ him last week.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "have seen" },
                      { id: "b", text: "saw" },
                      { id: "c", text: "have saw" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*Last week* = finished time → **saw**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l4-q2",
                  type: "open",
                  prompt: "Finished time: “She ___ to Rome in 2019.” (went / has gone)",
                  points: 1,
                  config: { acceptedAnswers: ["went"], charLimit: 10 },
                  explanation: "*In 2019* is finished → **went**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l4-q3",
                  type: "true_false",
                  prompt: "We use the present perfect with “yesterday”.",
                  points: 1,
                  config: { correct: false },
                  explanation: "*Yesterday* is finished time → **simple past**.",
                },
              },
            ],
          },
        },
        // ---- L5: just / already / yet ----
        {
          id: "c3u2l5",
          slug: "just-already-yet",
          title: "Just, already, yet",
          topic: "present perfect · just / already / yet",
          grammarNote: [
            "- **just** = a very short time ago: *I've **just** eaten.*",
            "- **already** = sooner than expected (positive): *She's **already** left.*",
            "- **yet** = up to now, in **questions** and **negatives**, at the end:",
            "  *Have you finished **yet**? · I haven't started **yet**.*",
          ].join("\n"),
          exercise: {
            id: "c3u2l5-ex",
            title: "Practice: just / already / yet",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u2l5-q1",
                  type: "multiple_choice",
                  prompt: "I've ___ finished — only a minute ago.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "just" },
                      { id: "b", text: "yet" },
                      { id: "c", text: "ever" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A very short time ago → **just**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l5-q2",
                  type: "open",
                  prompt: "“Have you eaten ___?” (at the end of a question, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["yet"], charLimit: 6 },
                  explanation: "Questions use **yet** at the end.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u2l5-q3",
                  type: "speaking",
                  prompt: "Say what you’ve just done:",
                  points: 1,
                  config: {
                    target: "I have just finished my work.",
                    acceptedAnswers: [
                      "i have just finished my work",
                      "ive just finished my work",
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
    // ============================== UNIT 3 ==============================
    {
      id: "c3u3",
      slug: "3",
      number: 3,
      title: "What If?",
      summary:
        "Talk about results and possibilities — what always happens, what will happen if, and what you'd rather do.",
      lessons: [
        // ---- L1: zero conditional ----
        {
          id: "c3u3l1",
          slug: "zero-conditional",
          title: "If it's true, it happens",
          topic: "zero conditional · general truths",
          grammarNote: [
            "The **zero conditional** describes a **general truth** — something that is always",
            "true. Both parts use the **present simple**:",
            "**If + present simple, present simple.**",
            "*If you **heat** ice, it **melts**. · Plants **die** if they **don't get** water.*",
            "",
            "It's not about the future — it's about what's always so.",
          ].join("\n"),
          exercise: {
            id: "c3u3l1-ex",
            title: "Practice: always true",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u3l1-q1",
                  type: "multiple_choice",
                  prompt: "If you heat ice, it ___.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "will melt" },
                      { id: "b", text: "melts" },
                      { id: "c", text: "melted" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "General truth → present simple: it **melts**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l1-q2",
                  type: "open",
                  prompt: "Water ___ at 100°C if you heat it. (boil)",
                  points: 1,
                  config: { acceptedAnswers: ["boils"], charLimit: 8 },
                  explanation: "*Water* (singular) → **boils**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l1-q3",
                  type: "true_false",
                  prompt: "The zero conditional talks about the future.",
                  points: 1,
                  config: { correct: false },
                  explanation: "It states a **general truth** — always true, not just future.",
                },
              },
            ],
          },
        },
        // ---- L2: first conditional ----
        {
          id: "c3u3l2",
          slug: "first-conditional",
          title: "If it happens, I will",
          topic: "first conditional · real future",
          grammarNote: [
            "The **first conditional** talks about a **real, likely future** result:",
            "**If + present simple, will + base verb.**",
            "*If it **rains** tomorrow, we **will stay** home. · I **will call** you if I **have** time.*",
            "",
            "⚠️ No **will** in the *if*-part: *If it **will rain**…* ✗ → *If it **rains**…* ✓",
          ].join("\n"),
          exercise: {
            id: "c3u3l2-ex",
            title: "Practice: real future",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u3l2-q1",
                  type: "multiple_choice",
                  prompt: "If it rains tomorrow, we ___ at home.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "will stay" },
                      { id: "b", text: "stay" },
                      { id: "c", text: "stayed" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Result of a real future → **will stay**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l2-q2",
                  type: "open",
                  prompt: "If you study, you ___ pass the exam. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["will"], charLimit: 6 },
                  explanation: "Result clause → **will** pass.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l2-q3",
                  type: "true_false",
                  prompt: "“If I will see her, I'll tell her.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "No *will* in the *if*-part: *If I **see** her, I'll tell her.*",
                },
              },
            ],
          },
        },
        // ---- L3: connectors ----
        {
          id: "c3u3l3",
          slug: "connectors",
          title: "Unless, as long as, in case",
          topic: "conditional connectors",
          grammarNote: [
            "Other words join conditions to results:",
            "- **unless** = *if not*: *I won't go **unless** you come.*",
            "- **as long as** = *only if*: *You can stay **as long as** you're quiet.*",
            "- **in case** = *as a precaution*: *Take an umbrella **in case** it rains.*",
            "- **when** = it will **definitely** happen (not just *if*): *Call me **when** you arrive.*",
          ].join("\n"),
          exercise: {
            id: "c3u3l3-ex",
            title: "Practice: connectors",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u3l3-q1",
                  type: "multiple_choice",
                  prompt: "___ you hurry, you'll miss the bus.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Unless" },
                      { id: "b", text: "As long as" },
                      { id: "c", text: "In case" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Unless* = *if not*: if you don't hurry, you'll miss it.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l3-q2",
                  type: "open",
                  prompt: "Take an umbrella ___ case it rains. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["in"], charLimit: 6 },
                  explanation: "**in case** = as a precaution.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l3-q3",
                  type: "match",
                  prompt: "Match each connector to its meaning:",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "unless", right: "if not" },
                      { left: "as long as", right: "only if" },
                      { left: "in case", right: "as a precaution" },
                    ],
                  },
                  explanation: "unless = if not · as long as = only if · in case = a precaution.",
                },
              },
            ],
          },
        },
        // ---- L4: first conditional + modals ----
        {
          id: "c3u3l4",
          slug: "conditional-modals",
          title: "If…, you should",
          topic: "first conditional + modals",
          grammarNote: [
            "In the **result** of a first conditional you can use a **modal** instead of *will*",
            "to give advice or talk about ability/possibility:",
            "*If you feel sick, you **should** see a doctor. · If you finish early, you **can** go home.*",
            "",
            "The *if*-part stays present simple; the modal goes in the result.",
          ].join("\n"),
          exercise: {
            id: "c3u3l4-ex",
            title: "Practice: advice with if",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u3l4-q1",
                  type: "multiple_choice",
                  prompt: "If you feel sick, you ___ see a doctor.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "should" },
                      { id: "b", text: "are" },
                      { id: "c", text: "did" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Advice in the result → **should** see a doctor.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l4-q2",
                  type: "open",
                  prompt: "If you finish early, you ___ go home. (ability, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["can"], charLimit: 6 },
                  explanation: "Permission/ability → **can** go home.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l4-q3",
                  type: "speaking",
                  prompt: "Say a first-conditional sentence:",
                  points: 1,
                  config: {
                    target: "If you study hard, you will succeed.",
                    acceptedAnswers: [
                      "if you study hard you will succeed",
                      "if you study hard youll succeed",
                    ],
                    maxSeconds: 10,
                  },
                },
              },
            ],
          },
        },
        // ---- L5: preferences ----
        {
          id: "c3u3l5",
          slug: "preferences",
          title: "What I'd rather do",
          topic: "preferences · would rather / prefer / better",
          grammarNote: [
            "Say what you prefer or what's wise:",
            "- **'d rather + base verb** = prefer: *I'**d rather** stay home.*",
            "- **'d prefer to + base verb**: *I'**d prefer to** walk.*",
            "- **'d like to + base verb** = want: *I'**d like to** travel.*",
            "- **'d better + base verb** = strong advice/warning: *You'**d better** hurry.*",
          ].join("\n"),
          exercise: {
            id: "c3u3l5-ex",
            title: "Practice: preferences",
            items: [
              {
                kind: "content",
                content: {
                  id: "c3u3l5-a1",
                  type: "audio",
                  title: "Listen: tonight's plan",
                  transcript:
                    "I'd rather stay home tonight. I'm a bit tired, and I'd prefer to watch a movie than go out.",
                  voice: "en-US-AriaNeural",
                  mediaUrl: "/audio/c3u3l5-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l5-q4",
                  type: "true_false",
                  prompt: "From the audio: the speaker would rather go out tonight.",
                  points: 1,
                  config: { correct: false },
                  explanation: "They'd **rather stay home** and watch a movie.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l5-q1",
                  type: "multiple_choice",
                  prompt: "I'd rather ___ at home tonight.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "to stay" },
                      { id: "b", text: "stay" },
                      { id: "c", text: "staying" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*'d rather* + **base verb** (no *to*): rather **stay**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l5-q2",
                  type: "open",
                  prompt: "You'd ___ hurry, or you'll be late. (strong advice, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["better"], charLimit: 8 },
                  explanation: "*'d **better*** = strong advice/warning.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u3l5-q3",
                  type: "true_false",
                  prompt: "“I'd rather to go.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "*'d rather* takes the **base verb**: *I'd rather **go**.*",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 4 ==============================
    {
      id: "c3u4",
      slug: "4",
      number: 4,
      title: "What Should I Do?",
      summary:
        "Handle advice, rules, possibility and polite requests — and look back at the past with modals.",
      lessons: [
        // ---- L1: advice & obligation ----
        {
          id: "c3u4l1",
          slug: "advice-obligation",
          title: "Should and have to",
          topic: "modals · should / have to",
          grammarNote: [
            "- **should + base verb** = **advice** (a good idea): *You **should** rest.*",
            "- **have to / has to + base verb** = **obligation** (a rule from outside):",
            "  *I **have to** work on Saturday. · She **has to** wear a uniform.*",
            "",
            "*Should* is softer; *have to* is a real requirement.",
          ].join("\n"),
          exercise: {
            id: "c3u4l1-ex",
            title: "Practice: advice vs. obligation",
            items: [
              {
                kind: "content",
                content: {
                  id: "c3u4l1-a1",
                  type: "audio",
                  title: "Listen: some advice",
                  transcript:
                    "You look really tired. I think you should take a break. And you have to drink more water. It's important.",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/c3u4l1-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l1-q4",
                  type: "multiple_choice",
                  prompt: "From the audio, what does the speaker advise?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Take a break" },
                      { id: "b", text: "Work harder" },
                      { id: "c", text: "Go running" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“I think you **should take a break**.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l1-q1",
                  type: "multiple_choice",
                  prompt: "You ___ wear a seatbelt — it's the law.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "should" },
                      { id: "b", text: "have to" },
                      { id: "c", text: "would" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "A law = obligation → **have to**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l1-q2",
                  type: "open",
                  prompt: "You look tired. You ___ rest. (advice, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["should"], charLimit: 8 },
                  explanation: "A good idea → **should** rest.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l1-q3",
                  type: "true_false",
                  prompt: "“Should” is a stronger obligation than “have to”.",
                  points: 1,
                  config: { correct: false },
                  explanation: "*Have to* is stronger (a real rule); *should* is advice.",
                },
              },
            ],
          },
        },
        // ---- L2: rules (must / mustn't) ----
        {
          id: "c3u4l2",
          slug: "rules",
          title: "Must and mustn't",
          topic: "modals · must / mustn't",
          grammarNote: [
            "- **must + base verb** = strong obligation/rule: *You **must** sign in.*",
            "- **mustn't + base verb** = **prohibition** — *don't do it!*: *You **mustn't** smoke here.*",
            "",
            "⚠️ **mustn't** ≠ **don't have to**. *Mustn't* = forbidden; *don't have to* = not necessary.",
          ].join("\n"),
          exercise: {
            id: "c3u4l2-ex",
            title: "Practice: rules",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u4l2-q1",
                  type: "multiple_choice",
                  prompt: "You ___ smoke here — it's forbidden.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "mustn't" },
                      { id: "b", text: "don't have to" },
                      { id: "c", text: "should" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Forbidden → **mustn't**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l2-q2",
                  type: "open",
                  prompt: "Visitors ___ sign in at the desk. (strong rule, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["must"], charLimit: 6 },
                  explanation: "A strong rule → **must** sign in.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l2-q3",
                  type: "true_false",
                  prompt: "“You mustn't do it” means it isn't necessary.",
                  points: 1,
                  config: { correct: false },
                  explanation: "*Mustn't* = **forbidden**. *Not necessary* = *don't have to*.",
                },
              },
            ],
          },
        },
        // ---- L3: possibility (may / might / need to) ----
        {
          id: "c3u4l3",
          slug: "possibility",
          title: "May, might, need to",
          topic: "modals · possibility & necessity",
          grammarNote: [
            "- **may / might + base verb** = **possibility** (maybe yes, maybe no):",
            "  *It **might** rain later. · She **may** be at home.*",
            "- **need to + base verb** = it's **necessary**: *I **need to** buy milk.*",
            "",
            "*May* and *might* are almost the same here — both mean *perhaps*.",
          ].join("\n"),
          exercise: {
            id: "c3u4l3-ex",
            title: "Practice: maybe",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u4l3-q1",
                  type: "multiple_choice",
                  prompt: "It's cloudy — it ___ rain later.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "might" },
                      { id: "b", text: "must" },
                      { id: "c", text: "can't" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Possibility → **might** rain.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l3-q2",
                  type: "open",
                  prompt: "I'm not sure. I ___ go to the party. (possibility — may / might)",
                  points: 1,
                  config: { acceptedAnswers: ["may", "might"], charLimit: 8 },
                  explanation: "Either **may** or **might** = perhaps.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l3-q3",
                  type: "true_false",
                  prompt: "“It might snow” means it will definitely snow.",
                  points: 1,
                  config: { correct: false },
                  explanation: "*Might* = **possibility**, not certainty.",
                },
              },
            ],
          },
        },
        // ---- L4: polite requests ----
        {
          id: "c3u4l4",
          slug: "requests",
          title: "Could you, would you",
          topic: "modals · polite requests",
          grammarNote: [
            "To ask politely, use **could** or **would** instead of plain *can*:",
            "*__Could__ you help me, please? · __Would__ you open the window?*",
            "*__Would__ you mind + -ing?* is very polite: *Would you mind **waiting**?*",
            "",
            "*Can you…?* is fine with friends; *Could/Would you…?* is more polite.",
          ].join("\n"),
          exercise: {
            id: "c3u4l4-ex",
            title: "Practice: asking nicely",
            items: [
              {
                kind: "question",
                question: {
                  id: "c3u4l4-q1",
                  type: "multiple_choice",
                  prompt: "___ you help me, please? (polite)",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Could" },
                      { id: "b", text: "Do" },
                      { id: "c", text: "Are" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Polite request → **Could** you help me?",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l4-q2",
                  type: "open",
                  prompt: "___ you mind opening the window? (very polite, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["would"], charLimit: 8 },
                  explanation: "*__Would__ you mind + -ing?* is very polite.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l4-q3",
                  type: "speaking",
                  prompt: "Ask for something politely:",
                  points: 1,
                  config: {
                    target: "Could you help me, please?",
                    acceptedAnswers: [
                      "could you help me please",
                      "could you help me",
                    ],
                    maxSeconds: 8,
                  },
                },
              },
            ],
          },
        },
        // ---- L5: modal + have (looking back) ----
        {
          id: "c3u4l5",
          slug: "modals-past",
          title: "Looking back",
          topic: "modal + have · past deduction & regret",
          grammarNote: [
            "Use **modal + have + past participle** to talk about the past:",
            "- **must have** = logical deduction: *The ground's wet — it **must have** rained.*",
            "- **should have** = regret/criticism (you didn't): *I **should have** called you.*",
            "- **might have** = past possibility: *She **might have** forgotten.*",
          ].join("\n"),
          exercise: {
            id: "c3u4l5-ex",
            title: "Practice: looking back",
            items: [
              {
                kind: "content",
                content: {
                  id: "c3u4l5-c1",
                  type: "reading",
                  emoji: "🔎",
                  title: "The empty kitchen",
                  body: "When Maya got home, the door was open and the lights were on. Someone must have come in. The cake was gone — her brother might have eaten it. “I should have locked the door,” she thought.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l5-q1",
                  type: "multiple_choice",
                  prompt: "The ground is wet. It ___ rained.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "must have" },
                      { id: "b", text: "should have" },
                      { id: "c", text: "must" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A logical deduction about the past → **must have** rained.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l5-q2",
                  type: "open",
                  prompt: "I'm sorry — I ___ have called you earlier. (regret, one word)",
                  points: 1,
                  config: { acceptedAnswers: ["should"], charLimit: 8 },
                  explanation: "Regret about the past → **should** have called.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c3u4l5-q3",
                  type: "true_false",
                  prompt: "“I should have studied” means I studied.",
                  points: 1,
                  config: { correct: false },
                  explanation: "It means you **didn't** — and you regret it.",
                },
              },
            ],
          },
        },
      ],
    },
  ],
  finalTest: {
    id: "c3-final",
    slug: "final-test",
    title: "Level 3 review",
    intro:
      "A check across all four units — past continuous, present perfect, conditionals, and modals. Score 12 of 16 to earn your Level 3 diploma.",
    passingScore: 12,
    exercise: {
      id: "c3-final-ex",
      title: "Level 3 final",
      items: [
        {
          kind: "question",
          question: {
            id: "c3-final-q1",
            type: "multiple_choice",
            prompt: "This time yesterday, I ___ on the train.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "was reading" },
                { id: "b", text: "were reading" },
                { id: "c", text: "am reading" },
              ],
              correctIds: ["a"],
            },
            explanation: "*I* → **was** reading.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q2",
            type: "open",
            prompt: "-ing form of **sit**: ___",
            points: 1,
            config: { acceptedAnswers: ["sitting"], charLimit: 10 },
            explanation: "Double the *t*: **sitting**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q3",
            type: "open",
            prompt: "Join: “I was cooking ___ the phone rang.” (one word)",
            points: 1,
            config: { acceptedAnswers: ["when"], charLimit: 6 },
            explanation: "**when** = the interruption.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q4",
            type: "multiple_choice",
            prompt: "___ I was reading, she was writing.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "While" },
                { id: "b", text: "Yet" },
                { id: "c", text: "Since" },
              ],
              correctIds: ["a"],
            },
            explanation: "Two actions at once → **While**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q5",
            type: "multiple_choice",
            prompt: "They ___ finished the project.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "has" },
                { id: "b", text: "have" },
                { id: "c", text: "is" },
              ],
              correctIds: ["b"],
            },
            explanation: "*They* → **have** finished.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q6",
            type: "open",
            prompt: "Past participle of **do**: ___",
            points: 1,
            config: { acceptedAnswers: ["done"], charLimit: 8 },
            explanation: "Irregular: **done** (have done).",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q7",
            type: "multiple_choice",
            prompt: "___ you ever ridden a horse?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "Did" },
                { id: "b", text: "Have" },
                { id: "c", text: "Were" },
              ],
              correctIds: ["b"],
            },
            explanation: "Experience question → **Have** you ever…?",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q8",
            type: "open",
            prompt: "“We've been friends ___ 2010.” (for / since)",
            points: 1,
            config: { acceptedAnswers: ["since"], charLimit: 8 },
            explanation: "A starting point → **since**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q9",
            type: "multiple_choice",
            prompt: "I ___ that film last night.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "have watched" },
                { id: "b", text: "watched" },
                { id: "c", text: "have watch" },
              ],
              correctIds: ["b"],
            },
            explanation: "*Last night* = finished → **watched**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q10",
            type: "open",
            prompt: "“Have you started ___?” (negative/question word, one word)",
            points: 1,
            config: { acceptedAnswers: ["yet"], charLimit: 6 },
            explanation: "Questions use **yet** at the end.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q11",
            type: "multiple_choice",
            prompt: "If you heat water, it ___.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "will boil" },
                { id: "b", text: "boils" },
                { id: "c", text: "boiled" },
              ],
              correctIds: ["b"],
            },
            explanation: "Zero conditional (general truth) → **boils**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q12",
            type: "open",
            prompt: "If it rains tomorrow, we ___ stay home. (one word)",
            points: 1,
            config: { acceptedAnswers: ["will"], charLimit: 6 },
            explanation: "First conditional result → **will** stay.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q13",
            type: "multiple_choice",
            prompt: "___ you hurry, you'll be late.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "Unless" },
                { id: "b", text: "In case" },
                { id: "c", text: "As long as" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Unless* = *if not*: if you don't hurry, you'll be late.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q14",
            type: "multiple_choice",
            prompt: "You ___ smoke here — it's against the rules.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "don't have to" },
                { id: "b", text: "mustn't" },
                { id: "c", text: "should" },
              ],
              correctIds: ["b"],
            },
            explanation: "Forbidden → **mustn't**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q15",
            type: "open",
            prompt: "It's cloudy; it ___ rain later. (possibility — may / might)",
            points: 1,
            config: { acceptedAnswers: ["might", "may"], charLimit: 8 },
            explanation: "Possibility → **might** (or **may**) rain.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c3-final-q16",
            type: "multiple_choice",
            prompt: "The grass is wet. It ___ rained.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "should have" },
                { id: "b", text: "must have" },
                { id: "c", text: "must" },
              ],
              correctIds: ["b"],
            },
            explanation: "A logical deduction about the past → **must have** rained.",
          },
        },
      ],
    },
  },
  conclusion: {
    title: "You finished Level 3!",
    body:
      "This is a big step. You can describe the past in progress (**past continuous**), talk about experience up to now (**present perfect**), imagine results (**conditionals**), and give advice, rules, and polite requests (**modals**). These are the tools real conversations are built on — keep using them and they'll feel natural.",
    nextSteps: [
      "Describe what you were doing at 8 p.m. last night, out loud.",
      "Say three things you have done this year.",
      "Make a first-conditional plan: “If it's sunny tomorrow, I'll…”",
      "Give a friend three pieces of advice using should / could / must.",
    ],
  },
  diploma: {
    title: "VillaAula Telling More Diploma",
    subtitle: "Level 3 (B1)",
    issuer: "VillaAula",
  },
};
