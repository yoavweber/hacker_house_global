import { Skeleton } from "@/components/ui/skeleton"

export function ProfileSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-1 place-content-center w-full">
      {/* Left Column Skeleton */}
      <div className="text-center w-full flex gap-2 items-center flex-col justify-center">
        <Skeleton className="h-6 w-40 mx-auto" />
        <Skeleton className="h-4 w-24 mx-auto" />
        <Skeleton className="h-5 w-32 mx-auto rounded" />

        <div className="w-full space-y-2 mt-2">
          <Skeleton className="h-24 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      </div>

      {/* Center Column Skeleton */}
      <div className="flex flex-col items-center space-y-3">
        <Skeleton className="h-6 w-32 rounded-md" />
        <Skeleton className="h-48 w-48 mx-auto" />

        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-8 w-8 rounded-lg" />
        </div>

        <Skeleton className="h-16 w-full" />

        <div className="flex gap-1.5 flex-wrap justify-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-16 rounded-full" />
          ))}
        </div>
      </div>

      {/* Right Column Skeleton */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-full space-y-1.5">
          <Skeleton className="h-4 w-32 mb-2" />
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded" />
          ))}
        </div>
      </div>
    </div>
  )
}
