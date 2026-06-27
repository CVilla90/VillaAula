import Link from "next/link";
import type { Metadata } from "next";
import { resourcesByLevel } from "@/content/resources";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: `Deep Dives · ${BRAND}`,
  description:
    "In-depth, plain-English explainers for the grammar topics in the course — read whenever you want to go deeper.",
};

export default function LearnIndexPage() {
  const groups = resourcesByLevel();

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link
        href="/"
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← Home
      </Link>

      <p className="mt-6 font-mono text-xs tracking-[0.22em] text-coral">
        DEEP DIVES
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink">
        Go deeper, whenever you want.
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Short lessons keep things moving. When a topic sparks your curiosity, these
        explainers give you the full picture — examples, edge cases, and the traps to
        avoid. Read freely; nothing here is graded.
      </p>

      <div className="mt-10 space-y-10">
        {groups.map((g) => (
          <section key={g.level}>
            <h2 className="font-mono text-xs uppercase tracking-wide text-muted">
              {g.level === 0 ? "General" : `Level ${g.level}`}
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {g.resources.map((r) => (
                <Link
                  key={r.slug}
                  href={`/learn/${r.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-coral/30 hover:shadow-lg hover:shadow-coral/5"
                >
                  <h3 className="font-display text-lg font-bold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {r.summary}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-coral">
                    Read{" "}
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
