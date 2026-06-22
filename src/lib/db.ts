import { PrismaClient } from "@prisma/client";

/**
 * Prisma client singleton.
 *
 * IMPORTANT: `new PrismaClient()` throws if DATABASE_URL is unset, so we never
 * construct it at import time. Local dev with no database simply never calls
 * `getPrisma()` — auth requires a DB (see `authConfigured`), and without auth the
 * app falls back to localStorage progress. Always guard callers with
 * `dbConfigured()` (or a known session, which implies a DB).
 */

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

/** True when a Postgres connection string is configured (Replit sets this). */
export function dbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

/** Lazily construct (and cache) the client. Only call when `dbConfigured()`. */
export function getPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  return globalForPrisma.prisma;
}
