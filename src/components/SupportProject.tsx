"use client";

import { useRef } from "react";
import { BRAND, SUPPORT_URL } from "@/lib/site";

/**
 * "Support this project" — a discreet footer trigger that opens a small modal
 * (HANDOFF §18.K). Uses the native <dialog> element via showModal(), so the backdrop,
 * focus trap, and Escape-to-close come for free. Replaces the old inline <details>
 * disclosure that expanded the footer downward.
 */
export default function SupportProject() {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink"
      >
        <span aria-hidden>♡</span>
        <span className="font-medium">Support this project</span>
      </button>

      <dialog
        ref={ref}
        // Clicking the dimmed backdrop (target === the dialog itself) closes it.
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
        className="m-auto w-[min(92vw,26rem)] rounded-2xl border border-line bg-paper p-0 text-ink shadow-2xl shadow-ink/10 backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display text-lg font-extrabold text-ink">
              Support {BRAND}
            </h2>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close"
              className="-mr-1 -mt-1 grid size-8 shrink-0 place-items-center rounded-full text-muted transition hover:bg-cream hover:text-ink"
            >
              <span aria-hidden className="text-base leading-none">
                ✕
              </span>
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {BRAND} is completely free to use. It does have hosting and maintenance
            costs, though — if it&apos;s helped you, you&apos;re welcome to chip in
            whatever you like. No pressure at all.
          </p>
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white transition hover:bg-coral-deep"
          >
            <span aria-hidden>❤️</span> Chip in
          </a>
        </div>
      </dialog>
    </>
  );
}
