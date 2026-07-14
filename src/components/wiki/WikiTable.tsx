import type { GrammarTable } from "@/lib/types";
import { RichText } from "@/components/RichText";

/**
 * A reference table. Two things matter here and both are easy to get wrong:
 *
 * 1. **It must survive a phone.** Grammar tables are wide (six columns of verb forms),
 *    and a learner checking a form on their phone is the main use case. The table
 *    scrolls inside its own box — the page itself never scrolls sideways.
 * 2. **The first column is the anchor.** It's the word you're looking up, so it stays
 *    visually distinct while your eye travels right across the forms.
 */
export default function WikiTable({ table }: { table: GrammarTable }) {
  return (
    <figure className="mt-8">
      <figcaption className="mb-3">
        <h3 className="font-display text-lg font-extrabold text-ink">{table.title}</h3>
        {table.caption && (
          <p className="mt-1 text-sm leading-relaxed text-muted">
            <RichText md={table.caption} inline />
          </p>
        )}
      </figcaption>

      <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-cream/50">
              {table.columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="whitespace-nowrap px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wide text-muted"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-line/60 transition-colors last:border-0 hover:bg-cream/30"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={
                      j === 0
                        ? "whitespace-nowrap px-4 py-2.5 font-semibold text-ink"
                        : "px-4 py-2.5 text-ink/80"
                    }
                  >
                    <RichText md={cell} inline />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.note && (
        <p className="mt-3 rounded-xl bg-coral/5 px-4 py-3 text-sm leading-relaxed text-ink/80">
          <span className="font-bold text-coral-deep">Watch out — </span>
          <RichText md={table.note} inline />
        </p>
      )}
    </figure>
  );
}
