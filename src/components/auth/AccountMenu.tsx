"use client";

import Link from "next/link";
import { useSessionUser } from "./SessionProvider";
import { logoutAction } from "@/lib/auth/actions";

/** Nav control: "Log in" when signed out; name + "Log out" when signed in. */
export default function AccountMenu() {
  const { signedIn, name, isAdmin } = useSessionUser();

  if (!signedIn) {
    return (
      <Link
        href="/login"
        className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-coral hover:text-coral"
      >
        Log in
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {isAdmin && (
        <Link
          href="/admin"
          className="rounded-full border border-coral/40 bg-coral/10 px-3 py-2 text-sm font-semibold text-coral transition hover:bg-coral/20"
        >
          Admin
        </Link>
      )}
      <span className="hidden max-w-[10rem] truncate text-sm font-semibold text-ink sm:block">
        {name ?? "You"}
      </span>
      <form action={logoutAction}>
        <button
          type="submit"
          className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-muted shadow-sm transition hover:border-coral hover:text-coral"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
