"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { Toaster } from "@/components/ui/sonner"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./query-client"
import { WagmiProvider } from "wagmi"
import { wagmiConfig } from "@/wagmi-config"
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale="en-US"
          theme={darkTheme({
            accentColor: "oklch(0.541 0.281 293.009)",
            accentColorForeground: "oklch(0.969 0.016 293.756)",
            borderRadius: "medium",
          })}
        >
          {children}
          <Toaster richColors theme="dark" closeButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
