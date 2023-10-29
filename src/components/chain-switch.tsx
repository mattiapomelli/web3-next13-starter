import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Chain, useNetwork } from "wagmi";

import { Button } from "@/components/ui/button";
import { CHAIN_ICON } from "@/constants/chains";

interface ChainIconProps {
  chain: Chain;
  className?: string;
}

const ChainIcon = ({ chain, className }: ChainIconProps) => {
  const Icon = CHAIN_ICON[chain.id];
  return <Icon className={className} />;
};

export const ChainSwitch = () => {
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();

  return (
    <button onClick={() => open({ view: "Networks" })}>
      {!chain || chain.unsupported ? (
        <Button size="sm" color="error">
          Unsupported network
        </Button>
      ) : (
        <span className="rounded-btn flex items-center gap-3 bg-base-200 px-4 py-1.5 font-medium hover:bg-base-300">
          <ChainIcon chain={chain} className="h-6 w-6" />
          <span className="hidden sm:block">{chain?.name}</span>
        </span>
      )}
    </button>
  );
};
