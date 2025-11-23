"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-card/10 border border-primary/20 inline-flex h-9 w-fit items-center justify-center rounded-lg p-1 gap-1",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-7 flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium font-mono text-muted-foreground whitespace-nowrap transition-all",
        "hover:text-foreground",
        "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border data-[state=active]:border-primary/30 data-[state=active]:shadow-[0_0_10px_rgba(var(--primary),0.2)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
