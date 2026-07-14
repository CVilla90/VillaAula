import type { Resource } from "@/lib/types";

/** AI Coding wiki — the core concept. Original wording (HANDOFF §9). */
export const whatIsAnAiCodingAgent: Resource = {
  slug: "what-is-an-ai-coding-agent",
  title: "What is an AI coding agent?",
  summary:
    "A chatbot talks about your code. An agent works on it. Everything else follows from that one difference.",
  wiki: "ai-coding",
  section: "Getting started",
  level: 1,
  tags: ["concepts", "basics"],
  related: ["prompting-habits", "terminal-basics"],
  body: [
    "Three things have been called \"AI for coding,\" and people mix them up constantly. They're not the same, and the difference is worth a minute of your time.",
    "",
    "## 1. The chatbot",
    "A web page you paste code into. It answers well, but it can't see your project, can't run anything, and can't check whether its own suggestion works. Every round trip is you doing the carrying.",
    "",
    "## 2. The autocomplete",
    "It lives inside your editor and finishes the line you're typing. Fast and pleasant, but it only ever helps with the *next few characters*. It has no idea what you're ultimately trying to achieve.",
    "",
    "## 3. The agent",
    "It runs on your machine, in your project folder. Give it a goal and it will **read your files, decide what to change, make the change, run the tests, read the errors, and try again** — looping until it's done, then showing you the result.",
    "",
    "That loop is the whole invention. Not \"it writes code\" — chatbots did that. It's that it can **check its own work and react to what it finds**.",
    "",
    "## What that means for you",
    "- **You stop being the messenger.** No more copy-paste ferrying between windows.",
    "- **Your job shifts from typing to deciding.** You describe the goal and you judge the result. Both are skills, and both get better with practice.",
    "- **Review is not optional.** An agent that can act is an agent that can act *wrongly*, quickly, across many files. Which is why every one of them asks permission, and why you keep your work in Git.",
    "",
    "Claude Code and [Codex](/wiki/ai-coding/codex-commands) are both agents in this sense. So is a growing list of others. Learn the shape once and they're all familiar.",
  ].join("\n"),
  tables: [
    {
      title: "The three shapes, side by side",
      columns: ["", "Chatbot", "Autocomplete", "Agent"],
      rows: [
        ["Sees your files", "No", "The open file", "**The whole project**"],
        ["Can change files", "No", "Suggests as you type", "**Yes, with permission**"],
        ["Can run commands", "No", "No", "**Yes, with permission**"],
        ["Checks its own work", "No", "No", "**Yes — runs the tests**"],
        ["You do the copy-pasting", "Yes", "n/a", "No"],
        ["Best for", "Questions, explanations", "Typing faster", "**Whole tasks**"],
      ],
    },
  ],
};
