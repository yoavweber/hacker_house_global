"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PageHeader } from "@/components/page-header"
import { HackerCard } from "@/components/hacker-card"
import { HackerDetailDialog } from "@/components/hacker-detail-dialog"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageSquare,
  Trophy,
  Users,
  UserMinus,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock data - estos serían los hackers con los que hiciste connect
const myConnections = [
  {
    id: 1,
    name: "Alice Builder",
    avatar: "/avatars/spr_cat_wcapsulebig_01.gif",
    location: "Buenos Aires, Argentina",
    role: "Full Stack Developer",
    tags: ["Solidity", "React", "DeFi"],
    rank: 156,
    poaps: 23,
    bio: "Building the future of web3, one block at a time",
    connectedAt: "2024-11-15",
    status: "accepted" as const,
    matchScore: 95,
  },
  {
    id: 2,
    name: "Bob Hacker",
    avatar: "/avatars/spr_cat_wcapsulebig_02.gif",
    location: "Bangkok, Thailand",
    role: "Smart Contract Dev",
    tags: ["Solidity", "Rust", "NFTs"],
    rank: 234,
    poaps: 18,
    bio: "Passionate about decentralized systems",
    connectedAt: "2024-11-18",
    status: "pending" as const,
    matchScore: 88,
  },
  {
    id: 3,
    name: "Diana Dev",
    avatar: "/avatars/spr_cat_wcapsulebig_03.gif",
    location: "Prague, Czech Republic",
    role: "Backend Engineer",
    tags: ["Node.js", "GraphQL", "IPFS"],
    rank: 312,
    poaps: 20,
    bio: "Decentralization advocate",
    connectedAt: "2024-11-20",
    status: "accepted" as const,
    matchScore: 78,
  },
  {
    id: 4,
    name: "Carlos Chain",
    avatar: "/avatars/spr_cat_wcapsulebig_04.gif",
    location: "Denver, USA",
    role: "Blockchain Architect",
    tags: ["Ethereum", "Smart Contracts", "Security"],
    rank: 89,
    poaps: 31,
    bio: "Securing the decentralized future with robust architecture",
    connectedAt: "2024-11-10",
    status: "accepted" as const,
    matchScore: 92,
  },
  {
    id: 5,
    name: "Emma Ethereum",
    avatar: "/avatars/spr_cat_wcapsulebig_05.gif",
    location: "Brussels, Belgium",
    role: "Product Designer",
    tags: ["UI/UX", "Figma", "Web3"],
    rank: 445,
    poaps: 16,
    bio: "Designing intuitive experiences for the metaverse",
    connectedAt: "2024-11-22",
    status: "pending" as const,
    matchScore: 75,
  },
  {
    id: 6,
    name: "Frank Protocol",
    avatar: "/avatars/spr_cat_wcapsulebig_01.gif",
    location: "Singapore",
    role: "DeFi Specialist",
    tags: ["DeFi", "Yield", "Liquidity"],
    rank: 203,
    poaps: 27,
    bio: "Optimizing yields and building sustainable DeFi protocols",
    connectedAt: "2024-11-08",
    status: "accepted" as const,
    matchScore: 87,
  },
  {
    id: 7,
    name: "Grace Gateway",
    avatar: "/avatars/spr_cat_wcapsulebig_02.gif",
    location: "Tokyo, Japan",
    role: "DevRel Engineer",
    tags: ["Community", "Documentation", "TypeScript"],
    rank: 567,
    poaps: 19,
    bio: "Bridging developers and protocols through education",
    connectedAt: "2024-11-12",
    status: "accepted" as const,
    matchScore: 81,
  },
  {
    id: 8,
    name: "Henry Hash",
    avatar: "/avatars/spr_cat_wcapsulebig_03.gif",
    location: "Berlin, Germany",
    role: "Security Researcher",
    tags: ["Security", "Audits", "Cryptography"],
    rank: 178,
    poaps: 25,
    bio: "Finding vulnerabilities before the bad actors do",
    connectedAt: "2024-11-05",
    status: "pending" as const,
    matchScore: 84,
  },
]

