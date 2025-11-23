"use client"

import { useAccount } from "wagmi"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isConnected, isConnecting } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!isConnecting && !isConnected) {
      router.push("/login")
    }
  }, [isConnected, isConnecting, router])

  if (isConnecting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (!isConnected) {
    return null
  }

  return <>{children}</>
}
