import Link from "next/link";
import { BRAND_WORDMARK } from "@/lib/site";

/** Centered card chrome for the /login and /signup pages. */
export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-screen place-items-center px-5 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          <span className="grid size-8 place-items-center rounded-[10px] bg-coral text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d="M12 2l2.2 6.4L21 10l-6.8 1.6L12 18l-2.2-6.4L3 10l6.8-1.6z" />
            </svg>
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            {BRAND_WORDMARK}
          </span>
        </Link>
        {children}
      </div>
    </main>
  );
}

/** Map OAuth redirect error codes to friendly copy. */
export function authErrorMessage(code: string | undefined): string | undefined {
  switch (code) {
    case "google_disabled":
      return "Google sign-in isn't set up yet. Use a username and password instead.";
    case "oauth":
    case "state":
      return "Google sign-in didn't complete. Please try again.";
    default:
      return undefined;
  }
}
