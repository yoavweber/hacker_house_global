import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { http } from "wagmi"
import { mainnet, sonic } from "wagmi/chains"
import { appConfig } from "./env-config"

export const sonicTestnet = {
  id: 14601,
  name: "Sonic Testnet",
  nativeCurrency: { name: "Sonic", symbol: "S", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.soniclabs.com"] },
    public: { http: ["https://rpc.testnet.soniclabs.com"] },
  },
  blockExplorers: {
    default: {
      name: "SonicScan (Testnet)",
      url: "https://testnet.sonicscan.org",
    },
  },
} as const

export const wagmiConfig = getDefaultConfig({
  appName: "Mi dApp",
  projectId: appConfig.PROJECT_ID,
  chains: [mainnet, sonic, sonicTestnet],
  transports: {
    [mainnet.id]: http(),
    [sonic.id]: http(),
    [sonicTestnet.id]: http(sonicTestnet.rpcUrls.default.http[0]),
  },
  ssr: true,
})
