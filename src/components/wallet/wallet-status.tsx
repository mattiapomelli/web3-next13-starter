"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import { useAccount, useSwitchNetwork } from "wagmi";

import { Button } from "@/components/ui/button";
import { CHAIN } from "@/constants/chains";

import { WalletDropdown } from "./wallet-dropdown";

export const WalletStatus = () => {
  const session = useSession();
  const { address } = useAccount();

  const { switchNetwork } = useSwitchNetwork();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal }) => {
        const connected = account && chain && session.status === "authenticated";

        if (chain?.unsupported) {
          return (
            <Button size="sm" color="error" onClick={() => switchNetwork?.(CHAIN.id)} type="button">
              Switch to {CHAIN.name}
            </Button>
          );
        }

        if (connected && address) {
          return <WalletDropdown address={address} />;
        }

        return <Button onClick={openConnectModal}>Connect Wallet</Button>;
      }}
    </ConnectButton.Custom>
  );
};
