"use client"

import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InviteMembersDialog } from "@/components/invite-members-dialog"
import { Calendar, Home, MapPin, Users, DollarSign, Plus } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface HackerHouse {
  id: string
  name: string
  description: string
  location: string
  event: string
  capacity: number
  currentMembers: number
  monthlyBudget: number
  checkIn: string
  checkOut: string
  tags: string[]
  amenities: string[]
  hostName: string
  hostAvatar: string
  isMyHouse: boolean
}

const mockHackerHouses: HackerHouse[] = [
  {
    id: "1",
    name: "ETH Builders House",
    description:
      "A collaborative space for Ethereum developers working on DeFi protocols and smart contracts. Perfect for builders who want to ship fast.",
    location: "Buenos Aires",
    event: "ETH Global Buenos Aires",
    capacity: 8,
    currentMembers: 5,
    monthlyBudget: 3000,
    checkIn: "Dec 1, 2024",
    checkOut: "Dec 15, 2024",
    tags: ["Solidity", "DeFi", "Smart Contracts", "React"],
    amenities: ["WiFi", "Kitchen", "Workspace", "Meeting Room"],
    hostName: "Alice.eth",
    hostAvatar: "👩‍💻",
    isMyHouse: true,
  },
  {
    id: "2",
    name: "Web3 Creative Hub",
    description:
      "Design-focused hacker house for builders creating beautiful Web3 experiences. Frontend devs and designers welcome!",
    location: "Buenos Aires",
    event: "ETH Global Buenos Aires",
    capacity: 6,
    currentMembers: 4,
    monthlyBudget: 2500,
    checkIn: "Nov 28, 2024",
    checkOut: "Dec 20, 2024",
    tags: ["Frontend", "Design", "React", "TypeScript"],
    amenities: ["WiFi", "Kitchen", "Garden", "Library"],
    hostName: "Bob.eth",
    hostAvatar: "🎨",
    isMyHouse: false,
  },
  {
    id: "3",
    name: "Protocol Research Lab",
    description:
      "For serious researchers and protocol developers. Quiet environment focused on deep work and technical discussions.",
    location: "Buenos Aires",
    event: "ETH Global Buenos Aires",
    capacity: 10,
    currentMembers: 7,
    monthlyBudget: 4000,
    checkIn: "Dec 5, 2024",
    checkOut: "Jan 5, 2025",
    tags: ["Solidity", "Backend", "Testing", "DevOps"],
    amenities: ["WiFi", "Kitchen", "Workspace", "Gym", "Parking"],
    hostName: "Charlie.eth",
    hostAvatar: "🔬",
    isMyHouse: false,
  },
]

