import type { Resource } from "@/lib/types";

/** AI Coding wiki — how to ask. Original wording (HANDOFF §9). */
export const promptingHabits: Resource = {
  slug: "prompting-habits",
  title: "How to ask: the prompting habits that work",
  summary:
    "Not tricks or magic words. Four habits that turn a vague request into a finished piece of work.",
  wiki: "ai-coding",
  section: "Prompting",
  level: 1,
  tags: ["prompting", "habits"],
  related: ["what-is-an-ai-coding-agent", "claude-code-commands", "codex-commands"],
  body: [
    "There is no secret phrase. \"Prompt engineering\" for coding agents comes down to something much more ordinary: **being able to say clearly what you want.** That's it. It's the same skill as briefing a colleague, and people who are good at that are immediately good at this.",
    "",
    "Four habits carry almost all of the value.",
    "",
    "## 1. Say what \"done\" looks like",
    "The agent can't read your mind about when to stop. *\"Make the page faster\"* has no finish line. *\"The page takes 4 seconds to load; get it under 1, and show me the before and after\"* does.",
    "",
    "## 2. Say what must **not** change",
    "This is the one people skip, and it's the one that prevents the mess. *\"Don't change the database schema.\"* *\"Leave the styling alone.\"* A boundary is worth three instructions.",
    "",
    "## 3. Ask for the plan before the work",
    "*\"Show me what you're going to change before you change it.\"* Ten seconds of reading saves you from an agent confidently doing the wrong thing across eleven files. This is the single highest-value sentence in this whole page.",
    "",
    "## 4. Give it a way to check itself",
    "An agent that can run the tests will keep working until they pass. An agent with no way to check is just guessing loudly. *\"Run `npm test` and don't stop until it's green.\"*",
    "",
    "## And when it goes wrong",
    "It will. The fix is almost never a cleverer prompt — it's a **smaller** one. Break the task in half. Start a fresh conversation (`/clear`) so old, wrong context stops poisoning the new attempt. If it's confused about your project, that's a sign the project needs a [memory file](/wiki/ai-coding/codex-commands), not a longer sentence.",
  ].join("\n"),
  tables: [
    {
      title: "Same request, four levels",
      columns: ["Level", "The request", "What you'll get"],
      rows: [
        ["Hopeless", "\"fix the bug\"", "A guess about which bug"],
        ["Vague", "\"fix the login bug\"", "Something login-shaped, maybe right"],
        [
          "Good",
          "\"The login form accepts an empty password. Make it required and show an error.\"",
          "The right change",
        ],
        [
          "Excellent",
          "\"The login form accepts an empty password. Make it required, show an error under the field, add a test, run `npm test`, and show me the plan before you edit.\"",
          "The right change, proven, reviewable",
        ],
      ],
      note:
        "Notice the excellent one isn't *cleverer* — it's just more **complete**. Where · what · done · proof · review.",
    },
    {
      title: "Sentences worth stealing",
      columns: ["Say this", "Because"],
      rows: [
        ["\"Show me the plan before you change anything.\"", "Catches a wrong direction while it's still free"],
        ["\"Don't touch anything outside this folder.\"", "Bounds the blast radius"],
        ["\"Explain what you did and why, briefly.\"", "You learn; and you can spot bad reasoning"],
        ["\"Run the tests and keep going until they pass.\"", "Gives it a finish line it can check itself against"],
        ["\"If you're unsure, ask me instead of guessing.\"", "Turns a silent wrong turn into a question"],
      ],
    },
  ],
};
