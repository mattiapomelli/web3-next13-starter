"use client";

import { UserIcon } from "@heroicons/react/24/outline";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

import { Database } from "@/types/supabase";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  WrappedLink,
} from "./ui/dropdown";

interface UserMenuProps {
  user: User;
}

export const UserMenu = ({ user }: UserMenuProps) => {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <Dropdown className="inline-flex">
        <DropdownTrigger className="rounded-full bg-base-200 p-2 hover:bg-base-300">
          <UserIcon className="h-5 w-5" />
        </DropdownTrigger>
        <DropdownContent className="mt-4 p-1.5">
          <div className="mt-1 px-4 text-base-content-neutral">{user.email}</div>
          <hr className="my-2 h-px border-0 bg-base-300" />
          <DropdownItem href="/account" as={WrappedLink} className="py-1.5">
            Account
          </DropdownItem>
          <DropdownItem onClick={handleSignOut} className="py-1.5">
            Sign out
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
