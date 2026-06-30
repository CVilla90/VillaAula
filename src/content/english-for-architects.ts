import type { Course } from "@/lib/types";

/**
 * English for Architects — VillaAula's first **Professional English (ESP)** course
 * (PROFESSIONAL_ENGLISH_PROPOSAL.md, approved 2026-06-28). Not a CEFR level: it assumes
 * ~B1–B2 general English and teaches a professional to *operate* in English — pitch a
 * concept, survive a crit, manage a client, write an unambiguous RFI, coordinate, run a
 * site, make the sustainability case, and tell the story of a project.
 *
 * ── The ESL bilingual rule (Carlos's call) ──
 * This is an English course, NOT a Spanish-only experience. So it is **monolingual
 * English content** (prompts, readings, exercises, the professional artifacts all stay in
 * English — that's what the learner is here to learn). The ONLY thing that toggles to
 * Spanish is the **explanation note** on each lesson (via `grammarNoteEs`): the *prose*
 * becomes Spanish while every keyword, collocation, and example phrase stays in English.
 * We deliberately do NOT set `bilingual: true` (that would flip prompts/options to ES).
 * The note panel is relabelled to a "Pro tip" via `noteLabel`.
 *
 * 100% original content (§9). Architecture/industry terms (parti, RFI, snagging, LEED,
 * value-engineer…) stay verbatim — they're the keywords. 8 units · 32 lessons · 8 speaking ·
 * 8 draft-compare (the "Portfolio Pack") · 8 listening clips · 12-question final (pass 9).
 */
