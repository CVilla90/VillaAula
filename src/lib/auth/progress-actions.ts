"use server";

import { getPrisma } from "@/lib/db";
import { getCurrentUser } from "./users";

/**
 * Server-persisted progress for signed-in users. Each is a no-op / empty when
 * there's no session, so the client can call them unconditionally in "server
 * mode" without extra guards. The `key` strings are the same ones used in
 * localStorage (see lib/progress.ts).
 */

export async function getProgressKeys(): Promise<string[]> {
  const user = await getCurrentUser();
  if (!user) return [];
  const rows = await getPrisma().progress.findMany({
    where: { userId: user.id },
    select: { key: true },
  });
  return rows.map((r) => r.key);
}

export async function addProgressKey(key: string): Promise<void> {
  const user = await getCurrentUser();
  if (!user || !key) return;
  await getPrisma().progress.upsert({
    where: { userId_key: { userId: user.id, key } },
    create: { userId: user.id, key },
    update: {},
  });
}

/** Merge a guest's local keys into the account on first sign-in; returns all keys. */
export async function mergeProgressKeys(keys: string[]): Promise<string[]> {
  const user = await getCurrentUser();
  if (!user) return [];
  const unique = [...new Set(keys.filter(Boolean))];
  if (unique.length) {
    await getPrisma().$transaction(
      unique.map((key) =>
        getPrisma().progress.upsert({
          where: { userId_key: { userId: user.id, key } },
          create: { userId: user.id, key },
          update: {},
        }),
      ),
    );
  }
  return getProgressKeys();
}
