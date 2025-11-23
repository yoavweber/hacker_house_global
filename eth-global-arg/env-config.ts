import { z } from "zod"

/**
 * Client config
 */
export const appConfig = {
  environment: z
    .string({ message: "APP_ENV is required" })
    .min(1)
    .parse(process.env.NEXT_PUBLIC_APP_ENV),
  PROJECT_ID: z
    .string({ message: "NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is required" })
    .min(1)
    .parse(process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID),
}
