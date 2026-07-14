import type { Course } from "@/lib/types";

/**
 * **Codex, from zero** — course 2 of the AI Coding program (HANDOFF §23).
 *
 * Same scope and shape as `claude-code.ts`: **Unit 1 only** (what it is + background,
 * install, prompts & commands), bilingual EN/ES, commands/flags/filenames left in English.
 * The two courses are deliberately parallel — a learner who takes both should notice that
 * the *ideas* transfer and only the *names* change. That's the real lesson.
 *
 * §9: all prose original.
 */
export const codex: Course = {
  id: "codex",
  slug: "codex",
  level: 2,
  title: "Codex, from zero",
  intro:
    "OpenAI's coding agent — an AI that works in your terminal, reads your project, and makes changes you approve. This first unit covers what it is, the surprisingly long story behind the name, how to install it, and the commands and prompt habits to start with. No programming background assumed. Use the EN/ES switch any time.",
  introEs:
    "El agente de programación de OpenAI — una IA que trabaja en tu terminal, lee tu proyecto y hace cambios que tú apruebas. Esta primera unidad cubre qué es, la sorprendentemente larga historia detrás del nombre, cómo instalarlo, y los comandos y hábitos de prompt con los que conviene empezar. No se asume nada de programación. Usa el botón EN/ES cuando quieras.",
  acceptsGuests: true,
  bilingual: true,
  noteLabel: "Key idea — the why",
  units: [
    {
      id: "cx-u1",
      slug: "1",
      number: 1,
      title: "Getting Started",
      summary:
        "What Codex is, where the name came from, how to install it, and the approval modes that keep you in charge.",
      lessons: [
        /* ------------------------------- L1 ------------------------------- */
        {
          id: "cx-u1-l1",
          slug: "what-codex-is",
          title: "What Codex is",
          topic: "OpenAI's coding agent",
          deepDives: ["what-is-an-ai-coding-agent", "terminal-basics"],
          grammarNote: [
            "**Codex is OpenAI's coding agent.** Like Claude Code, it runs in your terminal, sees the project folder you start it in, and can read files, write code, and run commands — with your approval.",
            "",
            "If you've done the Claude Code course, you already understand Codex. The shape is the same: *an AI that acts on your project instead of just talking about it.* What changes is the company behind it, the command you type, and some of the vocabulary.",
            "",
            "That's genuinely worth noticing. These tools are converging, so **the habits you build transfer.** Learn to give a clear instruction and to review a change carefully, and you can pick up any of them in an afternoon.",
          ].join("\n"),
          grammarNoteEs: [
            "**Codex es el agente de programación de OpenAI.** Igual que Claude Code, corre en tu terminal, ve la carpeta del proyecto donde lo inicias, y puede leer archivos, escribir código y ejecutar comandos — con tu aprobación.",
            "",
            "Si ya hiciste el curso de Claude Code, ya entiendes Codex. La forma es la misma: *una IA que actúa sobre tu proyecto en lugar de sólo hablar de él.* Lo que cambia es la empresa detrás, el comando que escribes, y parte del vocabulario.",
            "",
            "Eso vale la pena notarlo. Estas herramientas se están pareciendo cada vez más, así que **los hábitos que construyes se transfieren.** Aprende a dar una instrucción clara y a revisar un cambio con cuidado, y puedes aprender cualquiera de ellas en una tarde.",
          ].join("\n"),
          exercise: {
            id: "cx-u1-l1-ex",
            title: "What it is",
            items: [
              {
                kind: "content",
                content: {
                  id: "cx-u1-l1-c1",
                  type: "reading",
                  title: {
                    en: "The name is older than you think",
                    es: "El nombre es más viejo de lo que crees",
                  },
                  emoji: "📜",
                  body: {
                    en: [
                      "**Codex** was originally the name of an AI *model*, not a tool. Around 2021, OpenAI trained a version of GPT specifically on source code, and called it Codex. It could turn a comment like *“sort this list by date”* into working code — which, at the time, felt like witchcraft.",
                      "",
                      "That model became the engine inside **GitHub Copilot**, the autocomplete that finishes your line of code as you type. For years, that was the shape of AI coding: a very good autocomplete sitting inside your editor.",
                      "",
                      "Then the ambition grew. Autocomplete helps you type; it doesn't do the *job*. So OpenAI brought the name back for something bigger: **an agent** — a Codex that doesn't just suggest the next line, but takes a whole task, works through the files, runs the tests, and comes back with a finished change for you to review.",
                      "",
                      "So when you hear \"Codex,\" ask which one is meant. The old model is history. **The Codex you install today is the agent.**",
                    ].join("\n"),
                    es: [
                      "**Codex** fue originalmente el nombre de un *modelo* de IA, no de una herramienta. Alrededor de 2021, OpenAI entrenó una versión de GPT específicamente con código fuente, y la llamó Codex. Podía convertir un comentario como *“ordena esta lista por fecha”* en código que funcionaba — lo cual, en su momento, parecía brujería.",
                      "",
                      "Ese modelo se volvió el motor dentro de **GitHub Copilot**, el autocompletado que termina tu línea de código mientras escribes. Durante años, esa fue la forma de la IA para programar: un autocompletado muy bueno viviendo dentro de tu editor.",
                      "",
                      "Después creció la ambición. El autocompletado te ayuda a *teclear*; no hace el *trabajo*. Así que OpenAI recuperó el nombre para algo más grande: **un agente** — un Codex que no sólo sugiere la siguiente línea, sino que toma una tarea completa, recorre los archivos, corre las pruebas, y regresa con un cambio terminado para que lo revises.",
                      "",
                      "Así que cuando escuches \"Codex\", pregunta a cuál se refieren. El modelo viejo es historia. **El Codex que instalas hoy es el agente.**",
                    ].join("\n"),
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cx-u1-l1-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "The name “Codex” has meant two different things. What does it mean today?",
                    es: "El nombre “Codex” ha significado dos cosas distintas. ¿Qué significa hoy?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "An agent that takes a whole task, edits files, and runs commands",
                          es: "Un agente que toma una tarea completa, edita archivos y ejecuta comandos",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "An autocomplete that finishes the line you're typing",
                          es: "Un autocompletado que termina la línea que estás escribiendo",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "A website where you chat about code",
                          es: "Un sitio web donde conversas sobre código",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "Option B describes the *old* Codex — the 2021 model behind GitHub Copilot. Today's Codex is the agent.",
                    es: "La opción B describe el Codex *viejo* — el modelo de 2021 detrás de GitHub Copilot. El Codex de hoy es el agente.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cx-u1-l1-q2",
                  type: "true_false",
                  prompt: {
                    en: "Codex and Claude Code are made by the same company.",
                    es: "Codex y Claude Code están hechos por la misma empresa.",
                  },
                  points: 1,
                  config: { correct: false },
                  explanation: {
                    en: "Codex is OpenAI's; Claude Code is Anthropic's. They're competitors doing very similar things — which is exactly why learning one makes the other easy.",
                    es: "Codex es de OpenAI; Claude Code es de Anthropic. Son competidores haciendo cosas muy parecidas — y justo por eso aprender uno hace fácil el otro.",
                  },
                },
              },
            ],
          },
        },

        /* ------------------------------- L2 ------------------------------- */
        {
          id: "cx-u1-l2",
          slug: "install-and-first-run",
          title: "Install it and say hello",
          topic: "install · start · approval modes",
          deepDives: ["terminal-basics"],
          grammarNote: [
            "Same three steps as any of these tools:",
            "",
            "1. Install it once, for the whole computer:",
            "   `npm install -g @openai/codex`",
            "2. Walk into your project and start it:",
            "   `cd my-project`",
            "   `codex`",
            "3. Sign in with your OpenAI account the first time.",
            "",
            "**Then the important part: how much rope do you give it?** Codex asks how freely it may act — whether to check with you before each edit, or to work on its own and show you the result at the end.",
            "",
            "**Start cautious.** Let it ask permission for everything until you've watched it work a few times and you trust what it does. You can always loosen the leash; you can't un-delete a file.",
          ].join("\n"),
          grammarNoteEs: [
            "Los mismos tres pasos que en cualquiera de estas herramientas:",
            "",
            "1. Instálalo una vez, para toda la computadora:",
            "   `npm install -g @openai/codex`",
            "2. Entra a tu proyecto y arráncalo:",
            "   `cd my-project`",
            "   `codex`",
            "3. Inicia sesión con tu cuenta de OpenAI la primera vez.",
            "",
            "**Y ahora lo importante: ¿cuánta libertad le das?** Codex pregunta con qué libertad puede actuar — si debe consultarte antes de cada edición, o si puede trabajar solo y enseñarte el resultado al final.",
            "",
            "**Empieza con cautela.** Deja que pida permiso para todo hasta que lo hayas visto trabajar varias veces y confíes en lo que hace. Siempre puedes soltarle la correa; lo que no puedes es des-borrar un archivo.",
          ].join("\n"),
          exercise: {
            id: "cx-u1-l2-ex",
            title: "Install & approval",
            items: [
              {
                kind: "content",
                content: {
                  id: "cx-u1-l2-c1",
                  type: "reading",
                  title: {
                    en: "How much freedom to give it",
                    es: "Cuánta libertad darle",
                  },
                  emoji: "🔐",
                  body: {
                    en: [
                      "Every one of these agents has some version of this dial, and it's the single most important setting you'll touch. Roughly, it has three positions:",
                      "",
                      "- **Ask me first** — it proposes each change and waits for your yes. Slow, and completely safe. Start here.",
                      "- **Edit, but ask before running things** — it can change files on its own, but stops before running commands.",
                      "- **Full speed** — it works alone and shows you the result. Fast, and you'd better be in a folder you can afford to lose.",
                      "",
                      "The advice is genuinely simple: **stay on the cautious setting until watching it work has become boring.** Boredom is the signal that you understand what it does. Until then, every approval prompt is a free lesson in what the tool is actually doing.",
                      "",
                      "And whatever the setting: **work in a folder backed up by Git.** That way any change can be undone with one command. Nobody is careful enough to skip that.",
                    ].join("\n"),
                    es: [
                      "Todos estos agentes tienen alguna versión de esta perilla, y es el ajuste más importante que vas a tocar. A grandes rasgos, tiene tres posiciones:",
                      "",
                      "- **Pregúntame primero** — propone cada cambio y espera tu sí. Lento, y completamente seguro. Empieza aquí.",
                      "- **Edita, pero pregunta antes de ejecutar** — puede cambiar archivos por su cuenta, pero se detiene antes de correr comandos.",
                      "- **A toda velocidad** — trabaja solo y te muestra el resultado. Rápido, y más te vale estar en una carpeta que puedas darte el lujo de perder.",
                      "",
                      "El consejo es genuinamente simple: **quédate en el ajuste cauteloso hasta que verlo trabajar te aburra.** El aburrimiento es la señal de que ya entiendes lo que hace. Hasta entonces, cada permiso que te pide es una clase gratis sobre lo que la herramienta realmente está haciendo.",
                      "",
                      "Y sin importar el ajuste: **trabaja en una carpeta respaldada con Git.** Así cualquier cambio se deshace con un comando. Nadie es tan cuidadoso como para saltarse eso.",
                    ].join("\n"),
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cx-u1-l2-q1",
                  type: "open",
                  prompt: {
                    en: "Type the command that starts Codex once it's installed. (One word.)",
                    es: "Escribe el comando que inicia Codex una vez instalado. (Una palabra.)",
                  },
                  points: 1,
                  config: {
                    acceptedAnswers: ["codex"],
                    charLimit: 20,
                    placeholder: { en: "one word", es: "una palabra" },
                  },
                  explanation: {
                    en: "`codex` — run from inside the project folder you want it to see. Notice the pattern: `claude` starts Claude Code, `codex` starts Codex.",
                    es: "`codex` — ejecutado dentro de la carpeta del proyecto que quieres que vea. Nota el patrón: `claude` inicia Claude Code, `codex` inicia Codex.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cx-u1-l2-q2",
                  type: "multiple_choice",
                  prompt: {
                    en: "You've just installed Codex and you're about to use it on a real project. Which approval setting should you choose?",
                    es: "Acabas de instalar Codex y vas a usarlo en un proyecto real. ¿Qué ajuste de aprobación deberías elegir?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "Ask me before every change — until I've seen it work and I trust it",
                          es: "Pregúntame antes de cada cambio — hasta que lo haya visto trabajar y confíe en él",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "Full speed — it's faster, and it's usually right",
                          es: "A toda velocidad — es más rápido, y casi siempre acierta",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "It doesn't matter, the changes can't be undone anyway",
                          es: "Da igual, de todos modos los cambios no se pueden deshacer",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "Cautious first. And option C is backwards — changes *can* be undone, which is precisely why you keep your work in Git.",
                    es: "Primero la cautela. Y la opción C está al revés — los cambios *sí* se pueden deshacer, y justo por eso mantienes tu trabajo en Git.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cx-u1-l2-q3",
                  type: "true_false",
                  prompt: {
                    en: "Keeping your project in Git means a bad change can be undone.",
                    es: "Tener tu proyecto en Git significa que un mal cambio se puede deshacer.",
                  },
                  points: 1,
                  config: { correct: true },
                  explanation: {
                    en: "This is the safety net under everything else. An agent that can edit files is only scary in a folder you can't roll back.",
                    es: "Esta es la red de seguridad debajo de todo lo demás. Un agente que puede editar archivos sólo da miedo en una carpeta que no puedes revertir.",
                  },
                },
              },
            ],
          },
        },

        /* ------------------------------- L3 ------------------------------- */
        {
          id: "cx-u1-l3",
          slug: "prompts-and-commands",
          title: "Prompts & commands that work",
          topic: "AGENTS.md · clear instructions",
          deepDives: ["prompting-habits", "codex-commands"],
          grammarNote: [
            "Codex takes plain-language requests, and — like the others — **slash commands** starting with `/` that talk to the tool rather than the AI. `/help` lists them; that's the only one you must memorise, because it tells you the rest.",
            "",
            "The piece worth learning early is the **`AGENTS.md`** file.",
            "",
            "Put a file called `AGENTS.md` in your project, write down the things you'd tell a new teammate — *how to run the tests, the style we use, don't touch the `legacy/` folder* — and Codex reads it every session. Claude Code has the same idea under the name `CLAUDE.md`.",
            "",
            "**It's the highest-leverage ten minutes you'll spend.** Every instruction you write once there is an instruction you never type again.",
          ].join("\n"),
          grammarNoteEs: [
            "Codex acepta peticiones en lenguaje normal y — como los demás — **slash commands** que empiezan con `/` y le hablan a la herramienta, no a la IA. `/help` los lista; ese es el único que debes memorizar, porque te dice todos los demás.",
            "",
            "Lo que conviene aprender pronto es el archivo **`AGENTS.md`**.",
            "",
            "Pon un archivo llamado `AGENTS.md` en tu proyecto, escribe ahí lo que le dirías a alguien que acaba de entrar al equipo — *cómo correr las pruebas, qué estilo usamos, no toques la carpeta `legacy/`* — y Codex lo lee en cada sesión. Claude Code tiene la misma idea con el nombre `CLAUDE.md`.",
            "",
            "**Son los diez minutos más rentables que vas a invertir.** Cada instrucción que escribes ahí una vez es una instrucción que no vuelves a teclear nunca.",
          ].join("\n"),
          exercise: {
            id: "cx-u1-l3-ex",
            title: "Prompts & project memory",
            items: [
              {
                kind: "question",
                question: {
                  id: "cx-u1-l3-q1",
                  type: "match",
                  prompt: {
                    en: "Match each thing to what it is.",
                    es: "Relaciona cada cosa con lo que es.",
                  },
                  points: 1,
                  config: {
                    pairs: [
                      {
                        left: "AGENTS.md",
                        right: {
                          en: "notes about your project that Codex reads every session",
                          es: "notas sobre tu proyecto que Codex lee en cada sesión",
                        },
                      },
                      {
                        left: "CLAUDE.md",
                        right: {
                          en: "the same idea, in Claude Code",
                          es: "la misma idea, en Claude Code",
                        },
                      },
                      {
                        left: "/help",
                        right: {
                          en: "lists the commands the tool understands",
                          es: "lista los comandos que la herramienta entiende",
                        },
                      },
                    ],
                  },
                  explanation: {
                    en: "Different names, one idea: give the agent a memory of your project so you stop repeating yourself.",
                    es: "Nombres distintos, una idea: darle al agente memoria de tu proyecto para que dejes de repetirte.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cx-u1-l3-q2",
                  type: "multiple_choice",
                  prompt: {
                    en: "Which line belongs in an `AGENTS.md` file?",
                    es: "¿Cuál línea va en un archivo `AGENTS.md`?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "“Run the tests with `npm test`. Never edit files in `legacy/` — that folder is frozen.”",
                          es: "“Corre las pruebas con `npm test`. Nunca edites archivos en `legacy/` — esa carpeta está congelada.”",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "“Fix the bug in the login form today.”",
                          es: "“Arregla hoy el bug del formulario de login.”",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "“Hello, how are you?”",
                          es: "“Hola, ¿cómo estás?”",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "`AGENTS.md` is for things that are true *every* session — the rules of the house. A one-off task like B belongs in the chat, not the file.",
                    es: "`AGENTS.md` es para cosas que son verdad en *todas* las sesiones — las reglas de la casa. Una tarea puntual como la B va en el chat, no en el archivo.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cx-u1-l3-q3",
                  type: "draft_compare",
                  prompt: {
                    en: "Write three lines you'd put in the `AGENTS.md` of a project you know (or imagine one). Think: what would you tell a new teammate on day one so they don't break anything?",
                    es: "Escribe tres líneas que pondrías en el `AGENTS.md` de un proyecto que conozcas (o imagina uno). Piensa: ¿qué le dirías a alguien nuevo en su primer día para que no rompa nada?",
                  },
                  points: 1,
                  config: {
                    placeholder: {
                      en: "Three house rules for your project…",
                      es: "Tres reglas de la casa para tu proyecto…",
                    },
                    charLimit: 600,
                    model: {
                      en: "Run the tests with `npm test` before you say a task is done.\nThis project uses Spanish for user-facing text and English for code and comments.\nNever edit `public/legacy/` — it's an old site we still serve but no longer change.",
                      es: "Corre las pruebas con `npm test` antes de decir que una tarea está terminada.\nEste proyecto usa español para el texto que ve el usuario e inglés para el código y los comentarios.\nNunca edites `public/legacy/` — es un sitio viejo que seguimos publicando pero ya no cambiamos.",
                    },
                    checklist: [
                      {
                        en: "Is each line true **every** session (not a one-off task)?",
                        es: "¿Cada línea es cierta en **todas** las sesiones (no una tarea puntual)?",
                      },
                      {
                        en: "Did you include how to **check the work** (tests, a command)?",
                        es: "¿Incluiste cómo **comprobar el trabajo** (pruebas, un comando)?",
                      },
                      {
                        en: "Did you name anything that must **not** be touched?",
                        es: "¿Nombraste algo que **no** debe tocarse?",
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
};
