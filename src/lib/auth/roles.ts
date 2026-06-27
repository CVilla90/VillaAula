/**
 * Roles an admin can assign from /admin/users/[id] (HANDOFF §18.M interim). Kept
 * in a plain module (not the "use server" actions file, which may export only
 * async functions) so both the Server Action and the client form can import it.
 * `role` is a free string in the DB; this is just the set offered in the UI.
 */
export const ASSIGNABLE_ROLES = ["student", "ta", "teacher", "admin"] as const;
export type AssignableRole = (typeof ASSIGNABLE_ROLES)[number];
