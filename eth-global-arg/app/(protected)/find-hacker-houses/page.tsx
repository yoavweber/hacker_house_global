"use client"

import { useState, useMemo } from "react"
import { BackButton } from "@/components/back-button"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InviteMembersDialog } from "@/components/invite-members-dialog"
import {
  Calendar,
  Home,
  MapPin,
  Users,
  DollarSign,
  Plus,
  Star,
  Bed,
  ExternalLink,
  Shield,
  Wifi,
  Filter,
  Minus,
} from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useGetAllHackerHouses } from "@/services/api/hacker-houses"
import type { HackerHouse as HackerHouseListing } from "@/types/hacker-houses"

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

// Cities from the world map
const AVAILABLE_CITIES = [
  "Buenos Aires",
  "Bangkok",
  "Denver",
  "Prague",
  "Brussels",
  "Pyongyang",
]

export default function FindHackerHousesPage() {
  const searchParams = useSearchParams()
  const location = searchParams.get("location")
  const event = searchParams.get("event")

  // Filter states - usando valores por defecto
  const [selectedCity, setSelectedCity] = useState<string>(
    location || "Buenos Aires"
  )
  const [selectedBedrooms, setSelectedBedrooms] = useState<number>(1)
  const [checkInDate, setCheckInDate] = useState<string>(() => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  })
  const [checkOutDate, setCheckOutDate] = useState<string>(() => {
    const future = new Date()
    future.setDate(future.getDate() + 30)
    return future.toISOString().split("T")[0]
  })
  const [filtersOpen, setFiltersOpen] = useState(false)

  const { data, isLoading, error } = useGetAllHackerHouses({
    city: selectedCity,
    bedrooms: selectedBedrooms,
    checkInDate,
    checkOutDate,
  })

  const filteredHouses = mockHackerHouses.filter(
    (house) =>
      (!location || house.location === location) &&
      (!event || house.event === event) &&
      house.location === selectedCity &&
      house.capacity >= selectedBedrooms
  )

  // Usar los datos de la API directamente
  const hackerHouses: HackerHouseListing[] = useMemo(() => {
    return data?.listings || []
  }, [data])

  const resetFilters = () => {
    setSelectedCity(location || "Buenos Aires")
    setSelectedBedrooms(1)
    const today = new Date()
    setCheckInDate(today.toISOString().split("T")[0])
    const future = new Date()
    future.setDate(future.getDate() + 30)
    setCheckOutDate(future.toISOString().split("T")[0])
  }

  const incrementBedrooms = () => {
    setSelectedBedrooms((prev) => Math.min(prev + 1, 10))
  }

  const decrementBedrooms = () => {
    setSelectedBedrooms((prev) => Math.max(prev - 1, 1))
  }

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
          <BackButton location={location} event={event} label="← Back to Map" />
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

      {/* Filters */}
      <div className="bg-card/10 border border-primary/20 rounded-lg overflow-hidden">
        <div className="w-full flex items-center justify-between p-4">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Filter className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-bold text-primary font-mono uppercase tracking-wider">
              Filters
            </h3>
            <Badge className="bg-chart-2/20 text-chart-2 border-chart-2 text-[10px] h-5">
              Active
            </Badge>
            <div
              className={`transition-transform ml-2 ${
                filtersOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>
          <button
            onClick={resetFilters}
            className="text-xs text-muted-foreground hover:text-primary font-mono underline"
          >
            Reset All
          </button>
        </div>

        {filtersOpen && (
          <div className="p-4 border-t border-primary/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* City Filter */}
              <div>
                <label className="text-xs text-muted-foreground font-mono uppercase mb-2 block">
                  City
                </label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="bg-card/20 border-primary/30 font-mono">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {AVAILABLE_CITIES.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Bedrooms Filter */}
              <div>
                <label className="text-xs text-muted-foreground font-mono uppercase mb-2 block">
                  Bedrooms
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrementBedrooms}
                    disabled={selectedBedrooms === 1}
                    className="bg-card/20 hover:bg-card/30 border border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-primary h-10 w-10 rounded-md flex items-center justify-center transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="flex-1 bg-card/20 border border-primary/30 rounded-md h-10 flex items-center justify-center">
                    <span className="text-sm font-mono font-bold text-foreground">
                      {selectedBedrooms}
                    </span>
                  </div>
                  <button
                    onClick={incrementBedrooms}
                    disabled={selectedBedrooms === 10}
                    className="bg-card/20 hover:bg-card/30 border border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-primary h-10 w-10 rounded-md flex items-center justify-center transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Check-in Date */}
              <div>
                <label className="text-xs text-muted-foreground font-mono uppercase mb-2 block">
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full bg-card/20 border border-primary/30 rounded-md h-10 px-3 text-sm font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Check-out Date */}
              <div>
                <label className="text-xs text-muted-foreground font-mono uppercase mb-2 block">
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  min={checkInDate}
                  className="w-full bg-card/20 border border-primary/30 rounded-md h-10 px-3 text-sm font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hacker Houses List */}
      <Tabs defaultValue="available" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="available">Virtual Houses</TabsTrigger>
          <TabsTrigger value="my-houses">My Houses</TabsTrigger>
          <TabsTrigger value="irl-houses">IRL Houses</TabsTrigger>
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

        <TabsContent value="irl-houses" className="mt-4">
          {isLoading ? (
            <div className="bg-card/10 border border-primary/20 rounded-lg p-8 text-center">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-muted-foreground font-mono">
                Loading hacker houses...
              </p>
            </div>
          ) : error ? (
            <div className="bg-card/10 border border-red-500/20 rounded-lg p-8 text-center">
              <p className="text-red-500 font-mono mb-2">
                Error loading hacker houses
              </p>
              <p className="text-muted-foreground font-mono text-sm">
                {error instanceof Error
                  ? error.message
                  : "Please try again later"}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {hackerHouses.length === 0 ? (
                <div className="bg-card/10 border border-primary/20 rounded-lg p-8 text-center">
                  <p className="text-muted-foreground font-mono">
                    No IRL hacker houses found matching your filters.
                  </p>
                  <p className="text-muted-foreground font-mono text-sm mt-2">
                    Try adjusting your filters or check back later!
                  </p>
                </div>
              ) : (
                hackerHouses.map((house) => (
                  <div
                    key={house.id}
                    className="bg-card/10 hover:bg-card/20 border border-primary/20 hover:border-primary/40 rounded-lg overflow-hidden transition-all group shadow-[0_0_10px_rgba(var(--primary),0.1)] hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Image Gallery */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1">
                          {house.images
                            .slice(0, 4)
                            .map((img: string, idx: number) => (
                              <div
                                key={idx}
                                className="relative overflow-hidden rounded-md"
                              >
                                <img
                                  src={img}
                                  alt={`${house.name} ${idx + 1}`}
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 p-4 sm:p-6 space-y-4">
                        {/* Header */}
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                              <h3 className="text-lg sm:text-xl font-bold text-foreground font-mono group-hover:text-primary transition-colors mb-2">
                                {house.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {house.description}
                              </p>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono flex-wrap">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {house.city}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                  {house.rating} ({house.reviewsCount} reviews)
                                </span>
                                <span className="flex items-center gap-1">
                                  <Bed className="h-3 w-3" />
                                  {house.bedrooms} bedrooms
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Scores Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-chart-3" />
                              <p className="text-xs text-muted-foreground font-mono uppercase">
                                Price/Month
                              </p>
                            </div>
                            <p className="text-xl font-bold text-chart-3 font-mono">
                              ${house.price}
                            </p>
                          </div>

                          <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Shield className="h-4 w-4 text-chart-2" />
                              <p className="text-xs text-muted-foreground font-mono uppercase">
                                Safety
                              </p>
                            </div>
                            <p className="text-xl font-bold text-chart-2 font-mono">
                              {house.safetyScore}/10
                            </p>
                          </div>

                          <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Wifi className="h-4 w-4 text-chart-4" />
                              <p className="text-xs text-muted-foreground font-mono uppercase">
                                Workspace
                              </p>
                            </div>
                            <p className="text-xl font-bold text-chart-4 font-mono">
                              {house.workspaceScore}/10
                            </p>
                          </div>

                          <div className="bg-card/20 border border-primary/10 rounded-md p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              <p className="text-xs text-muted-foreground font-mono uppercase">
                                Distance
                              </p>
                            </div>
                            <p className="text-xl font-bold text-primary font-mono">
                              {house.distanceToEvent === 0
                                ? "0km"
                                : `${house.distanceToEvent}km`}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <a
                            href={house.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground font-mono text-sm h-10 rounded-md shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] transition-all"
                          >
                            View on Airbnb
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
