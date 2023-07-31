import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { getCurrentUser } from "@/lib/session";

import { UserMenu } from "../user-menu";

import { Container } from "./container";

export const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};
