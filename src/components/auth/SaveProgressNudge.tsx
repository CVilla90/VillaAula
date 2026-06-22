"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSessionUser } from "./SessionProvider";

/**
 * Gentle reminder for guests (only when accounts are actually enabled) that
 * logging in saves their progress to an account. Their local progress merges
 * in automatically on first sign-in, so nothing is lost either way.
 */
export default function SaveProgressNudge() {
  const { signedIn, authEnabled } = useSessionUser();
  const pathname = usePathname();

  if (!authEnabled || signedIn) return null;
  const next = encodeURIComponent(pathname || "/levels");

  return (
    <div className="my-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-coral/20 bg-coral/5 px-4 py-3">
      <p className="text-sm text-ink">
        <span aria-hidden>💾</span> You&rsquo;re learning as a guest.{" "}
        <span className="text-muted">
          Log in to save your progress and earn your diploma.
        </span>
      </p>
      <div className="flex shrink-0 gap-2">
        <Link
          href={`/login?next=${next}`}
          className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
        >
          Log in
        </Link>
        <Link
          href={`/signup?next=${next}`}
          className="rounded-full bg-coral px-4 py-1.5 text-sm font-bold text-white transition hover:bg-coral-deep"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
