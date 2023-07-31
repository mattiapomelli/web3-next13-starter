"use client";

import { UserIcon } from "@heroicons/react/24/outline";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  WrappedLink,
} from "./ui/dropdown";

export const UserMenu = () => {
  return (
    <div className="flex justify-center">
      <Dropdown className="inline-flex">
        <DropdownTrigger className="rounded-full bg-base-200 p-2 hover:bg-base-300">
          <UserIcon className="h-5 w-5" />
        </DropdownTrigger>
        <DropdownContent className="mt-4 p-1.5">
          <hr className="my-2 h-px border-0 bg-base-300" />
          <DropdownItem href="/account" as={WrappedLink} className="py-1.5">
            Account
          </DropdownItem>
          <DropdownItem className="py-1.5">Sign out</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
