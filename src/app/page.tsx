"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { BlockTitle, List, ListButton, ListItem, Navbar, Page } from "konsta/react";
import { useAccount, useDisconnect, useNetwork } from "wagmi";

import { Container } from "@/components/layout/container";

export default function Home() {
  const { open } = useWeb3Modal();

  const { address, isConnected, isConnecting, isReconnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  return (
    <Page>
      <Navbar title="Account" />
      <Container>
        <BlockTitle>Account</BlockTitle>
        {!isReconnecting && !isConnecting && (
          <div className="duration-100 animate-in fade-in">
            {isConnected && address ? (
              <>
                <List strongIos insetIos>
                  <ListItem title={address} />
                  <ListButton onClick={() => disconnect()}>Disconnect</ListButton>
                </List>
                <BlockTitle>Network</BlockTitle>
                <List strongIos insetIos>
                  <ListItem title={`${chain?.unsupported ? "Unsupported network" : chain?.name}`} />
                  <ListButton onClick={() => open({ view: "Networks" })}>Change network</ListButton>
                </List>
              </>
            ) : (
              <List strongIos insetIos>
                <ListButton onClick={() => open()}>Connect</ListButton>
              </List>
            )}
          </div>
        )}
      </Container>
    </Page>
  );
}
