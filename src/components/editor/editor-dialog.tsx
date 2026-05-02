"use client";

import type * as React from "react";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function EditorDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof DialogContent>) {
  return (
    <DialogContent
      className={cn(
        "rounded-3xl border border-surface-border bg-elevated p-0 text-copy-primary shadow-[0_32px_96px_rgb(0_0_0_/_0.5)]",
        className,
      )}
      {...props}
    />
  );
}

function EditorDialogHeader({
  className,
  ...props
}: React.ComponentProps<typeof DialogHeader>) {
  return (
    <DialogHeader
      className={cn(
        "gap-2 border-b border-surface-border px-6 py-5",
        className,
      )}
      {...props}
    />
  );
}

function EditorDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogTitle>) {
  return (
    <DialogTitle
      className={cn("text-lg font-medium text-copy-primary", className)}
      {...props}
    />
  );
}

function EditorDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogDescription>) {
  return (
    <DialogDescription
      className={cn("text-sm leading-6 text-copy-muted", className)}
      {...props}
    />
  );
}

function EditorDialogFooter({
  className,
  ...props
}: React.ComponentProps<typeof DialogFooter>) {
  return (
    <DialogFooter
      className={cn(
        "rounded-b-3xl border-surface-border bg-subtle/60 px-6 py-4",
        className,
      )}
      {...props}
    />
  );
}

export {
  EditorDialogContent,
  EditorDialogDescription,
  EditorDialogFooter,
  EditorDialogHeader,
  EditorDialogTitle,
};
