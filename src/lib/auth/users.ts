import { getPrisma } from "@/lib/db";
import { getSession } from "./session";

/** Shape exposed to the app (never includes passwordHash). */
export interface CurrentUser {
  id: string;
  username: string | null;
  email: string | null;
  name: string | null;
  image: string | null;
  role: string;
  isAdmin: boolean;
}

function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/** Super-admin allowlist (survives DB resets) — see ADMIN_EMAILS env. */
export function isAdminEmail(email: string | null | undefined): boolean {
  return Boolean(email && adminEmails().includes(email.toLowerCase()));
}

/** The signed-in user (or null). Reads the session cookie, then the DB. */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  const session = await getSession();
  if (!session) return null;
  const user = await getPrisma().user.findUnique({
    where: { id: session.userId },
  });
  if (!user) return null;
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    name: user.name,
    image: user.image,
    role: user.role,
    isAdmin: user.role === "admin" || isAdminEmail(user.email),
  };
}
