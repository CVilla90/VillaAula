"use client";

import { useEffect, useState } from "react";
import { RichText } from "@/components/RichText";
import { useContentLang } from "@/components/i18n/ContentLang";

type Lang = "en" | "es";
const STORAGE_KEY = "villaaula:grammarLang";

/**
 * Collapsed by default (native <details>) — "the [note] is one tap away".
 *
 * When a Spanish version (`mdEs`) exists the note can be read in Spanish. Two modes:
 *
 *  - **Standalone (ESL courses):** the note carries its own EN/ES toggle (only the
 *    *prose* is translated; grammar terms + examples stay in English), persisted in
 *    its own localStorage key — independent of the exercises, which are English-only.
 *  - **`useGlobalLang` (bilingual courses, e.g. LinkedIn):** the note follows the
 *    course-level EN|ES switch in the header (one control for the whole lesson), so
 *    it hides its own toggle.
 *
 * `summary` overrides the label after the 📖 (default "Grammar — show me the rule")
 * so a non-ESL course can call its note something fitting ("Key idea — the why").
 */
export default function GrammarNote({
  md,
  mdEs,
  summary = "Grammar — show me the rule",
  useGlobalLang = false,
}: {
  md: string;
  mdEs?: string;
  summary?: string;
  useGlobalLang?: boolean;
}) {
  const [localLang, setLocalLang] = useState<Lang>("en");
  const { lang: globalLang } = useContentLang();

  // Restore the learner's last choice (post-mount → SSR-safe). Syncing state from
  // an external store (localStorage) on mount is the legitimate effect-setState case.
  useEffect(() => {
    if (useGlobalLang) return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "es" || saved === "en") setLocalLang(saved);
  }, [useGlobalLang]);

  const choose = (next: Lang) => {
    setLocalLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable (private mode) — non-fatal */
    }
  };

  const hasEs = typeof mdEs === "string" && mdEs.trim().length > 0;
  const lang = useGlobalLang ? globalLang : localLang;
  const body = hasEs && lang === "es" ? mdEs! : md;
  const showOwnToggle = hasEs && !useGlobalLang;

  return (
    <details className="group rounded-2xl border border-line bg-paper open:bg-cream/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-5 py-3.5 font-display text-sm font-bold text-ink [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>📖</span> {summary}
        </span>
        <span
          aria-hidden
          className="text-muted transition-transform group-open:rotate-180"
        >
          ⌄
        </span>
      </summary>
      <div className="border-t border-line px-5 py-4 text-sm leading-relaxed text-ink/90">
        {showOwnToggle && (
          <div className="mb-3 flex items-center justify-end">
            <div
              role="group"
              aria-label="Explanation language"
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
