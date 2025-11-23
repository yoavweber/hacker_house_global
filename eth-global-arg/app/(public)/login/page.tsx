"use client"

import { buttonVariants } from "@/components/ui/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { useAccount } from "wagmi"

export default function LoginPage() {
  const { isConnected } = useAccount()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 safe-area-inset">
      <main className="w-full max-w-md">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Animated Logo */}
          <img
            src={"/LOGO-export.gif"}
            alt="Hackathon Argentina Logo"
            className="w-40 h-40 animate-fade-in"
          />

          {/* Title and Description */}
          <div className="space-y-4 px-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              hackaton arg
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              Connect with hackers and join the largest blockchain hackathon
              community in Argentina. Build, collaborate, and showcase your
              projects.
            </p>
          </div>

          {/* Connect Button */}
          <div className="w-full px-4 pt-4 flex justify-center">
            <ConnectButton chainStatus={"none"} showBalance={true} />
          </div>

          {/* Navigation Buttons */}
          {isConnected && (
            <div className="w-full px-4 pt-6 flex flex-col gap-3">
              <Link
                href="/profile"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "w-full",
                })}
              >
                Go to Profile
              </Link>
              <Link
                href="/world"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full",
                })}
              >
                Explore World
              </Link>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
