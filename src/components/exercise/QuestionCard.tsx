"use client";

import { useState } from "react";
import type {
  Question,
  OpenConfig,
  MultipleChoiceConfig,
  MatchConfig,
} from "@/lib/types";
import { gradeQuestion, type QuestionResponse } from "@/lib/grading";
import { RichText } from "@/components/RichText";
import { t } from "@/lib/i18n";
import { useContentLang } from "@/components/i18n/ContentLang";

type Value = string | string[] | boolean | Record<string, string> | null;

export default function QuestionCard({
  question,
  index,
  onAnswered,
}: {
  question: Question;
  index: number;
  onAnswered: (id: string, correct: boolean) => void;
}) {
  const { lang } = useContentLang();
  const [value, setValue] = useState<Value>(() => initialValue(question));
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);

  const ready = isReady(question, value);

  function handleCheck() {
    const ok = gradeQuestion(question, value as QuestionResponse);
    setChecked(true);
    setCorrect(ok);
    onAnswered(question.id, ok);
  }

  function handleRetry() {
    setChecked(false);
    setCorrect(false);
    setValue(initialValue(question));
  }

  return (
    <div
      className={`rounded-2xl border bg-paper p-5 transition-colors ${
        checked
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
        <p className="font-display text-base font-medium leading-snug text-ink">
          <RichText md={t(question.prompt, lang)} inline variant="prompt" />
        </p>
      </div>

      <div className="mt-4 pl-9">
        {renderInput(question, value, setValue, checked, () => {
          if (ready && !checked) handleCheck();
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 pl-9">
        {!checked ? (
          <button
            type="button"
            onClick={handleCheck}
            disabled={!ready}
            className="rounded-full bg-coral px-5 py-2 text-sm font-bold text-white transition enabled:hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check
          </button>
        ) : correct ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal">
            ✓ Correct
          </span>
        ) : (
          <button
            type="button"
            onClick={handleRetry}
            className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
          >
            Try again
          </button>
        )}
        {question.hint && !checked && (
          <span className="text-xs text-muted">Hint: {t(question.hint, lang)}</span>
        )}
      </div>

      {checked && (
        <div
          className={`ml-9 mt-3 rounded-xl px-4 py-3 text-sm ${
            correct ? "bg-teal/10 text-teal" : "bg-coral/10 text-coral-deep"
          }`}
        >
          <span className="font-semibold">
            {correct ? "Nice." : "Not quite."}
          </span>{" "}
          {question.explanation ? (
            <RichText md={t(question.explanation, lang)} inline />
          ) : null}
        </div>
      )}
    </div>
  );
}

/* ---------------------------- helpers ---------------------------- */

function initialValue(q: Question): Value {
  switch (q.type) {
    case "open":
      return "";
    case "multiple_choice":
      return [];
    case "true_false":
      return null;
    case "match":
      return {};
    case "speaking":
    case "draft_compare":
      // Speaking and draft-compare render via their own components, not QuestionCard.
      return null;
  }
}

function isReady(q: Question, v: Value): boolean {
  switch (q.type) {
    case "open":
      return typeof v === "string" && v.trim().length > 0;
    case "multiple_choice":
      return Array.isArray(v) && v.length > 0;
    case "true_false":
      return typeof v === "boolean";
    case "match": {
      const cfg = q.config as MatchConfig;
      return (
        !!v &&
        typeof v === "object" &&
        !Array.isArray(v) &&
        cfg.pairs.every((p) => Boolean((v as Record<string, string>)[p.left]))
      );
    }
    case "speaking":
    case "draft_compare":
      return false;
  }
}

function renderInput(
  q: Question,
  value: Value,
  setValue: (v: Value) => void,
  locked: boolean,
  onEnter: () => void,
) {
  switch (q.type) {
    case "open":
      return (
        <OpenInput
          config={q.config as OpenConfig}
          value={(value as string) ?? ""}
          onChange={setValue}
          locked={locked}
          onEnter={onEnter}
        />
      );
    case "multiple_choice":
      return (
        <ChoiceInput
          config={q.config as MultipleChoiceConfig}
          value={(value as string[]) ?? []}
          onChange={setValue}
          locked={locked}
        />
      );
    case "true_false":
      return (
        <BoolInput
          value={value as boolean | null}
          onChange={setValue}
          locked={locked}
        />
      );
    case "match":
      return (
        <MatchInput
          config={q.config as MatchConfig}
          value={(value as Record<string, string>) ?? {}}
          onChange={setValue}
          locked={locked}
        />
      );
  }
}

/* ---------------------------- inputs ---------------------------- */

function OpenInput({
  config,
  value,
  onChange,
  locked,
  onEnter,
}: {
  config: OpenConfig;
  value: string;
  onChange: (v: Value) => void;
  locked: boolean;
  onEnter: () => void;
}) {
  const { lang } = useContentLang();
  return (
    <input
      type="text"
      value={value}
      disabled={locked}
      maxLength={config.charLimit}
      placeholder={config.placeholder ? t(config.placeholder, lang) : "Type your answer"}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onEnter();
        }
      }}
      className="w-full max-w-xs rounded-xl border border-line bg-cream/40 px-4 py-2.5 font-mono text-ink outline-none transition focus:border-coral disabled:opacity-70"
    />
  );
}

function ChoiceInput({
  config,
  value,
  onChange,
  locked,
}: {
  config: MultipleChoiceConfig;
  value: string[];
  onChange: (v: Value) => void;
  locked: boolean;
}) {
  const { lang } = useContentLang();
  const selected = value[0];
  return (
    <div className="grid gap-2 sm:max-w-md">
      {config.options.map((opt) => {
        const isSel = selected === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            disabled={locked}
            onClick={() => onChange([opt.id])}
            className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition disabled:opacity-70 ${
              isSel
                ? "border-coral bg-coral/5 text-ink"
                : "border-line text-ink hover:border-coral/40"
            }`}
          >
            <span
              className={`grid size-4 shrink-0 place-items-center rounded-full border text-[10px] ${
                isSel ? "border-coral bg-coral text-white" : "border-line"
              }`}
            >
              {isSel ? "●" : ""}
            </span>
            {t(opt.text, lang)}
          </button>
        );
      })}
    </div>
  );
}

