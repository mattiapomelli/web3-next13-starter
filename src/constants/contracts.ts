import { hardhat, polygon, polygonMumbai } from "wagmi/chains";

import { storageAbi } from "@/abis/storage";

export const STORAGE_ADDRESS: Record<number, `0x${string}`> = {
  [hardhat.id]: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  [polygonMumbai.id]: "0x",
  [polygon.id]: "0x",
};

export const getStorageConfig = (chainId: number) => ({
  address: STORAGE_ADDRESS[chainId],
  abi: storageAbi,
});
