import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const manrope = Manrope({
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
      <body className={manrope.className}>
        {children}
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}
