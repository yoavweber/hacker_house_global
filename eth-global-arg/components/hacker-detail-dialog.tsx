import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Eye, MapPin, Trophy, Zap } from "lucide-react"

interface Hacker {
  id: number
  name: string
  avatar: string
  location: string
  role: string
  tags: string[]
  rank: number
  poaps: number
  bio: string
  matchScore: number
}

interface HackerDetailDialogProps {
  hacker: Hacker
  selectedTags: string[]
}

export function HackerDetailDialog({
  hacker,
  selectedTags,
}: HackerDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="flex-1 bg-card/10 hover:bg-card/20 border border-chart-2 text-chart-2"
        >
          <Eye className="h-3 w-3 mr-1" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.4)] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-primary font-mono uppercase tracking-wider">
            Hacker Profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* Profile Header */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-primary/20">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md" />
              <img
                src={hacker.avatar}
                alt={hacker.name}
                className="relative w-20 h-20 sm:w-24 sm:h-24 object-cover"
              />
            </div>

            <div className="text-center space-y-1 sm:space-y-2 w-full px-2">
              <h3 className="text-lg sm:text-xl font-bold text-foreground wrap-break-word">
                {hacker.name}
              </h3>
              <p className="text-xs sm:text-sm text-chart-2 font-medium">
                {hacker.role}
              </p>
              <div className="flex items-center gap-2 justify-center text-muted-foreground text-xs sm:text-sm">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                <span className="wrap-break-word">{hacker.location}</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              About
            </p>
            <p className="text-xs sm:text-sm text-foreground bg-card/20 border border-primary/10 rounded-lg p-2 sm:p-3">
              {hacker.bio}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-card/20 border border-primary/20 rounded-lg p-2 sm:p-3">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                  Global Rank
                </p>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-primary">
                #{hacker.rank}
              </p>
            </div>

            <div className="bg-card/20 border border-chart-2/20 rounded-lg p-2 sm:p-3">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-chart-2 shrink-0" />
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                  POAPs
                </p>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-chart-2">
                {hacker.poaps}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Skills & Expertise
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {hacker.tags.map((tag) => (
                <Badge
                  key={tag}
                  className={`text-xs ${
                    selectedTags.includes(tag)
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                      : "bg-card/20 text-foreground border-primary/30"
                  }`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Mock POAPs Section */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Recent Achievements
              </p>
            </div>
            <ScrollArea className="w-[350px] whitespace-nowrap pb-1">
              <div className="flex gap-2 sm:gap-3 py-2">
                {Array.from({ length: Math.min(hacker.poaps, 8) }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-primary/20 to-chart-2/20 rounded-full border-2 border-primary/30 flex items-center justify-center"
                    >
                      <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-primary/50" />
                    </div>
                  )
                )}
              </div>
              <ScrollBar orientation="horizontal" className="bg-primary/10" />
            </ScrollArea>
          </div>

          {/* Action Button */}
          <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-mono text-xs sm:text-sm h-10 sm:h-12 shadow-[0_0_20px_rgba(var(--primary),0.4)]">
            Invite to Hacker House
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
