import type { Course } from "@/lib/types";

/**
 * Level 3 — B1, authored from the real program spine (reference/s3u1–s3u4, captured
 * in CURRICULA_SPINE.md). 100% original content (HANDOFF §9).
 *
 * Arc: Unit 1 the past in progress (past continuous) → Unit 2 experience up to now
 * (present perfect) → Unit 3 conditionals & preferences → Unit 4 modals.
 *
 * NOTE: Units 1–2 authored; Units 3–4 + the full final test land in the next pass.
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
  ],
  finalTest: {
    id: "c3-final",
    slug: "final-test",
    title: "Level 3 review",
    intro:
      "A quick check across Units 1 and 2 — the past in progress and experience up to now. (Units 3 and 4 are on the way.) Score 8 of 10 to keep going.",
    passingScore: 8,
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
      ],
    },
  },
  conclusion: {
    title: "Halfway through Level 3",
    body:
      "You can describe the past in progress and talk about experience up to now — past continuous and present perfect are two of the most useful tenses in English. Next, Units 3 and 4 take you into the **imagined** and the **advisable**: conditionals and modals.",
    nextSteps: [
      "Describe what you were doing at 8 p.m. last night, out loud.",
      "Say three things you have done this year.",
      "Notice for / since and just / already / yet when you read English.",
    ],
  },
  diploma: {
    title: "WISHUB Telling More Diploma",
    subtitle: "Level 3 (B1)",
    issuer: "WISHUB",
  },
};
