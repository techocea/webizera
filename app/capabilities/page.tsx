import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { SEO_LANDING_PAGES } from '@/data/seo-pages';

export const metadata: Metadata = buildMetadata({
    title: 'Capabilities & Digital Systems | Webizera',
    description:
        'Explore Webizera capabilities: conversion-focused websites, booking and inquiry systems, client portals, dashboards, automation, and product UX design.',
    path: '/capabilities',
});

export default function CapabilitiesPage() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#060609] pt-16 pb-12 lg:pt-24 lg:pb-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 right-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] blur-3xl"
                />
                <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                        Capabilities
                    </p>
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#F4F4F8] max-w-4xl">
                        Websites, portals, and operational systems built for clarity.
                    </h1>
                    <p className="max-w-[65ch] text-base sm:text-lg leading-[1.68] text-[#A6A5B5]">
                        We focus on five core disciplines—from front-end conversion architecture to the custom
                        booking engines, dashboards, and automation pipelines underneath.
                    </p>
                </div>
            </section>

            <CapabilitiesSection />

            <section className="bg-[#060609] py-20 lg:py-24">
                <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                        Focused Guides &amp; Specialties
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SEO_LANDING_PAGES.map((page) => (
                            <Link
                                key={page.slug}
                                href={page.route}
                                className="group rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#131020] to-[#090810] p-7 hover:border-[#8B5CF6]/55 transition-colors flex flex-col justify-between space-y-4"
                            >
                                <div className="space-y-2.5">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8CA0]">
                                        {page.areaServed}
                                    </p>
                                    <h2 className="text-lg font-medium text-[#F4F4F8] group-hover:text-[#DDD6FE] transition-colors">
                                        {page.serviceType}
                                    </h2>
                                    <p className="text-sm leading-[1.65] text-[#A6A5B5]">{page.metaDescription}</p>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F4F4F8]">
                  <span>Read overview</span>
                  <ArrowRight className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}