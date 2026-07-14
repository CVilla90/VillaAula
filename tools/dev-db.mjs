/**
 * A local Postgres for development — no Docker, no install, no cloud account.
 *
 * VillaAula turns accounts OFF unless `DATABASE_URL` is set (see `authConfigured()`),
 * so for a long time none of the DB-backed features — signup/login, Google OAuth,
 * saved exam grades, the admin dashboard — could be exercised locally, and they all
 * shipped "untested live". This runs PGlite (Postgres compiled to WASM) behind a real
 * Postgres wire-protocol socket, so Prisma talks to it exactly like a real server.
 *
 *   npm run db:dev      # terminal 1 — leave running
 *   npm run db:push     # terminal 2 — once, to create the tables
 *   npm run dev         # terminal 2 — accounts are now ON
 *
 * `DATABASE_URL` for it is in `.env.example`. Data persists in `.pgdata/` (gitignored),
 * so accounts survive a restart; delete that folder for a clean slate. Dev-only — the
 * real deploy uses Replit's Postgres.
 */
import { PGlite } from "@electric-sql/pglite";
import { PGLiteSocketServer } from "@electric-sql/pglite-socket";

const PORT = Number(process.env.DEV_DB_PORT ?? 5433);
const DATA_DIR = process.env.DEV_DB_DIR ?? ".pgdata";

const db = await PGlite.create({ dataDir: DATA_DIR });
const server = new PGLiteSocketServer({ db, port: PORT, host: "127.0.0.1" });
await server.start();

console.log(`\n  Postgres (PGlite) ready on 127.0.0.1:${PORT}  ·  data: ${DATA_DIR}/`);
console.log(`  DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:${PORT}/postgres"\n`);
console.log("  Leave this running. Next: `npm run db:push`, then `npm run dev`.\n");

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, async () => {
    await server.stop();
    await db.close();
    process.exit(0);
  });
}
