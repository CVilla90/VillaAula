"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type RecorderStatus =
  | "idle"
  | "recording"
  | "recorded"
  | "unsupported"
  | "denied";

export interface Recording {
  blob: Blob;
  url: string;
}

/** Prefer formats a learner's browser supports; the route forwards the type to Gemini. */
const PREFERRED_MIME = [
  "audio/webm;codecs=opus",
  "audio/webm",
  "audio/ogg;codecs=opus",
  "audio/mp4",
];

/**
 * Minimal MediaRecorder wrapper for speaking exercises: start/stop, an elapsed
 * counter with a hard cap, a playback object-URL, and graceful "unsupported" /
 * "denied" states. Cleans up tracks + the object URL on unmount.
 */
export function useRecorder(maxSeconds = 15) {
  const [status, setStatus] = useState<RecorderStatus>("idle");
  const [recording, setRecording] = useState<Recording | null>(null);
  const [seconds, setSeconds] = useState(0);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const urlRef = useRef<string | null>(null);

  useEffect(() => {
    // One-time browser-capability detection. Must run post-mount (not in a state
    // initializer) so SSR and the client's first render agree (no hydration
    // mismatch); the synchronous setState here is intentional and runs once.
    const supported =
      typeof navigator !== "undefined" &&
      !!navigator.mediaDevices &&
      typeof window !== "undefined" &&
      "MediaRecorder" in window;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!supported) setStatus("unsupported");
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stopTracks = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const revokeUrl = useCallback(() => {
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
      urlRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    clearTimer();
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
  }, [clearTimer]);

  const start = useCallback(async () => {
    if (status === "unsupported") return;
    revokeUrl();
    setRecording(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mimeType = PREFERRED_MIME.find((m) =>
        MediaRecorder.isTypeSupported?.(m),
      );
      const recorder = new MediaRecorder(
        stream,
        mimeType ? { mimeType } : undefined,
      );
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });
        const url = URL.createObjectURL(blob);
        urlRef.current = url;
        setRecording({ blob, url });
        setStatus("recorded");
        stopTracks();
      };
      recorderRef.current = recorder;
      recorder.start();
      setStatus("recording");
      setSeconds(0);
      timerRef.current = setInterval(() => {
        setSeconds((s) => {
          const next = s + 1;
          if (next >= maxSeconds) stop();
          return next;
        });
      }, 1000);
    } catch {
      setStatus("denied");
      clearTimer();
      stopTracks();
    }
  }, [status, maxSeconds, stop, clearTimer, stopTracks, revokeUrl]);

  const reset = useCallback(() => {
    revokeUrl();
    setRecording(null);
    setSeconds(0);
    setStatus((s) => (s === "unsupported" ? s : "idle"));
  }, [revokeUrl]);

  useEffect(() => {
    return () => {
      clearTimer();
      stopTracks();
      revokeUrl();
    };
  }, [clearTimer, stopTracks, revokeUrl]);

  return { status, recording, seconds, maxSeconds, start, stop, reset };
}
