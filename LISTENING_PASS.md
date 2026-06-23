# WISHUB — Listening pass (loop spec)

> Goal (Carlos, 2026-06-23): distribute **short, casual listening exercises** across the program
> the way **speaking** already is — **~1 per unit, 4 per level**. Same loop protocol as the
> curricula pass: one iteration per turn, **green gate** (`tsc` + `lint` + `npm test` + `build`)
> before each commit, commit per iteration, append to `HANDOFF.md §2`.

## Why / current state (audit 2026-06-23)
Speaking sits 1-per-unit in L2/L3/L4 (4 each); L1 has 2 (both U1). Listening is lopsided:
L1 = U2/U3/U4 (3), L2 = U3 (1), L3 = U2 (1), L4 = U3 (1). Bring every unit to **1 listening**.

## Target — 10 new listening blocks (1 per missing unit)
- **L1** (`level1.ts` = Unit 1; older audio in `level1-phase2.ts`): **+U1**.
- **L2** (`level2.ts`): **+U1, +U2, +U4** (U3 already has `c2u3l3-a1`).
- **L3** (`level3.ts`): **+U1, +U3, +U4** (U2 already has `c3u2l1-a1`).
- **L4** (`level4.ts`): **+U1, +U2, +U4** (U3 already has `c4u3l2-a1`).

## How each listening is built (mirror the existing pattern)
1. Pick a lesson in the target unit that has **no speaking and no listening yet** (avoid doubling
   interaction types in one lesson); fit the transcript to that lesson's grammar/theme.
2. Prepend to that lesson's `exercise.items`: an **audio Content block** then **one comprehension
   question** (MCQ or true/false), before the existing grammar questions.
   - **Transcript:** 1–3 **short, casual, everyday** sentences. Calibrate to level (L1 very simple →
     L4 natural/conversational). Original wording (§9).
   - **IDs:** L1 → `u{unit}-l{lesson}-a1` + `…-q{next}`; L2–L4 → `c{level}u{unit}l{lesson}-a1` +
     `…-q4` (next free). Keep ids globally unique (validator enforces).
   - `type: "audio"`, set `title`, `transcript`, `voice` (rotate the 4 voices), and
     `mediaUrl: "/audio/<id>.mp3"`.
3. Add the clip to `tools/generate_audio.py` `CLIPS` (`id`/`voice`/`text` = the transcript), run it
   via the tts venv (`tools/.ttsenv/Scripts/python.exe tools/generate_audio.py`) to write the MP3.
4. **Green gate** (`validate.test.ts` `validateAudioFiles` confirms the MP3 exists). Commit.

## Voices (edge-tts, free, no key)
`en-US-AvaMultilingualNeural`, `en-US-AndrewNeural`, `en-US-AriaNeural`, `en-US-GuyNeural` — rotate.

## Suggested iteration order
I1 L1·U1 → I2 L2 (U1,U2,U4) → I3 L3 (U1,U3,U4) → I4 L4 (U1,U2,U4) → I5 final verify (dev server,
all four levels' new audio render). Batch a level per iteration (3 clips) for L2/L3/L4.

## Candidate lessons (refine when authoring; all currently free of speaking/listening)
- **L1·U1**: `to-be` (l1) — a casual self-intro ("Hi, I'm Sam. I'm a student. I'm from Mexico.").
- **L2·U1**: `how-often` (l2) or `present-continuous` (l4). **U2**: `would-like` (l3, food ordering).
  **U4**: `used-to` (l2, a "I used to…" memory).
- **L3·U1**: `interrupted` (l2, a short "I was …ing when…" story). **U3**: `preferences` (l5).
  **U4**: `advice-obligation` (l1).
- **L4·U1**: `reported-statements` (l2). **U2**: `second-conditional` (l3). **U4**: `phrasal-verbs` (l1).

## Out of scope
No final-test changes (listening lives in lessons). No new deps. Deferred still: REFACTOR §3-E/§3-F.
