import { BASE_CACHE_KEYS } from "@/constants/query-cache"
import {
  PoapEventDetails,
  PoapPagination,
  PoapToken,
  PoapTokenSummary,
} from "@/types/poap"
import { useAccount } from "wagmi"
import {
  externalBackendBasePath,
  genericAuthRequest,
  useAppQuery,
} from "../base"

export const useGetEventPoapById = ({ eventId }: { eventId: string }) => {
  return useAppQuery<PoapEventDetails>({
    fetcher: async () =>
      await genericAuthRequest("get", `/events/id/${eventId}`, undefined, {
        baseURL: externalBackendBasePath.poap,
        useCredentials: false,
        headers: {
          "X-API-Key":
            "JDu21TYPWyaeuYSTVVHkLB9YhgH6tIJmLRfA3ptckXmKO6xkrw9EBfKDfp8tUWfl1T61OCMwWzzSZAXos9MVhFFdps0nI1gER4kgkjc9Os9hDw9TgYJQqbgWGjclJoQT",
        },
      }),
    queryKey: [BASE_CACHE_KEYS.getPoapEventById, eventId],
  })
}

export const useGetAllPoapsByAddress = (walletAddress?: string) => {
  const { address } = useAccount()
  const targetAddress = walletAddress || address

  return useAppQuery<PoapToken[]>({
    fetcher: async () =>
      await genericAuthRequest(
        "get",
        `/actions/scan/${targetAddress}`,
        undefined,
        {
          baseURL: externalBackendBasePath.poap,
          useCredentials: false,
          headers: {
            "X-API-Key":
              "JDu21TYPWyaeuYSTVVHkLB9YhgH6tIJmLRfA3ptckXmKO6xkrw9EBfKDfp8tUWfl1T61OCMwWzzSZAXos9MVhFFdps0nI1gER4kgkjc9Os9hDw9TgYJQqbgWGjclJoQT",
          },
        }
      ),
    queryKey: [BASE_CACHE_KEYS.getScanAddress, targetAddress],
    options: {
      enabled: !!targetAddress,
    },
  })
}

export const useGetPoapsByEventId = ({ eventId }: { eventId: string }) => {
  return useAppQuery<PoapPagination<PoapTokenSummary[]>>({
    fetcher: async () =>
      await genericAuthRequest("get", `/event/${eventId}/poaps`, undefined, {
        baseURL: externalBackendBasePath.poap,
        useCredentials: false,
        headers: {
          "X-API-Key":
            "JDu21TYPWyaeuYSTVVHkLB9YhgH6tIJmLRfA3ptckXmKO6xkrw9EBfKDfp8tUWfl1T61OCMwWzzSZAXos9MVhFFdps0nI1gER4kgkjc9Os9hDw9TgYJQqbgWGjclJoQT",
        },
      }),
    queryKey: [BASE_CACHE_KEYS.getPoapsByEventId, eventId],
    options: {
      enabled: !!eventId,
    },
  })
}
