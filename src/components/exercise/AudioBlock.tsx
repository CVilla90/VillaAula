"use client";

import { useEffect, useRef, useState } from "react";
import type { Content } from "@/lib/types";

const SPEEDS = [0.75, 1, 1.15] as const;

export default function AudioBlock({ content }: { content: Content }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>(0.75);
  const [speaking, setSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const transcript = content.transcript ?? content.body ?? "";
  const canReadAloud = !content.mediaUrl && transcript.length > 0 && speechSupported;

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpeechSupported("speechSynthesis" in window);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  function speak() {
    if (!canReadAloud) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.lang = "en-US";
    utterance.rate = speed;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  function stop() {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }

  return (
    <div className="rounded-2xl border border-line bg-ink p-5 text-white shadow-lg shadow-ink/5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
            Audio
          </p>
          {content.title && (
            <h3 className="mt-1 font-display text-base font-bold">
              {content.title}
            </h3>
          )}
        </div>
        <div className="flex rounded-full bg-white/10 p-1">
          {SPEEDS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setSpeed(value)}
              className={`min-w-12 rounded-full px-3 py-1.5 font-mono text-xs font-bold transition ${
                speed === value
                  ? "bg-white text-ink"
                  : "text-white/70 hover:text-white"
              }`}
              aria-pressed={speed === value}
            >
              {value}x
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {content.mediaUrl ? (
          <audio
            ref={audioRef}
            src={content.mediaUrl}
            controls
            className="w-full"
            onPlay={() => {
              if (audioRef.current) audioRef.current.playbackRate = speed;
            }}
          />
        ) : (
          <button
            type="button"
            onClick={speaking ? stop : speak}
            disabled={!canReadAloud}
            className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white transition enabled:hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PlayIcon playing={speaking} />
            {speaking ? "Stop" : "Listen"}
          </button>
        )}
      </div>

      {transcript && (
        <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/78">
          {transcript}
        </p>
      )}
    </div>
  );
}

function PlayIcon({ playing }: { playing: boolean }) {
  if (playing) {
    return (
      <span className="grid size-4 grid-cols-2 gap-0.5" aria-hidden>
        <span className="rounded-sm bg-white" />
        <span className="rounded-sm bg-white" />
      </span>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M7 4l13 8-13 8z" />
    </svg>
  );
}
