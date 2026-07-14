import type { Resource } from "@/lib/types";

/** AI Coding wiki — terminal survival kit for total beginners. Original wording (§9). */
export const terminalBasics: Resource = {
  slug: "terminal-basics",
  title: "The terminal, for people who've never opened one",
  summary:
    "The black window isn't dangerous and isn't clever. It's a place where you type instructions instead of clicking them. Here are the eight commands that get you everywhere.",
  wiki: "ai-coding",
  section: "Getting started",
  level: 1,
  tags: ["terminal", "basics"],
  related: ["what-is-an-ai-coding-agent"],
  body: [
    "If you've only ever used a computer by clicking, the terminal looks like something from a hacker film. It isn't. **It's a file explorer that you talk to.**",
    "",
    "When you open a folder by double-clicking it, you're doing exactly what `cd` does. When you look at what's inside, that's `ls`. Same actions, typed instead of clicked — and typed instructions can be *saved, repeated, and given to an AI*, which is why the whole profession lives here.",
    "",
    "## The mental model: you are always *somewhere*",
    "The terminal always has a **current folder** — where you are right now. Every command you type happens *there*. This is the one idea that makes everything else make sense, and it's the one beginners miss.",
    "",
    "So the first thing you learn isn't a command, it's a habit: **before you type anything, know where you are.** `pwd` tells you.",
    "",
    "## Opening it",
    "- **Windows** — press Start, type *Terminal*, open it. (Git Bash, installed with Git, is another good choice.)",
    "- **Mac** — press `Cmd + Space`, type *Terminal*, hit enter.",
    "",
    "## The part nobody tells you",
    "**Nothing you type by accident will break your computer.** The commands below only look and move; the dangerous ones are few, and you'll recognise them because they delete things. If a command does nothing or complains, nothing happened. Type the next one. Being wrong in a terminal costs you nothing but a line.",
  ].join("\n"),
  tables: [
    {
      title: "The eight commands that get you everywhere",
      caption: "Type the command, press enter. That's the whole interface.",
      columns: ["Command", "What it does", "Clicking equivalent"],
      rows: [
        ["`pwd`", "Where am I? Prints the current folder", "Looking at the address bar"],
        ["`ls`", "What's in here? Lists the files", "Opening a folder and looking"],
        ["`cd my-folder`", "Go into that folder", "Double-clicking a folder"],
        ["`cd ..`", "Go back up one level", "Clicking the back button"],
        ["`mkdir notes`", "Make a new folder called `notes`", "Right-click → New Folder"],
        ["`code .`", "Open the current folder in VS Code", "Drag the folder onto the editor"],
        ["`↑` *(arrow key)*", "Bring back the last command you typed", "— *(no equivalent, and it's glorious)*"],
        ["`Ctrl + C`", "Stop whatever is running right now", "The panic button. Perfectly safe"],
      ],
      note:
        "The single biggest time-saver on this list is the **up arrow**. Almost nobody retypes a command; they press up and edit it.",
    },
    {
      title: "Reading a command",
      caption: "Every command is the same three parts, in the same order.",
      columns: ["Part", "Example", "Meaning"],
      rows: [
        ["The program", "`npm`", "*Which* tool to run"],
        ["The instruction", "`install`", "*What* you want it to do"],
        ["The options / target", "`-g @openai/codex`", "*How*, and *to what*"],
      ],
      note:
        "So `npm install -g @openai/codex` reads as: *npm, please install, globally, this package.* Once you can read a command out loud like a sentence, they stop being scary.",
    },
  ],
};
