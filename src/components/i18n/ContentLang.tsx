"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Lang } from "@/lib/i18n";

/**
 * The **content language** switch (HANDOFF §20.5) — a global, persisted EN|ES choice
 * that bilingual courses (e.g. the LinkedIn program) read to render their prompts,
 * options, readings, and explanations. Mirrors the grammar-note toggle's pattern but
 * is app-wide and shared, so the choice sticks across lessons and pages.
 *
 * English-only courses never call `useContentLang()` for their copy (their fields are
 * plain strings resolved by `t()`, which ignores the language), so this provider is
 * inert for them — it only matters where bilingual content opts in.
 */

const STORAGE_KEY = "villaaula:contentLang";

interface ContentLangValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const ContentLangContext = createContext<ContentLangValue>({
  lang: "en",
  setLang: () => {},
});

export function ContentLangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the saved choice post-mount (SSR-safe). Reading an external store
  // (localStorage) into state on mount is the legitimate effect-setState case.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable (private mode) — non-fatal */
    }
  }, []);

  return (
    <ContentLangContext.Provider value={{ lang, setLang }}>
      {children}
    </ContentLangContext.Provider>
  );
}

export function useContentLang(): ContentLangValue {
  return useContext(ContentLangContext);
}

/**
 * The EN|ES segmented control for bilingual courses. Render it in a course/lesson
 * header when `course.bilingual` is set; it's hidden for monolingual content.
 */
export function ContentLangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useContentLang();
  return (
    <div
      role="group"
      aria-label="Content language"
      className={`inline-flex rounded-full border border-line bg-cream/40 p-0.5 font-mono text-[11px] font-semibold ${className}`}
    >
      <LangButton active={lang === "en"} onClick={() => setLang("en")} label="EN" />
      <LangButton active={lang === "es"} onClick={() => setLang("es")} label="ES" />
    </div>
  );
}

function LangButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-2.5 py-1 transition ${
        active ? "bg-coral text-white shadow-sm" : "text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
