"use client";

import { useEffect, useState } from "react";

const WORD = "clicks";

/**
 * The hero's signature: the headline is a live fill-in-the-blank exercise —
 * the actual mechanic of the product. The blank types itself in, then the
 * answer is "accepted" (coral -> teal + check), mirroring a real WISHUB answer.
 */
export default function HeroCloze() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setCount(WORD.length);
      setDone(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= WORD.length; i++) {
      timers.push(setTimeout(() => setCount(i), 650 + i * 110));
    }
    timers.push(setTimeout(() => setDone(true), 650 + WORD.length * 110 + 140));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <span className="relative inline-flex items-baseline" aria-label={WORD}>
      <span
        aria-hidden
        className={`font-mono border-b-[3px] pb-0.5 transition-colors duration-300 ${
          done ? "text-teal border-teal" : "text-coral border-coral/40"
        }`}
      >
        {WORD.slice(0, count)}
        {!done && <span className="cloze-caret text-coral">▏</span>}
        {count < WORD.length && (
          <span className="invisible">{WORD.slice(count)}</span>
        )}
      </span>
      {done && (
        <span
          aria-hidden
          className="check-pop ml-3 grid size-7 shrink-0 place-items-center self-center rounded-full bg-teal text-sm font-bold text-white"
        >
          ✓
        </span>
      )}
    </span>
  );
}
