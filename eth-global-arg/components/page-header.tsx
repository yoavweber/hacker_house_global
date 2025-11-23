import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

interface PageHeaderProps {
  icon: LucideIcon
  title: string
  subtitle: string
  customTrigger?: ReactNode
}

export function PageHeader({
  icon: Icon,
  title,
  subtitle,
  customTrigger,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/20 rounded-lg border-2 border-primary">
          <Icon className="h-6 w-6 text-primary animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-foreground">{title}</h1>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-chart-2">▸</span> {subtitle}
          </p>
        </div>
      </div>
      {customTrigger}
    </div>
  )
}
