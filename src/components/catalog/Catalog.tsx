"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * The catalog browser (HANDOFF §19.5) — a view over the programs catalog. Today it
 * shows one category ("Languages") with one program ("English"), so it reads as
 * *focused*, not empty; the same component grows into Netflix-style category rows as
 * more programs land. Search is a cheap client-side fuzzy filter over the static
 * catalog (upgrades to real search only once content is in the DB and the catalog is
 * big — don't build search infra for one program).
 */

export interface RungPreview {
  slug: string;
  band?: string;
  status: "active" | "soon";
}

export interface ProgramCardData {
  slug: string;
  title: string;
  tagline: string;
  band: string;
  category: string;
  categoryTitle: string;
  courseNoun: string;
  readyCount: number;
  soonCount: number;
  rungs: RungPreview[];
}

export interface CategoryData {
  slug: string;
  title: string;
  blurb?: string;
}

export default function Catalog({
  programs,
  categories,
}: {
  programs: ProgramCardData[];
  categories: CategoryData[];
}) {
  const [q, setQ] = useState("");
  const norm = q.trim().toLowerCase();
  const matches = (p: ProgramCardData) =>
    !norm ||
    p.title.toLowerCase().includes(norm) ||
    p.tagline.toLowerCase().includes(norm) ||
    p.categoryTitle.toLowerCase().includes(norm) ||
    p.band.toLowerCase().includes(norm) ||
    p.rungs.some((r) => r.band?.toLowerCase().includes(norm));
  const filtered = programs.filter(matches);

  return (
    <div>
      <label className="relative block max-w-sm">
        <span className="sr-only">Search programs</span>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search programs…"
          className="w-full rounded-full border border-line bg-paper py-2.5 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-coral"
        />
      </label>

      {categories.map((cat) => {
        const inCat = filtered.filter((p) => p.category === cat.slug);
        if (inCat.length === 0) return null;
        return (
          <section key={cat.slug} className="mt-8">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl font-extrabold text-ink">
                {cat.title}
              </h3>
              {cat.blurb && (
                <span className="hidden text-sm text-muted sm:block">
                  {cat.blurb}
                </span>
              )}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {inCat.map((p) => (
                <ProgramCard key={p.slug} program={p} />
              ))}
            </div>
          </section>
        );
      })}

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-muted">
          No programs match “{q}”. More are on the way.
        </p>
      )}
    </div>
  );
}

function ProgramCard({ program: p }: { program: ProgramCardData }) {
  return (
    <Link
      href={`/programs/${p.slug}`}
      className="group flex flex-col rounded-2xl border border-coral/30 bg-paper p-5 shadow-lg shadow-coral/5 transition hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-coral">
          {p.categoryTitle.toUpperCase()}
        </span>
        {p.band && (
          <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[11px] font-semibold text-teal">
            {p.band}
          </span>
        )}
      </div>
      <h4 className="mt-3 font-display text-2xl font-bold text-ink">{p.title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-muted">{p.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.rungs.map((r) => (
          <span
            key={r.slug}
            className={`rounded-full px-2 py-0.5 font-mono text-[11px] ${
              r.status === "active"
                ? "bg-coral/10 text-coral"
                : "bg-line/60 text-muted"
            }`}
          >
            {p.courseNoun} {r.slug}
            {r.band ? ` · ${r.band}` : ""}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted">
          {p.readyCount} ready{p.soonCount > 0 ? ` · ${p.soonCount} soon` : ""}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-bold text-coral">
          Open{" "}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
