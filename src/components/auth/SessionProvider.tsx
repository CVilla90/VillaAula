"use client";

import { createContext, useContext } from "react";

/** Minimal, non-sensitive session info shared with client components. */
export interface SessionUser {
  signedIn: boolean;
  name: string | null;
  /** Whether accounts are configured at all (DB + AUTH_SECRET present). */
  authEnabled: boolean;
}

const SessionContext = createContext<SessionUser>({
  signedIn: false,
  name: null,
  authEnabled: false,
});

export function SessionProvider({
  value,
  children,
}: {
  value: SessionUser;
  children: React.ReactNode;
}) {
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSessionUser(): SessionUser {
  return useContext(SessionContext);
}
