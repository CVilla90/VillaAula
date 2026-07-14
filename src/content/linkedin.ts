import type { Course } from "@/lib/types";

/**
 * **LinkedIn: Zero to Job-Ready** — VillaAula's second program's course (HANDOFF §20).
 *
 * A single course of 8 units + a capstone, authored **bilingually EN/ES** (the program
 * requirement): instructions, explanations, and conceptual options carry `{en, es}`;
 * the mock LinkedIn snippets the learner evaluates stay in English (you practice the
 * real artifact — an English-first profile — which is the ESL crossover §20 wants).
 *
 * ⚠️ **Audience (rewritten 2026-07-13 on Carlos's feedback — the course "felt complex and
 * very programmer oriented").** It is now written for someone who has **barely used a
 * computer**: the worked examples are a baker, a receptionist, a hair stylist, a shop
 * assistant — not a React developer. The jargon is gone (no ATS / SEO / B2B SaaS / SQL);
 * where a real concept was hiding behind an acronym it's explained in plain words instead
 * ("ATS" → *"a computer reads your profile before any human does"*). Keep it that way:
 * **if an example needs a tech job to make sense, it's the wrong example.**
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
    "You don't need to be “good with computers” for this. LinkedIn is just a place where you write down what you can do, so that people looking for someone like you can find you. This course walks you through it in small steps — what to write, why it works, and how to ask for what you want — until you have a profile that gets you found and taken seriously. Use the EN/ES switch any time.",
  introEs:
    "No necesitas ser “bueno con las computadoras” para esto. LinkedIn es simplemente un lugar donde escribes lo que sabes hacer, para que la gente que busca a alguien como tú pueda encontrarte. Este curso te lleva paso a paso — qué escribir, por qué funciona, y cómo pedir lo que quieres — hasta que tengas un perfil que haga que te encuentren y te tomen en serio. Usa el botón EN/ES cuando quieras.",
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
            "Two very different readers look at your profile, and you have to satisfy both.",
            "",
            "**First: a computer.** Nobody reads every profile by hand. When a company needs a cook, someone types *cook* into a search box, and the computer shows only the profiles that contain that word. **If the word isn't on your profile, you are invisible.** The computer is not clever about it — it looks for the word, and that's all.",
            "",
            "**Then: a person.** Once you show up in the list, a human glances at you for a few seconds and decides whether to click. They're not counting your words — they're asking *\"does this person sound like they can do the job?\"*",
            "",
            "So your profile has one job, in two steps: **be found, then be believed.** Everything in this course serves one of those two.",
          ].join("\n"),
          grammarNoteEs: [
            "Dos lectores muy distintos miran tu perfil, y tienes que dejar contentos a los dos.",
            "",
            "**Primero: una computadora.** Nadie lee todos los perfiles a mano. Cuando una empresa necesita un cocinero, alguien escribe *cocinero* en un buscador, y la computadora muestra sólo los perfiles que tienen esa palabra. **Si la palabra no está en tu perfil, eres invisible.** La computadora no es lista: busca la palabra, y ya.",
            "",
            "**Después: una persona.** Una vez que apareces en la lista, un humano te mira unos segundos y decide si te abre. No está contando tus palabras — se está preguntando *\"¿esta persona suena como que puede hacer el trabajo?\"*",
            "",
            "Así que tu perfil tiene un trabajo, en dos pasos: **que te encuentren y luego que te crean.** Todo en este curso sirve a uno de esos dos.",
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
                    en: "A restaurant is hiring and searches for \"cook.\" Your profile says \"kitchen professional\" but never the word \"cook.\" What happens?",
                    es: "Un restaurante está contratando y busca \"cocinero\". Tu perfil dice \"profesional de cocina\" pero nunca la palabra \"cocinero\". ¿Qué pasa?",
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
                          en: "The computer understands you mean the same thing and shows you anyway",
                          es: "La computadora entiende que es lo mismo y te muestra de todos modos",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "You appear, but lower down the list",
                          es: "Apareces, pero más abajo en la lista",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "The search looks for the exact word. \"Kitchen professional\" may sound nicer, but nobody searches for it. **Use the plain word people actually search for** — cook, driver, nurse, cashier, teacher.",
                    es: "La búsqueda busca la palabra exacta. \"Profesional de cocina\" puede sonar más elegante, pero nadie busca eso. **Usa la palabra sencilla que la gente realmente busca** — cocinero, chofer, enfermera, cajera, maestro.",
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
                    en: "**A.** `Aspiring baker | Looking for opportunities`\n\n**B.** `Baker · 6 years of breads and pastries · I open the shop at 4am and it has never opened late · looking for a bakery that cares about quality`",
                    es: "*(El titular real va en inglés — abajo, en cursiva, lo que dice.)*\n\n**A.** `Aspiring baker | Looking for opportunities`\n*Aspirante a panadero · «en busca de oportunidades».*\n\n**B.** `Baker · 6 years of breads and pastries · I open the shop at 4am and it has never opened late · looking for a bakery that cares about quality`\n*Panadero · 6 años de panes y repostería · abro la tienda a las 4am y nunca ha abierto tarde · busco una panadería que cuide la calidad.*",
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
                          en: "It says the job (baker), and gives one small true detail that proves it",
                          es: "Dice el trabajo (baker) y da un detalle real y pequeño que lo demuestra",
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
                    en: "**A** says what you *don't* have yet. **B** says the job word the computer searches for (*baker*), and then one small, true, specific thing — *\"it has never opened late\"* — that a person believes. Found, then believed.",
                    es: "**A** dice lo que *aún no* tienes. **B** dice la palabra del oficio que la computadora busca (*baker*), y luego una cosa pequeña, real y específica — *\"nunca ha abierto tarde\"* — que una persona sí se cree. Que te encuentren, y luego que te crean.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u2-q2",
                  type: "draft_compare",
                  prompt: {
                    en: "Your turn — write your own headline. Three parts: the job word · what you do well · what you're looking for.",
                    es: "Tu turno — escribe tu propio titular. Tres partes: la palabra del oficio · qué haces bien · qué estás buscando.",
                  },
                  config: {
                    charLimit: 120,
                    placeholder: {
                      en: "e.g. Receptionist · I remember every client's name · looking for a busy clinic",
                      es: "ej. Receptionist · I remember every client's name · looking for a busy clinic",
                    },
                    model: {
                      en: "`Hair stylist · 8 years · colour is my specialty and my clients come back · looking for a salon in the city centre`\n\nNotice how ordinary it is. There's no clever word in it. It just says: **what I am** (the word someone will search for), **one true thing that proves I'm good**, and **what I want next**. That's the whole formula.",
                      es: "`Hair stylist · 8 years · colour is my specialty and my clients come back · looking for a salon in the city centre`\n\n*Traducción:* `Estilista · 8 años · el color es mi especialidad y mis clientas regresan · busco un salón en el centro`.\n\nFíjate en lo ordinario que es. No hay ni una palabra rebuscada. Sólo dice: **qué soy** (la palabra que alguien va a buscar), **una cosa real que prueba que soy bueno**, y **qué quiero ahora**. Esa es toda la fórmula.",
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
                      {
                        left: {
                          en: "“I help small clinics fill their calendars.”",
                          es: "«Ayudo a clínicas pequeñas a llenar su agenda.»",
                        },
                        right: { en: "Hook", es: "Gancho" },
                      },
                      {
                        left: {
                          en: "“Last year I cut no-shows by 30%.”",
                          es: "«El año pasado reduje las ausencias un 30%.»",
                        },
                        right: { en: "Proof", es: "Prueba" },
                      },
                      {
                        left: {
                          en: "“Reception, appointments, Excel, customer service.”",
                          es: "«Recepción, citas, Excel, atención al cliente.»",
                        },
                        right: { en: "Keywords", es: "Palabras clave" },
                      },
                      {
                        left: {
                          en: "“Looking for reception work — send me a message.”",
                          es: "«Busco trabajo de recepción — mándame un mensaje.»",
                        },
                        right: { en: "Ask", es: "Petición" },
                      },
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
                      es: "«Ayudo a equipos en etapa temprana a convertir ideas vagas en funciones lanzadas. En mi último puesto lideré la reconstrucción de un flujo de checkout que subió la conversión un 18% en dos meses.»\n\nAbre con *a quién ayudas* y lo respalda con un resultado concreto y medible.",
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
                      {
                        id: "a",
                        text: {
                          en: "Responsible for customer support tickets",
                          es: "Responsable de los tickets de soporte al cliente",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "Handled customer service",
                          es: "Me encargué de la atención al cliente",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "Served 100+ customers a day, and complaints dropped from 5 a week to almost none",
                          es: "Atendí a más de 100 clientes al día, y las quejas bajaron de 5 por semana a casi ninguna",
                        },
                      },
                    ],
                    correctIds: ["c"],
                  },
                  explanation: {
                    en: "C starts with what you *did* and proves it with a number. A and B just name a duty — anyone could have written them.",
                    es: "C empieza con lo que *hiciste* y lo prueba con un número. A y B sólo nombran una función — cualquiera pudo haberlas escrito.",
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
                      es: "Función: «Ayudé a organizar eventos de la empresa.»\n\nImpacto: «Organicé 6 eventos para más de 200 asistentes y reduje el costo de catering un 15% al renegociar con proveedores.»",
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
                    es: "**A.** *(sin nota — invitación en blanco)*\n\n**B.** «Hola Dana — soy analista de datos junior y sigo tus publicaciones sobre dashboards. Me encantaría conectar y seguir aprendiendo de ellas.»",
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
                      es: "«Hola Marco — estoy cambiando de soporte a product y me sirvió mucho tu publicación sobre cómo escribir specs. Espero conectar y seguir tu trabajo mientras doy el salto.»",
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
                    en: "*“We're hiring a **receptionist** for a dental clinic. You'll book **appointments**, welcome patients, answer the phone, and keep the schedule in **Excel**. We need someone friendly, organised, and calm when the waiting room is full. **Customer service** experience preferred.”*",
                    es: "*«Buscamos **recepcionista** para una clínica dental. Agendarás **citas**, recibirás a los pacientes, contestarás el teléfono y llevarás la agenda en **Excel**. Necesitamos a alguien amable, organizado y tranquilo cuando la sala de espera está llena. Preferible experiencia en **atención al cliente**.»*\n\n*(Las palabras marcadas son las que la computadora va a buscar.)*",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "li-u7-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "Which words from this job post should you make sure appear (truthfully!) on your profile?",
                    es: "¿Qué palabras de esta vacante deberías asegurarte de que aparezcan (¡con honestidad!) en tu perfil?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "receptionist, appointments, Excel, customer service",
                          es: "receptionist, appointments, Excel, customer service",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "“We're hiring”, “we need someone”",
                          es: "“Buscamos”, “necesitamos a alguien”",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "friendly, organised, calm",
                          es: "amable, organizado, tranquilo",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "The **job words and tools** are what the computer searches for. (Option C is tempting — but *everybody* writes \"friendly and organised,\" so it proves nothing and nobody searches for it. Show those qualities with a story instead.)",
                    es: "Las **palabras del oficio y las herramientas** son las que busca la computadora. (La opción C es tentadora — pero *todo el mundo* escribe \"amable y organizado\", así que no prueba nada y nadie lo busca. Esas cualidades se demuestran con una historia.)",
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
                      {
                        left: {
                          en: "“I saw you work on the data team at Acme…”",
                          es: "«Vi que trabajas en el equipo de datos de Acme…»",
                        },
                        right: { en: "Reason you're writing", es: "La razón por la que escribes" },
                      },
                      {
                        left: {
                          en: "“…is there one skill that stands out for the analyst role?”",
                          es: "«…¿hay una habilidad que destaque para el puesto de analista?»",
                        },
                        right: { en: "Small specific ask", es: "Petición pequeña y específica" },
                      },
                      {
                        left: {
                          en: "“No worries at all if you're swamped.”",
                          es: "«Sin problema si andas a tope de trabajo.»",
                        },
                        right: { en: "Easy out", es: "Salida fácil" },
                      },
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
                      es: "«Hola Priya — acabo de aplicar al puesto de PM junior y vi que estás en ese equipo. ¿Hay algo que dirías que importa más para ese rol? Entiendo perfecto si estás ocupada — ¡gracias de todos modos!»",
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
              en: "If the word “Excel” isn't written anywhere on your profile, you can still show up when someone searches for “Excel.”",
              es: "Si la palabra “Excel” no está escrita en ninguna parte de tu perfil, igual puedes aparecer cuando alguien busque “Excel”.",
            },
            points: 1,
            config: { correct: false },
            explanation: {
              en: "The search only finds words that are actually there. No word, no result — so write down the ordinary things you can really do.",
              es: "La búsqueda sólo encuentra palabras que están realmente ahí. Sin la palabra, no hay resultado — así que escribe las cosas comunes que de verdad sabes hacer.",
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
                {
                  id: "a",
                  text: {
                    en: "Responsible for managing social media accounts",
                    es: "Responsable de gestionar cuentas de redes sociales",
                  },
                },
                {
                  id: "b",
                  text: {
                    en: "Grew Instagram from 1k to 9k followers in 6 months with a weekly content plan",
                    es: "Hice crecer Instagram de 1k a 9k seguidores en 6 meses con un plan de contenido semanal",
                  },
                },
                {
                  id: "c",
                  text: { en: "Worked on social media", es: "Trabajé en redes sociales" },
                },
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
                {
                  left: { en: "Headline", es: "Headline (titular)" },
                  right: { en: "Get the click / be searchable", es: "Conseguir el clic / ser buscable" },
                },
                {
                  left: { en: "About", es: "About (Acerca de)" },
                  right: { en: "Tell your story in your voice", es: "Contar tu historia con tu voz" },
                },
                {
                  left: { en: "Featured", es: "Featured (Destacado)" },
                  right: { en: "Show concrete proof of work", es: "Mostrar prueba concreta de tu trabajo" },
                },
                {
                  left: { en: "Recommendations", es: "Recommendations (Recomendaciones)" },
                  right: { en: "Third-party trust", es: "Confianza de terceros" },
                },
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
              en: "The job words and tools are what the computer searches for — use the real ones you have.",
              es: "Las palabras del oficio y las herramientas son lo que busca la computadora — usa las que de verdad tengas.",
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
