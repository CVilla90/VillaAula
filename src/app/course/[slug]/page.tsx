import Link from "next/link";
import { notFound } from "next/navigation";
import { courseDeepDives, getCourse } from "@/content/catalog";
import { programForCourse } from "@/content/programs";
import { resourceHref } from "@/content/resources";
import { getWiki } from "@/content/wikis";
import Syllabus from "@/components/Syllabus";
import SaveProgressNudge from "@/components/auth/SaveProgressNudge";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const dives = courseDeepDives(course);
  const program = programForCourse(course.slug);
  const courseNoun = program?.courseNoun ?? "Level";
  // The wiki this course's universe shares (HANDOFF §22) — the course's own pages are
  // highlighted, but the whole wiki is one click away from every course that shares it.
  const wiki = program?.wiki ? getWiki(program.wiki) : undefined;

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <Link
        href={program ? `/programs/${program.slug}` : "/"}
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← {program ? program.title : "Home"}
      </Link>
      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        {courseNoun.toUpperCase()} {course.level}
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink">
        {course.title}
      </h1>
      <p className="mt-4 leading-relaxed text-muted">{course.intro}</p>
      <SaveProgressNudge />
      <Syllabus course={course} />

      {wiki && (
        <section className="mt-12">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-lg font-extrabold text-ink">
              {wiki.noun ?? "Reference"} wiki
            </h2>
            <Link
              href={`/wiki/${wiki.slug}`}
              className="font-mono text-[11px] uppercase tracking-wide text-coral transition hover:text-coral-deep"
            >
              Browse all →
            </Link>
          </div>
          <p className="mt-1 text-sm text-muted">
            {dives.length > 0
              ? `The pages behind this ${courseNoun.toLowerCase()} — plus every table in the wiki, shared across the whole program. Read anytime, nothing graded.`
              : `${wiki.summary}`}
          </p>

          {dives.length > 0 && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dives.map((d) => (
                <Link
                  key={d.slug}
                  href={resourceHref(d.slug)}
                  className="group flex flex-col rounded-2xl border border-line bg-paper p-4 transition hover:-translate-y-0.5 hover:border-coral/30 hover:shadow-lg hover:shadow-coral/5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base font-bold text-ink">
                      {d.title}
                    </h3>
                    {d.tables && d.tables.length > 0 && (
                      <span className="mt-0.5 shrink-0 rounded-full bg-teal/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-teal">
                        Table
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-coral">
                    Read{" "}
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}

          <Link
            href={`/wiki/${wiki.slug}`}
            className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-coral/40 bg-coral/5 px-5 py-4 transition hover:border-coral hover:bg-coral/10"
          >
            <span>
              <span className="font-display text-base font-bold text-ink">
                {wiki.title}
              </span>
              <span className="mt-0.5 block text-sm text-muted">
                {wiki.tagline} Verb forms, pronouns, tenses — every table in one place.
              </span>
            </span>
            <span aria-hidden className="text-lg font-bold text-coral">
              →
            </span>
          </Link>
        </section>
      )}
    </main>
  );
}
