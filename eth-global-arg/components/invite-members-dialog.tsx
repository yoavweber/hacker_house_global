"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, UserPlus, Users } from "lucide-react"

interface Friend {
  id: string
  name: string
  avatar: string
  skills: string[]
  onchainScore: number
  isInvited?: boolean
}

const mockFriends: Friend[] = [
  {
    id: "1",
    name: "Alice.eth",
    avatar: "👩‍💻",
    skills: ["Solidity", "DeFi", "Smart Contracts"],
    onchainScore: 850,
  },
  {
    id: "2",
    name: "Bob.eth",
    avatar: "🎨",
    skills: ["Frontend", "Design", "React"],
    onchainScore: 720,
  },
  {
    id: "3",
    name: "Charlie.eth",
    avatar: "🔬",
    skills: ["Backend", "Testing", "DevOps"],
    onchainScore: 890,
  },
  {
    id: "4",
    name: "Diana.eth",
    avatar: "💎",
    skills: ["Web3", "NFTs", "TypeScript"],
    onchainScore: 760,
  },
  {
    id: "5",
    name: "Eve.eth",
    avatar: "🚀",
    skills: ["Solidity", "Backend", "Smart Contracts"],
    onchainScore: 810,
  },
]

interface InviteMembersDialogProps {
  houseId: string
  houseName: string
}

export function InviteMembersDialog({
  houseId,
  houseName,
}: InviteMembersDialogProps) {
  const [open, setOpen] = useState(false)
  const [invitedFriends, setInvitedFriends] = useState<Set<string>>(new Set())

  const toggleInvite = (friendId: string) => {
    setInvitedFriends((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(friendId)) {
        newSet.delete(friendId)
      } else {
        newSet.add(friendId)
      }
      return newSet
    })
  }

  const handleSendInvites = () => {
    // TODO: Implement send invites logic
    console.log("Sending invites to:", Array.from(invitedFriends))
    console.log("For house:", houseId)
    setOpen(false)
    setInvitedFriends(new Set())
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center justify-center w-full bg-chart-2 hover:bg-chart-2/80 text-primary-foreground font-mono text-sm h-10 rounded-md shadow-[0_0_15px_rgba(var(--chart-2),0.3)] hover:shadow-[0_0_25px_rgba(var(--chart-2),0.5)] transition-all">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90dvh] bg-card border-2 border-primary/30 p-0">
        <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 border-b border-primary/20">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-chart-2" />
            <DialogTitle className="text-lg sm:text-xl font-bold text-primary font-mono uppercase tracking-wider">
              Invite Members to {houseName}
            </DialogTitle>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-mono mt-2">
            Select friends from your network to invite
          </p>
        </DialogHeader>

        <ScrollArea className="max-h-[60dvh] px-4 sm:px-6">
          <div className="space-y-3 py-4">
            {mockFriends.map((friend) => {
              const isInvited = invitedFriends.has(friend.id)
              return (
                <div
                  key={friend.id}
                  onClick={() => toggleInvite(friend.id)}
                  className={`bg-card/10 hover:bg-card/20 border rounded-lg p-4 transition-all cursor-pointer ${
                    isInvited
                      ? "border-chart-2 shadow-[0_0_15px_rgba(var(--chart-2),0.3)]"
                      : "border-primary/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="text-3xl shrink-0">{friend.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-base sm:text-lg font-bold text-foreground font-mono">
                            {friend.name}
                          </h3>
                          <Badge className="bg-primary/10 text-primary border-primary/30 text-[10px] h-5">
                            {friend.onchainScore} pts
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {friend.skills.map((skill) => (
                            <Badge
                              key={skill}
                              className="bg-chart-2/10 text-chart-2 border-chart-2/30 text-[10px] h-5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                        isInvited
                          ? "bg-chart-2 border-chart-2"
                          : "border-primary/30"
                      }`}
                    >
                      {isInvited && (
                        <Check className="h-4 w-4 text-background" />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>

        <div className="px-4 sm:px-6 py-4 border-t border-primary/20 space-y-3">
          <div className="flex items-center justify-between text-sm font-mono">
            <span className="text-muted-foreground">Selected:</span>
            <span className="text-chart-2 font-bold">
              {invitedFriends.size}{" "}
              {invitedFriends.size === 1 ? "friend" : "friends"}
            </span>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 font-mono text-sm bg-card/10 hover:bg-card/20 border-muted"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSendInvites}
              disabled={invitedFriends.size === 0}
              className="flex-1 bg-chart-2 hover:bg-chart-2/80 text-primary-foreground font-mono text-sm shadow-[0_0_20px_rgba(var(--chart-2),0.4)] hover:shadow-[0_0_30px_rgba(var(--chart-2),0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send {invitedFriends.size > 0 && `(${invitedFriends.size})`}{" "}
              Invites
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
