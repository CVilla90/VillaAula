"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import AccountMenu from "@/components/auth/AccountMenu";

/**
 * A slim, static (NOT sticky) top bar on inner pages — so you can always get back
 * home, even when you're deep inside a lesson. Deliberately doesn't follow scroll
 * (per request): it sits at the top and scrolls away with the page, keeping the
 * reading area clean. Hidden where a page already owns its chrome: the homepage
 * (its own nav) and the auth pages (AuthShell).
 */
const HIDE_ON = new Set(["/", "/login", "/signup"]);

export default function TopBar() {
  const pathname = usePathname();
  if (HIDE_ON.has(pathname)) return null;

  return (
    <header className="border-b border-line/70 bg-cream/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2.5">
        <Logo compact />
        <AccountMenu />
      </div>
    </header>
  );
}
