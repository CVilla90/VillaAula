import type { Course } from "@/lib/types";

/**
 * Level 2 — A2, rebuilt from the real program spine (reference/s2u1–s2u4, captured
 * in CURRICULA_SPINE.md). 100% original content (HANDOFF §9): we follow the grammar
 * progression + vocab themes, but every prompt, reading, and title is written fresh.
 *
 * Arc: Unit 1 the present (directions, habits, ability, what's happening now) →
 * Unit 2 plans & quantity (going to, will, countable/uncountable, quantifiers) →
 * Unit 3 the past (was/were, simple past) → Unit 4 the past in depth.
 *
 * NOTE: Units 1–2 authored; Units 3–4 + the full final test land in the next pass.
 */
export const level2: Course = {
  id: "level-2",
  slug: "2",
  level: 2,
  title: "Everyday Stories",
  intro:
    "You can talk about yourself — now let's talk about the world. In Level 2 you give directions, say how often you do things, make plans, talk about food and quantity, and tell stories about the past. Same short exercises, same instant feedback, a lot more to say.",
  acceptsGuests: true,
  units: [
    // ============================== UNIT 1 ==============================
    {
      id: "c2u1",
      slug: "1",
      number: 1,
      title: "Getting Around",
      summary:
        "Give directions, talk about your daily habits and abilities, and describe what is happening right now.",
      lessons: [
        // ---- L1: directions / imperatives ----
        {
          id: "c2u1l1",
          slug: "directions",
          title: "Which way?",
          topic: "imperatives · directions",
          grammarNote: [
            "To give **directions and instructions** we use the **imperative** — just the base",
            "verb, with no subject:",
            "",
            "- **Go** straight. · **Turn** left. · **Take** the first street on the right.",
            "- Make it negative with **don't**: *Don't turn here.*",
            "",
            "Useful words of movement: **along** a street, **across** a bridge, **past** the bank,",
            "**through** the park.",
          ].join("\n"),
          exercise: {
            id: "c2u1l1-ex",
            title: "Practice: directions",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u1l1-q1",
                  type: "multiple_choice",
                  prompt: "Which one is a correct instruction?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "You turn left." },
                      { id: "b", text: "Turn left." },
                      { id: "c", text: "To turn left." },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "An imperative is just the base verb: **Turn left.**",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l1-q2",
                  type: "open",
                  prompt: "Complete: “___ straight, then turn right.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["go"], charLimit: 8 },
                  explanation: "**Go** straight — base verb, no subject.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l1-q3",
                  type: "match",
                  prompt: "Match each word of movement to its meaning.",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "across", right: "from one side to the other" },
                      { left: "along", right: "following the line of a street" },
                      { left: "past", right: "going by something" },
                    ],
                  },
                  explanation: "across a bridge · along a street · past the bank.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l1-q4",
                  type: "speaking",
                  prompt: "Say this direction out loud:",
                  points: 1,
                  config: {
                    target: "Turn left at the corner.",
                    acceptedAnswers: [
                      "turn left at the corner",
                      "turn left on the corner",
                    ],
                    maxSeconds: 8,
                  },
                },
              },
            ],
          },
        },
        // ---- L2: present simple + adverbs of frequency ----
        {
          id: "c2u1l2",
          slug: "how-often",
          title: "How often?",
          topic: "present simple · frequency",
          grammarNote: [
            "Use the **present simple** for habits and routines: *I check my phone every morning.*",
            "",
            "**Adverbs of frequency** say how often. From most to least:",
            "**always → usually → often → sometimes → never.**",
            "They go **before the main verb**, but **after _be_**:",
            "- I **always** *charge* my phone at night.",
            "- She **is** **often** late.",
            "",
            "Ask with **do / does**: *How often **do** you call home?*",
          ].join("\n"),
          exercise: {
            id: "c2u1l2-ex",
            title: "Practice: habits",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u1l2-q1",
                  type: "multiple_choice",
                  prompt: "Choose the natural sentence.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "I check always my messages." },
                      { id: "b", text: "I always check my messages." },
                      { id: "c", text: "Always I check my messages." },
                    ],
                    correctIds: ["b"],
                  },
                  explanation:
                    "The adverb goes **before the main verb**: *I **always check**…*",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l2-q2",
                  type: "open",
                  prompt: "Make a question: “___ you use your phone a lot?” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["do"], charLimit: 6 },
                  explanation: "Present simple questions with *you* use **do**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l2-q3",
                  type: "true_false",
                  prompt: "“He always is late.” — Is this natural English?",
                  points: 1,
                  config: { correct: false },
                  explanation:
                    "After **be**, the adverb comes after: *He **is always** late.*",
                },
              },
            ],
          },
        },
        // ---- L3: can (ability / possibility) ----
        {
          id: "c2u1l3",
          slug: "can",
          title: "Can you do it?",
          topic: "modal verb · can / can't",
          grammarNote: [
            "**can** + base verb = ability or possibility. It never changes form:",
            "*I can swim. · She **can** drive. · They can help.*",
            "",
            "Negative: **can't** (cannot). Questions move *can* first:",
            "*__Can__ you cook?* → **Yes, I can. / No, I can't.**",
            "Never add *to*: ~~I can to swim~~.",
          ].join("\n"),
          exercise: {
            id: "c2u1l3-ex",
            title: "Practice: can",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u1l3-q1",
                  type: "multiple_choice",
                  prompt: "She ___ play the guitar.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "can" },
                      { id: "b", text: "cans" },
                      { id: "c", text: "can to" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "**can** never adds *-s* or *to*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l3-q2",
                  type: "open",
                  prompt: "Short answer: “Can you cook?” → “___, I can.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["yes"], charLimit: 6 },
                  explanation: "Short answer: **Yes, I can.**",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l3-q3",
                  type: "true_false",
                  prompt: "“I can to drive.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "No *to* after *can*: **I can drive.**",
                },
              },
            ],
          },
        },
        // ---- L4: present continuous (yes/no) ----
        {
          id: "c2u1l4",
          slug: "present-continuous",
          title: "Right now",
          topic: "present continuous · be + -ing",
          grammarNote: [
            "For something **happening now**, use **am / is / are + verb-ing**:",
            "*I **am working**. · She **is reading**. · They **are playing**.*",
            "",
            "Spelling: *run → run**ning***, *make → mak**ing***, *sit → sit**ting***.",
            "Yes/no questions move *be* first: ***Are** you listening?*",
          ].join("\n"),
          exercise: {
            id: "c2u1l4-ex",
            title: "Practice: happening now",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u1l4-q1",
                  type: "open",
                  prompt: "Write the -ing form of **run**: ___",
                  points: 1,
                  config: { acceptedAnswers: ["running"], charLimit: 10 },
                  explanation: "Double the *n*: **running**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l4-q2",
                  type: "multiple_choice",
                  prompt: "___ they sleeping?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Do" },
                      { id: "b", text: "Are" },
                      { id: "c", text: "Is" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Continuous questions use *be*: **Are** they sleeping?",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l4-q3",
                  type: "true_false",
                  prompt: "“She is play tennis now.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "Add *-ing*: *She is **playing** tennis now.*",
                },
              },
            ],
          },
        },
        // ---- L5: present continuous (Wh-) + clothes ----
        {
          id: "c2u1l5",
          slug: "wearing",
          title: "What are they wearing?",
          topic: "present continuous · Wh- questions",
          grammarNote: [
            "**Wh- question** + **be** + subject + **verb-ing**:",
            "*__What__ are you doing? · __Where__ is she going? · __What__ is he wearing?*",
            "",
            "Clothes: a shirt, a jacket, jeans, a dress, shoes, a hat.",
          ].join("\n"),
          exercise: {
            id: "c2u1l5-ex",
            title: "Practice: describing now",
            items: [
              {
                kind: "content",
                content: {
                  id: "c2u1l5-c1",
                  type: "reading",
                  emoji: "🧥",
                  title: "At the bus stop",
                  body: "Look at Sofía. She is waiting for the bus. She is wearing a red jacket and blue jeans, and she is reading a book. Next to her, a man is talking on his phone.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l5-q1",
                  type: "multiple_choice",
                  prompt: "What ___ Sofía wearing?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "is" },
                      { id: "b", text: "are" },
                      { id: "c", text: "does" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Sofía* is one person → **is**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l5-q2",
                  type: "open",
                  prompt: "From the reading: what is Sofía reading? A ___.",
                  points: 1,
                  config: { acceptedAnswers: ["book"], charLimit: 10 },
                  explanation: "She is reading a **book**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u1l5-q3",
                  type: "true_false",
                  prompt: "The man is sleeping.",
                  points: 1,
                  config: { correct: false },
                  explanation: "He **is talking** on his phone.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 2 ==============================
    {
      id: "c2u2",
      slug: "2",
      number: 2,
      title: "Plans & Plenty",
      summary:
        "Make plans and predictions, order food politely, and talk about quantity — how much and how many.",
      lessons: [
        // ---- L1: going to ----
        {
          id: "c2u2l1",
          slug: "going-to",
          title: "What are you going to do?",
          topic: "future · be going to",
          grammarNote: [
            "Use **be going to + base verb** for **plans** and for predictions you can **see**",
            "coming:",
            "*I **am going to** travel this summer. · Look at those clouds — it'**s going to** rain.*",
            "",
            "Form: am / is / are + **going to** + verb. Question: *__Are__ you going to study?*",
          ].join("\n"),
          exercise: {
            id: "c2u2l1-ex",
            title: "Practice: plans",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u2l1-q1",
                  type: "open",
                  prompt: "Complete: “They ___ going to visit us.” (am / is / are)",
                  points: 1,
                  config: { acceptedAnswers: ["are"], charLimit: 6 },
                  explanation: "*They* → **are** going to…",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l1-q2",
                  type: "multiple_choice",
                  prompt: "The sky is dark. It ___ rain.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "is going to" },
                      { id: "b", text: "going to" },
                      { id: "c", text: "go to" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Evidence now → prediction: **is going to** rain.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l1-q3",
                  type: "speaking",
                  prompt: "Say a plan out loud:",
                  points: 1,
                  config: {
                    target: "I am going to study tonight.",
                    acceptedAnswers: [
                      "i am going to study tonight",
                      "im going to study tonight",
                    ],
                    maxSeconds: 10,
                  },
                },
              },
            ],
          },
        },
        // ---- L2: will / won't ----
        {
          id: "c2u2l2",
          slug: "will",
          title: "What will happen?",
          topic: "future · will / won't",
          grammarNote: [
            "**will + base verb** = predictions, promises, and decisions made **right now**:",
            "*I think it **will** be sunny. · I **will** help you. · I'**ll** have the soup.*",
            "",
            "Negative: **won't** (will not). It's the same for every subject:",
            "*she **will**, they **will**, it **won't**.*",
          ].join("\n"),
          exercise: {
            id: "c2u2l2-ex",
            title: "Practice: predictions",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u2l2-q1",
                  type: "open",
                  prompt: "**won't** is short for “will ___”. (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["not"], charLimit: 6 },
                  explanation: "**won't** = will **not**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l2-q2",
                  type: "multiple_choice",
                  prompt: "Choose the correct sentence.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "She will helps you." },
                      { id: "b", text: "She will help you." },
                      { id: "c", text: "She wills help you." },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "**will** + base verb, no *-s*: *She will **help**.*",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l2-q3",
                  type: "true_false",
                  prompt: "We can say “I’ll call you later.”",
                  points: 1,
                  config: { correct: true },
                  explanation: "**I'll** = I will — a decision made now. ✓",
                },
              },
            ],
          },
        },
        // ---- L3: countable/uncountable + would like ----
        {
          id: "c2u2l3",
          slug: "would-like",
          title: "Would you like…?",
          topic: "countable / uncountable · would like",
          grammarNote: [
            "**would like (to)** is a polite way to say *want*: *I'**d like** a coffee. · I'd like **to** order.*",
            "",
            "**Countable** nouns can be counted: *an apple, two apples*.",
            "**Uncountable** nouns can't: *water, rice, money* — no plural; use **some**:",
            "*I'd like **some** water.*",
          ].join("\n"),
          exercise: {
            id: "c2u2l3-ex",
            title: "Practice: ordering",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u2l3-q1",
                  type: "multiple_choice",
                  prompt: "I'd like ___ water, please.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "a" },
                      { id: "b", text: "an" },
                      { id: "c", text: "some" },
                    ],
                    correctIds: ["c"],
                  },
                  explanation: "*Water* is uncountable → **some** water.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l3-q2",
                  type: "match",
                  prompt: "Countable or uncountable?",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "apple", right: "countable" },
                      { left: "rice", right: "uncountable" },
                      { left: "sandwich", right: "countable" },
                    ],
                  },
                  explanation: "You can count apples and sandwiches, but not rice.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l3-q3",
                  type: "open",
                  prompt: "Polite order: “I'd ___ to see the menu.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["like"], charLimit: 8 },
                  explanation: "**would like to** + verb: *I'd **like** to see…*",
                },
              },
            ],
          },
        },
        // ---- L4: some / any + there is / are ----
        {
          id: "c2u2l4",
          slug: "some-any",
          title: "On the shopping list",
          topic: "some / any · there is / are",
          grammarNote: [
            "**some** in positive sentences; **any** in negatives and questions:",
            "*There are **some** eggs. · There aren't **any** eggs. · Are there **any** eggs?*",
            "",
            "**There is** + singular/uncountable; **There are** + plural:",
            "*There **is** some milk. · There **are** three apples.*",
          ].join("\n"),
          exercise: {
            id: "c2u2l4-ex",
            title: "Practice: quantity",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u2l4-q1",
                  type: "multiple_choice",
                  prompt: "Is there ___ milk in the fridge?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "some" },
                      { id: "b", text: "any" },
                      { id: "c", text: "a" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Questions use **any**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l4-q2",
                  type: "open",
                  prompt: "There ___ three apples on the table. (is / are)",
                  points: 1,
                  config: { acceptedAnswers: ["are"], charLimit: 6 },
                  explanation: "Plural *apples* → **There are**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l4-q3",
                  type: "true_false",
                  prompt: "“We don't have some bread.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "Negatives use **any**: *We don't have **any** bread.*",
                },
              },
            ],
          },
        },
        // ---- L5: how much / many + articles ----
        {
          id: "c2u2l5",
          slug: "how-much",
          title: "How much is it?",
          topic: "how much / many · articles",
          grammarNote: [
            "**How much** + uncountable; **How many** + countable:",
            "*__How much__ money? · __How many__ apples?*",
            "",
            "Articles: **a / an** = one general thing (*a shop, an orange*); **the** = a specific one",
            "(*the shop on the corner*).",
          ].join("\n"),
          exercise: {
            id: "c2u2l5-ex",
            title: "Practice: how much / many",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u2l5-q1",
                  type: "multiple_choice",
                  prompt: "___ sugar do you want in your coffee?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "How much" },
                      { id: "b", text: "How many" },
                      { id: "c", text: "How long" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Sugar* is uncountable → **How much**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l5-q2",
                  type: "open",
                  prompt: "Countable: “How ___ people are here?” (much / many)",
                  points: 1,
                  config: { acceptedAnswers: ["many"], charLimit: 6 },
                  explanation: "*People* are countable → **How many**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u2l5-q3",
                  type: "multiple_choice",
                  prompt: "I bought ___ orange and ___ banana.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "a / a" },
                      { id: "b", text: "an / a" },
                      { id: "c", text: "an / an" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Vowel sound → **an** orange; consonant → **a** banana.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 3 ==============================
    {
      id: "c2u3",
      slug: "3",
      number: 3,
      title: "Back Then",
      summary:
        "Step into the past: how and where things happen, the people involved, and what was true yesterday.",
      lessons: [
        // ---- L1: adverbs + purpose ----
        {
          id: "c2u3l1",
          slug: "how-where",
          title: "How and where",
          topic: "adverbs · purpose (to + verb)",
          grammarNote: [
            "**Adverbs of manner** say *how* — many add **-ly**: *quick → quickly, careful →",
            "carefully*. (Careful: *good → **well***.)",
            "**Adverbs of place** say *where*: here, there, nearby, everywhere.",
            "",
            "To say *why*, use **to + base verb** (a purpose): *I went out **to** buy milk.*",
          ].join("\n"),
          exercise: {
            id: "c2u3l1-ex",
            title: "Practice: how & why",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u3l1-q1",
                  type: "multiple_choice",
                  prompt: "She drives ___.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "careful" },
                      { id: "b", text: "carefully" },
                      { id: "c", text: "care" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Adverb of manner: *careful → **carefully***.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l1-q2",
                  type: "open",
                  prompt: "Say why: “I went to the station ___ catch a train.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["to"], charLimit: 6 },
                  explanation: "Purpose = **to** + base verb.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l1-q3",
                  type: "true_false",
                  prompt: "“He speaks English good.” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "Use the adverb **well**: *He speaks English well.*",
                },
              },
            ],
          },
        },
        // ---- L2: subject / object pronouns ----
        {
          id: "c2u3l2",
          slug: "pronouns",
          title: "Him and her",
          topic: "subject & object pronouns",
          grammarNote: [
            "**Subject** pronouns do the action (before the verb): I, you, he, she, it, we, they.",
            "**Object** pronouns receive it (after a verb or preposition):",
            "me, you, **him**, **her**, it, us, **them**.",
            "*__She__ loves __him__. · I called __them__. · This is for __me__.*",
          ].join("\n"),
          exercise: {
            id: "c2u3l2-ex",
            title: "Practice: pronouns",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u3l2-q1",
                  type: "multiple_choice",
                  prompt: "I saw ___ at the party. (Daniel)",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "he" },
                      { id: "b", text: "him" },
                      { id: "c", text: "his" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Object of *saw* → **him**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l2-q2",
                  type: "open",
                  prompt: "Replace “Ana”: “I called ___.” (object pronoun)",
                  points: 1,
                  config: { acceptedAnswers: ["her"], charLimit: 6 },
                  explanation: "Ana → object pronoun **her**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l2-q3",
                  type: "match",
                  prompt: "Match each subject pronoun to its object form.",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "I", right: "me" },
                      { left: "he", right: "him" },
                      { left: "they", right: "them" },
                    ],
                  },
                  explanation: "I→me, he→him, they→them.",
                },
              },
            ],
          },
        },
        // ---- L3: was / were ----
        {
          id: "c2u3l3",
          slug: "was-were",
          title: "Were you there?",
          topic: "past of to be · was / were",
          grammarNote: [
            "The past of **to be** has two shapes:",
            "- I / he / she / it → **was**",
            "- you / we / they → **were**",
            "",
            "Negative: **wasn't / weren't**. Question moves it first: *__Were__ you home?*",
            "Past time words: *yesterday, last night, two days ago.*",
          ].join("\n"),
          exercise: {
            id: "c2u3l3-ex",
            title: "Practice: was / were",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u3l3-q1",
                  type: "multiple_choice",
                  prompt: "They ___ at the cinema last night.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "was" },
                      { id: "b", text: "were" },
                      { id: "c", text: "are" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*They* → **were**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l3-q2",
                  type: "open",
                  prompt: "Negative, one word: “It ___ cold.” (was not)",
                  points: 1,
                  config: { acceptedAnswers: ["wasn't", "wasnt"], charLimit: 10 },
                  explanation: "**wasn't** = was not.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l3-q3",
                  type: "speaking",
                  prompt: "Say this about yesterday:",
                  points: 1,
                  config: {
                    target: "I was at home yesterday.",
                    acceptedAnswers: ["i was at home yesterday"],
                    maxSeconds: 9,
                  },
                },
              },
            ],
          },
        },
        // ---- L4: simple past regular ----
        {
          id: "c2u3l4",
          slug: "simple-past-regular",
          title: "Did he invent it?",
          topic: "simple past · regular verbs",
          grammarNote: [
            "For finished past actions, regular verbs add **-ed**:",
            "*work → work**ed***, *play → play**ed***.",
            "Spelling: *study → stud**ied***, *stop → stop**ped***.",
          ].join("\n"),
          exercise: {
            id: "c2u3l4-ex",
            title: "Practice: -ed past",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u3l4-q1",
                  type: "open",
                  prompt: "Past of **play**: ___",
                  points: 1,
                  config: { acceptedAnswers: ["played"], charLimit: 10 },
                  explanation: "Regular: **played**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l4-q2",
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
                  explanation: "*y → ied*: **studied**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l4-q3",
                  type: "true_false",
                  prompt: "The past of “invent” is “invented”.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Regular verb + **-ed**: invented. ✓",
                },
              },
            ],
          },
        },
        // ---- L5: simple past questions ----
        {
          id: "c2u3l5",
          slug: "simple-past-questions",
          title: "Did you do it?",
          topic: "simple past · questions",
          grammarNote: [
            "Past questions use **did + base verb** (the main verb goes back to base):",
            "*__Did__ you watch the game?*",
            "Short answers: **Yes, I did. / No, I didn't.**",
            "Negative: **didn't + base verb**: *I **didn't go**.*",
          ].join("\n"),
          exercise: {
            id: "c2u3l5-ex",
            title: "Practice: did",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u3l5-q1",
                  type: "multiple_choice",
                  prompt: "___ you watch the movie?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Did" },
                      { id: "b", text: "Do" },
                      { id: "c", text: "Was" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Past question: **Did** you watch…?",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l5-q2",
                  type: "open",
                  prompt: "Short answer: “Did she come?” → “No, she ___.” (did not)",
                  points: 1,
                  config: {
                    acceptedAnswers: ["didn't", "didnt", "did not"],
                    charLimit: 10,
                  },
                  explanation: "**No, she didn't.**",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u3l5-q3",
                  type: "true_false",
                  prompt: "“Did you went home?” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "After *did*, use the base verb: *Did you **go** home?*",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 4 ==============================
    {
      id: "c2u4",
      slug: "4",
      number: 4,
      title: "When It Happened",
      summary:
        "Tell fuller past stories: irregular verbs, what you used to do, how long things lasted, and when.",
      lessons: [
        // ---- L1: simple past irregular ----
        {
          id: "c2u4l1",
          slug: "past-irregular",
          title: "What did you do?",
          topic: "simple past · irregular verbs",
          grammarNote: [
            "Many common verbs are **irregular** — they don't take *-ed*, you just learn them:",
            "*go → **went**, have → **had**, see → **saw**, make → **made**, eat → **ate**,",
            "take → **took**, get → **got**.*",
          ].join("\n"),
          exercise: {
            id: "c2u4l1-ex",
            title: "Practice: irregular past",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u4l1-q1",
                  type: "open",
                  prompt: "Past of **go**: ___",
                  points: 1,
                  config: { acceptedAnswers: ["went"], charLimit: 8 },
                  explanation: "Irregular: **went**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l1-q2",
                  type: "multiple_choice",
                  prompt: "Past of **have**:",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "haved" },
                      { id: "b", text: "had" },
                      { id: "c", text: "has" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Irregular: **had**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l1-q3",
                  type: "match",
                  prompt: "Match each verb to its past form.",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "see", right: "saw" },
                      { left: "make", right: "made" },
                      { left: "take", right: "took" },
                    ],
                  },
                  explanation: "see→saw, make→made, take→took.",
                },
              },
            ],
          },
        },
        // ---- L2: used to (actions) ----
        {
          id: "c2u4l2",
          slug: "used-to-do",
          title: "What did you use to do?",
          topic: "used to · past habits",
          grammarNote: [
            "**used to + base verb** = a habit in the past that **stopped**:",
            "*I **used to** play soccer every day (but not now).*",
            "",
            "Negative: **didn't use to**. Question: *__Did__ you **use to**…?* (no *d* after *did*).",
          ].join("\n"),
          exercise: {
            id: "c2u4l2-ex",
            title: "Practice: used to",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u4l2-q1",
                  type: "multiple_choice",
                  prompt: "When I was a child, I ___ to walk to school.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "use" },
                      { id: "b", text: "used" },
                      { id: "c", text: "uses" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Affirmative: **used to** walk.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l2-q2",
                  type: "open",
                  prompt: "Negative: “She ___ use to smoke.” (did not)",
                  points: 1,
                  config: {
                    acceptedAnswers: ["didn't", "didnt", "did not"],
                    charLimit: 10,
                  },
                  explanation: "**didn't use to** (base form after *didn't*).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l2-q3",
                  type: "true_false",
                  prompt: "“used to” talks about the present.",
                  points: 1,
                  config: { correct: false },
                  explanation: "It's about **past** habits that stopped.",
                },
              },
            ],
          },
        },
        // ---- L3: used to (states) ----
        {
          id: "c2u4l3",
          slug: "used-to-be",
          title: "What did it use to be?",
          topic: "used to · past states",
          grammarNote: [
            "**used to** also describes **past states** (not only actions):",
            "*This **used to be** a farm. · There **used to be** a cinema here.*",
            "The form is the same: **used to + base verb** (often *be*).",
          ].join("\n"),
          exercise: {
            id: "c2u4l3-ex",
            title: "Practice: used to be",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u4l3-q1",
                  type: "multiple_choice",
                  prompt: "There ___ to be a park here.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "use" },
                      { id: "b", text: "used" },
                      { id: "c", text: "using" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "**There used to be**…",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l3-q2",
                  type: "open",
                  prompt: "Complete: “My town used to ___ very small.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["be"], charLimit: 6 },
                  explanation: "used to + base verb: **be**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l3-q3",
                  type: "true_false",
                  prompt: "“I used to be afraid of dogs” describes a past state.",
                  points: 1,
                  config: { correct: true },
                  explanation: "A state that was true before, not now. ✓",
                },
              },
            ],
          },
        },
        // ---- L4: simple past duration ----
        {
          id: "c2u4l4",
          slug: "past-duration",
          title: "How long did it last?",
          topic: "simple past · duration",
          grammarNote: [
            "To say **how long** something continued, use **for + a period**:",
            "*The dinosaurs lived **for** millions of years. · We waited **for** an hour.*",
            "Ask: *__How long__ did it last?* → *It lasted **for** two days.*",
          ].join("\n"),
          exercise: {
            id: "c2u4l4-ex",
            title: "Practice: how long",
            items: [
              {
                kind: "content",
                content: {
                  id: "c2u4l4-c1",
                  type: "reading",
                  emoji: "🦕",
                  title: "A long, long time",
                  body: "Dinosaurs were not a quick chapter of history. They lived on Earth for about 165 million years — far longer than humans, who appeared only a few hundred thousand years ago.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l4-q1",
                  type: "multiple_choice",
                  prompt: "Dinosaurs lived ___ millions of years.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "for" },
                      { id: "b", text: "since" },
                      { id: "c", text: "during" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Duration = **for** + period.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l4-q2",
                  type: "open",
                  prompt: "Question: “How ___ did the film last?” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["long"], charLimit: 8 },
                  explanation: "**How long** asks about duration.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l4-q3",
                  type: "true_false",
                  prompt: "“How long did it lasted?” — Is this correct?",
                  points: 1,
                  config: { correct: false },
                  explanation: "After *did*, base verb: *How long did it **last**?*",
                },
              },
            ],
          },
        },
        // ---- L5: last / ago ----
        {
          id: "c2u4l5",
          slug: "last-ago",
          title: "When did it happen?",
          topic: "past time · last / ago",
          grammarNote: [
            "**last** + a time word = the most recent one (no preposition):",
            "*last night, last week, last year.*",
            "**ago** counts back from now, after the period:",
            "*two days **ago**, a week **ago**.*",
          ].join("\n"),
          exercise: {
            id: "c2u4l5-ex",
            title: "Practice: last / ago",
            items: [
              {
                kind: "question",
                question: {
                  id: "c2u4l5-q1",
                  type: "multiple_choice",
                  prompt: "I saw her two days ___.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "ago" },
                      { id: "b", text: "last" },
                      { id: "c", text: "before" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Counting back from now → **ago**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l5-q2",
                  type: "open",
                  prompt: "“___ night I watched a film.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["last"], charLimit: 8 },
                  explanation: "**Last** night — the most recent one.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "c2u4l5-q3",
                  type: "speaking",
                  prompt: "Say this about your weekend:",
                  points: 1,
                  config: {
                    target: "I visited my family last weekend.",
                    acceptedAnswers: ["i visited my family last weekend"],
                    maxSeconds: 10,
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
    id: "c2-final",
    slug: "final-test",
    title: "Level 2 review",
    intro:
      "A compact review across all four units — directions and habits, ability and the present moment, plans and quantity, and the past. Score 12 of 16 to earn your diploma.",
    passingScore: 12,
    exercise: {
      id: "c2-final-ex",
      title: "Level 2 final",
      items: [
        {
          kind: "question",
          question: {
            id: "c2-final-q1",
            type: "multiple_choice",
            prompt: "Give an instruction:",
            points: 1,
            config: {
              options: [
                { id: "a", text: "You take the first street." },
                { id: "b", text: "Take the first street." },
                { id: "c", text: "Taking the first street." },
              ],
              correctIds: ["b"],
            },
            explanation: "Imperative = base verb: **Take**…",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q2",
            type: "multiple_choice",
            prompt: "Where does the adverb go? “I ___ drink coffee in the morning.”",
            points: 1,
            config: {
              options: [
                { id: "a", text: "drink usually" },
                { id: "b", text: "usually drink" },
                { id: "c", text: "drink coffee usually" },
              ],
              correctIds: ["b"],
            },
            explanation: "Before the main verb: *I **usually drink**…*",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q3",
            type: "open",
            prompt: "Short answer: “Can you swim?” → “Yes, I ___.” (one word)",
            points: 1,
            config: { acceptedAnswers: ["can"], charLimit: 6 },
            explanation: "**Yes, I can.**",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q4",
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
            id: "c2-final-q5",
            type: "multiple_choice",
            prompt: "___ you going to call her?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "Do" },
                { id: "b", text: "Are" },
                { id: "c", text: "Will" },
              ],
              correctIds: ["b"],
            },
            explanation: "*be going to* question: **Are** you going to…",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q6",
            type: "true_false",
            prompt: "“She will helps us.” — Is this correct?",
            points: 1,
            config: { correct: false },
            explanation: "**will** + base verb: *She will **help** us.*",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q7",
            type: "multiple_choice",
            prompt: "I'd like ___ rice, please.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "a" },
                { id: "b", text: "some" },
                { id: "c", text: "many" },
              ],
              correctIds: ["b"],
            },
            explanation: "*Rice* is uncountable → **some**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q8",
            type: "open",
            prompt: "Question form: “Is there ___ sugar?” (some / any)",
            points: 1,
            config: { acceptedAnswers: ["any"], charLimit: 6 },
            explanation: "Questions use **any**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q9",
            type: "multiple_choice",
            prompt: "___ apples do you need?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "How much" },
                { id: "b", text: "How many" },
                { id: "c", text: "How long" },
              ],
              correctIds: ["b"],
            },
            explanation: "Countable *apples* → **How many**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q10",
            type: "match",
            prompt: "Match each noun to its type.",
            points: 1,
            config: {
              pairs: [
                { left: "water", right: "uncountable" },
                { left: "banana", right: "countable" },
                { left: "money", right: "uncountable" },
              ],
            },
            explanation: "Count bananas, not water or money.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q11",
            type: "open",
            prompt: "Past of **be**: “They ___ happy.” (one word)",
            points: 1,
            config: { acceptedAnswers: ["were"], charLimit: 6 },
            explanation: "*They* → **were**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q12",
            type: "multiple_choice",
            prompt: "I called ___ yesterday. (Ana)",
            points: 1,
            config: {
              options: [
                { id: "a", text: "she" },
                { id: "b", text: "her" },
                { id: "c", text: "hers" },
              ],
              correctIds: ["b"],
            },
            explanation: "Object pronoun for Ana → **her**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q13",
            type: "open",
            prompt: "Past of **work**: ___",
            points: 1,
            config: { acceptedAnswers: ["worked"], charLimit: 10 },
            explanation: "Regular: **worked**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q14",
            type: "multiple_choice",
            prompt: "Past of **go**:",
            points: 1,
            config: {
              options: [
                { id: "a", text: "goed" },
                { id: "b", text: "went" },
                { id: "c", text: "gone" },
              ],
              correctIds: ["b"],
            },
            explanation: "Irregular: **went**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q15",
            type: "multiple_choice",
            prompt: "When I was young, I ___ to live by the sea.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "use" },
                { id: "b", text: "used" },
                { id: "c", text: "using" },
              ],
              correctIds: ["b"],
            },
            explanation: "Past habit/state: **used to**.",
          },
        },
        {
          kind: "question",
          question: {
            id: "c2-final-q16",
            type: "multiple_choice",
            prompt: "I met him a week ___.",
            points: 1,
            config: {
              options: [
                { id: "a", text: "last" },
                { id: "b", text: "ago" },
                { id: "c", text: "since" },
              ],
              correctIds: ["b"],
            },
            explanation: "Counting back from now → **ago**.",
          },
        },
      ],
    },
  },
  conclusion: {
    title: "Everyday Stories complete",
    body:
      "You can move through time in English now: give directions and talk about your habits, describe what's happening, make plans for the future, handle food and quantity, and tell stories about the past — was/were, the simple past, used to, and time markers like last and ago. That's the backbone of real conversation.",
    nextSteps: [
      "Tell someone three things you did yesterday, out loud.",
      "Say what you used to do when you were a child.",
      "Make a plan for next week using “going to”.",
    ],
  },
  diploma: {
    title: "WISHUB Everyday Stories Diploma",
    subtitle: "Level 2 (A2)",
    issuer: "WISHUB",
  },
};
