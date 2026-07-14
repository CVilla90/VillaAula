import type { Resource } from "@/lib/types";

/** AI Coding wiki — Claude Code command reference. Original wording (HANDOFF §9). */
export const claudeCodeCommands: Resource = {
  slug: "claude-code-commands",
  title: "Claude Code: the commands worth knowing",
  summary:
    "Install it, start it, and the handful of slash commands you'll actually use. Plus the one file that makes every future session smarter.",
  wiki: "ai-coding",
  section: "Commands",
  level: 1,
  tags: ["claude-code", "commands", "cheatsheet"],
  related: ["codex-commands", "prompting-habits", "terminal-basics"],
  body: [
    "**These tools change fast.** Treat this page as a starting map, and treat `/help` inside the tool as the truth — it's always current, and this page never will be.",
    "",
    "## The two-minute setup",
    "",
    "`npm install -g @anthropic-ai/claude-code`",
    "`cd my-project`",
    "`claude`",
    "",
    "Sign in the first time, and that's the whole installation. It needs **Node.js** to be installed first — check with `node --version`.",
    "",
    "## The file that pays for itself: `CLAUDE.md`",
    "Run `/init` and Claude Code will read your project and write a `CLAUDE.md` — a description of what the project is, how to run it, and how to test it. From then on, it reads that file at the start of every session.",
    "",
    "Edit it by hand. Add the things you'd tell a new teammate: *run the tests with `npm test`; user-facing text is in Spanish; never touch `legacy/`.* Every rule you write there once is a rule you never repeat again. Codex has the same idea, in a file called [`AGENTS.md`](/wiki/ai-coding/codex-commands).",
  ].join("\n"),
  tables: [
    {
      title: "Slash commands",
      caption: "Typed inside Claude Code. They talk to the tool, not to the AI.",
      columns: ["Command", "What it does", "When you'd reach for it"],
      rows: [
        ["`/help`", "List the available commands", "Any time you're unsure — start here"],
        ["`/clear`", "Wipe the conversation, start fresh", "Between two unrelated tasks"],
        ["`/init`", "Write a `CLAUDE.md` describing the project", "Once, on a new project"],
        ["`/model`", "Switch which Claude model is used", "A harder task deserves a stronger model"],
        ["`/review`", "Review the code changes you've made", "Before you commit"],
      ],
      note:
        "`/clear` matters more than it looks. A long conversation full of an *old* task makes the next answer worse — the agent keeps reasoning about things you've moved on from.",
    },
    {
      title: "Terminal commands (typed before you start it)",
      columns: ["Command", "What it does"],
      rows: [
        ["`npm install -g @anthropic-ai/claude-code`", "Install it once, for the whole computer"],
        ["`claude`", "Start it in the current folder"],
        ["`cd my-project`", "Move into the project first — the folder you start in is what it can see"],
        ["`node --version`", "Check that Node.js is installed (a prerequisite)"],
      ],
    },
    {
      title: "The habits that matter more than the commands",
      columns: ["Habit", "Why"],
      rows: [
        ["Work in a Git repo", "Any change it makes can be undone. This is the safety net"],
        ["Ask for the plan first", "Catch a wrong direction before it becomes eleven wrong files"],
        ["`/clear` between tasks", "Stale context makes the next answer worse"],
        ["Keep `CLAUDE.md` honest", "It's read every session — a wrong line there is wrong forever"],
      ],
    },
  ],
};
