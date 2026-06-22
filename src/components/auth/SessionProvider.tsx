"use client";

import { createContext, useContext } from "react";

/** Minimal, non-sensitive session info shared with client components. */
export interface SessionUser {
  signedIn: boolean;
  name: string | null;
}

const SessionContext = createContext<SessionUser>({ signedIn: false, name: null });

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
