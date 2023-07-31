"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { env } from "@/env.mjs";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_API_KEY }), publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <WagmiConfig config={config}>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </WagmiConfig>
  );
}
