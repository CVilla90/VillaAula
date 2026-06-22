"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addLocalKey,
  clearLocalCompleted,
  getLocalCompleted,
  keysToRecord,
} from "@/lib/progress";
import {
  addProgressKey,
  getProgressKeys,
  mergeProgressKeys,
} from "@/lib/auth/progress-actions";
import { useSessionUser } from "@/components/auth/SessionProvider";

interface ProgressContextValue {
  /** Map of completed keys → true. */
  completed: Record<string, boolean>;
  /** Mark a key complete (optimistic; persists to DB if signed in, else localStorage). */
  markCompleted: (key: string) => void;
  /** False until the initial load (DB or localStorage) finishes. */
  ready: boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { signedIn } = useSessionUser();
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (signedIn) {
        // First sign-in: fold any guest (localStorage) progress into the account.
        const local = Object.keys(getLocalCompleted());
        try {
          if (local.length) {
            await mergeProgressKeys(local);
            clearLocalCompleted();
          }
          const keys = await getProgressKeys();
          if (!cancelled) setCompleted(keysToRecord(keys));
        } catch {
          // DB hiccup — fall back to whatever is local so the UI still works.
          if (!cancelled) setCompleted(getLocalCompleted());
        }
      } else {
        setCompleted(getLocalCompleted());
      }
      if (!cancelled) setReady(true);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [signedIn]);

  const markCompleted = useCallback(
    (key: string) => {
      setCompleted((cur) => (cur[key] ? cur : { ...cur, [key]: true }));
      if (signedIn) {
        addProgressKey(key).catch(() => {});
      } else {
        addLocalKey(key);
      }
    },
    [signedIn],
  );

  return (
    <ProgressContext.Provider value={{ completed, markCompleted, ready }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const value = useContext(ProgressContext);
  if (!value) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return value;
}
