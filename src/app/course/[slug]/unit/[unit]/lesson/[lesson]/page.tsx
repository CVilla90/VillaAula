import { notFound } from "next/navigation";
import { getCourse } from "@/content/catalog";
import { programForCourse } from "@/content/programs";
import LessonPlayer from "@/components/exercise/LessonPlayer";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; unit: string; lesson: string }>;
}) {
  const { slug, unit: unitSlug, lesson: lessonSlug } = await params;

  const course = getCourse(slug);
  const unit = course?.units.find((u) => u.slug === unitSlug);
  const lesson = unit?.lessons.find((l) => l.slug === lessonSlug);

  if (!course || !unit || !lesson) notFound();

  const courseNoun = programForCourse(course.slug)?.courseNoun ?? "Level";

  return (
    <LessonPlayer course={course} unit={unit} lesson={lesson} courseNoun={courseNoun} />
  );
}
