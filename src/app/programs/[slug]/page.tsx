import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { CredentialRequirement } from "@/lib/types";
import {
  getProgram,
  programs,
  programBadges,
  programBand,
  programCertificates,
  resolveProgramCourses,
} from "@/content/programs";
import { lessonKey, finalTestKey } from "@/lib/progress";
import ProgramDashboard, {
  type CourseSpec,
  type CredentialSpec,
} from "@/components/program/ProgramDashboard";
import { BRAND } from "@/lib/site";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return { title: `Programs · ${BRAND}` };
  return { title: `${program.title} · ${BRAND}`, description: program.summary };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  // Build the minimal per-course progress spec on the server (just the keys), so the
  // client dashboard can compute completion without shipping the whole catalog.
  const courses: CourseSpec[] = resolveProgramCourses(program).map((c) => ({
    slug: c.slug,
    title: c.title,
    band: c.band,
    focus: c.focus,
    href: c.href,
    status: c.status,
    lessonKeys: c.course
      ? c.course.units.flatMap((u) =>
          u.lessons.map((l) => lessonKey(c.slug, u.slug, l.slug)),
        )
      : [],
    finalKey: c.course?.finalTest ? finalTestKey(c.slug) : null,
  }));

  // A credential's requirement, flattened to the course slugs that earn it. The
  // capstone (type "program") needs every course in the program, including "soon"
  // ones — so it stays locked until C1/C2 are authored and finished.
  const allSlugs = program.courses.map((r) => r.slug);
  const toRequiredSlugs = (req: CredentialRequirement): string[] =>
    req.type === "course"
      ? [req.courseSlug]
      : req.type === "courses"
        ? req.courseSlugs
        : allSlugs;

  const credentials: CredentialSpec[] = [
    ...programBadges(program),
    ...programCertificates(program),
  ].map((cr) => ({
    id: cr.id,
    kind: cr.kind,
    title: cr.title,
    subtitle: cr.subtitle,
    requiredCourseSlugs: toRequiredSlugs(cr.requires),
  }));

  return (
    <ProgramDashboard
      title={program.title}
      tagline={program.tagline}
      summary={program.summary}
      band={programBand(program)}
      courseNoun={program.courseNoun ?? "Course"}
      courses={courses}
      credentials={credentials}
    />
  );
}
