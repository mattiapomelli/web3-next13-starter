"use client";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CHAINS } from "@/constants/chains";
import { env } from "@/env.mjs";

const { chains, publicClient, webSocketPublicClient } = configureChains(CHAINS, [
  alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "My dApp",
  projectId: env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
  persister: null,
});

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider {...props}>{children}</ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
