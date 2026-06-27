import type { Course } from "@/lib/types";

/**
 * **LinkedIn: Zero to Job-Ready** — VillaAula's second program's course (HANDOFF §20).
 *
 * A single course of 8 units + a capstone, authored **bilingually EN/ES** (the program
 * requirement): instructions, explanations, and conceptual options carry `{en, es}`;
 * the mock LinkedIn snippets the learner evaluates stay in English (you practice the
 * real artifact — an English-first profile — which is the ESL crossover §20 wants).
 *
 * §9 copyright: every snippet card here is **our own mock example text**, not copied
 * from LinkedIn's product, help docs, or UI. We teach *about* the platform.
 *
 * Phase 1 = the Learn units (this file). The graded types are MCQ / True-False / Match
 * plus the non-graded **draft & compare** (write your real headline/About/message, then
 * compare to a strong model) that, in Phase 2, will feed the Career Kit deliverable.
 */
export const linkedin: Course = {
  id: "linkedin",
  slug: "linkedin",
  level: 1,
  title: "LinkedIn: Zero to Job-Ready",
  intro:
    "Most profiles are a wasted first impression. This course fixes that — step by step, in short exercises — until you have a profile recruiters and their software both take seriously, a network that opens doors, and messages that actually get replies. Use the EN/ES switch any time.",
  introEs:
    "La mayoría de los perfiles desperdician la primera impresión. Este curso lo arregla — paso a paso, en ejercicios cortos — hasta que tengas un perfil que tomen en serio tanto los reclutadores como sus sistemas, una red que abra puertas y mensajes que de verdad reciban respuesta. Usa el botón EN/ES cuando quieras.",
  acceptsGuests: true,
  bilingual: true,
  noteLabel: "Key idea — the why",
  units: [
    /* ============================ UNIT 1 ============================ */
    {
      id: "li-u1",
      slug: "1",
      number: 1,
      title: "Getting Started",
      summary:
        "What LinkedIn is really for, who reads your profile, and the mindset that makes everything else work.",
      lessons: [
        {
          id: "li-u1-l1",
          slug: "what-linkedin-is",
          title: "What LinkedIn is for",
          topic: "two readers · one goal",
          grammarNote: [
            "Your profile has **two readers**, and you write for both:",
            "",
            "- **Software (ATS & LinkedIn search)** scans for *keywords* — job titles, skills, tools. No keywords, no results.",
            "- **People (recruiters & hiring managers)** skim for *signal* — clear value, real impact, a reason to reply.",
            "",
            "So the goal isn't \"look impressive.\" It's **be found, then be believed.** Every choice in this course serves one of those two.",
          ].join("\n"),
          grammarNoteEs: [
            "Tu perfil tiene **dos lectores**, y escribes para ambos:",
            "",
            "- **El software (ATS y la búsqueda de LinkedIn)** rastrea *palabras clave* — puestos, habilidades, herramientas. Sin palabras clave, no apareces.",
            "- **Las personas (reclutadores y managers)** leen por encima buscando *señales* — valor claro, impacto real, una razón para responder.",
            "",
            "Así que la meta no es \"verse impresionante\". Es **que te encuentren y luego te crean.** Cada decisión de este curso sirve a uno de esos dos lectores.",
          ].join("\n"),
          exercise: {
            id: "li-u1-l1-ex",
            title: "Two readers",
            items: [
              {
                kind: "question",
                question: {
                  id: "li-u1-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "A recruiter searches \"React developer\" and your profile never says \"React\" — only \"front-end engineer.\" What happens?",
                    es: "Un reclutador busca \"React developer\" y tu perfil nunca dice \"React\", solo \"front-end engineer\". ¿Qué pasa?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "You don't appear in the results at all",
                          es: "No apareces en los resultados en absoluto",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "LinkedIn guesses you mean React and shows you anyway",
                          es: "LinkedIn adivina que te refieres a React y te muestra igual",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "You appear, but lower down",
                          es: "Apareces, pero más abajo",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "Search matches the words you actually wrote. If the keyword isn't on your profile, you're invisible for it — name your tools explicitly.",
                    es: "La búsqueda coincide con las palabras que realmente escribiste. Si la palabra clave no está en tu perfil, eres invisible para esa búsqueda — nombra tus herramientas de forma explícita.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u1-q2",
                  type: "true_false",
                  prompt: {
                    en: "Myth check: \"LinkedIn is only useful when I'm actively job-hunting.\"",
                    es: "Mito: \"LinkedIn solo sirve cuando estoy buscando trabajo activamente\".",
                  },
                  points: 1,
                  config: { correct: false },
                  explanation: {
                    en: "Opportunities (and the people who refer you) find you between searches. A profile that's ready year-round is the whole advantage.",
                    es: "Las oportunidades (y las personas que te recomiendan) te encuentran entre búsquedas. Tener un perfil listo todo el año es justamente la ventaja.",
                  },
                },
              },
            ],
          },
        },
      ],
    },

    /* ============================ UNIT 2 ============================ */
    {
      id: "li-u2",
      slug: "2",
      number: 2,
      title: "Profile Foundations",
      summary:
        "The photo, the banner, and the one line that decides whether anyone reads further: your headline.",
      lessons: [
        {
          id: "li-u2-l1",
          slug: "the-headline",
          title: "The headline that gets clicks",
          topic: "120 characters that matter most",
          grammarNote: [
            "Your **headline** is the line under your name. It shows up *everywhere* — in search, in comments, next to every connection request. It is your most-read sentence.",
            "",
            "Default headlines just repeat your job title (\"Student\", \"Marketing Analyst\"). A strong one answers **\"who do you help, and how?\"**",
            "",
            "A reliable shape: **Role / specialty + value or focus + (optional) a proof word.**",
            "- Weak: `Marketing Analyst`",
            "- Strong: `Marketing Analyst · I turn campaign data into decisions that lift ROI`",
          ].join("\n"),
          grammarNoteEs: [
            "Tu **headline** (titular) es la línea bajo tu nombre. Aparece en *todas partes* — en la búsqueda, en los comentarios, junto a cada invitación a conectar. Es tu frase más leída.",
            "",
            "Los titulares por defecto solo repiten el puesto (\"Estudiante\", \"Analista de Marketing\"). Uno fuerte responde **\"¿a quién ayudas y cómo?\"**",
            "",
            "Una forma confiable: **Rol / especialidad + valor o enfoque + (opcional) una palabra de prueba.**",
            "- Débil: `Marketing Analyst`",
            "- Fuerte: `Marketing Analyst · I turn campaign data into decisions that lift ROI`",
          ].join("\n"),
          exercise: {
            id: "li-u2-l1-ex",
            title: "Write a headline",
            items: [
              {
                kind: "content",
                content: {
                  id: "li-u2-r1",
                  type: "reading",
                  emoji: "🪪",
                  title: {
                    en: "Snippet card — two headlines",
                    es: "Tarjeta de ejemplo — dos titulares",
                  },
                  body: {
                    en: "**A.** `Aspiring Software Developer | Looking for opportunities`\n\n**B.** `Junior Software Developer · I build clean, tested web apps in React & Node · open to junior roles`",
                    es: "**A.** `Aspiring Software Developer | Looking for opportunities`\n\n**B.** `Junior Software Developer · I build clean, tested web apps in React & Node · open to junior roles`",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u2-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "Why is headline **B** stronger than **A**?",
                    es: "¿Por qué el titular **B** es más fuerte que el **A**?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "It names concrete skills (React, Node) and the value, so it's searchable and specific",
                          es: "Nombra habilidades concretas (React, Node) y el valor, así que es buscable y específico",
                        },
                      },
                      {
                        id: "b",
                        text: { en: "It is longer", es: "Es más largo" },
                      },
                      {
                        id: "c",
                        text: {
                          en: "\"Aspiring\" sounds more humble",
                          es: "\"Aspiring\" suena más humilde",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "\"Aspiring\" and \"looking for opportunities\" say what you *don't* have yet. B names tools (keywords) and the value you create — found *and* believed.",
                    es: "\"Aspiring\" y \"looking for opportunities\" dicen lo que *aún no* tienes. B nombra herramientas (palabras clave) y el valor que creas — te encuentran *y* te creen.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u2-q2",
                  type: "draft_compare",
                  prompt: {
                    en: "Your turn — draft your own headline. Role + what you do/for whom + a tool or proof word.",
                    es: "Tu turno — redacta tu propio titular. Rol + qué haces / para quién + una herramienta o palabra de prueba.",
                  },
                  config: {
                    charLimit: 120,
                    placeholder: {
                      en: "e.g. Data Analyst · I turn messy spreadsheets into clear decisions · SQL, Python",
                      es: "ej. Data Analyst · I turn messy spreadsheets into clear decisions · SQL, Python",
                    },
                    model: {
                      en: "`UX Designer · I design calm, usable flows for fintech apps · Figma, user research · open to mid-level roles`\n\nNotice: a role, a specific value (\"calm, usable flows\"), a domain (fintech), tools (Figma), and a clear ask.",
                      es: "`UX Designer · I design calm, usable flows for fintech apps · Figma, user research · open to mid-level roles`\n\nFíjate: un rol, un valor específico (\"calm, usable flows\"), un dominio (fintech), herramientas (Figma) y una petición clara.",
                    },
                    checklist: [
                      {
                        en: "Does it name a real role (not just \"aspiring\")?",
                        es: "¿Nombra un rol real (no solo \"aspiring\")?",
                      },
                      {
                        en: "Is there at least one searchable keyword (a tool or skill)?",
                        es: "¿Hay al menos una palabra clave buscable (una herramienta o habilidad)?",
                      },
                      {
                        en: "Would a stranger understand who you help in 3 seconds?",
                        es: "¿Un desconocido entendería a quién ayudas en 3 segundos?",
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      ],
    },

    /* ============================ UNIT 3 ============================ */
    {
      id: "li-u3",
      slug: "3",
      number: 3,
      title: "Your Story (About)",
      summary:
        "The About section: a short, human summary that hooks the reader and quietly plants your keywords.",
      lessons: [
        {
          id: "li-u3-l1",
          slug: "the-about",
          title: "Writing the About section",
          topic: "hook · proof · keywords · ask",
          grammarNote: [
            "The **About** section is your elevator pitch in writing. Most people leave it empty or paste their résumé — both waste it.",
            "",
            "A simple, strong structure in **first person**:",
            "1. **Hook** — one line on what you do and care about.",
            "2. **Proof** — 2–3 sentences of real results or focus.",
            "3. **Keywords** — the tools and skills, woven in naturally.",
            "4. **Ask** — what you're open to, and how to reach you.",
            "",
            "Write like you talk. \"I\" beats \"He is a results-driven professional.\"",
          ].join("\n"),
          grammarNoteEs: [
            "La sección **About** (Acerca de) es tu *elevator pitch* por escrito. La mayoría la deja vacía o pega su currículum — ambas la desperdician.",
            "",
            "Una estructura simple y fuerte en **primera persona**:",
            "1. **Gancho** — una línea sobre qué haces y qué te importa.",
            "2. **Prueba** — 2–3 frases de resultados reales o enfoque.",
            "3. **Palabras clave** — las herramientas y habilidades, integradas con naturalidad.",
            "4. **Petición** — a qué estás abierto y cómo contactarte.",
            "",
            "Escribe como hablas. \"I\" gana a \"He is a results-driven professional\".",
          ].join("\n"),
          exercise: {
            id: "li-u3-l1-ex",
            title: "Shape your About",
            items: [
              {
                kind: "question",
                question: {
                  id: "li-u3-q1",
                  type: "true_false",
                  prompt: {
                    en: "Myth check: \"The About section should be written in the third person (‘Maria is a designer who…’) to sound professional.\"",
                    es: "Mito: \"La sección About debe escribirse en tercera persona (‘Maria is a designer who…’) para sonar profesional\".",
                  },
                  points: 1,
                  config: { correct: false },
                  explanation: {
                    en: "Third person reads stiff and distant. First person (\"I design…\") sounds like a real human you'd want to talk to — that's the goal.",
                    es: "La tercera persona se lee rígida y distante. La primera persona (\"I design…\") suena a una persona real con quien querrías hablar — esa es la meta.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u3-q2",
                  type: "match",
                  prompt: {
                    en: "Match each line of an About section to the job it's doing.",
                    es: "Empareja cada línea de una sección About con la función que cumple.",
                  },
                  points: 1,
                  config: {
                    pairs: [
                      { left: "“I help small clinics fill their calendars.”", right: "Hook" },
                      { left: "“Last year I cut no-shows by 30%.”", right: "Proof" },
                      { left: "“Tools: HubSpot, SQL, Google Ads.”", right: "Keywords" },
                      { left: "“Open to growth-marketing roles — DM me.”", right: "Ask" },
                    ],
                  },
                  explanation: {
                    en: "Hook → proof → keywords → ask. Each line earns its place; nothing is filler.",
                    es: "Gancho → prueba → palabras clave → petición. Cada línea se gana su lugar; nada es relleno.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u3-q3",
                  type: "draft_compare",
                  prompt: {
                    en: "Draft your hook + one proof line (the first two sentences of your About).",
                    es: "Redacta tu gancho + una línea de prueba (las dos primeras frases de tu About).",
                  },
                  config: {
                    charLimit: 300,
                    placeholder: {
                      en: "I help… / Last year I…",
                      es: "I help… / Last year I…",
                    },
                    model: {
                      en: "“I help early-stage teams turn vague ideas into shipped features. In my last role I led the rebuild of a checkout flow that lifted conversion 18% in two months.”\n\nIt opens with *who you help*, then backs it with one concrete, measurable result.",
                      es: "“I help early-stage teams turn vague ideas into shipped features. In my last role I led the rebuild of a checkout flow that lifted conversion 18% in two months.”\n\nAbre con *a quién ayudas* y lo respalda con un resultado concreto y medible.",
                    },
                    checklist: [
                      {
                        en: "Does the first line say who you help or what you make?",
                        es: "¿La primera línea dice a quién ayudas o qué haces?",
                      },
                      {
                        en: "Does the proof line use a number or a specific outcome?",
                        es: "¿La línea de prueba usa un número o un resultado específico?",
                      },
                      { en: "Is it in the first person?", es: "¿Está en primera persona?" },
                    ],
                  },
                },
              },
            ],
          },
        },
      ],
    },

    /* ============================ UNIT 4 ============================ */
    {
      id: "li-u4",
      slug: "4",
      number: 4,
      title: "Experience & Skills",
      summary:
        "Bullets that show impact, not duties — and a skills section that helps search find you.",
      lessons: [
        {
          id: "li-u4-l1",
          slug: "experience-bullets",
          title: "Bullets that show impact",
          topic: "action verb + result + number",
          grammarNote: [
            "Most experience bullets list **duties** (\"Responsible for social media\"). Strong bullets show **impact**.",
            "",
            "The formula: **action verb + what you did + the result (ideally a number).**",
            "- Duty: `Responsible for the company blog`",
            "- Impact: `Grew the company blog from 0 to 12k monthly readers in 9 months`",
            "",
            "No numbers yet? Use scope or outcome: *“mentored 4 interns”*, *“cut report time from 2 days to 2 hours.”* Skills you list also feed search — name the real tools.",
          ].join("\n"),
          grammarNoteEs: [
            "La mayoría de los *bullets* de experiencia listan **funciones** (\"Responsible for social media\"). Los fuertes muestran **impacto**.",
            "",
            "La fórmula: **verbo de acción + qué hiciste + el resultado (idealmente un número).**",
            "- Función: `Responsible for the company blog`",
            "- Impacto: `Grew the company blog from 0 to 12k monthly readers in 9 months`",
            "",
            "¿Aún sin números? Usa alcance o resultado: *“mentored 4 interns”*, *“cut report time from 2 days to 2 hours.”* Las habilidades que listas también alimentan la búsqueda — nombra las herramientas reales.",
          ].join("\n"),
          exercise: {
            id: "li-u4-l1-ex",
            title: "Duty vs impact",
            items: [
              {
                kind: "question",
                question: {
                  id: "li-u4-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "Which bullet is strongest?",
                    es: "¿Cuál bullet es el más fuerte?",
                  },
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "Responsible for customer support tickets" },
                      { id: "b", text: "Handled customer support" },
                      {
                        id: "c",
                        text: "Resolved 40+ support tickets a day and raised CSAT from 78% to 91%",
                      },
                    ],
                    correctIds: ["c"],
                  },
                  explanation: {
                    en: "C leads with an action and proves impact with two numbers. A and B only describe a duty.",
                    es: "C empieza con una acción y prueba el impacto con dos números. A y B solo describen una función.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u4-q2",
                  type: "open",
                  prompt: {
                    en: "One word: every strong bullet should start with an action ___ (e.g. “Led”, “Built”, “Grew”).",
                    es: "Una palabra: todo bullet fuerte debe empezar con un ___ de acción (ej. “Led”, “Built”, “Grew”).",
                  },
                  points: 1,
                  config: {
                    acceptedAnswers: ["verb", "verbo"],
                    charLimit: 16,
                    placeholder: { en: "one word", es: "una palabra" },
                  },
                  explanation: {
                    en: "An action verb up front (Led, Built, Grew, Cut) makes the impact land immediately.",
                    es: "Un verbo de acción al inicio (Led, Built, Grew, Cut) hace que el impacto se sienta de inmediato.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u4-q3",
                  type: "draft_compare",
                  prompt: {
                    en: "Rewrite one of your real duties as an impact bullet.",
                    es: "Reescribe una de tus funciones reales como un bullet de impacto.",
                  },
                  config: {
                    charLimit: 200,
                    placeholder: {
                      en: "Action verb + what you did + result/number",
                      es: "Verbo de acción + qué hiciste + resultado/número",
                    },
                    model: {
                      en: "Duty: “Helped organize company events.”\n\nImpact: “Planned 6 company events for 200+ attendees, cutting catering costs 15% by renegotiating vendors.”",
                      es: "Función: “Helped organize company events.”\n\nImpacto: “Planned 6 company events for 200+ attendees, cutting catering costs 15% by renegotiating vendors.”",
                    },
                    checklist: [
                      {
                        en: "Does it start with an action verb?",
                        es: "¿Empieza con un verbo de acción?",
                      },
                      {
                        en: "Is there a number, or a clear scope/outcome?",
                        es: "¿Hay un número, o un alcance/resultado claro?",
                      },
                      {
                        en: "Did you remove “responsible for” / “helped with”?",
                        es: "¿Quitaste “responsible for” / “helped with”?",
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      ],
    },

    /* ============================ UNIT 5 ============================ */
    {
      id: "li-u5",
      slug: "5",
      number: 5,
      title: "Proof & Trust",
      summary:
        "Featured work, recommendations, and the Open-to-Work signal — the evidence that you're the real thing.",
      lessons: [
        {
          id: "li-u5-l1",
          slug: "proof-and-trust",
          title: "Featured, recommendations & open-to-work",
          topic: "show, don’t just tell",
          grammarNote: [
            "A profile that *claims* skills is fine. A profile that *shows proof* gets the interview.",
            "",
            "- **Featured** — pin real work: a project, a post, a portfolio link, a certificate. One concrete artifact beats a paragraph.",
            "- **Recommendations** — a short note from a manager or peer is third-party proof. Give one to get one; ask specifically (“could you mention the launch we shipped?”).",
            "- **Open to work** — tell LinkedIn the roles you want. The quiet *recruiter-only* badge avoids signaling to your current employer, while still surfacing you in recruiter searches.",
          ].join("\n"),
          grammarNoteEs: [
            "Un perfil que *afirma* habilidades está bien. Un perfil que *muestra pruebas* consigue la entrevista.",
            "",
            "- **Featured (Destacado)** — fija trabajo real: un proyecto, una publicación, un enlace a tu portafolio, un certificado. Un artefacto concreto vale más que un párrafo.",
            "- **Recommendations** — una nota breve de un manager o colega es prueba de terceros. Da una para recibir una; pide algo específico (“¿podrías mencionar el lanzamiento que sacamos?”).",
            "- **Open to work** — dile a LinkedIn los roles que quieres. La insignia discreta *solo para reclutadores* evita avisar a tu empleador actual y aun así te muestra en sus búsquedas.",
          ].join("\n"),
          exercise: {
            id: "li-u5-l1-ex",
            title: "Build trust",
            items: [
              {
                kind: "question",
                question: {
                  id: "li-u5-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "You're job-hunting but still employed, and you don't want your boss to know. What's the safest way to signal availability?",
                    es: "Buscas trabajo pero sigues empleado y no quieres que tu jefe se entere. ¿Cuál es la forma más segura de señalar disponibilidad?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "Use the “Open to work” setting visible to recruiters only",
                          es: "Usa la opción “Open to work” visible solo para reclutadores",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "Add the green #OpenToWork photo frame",
                          es: "Agrega el marco verde #OpenToWork a tu foto",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "Post publicly that you're quitting",
                          es: "Publica abiertamente que vas a renunciar",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "The recruiter-only setting surfaces you in searches without the public frame your employer could see.",
                    es: "La opción solo-para-reclutadores te muestra en las búsquedas sin el marco público que tu empleador podría ver.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u5-q2",
                  type: "true_false",
                  prompt: {
                    en: "Myth check: \"The best way to get a recommendation is to wait until someone offers one.\"",
                    es: "Mito: \"La mejor forma de conseguir una recomendación es esperar a que alguien la ofrezca\".",
                  },
                  points: 1,
                  config: { correct: false },
                  explanation: {
                    en: "Good recommendations are almost always asked for. Make it easy: ask a specific person to mention a specific thing.",
                    es: "Las buenas recomendaciones casi siempre se piden. Hazlo fácil: pide a una persona específica que mencione algo específico.",
                  },
                },
              },
            ],
          },
        },
      ],
    },

    /* ============================ UNIT 6 ============================ */
    {
      id: "li-u6",
      slug: "6",
      number: 6,
      title: "Networking",
      summary:
        "Connection requests that get accepted, and engagement that makes you visible to the right people.",
      lessons: [
        {
          id: "li-u6-l1",
          slug: "connecting-with-notes",
          title: "Connecting on purpose",
          topic: "the note is the whole game",
          grammarNote: [
            "A network isn't a number — it's the **right** people who'll remember you.",
            "",
            "- **Always add a note** to a connection request. A blank request from a stranger is easy to ignore; a one-line *why* gets accepted.",
            "- **Keep it short and specific:** who you are, why them, no ask yet.",
            "- **Then engage, don't just collect.** A thoughtful comment on someone's post does more than 100 silent connections — it's how the right people start to recognize your name.",
          ].join("\n"),
          grammarNoteEs: [
            "Una red no es un número — son las personas **correctas** que te recordarán.",
            "",
            "- **Siempre agrega una nota** a la invitación a conectar. Una invitación en blanco de un desconocido es fácil de ignorar; un *por qué* de una línea logra que la acepten.",
            "- **Hazla corta y específica:** quién eres, por qué esa persona, sin pedir nada todavía.",
            "- **Luego participa, no solo colecciones.** Un comentario reflexivo en la publicación de alguien hace más que 100 conexiones silenciosas — así las personas correctas empiezan a reconocer tu nombre.",
          ].join("\n"),
          exercise: {
            id: "li-u6-l1-ex",
            title: "The connection note",
            items: [
              {
                kind: "content",
                content: {
                  id: "li-u6-r1",
                  type: "reading",
                  emoji: "✉️",
                  title: {
                    en: "Snippet card — two connection notes",
                    es: "Tarjeta de ejemplo — dos notas de conexión",
                  },
                  body: {
                    en: "**A.** *(no note — blank request)*\n\n**B.** “Hi Dana — I'm a junior data analyst following your posts on dashboards. Would love to connect and keep learning from them.”",
                    es: "**A.** *(sin nota — invitación en blanco)*\n\n**B.** “Hi Dana — I'm a junior data analyst following your posts on dashboards. Would love to connect and keep learning from them.”",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u6-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "Why does note **B** get accepted more often?",
                    es: "¿Por qué la nota **B** se acepta con más frecuencia?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "It's specific, friendly, and asks for nothing but the connection",
                          es: "Es específica, amable y no pide nada más que la conexión",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "It's longer and more formal",
                          es: "Es más larga y más formal",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "It immediately asks for a job",
                          es: "Pide un trabajo de inmediato",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "It gives a reason (their posts), a quick who-you-are, and no pressure. That's an easy yes.",
                    es: "Da una razón (sus publicaciones), un rápido quién-eres y nada de presión. Es un sí fácil.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u6-q2",
                  type: "draft_compare",
                  prompt: {
                    en: "Write a connection note to someone in a role you want. Who you are + why them + no ask.",
                    es: "Escribe una nota de conexión a alguien en un rol que quieres. Quién eres + por qué esa persona + sin pedir nada.",
                  },
                  config: {
                    charLimit: 280,
                    placeholder: {
                      en: "Hi [name] — I'm…",
                      es: "Hi [name] — I'm…",
                    },
                    model: {
                      en: "“Hi Marco — I'm switching into product from support and really valued your post on writing specs. Hoping to connect and follow your work as I make the jump.”",
                      es: "“Hi Marco — I'm switching into product from support and really valued your post on writing specs. Hoping to connect and follow your work as I make the jump.”",
                    },
                    checklist: [
                      {
                        en: "Is it under ~300 characters (LinkedIn's note limit)?",
                        es: "¿Tiene menos de ~300 caracteres (el límite de notas de LinkedIn)?",
                      },
                      {
                        en: "Does it say a specific reason you're reaching out to them?",
                        es: "¿Dice una razón específica por la que les escribes?",
                      },
                      {
                        en: "Does it avoid asking for a job in the first message?",
                        es: "¿Evita pedir trabajo en el primer mensaje?",
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      ],
    },

    /* ============================ UNIT 7 ============================ */
    {
      id: "li-u7",
      slug: "7",
      number: 7,
      title: "The Job Search",
      summary:
        "Using LinkedIn Jobs well: targeting roles, reading a post for keywords, and Easy Apply without disappearing.",
      lessons: [
        {
          id: "li-u7-l1",
          slug: "finding-and-targeting",
          title: "Searching like a pro",
          topic: "alerts · keywords · targeting",
          grammarNote: [
            "Scrolling job listings is slow. Make LinkedIn do the work:",
            "",
            "- **Saved searches + alerts** — save a search (role + location + filters) and get notified. Early applicants get seen more.",
            "- **Read the post for keywords** — the skills a job repeats are exactly the words your profile and résumé should echo (honestly).",
            "- **Target, don't spray** — 5 tailored applications beat 50 generic ones. “Easy Apply” is fine, but a tailored note or a quick message to a recruiter lifts your odds a lot.",
          ].join("\n"),
          grammarNoteEs: [
            "Revisar vacantes una por una es lento. Haz que LinkedIn trabaje por ti:",
            "",
            "- **Búsquedas guardadas + alertas** — guarda una búsqueda (rol + ubicación + filtros) y recibe avisos. A quienes aplican temprano los ven más.",
            "- **Lee la vacante buscando palabras clave** — las habilidades que un puesto repite son justo las palabras que tu perfil y currículum deberían reflejar (con honestidad).",
            "- **Apunta, no dispares a todo** — 5 aplicaciones a la medida ganan a 50 genéricas. “Easy Apply” está bien, pero una nota personalizada o un mensaje rápido a un reclutador suben mucho tus probabilidades.",
          ].join("\n"),
          exercise: {
            id: "li-u7-l1-ex",
            title: "Read the post",
            items: [
              {
                kind: "content",
                content: {
                  id: "li-u7-r1",
                  type: "reading",
                  emoji: "📋",
                  title: {
                    en: "Snippet card — a job post excerpt",
                    es: "Tarjeta de ejemplo — extracto de una vacante",
                  },
                  body: {
                    en: "*“We're hiring a Content Marketer. You'll own our SEO blog, run our email newsletter, and report on traffic in Google Analytics. Must have strong writing and 2+ years in B2B SaaS.”*",
                    es: "*“We're hiring a Content Marketer. You'll own our SEO blog, run our email newsletter, and report on traffic in Google Analytics. Must have strong writing and 2+ years in B2B SaaS.”*",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u7-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "Which set of keywords from this post should you make sure appears (truthfully) on your profile?",
                    es: "¿Qué conjunto de palabras clave de esta vacante deberías asegurarte de que aparezca (con honestidad) en tu perfil?",
                  },
                  points: 1,
                  config: {
                    options: [
                      { id: "a", text: "SEO blog, email newsletter, Google Analytics, B2B SaaS" },
                      {
                        id: "b",
                        text: { en: "“We're hiring”, “you'll own”", es: "“We're hiring”, “you'll own”" },
                      },
                      {
                        id: "c",
                        text: { en: "strong, must, years", es: "strong, must, years" },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "Skills and tools (SEO, Google Analytics, B2B SaaS) are what search and ATS match on. Echo the real ones you have.",
                    es: "Las habilidades y herramientas (SEO, Google Analytics, B2B SaaS) son lo que la búsqueda y el ATS comparan. Refleja las reales que tengas.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u7-q2",
                  type: "true_false",
                  prompt: {
                    en: "Myth check: \"Applying to as many jobs as possible with the same résumé is the best strategy.\"",
                    es: "Mito: \"Aplicar a la mayor cantidad posible de vacantes con el mismo currículum es la mejor estrategia\".",
                  },
                  points: 1,
                  config: { correct: false },
                  explanation: {
                    en: "Volume without fit gets filtered out. A few tailored applications that echo the post's keywords win more interviews.",
                    es: "El volumen sin afinidad se filtra. Unas pocas aplicaciones a la medida que reflejen las palabras clave de la vacante consiguen más entrevistas.",
                  },
                },
              },
            ],
          },
        },
      ],
    },

    /* ============================ UNIT 8 ============================ */
    {
      id: "li-u8",
      slug: "8",
      number: 8,
      title: "Outreach, Messages & Referrals",
      summary:
        "The messages that get replies: reaching recruiters, asking for referrals, and following up without being annoying.",
      lessons: [
        {
          id: "li-u8-l1",
          slug: "messages-that-get-replies",
          title: "Messages that get replies",
          topic: "short · specific · respectful",
          grammarNote: [
            "Cold messages work — when they respect the reader's time.",
            "",
            "A reply-getting message: **a reason you're writing them + a tiny, specific ask + an easy out.**",
            "- Too much: a wall of text ending in “can we hop on a call?”",
            "- Just right: “I applied for the X role and saw you're on the team — is there one skill that stands out for it? Totally fine if you're busy.”",
            "",
            "**Referrals:** make it effortless for them — share the link and one line on why you fit. **Follow up once** after ~5–7 days, then let it rest.",
          ].join("\n"),
          grammarNoteEs: [
            "Los mensajes en frío funcionan — cuando respetan el tiempo de quien lee.",
            "",
            "Un mensaje que recibe respuesta: **una razón por la que les escribes + una petición pequeña y específica + una salida fácil.**",
            "- Demasiado: un muro de texto que termina en “¿podemos agendar una llamada?”",
            "- En su punto: “I applied for the X role and saw you're on the team — is there one skill that stands out for it? Totally fine if you're busy.”",
            "",
            "**Referencias:** hazlo sin esfuerzo para ellos — comparte el enlace y una línea de por qué encajas. **Da seguimiento una vez** tras ~5–7 días, y luego déjalo descansar.",
          ].join("\n"),
          exercise: {
            id: "li-u8-l1-ex",
            title: "Write the ask",
            items: [
              {
                kind: "question",
                question: {
                  id: "li-u8-q1",
                  type: "match",
                  prompt: {
                    en: "Match each part of a good outreach message to its purpose.",
                    es: "Empareja cada parte de un buen mensaje de contacto con su propósito.",
                  },
                  points: 1,
                  config: {
                    pairs: [
                      { left: "“I saw you work on the data team at Acme…”", right: "Reason you're writing" },
                      { left: "“…is there one skill that stands out for the analyst role?”", right: "Small specific ask" },
                      { left: "“No worries at all if you're swamped.”", right: "Easy out" },
                    ],
                  },
                  explanation: {
                    en: "Reason + tiny ask + easy out. It respects their time, which is exactly why it gets a reply.",
                    es: "Razón + petición mínima + salida fácil. Respeta su tiempo, que es justo por lo que recibe respuesta.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u8-q2",
                  type: "true_false",
                  prompt: {
                    en: "Myth check: \"If someone doesn't reply, you should message them again every day until they do.\"",
                    es: "Mito: \"Si alguien no responde, deberías escribirle de nuevo cada día hasta que conteste\".",
                  },
                  points: 1,
                  config: { correct: false },
                  explanation: {
                    en: "One polite follow-up after about a week is plenty. Daily messages get you muted, not hired.",
                    es: "Un seguimiento amable después de una semana es suficiente. Los mensajes diarios hacen que te silencien, no que te contraten.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u8-q3",
                  type: "draft_compare",
                  prompt: {
                    en: "Write a short message asking a team member about a role you applied for.",
                    es: "Escribe un mensaje breve preguntando a alguien del equipo sobre un puesto al que aplicaste.",
                  },
                  config: {
                    charLimit: 400,
                    placeholder: {
                      en: "Hi [name] — I applied for…",
                      es: "Hi [name] — I applied for…",
                    },
                    model: {
                      en: "“Hi Priya — I just applied for the junior PM role and noticed you're on that team. Is there one thing you'd say matters most for it? Completely understand if you're busy — thanks either way!”",
                      es: "“Hi Priya — I just applied for the junior PM role and noticed you're on that team. Is there one thing you'd say matters most for it? Completely understand if you're busy — thanks either way!”",
                    },
                    checklist: [
                      {
                        en: "Is it short enough to read in 10 seconds?",
                        es: "¿Es lo bastante corto para leerse en 10 segundos?",
                      },
                      {
                        en: "Is the ask small and specific (not “can we call?”)?",
                        es: "¿La petición es pequeña y específica (no “¿podemos llamar?”)?",
                      },
                      {
                        en: "Did you give them an easy, no-pressure out?",
                        es: "¿Les diste una salida fácil y sin presión?",
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      ],
    },
  ],

  /* ============================ CAPSTONE ============================ */
  finalTest: {
    id: "li-final",
    slug: "final",
    title: "Capstone — Your Career Kit check",
    intro:
      "Eight scenarios across the whole flow — profile, proof, network, search, and outreach. Score 6 of 8 to pass. (In a later release this capstone also generates your downloadable Career Kit.)",
    passingScore: 6,
    exercise: {
      id: "li-final-ex",
      title: "Capstone",
      items: [
        {
          kind: "question",
          question: {
            id: "li-final-q1",
            type: "multiple_choice",
            prompt: {
              en: "Your headline reads “Aspiring professional seeking opportunities.” The best fix is to:",
              es: "Tu titular dice “Aspiring professional seeking opportunities.” La mejor mejora es:",
            },
            points: 1,
            config: {
              options: [
                {
                  id: "a",
                  text: {
                    en: "Name your role and a concrete skill or value",
                    es: "Nombrar tu rol y una habilidad o valor concreto",
                  },
                },
                { id: "b", text: { en: "Make it all uppercase", es: "Ponerlo todo en mayúsculas" } },
                { id: "c", text: { en: "Add more emojis", es: "Agregar más emojis" } },
              ],
              correctIds: ["a"],
            },
            explanation: {
              en: "Specific role + a searchable skill or value beats vague “aspiring” language every time.",
              es: "Un rol específico + una habilidad o valor buscable supera siempre al vago “aspiring”.",
            },
          },
        },
        {
          kind: "question",
          question: {
            id: "li-final-q2",
            type: "true_false",
            prompt: {
              en: "If “SQL” isn't written anywhere on your profile, you can still show up for a recruiter's “SQL” search.",
              es: "Si “SQL” no está escrito en ninguna parte de tu perfil, igual puedes aparecer en la búsqueda de “SQL” de un reclutador.",
            },
            points: 1,
            config: { correct: false },
            explanation: {
              en: "Search matches the words on your profile. No keyword, no result.",
              es: "La búsqueda coincide con las palabras de tu perfil. Sin palabra clave, no hay resultado.",
            },
          },
        },
        {
          kind: "question",
          question: {
            id: "li-final-q3",
            type: "multiple_choice",
            prompt: {
              en: "Pick the strongest experience bullet.",
              es: "Elige el bullet de experiencia más fuerte.",
            },
            points: 1,
            config: {
              options: [
                { id: "a", text: "Responsible for managing social media accounts" },
                {
                  id: "b",
                  text: "Grew Instagram from 1k to 9k followers in 6 months with a weekly content plan",
                },
                { id: "c", text: "Worked on social media" },
              ],
              correctIds: ["b"],
            },
            explanation: {
              en: "Action verb + numbers + how. A and C only describe a duty.",
              es: "Verbo de acción + números + cómo. A y C solo describen una función.",
            },
          },
        },
        {
          kind: "question",
          question: {
            id: "li-final-q4",
            type: "match",
            prompt: {
              en: "Match each profile section to its main job.",
              es: "Empareja cada sección del perfil con su función principal.",
            },
            points: 1,
            config: {
              pairs: [
                { left: "Headline", right: "Get the click / be searchable" },
                { left: "About", right: "Tell your story in your voice" },
                { left: "Featured", right: "Show concrete proof of work" },
                { left: "Recommendations", right: "Third-party trust" },
              ],
            },
            explanation: {
              en: "Each section has one main job; together they make you found, then believed.",
              es: "Cada sección tiene una función principal; juntas logran que te encuentren y luego te crean.",
            },
          },
        },
        {
          kind: "question",
          question: {
            id: "li-final-q5",
            type: "multiple_choice",
            prompt: {
              en: "You want recruiters to know you're available, but not your current boss. You should:",
              es: "Quieres que los reclutadores sepan que estás disponible, pero no tu jefe actual. Deberías:",
            },
            points: 1,
            config: {
              options: [
                {
                  id: "a",
                  text: {
                    en: "Turn on “Open to work” visible to recruiters only",
                    es: "Activar “Open to work” visible solo para reclutadores",
                  },
                },
                {
                  id: "b",
                  text: { en: "Add the public green frame", es: "Agregar el marco verde público" },
                },
                {
                  id: "c",
                  text: { en: "Announce it in a post", es: "Anunciarlo en una publicación" },
                },
              ],
              correctIds: ["a"],
            },
            explanation: {
              en: "The recruiter-only setting keeps the signal private to recruiters.",
              es: "La opción solo-para-reclutadores mantiene la señal privada para los reclutadores.",
            },
          },
        },
        {
          kind: "question",
          question: {
            id: "li-final-q6",
            type: "true_false",
            prompt: {
              en: "A connection request to a stranger is more likely to be accepted if you add a short, specific note.",
              es: "Una invitación a conectar a un desconocido tiene más probabilidad de ser aceptada si agregas una nota corta y específica.",
            },
            points: 1,
            config: { correct: true },
            explanation: {
              en: "A one-line “why you” turns a blank request into an easy yes.",
              es: "Un “por qué tú” de una línea convierte una invitación en blanco en un sí fácil.",
            },
          },
        },
        {
          kind: "question",
          question: {
            id: "li-final-q7",
            type: "multiple_choice",
            prompt: {
              en: "Reading a job post, which words matter most for matching your profile?",
              es: "Al leer una vacante, ¿qué palabras importan más para que tu perfil coincida?",
            },
            points: 1,
            config: {
              options: [
                {
                  id: "a",
                  text: {
                    en: "The specific skills and tools it names",
                    es: "Las habilidades y herramientas específicas que nombra",
                  },
                },
                {
                  id: "b",
                  text: { en: "The greeting and sign-off", es: "El saludo y la despedida" },
                },
                {
                  id: "c",
                  text: { en: "The company's founding year", es: "El año de fundación de la empresa" },
                },
              ],
              correctIds: ["a"],
            },
            explanation: {
              en: "Skills and tools are what search and ATS match on — echo the real ones.",
              es: "Las habilidades y herramientas son lo que la búsqueda y el ATS comparan — refleja las reales.",
            },
          },
        },
        {
          kind: "question",
          question: {
            id: "li-final-q8",
            type: "true_false",
            prompt: {
              en: "After a cold message goes unanswered, the right move is one polite follow-up about a week later.",
              es: "Si un mensaje en frío queda sin respuesta, lo correcto es un seguimiento amable más o menos una semana después.",
            },
            points: 1,
            config: { correct: true },
            explanation: {
              en: "One respectful follow-up is plenty; daily pings backfire.",
              es: "Un seguimiento respetuoso es suficiente; insistir a diario es contraproducente.",
            },
          },
        },
      ],
    },
  },

  conclusion: {
    title: "You're job-ready",
    body: "You've worked the whole flow: a headline that gets the click, an About in your own voice, bullets that prove impact, real social proof, a network you built on purpose, a sharper job search, and outreach that earns replies. Now go apply it to your real profile — and revisit any unit any time.",
    nextSteps: [
      "Paste your drafted headline and About into your real LinkedIn profile.",
      "Pin one concrete piece of work to Featured.",
      "Send three thoughtful connection notes this week.",
      "Save one job search with alerts, and tailor your next application to its keywords.",
    ],
  },

  diploma: {
    title: "LinkedIn: Job-Ready",
    subtitle: "Profile, network & outreach — end to end",
    issuer: "VillaAula · CV Labs",
  },
};