function BoolInput({
  value,
  onChange,
  locked,
}: {
  value: boolean | null;
  onChange: (v: Value) => void;
  locked: boolean;
}) {
  const opts: { label: string; val: boolean }[] = [
    { label: "True", val: true },
    { label: "False", val: false },
  ];
  return (
    <div className="flex gap-2">
      {opts.map((o) => {
        const sel = value === o.val;
        return (
          <button
            key={o.label}
            type="button"
            disabled={locked}
            onClick={() => onChange(o.val)}
            className={`rounded-xl border px-5 py-2.5 text-sm font-semibold transition disabled:opacity-70 ${
              sel
                ? "border-coral bg-coral/5 text-ink"
                : "border-line text-ink hover:border-coral/40"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function MatchInput({
  config,
  value,
  onChange,
  locked,
}: {
  config: MatchConfig;
  value: Record<string, string>;
  onChange: (v: Value) => void;
  locked: boolean;
}) {
  // Sort the choices so they don't line up with the prompts (no positional
  // giveaway); the sort is deterministic, so it's stable across SSR/hydration.
  const rights = [...new Set(config.pairs.map((p) => p.right))].sort();

  return (
    <div className="grid gap-2">
      {config.pairs.map((p) => (
        <div key={p.left} className="flex items-center gap-3">
          <span className="min-w-[42%] text-sm font-medium text-ink">
            {p.left}
          </span>
          <span aria-hidden className="text-muted">
            →
          </span>
          <select
            disabled={locked}
            value={value[p.left] ?? ""}
            onChange={(e) => onChange({ ...value, [p.left]: e.target.value })}
            className="flex-1 rounded-xl border border-line bg-cream/40 px-3 py-2 text-sm text-ink outline-none transition focus:border-coral disabled:opacity-70"
          >
            <option value="" disabled>
              Choose…
            </option>
            {rights.map((r) => {
              // Each answer can pair with only one prompt: disable a choice once
              // another row has taken it, so a learner can't reuse it.
              const takenElsewhere = Object.entries(value).some(
                ([left, chosen]) => left !== p.left && chosen === r,
              );
              return (
                <option key={r} value={r} disabled={takenElsewhere}>
                  {r}
                </option>
              );
            })}
          </select>
        </div>
      ))}
    </div>
  );
}
