import type { Program } from "@/lib/types";

/**
 * **AI Coding Assistants** (HANDOFF §23) — VillaAula's fourth program, and the second
 * "universe" of related courses to share a wiki (§22): Claude Code and Codex are rival
 * tools that teach the *same ideas*, so they read from the same `ai-coding` wiki. A page
 * on prompting habits or the terminal is written once and reachable from both courses.
 *
 * Deliberately beginner-first: the courses assume the learner has barely used a terminal.
 * Bilingual EN/ES like the LinkedIn course — the prose translates, the commands don't.
 *
 * Scope today: **Unit 1 of each course** (what it is · install · prompts & commands).
 * The later units (real workflows, reviewing changes, MCP/agents, when NOT to use one)
 * are authoring work, not engineering — see the HANDOFF.
 */
export const aiCodingProgram: Program = {
  slug: "ai-coding",
  title: "AI Coding Assistants",
  tagline: "Make the robot do the boring part",
  summary:
    "AI that doesn't just talk about your code — it opens your files, makes the change, runs the tests, and hands it back for you to approve. Start with either tool: the habits transfer, and the second one takes an afternoon. No programming background assumed; we start at \"what is a terminal\".",
  kind: "collection",
  category: "ai-coding",
  courseNoun: "Course",
  wiki: "ai-coding",
  courses: [
    {
      slug: "claude-code",
      status: "active",
      focus: "what it is · install · slash commands · prompts",
    },
    {
      slug: "codex",
      status: "active",
      focus: "what it is · install · approval modes · AGENTS.md",
    },
  ],
  certificates: [
    {
      id: "ai-coding-foundations",
      kind: "certificate",
      title: "AI Coding · Foundations",
      subtitle: "Claude Code and Codex, from zero",
      requires: { type: "program", programSlug: "ai-coding" },
    },
  ],
};
