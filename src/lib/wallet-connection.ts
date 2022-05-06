import { chain, createClient } from "wagmi";
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";

export const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    chain.rinkeby,
    chain.ropsten,
  ],
  [apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit Wallet Connection",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
