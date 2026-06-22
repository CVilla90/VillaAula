import Link from "next/link";

const LEVELS = [
  {
    n: 1,
    name: "Foundations",
    focus: "be · routines · comparisons · can",
    status: "active" as const,
  },
  {
    n: 2,
    name: "Everyday Stories",
    focus: "past · future · some / any",
    status: "active" as const,
  },
  {
    n: 3,
    name: "Telling More",
    focus: "present perfect · adverbs · because",
    status: "soon" as const,
  },
  {
    n: 4,
    name: "Real Conversations",
    focus: "conditionals · should · phrasal verbs",
    status: "soon" as const,
  },
];

export default function LevelsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link
        href="/"
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← Home
      </Link>
      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        CHOOSE YOUR LEVEL
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink">
        Four levels, one path.
      </h1>
      <p className="mt-3 max-w-lg text-muted">
        Start at the beginning and climb. Levels 1 and 2 are complete now — the
        rest are on the way.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {LEVELS.map((l) => {
          const active = l.status === "active";
          const inner = (
            <>
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs ${
                    active ? "text-coral" : "text-muted"
                  }`}
                >
                  LEVEL {l.n}
                </span>
                {active ? (
                  <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal">
                    Ready
                  </span>
                ) : (
                  <span className="text-[11px] font-medium text-muted">Soon</span>
                )}
              </div>
              <h2 className="mt-3 font-display text-xl font-bold text-ink">
                {l.name}
              </h2>
              <p className="mt-1 font-mono text-xs text-muted">{l.focus}</p>
              <span
                className={`mt-4 inline-flex items-center gap-1 text-sm font-bold ${
                  active ? "text-coral" : "text-muted/60"
                }`}
              >
                {active ? "Start →" : "Locked"}
              </span>
            </>
          );
          return active ? (
            <Link
              key={l.n}
              href={`/level/${l.n}`}
              className="flex flex-col rounded-2xl border border-coral/30 bg-paper p-5 shadow-lg shadow-coral/5 transition hover:-translate-y-0.5"
            >
              {inner}
            </Link>
          ) : (
            <div
              key={l.n}
              className="flex flex-col rounded-2xl border border-line bg-paper/50 p-5"
            >
              {inner}
            </div>
          );
        })}
      </div>
    </main>
  );
}
