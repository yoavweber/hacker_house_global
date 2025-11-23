export type PoapEventDetails = {
  channel: string
  city: string
  country: string
  created_date: string
  description: string
  end_date: string
  event_template_id: number
  event_url: string
  expiry_date: string
  fancy_id: string
  from_admin: boolean
  id: number
  image_url: string
  location_type: string
  name: string
  platform: string
  private_event: boolean
  start_date: string
  timezone: string
  virtual_event: boolean
  year: number
}

export type PoapToken = {
  chain: string
  created: string
  event: {
    city: string
    country: string
    description: string
    end_date: string
    event_url: string
    expiry_date: string
    fancy_id: string
    id: number
    image_url: string
    name: string
    start_date: string
    supply: number
    timezone: string
    year: number
  }
  migrated: string
  owner: string
  tokenId: string
}

export type PoapPagination<T> = {
  limit: number
  offset: number
  total: number
  transferCount: number
  tokens: T
}

export type PoapTokenSummary = {
  created: string
  id: string
  migrated: string
  owner: {
    id: string
    tokensOwned: number
    ens?: string
  }
  transferCount: string
}
