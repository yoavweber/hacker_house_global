export type TalentProtocolAccount = {
  connected_at: string
  identifier: string
  imported_from: string | null
  owned_since: string
  source: string
  source_type: string | null
  username: string
}

export type TalentProtocolUser = {
  admin: boolean
  builder_plus: boolean | null
  created_at: string
  email: string | null
  email_accounts: unknown[]
  email_confirmed: boolean
  human_checkmark: boolean
  id: string
  main_wallet: string
  merged: boolean
  onchain_id: number
  rank_position: number | null
  talent_plus: boolean
  total_email_count: number | null
}

export type TalentProtocolProfile = {
  id: string
  bio: string | null
  main_wallet_address: string | null
  farcaster_primary_wallet_address: string | null
  display_name: string | null
  image_url: string | null
  location: string | null
  name: string | null
  human_checkmark: boolean
  onchain_since: string | null
  ens: string | null
  rank_position: number | null
  tags: string[]
  main_role: string
  onchain_id: number
  relative_path: string
  socials_refreshed_at: string
  accounts: TalentProtocolAccount[]
  user: TalentProtocolUser
}

export type TalentProtocolProfileResponse = {
  profile: TalentProtocolProfile
}