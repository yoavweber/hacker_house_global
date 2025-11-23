"use client"

import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useGetAllPoapsByAddress } from "@/services/api/poap"
import { useGetProfileTalentProtocol } from "@/services/api/talent-protocol"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Trophy,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useAccount } from "wagmi"
import { useState } from "react"
import { ProfileSkeleton } from "./profile-skeleton"
import { PoapSkeleton } from "./poap-skeleton"

export default function ProfilePage() {
  const { address } = useAccount()
  const { data, isLoading: isPoapLoading } = useGetAllPoapsByAddress()
  const { data: talentProtocolData, isLoading: isProfileLoading } =
    useGetProfileTalentProtocol()

  const profile = talentProtocolData?.profile
  const isLoading = isPoapLoading || isProfileLoading

  const avatars = [
    "/avatars/spr_cat_wcapsulebig_01.gif",
    "/avatars/spr_cat_wcapsulebig_02.gif",
    "/avatars/spr_cat_wcapsulebig_03.gif",
    "/avatars/spr_cat_wcapsulebig_04.gif",
    "/avatars/spr_cat_wcapsulebig_05.gif",
  ]

  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0)

  const nextAvatar = () => {
    setCurrentAvatarIndex((prev) => (prev + 1) % avatars.length)
  }

  const previousAvatar = () => {
    setCurrentAvatarIndex(
      (prev) => (prev - 1 + avatars.length) % avatars.length
    )
  }

  const formatIdentifier = (identifier?: string) => {
    if (identifier?.startsWith("0x")) {
      return `${identifier.slice(0, 6)}...${identifier.slice(-4)}`
    }
    return identifier
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/spr_catbig_background.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full ">
        {/* Header - Optimizado para móvil */}
        <header className="absolute top-0 right-0 p-2 h-14">
          <ConnectButton
            accountStatus={"avatar"}
            chainStatus={"none"}
            showBalance={false}
          />
        </header>

        <main className="px-2 space-y-4 max-w-2xl mx-auto h-dvh">
          <div className="flex flex-col justify-center items-center h-full">
            {/* Welcome Message */}
            <div className="mb-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <p className="text-xs font-mono uppercase tracking-widest text-primary">
                  System Online
                </p>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                Welcome, Builder
              </h1>
              <p className="text-sm text-muted-foreground font-mono">
                <span className="text-chart-2">▸</span> Initializing your cypher
                identity...
              </p>
            </div>

            {isLoading ? (
              // Loading Skeleton
              <ProfileSkeleton />
            ) : (
              // Actual Content
              <>
                <div className="grid grid-cols-3 gap-1 place-content-center">
                  <div className="text-center w-full flex gap-2 items-center flex-col justify-center">
                    {/* Player Info Header */}
                    <div className="relative">
                      <h2 className="text-xl font-bold truncate px-2 text-primary animate-pulse">
                        {profile?.display_name || profile?.name || "PLAYER_001"}
                      </h2>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                    </div>

                    {profile?.location && (
                      <p className="text-xs text-chart-2 font-medium">
                        📍 {profile.location}
                      </p>
                    )}
                    {profile?.ens && (
                      <p className="text-xs text-primary font-bold break-all px-2 bg-primary/10 py-1 rounded">
                        {profile.ens}
                      </p>
                    )}

                    {/* Stats Panel */}
                    <div className="w-full space-y-2">
                      {profile?.rank_position && (
                        <div className="relative overflow-hidden rounded-lg bg-linear-to-br from-chart-1/10 via-chart-2/10 to-chart-3/10 border border-primary/30 p-3">
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent animate-shimmer" />
                          <div className="relative flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                              <Zap className="h-5 w-5 text-primary animate-pulse" />
                            </div>
                            <div className="text-left flex-1">
                              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                                Global Rank
                              </p>
                              <p className="text-2xl font-bold text-primary">
                                #{profile.rank_position}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {profile?.onchain_since && (
                        <div className="px-3 py-2 bg-card/20 border border-border rounded-md">
                          <p className="text-[10px] text-chart-3 font-mono uppercase tracking-widest">
                            ⚡ ONCHAIN SINCE{" "}
                            {new Date(profile.onchain_since).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-card/20 border border-primary/20 rounded-md font-mono text-xs">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </div>

                    <img
                      src={avatars[currentAvatarIndex]}
                      alt="Profile Avatar"
                      className="h-full w object-cover mb-0"
                    />

                    <div className="flex gap-2">
                      {/* Avatar Navigation Arrows */}
                      <button
                        onClick={previousAvatar}
                        className="p-1 bg-card/10 hover:bg-card/20 border-2 border-primary text-primary rounded-lg shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] transition-all cursor-pointer"
                        aria-label="Previous avatar"
                      >
                        <ChevronLeft className="size-4" />
                      </button>

                      <button
                        onClick={nextAvatar}
                        className="p-1 bg-card/10 hover:bg-card/20 border-2 border-primary text-primary rounded-lg shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] transition-all cursor-pointer"
                        aria-label="Next avatar"
                      >
                        <ChevronRight className="size-4" />
                      </button>
                    </div>

                    {profile?.bio && (
                      <p className="text-sm text-center text-muted-foreground line-clamp-3 px-2">
                        {profile.bio}
                      </p>
                    )}

                    <div className="flex gap-1.5 flex-wrap justify-center">
                      {profile?.main_role && (
                        <Badge variant="default" className="text-xs">
                          {profile.main_role.charAt(0).toUpperCase() +
                            profile.main_role.slice(1)}
                        </Badge>
                      )}
                      {profile?.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {profile?.tags && profile.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{profile.tags.length - 3}
                        </Badge>
                      )}
                      {profile?.human_checkmark && (
                        <Badge
                          variant="secondary"
                          className="bg-green-500/10 text-green-500 text-xs"
                        >
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    {/* Connected Accounts */}
                    {profile?.accounts && profile.accounts.length > 0 && (
                      <div className="w-full space-y-1.5">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                          ⚡ Linked Accounts
                        </p>
                        {profile.accounts.slice(0, 3).map((account) => (
                          <div
                            key={account.identifier}
                            className="flex items-center gap-2 text-sm p-2 rounded bg-card/10 border border-primary/10 hover:border-primary/30 transition-colors min-w-0"
                          >
                            <Badge
                              variant="outline"
                              className="text-[10px] shrink-0 capitalize border-primary/30 text-primary"
                            >
                              {account.source}
                            </Badge>
                            <span className="text-muted-foreground flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-mono">
                              {formatIdentifier(account.username) ||
                                formatIdentifier(account.identifier)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full mt-6">
                  {/* POAP Section - All in One */}
                  {!data || data.length === 0 ? (
                    <div className="flex items-center justify-center gap-3 py-6 text-center rounded-lg bg-card/80">
                      <div className="relative">
                        <Trophy className="h-8 w-8 text-muted-foreground/50" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary/30 rounded-full animate-ping" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                          No Achievements Yet
                        </p>
                        <p className="text-xs text-muted-foreground font-mono">
                          <span className="text-chart-2">▸</span> Attend
                          hackathons to unlock POAPs
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-lg bg-indigo-950/80 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-primary animate-pulse shrink-0" />
                          <p className="text-xs font-medium text-primary capitalize tracking-wide">
                            Achievement Gallery
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="text-xs font-mono text-muted-foreground">
                            Total:
                          </p>
                          <p className="text-lg font-medium text-chart-2">
                            {data.length}
                          </p>
                        </div>
                      </div>
                      <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex gap-4 py-1">
                          {data.map((poap, index) => (
                            <div
                              key={poap.tokenId}
                              className="group relative flex flex-col items-center gap-2 transition-all active:scale-95 shrink-0"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="relative w-16 h-16">
                                <div className="absolute inset-0 bg-primary/20 rounded-full" />
                                <img
                                  src={poap.event.image_url}
                                  alt={poap.event.name}
                                  className="relative w-16 h-16 rounded-full object-cover"
                                />
                              </div>
                              <a
                                href={poap.event.event_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-primary rounded-full p-2"
                                title={poap.event.name}
                              >
                                <ExternalLink className="h-3 w-3 text-primary-foreground" />
                              </a>
                            </div>
                          ))}
                        </div>
                        <ScrollBar
                          orientation="horizontal"
                          className="bg-primary/10"
                        />
                      </ScrollArea>
                    </div>
                  )}

                  {/* POAP Section Skeleton */}
                  {isLoading && <PoapSkeleton />}
                </div>
              </>
            )}

            <div></div>

            {/* Action Buttons */}
            <div className="w-full mt-6 grid grid-cols-2 gap-3">
              <Link
                href={"/world"}
                className="w-full flex justify-center items-center bg-card/50 hover:bg-card/60 border-2 border-primary text-primary font-mono text-sm h-12 rounded-lg shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] transition-all uppercase tracking-wider"
              >
                🌍 Enter World
              </Link>

              <Link
                href={"/events"}
                className="w-full flex justify-center items-center bg-card/50 hover:bg-card/60 border-2 border-chart-2 text-chart-2 font-mono text-sm h-12 rounded-lg shadow-[0_0_15px_rgba(var(--chart-2),0.3)] hover:shadow-[0_0_25px_rgba(var(--chart-2),0.5)] transition-all uppercase tracking-wider"
              >
                🎯 Browse Events
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
