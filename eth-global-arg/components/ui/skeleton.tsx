import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-card/20 border border-primary/10 animate-pulse rounded-md relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-primary/10 before:to-transparent before:animate-shimmer",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
