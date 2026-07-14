import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { gradeOpen } from "@/lib/grading";
import type { SpeakingConfig } from "@/lib/types";

/**
 * Speaking-exercise AI. Design choice (we took the *concept* from AudioReviewer
 * but not its approach): Gemini does ONE job — transcribe the clip — and VillaAula's
 * own deterministic `gradeOpen` decides correctness against the question's
 * accepted answers. That keeps grading lenient, predictable, and testable, and
 * never lets the model hand out an arbitrary score.
 *
 * Inert without a key (mirrors lib/db.ts): the client is never constructed unless
 * GEMINI_API_KEY is set, and every speaking surface degrades gracefully when it
 * isn't (see geminiConfigured()).
 */

/**
 * Audio-capable models, tried in order.
 *
 * ⚠️ Not every Gemini model accepts audio input. This used to call
 * `gemini-3.1-flash-lite` (copied from SUSAI, which only ever sends it text): the
 * lite tiers answer text fine but return **500 INTERNAL on any audio part**, so
 * every speaking exercise failed. Verified 2026-07-13 against the live API —
 * `gemini-3.5-flash` transcribes webm/opus (what MediaRecorder gives us), mp3, ogg
 * and mp4; `gemini-2.5-flash` is the audio-capable fallback. Keep this list
 * audio-capable, and re-probe before swapping the model.
 */
export const GEMINI_MODEL = process.env.GEMINI_SPEAKING_MODEL || "gemini-3.5-flash";
const SPEAKING_MODELS = [GEMINI_MODEL, "gemini-2.5-flash"];

/** Free-tier audio capacity is genuinely flaky (503s), so transient errors get retried. */
const MAX_ATTEMPTS_PER_MODEL = 2;
const TRANSIENT = /\b(429|500|502|503|504)\b|INTERNAL|UNAVAILABLE|RESOURCE_EXHAUSTED/i;

export function geminiConfigured(): boolean {
  return Boolean(process.env.GEMINI_API_KEY);
}

let client: GoogleGenAI | null = null;
function getClient(): GoogleGenAI {
  if (!client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY is not set");
    client = new GoogleGenAI({ apiKey });
  }
  return client;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface SpeakingResult {
  /** Verbatim transcription Gemini heard (empty when the clip is silent). */
  transcription: string;
  /** Deterministic: did the transcript match an accepted answer? */
  correct: boolean;
  /** One short, encouraging line for the learner. */
  feedback: string;
  /** True when nothing intelligible was heard — the UI asks them to record again. */
  silent: boolean;
}

/** One transcription call. Throws on any API error so the caller can retry/fall back. */
async function transcribe(
  model: string,
  audio: Buffer,
  mimeType: string,
  config: SpeakingConfig,
): Promise<{ transcription: string; feedback: string }> {
  const prompt = [
    "You are a kind beginner-ESL listening assistant.",
    `The learner was asked to say: "${config.target}".`,
    "Transcribe EXACTLY what they say in the audio, in English, verbatim — do not",
    "correct grammar, do not add punctuation beyond what is spoken, and if the clip",
    'is silent or unintelligible return an empty string (do NOT guess the target).',
    'Return ONLY JSON: {"transcription": "<verbatim>", "feedback": "<one short, warm sentence>"}.',
  ].join(" ");

  const response = await getClient().models.generateContent({
    model,
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          { inlineData: { data: audio.toString("base64"), mimeType } },
        ],
      },
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "object",
        properties: {
          transcription: { type: "string" },
          feedback: { type: "string" },
        },
        required: ["transcription", "feedback"],
      },
      // Transcription needs no reasoning, and thinking doubles the wall-clock time
      // on the free tier (measured 58s → 24s on a 6s clip).
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
    },
  });

  const raw = response.text;
  if (!raw) throw new Error("Empty response from Gemini");
  const parsed = JSON.parse(raw) as { transcription?: string; feedback?: string };
  return {
    transcription: (parsed.transcription ?? "").trim(),
    feedback: (parsed.feedback ?? "").trim(),
  };
}

/**
 * Transcribe a spoken clip, then grade the transcript with VillaAula's own rules.
 * Walks `SPEAKING_MODELS`, retrying each on transient capacity errors, because the
 * free tier 503s on audio often enough to break a lesson if we give up on the first try.
 */
export async function transcribeAndGrade(
  audio: Buffer,
  mimeType: string,
  config: SpeakingConfig,
): Promise<SpeakingResult> {
  let lastError: unknown;

  for (const model of SPEAKING_MODELS) {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_MODEL; attempt++) {
      try {
        const { transcription, feedback } = await transcribe(
          model,
          audio,
          mimeType,
          config,
        );

        const silent = transcription.length === 0;
        const correct =
          !silent && gradeOpen(transcription, { acceptedAnswers: config.acceptedAnswers });

        return {
          transcription,
          correct,
          silent,
          feedback: silent
            ? "We couldn’t hear anything — check your mic and record once more."
            : feedback ||
              (correct ? "Nicely said!" : "Good try — listen and say it once more."),
        };
      } catch (error) {
        lastError = error;
        if (!TRANSIENT.test(String((error as Error)?.message ?? error))) throw error;
        if (attempt < MAX_ATTEMPTS_PER_MODEL) await sleep(600 * attempt);
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Speaking analysis failed");
}
