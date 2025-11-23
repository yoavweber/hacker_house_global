import { BASE_CACHE_KEYS } from "@/constants/query-cache"
import { TalentProtocolProfileResponse } from "@/types/talent-protocol"
import { useAccount } from "wagmi"
import {
  externalBackendBasePath,
  genericAuthRequest,
  useAppQuery,
} from "../base"

export const useGetProfileTalentProtocol = () => {
  const { address } = useAccount()
  return useAppQuery<TalentProtocolProfileResponse>({
    fetcher: async () =>
      await genericAuthRequest(
        "get",
        `/profile`,
        { id: address },
        {
          baseURL: externalBackendBasePath.talent_protocol,
          useCredentials: false,
          headers: {
            "X-API-Key":
              "8a653d1fb228e63c4595ef000d399f1d2c04015fda3a6234b9ff0ff222bb",
            Accept: "application/json",
          },
        }
      ),
    queryKey: [BASE_CACHE_KEYS.getTalentProtocolProfile, address],
    options: {
      enabled: !!address,
    },
  })
}
