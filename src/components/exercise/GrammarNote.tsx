"use client";

import { useEffect, useState } from "react";
import { RichText } from "@/components/RichText";

type Lang = "en" | "es";
const STORAGE_KEY = "villaaula:grammarLang";

/**
 * Collapsed by default (native <details>) — "the grammar is one tap away".
 *
 * When a Spanish version (`mdEs`) exists, a small EN/ES toggle appears inside the
 * expanded note so a learner can read the explanation in Spanish. The toggle lives
 * in the body (not the <summary>) so clicking it never collapses the panel, and the
 * choice persists in localStorage so it sticks across lessons. Per the design, only
 * the *prose* is translated — grammar terms and examples stay in English.
 */
export default function GrammarNote({
  md,
  mdEs,
}: {
  md: string;
  mdEs?: string;
}) {
  const [lang, setLang] = useState<Lang>("en");

  // Restore the learner's last choice (post-mount → SSR-safe). Syncing state from
  // an external store (localStorage) on mount is the legitimate effect-setState case.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  const choose = (next: Lang) => {
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable (private mode) — non-fatal */
    }
  };

  const hasEs = typeof mdEs === "string" && mdEs.trim().length > 0;
  const body = hasEs && lang === "es" ? mdEs! : md;

  return (
    <details className="group rounded-2xl border border-line bg-paper open:bg-cream/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-5 py-3.5 font-display text-sm font-bold text-ink [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>📖</span> Grammar — show me the rule
        </span>
        <span
          aria-hidden
          className="text-muted transition-transform group-open:rotate-180"
        >
          ⌄
        </span>
      </summary>
      <div className="border-t border-line px-5 py-4 text-sm leading-relaxed text-ink/90">
        {hasEs && (
          <div className="mb-3 flex items-center justify-end">
            <div
              role="group"
              aria-label="Grammar explanation language"
              className="inline-flex rounded-full border border-line bg-cream/40 p-0.5 font-mono text-[11px] font-semibold"
            >
              <LangButton
                active={lang === "en"}
                onClick={() => choose("en")}
                label="EN"
              />
              <LangButton
                active={lang === "es"}
                onClick={() => choose("es")}
                label="ES"
              />
            </div>
          </div>
        )}
        <RichText md={body} />
      </div>
    </details>
  );
}

function LangButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-2.5 py-1 transition ${
        active
          ? "bg-coral text-white shadow-sm"
          : "text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
