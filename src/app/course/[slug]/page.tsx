import Link from "next/link";
import { notFound } from "next/navigation";
import { courseDeepDives, getCourse } from "@/content/catalog";
import { programForCourse } from "@/content/programs";
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

      {dives.length > 0 && (
        <section className="mt-12">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-lg font-extrabold text-ink">
              Deep Dives
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Go deeper on this level
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">
            In-depth explainers for the topics in this level — read anytime, nothing
            graded.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {dives.map((d) => (
              <Link
                key={d.slug}
                href={`/learn/${d.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-4 transition hover:-translate-y-0.5 hover:border-coral/30 hover:shadow-lg hover:shadow-coral/5"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  {d.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {d.summary}
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
      )}
    </main>
  );
}
