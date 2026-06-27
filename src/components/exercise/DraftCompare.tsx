"use client";

import { useRef, useState } from "react";
import type { Question, DraftCompareConfig } from "@/lib/types";
import { t } from "@/lib/i18n";
import { useContentLang } from "@/components/i18n/ContentLang";
import { RichText } from "@/components/RichText";

/**
 * Draft & compare (HANDOFF §20.2) — a non-graded writing exercise for the LinkedIn
 * program. The learner writes their own real text (a headline, an About line, a
 * message), then reveals a strong model + a self-check list to compare against. No
 * right answer to grade; it builds the muscle and (Phase 2) feeds the Career Kit.
 * Revealing the model marks it attempted so the lesson can complete.
 */
export default function DraftCompare({
  question,
  index,
  onAnswered,
}: {
  question: Question;
  index: number;
  onAnswered: (id: string, correct: boolean) => void;
}) {
  const config = question.config as DraftCompareConfig;
  const { lang } = useContentLang();
  const [draft, setDraft] = useState("");
  const [revealed, setRevealed] = useState(false);
  const reportedRef = useRef(false);

  function reveal() {
    setRevealed(true);
    if (!reportedRef.current) {
      reportedRef.current = true;
      onAnswered(question.id, true);
    }
  }

  const placeholder = config.placeholder
    ? t(config.placeholder, lang)
    : lang === "es"
      ? "Escribe tu versión…"
      : "Write your version…";

  return (
    <div
      className={`rounded-2xl border bg-paper p-5 transition-colors ${
        revealed ? "border-teal/50" : "border-line"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-coral/10 font-mono text-xs font-bold text-coral">
          {index}
        </span>
        <p className="font-display text-base font-medium leading-snug text-ink">
          <RichText md={t(question.prompt, lang)} inline variant="prompt" />
        </p>
      </div>

      <div className="mt-4 pl-9">
        <textarea
          value={draft}
          maxLength={config.charLimit}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full resize-y rounded-xl border border-line bg-cream/40 px-4 py-2.5 text-sm text-ink outline-none transition focus:border-coral"
        />
        {config.charLimit && (
          <p className="mt-1 text-right font-mono text-[11px] text-muted">
            {draft.length}/{config.charLimit}
          </p>
        )}

        {!revealed ? (
          <button
            type="button"
            onClick={reveal}
            className="mt-3 rounded-full bg-coral px-5 py-2 text-sm font-bold text-white transition hover:bg-coral-deep"
          >
            {lang === "es" ? "Ver un ejemplo fuerte" : "Show a strong example"}
          </button>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-teal/30 bg-teal/5 px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-wide text-teal">
                {lang === "es" ? "Ejemplo fuerte" : "Strong example"}
              </p>
              <div className="mt-1.5 text-sm leading-relaxed text-ink">
                <RichText md={t(config.model, lang)} />
              </div>
            </div>

            {config.checklist && config.checklist.length > 0 && (
              <div className="rounded-xl border border-line bg-cream/40 px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {lang === "es" ? "Compara la tuya" : "Check yours against this"}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {config.checklist.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink/90">
                      <span aria-hidden className="text-teal">
                        ✓
                      </span>
                      <span>
                        <RichText md={t(item, lang)} inline />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-xs text-muted">
              {lang === "es"
                ? "No se califica — compara tu borrador y ajústalo a tu gusto."
                : "Not graded — compare your draft and tweak it to fit you."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
