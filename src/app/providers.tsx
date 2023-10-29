"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WagmiConfig } from "wagmi";

import { CHAINS } from "@/constants/chains";
import { env } from "@/env.mjs";

const projectId = env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const metadata = {
  name: "Web3Starter",
  description: "Web3 Frontend Starter",
  url: "http://localhost:3000",
  // icons: ["http://localhost:3000/icon.png"],
};

const wagmiConfig = defaultWagmiConfig({ chains: CHAINS, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains: CHAINS });

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </WagmiConfig>
  );
}
