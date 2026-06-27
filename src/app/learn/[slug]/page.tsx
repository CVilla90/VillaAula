import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getResource, resources } from "@/content/resources";
import { lessonsUsingResource } from "@/content/catalog";
import { RichText } from "@/components/RichText";
import { BRAND } from "@/lib/site";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return { title: `Deep Dives · ${BRAND}` };
  return {
    title: `${resource.title} · ${BRAND}`,
    description: resource.summary,
  };
}

export default async function DeepDivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const usedIn = lessonsUsingResource(resource.slug);
  const related = (resource.related ?? [])
    .map((s) => getResource(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link
        href="/learn"
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← All Deep Dives
      </Link>

      <p className="mt-6 font-mono text-xs tracking-[0.22em] text-coral">
        {resource.level ? `LEVEL ${resource.level} · ` : ""}DEEP DIVE
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

      <article className="mt-8 text-[15px] leading-relaxed text-ink/90">
        <RichText md={resource.body} />
      </article>

      {usedIn.length > 0 && (
        <section className="mt-12 rounded-2xl border border-line bg-cream/40 p-5">
          <h2 className="font-display text-sm font-extrabold text-ink">
            Used in these lessons
          </h2>
          <ul className="mt-3 space-y-1.5">
            {usedIn.map((l) => (
              <li key={`${l.courseSlug}-${l.unitSlug}-${l.lessonSlug}`}>
                <Link
                  href={`/level/${l.courseSlug}/unit/${l.unitSlug}/lesson/${l.lessonSlug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-coral"
                >
                  <span className="font-mono text-[11px] text-coral">
                    L{l.level}
                  </span>
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
                href={`/learn/${r.slug}`}
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
