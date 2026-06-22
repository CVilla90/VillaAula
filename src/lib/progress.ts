"use client";

import { useEffect, useState } from "react";

/**
 * Lesson-completion progress, stored in localStorage (single-user MVP — HANDOFF §4).
 * Moves to per-user DB rows (Enrollment/Attempt) in Phase 3.
 */

const KEY = "wishub:completed";
const EVENT = "wishub:progress";

export function lessonKey(
  courseSlug: string,
  unitSlug: string,
  lessonSlug: string,
): string {
  return `${courseSlug}/${unitSlug}/${lessonSlug}`;
}

export function getCompleted(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(
      window.localStorage.getItem(KEY) ?? "{}",
    ) as Record<string, boolean>;
  } catch {
    return {};
  }
}

export function markCompleted(key: string): void {
  if (typeof window === "undefined") return;
  const cur = getCompleted();
  if (cur[key]) return;
  cur[key] = true;
  window.localStorage.setItem(KEY, JSON.stringify(cur));
  window.dispatchEvent(new Event(EVENT));
}

/** Live map of completed lesson keys; updates on completion and across tabs. */
export function useCompleted(): Record<string, boolean> {
  const [data, setData] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const read = () => setData(getCompleted());
    read();
    window.addEventListener(EVENT, read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(EVENT, read);
      window.removeEventListener("storage", read);
    };
  }, []);
  return data;
}
