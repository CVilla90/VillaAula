import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse } from "@/content/level1";
import Syllabus from "@/components/Syllabus";
import SaveProgressNudge from "@/components/auth/SaveProgressNudge";

export default async function LevelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <Link
        href="/levels"
        className="font-mono text-xs text-muted transition hover:text-coral"
      >
        ← All levels
      </Link>
      <p className="mt-6 font-mono text-xs tracking-[0.2em] text-coral">
        LEVEL {course.level}
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink">
        {course.title}
      </h1>
      <p className="mt-4 leading-relaxed text-muted">{course.intro}</p>
      <SaveProgressNudge />
      <Syllabus course={course} />
    </main>
  );
}
