"use client";

import { useEffect, useRef, useState } from "react";
import type { Question, SpeakingConfig } from "@/lib/types";
import { useRecorder } from "@/hooks/useRecorder";
import { useSessionUser } from "@/components/auth/SessionProvider";
import { RichText } from "@/components/RichText";

interface AnalyzeResult {
  transcription: string;
  correct: boolean;
  feedback: string;
}

function mmss(total: number): string {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function SpeakingQuestion({
  question,
  index,
  onAnswered,
}: {
  question: Question;
  index: number;
  onAnswered: (id: string, correct: boolean) => void;
}) {
  const config = question.config as SpeakingConfig;
  const { speakingEnabled } = useSessionUser();
  const { status, recording, seconds, maxSeconds, start, stop, reset } =
    useRecorder(config.maxSeconds ?? 15);

  const [phase, setPhase] = useState<"ready" | "submitting" | "result">("ready");
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const reportedRef = useRef(false);

  function report(ok: boolean) {
    reportedRef.current = true;
    onAnswered(question.id, ok);
  }

  // Speaking off (no key): don't block the lesson — mark attempted once.
  useEffect(() => {
    if (!speakingEnabled && !reportedRef.current) report(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speakingEnabled]);

  async function submit() {
    if (!recording) return;
    setPhase("submitting");
    setError(null);
    try {
      const form = new FormData();
      form.append("audio", recording.blob, "speech.webm");
      form.append("questionId", question.id);
      const res = await fetch("/api/speaking/analyze", {
        method: "POST",
        body: form,
      });
      if (res.status === 503) {
        report(true); // setup went away — never trap the learner
        setError("Speaking isn't set up right now — you can keep going.");
        setPhase("result");
        return;
      }
      if (!res.ok) throw new Error("analyze failed");
      const data = (await res.json()) as AnalyzeResult;
      setResult(data);
      setPhase("result");
      report(data.correct);
    } catch {
      setError("Couldn't check that — try recording again.");
      setPhase("ready");
    }
  }

  function tryAgain() {
    setResult(null);
    setError(null);
    setPhase("ready");
    reset();
  }

  function skip() {
    report(true);
    setResult(null);
    setError(null);
    setPhase("result");
  }

  const correct = result?.correct;

  return (
    <div
      className={`rounded-2xl border bg-paper p-5 transition-colors ${
        phase === "result" && result
          ? correct
            ? "border-teal/50"
            : "border-coral/50"
          : "border-line"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-coral/10 font-mono text-xs font-bold text-coral">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-medium leading-snug text-ink">
            <RichText md={question.prompt} inline variant="prompt" />
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-xl bg-cream/60 px-3.5 py-2">
            <MicIcon className="size-4 text-coral" />
            <span className="font-display text-lg font-bold text-ink">
              “{config.target}”
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 pl-9">
        {!speakingEnabled ? (
          <p className="rounded-xl bg-cream/50 px-4 py-3 text-sm text-muted">
            🎤 Speaking practice is available once audio setup is complete. You
            can keep going — this won’t hold up the lesson.
          </p>
        ) : phase === "result" ? (
          <Result result={result} error={error} onTryAgain={tryAgain} />
        ) : phase === "submitting" ? (
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
            <Spinner /> Listening…
          </p>
        ) : (
          <Controls
            status={status}
            seconds={seconds}
            maxSeconds={maxSeconds}
            recordingUrl={recording?.url}
            error={error}
            onStart={start}
            onStop={stop}
            onSubmit={submit}
            onSkip={skip}
          />
        )}
      </div>
    </div>
  );
}

/* ----------------------------- pieces ----------------------------- */

function Controls({
  status,
  seconds,
  maxSeconds,
  recordingUrl,
  error,
  onStart,
  onStop,
  onSubmit,
  onSkip,
}: {
  status: ReturnType<typeof useRecorder>["status"];
  seconds: number;
  maxSeconds: number;
  recordingUrl?: string;
  error: string | null;
  onStart: () => void;
  onStop: () => void;
  onSubmit: () => void;
  onSkip: () => void;
}) {
  if (status === "unsupported") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-muted">
          Your browser can’t record audio here.
        </p>
        <SkipButton onSkip={onSkip} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {error && <p className="text-sm font-semibold text-coral-deep">{error}</p>}

      {status === "recording" ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral-deep">
            <span className="size-2.5 animate-pulse rounded-full bg-coral-deep" />
            Recording {mmss(seconds)} / {mmss(maxSeconds)}
          </span>
          <button
            type="button"
            onClick={onStop}
            className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white transition hover:bg-ink/90"
          >
            Stop
          </button>
        </div>
      ) : status === "recorded" && recordingUrl ? (
        <div className="flex flex-col gap-3">
          <audio src={recordingUrl} controls className="w-full max-w-sm" />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onSubmit}
              className="rounded-full bg-coral px-5 py-2 text-sm font-bold text-white transition hover:bg-coral-deep"
            >
              Check my answer
            </button>
            <button
              type="button"
              onClick={onStart}
              className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
            >
              Re-record
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white transition hover:bg-coral-deep"
          >
            <MicIcon className="size-4" />
            {status === "denied" ? "Try again" : "Record"}
          </button>
          {status === "denied" && (
            <p className="text-sm text-muted">
              Microphone access was blocked.
            </p>
          )}
          <SkipButton onSkip={onSkip} />
        </div>
      )}
    </div>
  );
}

function Result({
  result,
  error,
  onTryAgain,
}: {
  result: AnalyzeResult | null;
  error: string | null;
  onTryAgain: () => void;
}) {
  if (!result) {
    return (
      <p className="text-sm text-muted">
        {error ?? "Skipped — you can revisit this anytime."}
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted">
        We heard:{" "}
        <span className="font-medium text-ink">“{result.transcription}”</span>
      </p>
      <div
        className={`rounded-xl px-4 py-3 text-sm ${
          result.correct ? "bg-teal/10 text-teal" : "bg-coral/10 text-coral-deep"
        }`}
      >
        <span className="font-semibold">
          {result.correct ? "Nice — that’s it." : "Almost."}
        </span>{" "}
        {result.feedback}
      </div>
      <button
        type="button"
        onClick={onTryAgain}
        className="self-start rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
      >
        Say it again
      </button>
    </div>
  );
}

function SkipButton({ onSkip }: { onSkip: () => void }) {
  return (
    <button
      type="button"
      onClick={onSkip}
      className="text-sm font-medium text-muted underline-offset-2 transition hover:text-ink hover:underline"
    >
      Skip for now
    </button>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z" />
      <path d="M19 11a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V21a1 1 0 1 0 2 0v-3.08A7 7 0 0 0 19 11z" />
    </svg>
  );
}

function Spinner() {
  return (
    <span className="inline-block size-4 animate-spin rounded-full border-2 border-line border-t-coral" />
  );
}
