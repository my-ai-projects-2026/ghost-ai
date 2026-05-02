"use client";

import { FolderKanban, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

interface SidebarEmptyStateProps {
  title: string;
  description: string;
}

function SidebarEmptyState({ title, description }: SidebarEmptyStateProps) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border-subtle bg-base/80 px-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl border border-surface-border bg-surface">
        <FolderKanban className="size-5 text-copy-muted" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-copy-primary">{title}</h3>
      <p className="mt-2 max-w-56 text-sm leading-6 text-copy-muted">
        {description}
      </p>
    </div>
  );
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={cn(
        "pointer-events-none absolute top-5 left-5 bottom-5 z-20 w-[min(24rem,calc(100vw-2.5rem))] transition-transform duration-300 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]",
        className,
      )}
    >
      <div className="pointer-events-auto flex h-full flex-col rounded-3xl border border-surface-border bg-elevated/90 shadow-[0_24px_80px_rgb(0_0_0_/_0.42)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-surface-border px-5 py-4">
          <div>
            <h2 className="font-heading text-lg font-medium text-copy-primary">
              Projects
            </h2>
            <p className="text-sm text-copy-muted">
              Switch workspaces without leaving the canvas.
            </p>
          </div>
          <Button
            aria-label="Close projects sidebar"
            onClick={onClose}
            size="icon-sm"
            variant="ghost"
          >
            <X className="size-4" />
          </Button>
        </div>

        <Tabs
          className="flex min-h-0 flex-1 flex-col px-5 py-5"
          defaultValue="my-projects"
        >
          <TabsList className="grid w-full grid-cols-2 bg-subtle">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex min-h-0 flex-1 pt-5">
            <SidebarEmptyState
              description="Projects you create will appear here once the data layer is connected."
              title="No personal projects yet"
            />
          </TabsContent>

          <TabsContent value="shared" className="flex min-h-0 flex-1 pt-5">
            <SidebarEmptyState
              description="Shared editor rooms will populate here when collaborators are added."
              title="No shared projects yet"
            />
          </TabsContent>
        </Tabs>

        <div className="border-t border-surface-border p-5">
          <Button className="w-full justify-center" size="lg">
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </div>
    </aside>
  );
}
