import { loginAction } from "@/lib/auth/actions";
import { authConfigured } from "@/lib/auth/session";
import { googleConfigured, safeNext } from "@/lib/auth/google";
import { getCurrentUser } from "@/lib/auth/users";
import AuthForm from "@/components/auth/AuthForm";
import AuthShell, { authErrorMessage } from "@/components/auth/AuthShell";
import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const next = safeNext(sp.next);

  // Already signed in → skip the form.
  if (authConfigured() && (await getCurrentUser())) redirect(next);

  return (
    <AuthShell>
      <AuthForm
        mode="login"
        action={loginAction}
        next={next}
        googleEnabled={googleConfigured()}
        authEnabled={authConfigured()}
        initialError={authErrorMessage(sp.error)}
      />
    </AuthShell>
  );
}
