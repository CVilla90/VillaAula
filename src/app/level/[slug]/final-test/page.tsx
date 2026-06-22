import { notFound } from "next/navigation";
import { getCourse } from "@/content/level1";
import FinalTestPlayer from "@/components/exercise/FinalTestPlayer";

export default async function FinalTestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course?.finalTest) notFound();

  return <FinalTestPlayer course={course} test={course.finalTest} />;
}
