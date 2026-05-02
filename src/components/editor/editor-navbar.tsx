"use client";

import { UserButton } from "@clerk/nextjs";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  className?: string;
}

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header
      className={cn(
        "flex h-16 items-center border-b border-surface-border bg-surface/95 px-4 backdrop-blur",
        className,
      )}
    >
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="flex items-center">
          <Button
            aria-label={
              isSidebarOpen ? "Close projects sidebar" : "Open projects sidebar"
            }
            onClick={onSidebarToggle}
            size="icon"
            variant="ghost"
          >
            <SidebarIcon className="size-4" />
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-mono text-xs tracking-[0.24em] text-copy-faint uppercase">
            Editor Workspace
          </p>
        </div>
        <div className="flex items-center justify-end">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
