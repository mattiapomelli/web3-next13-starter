import {
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { useChainId, useDisconnect } from "wagmi";

import { Address } from "@/components/address";
import { AddressAvatar } from "@/components/address-avatar";
import { Dropdown, DropdownContent, DropdownTrigger, DropdownItem } from "@/components/ui/dropdown";
import { getAddressExplorerLink } from "@/constants/urls";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

interface WalletDropdownProps {
  address: `0x${string}`;
}

export const WalletDropdown = ({ address }: WalletDropdownProps) => {
  const chainId = useChainId();
  const { disconnect } = useDisconnect();

  return (
    <Dropdown className="inline-flex">
      <DropdownTrigger className="rounded-btn flex h-full items-center gap-2 bg-base-200 px-4 py-1.5 hover:bg-base-300">
        <AddressAvatar address={address} className="sm:hidden" />
        <AddressAvatar address={address} className="hidden sm:inline-flex" />
        <Address address={address} className="hidden sm:block" />
      </DropdownTrigger>
      <DropdownContent className="right-0 mt-3">
        <DropdownItem
          onClick={() => copyToClipboard(address)}
          as="button"
          className="gap-2 text-sm"
        >
          <DocumentDuplicateIcon className="h-5 w-5" />
          Copy address
        </DropdownItem>
        <DropdownItem
          href={getAddressExplorerLink(chainId, address)}
          target="_blank"
          rel="noopener noreferrer"
          as="a"
          className="gap-2 text-sm"
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          See in explorer
        </DropdownItem>
        <DropdownItem as="button" onClick={() => disconnect()} className="gap-2 text-sm">
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Disconnect
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