export const englishForArchitects: Course = {
  id: "english-for-architects",
  slug: "architects",
  level: 1,
  title: "English for Architects",
  intro:
    "Architecture is a global profession, and English is the language it negotiates, presents, and builds in. This course isn't a vocabulary list — it's the communication the job actually demands: pitching a concept, defending it in a crit, managing a client, writing an instruction a contractor can't misread, coordinating with engineers, running a site, making the case for a greener design, and telling the story of your work. You read, listen, speak, and write your way through a real project, from first sketch to final lecture. The exercises are in English (that's the point); when you need it, every explanation can flip to Spanish — with the key terms kept in English.",
  acceptsGuests: true,
  noteLabel: "Pro tip — how it's said in English",
  units: [
    // ============================== UNIT 1 ==============================
    {
      id: "efau1",
      slug: "1",
      number: 1,
      title: "Concept & Parti",
      summary:
        "Turning an idea into words — the language of the concept, the parti, and the design narrative that frames everything you'll present.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau1l1",
          slug: "reading-concept",
          title: "Reading a design statement",
          topic: "the concept · narrative · the parti",
          grammarNote: [
            "Architects frame a project with a **concept** — the single big idea — often called the",
            "**parti**. The statement explains how that idea drives the design. Watch the verbs:",
            "- *the design is **driven by** / **informed by** / **responds to** / **is organised around**…*",
            "- *the parti is a simple move: a bar, a courtyard, a folded roof.*",
            "A strong statement names **one** idea and shows how the building follows from it.",
          ].join("\n"),
          grammarNoteEs: [
            "Los arquitectos enmarcan un proyecto con un **concept** — la única idea grande — a menudo",
            "llamada el **parti**. El statement explica cómo esa idea dirige el diseño. Observa los verbos:",
            "- *the design is **driven by** / **informed by** / **responds to** / **is organised around**…*",
            "- *the parti is a simple move: a bar, a courtyard, a folded roof.*",
            "Un buen statement nombra **una** idea y muestra cómo el edificio se deriva de ella.",
          ].join("\n"),
          exercise: {
            id: "efau1l1-ex",
            title: "Practice: reading the concept",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau1l1-r1",
                  type: "reading",
                  emoji: "📐",
                  title: "A library on a steep site",
                  body: "The design is driven by a single move: rather than fight the slope, the building steps down it. Each reading room sits half a level below the last, so the whole library becomes one continuous descent toward the river. The parti is a staircase you can read in. Circulation, structure and views all follow from that one decision — to let the ground, not the plan, shape the section.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l1-q1",
                  type: "multiple_choice",
                  prompt: "What is the **parti** (the core move) of this project?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The building steps down the slope as a continuous descent" },
                      { id: "b", text: "A tall tower on a flat plan" },
                      { id: "c", text: "A symmetrical box around a courtyard" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“The parti is a staircase you can read in” — stepping down the slope.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l1-q2",
                  type: "open",
                  prompt: "Complete the concept verb: “The design is ___ by a single move.” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["driven"], charLimit: 10 },
                  explanation: "*driven by* — a standard way to name what generates a design.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l1-q3",
                  type: "true_false",
                  prompt: "The statement lets the section be shaped by the ground rather than a fixed plan.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“…to let the ground, not the plan, shape the section.” ✓",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau1l2",
          slug: "listening-pinup",
          title: "Hearing a concept presented",
          topic: "presenting · signposting a pin-up",
          grammarNote: [
            "When an architect presents at a **pin-up**, they signpost so you can follow the drawings:",
            "- start: *The starting point was… / What you're looking at is…*",
            "- move through: *On the ground floor… / As you move up…*",
            "- the idea: *The key move here is…*",
            "Listen for the **signposts** — they tell you which drawing and which idea comes next.",
          ].join("\n"),
          grammarNoteEs: [
            "Cuando un arquitecto presenta en un **pin-up**, usa señales para que sigas los planos:",
            "- inicio: *The starting point was… / What you're looking at is…*",
            "- recorrido: *On the ground floor… / As you move up…*",
            "- la idea: *The key move here is…*",
            "Escucha las **señales** (signposts) — te dicen qué plano y qué idea vienen después.",
          ].join("\n"),
          exercise: {
            id: "efau1l2-ex",
            title: "Practice: following a pin-up",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau1l2-a1",
                  type: "audio",
                  title: "Listen: a student presents",
                  transcript:
                    "So, what you're looking at is a community centre for a narrow corner site. The starting point was the corner itself — we wanted the building to turn it, not just sit on it. On the ground floor, the café wraps the corner and pulls people in. As you move up, the plan opens to a double-height hall. The key move here is that the staircase becomes the social space, so circulation and gathering are the same thing.",
                  voice: "en-US-AvaMultilingualNeural",
                  mediaUrl: "/audio/efau1l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l2-q1",
                  type: "multiple_choice",
                  prompt: "What was the **starting point** of the design?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The corner site itself" },
                      { id: "b", text: "A client's budget" },
                      { id: "c", text: "A famous precedent building" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“The starting point was the corner itself.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l2-q2",
                  type: "true_false",
                  prompt: "In the key move, the staircase doubles as the social space.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“…the staircase becomes the social space.” ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l2-q3",
                  type: "open",
                  prompt: "Signpost the big idea: “The key ___ here is…” (one word)",
                  points: 1,
                  config: { acceptedAnswers: ["move", "idea"], charLimit: 8 },
                  explanation: "*The key move here is…* introduces the central design decision.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau1l3",
          slug: "speaking-pitch",
          title: "Pitch your concept in sixty seconds",
          topic: "speaking · the concept pitch",
          grammarNote: [
            "A concept pitch is short and has a shape:",
            "- the **driver** (the site, brief or idea that started it): *The site gave us…*",
            "- the **move** (what you did about it): *So we…*",
            "- the **payoff** (what it gives the user): *…which means…*",
            "Lead with the idea, not a tour of every room. One clear move beats five vague features.",
          ].join("\n"),
          grammarNoteEs: [
            "Un concept pitch es corto y tiene una forma:",
            "- el **driver** (el sitio, brief o idea que lo originó): *The site gave us…*",
            "- el **move** (lo que hiciste al respecto): *So we…*",
            "- el **payoff** (lo que le da al usuario): *…which means…*",
            "Empieza con la idea, no con un tour de cada cuarto. Un solo move claro vale más que cinco",
            "features vagas.",
          ].join("\n"),
          exercise: {
            id: "efau1l3-ex",
            title: "Practice: the concept pitch",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau1l3-q1",
                  type: "open",
                  prompt: "Name the first beat of a concept pitch — the site or idea that started it: the ___.",
                  points: 1,
                  config: { acceptedAnswers: ["driver"], charLimit: 10 },
                  explanation: "The *driver* is what generated the design.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l3-q2",
                  type: "speaking",
                  prompt: "Pitch a concept for a small house on a noisy street (driver → move → payoff).",
                  points: 1,
                  config: {
                    target: "The street was too noisy, so we turned the house inward around a quiet courtyard, which means every room looks onto calm instead of traffic.",
                    acceptedAnswers: [
                      "the street was too noisy so we turned the house inward around a quiet courtyard which means every room looks onto calm instead of traffic",
                      "the street was too noisy so we turned the house inward around a quiet courtyard which means every room looks onto calm not traffic",
                      "the street was too noisy so we turned the house inwards around a quiet courtyard which means every room looks onto calm instead of traffic",
                    ],
                    maxSeconds: 16,
                  },
                  explanation: "Driver (noise) → move (turn inward to a courtyard) → payoff (calm rooms). One clean idea.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING ----
        {
          id: "efau1l4",
          slug: "writing-statement",
          title: "Write the design statement",
          topic: "writing · the design statement",
          grammarNote: [
            "A design statement is a tight paragraph that earns the reader's trust:",
            "- open with the **one idea**, not the site address.",
            "- present tense, active voice: *The building folds…*, not *It was decided that…*",
            "- end on what it gives the user, not a list of materials.",
            "This becomes the first page of your **Portfolio Pack** — make it sound like you.",
          ].join("\n"),
          grammarNoteEs: [
            "Un design statement es un párrafo conciso que gana la confianza del lector:",
            "- abre con la **única idea**, no con la dirección del sitio.",
            "- presente, voz activa: *The building folds…*, no *It was decided that…*",
            "- cierra con lo que le da al usuario, no con una lista de materiales.",
            "Esto se vuelve la primera página de tu **Portfolio Pack** — haz que suene a ti.",
          ].join("\n"),
          exercise: {
            id: "efau1l4-ex",
            title: "Practice: write the statement",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau1l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write a 3–4 sentence design statement for a project of YOUR own (real or studio). Open with the single concept; use present-tense active voice; end on what it gives the people who use it.",
                  points: 1,
                  config: {
                    placeholder: "The design begins with one idea: …",
                    model:
                      "The design begins with one idea: a roof that everyone shares. A single folded plane slides down from the street to the garden, sheltering a market hall beneath it. Below, the plan stays deliberately loose, so stalls, classes and gatherings can each claim the space in turn. The building gives the neighbourhood not a fixed programme, but a generous, weather-proof room it can use however it needs.",
                    checklist: [
                      "Does it open with one clear concept, not the address or brief?",
                      "Is it present tense and active (the building does X)?",
                      "Did you avoid a dry materials list?",
                      "Does it end on what the user gets?",
                    ],
                    charLimit: 700,
                  },
                  explanation: "One idea up front, active present tense, a human payoff — a statement worth the first page.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau1l4-q2",
                  type: "multiple_choice",
                  prompt: "Which opening is the stronger design-statement first line?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The design begins with one idea: a roof that everyone shares." },
                      { id: "b", text: "The site is located at 14 North Street, area 320 m²." },
                      { id: "c", text: "It was decided that materials would be chosen later." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Lead with the idea; the address and passive process belong elsewhere (or nowhere).",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 2 ==============================
    {
      id: "efau2",
      slug: "2",
      number: 2,
      title: "The Crit",
      summary:
        "Surviving and using the design review — reading feedback, hearing what a jury is really asking, and defending your work without getting defensive.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau2l1",
          slug: "reading-feedback",
          title: "Reading crit feedback",
          topic: "critique · hedged criticism",
          grammarNote: [
            "Written crit feedback is usually **hedged** — the real note hides inside polite phrasing:",
            "- *\"I'd push the section further\"* = the section isn't resolved yet.",
            "- *\"It's an interesting choice to…\"* = I'm not convinced by…",
            "- *\"What's driving this?\"* = I can't see the logic; justify it.",
            "Read for the **note under the politeness** — that's the work to do.",
          ].join("\n"),
          grammarNoteEs: [
            "El feedback escrito de un crit suele estar **matizado** (hedged) — la nota real se esconde",
            "tras frases corteses:",
            "- *\"I'd push the section further\"* = la sección aún no está resuelta.",
            "- *\"It's an interesting choice to…\"* = no me convence…",
            "- *\"What's driving this?\"* = no veo la lógica; justifícalo.",
            "Lee la **nota bajo la cortesía** — ahí está el trabajo por hacer.",
          ].join("\n"),
          exercise: {
            id: "efau2l1-ex",
            title: "Practice: reading feedback",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau2l1-r1",
                  type: "reading",
                  emoji: "📝",
                  title: "Notes from the panel",
                  body: "\"There's a lot to like here. The plan is clear and the model is beautifully made. I would say the section is doing less than the plan — I'd push it further. And I'm curious what's driving the choice of brick on the north face; it reads as a default rather than a decision. But the bones are strong. Resolve the section and you have a project.\"",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l1-q1",
                  type: "multiple_choice",
                  prompt: "What is the panel's main piece of work for the student?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Develop and resolve the section" },
                      { id: "b", text: "Rebuild the model more beautifully" },
                      { id: "c", text: "Make the plan less clear" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“Resolve the section and you have a project” — the section is the task.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l1-q2",
                  type: "multiple_choice",
                  prompt: "“It reads as a default rather than a decision” about the brick means…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "the material choice looks unjustified" },
                      { id: "b", text: "the brick is the best part" },
                      { id: "c", text: "the brick is the wrong colour" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A polite way to say: justify this, it looks like you didn't choose it.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l1-q3",
                  type: "true_false",
                  prompt: "Despite the criticism, the panel thinks the underlying project is strong.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“The bones are strong.” ✓",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau2l2",
          slug: "listening-jury",
          title: "What the jury is really asking",
          topic: "listening · clarifying vs challenging questions",
          grammarNote: [
            "Crit questions come in two kinds — answer them differently:",
            "- **clarifying** (*Where's the entrance?*) → just answer, briefly.",
            "- **challenging** (*Why brick and not concrete?*) → justify the decision, don't apologise.",
            "A challenge is an invitation to defend, not an attack. Listen for *why* — that's a challenge.",
          ].join("\n"),
          grammarNoteEs: [
            "Las preguntas de un crit son de dos tipos — respóndelas distinto:",
            "- **clarifying** (*Where's the entrance?*) → solo responde, breve.",
            "- **challenging** (*Why brick and not concrete?*) → justifica la decisión, no te disculpes.",
            "Un challenge es una invitación a defender, no un ataque. Escucha el *why* — eso es un challenge.",
          ].join("\n"),
          exercise: {
            id: "efau2l2-ex",
            title: "Practice: hearing the question",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau2l2-a1",
                  type: "audio",
                  title: "Listen: the panel responds",
                  transcript:
                    "Thank you, that was clear. Two things. First, just so I understand — is the main entrance on the south side or the courtyard? And second, the bigger question: why does the housing turn its back on the park? I'd have expected you to open onto it. Help me understand the thinking there.",
                  voice: "en-US-AndrewNeural",
                  mediaUrl: "/audio/efau2l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l2-q1",
                  type: "multiple_choice",
                  prompt: "Which is the **challenging** question (the one to justify)?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Why does the housing turn its back on the park?" },
                      { id: "b", text: "Is the entrance on the south side or the courtyard?" },
                      { id: "c", text: "Both are simple clarifications." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "The *why* about the park is a challenge — defend the decision.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l2-q2",
                  type: "true_false",
                  prompt: "The entrance question is a clarifying question you can answer in a few words.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“Just so I understand…” — a clarifier; answer briefly. ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l2-q3",
                  type: "open",
                  prompt: "Which question word usually signals a challenge to justify a decision? ___",
                  points: 1,
                  config: { acceptedAnswers: ["why"], charLimit: 6 },
                  explanation: "*Why…?* asks you to justify, not just inform.",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau2l3",
          slug: "speaking-defend",
          title: "Defend without getting defensive",
          topic: "speaking · concede-and-defend in a crit",
          grammarNote: [
            "Under a tough question, the strong move is **acknowledge → reason → stand**:",
            "- acknowledge: *That's a fair question.*",
            "- reason: *We turned away from the park because the afternoon sun and the noise were on that side.*",
            "- stand: *So the quiet side faces the homes, and the park becomes the shared front.*",
            "Never just apologise (*yeah, you're right, it's bad*). Give the logic and own the decision.",
          ].join("\n"),
          grammarNoteEs: [
            "Ante una pregunta difícil, el movimiento fuerte es **acknowledge → reason → stand**:",
            "- acknowledge: *That's a fair question.*",
            "- reason: *We turned away from the park because the afternoon sun and the noise were on that side.*",
            "- stand: *So the quiet side faces the homes, and the park becomes the shared front.*",
            "Nunca solo te disculpes (*yeah, you're right, it's bad*). Da la lógica y asume la decisión.",
          ].join("\n"),
          exercise: {
            id: "efau2l3-ex",
            title: "Practice: defending a choice",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau2l3-q1",
                  type: "multiple_choice",
                  prompt: "A juror asks why your rooms are small. The best **first** words are…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "That's a fair question — here's the thinking." },
                      { id: "b", text: "Yeah, you're right, they're too small." },
                      { id: "c", text: "Does it really matter?" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Acknowledge, then give the reasoning — composed, not defensive or dismissive.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l3-q2",
                  type: "speaking",
                  prompt: "Defend this: a juror asks why you used exposed concrete. Acknowledge, give a reason, stand by it.",
                  points: 1,
                  config: {
                    target: "That's a fair question; we left the concrete exposed because it's the structure doing the work, and showing it keeps the building honest and low-maintenance.",
                    acceptedAnswers: [
                      "thats a fair question we left the concrete exposed because its the structure doing the work and showing it keeps the building honest and low maintenance",
                      "that is a fair question we left the concrete exposed because it is the structure doing the work and showing it keeps the building honest and low maintenance",
                      "thats a fair question we left the concrete exposed because its the structure doing the work and showing it keeps the building honest and lowmaintenance",
                    ],
                    maxSeconds: 16,
                  },
                  explanation: "Acknowledge → reason (structure does the work) → stand (honest, low-maintenance).",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING ----
        {
          id: "efau2l4",
          slug: "writing-response",
          title: "A reflective response to feedback",
          topic: "writing · turning a crit into a plan",
          grammarNote: [
            "After a crit, a short written reflection turns notes into action — useful for tutors,",
            "clients, or your own log:",
            "- restate the note neutrally: *The panel felt the section was underdeveloped.*",
            "- agree where it's true, push back where it isn't (politely).",
            "- end with **next steps**: *I'll develop the section and test the brick against concrete.*",
          ].join("\n"),
          grammarNoteEs: [
            "Tras un crit, una breve reflexión escrita convierte las notas en acción — útil para tutores,",
            "clientes o tu propia bitácora:",
            "- reformula la nota neutral: *The panel felt the section was underdeveloped.*",
            "- concede donde sea cierto, replica donde no lo sea (con cortesía).",
            "- termina con **next steps**: *I'll develop the section and test the brick against concrete.*",
          ].join("\n"),
          exercise: {
            id: "efau2l4-ex",
            title: "Practice: write the reflection",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau2l4-q1",
                  type: "draft_compare",
                  prompt:
                    "You just got the feedback from this unit's reading (resolve the section; justify the brick). Write a 3–4 sentence reflective response: restate the notes, agree or push back, and give clear next steps.",
                  points: 1,
                  config: {
                    placeholder: "The panel felt that…",
                    model:
                      "The panel felt the section was doing less than the plan, and I agree — right now it's a container, not an idea. Their note on the brick is fair too; I chose it for warmth, but I never tested the alternative, so it does read as a default. Over the next week I'll develop the section so it carries the stepping concept, and I'll model the north face in both brick and concrete to make the material a decision I can defend. The plan and model are working, so I'll leave those and put the time into the section.",
                    checklist: [
                      "Did you restate each note neutrally first?",
                      "Did you agree where fair and push back where not?",
                      "Are there concrete next steps with a rough timeframe?",
                      "Does it read as a plan, not an apology?",
                    ],
                    charLimit: 800,
                  },
                  explanation: "Restate → agree/push back → next steps. A crit becomes a work plan.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau2l4-q2",
                  type: "true_false",
                  prompt: "A good reflection ends with concrete next steps, not just feelings about the crit.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Next steps are what make it useful. ✓",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 3 ==============================
    {
      id: "efau3",
      slug: "3",
      number: 3,
      title: "The Client",
      summary:
        "Speaking the client's language — reading a brief for what matters, hearing the real priority, and delivering trade-offs and bad news with tact.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau3l1",
          slug: "reading-brief",
          title: "Reading a client brief",
          topic: "the brief · needs vs wishes",
          grammarNote: [
            "A brief mixes hard requirements with soft wishes — modal verbs sort them:",
            "- **must / shall / is required to** = non-negotiable.",
            "- **should** = strongly preferred.",
            "- **would like / ideally / it would be nice to** = a wish, drop it first if budget bites.",
            "Read the modals and you know what's fixed and what's flexible.",
          ].join("\n"),
          grammarNoteEs: [
            "Un brief mezcla requisitos duros con deseos suaves — los verbos modales los separan:",
            "- **must / shall / is required to** = no negociable.",
            "- **should** = fuertemente preferido.",
            "- **would like / ideally / it would be nice to** = un deseo; descártalo primero si el",
            "presupuesto aprieta.",
            "Lee los modales y sabrás qué es fijo y qué es flexible.",
          ].join("\n"),
          exercise: {
            id: "efau3l1-ex",
            title: "Practice: reading the brief",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau3l1-r1",
                  type: "reading",
                  emoji: "📋",
                  title: "A brief for a clinic",
                  body: "The clinic must provide eight consultation rooms and a step-free entrance — these are non-negotiable for licensing. The waiting area should feel calm and bring in daylight. Ideally, the staff would like a small roof terrace for breaks, and it would be nice to keep the existing tree on the site. The budget is fixed; the timeline has some flexibility.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l1-q1",
                  type: "multiple_choice",
                  prompt: "Which is a **non-negotiable** requirement?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "A step-free entrance" },
                      { id: "b", text: "A roof terrace for staff" },
                      { id: "c", text: "Keeping the existing tree" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“must provide… a step-free entrance… non-negotiable for licensing.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l1-q2",
                  type: "multiple_choice",
                  prompt: "If the budget gets tight, which item should go **first**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The roof terrace (a wish)" },
                      { id: "b", text: "The eight consultation rooms" },
                      { id: "c", text: "The step-free entrance" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“Ideally… would like” marks the terrace as a wish — first to cut.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l1-q3",
                  type: "open",
                  prompt: "Which modal verb marks a hard requirement in the brief? ___",
                  points: 1,
                  config: { acceptedAnswers: ["must", "shall"], charLimit: 8 },
                  explanation: "*must* (and *shall*) signal the non-negotiables.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau3l2",
          slug: "listening-client",
          title: "Hearing the real priority",
          topic: "listening · what the client actually wants",
          grammarNote: [
            "Clients rarely state the real priority plainly — listen for the **emphasis**:",
            "- repetition (*the light, really the light*) flags what matters most.",
            "- a worry voiced twice (*as long as it's not over budget*) is the true constraint.",
            "- *the main thing is…* hands you the priority directly — catch it.",
            "Solve for what they care about, not just what they listed.",
          ].join("\n"),
          grammarNoteEs: [
            "Los clientes rara vez dicen la prioridad real de forma directa — escucha el **énfasis**:",
            "- la repetición (*the light, really the light*) marca lo que más importa.",
            "- una preocupación dicha dos veces (*as long as it's not over budget*) es la verdadera",
            "restricción.",
            "- *the main thing is…* te entrega la prioridad directamente — cápta la.",
            "Resuelve lo que les importa, no solo lo que enlistaron.",
          ].join("\n"),
          exercise: {
            id: "efau3l2-ex",
            title: "Practice: hearing the client",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau3l2-a1",
                  type: "audio",
                  title: "Listen: a first client meeting",
                  transcript:
                    "We've seen lots of nice designs, but honestly, the main thing for us is light. The old office was dark and everyone hated it. So light, really — that's the priority. We're open on the layout, we're open on the materials, as long as it stays on budget. But please, whatever you do, don't give us another dark box.",
                  voice: "en-US-AriaNeural",
                  mediaUrl: "/audio/efau3l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l2-q1",
                  type: "multiple_choice",
                  prompt: "What is the client's true priority?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Daylight" },
                      { id: "b", text: "A specific material palette" },
                      { id: "c", text: "A fixed layout" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“The main thing for us is light… that's the priority.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l2-q2",
                  type: "true_false",
                  prompt: "The client has a fixed idea about the materials.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“We're open on the materials, as long as it stays on budget.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l2-q3",
                  type: "open",
                  prompt: "What single constraint does the client repeat as the limit? on ___",
                  points: 1,
                  config: { acceptedAnswers: ["budget"], charLimit: 10 },
                  explanation: "“…as long as it stays on budget.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau3l3",
          slug: "speaking-tradeoff",
          title: "Delivering a trade-off",
          topic: "speaking · explaining trade-offs & bad news",
          grammarNote: [
            "Clients respect honesty delivered with tact. To explain a trade-off:",
            "- name the tension plainly: *We can have the glass façade or the budget — not both.*",
            "- give options, not just a problem: *Option A keeps the glass and trims elsewhere; Option B…*",
            "- recommend, don't dump the decision: *My advice would be…*",
            "Cushion the bad news, but never hide it.",
          ].join("\n"),
          grammarNoteEs: [
            "Los clientes respetan la honestidad con tacto. Para explicar un trade-off:",
            "- nombra la tensión claramente: *We can have the glass façade or the budget — not both.*",
            "- da opciones, no solo un problema: *Option A keeps the glass and trims elsewhere; Option B…*",
            "- recomienda, no descargues la decisión: *My advice would be…*",
            "Acolchona la mala noticia, pero nunca la escondas.",
          ].join("\n"),
          exercise: {
            id: "efau3l3-ex",
            title: "Practice: the trade-off",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau3l3-q1",
                  type: "multiple_choice",
                  prompt: "Which is the most professional way to raise a budget problem?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "I want to be straight with you: we have a choice to make. Here are two options." },
                      { id: "b", text: "There's a huge problem and it's not my fault." },
                      { id: "c", text: "Don't worry about it, we'll figure it out somehow." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Honest, calm, and solution-shaped (offers options) — that's tact, not avoidance.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l3-q2",
                  type: "speaking",
                  prompt: "Tell a client the full glass façade is over budget, and offer a path forward.",
                  points: 1,
                  config: {
                    target: "I want to be straight with you: the full glass façade has pushed us over budget, so my advice would be to keep glass on the main face and use a cheaper cladding on the sides.",
                    acceptedAnswers: [
                      "i want to be straight with you the full glass facade has pushed us over budget so my advice would be to keep glass on the main face and use a cheaper cladding on the sides",
                      "i want to be straight with you the full glass facade has pushed us over budget so my advice would be to keep glass on the main face and use cheaper cladding on the sides",
                      "i want to be straight with you the full glass facade has put us over budget so my advice would be to keep glass on the main face and use a cheaper cladding on the sides",
                    ],
                    maxSeconds: 17,
                  },
                  explanation: "Names the tension, cushions it, and recommends — bad news handled like a professional.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING ----
        {
          id: "efau3l4",
          slug: "writing-update",
          title: "The diplomatic client update",
          topic: "writing · the client email",
          grammarNote: [
            "A client update email is clear, warm, and forward-moving:",
            "- lead with the **headline** (where things stand), not a wall of detail.",
            "- flag any issue early, paired with a proposed fix.",
            "- end with a clear **ask or next step** and a date.",
            "Plain and kind beats formal and cold — the client should feel in safe hands.",
          ].join("\n"),
          grammarNoteEs: [
            "Un correo de actualización al cliente es claro, cálido y avanza:",
            "- empieza con el **headline** (en qué punto están), no con un muro de detalle.",
            "- señala cualquier problema temprano, junto con una solución propuesta.",
            "- termina con una **petición o siguiente paso** claros y una fecha.",
            "Claro y amable gana a formal y frío — el cliente debe sentirse en buenas manos.",
          ].join("\n"),
          exercise: {
            id: "efau3l4-ex",
            title: "Practice: write the update",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau3l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write a short client update email (3–5 sentences): the design is on track, but one item (say, a long lead time on the windows) needs a decision. Lead with the headline, pair the issue with a fix, and end with a dated next step.",
                  points: 1,
                  config: {
                    placeholder: "Hi Maria, a quick update on the clinic…",
                    model:
                      "Hi Maria, a quick update on the clinic: the design is on track and we're happy with how the waiting area is coming together. One thing needs an early decision — the windows we specified have a ten-week lead time, which would push the opening into spring. We've found an equivalent with a four-week lead, very slightly different in finish, which I'd recommend. Could you let me know by Friday so we can lock the order and protect the timeline? Happy to jump on a quick call if that's easier.",
                    checklist: [
                      "Does it open with the headline (on track), not detail?",
                      "Is the issue paired with a concrete recommendation?",
                      "Is there a clear ask with a date?",
                      "Is the tone warm and reassuring, not cold or alarming?",
                    ],
                    charLimit: 700,
                  },
                  explanation: "Headline → issue+fix → dated ask. The client feels informed and in safe hands.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau3l4-q2",
                  type: "multiple_choice",
                  prompt: "Where should a client update put the most important point?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "First — lead with the headline" },
                      { id: "b", text: "Buried in the middle" },
                      { id: "c", text: "Only in an attachment" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Busy clients read the first line — lead with where things stand.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 4 ==============================
    {
      id: "efau4",
      slug: "4",
      number: 4,
      title: "Drawings & Documents",
      summary:
        "Writing English that can't be misread — drawing notes, specifications, schedules, and the RFI, where one vague sentence costs real money.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau4l1",
          slug: "reading-spec",
          title: "Reading a specification",
          topic: "specs · the language of instruction",
          grammarNote: [
            "Specs use a tight, repeatable grammar so nothing is ambiguous:",
            "- **shall / is to be** = mandatory: *All steel shall be galvanised.*",
            "- **provide / install / supply** = the contractor's verbs.",
            "- exact references, no adjectives of opinion: *to BS EN 1090*, not *good quality*.",
            "If a word could be read two ways, a spec rewrites it until it can't.",
          ].join("\n"),
          grammarNoteEs: [
            "Las specs usan una gramática estricta y repetible para que nada sea ambiguo:",
            "- **shall / is to be** = obligatorio: *All steel shall be galvanised.*",
            "- **provide / install / supply** = los verbos del contratista.",
            "- referencias exactas, sin adjetivos de opinión: *to BS EN 1090*, no *good quality*.",
            "Si una palabra pudiera leerse de dos formas, una spec la reescribe hasta que no pueda.",
          ].join("\n"),
          exercise: {
            id: "efau4l1-ex",
            title: "Practice: reading a spec",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau4l1-r1",
                  type: "reading",
                  emoji: "📑",
                  title: "Three clauses",
                  body: "Clause 1: \"All external steelwork shall be hot-dip galvanised to BS EN ISO 1461.\" Clause 2: \"The contractor is to provide and install three coats of paint to all exposed timber.\" Clause 3: \"Provide movement joints at maximum 6 m centres.\" Notice: no opinions, no 'nice', no 'about'. Every clause says exactly what, exactly how much, and to exactly which standard.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l1-q1",
                  type: "multiple_choice",
                  prompt: "Which word makes Clause 1 a **mandatory** instruction?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "shall" },
                      { id: "b", text: "external" },
                      { id: "c", text: "steelwork" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*shall* makes it binding — the keyword of a specification.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l1-q2",
                  type: "true_false",
                  prompt: "“Provide movement joints at maximum 6 m centres” gives an exact, checkable limit.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“maximum 6 m centres” is precise and verifiable on site. ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l1-q3",
                  type: "open",
                  prompt: "A spec avoids vague praise. Replace “good quality paint, about three coats” — how many coats does Clause 2 require? (a number)",
                  points: 1,
                  config: { acceptedAnswers: ["3", "three"], charLimit: 8 },
                  explanation: "“three coats” — exact, not “about three”.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau4l2",
          slug: "listening-rfi",
          title: "A question from site",
          topic: "listening · the RFI flow",
          grammarNote: [
            "When a drawing is unclear, the contractor raises an **RFI** (Request for Information).",
            "Listen for the structure:",
            "- the **reference** (which drawing/detail): *On detail 12…*",
            "- the **ambiguity** (what's unclear): *it doesn't say which way the door swings.*",
            "- the **ask** (what they need): *Can you confirm…?*",
            "A good answer is just as specific as the question.",
          ].join("\n"),
          grammarNoteEs: [
            "Cuando un plano no está claro, el contratista levanta un **RFI** (Request for Information).",
            "Escucha la estructura:",
            "- la **reference** (qué plano/detalle): *On detail 12…*",
            "- la **ambiguity** (qué no está claro): *it doesn't say which way the door swings.*",
            "- el **ask** (qué necesitan): *Can you confirm…?*",
            "Una buena respuesta es tan específica como la pregunta.",
          ].join("\n"),
          exercise: {
            id: "efau4l2-ex",
            title: "Practice: hearing an RFI",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau4l2-a1",
                  type: "audio",
                  title: "Listen: the site calls",
                  transcript:
                    "Morning — quick one on the stair detail, drawing A-204. The drawing shows the handrail height as twelve hundred, but the section next to it reads nine hundred. They can't both be right, and we're fixing the brackets today. Can you confirm which one we should build to? We'll hold off until we hear back.",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/efau4l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l2-q1",
                  type: "multiple_choice",
                  prompt: "What is the ambiguity the contractor found?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The drawing and section give two different handrail heights" },
                      { id: "b", text: "The stair is in the wrong place" },
                      { id: "c", text: "The brackets are the wrong colour" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Plan says 1200, section says 900 — they conflict.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l2-q2",
                  type: "true_false",
                  prompt: "The contractor will keep working on the brackets without waiting for an answer.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“We'll hold off until we hear back.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l2-q3",
                  type: "open",
                  prompt: "Which drawing number does the RFI reference? A-___",
                  points: 1,
                  config: { acceptedAnswers: ["204"], charLimit: 8 },
                  explanation: "“…the stair detail, drawing A-204.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau4l3",
          slug: "speaking-clarify",
          title: "Clarify an instruction out loud",
          topic: "speaking · unambiguous spoken instruction",
          grammarNote: [
            "On a call or site, a spoken instruction must leave **no room to guess**:",
            "- one action per sentence: *Build the handrail to nine hundred.*",
            "- exact numbers and units: *nine hundred millimetres, finished height.*",
            "- confirm understanding: *Can you read that back to me?*",
            "Vague spoken instructions become expensive mistakes — be boringly precise.",
          ].join("\n"),
          grammarNoteEs: [
            "En una llamada o en obra, una instrucción hablada no debe dejar **nada que adivinar**:",
            "- una acción por oración: *Build the handrail to nine hundred.*",
            "- números y unidades exactos: *nine hundred millimetres, finished height.*",
            "- confirma la comprensión: *Can you read that back to me?*",
            "Las instrucciones vagas se vuelven errores caros — sé aburridamente preciso.",
          ].join("\n"),
          exercise: {
            id: "efau4l3-ex",
            title: "Practice: precise instruction",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau4l3-q1",
                  type: "multiple_choice",
                  prompt: "Which spoken instruction is **unambiguous**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Set the handrail to nine hundred millimetres, finished height." },
                      { id: "b", text: "Make the handrail a normal sort of height." },
                      { id: "c", text: "The handrail should be roughly waist-ish." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Exact number + unit + reference point — nothing left to guess.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l3-q2",
                  type: "speaking",
                  prompt: "Answer the RFI out loud: confirm the handrail is 900 mm, and ask them to confirm back.",
                  points: 1,
                  config: {
                    target: "Build the handrail to nine hundred millimetres, finished height; please read that back to confirm.",
                    acceptedAnswers: [
                      "build the handrail to nine hundred millimetres finished height please read that back to confirm",
                      "build the handrail to nine hundred millimeters finished height please read that back to confirm",
                      "build the handrail to nine hundred millimetres finished height please read it back to confirm",
                    ],
                    maxSeconds: 13,
                  },
                  explanation: "One action, exact number+unit, and a read-back request — zero ambiguity.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING ----
        {
          id: "efau4l4",
          slug: "writing-rfi",
          title: "Write a clear RFI response",
          topic: "writing · the RFI / instruction",
          grammarNote: [
            "A written RFI response (or instruction) is short, numbered, and final:",
            "- restate the question so the record is clear.",
            "- give **one** answer, with the exact value and the drawing it supersedes.",
            "- avoid hedging — *please make it work* is not an instruction.",
            "This is a legal record; precision here protects everyone, including you.",
          ].join("\n"),
          grammarNoteEs: [
            "Una respuesta escrita de RFI (o una instrucción) es corta, numerada y definitiva:",
            "- reformula la pregunta para que el registro quede claro.",
            "- da **una** respuesta, con el valor exacto y el plano que reemplaza.",
            "- evita matizar — *please make it work* no es una instrucción.",
            "Esto es un registro legal; la precisión aquí protege a todos, incluyéndote a ti.",
          ].join("\n"),
          exercise: {
            id: "efau4l4-ex",
            title: "Practice: write the response",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau4l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write a clear written response to the handrail RFI (drawing A-204): the plan said 1200, the section said 900. Confirm the correct value, supersede the wrong note, and keep it precise and final (2–3 sentences).",
                  points: 1,
                  config: {
                    placeholder: "RFI 014 — Stair handrail height, drawing A-204…",
                    model:
                      "RFI 014 — Stair handrail height, drawing A-204. The handrail is to be built to 900 mm finished height, measured from the nosing. The '1200' note on the plan is an error and is superseded by this instruction; a corrected drawing (A-204 Rev C) will follow today. Please proceed on this basis.",
                    checklist: [
                      "Did you restate the question/reference for the record?",
                      "Did you give one exact value with a measuring point?",
                      "Did you explicitly supersede the wrong note?",
                      "Is it free of hedging ('please make it work')?",
                    ],
                    charLimit: 500,
                  },
                  explanation: "Reference → one exact value → supersede the error. A precise, final record.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau4l4-q2",
                  type: "true_false",
                  prompt: "“Please just make the handrail work somehow” is an acceptable RFI response.",
                  points: 1,
                  config: { correct: false },
                  explanation: "An RFI needs one exact, final answer — not a vague wish.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 5 ==============================
    {
      id: "efau5",
      slug: "5",
      number: 5,
      title: "Coordination",
      summary:
        "Working with the rest of the team — engineers, consultants, and clashes — and the collaborative English that keeps a project moving.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau5l1",
          slug: "reading-clash",
          title: "Reading a coordination note",
          topic: "coordination · design vs constraint",
          grammarNote: [
            "Coordination is where design meets the engineer's reality. The note language:",
            "- a **clash**: two things want the same space (*the duct clashes with the beam*).",
            "- **design intent** vs **constraint**: what you want vs what physics/cost allows.",
            "- the resolution verbs: *reroute, drop the ceiling, coordinate, value-engineer*.",
            "Read it as a negotiation, not a defeat — the building gets better when both sides win.",
          ].join("\n"),
          grammarNoteEs: [
            "La coordinación es donde el diseño se encuentra con la realidad del ingeniero. El lenguaje",
            "de las notas:",
            "- un **clash**: dos cosas quieren el mismo espacio (*the duct clashes with the beam*).",
            "- **design intent** vs **constraint**: lo que quieres vs lo que la física/el costo permiten.",
            "- los verbos de resolución: *reroute, drop the ceiling, coordinate, value-engineer*.",
            "Léelo como una negociación, no una derrota — el edificio mejora cuando ambos lados ganan.",
          ].join("\n"),
          exercise: {
            id: "efau5l1-ex",
            title: "Practice: reading coordination",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau5l1-r1",
                  type: "reading",
                  emoji: "🔧",
                  title: "A note from the MEP engineer",
                  body: "The main supply duct clashes with the primary beam at grid C. We can reroute the duct around the beam, but that drops the corridor ceiling by 200 mm, which may affect your clear height. Alternatively, we coordinate a penetration through the beam, which keeps the ceiling but needs structural sign-off. The design intent is a generous corridor; the constraint is the beam depth. Your call on which way to go.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l1-q1",
                  type: "multiple_choice",
                  prompt: "What is the **clash**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The supply duct and the primary beam want the same space" },
                      { id: "b", text: "Two architects disagree on style" },
                      { id: "c", text: "The corridor is the wrong colour" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“The main supply duct clashes with the primary beam at grid C.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l1-q2",
                  type: "multiple_choice",
                  prompt: "Rerouting the duct affects the design intent because it…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "lowers the corridor ceiling by 200 mm" },
                      { id: "b", text: "changes the building's address" },
                      { id: "c", text: "removes the corridor entirely" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“…drops the corridor ceiling by 200 mm, which may affect your clear height.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l1-q3",
                  type: "open",
                  prompt: "What is the word for two elements competing for the same space? a ___",
                  points: 1,
                  config: { acceptedAnswers: ["clash"], charLimit: 8 },
                  explanation: "A *clash* — the core coordination problem.",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau5l2",
          slug: "listening-coordination",
          title: "A coordination meeting",
          topic: "listening · meeting roles & actions",
          grammarNote: [
            "In a coordination meeting, follow **who owns what action**:",
            "- the chair drives: *Let's park that and move on.*",
            "- actions get named owners: *Can you take that one, Sam?*",
            "- decisions are logged: *So we're agreed: option two.*",
            "Track the **action items** — by the end, you should know who does what by when.",
          ].join("\n"),
          grammarNoteEs: [
            "En una junta de coordinación, sigue **quién es dueño de qué acción**:",
            "- el chair (moderador) dirige: *Let's park that and move on.*",
            "- las acciones reciben dueños: *Can you take that one, Sam?*",
            "- las decisiones se registran: *So we're agreed: option two.*",
            "Sigue los **action items** — al final, deberías saber quién hace qué y para cuándo.",
          ].join("\n"),
          exercise: {
            id: "efau5l2-ex",
            title: "Practice: meeting actions",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau5l2-a1",
                  type: "audio",
                  title: "Listen: coordination call",
                  transcript:
                    "Right, on the duct clash at grid C — I think option two, the penetration, protects the ceiling height, so let's go with that. Priya, can you get structural sign-off on the penetration by Thursday? And I'll issue the revised ceiling plan once that's confirmed. Let's park the lighting question for now and pick it up next week. Anything else? No? Good, thanks everyone.",
                  voice: "en-US-AvaMultilingualNeural",
                  mediaUrl: "/audio/efau5l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l2-q1",
                  type: "multiple_choice",
                  prompt: "Which option did the meeting decide on for the clash?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Option two — the penetration through the beam" },
                      { id: "b", text: "Reroute and drop the ceiling" },
                      { id: "c", text: "Do nothing" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“…option two, the penetration, protects the ceiling height, so let's go with that.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l2-q2",
                  type: "open",
                  prompt: "Who is given the action to get structural sign-off? ___",
                  points: 1,
                  config: { acceptedAnswers: ["priya"], charLimit: 10 },
                  explanation: "“Priya, can you get structural sign-off… by Thursday?”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l2-q3",
                  type: "true_false",
                  prompt: "The lighting question was decided in this meeting.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“Let's park the lighting question for now and pick it up next week.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau5l3",
          slug: "speaking-resolve",
          title: "Propose a resolution",
          topic: "speaking · collaborative problem-solving",
          grammarNote: [
            "When you disagree with an engineer, stay collaborative — you need them tomorrow:",
            "- frame it as **shared**: *How do we keep the ceiling height AND your beam?*",
            "- offer, don't demand: *Could we look at a penetration instead?*",
            "- protect the relationship: *I know it's more work — what would make it doable?*",
            "The goal is the best building, reached together, not winning the argument.",
          ].join("\n"),
          grammarNoteEs: [
            "Cuando no estés de acuerdo con un ingeniero, mantente colaborativo — lo necesitas mañana:",
            "- enmárcalo como **compartido**: *How do we keep the ceiling height AND your beam?*",
            "- ofrece, no exijas: *Could we look at a penetration instead?*",
            "- protege la relación: *I know it's more work — what would make it doable?*",
            "La meta es el mejor edificio, alcanzado juntos, no ganar la discusión.",
          ].join("\n"),
          exercise: {
            id: "efau5l3-ex",
            title: "Practice: resolve together",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau5l3-q1",
                  type: "multiple_choice",
                  prompt: "Which line is the most **collaborative**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "How do we keep both the ceiling height and your beam?" },
                      { id: "b", text: "Your beam is ruining my design." },
                      { id: "c", text: "Just move it, that's your problem." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Framing it as a shared problem keeps the engineer on your side.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l3-q2",
                  type: "speaking",
                  prompt: "Propose a resolution to the duct clash collaboratively — suggest the penetration, and acknowledge the extra work.",
                  points: 1,
                  config: {
                    target: "Could we look at a penetration through the beam instead? I know it's a bit more work for you, so tell me what you'd need to make it doable.",
                    acceptedAnswers: [
                      "could we look at a penetration through the beam instead i know its a bit more work for you so tell me what youd need to make it doable",
                      "could we look at a penetration through the beam instead i know it is a bit more work for you so tell me what you would need to make it doable",
                      "could we look at a penetration through the beam instead i know its a bit more work for you so tell me what you would need to make it doable",
                    ],
                    maxSeconds: 16,
                  },
                  explanation: "An offer, framed as shared, that protects the relationship — collaborative problem-solving.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING ----
        {
          id: "efau5l4",
          slug: "writing-minutes",
          title: "Write the action items",
          topic: "writing · minutes & action items",
          grammarNote: [
            "Good minutes are not a transcript — they're a list of **decisions and actions**:",
            "- one line per item: *who · what · by when.*",
            "- decisions stated as final: *Agreed: penetration at grid C.*",
            "- no chat, no he-said — just the record that protects the project.",
            "If a reader who missed the meeting can act from your minutes, they're good.",
          ].join("\n"),
          grammarNoteEs: [
            "Unas buenas minutas no son una transcripción — son una lista de **decisiones y acciones**:",
            "- una línea por ítem: *quién · qué · para cuándo.*",
            "- decisiones como finales: *Agreed: penetration at grid C.*",
            "- sin charla, sin he-said — solo el registro que protege el proyecto.",
            "Si quien faltó a la junta puede actuar con tus minutas, están bien.",
          ].join("\n"),
          exercise: {
            id: "efau5l4-ex",
            title: "Practice: write the minutes",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau5l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write the action items from the coordination call (decision: penetration at grid C; Priya gets structural sign-off by Thursday; you issue the revised ceiling plan after; lighting parked to next week). Use a clean who-what-when list.",
                  points: 1,
                  config: {
                    placeholder: "Coordination meeting — actions:\n1) …",
                    model:
                      "Coordination meeting — decisions & actions:\n1. Decision: duct/beam clash at grid C resolved by a penetration through the beam (protects corridor ceiling height).\n2. Priya (structural) — obtain sign-off on the beam penetration. Due: Thursday.\n3. Architect — issue revised ceiling plan once sign-off is confirmed.\n4. Lighting layout — parked; to be picked up next week's meeting.",
                    checklist: [
                      "Is each action one line with an owner and a due date?",
                      "Are decisions stated as final?",
                      "Did you cut the chat and keep only record-worthy items?",
                      "Could someone who missed the call act from this?",
                    ],
                    charLimit: 600,
                  },
                  explanation: "Decision + who-what-when, nothing else. Minutes that protect the project.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau5l4-q2",
                  type: "true_false",
                  prompt: "Strong minutes record decisions and actions, not every word that was said.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Minutes are a record to act from, not a transcript. ✓",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 6 ==============================
    {
      id: "efau6",
      slug: "6",
      number: 6,
      title: "On Site",
      summary:
        "The language of construction — site visits, snagging, and giving a clear, safe instruction to people who build for a living.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau6l1",
          slug: "reading-snag",
          title: "Reading a snagging list",
          topic: "snagging · defect language",
          grammarNote: [
            "Near completion, the architect walks the building and writes a **snagging list** (US:",
            "**punch list**) of defects to fix. The language is short and factual:",
            "- the **location**, the **defect**, the **action**: *Room 12 — paint runs to north wall —*",
            "*rub down and repaint.*",
            "- defect words: *scratched, chipped, uneven, missing, not aligned, poorly finished.*",
            "No blame, no adjectives of mood — just what's wrong and what fixes it.",
          ].join("\n"),
          grammarNoteEs: [
            "Cerca de la entrega, el arquitecto recorre el edificio y escribe una **snagging list** (US:",
            "**punch list**) de defectos por corregir. El lenguaje es corto y factual:",
            "- la **location**, el **defect**, la **action**: *Room 12 — paint runs to north wall —*",
            "*rub down and repaint.*",
            "- palabras de defecto: *scratched, chipped, uneven, missing, not aligned, poorly finished.*",
            "Sin culpas, sin adjetivos de ánimo — solo qué está mal y qué lo corrige.",
          ].join("\n"),
          exercise: {
            id: "efau6l1-ex",
            title: "Practice: reading snags",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau6l1-r1",
                  type: "reading",
                  emoji: "🔨",
                  title: "Snagging list — ground floor",
                  body: "Item 1 — Entrance, glass door: handle scratched; replace. Item 2 — Reception, north wall: paint finish uneven, visible roller marks; rub down and apply one further coat. Item 3 — WC 1: tile grout missing along the skirting; make good. Item 4 — Corridor: skirting board not aligned at the junction; refix level. Each item is closed only when re-inspected and signed off.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l1-q1",
                  type: "multiple_choice",
                  prompt: "What is the defect on the reception north wall?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The paint finish is uneven with visible roller marks" },
                      { id: "b", text: "The wall is the wrong colour" },
                      { id: "c", text: "The wall is missing" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“paint finish uneven, visible roller marks; rub down and apply one further coat.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l1-q2",
                  type: "true_false",
                  prompt: "A snag is closed as soon as it's written down.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“…closed only when re-inspected and signed off.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l1-q3",
                  type: "open",
                  prompt: "Give the one-word defect term used for the WC grout: it is ___ along the skirting.",
                  points: 1,
                  config: { acceptedAnswers: ["missing"], charLimit: 10 },
                  explanation: "“tile grout missing along the skirting.”",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau6l2",
          slug: "listening-site",
          title: "On a site walk",
          topic: "listening · fast, practical site speech",
          grammarNote: [
            "Site talk is fast, practical, and full of trade shorthand. Don't panic — anchor on:",
            "- the **location** (*over by the lift core*),",
            "- the **issue** (*the blockwork's run a course high*),",
            "- the **action/timing** (*we'll sort it before the screed goes down*).",
            "Miss a word, keep the thread: location, problem, what happens next.",
          ].join("\n"),
          grammarNoteEs: [
            "El habla en obra es rápida, práctica y llena de jerga de oficios. No te asustes — ánclate en:",
            "- la **location** (*over by the lift core*),",
            "- el **issue** (*the blockwork's run a course high*),",
            "- la **action/timing** (*we'll sort it before the screed goes down*).",
            "Si pierdes una palabra, sigue el hilo: ubicación, problema, qué pasa después.",
          ].join("\n"),
          exercise: {
            id: "efau6l2-ex",
            title: "Practice: a site walk",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau6l2-a1",
                  type: "audio",
                  title: "Listen: the site manager",
                  transcript:
                    "Watch your step here, the floor's not finished. Right, over by the lift core, the blockwork's run a course high, so the door frame won't sit right. We'll cut it back tomorrow before the screed goes down — no drama, but I wanted you to see it. Everything else on this level is on programme. Hard hats back on before we go up.",
                  voice: "en-US-AndrewNeural",
                  mediaUrl: "/audio/efau6l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l2-q1",
                  type: "multiple_choice",
                  prompt: "What's the issue by the lift core?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The blockwork is one course too high, so the door frame won't fit" },
                      { id: "b", text: "The lift is broken" },
                      { id: "c", text: "The floor is already finished" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“…the blockwork's run a course high, so the door frame won't sit right.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l2-q2",
                  type: "true_false",
                  prompt: "The fix will happen before the screed is poured.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“We'll cut it back tomorrow before the screed goes down.” ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l2-q3",
                  type: "open",
                  prompt: "What safety item does the manager tell everyone to put back on? hard ___",
                  points: 1,
                  config: { acceptedAnswers: ["hats", "hat"], charLimit: 8 },
                  explanation: "“Hard hats back on before we go up.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau6l3",
          slug: "speaking-instruct",
          title: "Give a site instruction",
          topic: "speaking · clear & safe instruction",
          grammarNote: [
            "Instructing on site: be clear, be safe, be respectful of the trade's expertise:",
            "- state the action and the standard: *Take the blockwork down one course and rebuild level.*",
            "- give the reason if it helps: *…so the frame sits true.*",
            "- safety first, always: *and keep the area taped off until it's made good.*",
            "Direct is fine; rude is not — these are skilled people doing hard work.",
          ].join("\n"),
          grammarNoteEs: [
            "Instruir en obra: sé claro, sé seguro, respeta la experiencia del oficio:",
            "- enuncia la acción y el estándar: *Take the blockwork down one course and rebuild level.*",
            "- da la razón si ayuda: *…so the frame sits true.*",
            "- la seguridad primero, siempre: *and keep the area taped off until it's made good.*",
            "Directo está bien; grosero no — son personas calificadas haciendo un trabajo duro.",
          ].join("\n"),
          exercise: {
            id: "efau6l3-ex",
            title: "Practice: instruct on site",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau6l3-q1",
                  type: "multiple_choice",
                  prompt: "Which is a clear, respectful site instruction?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Take the blockwork down one course and rebuild it level, please." },
                      { id: "b", text: "This is all wrong, redo everything." },
                      { id: "c", text: "Make it a bit better somehow." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Specific action + standard + courtesy — clear without being rude or vague.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l3-q2",
                  type: "speaking",
                  prompt: "Instruct the team to fix the blockwork, give the reason, and add a safety note.",
                  points: 1,
                  config: {
                    target: "Take the blockwork down one course and rebuild it level so the door frame sits true, and keep the area taped off until it's checked.",
                    acceptedAnswers: [
                      "take the blockwork down one course and rebuild it level so the door frame sits true and keep the area taped off until its checked",
                      "take the blockwork down one course and rebuild it level so the door frame sits true and keep the area taped off until it is checked",
                      "take the blockwork down one course and rebuild it level so the door frame fits and keep the area taped off until its checked",
                    ],
                    maxSeconds: 16,
                  },
                  explanation: "Action + reason + safety — a clear, safe, professional instruction.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING ----
        {
          id: "efau6l4",
          slug: "writing-sitereport",
          title: "Write a site visit report",
          topic: "writing · the site report",
          grammarNote: [
            "A site visit report is a dated, factual record:",
            "- **date, weather, who was present** (it matters for the record).",
            "- **progress** since last visit, **issues** observed, **instructions** given.",
            "- past tense, neutral: *The blockwork at the lift core was one course high; instructed*",
            "*to rebuild level.*",
            "Write it so that, months later, it still tells the true story of that day.",
          ].join("\n"),
          grammarNoteEs: [
            "Un site visit report es un registro fechado y factual:",
            "- **date, weather, who was present** (importa para el registro).",
            "- **progress** desde la última visita, **issues** observados, **instructions** dadas.",
            "- pasado, neutral: *The blockwork at the lift core was one course high; instructed*",
            "*to rebuild level.*",
            "Escríbelo de modo que, meses después, aún cuente la historia verdadera de ese día.",
          ].join("\n"),
          exercise: {
            id: "efau6l4-ex",
            title: "Practice: write the report",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau6l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write a short site visit report (4–5 sentences) from the site walk: note progress on the ground floor, the blockwork issue at the lift core, the instruction given, and that the level is otherwise on programme. Keep it dated, factual, past tense.",
                  points: 1,
                  config: {
                    placeholder: "Site visit — [date]. Present: …",
                    model:
                      "Site visit — 28 June. Present: site manager, project architect. Weather: dry. Ground floor finishes are progressing well and broadly on programme. At the lift core, the blockwork had been built one course too high, which prevents the door frame seating correctly; the contractor was instructed to take it down one course and rebuild level before the screed is laid. The area was taped off pending the correction. No other issues were observed on this level.",
                    checklist: [
                      "Did you include date, who was present, and weather?",
                      "Is the issue recorded factually with the instruction given?",
                      "Is it past tense and neutral (no blame)?",
                      "Would it still make sense months later?",
                    ],
                    charLimit: 800,
                  },
                  explanation: "Dated, factual, past tense — a record that still tells the true story later.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau6l4-q2",
                  type: "open",
                  prompt: "A site report is written in which tense (the events already happened)? ___ tense",
                  points: 1,
                  config: { acceptedAnswers: ["past"], charLimit: 8 },
                  explanation: "Past tense — you're recording what happened on the visit.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 7 ==============================
    {
      id: "efau7",
      slug: "7",
      number: 7,
      title: "Sustainability & Standards",
      summary:
        "Making the green case in English — performance language, certifications and codes, and persuading a client to choose the better, not the cheaper, option.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau7l1",
          slug: "reading-standard",
          title: "Reading a performance claim",
          topic: "sustainability · performance & certification language",
          grammarNote: [
            "Sustainability claims live or die on **precision** — vague is greenwashing:",
            "- measurable: *a 40% reduction in operational energy*, not *eco-friendly*.",
            "- standards as nouns: *targeting LEED Gold*, *Passivhaus*, *EPC band A*.",
            "- lifecycle words: *embodied carbon* (in the materials) vs *operational carbon* (in use).",
            "Read for the **number and the standard** — a claim without them is marketing.",
          ].join("\n"),
          grammarNoteEs: [
            "Las afirmaciones de sustentabilidad viven o mueren por su **precisión** — lo vago es",
            "greenwashing:",
            "- medible: *a 40% reduction in operational energy*, no *eco-friendly*.",
            "- estándares como sustantivos: *targeting LEED Gold*, *Passivhaus*, *EPC band A*.",
            "- palabras de ciclo de vida: *embodied carbon* (en los materiales) vs *operational carbon*",
            "(en uso).",
            "Lee buscando el **número y el estándar** — una afirmación sin ellos es marketing.",
          ].join("\n"),
          exercise: {
            id: "efau7l1-ex",
            title: "Practice: reading the claim",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau7l1-r1",
                  type: "reading",
                  emoji: "🌱",
                  title: "Two sustainability statements",
                  body: "Statement A: \"The building is green and eco-friendly, using natural, sustainable materials throughout.\" Statement B: \"The design targets a 45% reduction in operational energy against the baseline, with timber structure cutting embodied carbon by an estimated 200 tonnes; we are pursuing LEED Gold.\" Statement A could describe almost anything. Statement B can be checked, measured, and defended.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l1-q1",
                  type: "multiple_choice",
                  prompt: "Why is Statement B the stronger claim?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "It gives measurable numbers and a named standard" },
                      { id: "b", text: "It uses the word 'green' more often" },
                      { id: "c", text: "It is shorter" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Numbers + a standard (LEED Gold) make it checkable, not marketing.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l1-q2",
                  type: "multiple_choice",
                  prompt: "“Embodied carbon” refers to the carbon…",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "in making the materials and building it" },
                      { id: "b", text: "used to run the building each year" },
                      { id: "c", text: "in the client's travel" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "*Embodied* = the carbon locked into materials/construction; *operational* = in use.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l1-q3",
                  type: "open",
                  prompt: "Name the certification Statement B is pursuing: LEED ___",
                  points: 1,
                  config: { acceptedAnswers: ["gold"], charLimit: 10 },
                  explanation: "“…we are pursuing LEED Gold.”",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau7l2",
          slug: "listening-briefing",
          title: "A sustainability briefing",
          topic: "listening · data behind the claims",
          grammarNote: [
            "In a briefing, separate the **claim** from the **evidence** behind it:",
            "- claim: *this will cut running costs.*",
            "- evidence: *the modelling shows 30% lower energy, paying back in seven years.*",
            "- caveat: *assuming the brief doesn't grow.*",
            "Catch the number AND the assumption — both matter when you repeat it to a client.",
          ].join("\n"),
          grammarNoteEs: [
            "En un briefing, separa la **claim** de la **evidence** detrás:",
            "- claim: *this will cut running costs.*",
            "- evidence: *the modelling shows 30% lower energy, paying back in seven years.*",
            "- caveat: *assuming the brief doesn't grow.*",
            "Capta el número Y la suposición — ambos importan cuando se lo repites a un cliente.",
          ].join("\n"),
          exercise: {
            id: "efau7l2-ex",
            title: "Practice: briefing data",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau7l2-a1",
                  type: "audio",
                  title: "Listen: the energy consultant",
                  transcript:
                    "So the headline is that the triple glazing and the heat-recovery system together cut the modelled energy use by about a third. That's roughly a seven-year payback at today's energy prices. The catch is it only holds if we keep the glazing ratio where it is — if the client pushes for more glass, the numbers slide. So my recommendation is: lock the glazing now, and we hit the target comfortably.",
                  voice: "en-US-GuyNeural",
                  mediaUrl: "/audio/efau7l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l2-q1",
                  type: "multiple_choice",
                  prompt: "What's the headline figure?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "About a one-third cut in modelled energy use" },
                      { id: "b", text: "A 90% cut in cost" },
                      { id: "c", text: "No change in energy use" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“…cut the modelled energy use by about a third.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l2-q2",
                  type: "true_false",
                  prompt: "The savings hold even if the client adds much more glass.",
                  points: 1,
                  config: { correct: false },
                  explanation: "“If the client pushes for more glass, the numbers slide.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l2-q3",
                  type: "open",
                  prompt: "Roughly how many years is the payback? (a number)",
                  points: 1,
                  config: { acceptedAnswers: ["7", "seven"], charLimit: 8 },
                  explanation: "“…roughly a seven-year payback.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau7l3",
          slug: "speaking-makecase",
          title: "Make the case for the greener choice",
          topic: "speaking · persuading with evidence",
          grammarNote: [
            "To sell a greener, often pricier option, lead with the client's **self-interest**, then",
            "the planet:",
            "- the payoff first: *It costs more now, but it pays back in seven years and halves the bills.*",
            "- evidence, not adjectives: *the modelling shows…*, not *it's really good for the earth.*",
            "- make it easy: *and it's one decision — lock the glazing today.*",
            "Most clients buy performance and savings; the green is the bonus, not the pitch.",
          ].join("\n"),
          grammarNoteEs: [
            "Para vender una opción más verde y a menudo más cara, empieza por el **interés propio** del",
            "cliente, luego el planeta:",
            "- el payoff primero: *It costs more now, but it pays back in seven years and halves the bills.*",
            "- evidencia, no adjetivos: *the modelling shows…*, no *it's really good for the earth.*",
            "- hazlo fácil: *and it's one decision — lock the glazing today.*",
            "La mayoría de los clientes compran rendimiento y ahorro; lo verde es el bonus, no el pitch.",
          ].join("\n"),
          exercise: {
            id: "efau7l3-ex",
            title: "Practice: the green case",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau7l3-q1",
                  type: "multiple_choice",
                  prompt: "What's the most persuasive way to open the case to a cost-focused client?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "It pays back in seven years and cuts the energy bills by a third." },
                      { id: "b", text: "We should do it because it's good for the planet." },
                      { id: "c", text: "Everyone else is doing it." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "Lead with payback and savings — the client's interest — then the green follows.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l3-q2",
                  type: "speaking",
                  prompt: "Persuade a client to keep the triple glazing: lead with the payback, cite the evidence, make it one easy decision.",
                  points: 1,
                  config: {
                    target: "It costs a bit more up front, but the modelling shows it pays back in about seven years and cuts the energy bills by a third, so my advice is to lock it in today.",
                    acceptedAnswers: [
                      "it costs a bit more up front but the modelling shows it pays back in about seven years and cuts the energy bills by a third so my advice is to lock it in today",
                      "it costs a bit more upfront but the modelling shows it pays back in about seven years and cuts the energy bills by a third so my advice is to lock it in today",
                      "it costs a little more up front but the modelling shows it pays back in about seven years and cuts the energy bills by a third so my advice is to lock it in today",
                    ],
                    maxSeconds: 18,
                  },
                  explanation: "Payback + evidence + an easy single decision — the green choice sold on the client's terms.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING ----
        {
          id: "efau7l4",
          slug: "writing-rationale",
          title: "Write a sustainability rationale",
          topic: "writing · the rationale / justification",
          grammarNote: [
            "A sustainability rationale justifies a choice for a report, planning, or a certification",
            "submission:",
            "- state the **measure**, the **benefit** (with a number), and the **standard** it meets.",
            "- be honest about trade-offs — assessors trust a balanced rationale.",
            "- plain, confident, evidenced: this becomes part of the project's official record.",
          ].join("\n"),
          grammarNoteEs: [
            "Un sustainability rationale justifica una decisión para un reporte, urbanismo, o una",
            "sumisión de certificación:",
            "- enuncia la **measure** (medida), el **benefit** (con un número), y el **standard** que cumple.",
            "- sé honesto sobre los trade-offs — los evaluadores confían en un rationale equilibrado.",
            "- claro, seguro, con evidencia: esto pasa a ser parte del registro oficial del proyecto.",
          ].join("\n"),
          exercise: {
            id: "efau7l4-ex",
            title: "Practice: write the rationale",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau7l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write a short sustainability rationale (3–4 sentences) for choosing a timber structure with triple glazing. Name the measures, give the benefit with a number, cite a standard, and be honest about one trade-off.",
                  points: 1,
                  config: {
                    placeholder: "The structure is proposed in cross-laminated timber to…",
                    model:
                      "The structure is proposed in cross-laminated timber, which cuts the building's embodied carbon by an estimated 200 tonnes against an equivalent concrete frame. Combined with triple glazing and heat recovery, the design targets a 45% reduction in operational energy and is on track for LEED Gold. The timber adds roughly 4% to the structural cost up front; this is offset within seven years by lower running costs and, we believe, justified by the carbon saving. The approach has been modelled and will be verified at completion.",
                    checklist: [
                      "Did you name the measures and a numbered benefit?",
                      "Did you cite a standard or target?",
                      "Were you honest about a trade-off (cost)?",
                      "Does it read as an official, evidenced record?",
                    ],
                    charLimit: 800,
                  },
                  explanation: "Measure + numbered benefit + standard + honest trade-off — a rationale an assessor trusts.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau7l4-q2",
                  type: "true_false",
                  prompt: "Hiding the trade-offs makes a sustainability rationale more convincing to an assessor.",
                  points: 1,
                  config: { correct: false },
                  explanation: "Assessors trust a balanced, honest rationale — hidden trade-offs read as spin.",
                },
              },
            ],
          },
        },
      ],
    },
    // ============================== UNIT 8 ==============================
    {
      id: "efau8",
      slug: "8",
      number: 8,
      title: "The Story of the Project",
      summary:
        "Selling a body of work — the competition narrative, the portfolio description, and the short project lecture that wins the room.",
      lessons: [
        // ---- L1: READING ----
        {
          id: "efau8l1",
          slug: "reading-competition",
          title: "Reading a competition narrative",
          topic: "narrative · selling a project in words",
          grammarNote: [
            "A competition or portfolio narrative is a **story**, not a spec — it makes a jury *care*:",
            "- it opens on a tension or a question, not a data sheet.",
            "- it ties the design back to a human idea (*a school that feels like a street*).",
            "- it earns its claims with one or two vivid specifics, then stops.",
            "Read for the **through-line** — the single idea the whole story serves.",
          ].join("\n"),
          grammarNoteEs: [
            "Una narrativa de concurso o portafolio es una **story**, no una spec — hace que un jurado",
            "*se interese*:",
            "- abre con una tensión o una pregunta, no con una hoja de datos.",
            "- ata el diseño a una idea humana (*a school that feels like a street*).",
            "- gana sus afirmaciones con uno o dos detalles vívidos, y luego se detiene.",
            "Lee buscando el **through-line** — la única idea a la que sirve toda la historia.",
          ].join("\n"),
          exercise: {
            id: "efau8l1-ex",
            title: "Practice: reading a narrative",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau8l1-r1",
                  type: "reading",
                  emoji: "🏆",
                  title: "Competition entry: a village school",
                  body: "Most schools line children up along a corridor. We asked a simpler question: what if a school felt like a street? Our entry replaces the corridor with a covered, sunlit lane — wide enough to stop and talk, lined with classroom 'shopfronts' that open onto it. Learning spills outside; the lane becomes the playground in the rain. It is one idea, carried the whole way through: a school you walk through, not one you're marched along.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l1-q1",
                  type: "multiple_choice",
                  prompt: "What is the **through-line** of this narrative?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "A school that feels like a street, not a corridor" },
                      { id: "b", text: "A list of the building's materials" },
                      { id: "c", text: "The exact budget and floor area" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“…what if a school felt like a street?” carried “the whole way through.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l1-q2",
                  type: "multiple_choice",
                  prompt: "How does the narrative **open**?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "With a question that reframes the problem" },
                      { id: "b", text: "With a data sheet" },
                      { id: "c", text: "With the architect's CV" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "It opens on a question (“what if a school felt like a street?”), not data.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l1-q3",
                  type: "true_false",
                  prompt: "The narrative carries one idea all the way through rather than listing many features.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“It is one idea, carried the whole way through.” ✓",
                },
              },
            ],
          },
        },
        // ---- L2: LISTENING ----
        {
          id: "efau8l2",
          slug: "listening-lecture",
          title: "A short project lecture",
          topic: "listening · lecture structure",
          grammarNote: [
            "A good project lecture has a clear spine you can hear:",
            "- the **hook** (a question, an image, a surprise),",
            "- the **journey** (problem → idea → how it works),",
            "- the **landing** (what it means, a line to remember).",
            "Listen for the hook and the landing especially — they carry the talk's whole point.",
          ].join("\n"),
          grammarNoteEs: [
            "Una buena charla de proyecto tiene una espina dorsal clara que puedes oír:",
            "- el **hook** (una pregunta, una imagen, una sorpresa),",
            "- el **journey** (problema → idea → cómo funciona),",
            "- el **landing** (qué significa, una frase para recordar).",
            "Escucha sobre todo el hook y el landing — cargan todo el punto de la charla.",
          ].join("\n"),
          exercise: {
            id: "efau8l2-ex",
            title: "Practice: a project talk",
            items: [
              {
                kind: "content",
                content: {
                  id: "efau8l2-a1",
                  type: "audio",
                  title: "Listen: presenting the school",
                  transcript:
                    "I want to start with a sound — the sound of a corridor at break time, that echo of two hundred footsteps going nowhere. We hated it. So we asked what a school would be if it felt like a street instead, and that question became the whole building: a covered lane you walk along, with classrooms opening onto it like shopfronts. The lesson for us was simple. Sometimes you don't design a better corridor. You ask whether you need a corridor at all.",
                  voice: "en-US-AvaMultilingualNeural",
                  mediaUrl: "/audio/efau8l2-a1.mp3",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l2-q1",
                  type: "multiple_choice",
                  prompt: "What **hook** does the speaker open with?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "The sound of a corridor at break time" },
                      { id: "b", text: "The project's budget" },
                      { id: "c", text: "A list of awards" },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "“I want to start with a sound — the sound of a corridor at break time.”",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l2-q2",
                  type: "true_false",
                  prompt: "The talk lands on the idea that sometimes you should question whether you need the corridor at all.",
                  points: 1,
                  config: { correct: true },
                  explanation: "“You ask whether you need a corridor at all.” ✓",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l2-q3",
                  type: "open",
                  prompt: "The classrooms open onto the lane like what kind of street frontage? like ___",
                  points: 1,
                  config: { acceptedAnswers: ["shopfronts", "shopfront", "shop fronts"], charLimit: 14 },
                  explanation: "“…classrooms opening onto it like shopfronts.”",
                },
              },
            ],
          },
        },
        // ---- L3: SPEAKING ----
        {
          id: "efau8l3",
          slug: "speaking-lecture",
          title: "Present your project in two minutes",
          topic: "speaking · the project pitch / lecture",
          grammarNote: [
            "A two-minute project talk is the concept pitch grown up — same spine, more story:",
            "- **hook** the room first (don't open with 'this is my project').",
            "- carry **one idea**; let everything serve it.",
            "- **land** on a line they'll quote.",
            "You've done all the pieces in this course — this is where they come together out loud.",
          ].join("\n"),
          grammarNoteEs: [
            "Una charla de proyecto de dos minutos es el concept pitch ya crecido — misma espina, más",
            "historia:",
            "- **engancha** a la sala primero (no abras con 'this is my project').",
            "- carga **una idea**; que todo le sirva.",
            "- **aterriza** en una frase que citarán.",
            "Ya hiciste todas las piezas en este curso — aquí se juntan en voz alta.",
          ].join("\n"),
          exercise: {
            id: "efau8l3-ex",
            title: "Practice: present the project",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau8l3-q1",
                  type: "multiple_choice",
                  prompt: "Which is the strongest **opening** for a project talk?",
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "I want to start with a sound: a corridor at break time." },
                      { id: "b", text: "Hello, this is my project, it is a school." },
                      { id: "c", text: "Let me read you the floor areas." },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: "A vivid hook pulls the room in; the flat openers lose them immediately.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l3-q2",
                  type: "speaking",
                  prompt: "Open a talk about YOUR own project with a hook and your one big idea (2 sentences).",
                  points: 1,
                  config: {
                    target: "I want to start with a question: what if the noisiest street in the city became the quietest home on it? That one question shaped everything we did.",
                    acceptedAnswers: [
                      "i want to start with a question what if the noisiest street in the city became the quietest home on it that one question shaped everything we did",
                      "i want to start with a question what if the noisiest street in the city became the quietest home on it that question shaped everything we did",
                      "id like to start with a question what if the noisiest street in the city became the quietest home on it that one question shaped everything we did",
                    ],
                    maxSeconds: 16,
                  },
                  explanation: "A hook (a question) + one shaping idea — exactly how a strong project talk opens.",
                },
              },
            ],
          },
        },
        // ---- L4: WRITING (capstone artifact) ----
        {
          id: "efau8l4",
          slug: "writing-description",
          title: "Write the project description",
          topic: "writing · the portfolio / competition description",
          grammarNote: [
            "The project description is the keystone of your **Portfolio Pack** — the text that travels",
            "with the images everywhere (portfolio, competition, website, awards):",
            "- one strong opening line (the through-line), then how it works, then what it gives.",
            "- present tense, confident, no jargon dump.",
            "- around 120–150 words: long enough to land, short enough to be read.",
            "Everything you've practised — concept, precision, narrative — comes together here.",
          ].join("\n"),
          grammarNoteEs: [
            "La project description es la clave de tu **Portfolio Pack** — el texto que viaja con las",
            "imágenes a todas partes (portafolio, concurso, sitio web, premios):",
            "- una línea de apertura fuerte (el through-line), luego cómo funciona, luego qué da.",
            "- presente, seguro, sin volcado de jerga.",
            "- unas 120–150 palabras: suficiente para aterrizar, corto para leerse.",
            "Todo lo que practicaste — concepto, precisión, narrativa — se junta aquí.",
          ].join("\n"),
          exercise: {
            id: "efau8l4-ex",
            title: "Practice: the project description",
            items: [
              {
                kind: "question",
                question: {
                  id: "efau8l4-q1",
                  type: "draft_compare",
                  prompt:
                    "Write the final project description for YOUR own project (≈120–150 words) — the keystone of your Portfolio Pack. Open with the through-line, explain how the building works, and end on what it gives its people. This is your capstone piece.",
                  points: 1,
                  config: {
                    placeholder: "[Project name] begins with a single question: …",
                    model:
                      "Riverside Library begins with a single question: what if a building could teach you to slow down? Set on a steep bank, it refuses to fight the slope. Instead, each reading room steps half a level below the last, so the whole library becomes one gentle descent toward the water — a staircase you can read in. Daylight follows you down through a continuous north light, and the structure stays honest and exposed, asking nothing it doesn't need. The result is not a container for books but a path through them: a place that, by the time you reach the river, has quietly changed your pace. For a town that had lost its public spaces, it offers back a single, generous room to think in.",
                    checklist: [
                      "Does it open with a strong through-line, not an address?",
                      "Does it explain how the building works in present tense?",
                      "Does it end on what it gives the people who use it?",
                      "Is it roughly 120–150 words, with no jargon dump?",
                    ],
                    charLimit: 1200,
                  },
                  explanation: "Through-line → how it works → human payoff, ~140 words. The keystone of the Portfolio Pack.",
                },
              },
              {
                kind: "question",
                question: {
                  id: "efau8l4-q2",
                  type: "true_false",
                  prompt: "A portfolio project description should open with the strongest idea, not the site address.",
                  points: 1,
                  config: { correct: true },
                  explanation: "Lead with the through-line; the address is metadata, not a hook. ✓",
                },
              },
            ],
          },
        },
      ],
    },
  ],
  finalTest: {
    id: "efa-final",
    slug: "final-test",
    title: "English for Architects — review",
    intro:
      "A skim across the whole professional arc — concept, crit, client, documents, coordination, site, sustainability, and the project story. Twelve questions of professional judgement and language. Score 9 of 12 to earn your English for Architects certificate.",
    passingScore: 9,
    exercise: {
      id: "efa-final-ex",
      title: "English for Architects final",
      items: [
        {
          kind: "question",
          question: {
            id: "efa-final-q1",
            type: "open",
            prompt: "The single big idea that drives a design — often called the ___ — frames the whole concept. (a French-derived term used in architecture)",
            points: 1,
            config: { acceptedAnswers: ["parti"], charLimit: 10 },
            explanation: "The *parti* is the core organising idea of a scheme.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q2",
            type: "multiple_choice",
            prompt: "In a crit, “Why brick and not concrete?” is mainly a…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "challenging question — justify the decision" },
                { id: "b", text: "clarifying question — answer in two words" },
                { id: "c", text: "personal attack to ignore" },
              ],
              correctIds: ["a"],
            },
            explanation: "*Why…?* is a challenge: defend the decision, don't apologise.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q3",
            type: "multiple_choice",
            prompt: "In a brief, which modal marks a non-negotiable requirement?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "must" },
                { id: "b", text: "would like" },
                { id: "c", text: "ideally" },
              ],
              correctIds: ["a"],
            },
            explanation: "*must / shall* = mandatory; *would like / ideally* = a wish.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q4",
            type: "multiple_choice",
            prompt: "The most professional way to raise a budget overrun with a client is to…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "be straight about it and offer options" },
                { id: "b", text: "hide it and hope it resolves" },
                { id: "c", text: "blame the engineer" },
              ],
              correctIds: ["a"],
            },
            explanation: "Honesty with options is tact; hiding or blaming destroys trust.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q5",
            type: "open",
            prompt: "In a specification, the keyword that makes an instruction mandatory is “___”. (one word)",
            points: 1,
            config: { acceptedAnswers: ["shall"], charLimit: 8 },
            explanation: "*shall* (or *is to be*) makes a spec clause binding.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q6",
            type: "multiple_choice",
            prompt: "A contractor raises a formal question about an unclear drawing. This is a(n)…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "RFI (Request for Information)" },
                { id: "b", text: "snag" },
                { id: "c", text: "parti" },
              ],
              correctIds: ["a"],
            },
            explanation: "An *RFI* asks the design team to resolve an ambiguity.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q7",
            type: "open",
            prompt: "When a duct and a beam want the same space, coordination calls it a ___. (one word)",
            points: 1,
            config: { acceptedAnswers: ["clash"], charLimit: 8 },
            explanation: "A *clash* — two elements competing for the same space.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q8",
            type: "multiple_choice",
            prompt: "Disagreeing with an engineer, the best move is to…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "frame it as a shared problem to solve together" },
                { id: "b", text: "tell them it's their problem to fix" },
                { id: "c", text: "go over their head silently" },
              ],
              correctIds: ["a"],
            },
            explanation: "Collaboration keeps the team — and the project — moving.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q9",
            type: "multiple_choice",
            prompt: "An architect's list of defects to fix before handover is a…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "snagging / punch list" },
                { id: "b", text: "design statement" },
                { id: "c", text: "competition narrative" },
              ],
              correctIds: ["a"],
            },
            explanation: "The *snagging list* (US *punch list*) records defects to make good.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q10",
            type: "multiple_choice",
            prompt: "Which is the stronger, checkable sustainability claim?",
            points: 1,
            config: {
              options: [
                { id: "a", text: "A 45% cut in operational energy, targeting LEED Gold." },
                { id: "b", text: "It's green and eco-friendly throughout." },
                { id: "c", text: "It uses natural materials." },
              ],
              correctIds: ["a"],
            },
            explanation: "A number + a named standard can be checked; vague adjectives can't.",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q11",
            type: "true_false",
            prompt: "“Embodied carbon” is the carbon in making the materials, not the carbon used running the building.",
            points: 1,
            config: { correct: true },
            explanation: "Embodied = materials/construction; operational = in use. ✓",
          },
        },
        {
          kind: "question",
          question: {
            id: "efa-final-q12",
            type: "multiple_choice",
            prompt: "A strong competition narrative opens with…",
            points: 1,
            config: {
              options: [
                { id: "a", text: "a question or image that carries one idea" },
                { id: "b", text: "the floor areas and budget" },
                { id: "c", text: "the practice's full CV" },
              ],
              correctIds: ["a"],
            },
            explanation: "Lead with the through-line; data and CV aren't a hook.",
          },
        },
      ],
    },
  },
  conclusion: {
    title: "You can work as an architect — in English.",
    body:
      "You've gone the whole way through a project in a second language: you framed a concept and pitched it, defended your work in a crit without flinching, read a client and delivered hard news with tact, wrote documents precise enough to build from, coordinated with engineers, ran a site, made the case for the better choice, and told the story of your work so a room would care. That isn't vocabulary — it's a professional operating in English. And you've built something real along the way: a Portfolio Pack of writing — a design statement, a client email, an RFI, minutes, a rationale, a project description — that you can use and adapt tomorrow. The drawings were always yours. Now the words are too.",
    nextSteps: [
      "Polish your Portfolio Pack pieces and keep them as templates you reuse.",
      "Record yourself presenting one project for two minutes — hook, one idea, a landing.",
      "Rewrite one real email to a client or consultant using the diplomacy moves from Unit 3.",
      "Next time you read a brief, mark the musts, shoulds, and wishes before you draw anything.",
    ],
  },
  diploma: {
    title: "VillaAula English for Architects Certificate",
    subtitle: "Professional English",
    issuer: "VillaAula",
  },
};
