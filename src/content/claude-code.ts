import type { Course } from "@/lib/types";

/**
 * **Claude Code, from zero** — course 1 of the AI Coding program (HANDOFF §23).
 *
 * Scope: **Unit 1 only** (Carlos's ask — "first lesson only… what it is, a little
 * background story, how to install, basic prompts, common commands"). Three short
 * lessons; no final test / diploma yet, which the platform already treats as optional.
 *
 * Bilingual EN/ES like the LinkedIn course: prose and explanations carry `{en, es}`,
 * while **commands, flags, filenames and product names stay in English** — they're
 * literally what you type, so translating them would teach the wrong thing.
 *
 * Audience: someone who has barely used a terminal. Every command is shown in full, and
 * nothing assumes prior programming vocabulary.
 *
 * §9: all prose original. Commands are stated plainly as facts; the course tells the
 * learner to run `/help` and check the official docs, because these tools change often.
 */
export const claudeCode: Course = {
  id: "claude-code",
  slug: "claude-code",
  level: 1,
  title: "Claude Code, from zero",
  intro:
    "An AI that works inside your computer's terminal, reads your files, and writes code with you. This first unit is the gentle start: what it actually is, how to install it, and the handful of commands and prompt habits that make it feel like magic instead of a mystery. No programming background assumed. Use the EN/ES switch any time.",
  introEs:
    "Una IA que trabaja dentro de la terminal de tu computadora, lee tus archivos y escribe código contigo. Esta primera unidad es el arranque tranquilo: qué es en realidad, cómo instalarlo, y el puñado de comandos y hábitos de prompt que hacen que se sienta como magia y no como un misterio. No se asume nada de programación. Usa el botón EN/ES cuando quieras.",
  acceptsGuests: true,
  bilingual: true,
  noteLabel: "Key idea — the why",
  units: [
    {
      id: "cc-u1",
      slug: "1",
      number: 1,
      title: "Getting Started",
      summary:
        "What Claude Code is, where it came from, how to install it, and the first commands and prompts worth knowing.",
      lessons: [
        /* ------------------------------- L1 ------------------------------- */
        {
          id: "cc-u1-l1",
          slug: "what-claude-code-is",
          title: "What Claude Code is",
          topic: "an AI that lives in your terminal",
          deepDives: ["what-is-an-ai-coding-agent", "terminal-basics"],
          grammarNote: [
            "**Claude Code is an AI assistant that works inside your terminal.**",
            "",
            "A normal chatbot lives in a web page. You copy your code into it, it answers, you copy the answer back. It never actually *sees* your project.",
            "",
            "Claude Code is different: it runs **on your computer**, in the folder you're working in. It can open your files, read them, change them, and run commands — with your permission, every step of the way.",
            "",
            "That's the whole idea in one line: **a chatbot talks about your code; an agent works on it.**",
          ].join("\n"),
          grammarNoteEs: [
            "**Claude Code es un asistente de IA que trabaja dentro de tu terminal.**",
            "",
            "Un chatbot normal vive en una página web. Copias tu código ahí, te responde, y copias la respuesta de vuelta. Nunca *ve* tu proyecto de verdad.",
            "",
            "Claude Code es distinto: corre **en tu computadora**, en la carpeta donde estás trabajando. Puede abrir tus archivos, leerlos, cambiarlos y ejecutar comandos — con tu permiso, en cada paso.",
            "",
            "Esa es toda la idea en una línea: **un chatbot habla sobre tu código; un agente trabaja en él.**",
          ].join("\n"),
          exercise: {
            id: "cc-u1-l1-ex",
            title: "What it is",
            items: [
              {
                kind: "content",
                content: {
                  id: "cc-u1-l1-c1",
                  type: "reading",
                  title: {
                    en: "A little background",
                    es: "Un poco de historia",
                  },
                  emoji: "📜",
                  body: {
                    en: [
                      "Claude is a family of AI models built by **Anthropic**, a company founded in 2021 by a group of researchers who left OpenAI. Their stated reason for existing is a careful one: build AI that is genuinely helpful, and make it *safe* while it's still early enough to matter.",
                      "",
                      "For a couple of years, people used Claude the way they use any chatbot — through a website. And developers kept doing the same tedious dance: copy the code out, paste it into the chat, read the answer, paste it back, run it, find the error, start again.",
                      "",
                      "**Claude Code was the obvious next step.** Instead of bringing your code to the AI, it brings the AI to your code. It sits in the terminal, in your project folder, and does the copying, running, and fixing itself — while you review and approve.",
                      "",
                      "It began as an internal tool at Anthropic — engineers building the thing they wished they had. It worked well enough that they released it to everyone, and it's now available in the terminal, in editors like VS Code, and on the web.",
                    ].join("\n"),
                    es: [
                      "Claude es una familia de modelos de IA creada por **Anthropic**, una empresa fundada en 2021 por un grupo de investigadores que salieron de OpenAI. Su razón de existir declarada es cuidadosa: construir IA que sea genuinamente útil, y hacerla *segura* mientras todavía estamos a tiempo.",
                      "",
                      "Durante un par de años, la gente usó Claude como usa cualquier chatbot: a través de una página web. Y los programadores repetían el mismo baile tedioso: copiar el código, pegarlo en el chat, leer la respuesta, pegarla de vuelta, ejecutarla, encontrar el error, y empezar otra vez.",
                      "",
                      "**Claude Code fue el siguiente paso obvio.** En lugar de llevar tu código a la IA, lleva la IA a tu código. Vive en la terminal, dentro de la carpeta de tu proyecto, y hace el copiar, ejecutar y arreglar por sí mismo — mientras tú revisas y apruebas.",
                      "",
                      "Empezó como una herramienta interna de Anthropic — ingenieros construyendo lo que les hubiera gustado tener. Funcionó tan bien que la publicaron para todos, y hoy está disponible en la terminal, en editores como VS Code, y en la web.",
                    ].join("\n"),
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l1-q1",
                  type: "multiple_choice",
                  prompt: {
                    en: "What makes Claude Code different from using a chatbot in a browser?",
                    es: "¿Qué hace diferente a Claude Code frente a usar un chatbot en el navegador?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "It runs on your computer and can read and change your actual files",
                          es: "Corre en tu computadora y puede leer y modificar tus archivos reales",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "It writes code faster than a chatbot can",
                          es: "Escribe código más rápido que un chatbot",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "It never makes mistakes",
                          es: "Nunca comete errores",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "That's the whole point: it works *in* your project, not next to it. (And no — it absolutely still makes mistakes. That's why you review its work.)",
                    es: "Ese es todo el punto: trabaja *dentro* de tu proyecto, no al lado. (Y no — claro que sigue cometiendo errores. Por eso revisas su trabajo.)",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l1-q2",
                  type: "true_false",
                  prompt: {
                    en: "Claude Code can change files on your computer without asking you first.",
                    es: "Claude Code puede modificar archivos en tu computadora sin preguntarte primero.",
                  },
                  points: 1,
                  config: { correct: false },
                  explanation: {
                    en: "It asks for permission before it acts. You stay in control — approving, rejecting, or redirecting each step. That permission prompt is a feature, not a nuisance.",
                    es: "Pide permiso antes de actuar. Tú mantienes el control — aprobando, rechazando o redirigiendo cada paso. Ese aviso de permiso es una función, no una molestia.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l1-q3",
                  type: "match",
                  prompt: {
                    en: "Match each word to what it means.",
                    es: "Relaciona cada palabra con su significado.",
                  },
                  points: 1,
                  config: {
                    pairs: [
                      {
                        left: "terminal",
                        right: {
                          en: "a window where you type commands instead of clicking",
                          es: "una ventana donde escribes comandos en lugar de hacer clic",
                        },
                      },
                      {
                        left: "agent",
                        right: {
                          en: "an AI that can take actions, not just talk",
                          es: "una IA que puede realizar acciones, no sólo conversar",
                        },
                      },
                      {
                        left: "Anthropic",
                        right: {
                          en: "the company that builds Claude",
                          es: "la empresa que construye Claude",
                        },
                      },
                    ],
                  },
                  explanation: {
                    en: "Three words you'll meet constantly. The terminal is *where* it lives, agent is *what* it is, Anthropic is *who* makes it.",
                    es: "Tres palabras que verás todo el tiempo. La terminal es *dónde* vive, agente es *qué* es, y Anthropic es *quién* lo hace.",
                  },
                },
              },
            ],
          },
        },

        /* ------------------------------- L2 ------------------------------- */
        {
          id: "cc-u1-l2",
          slug: "install-and-first-run",
          title: "Install it and say hello",
          topic: "install · start · your first request",
          deepDives: ["terminal-basics"],
          grammarNote: [
            "Installing it is **two commands and one login.**",
            "",
            "1. Install it once, for your whole computer:",
            "   `npm install -g @anthropic-ai/claude-code`",
            "2. Go into your project's folder, then start it:",
            "   `cd my-project`",
            "   `claude`",
            "3. The first time, it asks you to log in with your Claude account. Do that once and it remembers.",
            "",
            "The `-g` in step 1 means *global* — install it everywhere, not just here. `cd` means *change directory*: it's how you walk into a folder.",
            "",
            "That's it. You're now talking to an AI that can see your project.",
          ].join("\n"),
          grammarNoteEs: [
            "Instalarlo son **dos comandos y un inicio de sesión.**",
            "",
            "1. Instálalo una vez, para toda tu computadora:",
            "   `npm install -g @anthropic-ai/claude-code`",
            "2. Entra a la carpeta de tu proyecto y arráncalo:",
            "   `cd my-project`",
            "   `claude`",
            "3. La primera vez te pedirá iniciar sesión con tu cuenta de Claude. Lo haces una vez y lo recuerda.",
            "",
            "El `-g` del paso 1 significa *global* — instálalo en todas partes, no sólo aquí. `cd` significa *change directory* (cambiar de carpeta): así entras a una carpeta.",
            "",
            "Eso es todo. Ya estás hablando con una IA que puede ver tu proyecto.",
          ].join("\n"),
          exercise: {
            id: "cc-u1-l2-ex",
            title: "Install & first run",
            items: [
              {
                kind: "content",
                content: {
                  id: "cc-u1-l2-c1",
                  type: "reading",
                  title: {
                    en: "Before you start: the one thing you need",
                    es: "Antes de empezar: lo único que necesitas",
                  },
                  emoji: "🧰",
                  body: {
                    en: [
                      "That install command uses **npm**, which comes with **Node.js**. If you've never installed Node, do that first — it's a normal installer from `nodejs.org`, the same as installing any other program.",
                      "",
                      "To check whether you already have it, open your terminal and type:",
                      "",
                      "`node --version`",
                      "",
                      "If it prints a number like `v22.14.0`, you're ready. If it says *command not found*, install Node first, then come back.",
                      "",
                      "**A word about the terminal.** If a black window full of text feels intimidating, that's normal and it passes quickly. It's just a place where you *type* instructions instead of clicking them. You already know how to give a computer instructions — this is the same thing with different clothes on.",
                    ].join("\n"),
                    es: [
                      "Ese comando de instalación usa **npm**, que viene con **Node.js**. Si nunca has instalado Node, hazlo primero — es un instalador normal desde `nodejs.org`, igual que instalar cualquier otro programa.",
                      "",
                      "Para revisar si ya lo tienes, abre tu terminal y escribe:",
                      "",
                      "`node --version`",
                      "",
                      "Si imprime un número como `v22.14.0`, ya estás listo. Si dice *command not found*, instala Node primero y regresa.",
                      "",
                      "**Una palabra sobre la terminal.** Si una ventana negra llena de texto te intimida, es normal y se pasa rápido. Es sólo un lugar donde *escribes* instrucciones en lugar de hacerles clic. Ya sabes darle instrucciones a una computadora — esto es lo mismo, con otra ropa.",
                    ].join("\n"),
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l2-q1",
                  type: "open",
                  prompt: {
                    en: "Type the command that starts Claude Code once it's installed. (One word.)",
                    es: "Escribe el comando que inicia Claude Code una vez instalado. (Una palabra.)",
                  },
                  points: 1,
                  config: {
                    acceptedAnswers: ["claude"],
                    charLimit: 20,
                    placeholder: { en: "one word", es: "una palabra" },
                  },
                  explanation: {
                    en: "Just `claude`. You run it *inside* the folder you want to work on — that folder becomes its world.",
                    es: "Sólo `claude`. Lo ejecutas *dentro* de la carpeta en la que quieres trabajar — esa carpeta se vuelve su mundo.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l2-q2",
                  type: "multiple_choice",
                  prompt: {
                    en: "What does the `-g` do in `npm install -g @anthropic-ai/claude-code`?",
                    es: "¿Qué hace el `-g` en `npm install -g @anthropic-ai/claude-code`?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "Installs it globally — available from any folder on your computer",
                          es: "Lo instala globalmente — disponible desde cualquier carpeta de tu computadora",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "Makes the install go faster",
                          es: "Hace que la instalación sea más rápida",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "Installs the graphical version",
                          es: "Instala la versión gráfica",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "`-g` = global. Without it, the tool would only exist inside one project folder — and you want it everywhere.",
                    es: "`-g` = global. Sin él, la herramienta sólo existiría dentro de una carpeta — y tú la quieres en todas.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l2-q3",
                  type: "true_false",
                  prompt: {
                    en: "You should start Claude Code from inside the folder of the project you want to work on.",
                    es: "Debes iniciar Claude Code desde dentro de la carpeta del proyecto en el que quieres trabajar.",
                  },
                  points: 1,
                  config: { correct: true },
                  explanation: {
                    en: "Yes — the folder you start it in is the project it can see. Start it in the wrong place and it's looking at the wrong files.",
                    es: "Sí — la carpeta donde lo inicias es el proyecto que puede ver. Si lo inicias en el lugar equivocado, está mirando los archivos equivocados.",
                  },
                },
              },
            ],
          },
        },

        /* ------------------------------- L3 ------------------------------- */
        {
          id: "cc-u1-l3",
          slug: "prompts-and-commands",
          title: "Prompts & commands that work",
          topic: "slash commands · saying what you actually want",
          deepDives: ["prompting-habits", "claude-code-commands"],
          grammarNote: [
            "Two kinds of things get typed into Claude Code:",
            "",
            "- **Plain English** (or Spanish) — what you want done. *“Fix the login bug.”*",
            "- **Slash commands** — instructions to the *tool itself*. They start with `/`.",
            "",
            "The four to know on day one:",
            "",
            "- `/help` — list everything it can do. When in doubt, start here.",
            "- `/clear` — wipe the conversation and start fresh. Use it between unrelated tasks.",
            "- `/init` — look around the project and write a `CLAUDE.md` file describing it, so it starts every future session already knowing your project.",
            "- `/model` — choose which Claude model to use.",
            "",
            "**The habit that matters most:** be specific about the *goal*, not the *keystrokes*. Say what \"done\" looks like, and let it work out the steps.",
          ].join("\n"),
          grammarNoteEs: [
            "En Claude Code se escriben dos tipos de cosas:",
            "",
            "- **Español (o inglés) normal** — lo que quieres que haga. *“Arregla el bug del login.”*",
            "- **Slash commands** (comandos con diagonal) — instrucciones para *la herramienta misma*. Empiezan con `/`.",
            "",
            "Los cuatro que debes conocer desde el día uno:",
            "",
            "- `/help` — lista todo lo que puede hacer. Si dudas, empieza aquí.",
            "- `/clear` — borra la conversación y empieza de cero. Úsalo entre tareas que no tienen relación.",
            "- `/init` — revisa el proyecto y escribe un archivo `CLAUDE.md` describiéndolo, para que en cada sesión futura ya conozca tu proyecto.",
            "- `/model` — elige qué modelo de Claude usar.",
            "",
            "**El hábito que más importa:** sé específico sobre el *objetivo*, no sobre las *teclas*. Di cómo se ve \"terminado\" y deja que él resuelva los pasos.",
          ].join("\n"),
          exercise: {
            id: "cc-u1-l3-ex",
            title: "Prompts & commands",
            items: [
              {
                kind: "content",
                content: {
                  id: "cc-u1-l3-c1",
                  type: "reading",
                  title: {
                    en: "A weak prompt and a strong one",
                    es: "Un prompt débil y uno fuerte",
                  },
                  emoji: "🎯",
                  body: {
                    en: [
                      "**Weak:** *“Fix my code.”*",
                      "",
                      "It doesn't know which code, what \"fixed\" means, or how it would know when it's done. It will guess — and guessing is where bad results come from.",
                      "",
                      "**Strong:** *“The login form lets you submit an empty password. Make the password required, show an error message under the field, and add a test for it.”*",
                      "",
                      "Look at what the strong version gives it: **where** the problem is, **what** is wrong, **what done looks like**, and **how to prove it**. None of that is technical jargon — it's just clarity.",
                      "",
                      "The most useful sentence you can add to almost any request is: *“…and show me what you changed before you change it.”*",
                    ].join("\n"),
                    es: [
                      "**Débil:** *“Arregla mi código.”*",
                      "",
                      "No sabe cuál código, qué significa \"arreglado\", ni cómo sabría que ya terminó. Va a adivinar — y adivinar es de donde salen los malos resultados.",
                      "",
                      "**Fuerte:** *“El formulario de login deja enviar una contraseña vacía. Haz la contraseña obligatoria, muestra un mensaje de error debajo del campo, y agrega una prueba para eso.”*",
                      "",
                      "Mira lo que le da la versión fuerte: **dónde** está el problema, **qué** está mal, **cómo se ve terminado**, y **cómo comprobarlo**. Nada de eso es jerga técnica — es simplemente claridad.",
                      "",
                      "La frase más útil que puedes añadir a casi cualquier petición es: *“…y muéstrame qué vas a cambiar antes de cambiarlo.”*",
                    ].join("\n"),
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l3-q1",
                  type: "match",
                  prompt: {
                    en: "Match each slash command to what it does.",
                    es: "Relaciona cada slash command con lo que hace.",
                  },
                  points: 1,
                  config: {
                    pairs: [
                      {
                        left: "/help",
                        right: {
                          en: "show what the tool can do",
                          es: "muestra lo que la herramienta puede hacer",
                        },
                      },
                      {
                        left: "/clear",
                        right: {
                          en: "start a fresh conversation",
                          es: "empieza una conversación nueva",
                        },
                      },
                      {
                        left: "/init",
                        right: {
                          en: "write a CLAUDE.md describing the project",
                          es: "escribe un CLAUDE.md que describe el proyecto",
                        },
                      },
                      {
                        left: "/model",
                        right: {
                          en: "choose which model to use",
                          es: "elige qué modelo usar",
                        },
                      },
                    ],
                  },
                  explanation: {
                    en: "Anything starting with `/` talks to the tool. Anything else talks to the AI.",
                    es: "Todo lo que empieza con `/` le habla a la herramienta. Todo lo demás le habla a la IA.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l3-q2",
                  type: "multiple_choice",
                  prompt: {
                    en: "Which request will get you the best result?",
                    es: "¿Cuál petición te dará el mejor resultado?",
                  },
                  points: 1,
                  config: {
                    options: [
                      {
                        id: "a",
                        text: {
                          en: "“The date on the receipt shows in US format. Change it to DD/MM/YYYY everywhere it appears, and tell me which files you touched.”",
                          es: "“La fecha del recibo aparece en formato de EE. UU. Cámbiala a DD/MM/AAAA en todos los lugares donde aparezca, y dime qué archivos tocaste.”",
                        },
                      },
                      {
                        id: "b",
                        text: {
                          en: "“Make the dates better.”",
                          es: "“Haz que las fechas se vean mejor.”",
                        },
                      },
                      {
                        id: "c",
                        text: {
                          en: "“Dates.”",
                          es: "“Fechas.”",
                        },
                      },
                    ],
                    correctIds: ["a"],
                  },
                  explanation: {
                    en: "It says where, what, what \"done\" is, and asks to be shown the result. That's the whole recipe.",
                    es: "Dice dónde, qué, cómo se ve \"terminado\", y pide que le muestren el resultado. Esa es toda la receta.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l3-q3",
                  type: "true_false",
                  prompt: {
                    en: "If you're not sure what the tool can do, `/help` is the right place to start.",
                    es: "Si no sabes qué puede hacer la herramienta, `/help` es el lugar correcto para empezar.",
                  },
                  points: 1,
                  config: { correct: true },
                  explanation: {
                    en: "Always. These tools change often, and `/help` is always current — more current than any course, including this one.",
                    es: "Siempre. Estas herramientas cambian seguido, y `/help` siempre está al día — más al día que cualquier curso, incluido este.",
                  },
                },
              },
              {
                kind: "question",
                question: {
                  id: "cc-u1-l3-q4",
                  type: "draft_compare",
                  prompt: {
                    en: "Your turn. Think of something on your computer you'd like changed — a file to rename, a list to sort, a page to fix. Write the request you'd give Claude Code. Say where, what, and what \"done\" looks like.",
                    es: "Tu turno. Piensa en algo de tu computadora que quisieras cambiar — un archivo por renombrar, una lista por ordenar, una página por arreglar. Escribe la petición que le darías a Claude Code. Di dónde, qué, y cómo se ve \"terminado\".",
                  },
                  points: 1,
                  config: {
                    placeholder: {
                      en: "Write your request the way you'd actually type it…",
                      es: "Escribe tu petición tal como la escribirías de verdad…",
                    },
                    charLimit: 600,
                    model: {
                      en: "In the `notes` folder, some files are named with spaces (like `my notes.txt`) and some with dashes. Rename them all to use dashes, keep the file contents untouched, and show me the list of renames before you do it.",
                      es: "En la carpeta `notes`, algunos archivos tienen espacios en el nombre (como `my notes.txt`) y otros guiones. Renómbralos todos para que usen guiones, no toques el contenido de los archivos, y muéstrame la lista de cambios antes de hacerlos.",
                    },
                    checklist: [
                      {
                        en: "Does it say **where** to look (a folder, a file, a page)?",
                        es: "¿Dice **dónde** buscar (una carpeta, un archivo, una página)?",
                      },
                      {
                        en: "Does it say what **done** looks like?",
                        es: "¿Dice cómo se ve **terminado**?",
                      },
                      {
                        en: "Does it say what must **not** change?",
                        es: "¿Dice qué **no** debe cambiar?",
                      },
                      {
                        en: "Does it ask to see the plan **before** it acts?",
                        es: "¿Pide ver el plan **antes** de actuar?",
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
