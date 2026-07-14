import type { Resource } from "@/lib/types";

/** AI Coding wiki — Codex command reference. Original wording (HANDOFF §9). */
export const codexCommands: Resource = {
  slug: "codex-commands",
  title: "Codex: the commands worth knowing",
  summary:
    "Install it, start it, choose how much freedom to give it — and write the AGENTS.md file that makes every session smarter.",
  wiki: "ai-coding",
  section: "Commands",
  level: 2,
  tags: ["codex", "commands", "cheatsheet"],
  related: ["claude-code-commands", "prompting-habits", "terminal-basics"],
  body: [
    "**These tools change fast.** This page is a starting map; `/help` inside the tool is the truth.",
    "",
    "## The two-minute setup",
    "",
    "`npm install -g @openai/codex`",
    "`cd my-project`",
    "`codex`",
    "",
    "Sign in with your OpenAI account the first time. Like the others, it needs **Node.js** — check with `node --version`.",
    "",
    "## The dial that matters: approvals",
    "Codex asks how freely it may act — propose every edit and wait for you, edit on its own but ask before running commands, or work end-to-end and show you the result.",
    "",
    "**Start on the cautious setting and stay there until watching it work bores you.** Every approval prompt is a free lesson in what the tool actually does; once they're boring, you've learned it, and *then* you can speed up.",
    "",
    "## `AGENTS.md` — the project's house rules",
    "Put a file called `AGENTS.md` in the project root and write what you'd tell a new teammate: how to run the tests, the conventions you follow, what's off-limits. Codex reads it every session. Claude Code does the same with [`CLAUDE.md`](/wiki/ai-coding/claude-code-commands).",
    "",
    "Write it as instructions, not prose. *\"Run `npm test` before declaring a task done.\"* — not *\"we care a lot about quality here.\"*",
  ].join("\n"),
  tables: [
    {
      title: "The setup, line by line",
      columns: ["Command", "What it does"],
      rows: [
        ["`npm install -g @openai/codex`", "Install it once, for the whole computer"],
        ["`cd my-project`", "Move into the project — the folder you start in is what it sees"],
        ["`codex`", "Start it"],
        ["`/help`", "*(inside Codex)* list what it can do — the only command you must memorise"],
      ],
    },
    {
      title: "How much rope to give it",
      caption: "Every agent has a version of this dial. It's the most important setting you'll touch.",
      columns: ["Setting", "It can…", "Use it when"],
      rows: [
        [
          "**Ask first**",
          "Propose changes; you approve each one",
          "You're new, or the project matters. **Start here**",
        ],
        [
          "**Edit freely**",
          "Change files alone; asks before running commands",
          "You've watched it work and it's been sensible"],
        [
          "**Full auto**",
          "Edit and run, end to end",
          "A throwaway folder, or work you can fully roll back",
        ],
      ],
      note:
        "Whatever you choose, **work inside a Git repo.** With Git, a bad change is one command away from undone. Without it, you're trusting a machine with no undo button.",
    },
    {
      title: "What goes in `AGENTS.md` (and what doesn't)",
      columns: ["Belongs there", "Doesn't"],
      rows: [
        ["“Run the tests with `npm test`.”", "“Fix the login bug today.” *(a one-off task — say it in the chat)*"],
        ["“Never edit `legacy/` — it's frozen.”", "“Be helpful and write good code.” *(says nothing)*"],
        ["“User-facing text is Spanish; code and comments are English.”", "A copy of your whole README"],
        ["“Prefer small commits with a clear message.”", "Secrets, keys, or passwords — **never**"],
      ],
      note:
        "The test for a line: *would this still be true next month, in a different task?* If yes, it belongs in the file. If not, it belongs in the conversation.",
    },
  ],
};
