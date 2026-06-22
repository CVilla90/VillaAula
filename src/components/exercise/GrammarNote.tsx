import { RichText } from "@/components/RichText";

/** Collapsed by default (native <details>) — "the grammar is one tap away". */
export default function GrammarNote({ md }: { md: string }) {
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
        <RichText md={md} />
      </div>
    </details>
  );
}
