import { Skeleton } from "@/components/ui/skeleton"

export function PoapSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-indigo-950/80 p-3">
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-5 w-12" />
      </div>
      <div className="flex gap-4 py-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-16 h-16 rounded-full shrink-0" />
        ))}
      </div>
    </div>
  )
}
