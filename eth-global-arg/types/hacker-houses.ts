export type HackerHouse = {
  id: string
  name: string
  description: string
  city: string
  price: number
  bedrooms: number
  rating: number
  reviewsCount: number
  images: string[]
  link: string
  safetyScore: number
  distanceToEvent: number
  workspaceScore: number
  amenities: string[]
}

export type HackerHousesResponse = {
  count: number
  listings: HackerHouse[]
  message: string
}
