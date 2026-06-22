import type { Course } from "@/lib/types";

/**
 * Level 2 — "Everyday Stories" (A2). Level 1 covered the full beginner spine
 * (to be → articles → present tenses → comparatives). Level 2 moves time around:
 * the past (was/were, regular + irregular, did), the future (going to, will), and
 * talking about quantity (some/any, how much/how many). 100% original content
 * (HANDOFF §9): we follow the universal CEFR progression, nothing copied.
 */
export const level2: Course = {
  id: "level-2",
  slug: "2",
  level: 2,
  title: "Everyday Stories",
  intro:
    "You can talk about now — so let's move through time. In Level 2 you'll tell people what happened yesterday, what you're going to do tomorrow, and how much of everything you need. Same short exercises, same instant feedback, a little more to say.",
  acceptsGuests: true,
  units: [
    {
      id: "l2-u1",
      slug: "1",
      number: 1,
      title: "Back in time",
      summary:
        "Talk about the past: was and were, regular and irregular verbs, and asking what happened.",
      lessons: [
        // ---------------------------------------------------------------- L1
        {
          id: "l2-u1-l1",
          slug: "was-were",
          title: "Was and were",
          topic: "past of to be",
          grammarNote: [
            "The past of **to be** has just two shapes:",
            "",
            "- I / he / she / it → **was**",
            "- you / we / they → **were**",
            "",
            "Make it negative with **not**: *wasn't*, *weren't*.",
            "Ask by moving the verb first: **Were you at home?** · **Was it cold?**",
          ].join("\n"),
          exercise: {
            id: "l2-u1-l1-ex",
            title: "Practice: was / were",
            items: [
              {
                kind: "content",
                content: {
                  id: "l2-u1-a1",
                  type: "audio",
                  title: "Listen: last weekend",
                  transcript:
                    "Last weekend was great. We were at the beach on Saturday, and the weather was warm and sunny.",
                  voice: "en-US-AndrewNeural",
                  mediaUrl: "/audio/l2-u1-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l1-q0",
                  type: "open",
                  prompt: "From the audio: the weather was warm and ___.",
                  points: 1,
                  config: { acceptedAnswers: ["sunny"], charLimit: 10 },
                  explanation: "“…warm and **sunny**.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l1-q1",
                  type: "multiple_choice",
                  prompt: "Yesterday I ___ at the park.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "was" },
                      { id: "b", text: "were" },
                      { id: "c", text: "am" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "**I** takes **was** in the past.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l1-q2",
                  type: "open",
                  prompt: "Complete: They ___ very happy with the news.",
                  points: 1,
                  config: { acceptedAnswers: ["were"], charLimit: 8 },
                  explanation: "**they** → **were**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l1-q3",
                  type: "true_false",
                  prompt: "“She were at school.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "It should be **she was**. He/she/it take *was*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l1-q4",
                  type: "multiple_choice",
                  prompt: "Choose the question: ___ you tired last night?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Was" },
                      { id: "b", text: "Were" },
                      { id: "c", text: "Did" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "With **you**, ask **Were you…?**",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L2
        {
          id: "l2-u1-l2",
          slug: "past-regular",
          title: "Regular past verbs",
          topic: "-ed endings",
          grammarNote: [
            "For most past verbs, add **-ed**: *work → worked*, *play → played*.",
            "",
            "Small spelling rules:",
            "- ends in **-e** → add **-d**: *like → liked*",
            "- consonant + **-y** → **-ied**: *study → studied*",
            "- short vowel + one consonant → double it: *stop → stopped*",
          ].join("\n"),
          exercise: {
            id: "l2-u1-l2-ex",
            title: "Practice: -ed verbs",
            items: [
              {
                kind: "question",
                question: {
                  id: "l2-u1-l2-q1",
                  type: "open",
                  prompt: "Past of **play**: Yesterday we ___ football.",
                  points: 1,
                  config: { acceptedAnswers: ["played"], charLimit: 10 },
                  explanation: "*play* + **-ed** = **played**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l2-q2",
                  type: "multiple_choice",
                  prompt: "Past of **study**:",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "studyed" },
                      { id: "b", text: "studied" },
                      { id: "c", text: "studed" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "consonant + **-y** → **-ied**: *studied*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l2-q3",
                  type: "open",
                  prompt: "Past of **stop**: The bus ___ near my house.",
                  points: 1,
                  config: { acceptedAnswers: ["stopped"], charLimit: 10 },
                  explanation: "short vowel + one consonant → double it: **stopped**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l2-q4",
                  type: "true_false",
                  prompt: "The past of **like** is *liked*.",
                  points: 1,
                  config: { correct: true },
                  explanation: "It ends in **-e**, so we just add **-d**: *liked*.",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L3
        {
          id: "l2-u1-l3",
          slug: "past-irregular",
          title: "Irregular past verbs",
          topic: "go → went, etc.",
          grammarNote: [
            "Many common verbs don't take **-ed** — you learn their past by heart:",
            "",
            "- go → **went**",
            "- have → **had**",
            "- see → **saw**",
            "- eat → **ate**",
            "- make → **made**",
            "- get → **got**",
          ].join("\n"),
          exercise: {
            id: "l2-u1-l3-ex",
            title: "Practice: irregular verbs",
            items: [
              {
                kind: "content",
                content: {
                  id: "l2-u1-l3-c1",
                  type: "reading",
                  emoji: "🌮",
                  title: "A small trip",
                  body: "Last Saturday we went to the market. We saw fresh fruit and ate tacos. My mom made coffee at home and we had a slow morning.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l3-q1",
                  type: "open",
                  prompt: "From the reading — past of **go**: We ___ to the market.",
                  points: 1,
                  config: { acceptedAnswers: ["went"], charLimit: 8 },
                  explanation: "go → **went**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l3-q2",
                  type: "match",
                  prompt: "Match each verb to its past form.",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "see", right: "saw" },
                      { left: "eat", right: "ate" },
                      { left: "have", right: "had" },
                      { left: "make", right: "made" },
                    ],
                  },
                  explanation: "These are irregular — no **-ed**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l3-q3",
                  type: "multiple_choice",
                  prompt: "Past of **get**: I ___ a new phone last week.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "getted" },
                      { id: "b", text: "got" },
                      { id: "c", text: "gotted" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "get → **got**.",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L4
        {
          id: "l2-u1-l4",
          slug: "past-questions",
          title: "Did and didn't",
          topic: "past questions & negatives",
          grammarNote: [
            "For questions and negatives in the past, use **did** + the **base verb**:",
            "",
            "- Question: **Did you go** to school? (not *Did you went*)",
            "- Negative: I **didn't go**. (didn't = did not)",
            "",
            "The main verb goes back to its base form — **did** already shows the past.",
          ].join("\n"),
          exercise: {
            id: "l2-u1-l4-ex",
            title: "Practice: did / didn't",
            items: [
              {
                kind: "question",
                question: {
                  id: "l2-u1-l4-q1",
                  type: "multiple_choice",
                  prompt: "Choose the correct question: ___ you ___ breakfast?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Did … eat" },
                      { id: "b", text: "Did … ate" },
                      { id: "c", text: "Was … eat" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "After **did**, use the base verb: **Did you eat?**",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l4-q2",
                  type: "open",
                  prompt: "Make it negative: “He ___ (not) call me.” → He ___ call me.",
                  hint: "did + not, in one word",
                  points: 1,
                  config: { acceptedAnswers: ["didn't", "did not", "didnt"], charLimit: 10 },
                  explanation: "**didn't** + base verb: *He didn't call me.*",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l4-q3",
                  type: "true_false",
                  prompt: "“Did she went home?” is correct English.",
                  points: 1,
                  config: { correct: false },
                  explanation: "After **did**, use the base verb: *Did she **go** home?*",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u1-l4-q4",
                  type: "open",
                  prompt: "Complete with the base verb: I didn't ___ (see) the message.",
                  points: 1,
                  config: { acceptedAnswers: ["see"], charLimit: 8 },
                  explanation: "After **didn't**, use the base form: **see**.",
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: "l2-u2",
      slug: "2",
      number: 2,
      title: "What's next",
      summary:
        "Talk about the future with going to and will, and say how much or how many you need.",
      lessons: [
        // ---------------------------------------------------------------- L1
        {
          id: "l2-u2-l1",
          slug: "going-to",
          title: "Be going to",
          topic: "plans & intentions",
          grammarNote: [
            "Use **be going to** for plans you've already decided:",
            "",
            "- **am / is / are** + **going to** + base verb",
            "- *I'm going to study tonight.* · *She's going to travel in July.*",
            "",
            "Ask by moving *am/is/are* first: **Are you going to come?**",
          ].join("\n"),
          exercise: {
            id: "l2-u2-l1-ex",
            title: "Practice: going to",
            items: [
              {
                kind: "content",
                content: {
                  id: "l2-u2-a1",
                  type: "audio",
                  title: "Listen: my plan",
                  transcript:
                    "Next month I'm going to start a new class. My sister is going to help me, and we're going to practice every evening.",
                  voice: "en-US-AriaNeural",
                  mediaUrl: "/audio/l2-u2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l1-q0",
                  type: "open",
                  prompt: "From the audio: they're going to practice every ___.",
                  points: 1,
                  config: { acceptedAnswers: ["evening"], charLimit: 12 },
                  explanation: "“…practice every **evening**.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l1-q1",
                  type: "open",
                  prompt: "Complete: She ___ going to visit her family.",
                  points: 1,
                  config: { acceptedAnswers: ["is", "'s"], charLimit: 6 },
                  explanation: "**she is** going to… → *She's going to visit.*",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l1-q2",
                  type: "multiple_choice",
                  prompt: "Which sentence is correct?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "I going to sleep." },
                      { id: "b", text: "I'm going to sleep." },
                      { id: "c", text: "I'm going to sleeping." },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "**be** + going to + **base verb**: *I'm going to sleep.*",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l1-q3",
                  type: "true_false",
                  prompt: "We use **going to** for plans we have already decided.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Yes — *going to* fits decided plans and intentions.",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L2
        {
          id: "l2-u2-l2",
          slug: "will",
          title: "Will and won't",
          topic: "predictions & quick decisions",
          grammarNote: [
            "Use **will** + base verb for predictions and decisions made *right now*:",
            "",
            "- *I think it **will** rain.* (prediction)",
            "- *I'm tired — I**'ll** stay home.* (decision in the moment)",
            "",
            "Negative: **won't** (= will not). It's the same for every subject.",
          ].join("\n"),
          exercise: {
            id: "l2-u2-l2-ex",
            title: "Practice: will / won't",
            items: [
              {
                kind: "question",
                question: {
                  id: "l2-u2-l2-q1",
                  type: "multiple_choice",
                  prompt: "Pick the prediction: Maybe it ___ be sunny tomorrow.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "will" },
                      { id: "b", text: "is going" },
                      { id: "c", text: "was" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "**will** + base verb for a prediction: *will be*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l2-q2",
                  type: "open",
                  prompt: "Negative of will, in one word: I ___ tell anyone. (will not)",
                  points: 1,
                  config: { acceptedAnswers: ["won't", "will not", "wont"], charLimit: 10 },
                  explanation: "**won't** = will not.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l2-q3",
                  type: "true_false",
                  prompt: "“She will to call you.” is correct English.",
                  points: 1,
                  config: { correct: false },
                  explanation: "No *to* after will: *She **will call** you.*",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L3
        {
          id: "l2-u2-l3",
          slug: "some-any",
          title: "Some and any",
          topic: "countable / uncountable",
          grammarNote: [
            "Some nouns you can count (**a book, two books**); some you can't (**water, rice, money**).",
            "",
            "- **some** → in positive sentences: *I have **some** water.*",
            "- **any** → in questions and negatives: *Is there **any** milk?* · *I don't have **any** money.*",
          ].join("\n"),
          exercise: {
            id: "l2-u2-l3-ex",
            title: "Practice: some / any",
            items: [
              {
                kind: "question",
                question: {
                  id: "l2-u2-l3-q1",
                  type: "multiple_choice",
                  prompt: "Positive sentence: There is ___ bread on the table.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "some" },
                      { id: "b", text: "any" },
                      { id: "c", text: "a" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Positive sentence → **some**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l3-q2",
                  type: "open",
                  prompt: "Question: Is there ___ sugar? (some/any)",
                  points: 1,
                  config: { acceptedAnswers: ["any"], charLimit: 6 },
                  explanation: "Questions usually take **any**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l3-q3",
                  type: "true_false",
                  prompt: "“Money” is a noun you usually count one by one (one money, two moneys).",
                  points: 1,
                  config: { correct: false },
                  explanation: "**Money** is uncountable — we don't say *moneys*.",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L4
        {
          id: "l2-u2-l4",
          slug: "how-much-many",
          title: "How much, how many",
          topic: "asking about quantity",
          grammarNote: [
            "Ask about amount with:",
            "",
            "- **How many** + things you can count: *How **many** apples?*",
            "- **How much** + things you can't count: *How **much** water?*",
            "",
            "Useful amounts: **a lot of** (big), **a few** (some, countable), **a little** (some, uncountable).",
          ].join("\n"),
          exercise: {
            id: "l2-u2-l4-ex",
            title: "Practice: how much / how many",
            items: [
              {
                kind: "question",
                question: {
                  id: "l2-u2-l4-q1",
                  type: "multiple_choice",
                  prompt: "___ students are in your class?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "How much" },
                      { id: "b", text: "How many" },
                      { id: "c", text: "How long" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Students are countable → **How many**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l4-q2",
                  type: "open",
                  prompt: "Uncountable: ___ much water do you drink? (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["how"], charLimit: 6 },
                  explanation: "**How much** water — water is uncountable.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-u2-l4-q3",
                  type: "match",
                  prompt: "Match the amount to the noun it fits.",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "a few", right: "apples" },
                      { left: "a little", right: "milk" },
                    ],
                  },
                  explanation: "**a few** + countable, **a little** + uncountable.",
                },
              },
            ],
          },
        },
      ],
    },
  ],
  finalTest: {
    id: "level-2-final",
    slug: "final-test",
    title: "Level 2 Final Check",
    intro:
      "A compact review of Everyday Stories — past, future, and quantity. Answer each item, retry anything that doesn't click, then unlock your Level 2 diploma.",
    passingScore: 8,
    exercise: {
      id: "level-2-final-ex",
      title: "Final check",
      items: [
        {
          kind: "question",
          question: {
            id: "l2-final-q1",
            type: "multiple_choice",
            prompt: "We ___ at the beach yesterday.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "was" },
                { id: "b", text: "were" },
                { id: "c", text: "are" },
              ],
              correctIds: ["b"],
            },
            explanation: "**we** → **were**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q2",
            type: "open",
            prompt: "Past of **study**: She ___ all weekend.",
            points: 1,
            config: { acceptedAnswers: ["studied"], charLimit: 10 },
            explanation: "consonant + **-y** → **-ied**: *studied*.",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q3",
            type: "open",
            prompt: "Past of **go**: They ___ to the cinema.",
            points: 1,
            config: { acceptedAnswers: ["went"], charLimit: 8 },
            explanation: "go → **went** (irregular).",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q4",
            type: "true_false",
            prompt: "“Did you saw the film?” is correct English.",
            points: 1,
            config: { correct: false },
            explanation: "After **did**, use the base verb: *Did you **see** the film?*",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q5",
            type: "multiple_choice",
            prompt: "Plan already decided: I ___ going to start a course.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "am" },
                { id: "b", text: "will" },
                { id: "c", text: "did" },
              ],
              correctIds: ["a"],
            },
            explanation: "**am** going to + base verb for a decided plan.",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q6",
            type: "open",
            prompt: "Negative of will, one word: I ___ forget you. (will not)",
            points: 1,
            config: { acceptedAnswers: ["won't", "will not", "wont"], charLimit: 10 },
            explanation: "**won't** = will not.",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q7",
            type: "multiple_choice",
            prompt: "Negative: There isn't ___ coffee left.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "some" },
                { id: "b", text: "any" },
                { id: "c", text: "many" },
              ],
              correctIds: ["b"],
            },
            explanation: "Negatives take **any**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q8",
            type: "multiple_choice",
            prompt: "___ eggs do we need for the cake?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "How much" },
                { id: "b", text: "How many" },
                { id: "c", text: "How long" },
              ],
              correctIds: ["b"],
            },
            explanation: "Eggs are countable → **How many**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q9",
            type: "open",
            prompt: "Past of **be** (negative), one word: It ___ cold. (was not)",
            points: 1,
            config: { acceptedAnswers: ["wasn't", "was not", "wasnt"], charLimit: 10 },
            explanation: "**wasn't** = was not.",
          },
        },
        {
          kind: "question",
          question: {
            id: "l2-final-q10",
            type: "match",
            prompt: "Match each verb to its past form.",
            points: 1,
            config: {
              pairs: [
                { left: "have", right: "had" },
                { left: "make", right: "made" },
                { left: "eat", right: "ate" },
              ],
            },
            explanation: "All irregular: have→had, make→made, eat→ate.",
          },
        },
      ],
    },
  },
  conclusion: {
    title: "Everyday Stories complete",
    body:
      "Now you can move through time in English: say what happened, what you plan to do, and how much you need. That's the backbone of real conversation — the rest is vocabulary and practice.",
    nextSteps: [
      "Tell someone three things you did yesterday, out loud.",
      "Write one sentence about your plans for next week.",
      "Notice some/any and how much/how many when you read English.",
    ],
  },
  diploma: {
    title: "WISHUB Everyday Stories Diploma",
    subtitle: "Level 2: Past, Future & Quantity (A2)",
    issuer: "WISHUB",
  },
};
