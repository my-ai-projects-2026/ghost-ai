import { dark } from "@clerk/ui/themes";

function normalizeClerkPath(value: string | undefined, fallback: string) {
  if (!value) {
    return fallback;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    try {
      const { pathname } = new URL(value);
      return pathname || fallback;
    } catch {
      return fallback;
    }
  }

  return value.startsWith("/") ? value : `/${value}`;
}

export const clerkSignInPath = normalizeClerkPath(
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  "/sign-in",
);

export const clerkSignUpPath = normalizeClerkPath(
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  "/sign-up",
);

export const editorPath = "/editor";

export const clerkAppearance = {
  theme: dark,
  variables: {
    borderRadius: "var(--radius)",
    colorBackground: "var(--bg-surface)",
    colorDanger: "var(--state-error)",
    colorForeground: "var(--text-primary)",
    colorInput: "var(--bg-subtle)",
    colorInputForeground: "var(--text-primary)",
    colorModalBackdrop: "color-mix(in srgb, var(--bg-base), transparent 24%)",
    colorMuted: "var(--bg-subtle)",
    colorMutedForeground: "var(--text-secondary)",
    colorNeutral: "var(--text-primary)",
    colorPrimary: "var(--accent-primary)",
    colorPrimaryForeground: "var(--bg-base)",
    colorRing: "color-mix(in srgb, var(--accent-primary), transparent 50%)",
    fontFamily: "var(--font-geist-sans)",
    fontFamilyButtons: "var(--font-geist-sans)",
  },
  elements: {
    cardBox: "rounded-3xl border border-surface-border bg-surface shadow-none",
    footer: "bg-transparent",
    formButtonPrimary: "shadow-none",
    formFieldInput:
      "border border-surface-border bg-subtle text-copy-primary shadow-none",
    formFieldLabel: "text-copy-secondary",
    footerActionLink: "text-brand",
    identityPreviewText: "text-copy-primary",
    identityPreviewEditButton: "text-brand",
    socialButtonsBlockButton:
      "border border-surface-border bg-subtle text-copy-primary shadow-none",
  },
} as const;
