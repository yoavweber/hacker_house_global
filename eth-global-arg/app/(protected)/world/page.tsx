"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"

interface Event {
  name: string
  x: number // percentage from left
  y: number // percentage from top
  location: string
  date?: string
}

const events: Event[] = [
  {
    name: "ETH Global Buenos Aires",
    x: 28,
    y: 70,
    location: "Buenos Aires",
    date: "Dec 2024",
  },
  {
    name: "Devcon Bangkok",
    x: 72,
    y: 52,
    location: "Bangkok",
    date: "Nov 2024",
  },
  {
    name: "ETH Denver",
    x: 18,
    y: 38,
    location: "Denver",
    date: "Feb 2025",
  },
  {
    name: "ETH Prague",
    x: 52,
    y: 32,
    location: "Prague",
    date: "May 2025",
  },
  {
    name: "ETH CC",
    x: 50,
    y: 30,
    location: "Brussels",
    date: "Jul 2025",
  },
  {
    name: "Blockchain Conference",
    x: 78,
    y: 40,
    location: "Pyongyang",
    date: "Mar 2025",
  },
]

export default function WorldPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-linear-to-b from-background to-transparent py-3 sm:py-4 px-4 sm:px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto gap-2">
          <Link
            href="/profile"
            className="bg-card hover:bg-card/80 border-2 border-primary text-primary font-mono text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-2 rounded-md shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all shrink-0"
          >
            ← Back
          </Link>
          <h1 className="text-base sm:text-2xl font-bold text-primary tracking-wider font-mono uppercase text-center">
            Event Map
          </h1>
          <Link
            href="/events"
            className="bg-card hover:bg-card/80 border-2 border-chart-2 text-chart-2 font-mono text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-2 rounded-md shadow-[0_0_15px_rgba(var(--chart-2),0.3)] transition-all shrink-0"
          >
            Events →
          </Link>
        </div>
      </div>

      {/* Mobile Scroll Hint */}
      <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-card border-2 border-primary px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(var(--primary),0.4)] animate-pulse">
          <p className="text-primary font-mono text-xs">
            ← Scroll to explore →
          </p>
        </div>
      </div>

      {/* Map Container */}
      <ScrollArea className="h-full w-full pt-14 sm:pt-20">
        <div className="relative min-w-max h-full">
          {/* World Map Background */}
          <div className="relative h-screen">
            <img
              src="/spr_world_wip-export.png"
              alt="World Map"
              className="h-full w-auto object-cover"
            />

            {/* Event Markers */}
            {events.map((event) => (
              <Popover key={event.name}>
                <PopoverTrigger asChild>
                  <div
                    className="absolute cursor-pointer"
                    style={{
                      left: `${event.x}%`,
                      top: `${event.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Event Marker */}
                    <div className="relative group">
                      <div className="text-2xl sm:text-3xl animate-bounce filter drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]">
                        🎯
                      </div>

                      {/* Event Label */}
                      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="bg-card border-2 border-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded shadow-[0_0_15px_rgba(var(--primary),0.4)]">
                          <p className="text-primary font-mono text-[10px] sm:text-xs font-bold tracking-wide uppercase">
                            {event.location}
                          </p>
                        </div>
                      </div>

                      {/* Pulsing ring animation */}
                      <div className="absolute inset-0 -m-2">
                        <div className="w-full h-full rounded-full border-2 border-primary animate-ping opacity-75" />
                      </div>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  className="bg-card border-2 border-primary rounded-lg p-3 sm:p-4 shadow-[0_0_30px_rgba(var(--primary),0.6)] min-w-[200px] sm:min-w-[220px] z-50"
                  align="center"
                  sideOffset={5}
                >
                  {/* Modal Header */}
                  <div className="mb-2 sm:mb-3 pb-2 border-b border-primary/30">
                    <p className="text-chart-2 font-mono text-[10px] sm:text-xs mb-1">
                      {event.date}
                    </p>
                    <p className="text-foreground font-mono text-xs sm:text-sm font-bold">
                      {event.name}
                    </p>
                    <p className="text-muted-foreground font-mono text-[10px] sm:text-xs mt-1">
                      📍 {event.location}
                    </p>
                  </div>

                  {/* Action Links */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <Link
                      href={`/events?location=${encodeURIComponent(
                        event.location
                      )}`}
                      className="block w-full bg-card hover:bg-card/80 border-2 border-primary text-primary font-mono text-[10px] sm:text-xs h-8 sm:h-9 shadow-[0_0_15px_rgba(var(--primary),0.4)] transition-all rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-center"
                    >
                      🎫 View Events
                    </Link>
                    <Link
                      href={`/find-hackers?location=${encodeURIComponent(
                        event.location
                      )}`}
                      className="block w-full bg-card hover:bg-card/80 border-2 border-chart-2 text-chart-2 font-mono text-[10px] sm:text-xs h-8 sm:h-9 shadow-[0_0_15px_rgba(var(--chart-2),0.3)] transition-all rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-center"
                    >
                      👥 Find Hackers
                    </Link>
                    <Link
                      href={`/find-hacker-houses?location=${encodeURIComponent(
                        event.location
                      )}&event=${encodeURIComponent(event.name)}`}
                      className="block w-full bg-card hover:bg-card/80 border-2 border-chart-3 text-chart-3 font-mono text-[10px] sm:text-xs h-8 sm:h-9 shadow-[0_0_15px_rgba(var(--chart-3),0.3)] transition-all rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-center"
                    >
                      🏠 View Hacker Houses
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>

          {/* Background Grid Effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px),
                  linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>
        <ScrollBar orientation="horizontal" className="bg-primary/10" />
      </ScrollArea>

      {/* Corner decorations */}
      <div className="hidden sm:block absolute top-20 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="hidden sm:block absolute top-20 right-4 w-12 h-12 border-r-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary/30 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30 pointer-events-none" />
    </div>
  )
}
