"use client";

import { UserIcon } from "@heroicons/react/24/solid";
import { Icon, Tabbar, TabbarLink } from "konsta/react";
import { useRouter, usePathname } from "next/navigation";

import { Container } from "./container";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Tabbar className="fixed bottom-0 left-0 h-24 pt-6">
      <Container className="relative flex h-11 w-full items-center justify-between overflow-hidden pr-2-safe pl-2-safe">
        <TabbarLink
          active={pathname === "/"}
          onClick={() => router.push("/")}
          icon={<Icon ios={<UserIcon className="mb-2 h-5 w-5" />} />}
          label={"Account"}
        />
        <TabbarLink
          active={pathname === "/page1"}
          onClick={() => router.push("/page1")}
          icon={<Icon ios={<UserIcon className="mb-2 h-5 w-5" />} />}
          label={"Other page 1"}
        />
        <TabbarLink
          active={pathname === "/page2"}
          onClick={() => router.push("/page2")}
          icon={<Icon ios={<UserIcon className="mb-2 h-5 w-5" />} />}
          label={"Other page 2"}
        />
      </Container>
    </Tabbar>
  );
};
