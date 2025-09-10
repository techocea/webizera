import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Webizera | Connecting your business",
  description:
    "Connecting people and businesses by coding. The best web design agency you`ll ever find",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        {/* <ToastContainer /> */}
        <Analytics />
      </body>
    </html>
  );
}
