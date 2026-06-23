import { NextResponse } from "next/server";
import { geminiConfigured, transcribeAndGrade } from "@/lib/ai/gemini";
import { getQuestionById } from "@/content/catalog";
import type { SpeakingConfig } from "@/lib/types";

const MAX_AUDIO_BYTES = 10 * 1024 * 1024; // 10MB

/**
 * Grade a spoken answer. Client sends multipart form-data: `audio` (Blob) +
 * `questionId`. The speaking config (target + accepted answers) is read from the
 * server's content by id — never trusted from the client — so a learner can't
 * feed in their own accepted answers.
 */
export async function POST(request: Request) {
  if (!geminiConfigured()) {
    return NextResponse.json({ error: "speaking_unconfigured" }, { status: 503 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const audio = form.get("audio");
  const questionId = String(form.get("questionId") ?? "");

  if (!(audio instanceof Blob)) {
    return NextResponse.json({ error: "no_audio" }, { status: 400 });
  }
  if (audio.size === 0 || audio.size > MAX_AUDIO_BYTES) {
    return NextResponse.json({ error: "bad_size" }, { status: 400 });
  }

  const question = getQuestionById(questionId);
  if (!question || question.type !== "speaking") {
    return NextResponse.json({ error: "unknown_question" }, { status: 404 });
  }

  const config = question.config as SpeakingConfig;
  const buffer = Buffer.from(await audio.arrayBuffer());
  const mimeType = audio.type || "audio/webm";

  try {
    const result = await transcribeAndGrade(buffer, mimeType, config);
    return NextResponse.json(result);
  } catch (error) {
    console.error("speaking analyze failed", error);
    return NextResponse.json({ error: "analyze_failed" }, { status: 500 });
  }
}
