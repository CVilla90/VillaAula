# WISHUB — Speaking exercises + real curricula (next loop spec)

> The plan the next `/loop` executes. Builds on the finished A–D de-hardcode pass
> (`REFACTOR.md`). Two phases: **S** = speaking-exercise infrastructure + Level 1 speaking;
> **C** = author the real curricula (rebuild L2, create L3 & L4). Same loop protocol as A–D:
> one iteration per turn, **green gate** (`tsc` + `lint` + `build` + `npm test`) before each
> commit, commit per iteration, append to `HANDOFF.md §2`.

Cross-refs: speaking concept = HANDOFF §18.C + `AudioReviewer/` (reference impl); level
calibration = §18.B; copyright = §9; content track = `REFACTOR.md §6`.

---

## Ground rules (read once)

- **§9 copyright binds.** Follow each program's grammar/skill **spine** only; write **100%
  original** prompts/readings/titles. Never copy the source book's wording, titles, images, or
  name. When a reference PNG is illegible, **flag it — do not invent curriculum** (accuracy +
  copyright). The PNGs are dense; read them zoomed/cropped per column.
- **§18.B calibration.** Difficulty matches the level. L1 speaking = one word / one short
  sentence; readings short. Complexity scales up by level.
- **🛑 LIVE handback (like auth §17).** The Gemini runtime needs `GEMINI_API_KEY` (Carlos)
  and spends quota, so the loop **builds speaking behind `geminiConfigured()`** and keeps the
  app fully working without it; **Carlos smoke-tests the live call.** The loop does NOT make
  real Gemini calls — it unit-tests the deterministic parts (config parsing, transcript→
  `normalize`/`gradeOpen`) and reviews the multimodal call by inspection.
- **Validator is the gate for content.** Every new/edited course must pass `validateCatalog`
  (the `validate.test.ts` suite) — unique ids/slugs, valid keys, audio present, passing scores.

---

## Phase S — Speaking exercises (infrastructure + Level 1)

### S1 — Data model + AI service + analyze route  🛑 LIVE
- `lib/types.ts`: add `"speaking"` to `QuestionType` and a `SpeakingConfig`
  `{ target: string; acceptedAnswers: string[]; maxSeconds?: number; level?: number }`
  (matches the §7 "planned speaking" shape). Add it to the `QuestionConfig` union.
- `content/validate.ts`: validate speaking questions (non-empty `target`, non-empty
  `acceptedAnswers`); extend the test.
- New `lib/ai/gemini.ts`: `geminiConfigured()` (= `GEMINI_API_KEY` present) + a lazy
  `@google/genai` client (never constructed without the key, mirroring `lib/db.ts`). Export
  `transcribeAndGrade(audio: Buffer, q: SpeakingConfig)` → `{ transcription, correct, feedback }`.
  Port the AudioReviewer prompt/`responseSchema` (inline base64 audio, JSON output) but for
  **L1 keep it lenient**: get the transcription, then **`gradeOpen(transcription, { acceptedAnswers })`**
  decides correctness; feedback is a short encouraging line. Centralize the model id as
  `GEMINI_MODEL` (AudioReviewer used `gemini-2.0-flash`; **bump to the current audio-capable
  flash**, e.g. `gemini-3.1-flash`, matching Carlos's other projects — confirm the exact id).
  Add `GEMINI_API_KEY` to `.env.example`.
- New Route Handler `POST /api/speaking/analyze` (Next 16): `await request.formData()` → audio
  Blob → Buffer → `transcribeAndGrade`. Returns 503-style friendly JSON when `!geminiConfigured()`.
  Guard size (~10MB) and audio mime.
- `npm install @google/genai`. ✅ green gate.

### S2 — Recorder + speaking question UI
- `hooks/useRecorder.ts`: browser **MediaRecorder** (start/stop, blob, max-seconds cap,
  permission + unsupported handling). No external dep.
- `components/exercise/SpeakingQuestion.tsx`: prompt + record/stop + local playback + Submit →
  `POST /api/speaking/analyze` → show transcription + ✓/try-again + feedback. Async path
  (separate from the sync `gradeQuestion`); on success calls the same `onAnswered(id, ok)` so
  lesson progress works unchanged.
- Dispatch: render `SpeakingQuestion` for `type==="speaking"` in `QuestionCard`/`LessonPlayer`.
  When `!geminiConfigured()` (exposed to the client like `authEnabled`), show a friendly
  "speaking practice — available once setup is complete" state that **doesn't block** lesson
  completion. ✅ green gate.

### S3 — Add Level 1 speaking exercises (very basic)
- Add 1–2 `speaking` questions to Level 1 (e.g. "Say: *My name is ___.*" / "Say a color you
  can see."). `acceptedAnswers` lenient. Calibrated to §18.B (single word / short sentence).
- Validator + tests green. ✅ green gate. **Then 🛑 note for Carlos:** set `GEMINI_API_KEY`,
  record a clip, confirm transcription+grading end to end (see HANDOFF §17 runbook style).

---

## Phase C — Real curricula (author from `reference/`)

> Each level is a **4-unit** program. Source: `reference/s2u1–s2u4` (L2), `s3u1–s3u4` (L3),
> `s4u1–s4u4` (L4). Read each PNG carefully (zoom/crop). Mix all 5 question types **including
> `speaking`**, an expandable grammar note per lesson, and reading/audio blocks. Reuse
> `tools/generate_audio.py` (throwaway venv) for listening clips.

### C1 — Rebuild Level 2 (replace the provisional version)
- The shipped `content/level2.ts` is a generic-A2 **inference with only 2 units** — replace it
  with the real **4-unit** spine from `s2u1–s2u4`, 100% original, calibrated A2, final test +
  conclusion + diploma. Update `catalog.ts` `LEVEL_META[2].focus` to the real spine. Validator
  + tests green. ✅

### C2 — Author Level 3 (new)
- `content/level3.ts` — 4 units from `s3u1–s3u4` (B1-ish), final + conclusion + diploma.
  Register in `courses` (catalog), set `LEVEL_META[3]`, status flips to active automatically.
  Calibrate speaking up (a short sentence/two). Validator + tests green. ✅

### C3 — Author Level 4 (new)
- `content/level4.ts` — 4 units from `s4u1–s4u4`, register, `LEVEL_META[4]`. ✅

### C4 — Audio + polish
- Generate edge-tts MP3s for all new listening blocks; `validateAudioFiles` green. With all
  four levels active, `levelRange()` auto-reads "Levels 1–4" everywhere (no page edits — the
  catalog does it). Final ✅ green gate; HANDOFF §2 wrap.

---

## Suggested order
S1 → S2 → S3 (speaking live-tested by Carlos) → C1 (L2) → C2 (L3) → C3 (L4) → C4 (audio/polish).
Deferred still: REFACTOR §3-E (auth gating + scores) and §3-F (TS→Postgres) — independent, later.
