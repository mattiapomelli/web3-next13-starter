import { hardhat, polygon, polygonMumbai } from "wagmi/chains";

export const EXPLORER_URL: Record<number, string> = {
  [polygon.id]: "https://polygonscan.com",
  [polygonMumbai.id]: "https://mumbai.polygonscan.com",
  [hardhat.id]: "",
};

export const getAddressExplorerLink = (chainId: number, address: string) => {
  return `${EXPLORER_URL[chainId]}/address/${address}`;
};
