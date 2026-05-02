import { Check } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { clerkSignInPath, clerkSignUpPath } from "@/lib/clerk";

interface AuthShellProps {
  title: string;
  subtitle: string;
  mode: "sign-in" | "sign-up";
  children: ReactNode;
}

const featureLines = [
  "Protected architecture workspaces",
  "Real-time collaborative editing",
  "AI-assisted system design generation",
];

export function AuthShell({ title, subtitle, mode, children }: AuthShellProps) {
  const alternateHref = mode === "sign-in" ? clerkSignUpPath : clerkSignInPath;
  const alternateLabel =
    mode === "sign-in" ? "Create an account" : "Back to sign in";

  return (
    <main className="grid min-h-screen bg-base lg:grid-cols-2">
      <section className="hidden flex-col justify-between border-r border-surface-border bg-surface px-10 py-10 lg:flex">
        <div className="space-y-10">
          <div className="space-y-4">
            <Link
              className="inline-flex items-center rounded-full border border-surface-border bg-base px-3 py-1 font-mono text-xs tracking-[0.22em] text-copy-secondary uppercase"
              href={clerkSignInPath}
            >
              Ghost AI
            </Link>
            <div className="space-y-3">
              <h1 className="font-heading max-w-xl text-4xl leading-tight font-semibold text-copy-primary">
                Collaborative system design, without the setup overhead.
              </h1>
              <p className="max-w-md text-base leading-8 text-copy-secondary">
                Sign in to open your protected editor workspace and continue
                building technical architecture with your team.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {featureLines.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 border-b border-surface-border pb-4 text-sm text-copy-secondary"
              >
                <span className="flex size-7 items-center justify-center rounded-full border border-surface-border bg-elevated">
                  <Check className="size-4 text-brand" />
                </span>
                <span className="text-base text-copy-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          className="font-mono text-sm font-medium text-brand transition-opacity hover:opacity-80"
          href={alternateHref}
        >
          {alternateLabel}
        </Link>
      </section>

      <section className="flex items-center justify-center bg-elevated/95 px-5 py-10 sm:px-8">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="font-heading text-3xl font-semibold text-copy-primary">
              {title}
            </h2>
            <p className="text-base leading-7 text-copy-secondary">
              {subtitle}
            </p>
          </div>

          {children}

          <div className="text-center text-sm text-copy-muted lg:hidden">
            <Link
              className="font-mono font-medium text-brand"
              href={alternateHref}
            >
              {alternateLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
