import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { WalletStatus } from "../wallet/wallet-status";

import { Container } from "./container";

export const Navbar = () => {
  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <WalletStatus />
        </div>
      </Container>
    </header>
  );
};
