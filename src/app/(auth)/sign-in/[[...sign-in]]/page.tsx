import { SignIn } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkSignInPath, editorPath } from "@/lib/clerk";

export default function SignInPage() {
  return (
    <AuthShell
      mode="sign-in"
      subtitle="Use your account to access projects, collaborators, and the shared editor."
      title="Sign in"
    >
      <SignIn
        fallbackRedirectUrl={editorPath}
        path={clerkSignInPath}
        routing="path"
      />
    </AuthShell>
  );
}
