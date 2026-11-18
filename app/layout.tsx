import React from "react";
import "./globals.css";
import type {Metadata} from "next";
import {Outfit, Plus_Jakarta_Sans, JetBrains_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import {getSiteUrl, ORGANIZATION_GRAPH_JSON_LD} from "@/lib/seo";
import {Header} from "@/components/shared/Header";
import {Footer} from "@/components/shared/Footer";
import {CustomCursor, ScrollProgressHairline, SmoothScroll} from "@/components/motion/MotionPrimitives";
import {ContentProvider} from "@/context/ContentContext";

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-outfit',
    display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-jakarta',
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-jetbrains',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    title: {
        default: 'Webizera — The System Behind a Growing Business',
        template: '%s',
    },
    description:
        'Webizera is a web development and digital systems agency founded by Brightly Dunsford, building conversion-focused websites, booking systems, client portals, dashboards, and business automation.',
    openGraph: {
        type: 'website',
        siteName: 'Webizera',
        title: 'Webizera — The System Behind a Growing Business',
        description:
            'Webizera designs and builds conversion-focused websites, booking systems, client portals, dashboards, and business automation.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Webizera — The System Behind a Growing Business',
        description:
            'Websites, booking flows, client portals, dashboards, and automation built by Brightly Dunsford at Webizera.',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning
              className={`dark ${outfit.variable} ${jakarta.variable} ${jetbrains.variable}`}>
        <body className={outfit.className}>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(ORGANIZATION_GRAPH_JSON_LD),
            }}
        />
        <ContentProvider>
            <div
                className="min-h-screen flex flex-col bg-[#060609] text-[#F2F2F6] selection:bg-[#7C3AED]/30 selection:text-[#F2F2F6]">
                <SmoothScroll/>
                <ScrollProgressHairline/>
                <CustomCursor/>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#7C3AED] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
                >
                    Skip to content
                </a>
                <Header/>
                <main id="main-content" className="flex-1">
                    {children}
                </main>
                <Footer/>
                <Analytics/>
            </div>
        </ContentProvider>
        </body>
        </html>
    );
}
