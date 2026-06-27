import type { Course } from "@/lib/types";
import {
  finalTest,
  level1Conclusion,
  level1Diploma,
  phase2Units,
} from "@/content/level1-phase2";

/**
 * Level 1 — original VillaAula content. Inspired by the A1 grammar progression only
 * (HANDOFF §9): the sequence of grammar points is universal/uncopyrightable, but
 * every prompt, reading, name, and example here is written fresh for VillaAula.
 */
export const level1: Course = {
  id: "level-1",
  slug: "1",
  level: 1,
  title: "Foundations",
  intro:
    "Your first real steps in English. We start with the words you use every day — who you are, how to say hello, numbers, and colors — and the one little verb that holds it all together: to be. Short exercises, instant feedback, and the grammar is always one tap away.",
  acceptsGuests: true,
  units: [
    {
      id: "u1",
      slug: "1",
      number: 1,
      title: "Hello, English",
      summary:
        "Meet the verb to be, count and tell your age, greet people, name colors, and introduce yourself.",
      lessons: [
        // ---------------------------------------------------------------- L1
        {
          id: "l1",
          slug: "to-be",
          title: "The verb to be",
          topic: "am · is · are",
          deepDives: ["to-be"],
          grammarNote: [
            "**to be** is the verb we use to say *what* or *who* someone is.",
            "It changes shape with the subject:",
            "",
            "- I **am** (I'm)",
            "- you / we / they **are** (you're, we're, they're)",
            "- he / she / it **is** (he's, she's, it's)",
            "",
            "Make it negative by adding **not**: *I am not*, *she is not (isn't)*, *they are not (aren't)*.",
          ].join("\n"),
          grammarNoteEs: [
            "**to be** es el verbo que usamos para decir *qué* o *quién* es alguien.",
            "Cambia de forma según el sujeto:",
            "",
            "- I **am** (I'm)",
            "- you / we / they **are** (you're, we're, they're)",
            "- he / she / it **is** (he's, she's, it's)",
            "",
            "Para hacerlo negativo, agrega **not**: *I am not*, *she is not (isn't)*, *they are not (aren't)*.",
          ].join("\n"),
          exercise: {
            id: "l1-ex",
            title: "Practice: am / is / are",
            items: [
              {
                kind: "content",
                content: {
                  id: "u1-l1-a1",
                  type: "audio",
                  title: "Listen: a quick hello",
                  transcript: "Hi! I'm Tom. I am from Canada, and I am a teacher.",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/u1-l1-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l1-q5",
                  type: "multiple_choice",
                  prompt: "From the audio, what is Tom's job?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "A teacher" },
                      { id: "b", text: "A nurse" },
                      { id: "c", text: "A doctor" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“I am **a teacher**,” Tom says.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l1-q1",
                  type: "multiple_choice",
                  prompt: "I ___ a student.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "am" },
                      { id: "b", text: "is" },
                      { id: "c", text: "are" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "With **I** we always use **am**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l1-q2",
                  type: "multiple_choice",
                  prompt: "She ___ my teacher.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "am" },
                      { id: "b", text: "is" },
                      { id: "c", text: "are" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "He / she / it take **is**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l1-q3",
                  type: "open",
                  prompt: "Complete with the correct form of *to be*: “They ___ from Mexico.”",
                  hint: "you / we / they → ?",
                  points: 1,
                  config: { acceptedAnswers: ["are", "'re"], charLimit: 12, placeholder: "one word" },
                  explanation: "**they are** — plural subjects use *are*.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l1-q4",
                  type: "true_false",
                  prompt: "“You is happy.” — Is this correct English?",
                  points: 1,
                  config: { correct: false },
                  explanation: "It should be **you are happy**. *You* always takes *are*.",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L2
        {
          id: "l2",
          slug: "numbers-age",
          title: "Numbers & age",
          topic: "0–20 · How old are you?",
          grammarNote: [
            "Count from zero: **zero, one, two, three, four, five, six, seven, eight, nine, ten**,",
            "then **eleven, twelve, thirteen … twenty**.",
            "",
            "Watch the *-teen* family: thir**teen**, four**teen**, fif**teen** … they rhyme with *teen*.",
            "",
            "To talk about age we use *to be*, not *have*:",
            "*How old are you?* → **I'm twenty (years old).**",
          ].join("\n"),
          grammarNoteEs: [
            "Cuenta desde cero: **zero, one, two, three, four, five, six, seven, eight, nine, ten**,",
            "luego **eleven, twelve, thirteen … twenty**.",
            "",
            "Fíjate en la familia *-teen*: thir**teen**, four**teen**, fif**teen** … riman con *teen*.",
            "",
            "Para hablar de la edad usamos *to be*, no *have*:",
            "*How old are you?* → **I'm twenty (years old).**",
          ].join("\n"),
          exercise: {
            id: "l2-ex",
            title: "Practice: numbers & age",
            items: [
              {
                kind: "question",
                question: {
                  id: "l2-q1",
                  type: "open",
                  prompt: "Write this number in words: **12**",
                  points: 1,
                  config: { acceptedAnswers: ["twelve"], charLimit: 14, placeholder: "in words" },
                  explanation: "12 = **twelve** (careful — not *twelph*!).",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-q2",
                  type: "multiple_choice",
                  prompt: "Which word is **15**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "fifty" },
                      { id: "b", text: "fifteen" },
                      { id: "c", text: "five" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "**fifteen** (15). *Fifty* is 50.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l2-q3",
                  type: "open",
                  prompt: "Finish the sentence: “I am twenty years ___.”",
                  points: 1,
                  config: { acceptedAnswers: ["old"], charLimit: 8 },
                  explanation: "We say *years **old*** to give an age.",
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L3
        {
          id: "l3",
          slug: "greetings-pronouns",
          title: "Greetings & pronouns",
          topic: "hello · subject pronouns",
          grammarNote: [
            "Greet people by the time of day:",
            "**Good morning** (before noon) · **Good afternoon** (midday→evening) · **Good evening** (night).",
            "*Hi* and *Hello* work any time. To leave: **Goodbye / Bye**.",
            "",
            "**Subject pronouns** replace names so we don't repeat them:",
            "**I, you, he, she, it, we, they**.",
            "*Maria → **she***, *Carlos → **he***, *the dog → **it***, *Ana and I → **we***.",
          ].join("\n"),
          grammarNoteEs: [
            "Saluda según la hora del día:",
            "**Good morning** (antes del mediodía) · **Good afternoon** (mediodía→tarde) · **Good evening** (noche).",
            "*Hi* y *Hello* sirven a cualquier hora. Para despedirte: **Goodbye / Bye**.",
            "",
            "Los **subject pronouns** (pronombres de sujeto) reemplazan los nombres para no repetirlos:",
            "**I, you, he, she, it, we, they**.",
            "*Maria → **she***, *Carlos → **he***, *the dog → **it***, *Ana and I → **we***.",
          ].join("\n"),
          exercise: {
            id: "l3-ex",
            title: "Practice: greetings & pronouns",
            items: [
              {
                kind: "question",
                question: {
                  id: "l3-q1",
                  type: "match",
                  prompt: "Match each greeting to the right time of day.",
                  points: 1,
                  config: {
                    pairs: [
                      { left: "Good morning", right: "7:00 a.m." },
                      { left: "Good afternoon", right: "3:00 p.m." },
                      { left: "Good evening", right: "9:00 p.m." },
                    ],
                  },
                  explanation: "Morning → afternoon → evening follow the clock.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l3-q2",
                  type: "multiple_choice",
                  prompt: "Replace the name: “Maria is here.” → “___ is here.”",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "He" },
                      { id: "b", text: "She" },
                      { id: "c", text: "It" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "Maria is one woman → **she**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l3-q3",
                  type: "true_false",
                  prompt: "“Goodbye” is a way to *say hello* to someone.",
                  points: 1,
                  config: { correct: false },
                  explanation: "*Goodbye* is for leaving, not arriving.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l3-q4",
                  type: "speaking",
                  prompt: "Now say it out loud — greet someone in the morning:",
                  points: 1,
                  config: {
                    target: "Good morning!",
                    acceptedAnswers: ["good morning"],
                    maxSeconds: 8,
                  },
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L4
        {
          id: "l4",
          slug: "colors",
          title: "Colors & the classroom",
          topic: "colors · it's + adjective",
          grammarNote: [
            "Common colors: **red, orange, yellow, green, blue, purple, pink, brown, black, white, gray**.",
            "",
            "Ask and answer with *to be*:",
            "*What color is it?* → **It's blue.**",
            "The color word (an adjective) comes **before** the noun: *a **red** book*, not *a book red*.",
          ].join("\n"),
          grammarNoteEs: [
            "Colores comunes: **red, orange, yellow, green, blue, purple, pink, brown, black, white, gray**.",
            "",
            "Pregunta y responde con *to be*:",
            "*What color is it?* → **It's blue.**",
            "La palabra del color (un adjetivo) va **antes** del sustantivo: *a **red** book*, no *a book red*.",
          ].join("\n"),
          exercise: {
            id: "l4-ex",
            title: "Practice: colors",
            items: [
              {
                kind: "content",
                content: {
                  id: "l4-c1",
                  type: "reading",
                  emoji: "🎨",
                  title: "Quick mix",
                  body: "Painters make new colors by mixing. Blue and yellow make green. Red and white make pink. Black and white make gray.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l4-q1",
                  type: "multiple_choice",
                  prompt: "On a clear day, the sky is ___.",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "blue" },
                      { id: "b", text: "brown" },
                      { id: "c", text: "purple" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A clear daytime sky is **blue**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l4-q2",
                  type: "open",
                  prompt: "From the reading: blue and yellow make ___.",
                  points: 1,
                  config: { acceptedAnswers: ["green"], charLimit: 10 },
                  explanation: "Blue + yellow = **green**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l4-q3",
                  type: "open",
                  prompt: "Use *to be*: “It ___ a green book.”",
                  points: 1,
                  config: { acceptedAnswers: ["is", "'s"], charLimit: 6 },
                  explanation: "*It* takes **is** → *It's a green book.*",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l4-q4",
                  type: "speaking",
                  prompt: "Say this sentence out loud:",
                  points: 1,
                  config: {
                    target: "The sky is blue.",
                    acceptedAnswers: ["the sky is blue", "sky is blue"],
                    maxSeconds: 8,
                  },
                },
              },
            ],
          },
        },
        // ---------------------------------------------------------------- L5
        {
          id: "l5",
          slug: "people-jobs",
          title: "Meet someone",
          topic: "a / an · questions with to be",
          grammarNote: [
            "Use **a / an** before a job: *a teacher, an engineer*.",
            "Use **an** before a vowel sound (a, e, i, o, u): *an artist*, *an actor*.",
            "",
            "Ask about people with *to be*:",
            "*What's your name?* · *Where are you from?* · *How old are you?*",
            "Answer in full: **I'm Ana. I'm from Chihuahua. I'm 25.**",
          ].join("\n"),
          grammarNoteEs: [
            "Usa **a / an** antes de una profesión: *a teacher, an engineer*.",
            "Usa **an** antes de un sonido vocálico (a, e, i, o, u): *an artist*, *an actor*.",
            "",
            "Pregunta sobre las personas con *to be*:",
            "*What's your name?* · *Where are you from?* · *How old are you?*",
            "Responde completo: **I'm Ana. I'm from Chihuahua. I'm 25.**",
          ].join("\n"),
          exercise: {
            id: "l5-ex",
            title: "Practice: introductions",
            items: [
              {
                kind: "content",
                content: {
                  id: "l5-c1",
                  type: "reading",
                  emoji: "👋",
                  title: "Meet Ana",
                  body: "Hi! My name is Ana. I am a nurse. I am from Chihuahua, in Mexico. I am twenty-five years old, and I love my job.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l5-q1",
                  type: "multiple_choice",
                  prompt: "What is Ana's job?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "a teacher" },
                      { id: "b", text: "a nurse" },
                      { id: "c", text: "a doctor" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "“I am **a nurse**,” Ana says.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l5-q2",
                  type: "open",
                  prompt: "Where is Ana from?",
                  hint: "one city",
                  points: 1,
                  config: { acceptedAnswers: ["chihuahua"], charLimit: 20 },
                  explanation: "She's from **Chihuahua**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l5-q3",
                  type: "multiple_choice",
                  prompt: "Choose the right word: “She is ___ engineer.”",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "a" },
                      { id: "b", text: "an" },
                      { id: "c", text: "the" },
                    ],
                    correctIds: ["b"],
                  },
                  explanation: "*Engineer* starts with a vowel sound → **an**.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "l5-q4",
                  type: "true_false",
                  prompt: "Ana is from Mexico.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Chihuahua is a city in **Mexico**, so this is true.",
                },
              },
            ],
          },
        },
      ],
    },
    ...phase2Units,
  ],
  finalTest,
  conclusion: level1Conclusion,
  diploma: level1Diploma,
};
