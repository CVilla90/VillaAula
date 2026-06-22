import type {
  CourseConclusion,
  DiplomaConfig,
  FinalTest,
  Unit,
} from "@/lib/types";

export const phase2Units: Unit[] = [
  {
    id: "u2",
    slug: "2",
    number: 2,
    title: "Things around you",
    summary:
      "Name things, point to them, describe actions happening now, and say who owns what.",
    lessons: [
      {
        id: "u2-l1",
        slug: "articles",
        title: "A, an, and the",
        topic: "articles",
        grammarNote: [
          "Use **a** before one general thing: *a book, a desk, a teacher*.",
          "Use **an** before a vowel sound: *an apple, an eraser, an idea*.",
          "Use **the** when the listener knows exactly which thing you mean: *the door, the blue chair*.",
          "",
          "The article goes before the noun: **a pencil**, **an orange**, **the window**.",
        ].join("\n"),
        exercise: {
          id: "u2-l1-ex",
          title: "Practice: articles",
          items: [
            {
              kind: "question",
              question: {
                id: "u2-l1-q1",
                type: "multiple_choice",
                prompt: "Choose the best article: ___ orange notebook",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "a" },
                    { id: "b", text: "an" },
                    { id: "c", text: "the" },
                  ],
                  correctIds: ["b"],
                },
                explanation:
                  "*Orange* begins with a vowel sound, so we say **an orange notebook**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l1-q2",
                type: "open",
                prompt: "Complete: I have ___ pen in my bag.",
                points: 1,
                config: { acceptedAnswers: ["a"], charLimit: 4 },
                explanation: "A pen is one general object, so **a** is right.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l1-q3",
                type: "true_false",
                prompt:
                  "Use **the** when both people know the exact thing you mean.",
                points: 1,
                config: { correct: true },
                explanation:
                  "**The** points to a specific thing: *the door*, *the teacher*, *the red folder*.",
              },
            },
          ],
        },
      },
      {
        id: "u2-l2",
        slug: "this-that-these-those",
        title: "This, that, these, those",
        topic: "demonstratives",
        grammarNote: [
          "Use **this** for one thing near you: *this pencil*.",
          "Use **that** for one thing far from you: *that poster*.",
          "Use **these** for two or more things near you: *these books*.",
          "Use **those** for two or more things far from you: *those windows*.",
          "",
          "Ask with *to be*: **Is this your bag?** / **Are those your books?**",
        ].join("\n"),
        exercise: {
          id: "u2-l2-ex",
          title: "Practice: near and far",
          items: [
            {
              kind: "question",
              question: {
                id: "u2-l2-q1",
                type: "match",
                prompt: "Match the word to its meaning.",
                points: 1,
                config: {
                  pairs: [
                    { left: "this", right: "one near" },
                    { left: "that", right: "one far" },
                    { left: "these", right: "many near" },
                    { left: "those", right: "many far" },
                  ],
                },
                explanation:
                  "The word changes for distance and for one vs. many.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l2-q2",
                type: "multiple_choice",
                prompt: "You hold two books in your hands. You say: ___ are my books.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "These" },
                    { id: "b", text: "That" },
                    { id: "c", text: "This" },
                  ],
                  correctIds: ["a"],
                },
                explanation: "Two books near you = **these**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l2-q3",
                type: "open",
                prompt: "Complete: ___ that your phone? Yes, it is.",
                points: 1,
                config: { acceptedAnswers: ["is"], charLimit: 8 },
                explanation: "For one thing, ask **Is that...?**",
              },
            },
          ],
        },
      },
      {
        id: "u2-l3",
        slug: "present-continuous",
        title: "Actions happening now",
        topic: "am / is / are + -ing",
        grammarNote: [
          "Use the **present continuous** for actions happening now.",
          "Form: **subject + am/is/are + verb-ing**.",
          "",
          "- I **am studying**.",
          "- She **is reading**.",
          "- They **are playing**.",
          "",
          "Questions move *am/is/are* to the front: **Are you listening?**",
        ].join("\n"),
        exercise: {
          id: "u2-l3-ex",
          title: "Practice: right now",
          items: [
            {
              kind: "content",
              content: {
                id: "u2-l3-a1",
                type: "audio",
                title: "Listen: in the library",
                transcript:
                  "Mia is reading a story. Ben is writing in his notebook. Two students are talking quietly.",
                voice: "en-US-AvaMultilingualNeural",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l3-q1",
                type: "multiple_choice",
                prompt: "Right now, Mia ___ a story.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "reads" },
                    { id: "b", text: "is reading" },
                    { id: "c", text: "are reading" },
                  ],
                  correctIds: ["b"],
                },
                explanation:
                  "The action is happening now: **Mia is reading**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l3-q2",
                type: "open",
                prompt: "Complete: They ___ talking quietly.",
                points: 1,
                config: { acceptedAnswers: ["are", "'re"], charLimit: 12 },
                explanation: "**They are** talking quietly.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l3-q3",
                type: "true_false",
                prompt: "“I am studying” is the **present continuous**.",
                points: 1,
                config: { correct: true },
                explanation:
                  "It uses **am + studying**, so it is present continuous.",
              },
            },
          ],
        },
      },
      {
        id: "u2-l4",
        slug: "possessives",
        title: "Whose is it?",
        topic: "possessive case · my / your / his / her",
        grammarNote: [
          "Use **'s** after a name to show possession: *Ana's bag*, *Leo's pen*.",
          "Use possessive adjectives before nouns:",
          "",
          "- I -> **my**",
          "- you -> **your**",
          "- he -> **his**",
          "- she -> **her**",
          "- we -> **our**",
          "- they -> **their**",
          "",
          "Do not use *the* with a possessive adjective: **my phone**, not *the my phone*.",
        ].join("\n"),
        exercise: {
          id: "u2-l4-ex",
          title: "Practice: possession",
          items: [
            {
              kind: "content",
              content: {
                id: "u2-l4-c1",
                type: "reading",
                title: "Leo's backpack",
                body: "Leo has a black backpack. His notebook is blue. His sister Camila has a red pencil case. Her pencils are new.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l4-q1",
                type: "multiple_choice",
                prompt: "Leo has a backpack. It is ___ backpack.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "his" },
                    { id: "b", text: "her" },
                    { id: "c", text: "their" },
                  ],
                  correctIds: ["a"],
                },
                explanation: "Leo is he, so we use **his**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l4-q2",
                type: "open",
                prompt: "Write the possessive phrase: the backpack of Leo = ___ backpack",
                points: 1,
                config: {
                  acceptedAnswers: ["Leo's", "Leos"],
                  charLimit: 16,
                },
                explanation:
                  "The possessive case is **Leo's backpack**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l4-q3",
                type: "true_false",
                prompt: "“Her pencils are new” means the pencils belong to Camila.",
                points: 1,
                config: { correct: true },
                explanation: "Camila is she, so **her** shows possession.",
              },
            },
          ],
        },
      },
      {
        id: "u2-l5",
        slug: "clothes-appearance",
        title: "Clothes and appearance",
        topic: "describing people",
        grammarNote: [
          "Use **is / are wearing** for clothes right now:",
          "*She is wearing a blue jacket.* / *They are wearing white shoes.*",
          "",
          "Use **has / have** for hair, eyes, and features:",
          "*He has short hair.* / *They have brown eyes.*",
          "",
          "Adjectives usually come before nouns: **a green shirt**, **long hair**.",
        ].join("\n"),
        exercise: {
          id: "u2-l5-ex",
          title: "Practice: describe the person",
          items: [
            {
              kind: "content",
              content: {
                id: "u2-l5-c1",
                type: "reading",
                title: "At the bus stop",
                body: "Nora is wearing a yellow sweater and black shoes. Marco is wearing a gray jacket. He has short hair and brown eyes.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l5-q1",
                type: "open",
                prompt: "What color is Nora's sweater?",
                points: 1,
                config: { acceptedAnswers: ["yellow"], charLimit: 14 },
                explanation: "Nora is wearing a **yellow** sweater.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l5-q2",
                type: "multiple_choice",
                prompt: "Marco ___ short hair.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "has" },
                    { id: "b", text: "is" },
                    { id: "c", text: "are" },
                  ],
                  correctIds: ["a"],
                },
                explanation: "For hair/features, use **has** with he/she/it.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u2-l5-q3",
                type: "true_false",
                prompt: "“A shirt green” is the normal word order in English.",
                points: 1,
                config: { correct: false },
                explanation: "English usually says **a green shirt**.",
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: "u3",
    slug: "3",
    number: 3,
    title: "Places and routines",
    summary:
      "Talk about rooms, daily habits, schedules, negatives, and simple present questions.",
    lessons: [
      {
        id: "u3-l1",
        slug: "there-is-there-are",
        title: "There is and there are",
        topic: "places · prepositions",
        grammarNote: [
          "Use **there is** for one thing: *There is a sofa in the room.*",
          "Use **there are** for two or more things: *There are two chairs.*",
          "",
          "Common place words:",
          "- **in** the box",
          "- **on** the table",
          "- **under** the chair",
          "- **next to** the door",
        ].join("\n"),
        exercise: {
          id: "u3-l1-ex",
          title: "Practice: rooms",
          items: [
            {
              kind: "question",
              question: {
                id: "u3-l1-q1",
                type: "multiple_choice",
                prompt: "___ a lamp on the desk.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "There is" },
                    { id: "b", text: "There are" },
                    { id: "c", text: "They are" },
                  ],
                  correctIds: ["a"],
                },
                explanation: "One lamp = **there is**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l1-q2",
                type: "open",
                prompt: "Complete: There ___ three books under the chair.",
                points: 1,
                config: { acceptedAnswers: ["are"], charLimit: 8 },
                explanation: "Three books = **there are**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l1-q3",
                type: "match",
                prompt: "Match each preposition to the picture idea.",
                points: 1,
                config: {
                  pairs: [
                    { left: "in", right: "inside" },
                    { left: "on", right: "touching the top" },
                    { left: "under", right: "below" },
                    { left: "next to", right: "beside" },
                  ],
                },
                explanation:
                  "These four prepositions help you describe where things are.",
              },
            },
          ],
        },
      },
      {
        id: "u3-l2",
        slug: "daily-routines",
        title: "Daily routines",
        topic: "simple present",
        grammarNote: [
          "Use the **simple present** for habits and routines.",
          "With **I / you / we / they**, use the base verb:",
          "*I study at night.* / *They play soccer on Saturday.*",
          "",
          "Common routine verbs: **wake up, eat, go, study, work, read, sleep**.",
        ].join("\n"),
        exercise: {
          id: "u3-l2-ex",
          title: "Practice: routines",
          items: [
            {
              kind: "content",
              content: {
                id: "u3-l2-a1",
                type: "audio",
                title: "Listen: morning routine",
                transcript:
                  "I wake up at seven. I eat breakfast at home. I study English in the evening.",
                voice: "en-US-AndrewNeural",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l2-q1",
                type: "multiple_choice",
                prompt: "I ___ breakfast at home.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "eats" },
                    { id: "b", text: "eat" },
                    { id: "c", text: "eating" },
                  ],
                  correctIds: ["b"],
                },
                explanation: "With **I**, use the base verb: **eat**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l2-q2",
                type: "open",
                prompt: "From the audio: I wake up at ___.",
                points: 1,
                config: {
                  acceptedAnswers: ["seven", "7", "7:00", "seven o clock"],
                  charLimit: 18,
                },
                explanation: "The routine starts at **seven**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l2-q3",
                type: "true_false",
                prompt: "The **simple present** can describe routines.",
                points: 1,
                config: { correct: true },
                explanation:
                  "Yes. Habits and routines are a core use of the simple present.",
              },
            },
          ],
        },
      },
      {
        id: "u3-l3",
        slug: "third-person",
        title: "He, she, it routines",
        topic: "third person -s",
        grammarNote: [
          "In the simple present, add **-s** or **-es** with **he / she / it**:",
          "",
          "- I work -> she **works**",
          "- we watch -> he **watches**",
          "- they study -> it **studies**",
          "",
          "For verbs ending in consonant + y, change y to ies: **study -> studies**.",
        ].join("\n"),
        exercise: {
          id: "u3-l3-ex",
          title: "Practice: third person",
          items: [
            {
              kind: "content",
              content: {
                id: "u3-l3-c1",
                type: "reading",
                title: "Diego's day",
                body: "Diego works in a small cafe. He starts at eight. He watches videos in English after work, and he studies new words at night.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l3-q1",
                type: "open",
                prompt: "Complete: Diego ___ in a small cafe.",
                points: 1,
                config: { acceptedAnswers: ["works"], charLimit: 12 },
                explanation: "Diego = he, so **work** becomes **works**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l3-q2",
                type: "multiple_choice",
                prompt: "She ___ English at night.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "study" },
                    { id: "b", text: "studies" },
                    { id: "c", text: "studying" },
                  ],
                  correctIds: ["b"],
                },
                explanation: "With **she**, *study* becomes **studies**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l3-q3",
                type: "true_false",
                prompt: "“He watch videos” is correct.",
                points: 1,
                config: { correct: false },
                explanation: "Use **watches** with he: *He watches videos.*",
              },
            },
          ],
        },
      },
      {
        id: "u3-l4",
        slug: "time-prepositions",
        title: "At, on, and in",
        topic: "prepositions of time",
        grammarNote: [
          "Use **at** for clock times: *at 8:00*, *at noon*, *at night*.",
          "Use **on** for days and dates: *on Monday*, *on June 5*.",
          "Use **in** for months, years, and parts of the day: *in April*, *in 2026*, *in the morning*.",
        ].join("\n"),
        exercise: {
          id: "u3-l4-ex",
          title: "Practice: time words",
          items: [
            {
              kind: "question",
              question: {
                id: "u3-l4-q1",
                type: "match",
                prompt: "Match the time expression to the preposition.",
                points: 1,
                config: {
                  pairs: [
                    { left: "8:30", right: "at" },
                    { left: "Monday", right: "on" },
                    { left: "April", right: "in" },
                  ],
                },
                explanation:
                  "Clock time takes **at**, days take **on**, and months take **in**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l4-q2",
                type: "open",
                prompt: "Complete: I study English ___ the evening.",
                points: 1,
                config: { acceptedAnswers: ["in"], charLimit: 8 },
                explanation: "Say **in the evening**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l4-q3",
                type: "multiple_choice",
                prompt: "We meet ___ Friday.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "at" },
                    { id: "b", text: "on" },
                    { id: "c", text: "in" },
                  ],
                  correctIds: ["b"],
                },
                explanation: "Days use **on**: *on Friday*.",
              },
            },
          ],
        },
      },
      {
        id: "u3-l5",
        slug: "simple-present-questions",
        title: "Questions and negatives",
        topic: "do / does · don't / doesn't",
        grammarNote: [
          "Use **do** for questions with I / you / we / they:",
          "**Do you study English?** -> *Yes, I do.*",
          "",
          "Use **does** for he / she / it:",
          "**Does she work here?** -> *No, she doesn't.*",
          "",
          "For negatives, use **don't** or **doesn't** plus the base verb:",
          "*I don't work on Sunday.* / *He doesn't study at night.*",
        ].join("\n"),
        exercise: {
          id: "u3-l5-ex",
          title: "Practice: do and does",
          items: [
            {
              kind: "question",
              question: {
                id: "u3-l5-q1",
                type: "multiple_choice",
                prompt: "___ she work here?",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "Do" },
                    { id: "b", text: "Does" },
                    { id: "c", text: "Is" },
                  ],
                  correctIds: ["b"],
                },
                explanation: "With **she**, ask with **does**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l5-q2",
                type: "open",
                prompt: "Complete: I ___ work on Sunday.",
                points: 1,
                config: { acceptedAnswers: ["don't", "do not"], charLimit: 12 },
                explanation: "With **I**, use **don't** or **do not**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u3-l5-q3",
                type: "true_false",
                prompt: "After **doesn't**, use the base verb: “He doesn't study.”",
                points: 1,
                config: { correct: true },
                explanation:
                  "Correct. Do not add -s after **doesn't**: *doesn't study*.",
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: "u4",
    slug: "4",
    number: 4,
    title: "Describe and compare",
    summary:
      "Use have, compare people and things, talk about extremes, equality, and ability.",
    lessons: [
      {
        id: "u4-l1",
        slug: "have-has",
        title: "Have and has",
        topic: "features · possessions",
        grammarNote: [
          "Use **have** with I / you / we / they: *I have a bike.*",
          "Use **has** with he / she / it: *She has long hair.*",
          "",
          "Use **do / does** for questions and negatives:",
          "*Do you have a notebook?* / *He doesn't have a car.*",
        ].join("\n"),
        exercise: {
          id: "u4-l1-ex",
          title: "Practice: have and has",
          items: [
            {
              kind: "content",
              content: {
                id: "u4-l1-c1",
                type: "reading",
                title: "Two friends",
                body: "Sofia has curly hair and green eyes. Tom has a small dog. They have the same English class on Tuesday.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l1-q1",
                type: "multiple_choice",
                prompt: "Sofia ___ curly hair.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "have" },
                    { id: "b", text: "has" },
                    { id: "c", text: "is" },
                  ],
                  correctIds: ["b"],
                },
                explanation: "Sofia = she, so use **has**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l1-q2",
                type: "open",
                prompt: "Complete: They ___ the same English class.",
                points: 1,
                config: { acceptedAnswers: ["have"], charLimit: 10 },
                explanation: "With **they**, use **have**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l1-q3",
                type: "true_false",
                prompt: "“He has a dog” is correct English.",
                points: 1,
                config: { correct: true },
                explanation: "With **he**, use **has**.",
              },
            },
          ],
        },
      },
      {
        id: "u4-l2",
        slug: "comparatives",
        title: "Comparatives",
        topic: "-er · more",
        grammarNote: [
          "Use comparatives to compare two people or things.",
          "Short adjectives often take **-er**: *small -> smaller*, *tall -> taller*.",
          "Longer adjectives usually use **more**: *more interesting*, *more comfortable*.",
          "Use **than** after the comparison: *This bag is smaller than that bag.*",
        ].join("\n"),
        exercise: {
          id: "u4-l2-ex",
          title: "Practice: compare two",
          items: [
            {
              kind: "question",
              question: {
                id: "u4-l2-q1",
                type: "multiple_choice",
                prompt: "A car is usually ___ than a bicycle.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "faster" },
                    { id: "b", text: "fastest" },
                    { id: "c", text: "fast" },
                  ],
                  correctIds: ["a"],
                },
                explanation: "Compare two things with **faster than**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l2-q2",
                type: "open",
                prompt: "Complete: This chair is more comfortable ___ that chair.",
                points: 1,
                config: { acceptedAnswers: ["than"], charLimit: 8 },
                explanation: "Comparatives use **than**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l2-q3",
                type: "true_false",
                prompt: "Use **more** with many longer adjectives.",
                points: 1,
                config: { correct: true },
                explanation:
                  "Yes: **more comfortable**, **more difficult**, **more interesting**.",
              },
            },
          ],
        },
      },
      {
        id: "u4-l3",
        slug: "superlatives",
        title: "Superlatives",
        topic: "-est · the most",
        grammarNote: [
          "Use superlatives for one thing at the top of a group.",
          "Short adjectives often take **the + -est**: *the smallest*, *the tallest*.",
          "Longer adjectives often use **the most**: *the most interesting*.",
          "",
          "The article **the** is part of the pattern: **the fastest**, **the most useful**.",
        ].join("\n"),
        exercise: {
          id: "u4-l3-ex",
          title: "Practice: top of the group",
          items: [
            {
              kind: "question",
              question: {
                id: "u4-l3-q1",
                type: "multiple_choice",
                prompt: "Mount Everest is ___ mountain in the world.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "the highest" },
                    { id: "b", text: "higher" },
                    { id: "c", text: "high" },
                  ],
                  correctIds: ["a"],
                },
                explanation: "For one top item in a group, use **the highest**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l3-q2",
                type: "open",
                prompt: "Complete: This is ___ most useful app for me.",
                points: 1,
                config: { acceptedAnswers: ["the"], charLimit: 8 },
                explanation: "Say **the most useful**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l3-q3",
                type: "true_false",
                prompt: "“The tallest” is a superlative form.",
                points: 1,
                config: { correct: true },
                explanation: "**The tallest** means number one in height.",
              },
            },
          ],
        },
      },
      {
        id: "u4-l4",
        slug: "as-as",
        title: "As...as",
        topic: "equality",
        grammarNote: [
          "Use **as + adjective + as** when two things are equal in some way.",
          "",
          "- This lesson is **as short as** the last lesson.",
          "- My bag is **as heavy as** your bag.",
          "",
          "For the negative, use **not as...as**: *This box is not as big as that box.*",
        ].join("\n"),
        exercise: {
          id: "u4-l4-ex",
          title: "Practice: equal comparisons",
          items: [
            {
              kind: "question",
              question: {
                id: "u4-l4-q1",
                type: "multiple_choice",
                prompt: "Choose the correct sentence.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "This book is as interesting as that book." },
                    { id: "b", text: "This book is as interesting than that book." },
                    { id: "c", text: "This book is more interesting as that book." },
                  ],
                  correctIds: ["a"],
                },
                explanation: "The equality pattern is **as + adjective + as**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l4-q2",
                type: "open",
                prompt: "Complete: My phone is as small ___ your phone.",
                points: 1,
                config: { acceptedAnswers: ["as"], charLimit: 8 },
                explanation: "The pattern closes with the second **as**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l4-q3",
                type: "true_false",
                prompt: "“Not as big as” can show that two things are different.",
                points: 1,
                config: { correct: true },
                explanation:
                  "Yes. *Not as big as* means one thing is smaller.",
              },
            },
          ],
        },
      },
      {
        id: "u4-l5",
        slug: "can-cant",
        title: "Can and can't",
        topic: "ability",
        grammarNote: [
          "Use **can** for ability: *I can swim.*",
          "Use **can't** or **cannot** when the ability is not there: *She can't drive.*",
          "",
          "The verb after can stays in base form:",
          "**can speak**, **can read**, **can run**. Not *can speaks*.",
          "",
          "Ask questions with **Can** at the front: **Can you help me?**",
        ].join("\n"),
        exercise: {
          id: "u4-l5-ex",
          title: "Practice: abilities",
          items: [
            {
              kind: "content",
              content: {
                id: "u4-l5-a1",
                type: "audio",
                title: "Listen: weekend skills",
                transcript:
                  "I can cook breakfast, but I can't bake bread. My sister can play guitar, and my brother can draw animals.",
                voice: "en-US-AriaNeural",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l5-q1",
                type: "multiple_choice",
                prompt: "After **can**, use the verb in ___ form.",
                points: 1,
                config: {
                  options: [
                    { id: "a", text: "base" },
                    { id: "b", text: "-ing" },
                    { id: "c", text: "-s" },
                  ],
                  correctIds: ["a"],
                },
                explanation: "Use base form: **can cook**, **can play**.",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l5-q2",
                type: "open",
                prompt: "From the audio: I can't bake ___.",
                points: 1,
                config: { acceptedAnswers: ["bread"], charLimit: 16 },
                explanation: "The sentence is: *I can't bake **bread**.*",
              },
            },
            {
              kind: "question",
              question: {
                id: "u4-l5-q3",
                type: "true_false",
                prompt: "“Can she plays guitar?” is correct.",
                points: 1,
                config: { correct: false },
                explanation:
                  "After **can**, use base form: **Can she play guitar?**",
              },
            },
          ],
        },
      },
    ],
  },
];

