import type { ReactNode } from "react";

import { EditorWorkspace } from "@/components/editor/editor-workspace";

interface WorkspaceLayoutProps {
  children: ReactNode;
}

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  return <EditorWorkspace>{children}</EditorWorkspace>;
}
