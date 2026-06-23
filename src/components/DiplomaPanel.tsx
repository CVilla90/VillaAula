"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Course } from "@/lib/types";
import {
  courseKey,
  finalTestKey,
  isCourseComplete,
  lessonKey,
} from "@/lib/progress";
import { useProgress } from "@/components/progress/ProgressProvider";
import { useSessionUser } from "@/components/auth/SessionProvider";
import { RichText } from "@/components/RichText";
import {
  BRAND,
  DEFAULT_LEARNER_NAME,
  DIPLOMA_ISSUER,
  DIPLOMA_TITLE,
  PALETTE,
} from "@/lib/site";

export default function DiplomaPanel({ course }: { course: Course }) {
  const { completed, markCompleted } = useProgress();
  const { name: accountName } = useSessionUser();
  const [name, setName] = useState(accountName ?? "");
  const lessonKeys = useMemo(
    () =>
      course.units.flatMap((unit) =>
        unit.lessons.map((lesson) =>
          lessonKey(course.slug, unit.slug, lesson.slug),
        ),
      ),
    [course],
  );
  const lessonsDone = lessonKeys.every((key) => completed[key]);
  const finalDone = course.finalTest
    ? Boolean(completed[finalTestKey(course.slug)])
    : true;
  const ready = course.finalTest
    ? isCourseComplete(completed, course.slug, lessonKeys)
    : lessonsDone;

  useEffect(() => {
    if (ready) markCompleted(courseKey(course.slug));
  }, [ready, course.slug, markCompleted]);

  const displayName = name.trim() || accountName?.trim() || DEFAULT_LEARNER_NAME;

  function downloadDiploma() {
    if (!ready) return;
    const today = new Date().toLocaleDateString("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const svg = buildDiplomaSvg({
      learner: displayName,
      courseTitle: course.title,
      diplomaTitle: course.diploma?.title ?? DIPLOMA_TITLE,
      subtitle: course.diploma?.subtitle ?? `Level ${course.level}`,
      issuer: course.diploma?.issuer ?? DIPLOMA_ISSUER,
      date: today,
      level: course.level,
    });
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `wishub-level-${course.level}-diploma.svg`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-2xl border border-line bg-paper p-5">
        <p className="font-mono text-xs tracking-[0.18em] text-coral">
          COURSE STATUS
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <StatusPill
            label="Lessons"
            value={`${lessonKeys.filter((key) => completed[key]).length} / ${
              lessonKeys.length
            }`}
            complete={lessonsDone}
          />
          <StatusPill
            label="Final check"
            value={finalDone ? "Complete" : "Pending"}
            complete={finalDone}
          />
          <StatusPill
            label="Diploma"
            value={ready ? "Unlocked" : "Locked"}
            complete={ready}
          />
        </div>
      </div>

      {course.conclusion && (
        <div className="rounded-2xl border border-line bg-paper p-5">
          <h2 className="font-display text-2xl font-extrabold text-ink">
            {course.conclusion.title}
          </h2>
          <div className="mt-3 text-sm leading-relaxed text-muted">
            <RichText md={course.conclusion.body} />
          </div>
          <ul className="mt-5 space-y-2">
            {course.conclusion.nextSteps.map((step) => (
              <li key={step} className="flex gap-3 text-sm text-ink">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-teal text-[11px] font-bold text-white">
                  ✓
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-2xl border border-coral/30 bg-coral/5 p-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs tracking-[0.18em] text-coral">
              DIPLOMA
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-ink">
              {course.diploma?.title ?? DIPLOMA_TITLE}
            </h2>
            <label className="mt-4 block max-w-sm">
              <span className="text-xs font-semibold text-muted">
                Learner name
              </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={DEFAULT_LEARNER_NAME}
                className="mt-1 w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-ink outline-none transition focus:border-coral"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={downloadDiploma}
            disabled={!ready}
            className="rounded-full bg-coral px-6 py-3 font-display text-sm font-bold text-white transition enabled:hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-45"
          >
            Download diploma
          </button>
        </div>
        {!ready && (
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
            {!lessonsDone && (
              <Link href={`/level/${course.slug}`} className="font-bold text-coral">
                Finish lessons
              </Link>
            )}
            {!finalDone && course.finalTest && (
              <Link
                href={`/level/${course.slug}/final-test`}
                className="font-bold text-coral"
              >
                Take final check
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StatusPill({
  label,
  value,
  complete,
}: {
  label: string;
  value: string;
  complete: boolean;
}) {
  return (
    <div className="rounded-xl border border-line bg-cream/40 p-4">
      <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
        {label}
      </p>
      <p
        className={`mt-1 font-display text-base font-bold ${
          complete ? "text-teal" : "text-ink"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildDiplomaSvg({
  learner,
  courseTitle,
  diplomaTitle,
  subtitle,
  issuer,
  date,
  level,
}: {
  learner: string;
  courseTitle: string;
  diplomaTitle: string;
  subtitle: string;
  issuer: string;
  date: string;
  level: number;
}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100">
  <rect width="1600" height="1100" fill="${PALETTE.cream}"/>
  <rect x="90" y="90" width="1420" height="920" rx="36" fill="${PALETTE.paper}" stroke="${PALETTE.coral}" stroke-width="10"/>
  <rect x="132" y="132" width="1336" height="836" rx="24" fill="none" stroke="${PALETTE.line}" stroke-width="4"/>
  <text x="800" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="46" font-weight="700" fill="${PALETTE.coral}" letter-spacing="8">${escapeXml(BRAND)}</text>
  <text x="800" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="68" font-weight="800" fill="${PALETTE.ink}">${escapeXml(diplomaTitle)}</text>
  <text x="800" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="${PALETTE.muted}">${escapeXml(subtitle)}</text>
  <text x="800" y="535" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="${PALETTE.muted}">Awarded to</text>
  <text x="800" y="635" text-anchor="middle" font-family="Georgia, serif" font-size="82" font-weight="700" fill="${PALETTE.ink}">${escapeXml(learner)}</text>
  <text x="800" y="725" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="${PALETTE.muted}">for completing ${escapeXml(courseTitle)}</text>
  <line x1="360" y1="845" x2="650" y2="845" stroke="${PALETTE.ink}" stroke-width="3"/>
  <line x1="950" y1="845" x2="1240" y2="845" stroke="${PALETTE.ink}" stroke-width="3"/>
  <text x="505" y="890" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="${PALETTE.muted}">${escapeXml(issuer)}</text>
  <text x="1095" y="890" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="${PALETTE.muted}">${escapeXml(date)}</text>
  <circle cx="800" cy="842" r="66" fill="${PALETTE.teal}"/>
  <text x="800" y="861" text-anchor="middle" font-family="Arial, sans-serif" font-size="54" font-weight="800" fill="${PALETTE.paper}">${level}</text>
</svg>`;
}
