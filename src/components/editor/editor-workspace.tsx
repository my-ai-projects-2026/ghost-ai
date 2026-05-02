"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

interface EditorWorkspaceProps {
  children: ReactNode;
}

export function EditorWorkspace({ children }: EditorWorkspaceProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-base">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen((current) => !current)}
      />

      <main className="relative flex min-h-0 flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <section className="relative flex flex-1 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top, color-mix(in srgb, var(--accent-ai) 12%, transparent), transparent 34%), radial-gradient(circle at left top, var(--accent-primary-dim), transparent 26%)",
            }}
          />

          <div className="relative flex flex-1">{children}</div>
        </section>
      </main>
    </div>
  );
}
