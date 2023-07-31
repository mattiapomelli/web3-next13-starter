import { hardhat, polygon, polygonMumbai } from "wagmi/chains";

import { env } from "@/env.mjs";

const getChain = () => {
  switch (env.NEXT_PUBLIC_CHAIN) {
    case "localhost":
      return hardhat;
    case "testnet":
      return polygonMumbai;
    case "mainnet":
      throw polygon;
    default:
      throw new Error("Invalid NEXT_PUBLIC_CHAIN value");
  }
};

export const CHAIN = getChain();
