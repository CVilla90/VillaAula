import { GoogleGenAI } from "@google/genai";
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

/** Matches Carlos's SUSAI stack; flash-lite is audio-capable and free-tier friendly. */
export const GEMINI_MODEL = "gemini-3.1-flash-lite";

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

export interface SpeakingResult {
  /** Verbatim transcription Gemini heard. */
  transcription: string;
  /** Deterministic: did the transcript match an accepted answer? */
  correct: boolean;
  /** One short, encouraging line for the learner. */
  feedback: string;
}

/** Transcribe a spoken clip, then grade the transcript with VillaAula's own rules. */
export async function transcribeAndGrade(
  audio: Buffer,
  mimeType: string,
  config: SpeakingConfig,
): Promise<SpeakingResult> {
  const ai = getClient();

  const prompt = [
    "You are a kind beginner-ESL listening assistant.",
    `The learner was asked to say: "${config.target}".`,
    "Transcribe EXACTLY what they say in the audio, in English, verbatim — do not",
    "correct grammar, do not add punctuation beyond what is spoken, do not guess",
    "if it is silent (use an empty string).",
    'Return ONLY JSON: {"transcription": "<verbatim>", "feedback": "<one short, warm sentence>"}.',
  ].join(" ");

  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
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
    },
  });

  const raw = response.text;
  if (!raw) throw new Error("Empty response from Gemini");

  const parsed = JSON.parse(raw) as { transcription?: string; feedback?: string };
  const transcription = (parsed.transcription ?? "").trim();
  const correct = gradeOpen(transcription, {
    acceptedAnswers: config.acceptedAnswers,
  });
  const feedback =
    (parsed.feedback ?? "").trim() ||
    (correct ? "Nicely said!" : "Good try — listen and say it once more.");

  return { transcription, correct, feedback };
}
