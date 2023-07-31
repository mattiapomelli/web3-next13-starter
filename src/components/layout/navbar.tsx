"use client";

import { useAccount } from "wagmi";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { WalletStatus } from "../wallet/wallet-status";

import { Container } from "./container";

export const Navbar = () => {
  const { isConnecting, isReconnecting } = useAccount();

  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        {!isReconnecting && !isConnecting && (
          <div className="flex items-center gap-4 duration-100 animate-in fade-in">
            <ThemeToggle />
            <WalletStatus />
          </div>
        )}
      </Container>
    </header>
  );
};
