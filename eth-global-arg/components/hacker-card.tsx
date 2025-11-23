import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy, Zap } from "lucide-react"
import { ReactNode } from "react"

interface HackerCardProps {
  hacker: {
    id: number
    name: string
    avatar: string
    location: string
    role: string
    tags: string[]
    rank: number
    poaps: number
    bio: string
  }
  index: number
  avatarBadge?: ReactNode
  selectedTags?: string[]
  actionButtons: ReactNode
  extraInfo?: ReactNode
}

export function HackerCard({
  hacker,
  index,
  avatarBadge,
  selectedTags = [],
  actionButtons,
  extraInfo,
}: HackerCardProps) {
  return (
    <div
      className="bg-card/10 border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src={hacker.avatar}
              alt={hacker.name}
              className="relative w-20 h-20 object-cover"
            />
            {avatarBadge}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground truncate">
                    {hacker.name}
                  </h3>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <p className="text-xs text-primary font-medium">
                  {hacker.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{hacker.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-chart-3" />
            <span>Rank #{hacker.rank}</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="h-3 w-3 text-chart-2" />
            <span>{hacker.poaps} POAPs</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground line-clamp-1">
              {hacker.bio}
            </p>
            <div className="flex flex-wrap gap-1">
              {hacker.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`text-xs ${
                    selectedTags.includes(tag)
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : ""
                  }`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {actionButtons}
        </div>

        {extraInfo}
      </div>
    </div>
  )
}
