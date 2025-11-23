import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

interface BackButtonProps {
  location?: string | null
  event?: string | null
  fallbackUrl?: string
  label?: string
  className?: string
}

export function BackButton({
  location,
  event,
  fallbackUrl = "/world",
  label = "🌍 Back to Map",
  className = "bg-card/10 hover:bg-card/20 border-2 border-primary text-primary font-mono text-sm px-6 shadow-[0_0_15px_rgba(var(--primary),0.3)]",
}: BackButtonProps) {
  // Construct back URL with query params if they exist
  const backUrl =
    location || event
      ? `${fallbackUrl}?${new URLSearchParams({
          ...(location && { location }),
          ...(event && { event }),
        }).toString()}`
      : fallbackUrl

  return (
    <Link
      href={backUrl}
      className={buttonVariants({
        variant: "ghost",
        className,
      })}
    >
      {label}
    </Link>
  )
}
