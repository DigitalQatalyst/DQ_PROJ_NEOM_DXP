import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEOM | A New Vision of the Future",
  description: "NEOM is a land of the future, where the greatest minds and best talents are empowered to embody pioneering ideas and exceed boundaries.",
  icons: {
    icon: "https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1",
  }
};

import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-neom-gold/30`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
