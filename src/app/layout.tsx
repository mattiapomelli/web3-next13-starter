import "./globals.css";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toast";
import { ThemeProvider } from "@/providers/theme-provider";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const siteConfig = {
  name: "My App",
  description: "This is my app",
  url: "https://localhost:3000",
  ogImage: "https://localhost:3000/og.jpg",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@myhandle",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
