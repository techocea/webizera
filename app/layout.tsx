import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={josefinSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