export const finalTest: FinalTest = {
  id: "level-1-final",
  slug: "final-test",
  title: "Level 1 Final Check",
  intro:
    "A compact review of the full Foundations level. Answer each item, retry anything that does not click, then unlock your diploma.",
  passingScore: 10,
  exercise: {
    id: "level-1-final-ex",
    title: "Final check",
    items: [
      {
        kind: "question",
        question: {
          id: "final-q1",
          type: "multiple_choice",
          prompt: "I ___ from Mexico.",
          points: 1,
          config: {
            options: [
              { id: "a", text: "am" },
              { id: "b", text: "is" },
              { id: "c", text: "are" },
            ],
            correctIds: ["a"],
          },
          explanation: "With **I**, use **am**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q2",
          type: "open",
          prompt: "Write 15 in words.",
          points: 1,
          config: { acceptedAnswers: ["fifteen"], charLimit: 16 },
          explanation: "15 = **fifteen**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q3",
          type: "multiple_choice",
          prompt: "Choose the correct phrase.",
          points: 1,
          config: {
            options: [
              { id: "a", text: "a orange" },
              { id: "b", text: "an orange" },
              { id: "c", text: "the orange" },
            ],
            correctIds: ["b"],
          },
          explanation: "Before a vowel sound, use **an**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q4",
          type: "match",
          prompt: "Match the demonstratives.",
          points: 1,
          config: {
            pairs: [
              { left: "this", right: "one near" },
              { left: "those", right: "many far" },
              { left: "these", right: "many near" },
            ],
          },
          explanation:
            "Demonstratives show distance and number: this/that, these/those.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q5",
          type: "open",
          prompt: "Complete: She ___ wearing a blue jacket.",
          points: 1,
          config: { acceptedAnswers: ["is", "'s"], charLimit: 8 },
          explanation: "Present continuous with she: **She is wearing**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q6",
          type: "multiple_choice",
          prompt: "There ___ two chairs in the room.",
          points: 1,
          config: {
            options: [
              { id: "a", text: "is" },
              { id: "b", text: "are" },
              { id: "c", text: "am" },
            ],
            correctIds: ["b"],
          },
          explanation: "Two chairs = **there are**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q7",
          type: "open",
          prompt: "Complete: He ___ English every night.",
          points: 1,
          config: { acceptedAnswers: ["studies"], charLimit: 16 },
          explanation: "With **he**, *study* becomes **studies**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q8",
          type: "multiple_choice",
          prompt: "We meet ___ Monday.",
          points: 1,
          config: {
            options: [
              { id: "a", text: "at" },
              { id: "b", text: "in" },
              { id: "c", text: "on" },
            ],
            correctIds: ["c"],
          },
          explanation: "Days use **on**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q9",
          type: "true_false",
          prompt: "After **doesn't**, the main verb uses base form.",
          points: 1,
          config: { correct: true },
          explanation: "Correct: *He doesn't study*, not *doesn't studies*.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q10",
          type: "multiple_choice",
          prompt: "This backpack is ___ than that backpack.",
          points: 1,
          config: {
            options: [
              { id: "a", text: "small" },
              { id: "b", text: "smaller" },
              { id: "c", text: "smallest" },
            ],
            correctIds: ["b"],
          },
          explanation: "Compare two things with **smaller than**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q11",
          type: "open",
          prompt: "Complete: This is ___ most useful lesson for me.",
          points: 1,
          config: { acceptedAnswers: ["the"], charLimit: 8 },
          explanation: "Superlatives use **the**: **the most useful**.",
        },
      },
      {
        kind: "question",
        question: {
          id: "final-q12",
          type: "true_false",
          prompt: "“Can she play guitar?” is correct English.",
          points: 1,
          config: { correct: true },
          explanation: "After **can**, use the base verb: **play**.",
        },
      },
    ],
  },
};

export const level1Conclusion: CourseConclusion = {
  title: "Foundations complete",
  body:
    "You can introduce yourself, name everyday things, describe simple routines, and make basic comparisons. The goal was not perfection. The goal was a fast working map of beginner English, and now you have one.",
  nextSteps: [
    "Review any lesson with a weak spot before the next class.",
    "Read one tiny English sentence out loud every day.",
    "Use the audio controls slowly first, then repeat at normal speed.",
  ],
};

export const level1Diploma: DiplomaConfig = {
  title: "WISHUB Foundations Diploma",
  subtitle: "Level 1: Beginner English Foundations",
  issuer: "WISHUB",
};
