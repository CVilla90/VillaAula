import Link from "next/link";

export default function LevelsPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-xs tracking-[0.22em] text-coral">
        WISHUB · LEVELS
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink">
        The course is coming together.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Level 1 lands first. The exercises are being built right now — check back
        very soon.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-coral/25 transition hover:bg-coral-deep"
      >
        <span>←</span> Back home
      </Link>
    </main>
  );
}
