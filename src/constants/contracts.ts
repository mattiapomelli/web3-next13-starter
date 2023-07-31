import { hardhat, polygon, polygonMumbai } from "wagmi/chains";

import { storageAbi } from "@/abis/storage";
import { CHAIN } from "@/constants/chains";

export const STORAGE_ADDRESS: Record<number, `0x${string}`> = {
  [hardhat.id]: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  [polygonMumbai.id]: "0x",
  [polygon.id]: "0x",
};

export const STORAGE_CONFIG = {
  address: STORAGE_ADDRESS[CHAIN.id],
  abi: storageAbi,
};
