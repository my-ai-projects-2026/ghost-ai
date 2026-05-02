import { SignUp } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkSignUpPath, editorPath } from "@/lib/clerk";

export default function SignUpPage() {
  return (
    <AuthShell
      mode="sign-up"
      subtitle="Create an account to start protected architecture workspaces and collaboration."
      title="Create your account"
    >
      <SignUp
        fallbackRedirectUrl={editorPath}
        path={clerkSignUpPath}
        routing="path"
      />
    </AuthShell>
  );
}
