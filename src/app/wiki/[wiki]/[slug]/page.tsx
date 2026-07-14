import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getResource, resources, resourceHref } from "@/content/resources";
import { getWiki } from "@/content/wikis";
import { lessonsUsingResource } from "@/content/catalog";
import { RichText } from "@/components/RichText";
import WikiTable from "@/components/wiki/WikiTable";
import { BRAND } from "@/lib/site";

export function generateStaticParams() {
  return resources.map((r) => ({ wiki: r.wiki, slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ wiki: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return { title: `Wiki · ${BRAND}` };
  return { title: `${resource.title} · ${BRAND}`, description: resource.summary };
}

export default async function WikiPage({
  params,
}: {
  params: Promise<{ wiki: string; slug: string }>;
}) {
  const { wiki: wikiSlug, slug } = await params;
  const resource = getResource(slug);
  // The page must actually live in this wiki — otherwise /wiki/ai-coding/pronouns
  // would happily render an English page under the wrong universe.
  if (!resource || resource.wiki !== wikiSlug) notFound();

  const wiki = getWiki(wikiSlug);
  if (!wiki) notFound();

  const usedIn = lessonsUsingResource(resource.slug);
  const related = (resource.related ?? [])
    .map((s) => getResource(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link
        href={`/wiki/${wiki.slug}`}
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← {wiki.title}
      </Link>

      <p className="mt-6 font-mono text-xs tracking-[0.22em] text-coral">
        {resource.section?.toUpperCase() ?? (wiki.noun ?? "Reference").toUpperCase()}
      </p>
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {resource.title}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-muted">{resource.summary}</p>

      {resource.tags && resource.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {resource.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-cream px-2.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {resource.body && (
        <article className="mt-8 text-[15px] leading-relaxed text-ink/90">
          <RichText md={resource.body} />
        </article>
      )}

      {resource.tables?.map((table) => (
        <WikiTable key={table.title} table={table} />
      ))}

      {usedIn.length > 0 && (
        <section className="mt-12 rounded-2xl border border-line bg-cream/40 p-5">
          <h2 className="font-display text-sm font-extrabold text-ink">
            Used in these lessons
          </h2>
          <ul className="mt-3 space-y-1.5">
            {usedIn.map((l) => (
              <li key={`${l.courseSlug}-${l.unitSlug}-${l.lessonSlug}`}>
                <Link
                  href={`/course/${l.courseSlug}/unit/${l.unitSlug}/lesson/${l.lessonSlug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-coral"
                >
                  <span className="font-mono text-[11px] text-coral">L{l.level}</span>
                  {l.lessonTitle}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-wide text-muted">
            Related
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={resourceHref(r.slug)}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-ink transition hover:border-coral/40 hover:text-coral"
              >
                {r.title} →
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
