import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse } from "@/content/catalog";
import DiplomaPanel from "@/components/DiplomaPanel";
import SaveProgressNudge from "@/components/auth/SaveProgressNudge";
import { getExamResult } from "@/lib/auth/exam-actions";

export default async function ConclusionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) notFound();

  // Real saved grade for signed-in learners (null for guests / no DB).
  const savedExam = await getExamResult(course.slug);

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <Link
        href={`/course/${course.slug}`}
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        &larr; Level {course.level}
      </Link>
      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        CONCLUSION
      </p>
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink">
        Finish Level {course.level}
      </h1>
      <p className="mt-3 leading-relaxed text-muted">
        Review your completion status and download your diploma when the full
        level is complete.
      </p>
      <SaveProgressNudge />
      <DiplomaPanel course={course} savedExam={savedExam} />
    </main>
  );
}
