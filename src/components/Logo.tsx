import Link from "next/link";
import { BRAND_WORDMARK } from "@/lib/site";

/**
 * The VillaAula wordmark — a coral spark tile + the brand name, linking home.
 * Shared by the homepage nav and the slim `TopBar` (so the mark isn't re-typed).
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <span
        className={`grid place-items-center rounded-[10px] bg-coral text-white shadow-sm ${
          compact ? "size-7" : "size-8"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className={compact ? "size-3.5" : "size-4"}
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l2.2 6.4L21 10l-6.8 1.6L12 18l-2.2-6.4L3 10l6.8-1.6z" />
        </svg>
      </span>
      <span
        className={`font-display font-extrabold tracking-tight text-ink ${
          compact ? "text-lg" : "text-xl"
        }`}
      >
        {BRAND_WORDMARK}
      </span>
    </Link>
  );
}