export default function MatchesPage() {
  const [connections, setConnections] = useState(myConnections)

  const handleDisconnect = (id: number) => {
    setConnections((prev) => prev.filter((conn) => conn.id !== id))
  }

  return (
    <div className="min-h-dvh max-w-6xl mx-auto p-4 space-y-3">
      {/* Header */}
      <div className="space-y-4">
        <PageHeader
          icon={Heart}
          title="Your Squad"
          subtitle="Your connected hackers"
          customTrigger={
            <Link href="/find-hackers">
              <Button className="bg-card/10 hover:bg-card/20 border-2 border-primary text-primary font-mono text-sm px-6 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                + Find More
              </Button>
            </Link>
          }
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card/10 border border-primary/20 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <p className="text-xs text-muted-foreground">Total Connections</p>
            </div>
            <p className="text-2xl font-bold text-primary mt-1">
              {connections.length}
            </p>
          </div>
          <div className="bg-card/10 border border-chart-2/20 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-chart-2" />
              <p className="text-xs text-muted-foreground">Active Chats</p>
            </div>
            <p className="text-2xl font-bold text-chart-2 mt-1">
              {Math.floor(connections.length * 0.7)}
            </p>
          </div>
          <div className="bg-card/10 border border-chart-3/20 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-chart-3" />
              <p className="text-xs text-muted-foreground">Shared Events</p>
            </div>
            <p className="text-2xl font-bold text-chart-3 mt-1">
              {Math.floor(connections.length * 1.5)}
            </p>
          </div>
        </div>
      </div>

      {/* Connections List */}
      {connections.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <Heart className="h-16 w-16 text-muted-foreground/50 mx-auto" />
          <div>
            <p className="text-xl font-bold text-muted-foreground">
              No connections yet
            </p>
            <p className="text-sm text-muted-foreground font-mono mt-2">
              <span className="text-chart-2">▸</span> Start connecting with
              hackers to build your squad
            </p>
          </div>
          <Link href="/find-hackers">
            <Button className="bg-primary/10 hover:bg-primary/20 border-2 border-primary text-primary font-mono text-sm px-8 py-6 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
              Find Hackers
            </Button>
          </Link>
        </div>
      ) : (
        <ScrollArea className="h-[calc(100dvh-220px)]">
          <div className="space-y-3 pr-3">
            {connections.map((hacker, index) => (
              <HackerCard
                key={hacker.id}
                hacker={hacker}
                index={index}
                avatarBadge={
                  hacker.status === "pending" ? (
                    <div className="absolute -top-2 -right-2 bg-chart-2 text-primary-foreground p-1 rounded-full animate-pulse">
                      <Clock className="h-3 w-3" />
                    </div>
                  ) : (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground p-1 rounded-full">
                      <Heart className="h-3 w-3 fill-current" />
                    </div>
                  )
                }
                actionButtons={
                  <div className="flex gap-2 flex-1">
                    {hacker.status === "pending" ? (
                      <Badge
                        variant="outline"
                        className="flex-1 justify-center bg-chart-2/10 text-chart-2 border-chart-2/30 font-mono text-xs py-2"
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        Pending Approval
                      </Badge>
                    ) : (
                      <>
                        <HackerDetailDialog
                          hacker={hacker}
                          selectedTags={[]}
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDisconnect(hacker.id)}
                          className="bg-card/10 hover:bg-card/20 border border-muted-foreground/30 text-muted-foreground hover:border-red-500/50 hover:text-red-500"
                        >
                          <UserMinus className="h-3 w-3" />
                        </Button>
                      </>
                    )}
                  </div>
                }
                extraInfo={
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <p className="text-[10px] text-muted-foreground font-mono">
                      {hacker.status === "pending" ? "Sent" : "Connected"} on{" "}
                      {new Date(hacker.connectedAt).toLocaleDateString()}
                    </p>
                    {hacker.status === "pending" && (
                      <Badge
                        variant="secondary"
                        className="text-[10px] bg-chart-2/10 text-chart-2 border-chart-2/30"
                      >
                        Awaiting Response
                      </Badge>
                    )}
                  </div>
                }
              />
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
