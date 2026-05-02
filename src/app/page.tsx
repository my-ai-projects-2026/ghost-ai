import {
  Layers3,
  MessageSquareText,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const activityItems = [
  "Imported monolith starter template",
  "Queued AI architecture generation",
  "Canvas presence synced for 3 collaborators",
  "Spec draft persisted to artifact storage",
  "Workspace sidebar palette reviewed",
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at top, color-mix(in srgb, var(--accent-ai) 16%, transparent), transparent 40%), radial-gradient(circle at left top, var(--accent-primary-dim), transparent 30%)",
        }}
      />

      <section className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 lg:px-10">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-medium tracking-[0.24em] text-copy-secondary uppercase">
            <Sparkles className="size-3.5 text-brand" />
            Design System In Progress
          </span>
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading text-4xl leading-tight font-semibold text-copy-primary sm:text-5xl">
              Ghost AI dark workspace primitives are wired and ready to build
              on.
            </h1>
            <p className="text-base leading-7 text-copy-secondary sm:text-lg">
              The requested shadcn components, `lucide-react`, and shared `cn()`
              utility are installed and themed against the app&apos;s dark token
              system.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">
              <WandSparkles />
              Generate Architecture
            </Button>
            <Button variant="outline" size="lg">
              <Layers3 />
              Browse Templates
            </Button>
            <Dialog>
              <DialogTrigger render={<Button variant="secondary" size="lg" />}>
                <MessageSquareText />
                Open AI Prompt
              </DialogTrigger>
              <DialogContent className="rounded-3xl border border-surface-border bg-elevated">
                <DialogHeader>
                  <DialogTitle>Design Prompt</DialogTitle>
                  <DialogDescription>
                    Prompt the agent to create the first pass of a collaborative
                    system map.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <Input
                    defaultValue="Real-time architecture workspace for AI-assisted system design"
                    aria-label="Project summary"
                  />
                  <Textarea
                    aria-label="Prompt"
                    defaultValue="Generate a secure, collaborative system design with auth, project management, a real-time canvas, background AI workflows, and spec generation."
                  />
                </div>
                <DialogFooter showCloseButton>
                  <Button>Run generation</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-2xl border border-surface-border bg-surface/90 shadow-[0_0_0_1px_var(--border-default)] backdrop-blur">
            <CardHeader className="border-b border-surface-border">
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>
                Inputs, tabs, and surface treatments inherit the Ghost AI dark
                theme without falling back to light defaults.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Tabs defaultValue="canvas">
                <TabsList>
                  <TabsTrigger value="canvas">Canvas</TabsTrigger>
                  <TabsTrigger value="spec">Spec</TabsTrigger>
                  <TabsTrigger value="presence">Presence</TabsTrigger>
                </TabsList>
                <TabsContent value="canvas" className="space-y-4 pt-4">
                  <Input placeholder="Name this architecture workspace" />
                  <Textarea placeholder="Describe the system you want Ghost AI to map onto the shared canvas." />
                </TabsContent>
                <TabsContent value="spec" className="space-y-4 pt-4">
                  <div className="rounded-2xl border border-surface-border bg-base p-4">
                    <p className="font-mono text-sm leading-7 text-copy-secondary">
                      # Architecture Summary
                      <br />- Shared React Flow canvas
                      <br />- Durable AI workflows
                      <br />- Blob-backed canvas snapshots and specs
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="presence" className="space-y-4 pt-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="default">Owner online</Button>
                    <Button variant="secondary">2 collaborators</Button>
                    <Button variant="ghost">Live cursors enabled</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="border-surface-border bg-subtle/60">
              <p className="text-sm text-copy-muted">
                Theme tokens are exposed as Tailwind utilities like `bg-base`,
                `text-copy-primary`, and `border-surface-border`.
              </p>
            </CardFooter>
          </Card>

          <Card className="rounded-2xl border border-surface-border bg-surface/90 shadow-[0_0_0_1px_var(--border-default)] backdrop-blur">
            <CardHeader className="border-b border-surface-border">
              <CardTitle>Workspace Feed</CardTitle>
              <CardDescription>
                Scroll area is installed and ready for activity streams, side
                panels, and inspector content.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ScrollArea className="h-72 rounded-2xl border border-surface-border bg-base">
                <div className="space-y-3 p-4">
                  {activityItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-surface-border bg-surface px-4 py-3"
                    >
                      <p className="text-sm font-medium text-copy-primary">
                        {item}
                      </p>
                      <p className="mt-1 text-xs tracking-[0.18em] text-copy-faint uppercase">
                        design system foundation
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between border-surface-border bg-subtle/60">
              <span className="text-sm text-copy-muted">
                `cn()` now merges utility classes safely.
              </span>
              <Button variant="outline">Open logs</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
