import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWiki } from "@/content/wikis";
import { populatedWikis, wikiSections } from "@/content/resources";
import { BRAND } from "@/lib/site";

export function generateStaticParams() {
  return populatedWikis().map((w) => ({ wiki: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ wiki: string }>;
}): Promise<Metadata> {
  const wiki = getWiki((await params).wiki);
  if (!wiki) return { title: `Wiki · ${BRAND}` };
  return { title: `${wiki.title} · ${BRAND}`, description: wiki.summary };
}

/** The wiki home: every reference page in this universe, grouped by section. */
export default async function WikiIndexPage({
  params,
}: {
  params: Promise<{ wiki: string }>;
}) {
  const { wiki: wikiSlug } = await params;
  const wiki = getWiki(wikiSlug);
  if (!wiki) notFound();

  const sections = wikiSections(wikiSlug);
  if (sections.length === 0) notFound();

  const pageCount = sections.reduce((n, s) => n + s.resources.length, 0);

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <Link
        href="/"
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← Home
      </Link>

      <p className="mt-6 font-mono text-xs tracking-[0.22em] text-coral">
        {(wiki.noun ?? "Reference").toUpperCase()} WIKI
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink">
        {wiki.tagline}
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{wiki.summary}</p>
      <p className="mt-4 font-mono text-xs text-muted">
        {pageCount} pages · free to read · nothing graded
      </p>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink">
              {section.title}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {section.resources.map((r) => (
                <Link
                  key={r.slug}
                  href={`/wiki/${wiki.slug}/${r.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-coral/30 hover:shadow-lg hover:shadow-coral/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {r.title}
                    </h3>
                    {r.tables && r.tables.length > 0 && (
                      <span className="mt-0.5 shrink-0 rounded-full bg-teal/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-teal">
                        Table
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{r.summary}</p>
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
