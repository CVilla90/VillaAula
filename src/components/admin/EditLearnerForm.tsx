"use client";

import { useActionState } from "react";
import {
  updateLearnerProfile,
  updateLearnerRole,
  type AdminActionState,
} from "@/lib/auth/admin-actions";
import { ASSIGNABLE_ROLES } from "@/lib/auth/roles";

/**
 * Admin-only "Edit details" panel on /admin/users/[id] (HANDOFF §18.L + §18.M).
 * Two small `useActionState` forms — one fixes name/email (the name prints on the
 * diploma), one tags a role. Both Server Actions re-check `requireAdmin()`.
 */
export default function EditLearnerForm({
  userId,
  name,
  email,
  role,
}: {
  userId: string;
  name: string | null;
  email: string | null;
  role: string;
}) {
  return (
    <section className="mt-10 rounded-2xl border border-line bg-paper p-5">
      <h2 className="font-display text-lg font-extrabold text-ink">
        Edit details
      </h2>
      <p className="mt-1 text-sm text-muted">
        Fix what a learner typed wrong. The <strong>name</strong> is what prints
        on their diploma. Username and password aren&apos;t editable here.
      </p>

      <ProfileForm userId={userId} name={name} email={email} />
      <div className="my-5 h-px bg-line" />
      <RoleForm userId={userId} role={role} />
    </section>
  );
}

function ProfileForm({
  userId,
  name,
  email,
}: {
  userId: string;
  name: string | null;
  email: string | null;
}) {
  const [state, action, pending] = useActionState<
    AdminActionState | undefined,
    FormData
  >(updateLearnerProfile, undefined);

  return (
    <form action={action} className="mt-5 space-y-3">
      <input type="hidden" name="userId" value={userId} />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field
          label="Name (on diploma)"
          name="name"
          defaultValue={name ?? ""}
          placeholder="Learner's name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          defaultValue={email ?? ""}
          placeholder="name@example.com"
        />
      </div>
      <Feedback state={state} />
      <SaveButton pending={pending} label="Save details" />
    </form>
  );
}

function RoleForm({ userId, role }: { userId: string; role: string }) {
  const [state, action, pending] = useActionState<
    AdminActionState | undefined,
    FormData
  >(updateLearnerRole, undefined);

  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="userId" value={userId} />
      <label className="block">
        <span className="text-xs font-semibold text-muted">Role</span>
        <select
          name="role"
          defaultValue={ASSIGNABLE_ROLES.includes(
            role as (typeof ASSIGNABLE_ROLES)[number],
          )
            ? role
            : "student"}
          className="mt-1 w-full rounded-xl border border-line bg-cream/40 px-4 py-2.5 text-ink outline-none transition focus:border-coral sm:w-56"
        >
          {ASSIGNABLE_ROLES.map((r) => (
            <option key={r} value={r}>
              {ROLE_LABELS[r]}
            </option>
          ))}
        </select>
      </label>
      <p className="text-xs text-muted">
        Tags trusted people now (Teacher / TA). Full per-role privileges land
        with the content-bank migration. <strong>Admin</strong> grants full
        access right away.
      </p>
      <Feedback state={state} />
      <SaveButton pending={pending} label="Update role" />
    </form>
  );
}

const ROLE_LABELS: Record<(typeof ASSIGNABLE_ROLES)[number], string> = {
  student: "Student",
  ta: "TA / Assistant",
  teacher: "Teacher / Professor",
  admin: "Admin",
};

function Field({
  label,
  name,
  type = "text",
  defaultValue,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted">{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-line bg-cream/40 px-4 py-2.5 text-ink outline-none transition focus:border-coral"
      />
    </label>
  );
}

function Feedback({ state }: { state: AdminActionState | undefined }) {
  if (state?.error) {
    return (
      <p className="rounded-xl bg-coral/10 px-3 py-2.5 text-sm font-medium text-coral-deep">
        {state.error}
      </p>
    );
  }
  if (state?.ok) {
    return (
      <p className="rounded-xl bg-teal/10 px-3 py-2.5 text-sm font-medium text-teal">
        {state.ok}
      </p>
    );
  }
  return null;
}

function SaveButton({ pending, label }: { pending: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white transition enabled:hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Saving…" : label}
    </button>
  );
}