export default function FindHackerHousesPage() {
  const searchParams = useSearchParams()
  const location = searchParams.get("location")
  const event = searchParams.get("event")

  const filteredHouses = mockHackerHouses.filter(
    (house) =>
      (!location || house.location === location) &&
      (!event || house.event === event)
  )

  return (
    <div className="min-h-dvh p-4 space-y-4">
      {/* Header */}
      <PageHeader
        icon={Home}
        title={
          location ? `Hacker Houses in ${location}` : "Discover Hacker Houses"
        }
        subtitle={event || "Find your perfect collaborative space"}
        customTrigger={
          <Link
            href="/world"
            className="bg-card/10 hover:bg-card/20 border-2 border-primary text-primary font-mono text-sm px-6 py-2 rounded-md shadow-[0_0_15px_rgba(var(--primary),0.3)] inline-flex items-center justify-center transition-colors"
          >
            ← Back to Map
          </Link>
        }
      />

      {/* Create House CTA */}
      <Link
        href={`/hacker-house-form?location=${encodeURIComponent(
          location || ""
        )}&event=${encodeURIComponent(event || "")}`}
        className="block w-full bg-linear-to-r from-chart-3/10 to-chart-3/5 hover:from-chart-3/20 hover:to-chart-3/10 border-2 border-chart-3 rounded-lg p-4 transition-all shadow-[0_0_20px_rgba(var(--chart-3),0.2)] hover:shadow-[0_0_30px_rgba(var(--chart-3),0.4)]"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-chart-3" />
              <h3 className="text-chart-3 font-mono text-lg font-bold uppercase tracking-wider">
                Create Your Hacker House
              </h3>
            </div>
            <p className="text-muted-foreground text-sm font-mono">
              Host builders and grow your network
            </p>
          </div>
          <div className="text-3xl">🏠</div>
        </div>
      </Link>

      {/* Stats */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-card/10 border border-primary/20 rounded-lg p-3">
          <p className="text-xs text-muted-foreground font-mono uppercase mb-1">
            Total Houses
          </p>
          <p className="text-2xl font-bold text-primary font-mono">
            {filteredHouses.length}
          </p>
        </div>
        <div className="bg-card/10 border border-chart-2/20 rounded-lg p-3">
          <p className="text-xs text-muted-foreground font-mono uppercase mb-1">
            Available Spots
          </p>
          <p className="text-2xl font-bold text-chart-2 font-mono">
            {filteredHouses.reduce(
              (acc, h) => acc + (h.capacity - h.currentMembers),
              0
            )}
          </p>
        </div>
        <div className="bg-card/10 border border-chart-3/20 rounded-lg p-3">
          <p className="text-xs text-muted-foreground font-mono uppercase mb-1">
            Avg Budget
          </p>
          <p className="text-2xl font-bold text-chart-3 font-mono">
            ${Math.round(
              filteredHouses.reduce((acc, h) => acc + h.monthlyBudget, 0) /
                filteredHouses.length
            )}
          </p>
        </div>
        <div className="bg-card/10 border border-chart-4/20 rounded-lg p-3">
          <p className="text-xs text-muted-foreground font-mono uppercase mb-1">
            Total Builders
          </p>
          <p className="text-2xl font-bold text-chart-4 font-mono">
            {filteredHouses.reduce((acc, h) => acc + h.currentMembers, 0)}
          </p>
        </div>
      </div> */}

      {/* Hacker Houses List */}
      <Tabs defaultValue="available" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="available">Available Houses</TabsTrigger>
          <TabsTrigger value="my-houses">My Houses</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="mt-4">
          <div className="space-y-4">
            {filteredHouses.filter((house) => !house.isMyHouse).length === 0 ? (
              <div className="bg-card/10 border border-primary/20 rounded-lg p-8 text-center">
                <p className="text-muted-foreground font-mono">
                  No available hacker houses found in this location yet.
                </p>
                <p className="text-muted-foreground font-mono text-sm mt-2">
                  Be the first to create one!
                </p>
              </div>
            ) : (
              filteredHouses
                .filter((house) => !house.isMyHouse)
                .map((house) => (
                  <div
                    key={house.id}
                    className="bg-card/10 hover:bg-card/20 border border-primary/20 hover:border-primary/40 rounded-lg p-4 sm:p-6 transition-all group shadow-[0_0_10px_rgba(var(--primary),0.1)] hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground font-mono group-hover:text-primary transition-colors">
                            {house.name}
                          </h3>
                          <Badge className="bg-chart-2/20 text-chart-2 border-chart-2 text-[10px] h-5">
                            {house.currentMembers}/{house.capacity} members
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {house.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {house.checkIn} - {house.checkOut}
                          </span>
                        </div>
                      </div>
                      <div className="text-4xl shrink-0">
                        {house.hostAvatar}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {house.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="h-4 w-4 text-chart-3" />
                          <p className="text-xs text-muted-foreground font-mono uppercase">
                            Monthly Budget
                          </p>
                        </div>
                        <p className="text-xl font-bold text-chart-3 font-mono">
                          ${house.monthlyBudget}
                        </p>
                      </div>

                      <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-chart-2" />
                          <p className="text-xs text-muted-foreground font-mono uppercase">
                            Host
                          </p>
                        </div>
                        <p className="text-lg font-bold text-foreground font-mono">
                          {house.hostName}
                        </p>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-mono uppercase mb-2">
                        Amenities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {house.amenities.map((amenity) => (
                          <Badge
                            key={amenity}
                            className="bg-chart-4/20 text-chart-4 border-chart-4/30 text-[10px] h-5"
                          >
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-mono uppercase mb-2">
                        Looking For
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {house.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-primary/10 text-primary border-primary/30 text-[10px] h-5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => {
                        // TODO: Implement apply logic
                        console.log("Apply to house:", house.id)
                      }}
                      className="flex items-center justify-center w-full bg-primary hover:bg-primary/80 text-primary-foreground font-mono text-sm h-10 rounded-md shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] transition-all"
                    >
                      Apply to Hacker House
                    </button>
                  </div>
                ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="my-houses" className="mt-4">
          <div className="space-y-4">
            {filteredHouses.filter((house) => house.isMyHouse).length === 0 ? (
              <div className="bg-card/10 border border-primary/20 rounded-lg p-8 text-center">
                <p className="text-muted-foreground font-mono">
                  You haven&apos;t created any hacker houses yet.
                </p>
                <p className="text-muted-foreground font-mono text-sm mt-2">
                  Create your first one to get started!
                </p>
              </div>
            ) : (
              filteredHouses
                .filter((house) => house.isMyHouse)
                .map((house) => (
                  <div
                    key={house.id}
                    className="bg-card/10 hover:bg-card/20 border border-primary/20 hover:border-primary/40 rounded-lg p-4 sm:p-6 transition-all group shadow-[0_0_10px_rgba(var(--primary),0.1)] hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground font-mono group-hover:text-primary transition-colors">
                            {house.name}
                          </h3>
                          <Badge className="bg-chart-2/20 text-chart-2 border-chart-2 text-[10px] h-5">
                            {house.currentMembers}/{house.capacity} members
                          </Badge>
                          <Badge className="bg-primary/20 text-primary border-primary text-[10px] h-5">
                            Owner
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {house.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {house.checkIn} - {house.checkOut}
                          </span>
                        </div>
                      </div>
                      <div className="text-4xl shrink-0">
                        {house.hostAvatar}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {house.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="h-4 w-4 text-chart-3" />
                          <p className="text-xs text-muted-foreground font-mono uppercase">
                            Monthly Budget
                          </p>
                        </div>
                        <p className="text-xl font-bold text-chart-3 font-mono">
                          ${house.monthlyBudget}
                        </p>
                      </div>

                      <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-chart-2" />
                          <p className="text-xs text-muted-foreground font-mono uppercase">
                            Host
                          </p>
                        </div>
                        <p className="text-lg font-bold text-foreground font-mono">
                          {house.hostName}
                        </p>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-mono uppercase mb-2">
                        Amenities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {house.amenities.map((amenity) => (
                          <Badge
                            key={amenity}
                            className="bg-chart-4/20 text-chart-4 border-chart-4/30 text-[10px] h-5"
                          >
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-mono uppercase mb-2">
                        Looking For
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {house.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-primary/10 text-primary border-primary/30 text-[10px] h-5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/find-hacker-houses/${house.id}`}
                      className="flex items-center justify-center w-full bg-chart-2 hover:bg-chart-2/80 text-primary-foreground font-mono text-sm h-10 rounded-md shadow-[0_0_15px_rgba(var(--chart-2),0.3)] hover:shadow-[0_0_25px_rgba(var(--chart-2),0.5)] transition-all mb-3"
                    >
                      Manage House
                    </Link>
                    <InviteMembersDialog
                      houseId={house.id}
                      houseName={house.name}
                    />
                  </div>
                ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
