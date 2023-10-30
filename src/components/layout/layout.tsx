"use client";

import { Page } from "konsta/react";
import { ReactNode } from "react";

import { Container } from "./container";
import { Navbar } from "./navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Page>
      <Container>
        {children}
        <Navbar />
      </Container>
    </Page>
  );
};
