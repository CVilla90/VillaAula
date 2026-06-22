import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-xs tracking-[0.22em] text-coral">404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink">
        That page is missing.
      </h1>
      <p className="mt-4 text-muted">
        The link may be old, or the lesson is not ready yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-coral/25 transition hover:bg-coral-deep"
      >
        ← Back home
      </Link>
    </main>
  );
}
