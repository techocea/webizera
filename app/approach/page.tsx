import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { CtaSection } from '@/components/sections/CtaSection';
import {PRINCIPLES} from "@/data/constants";

export const metadata: Metadata = buildMetadata({
    title: 'Approach & Delivery Process | Webizera',
    description:
        'How Webizera scopes, designs, builds, and launches websites, booking systems, portals, and automation with direct founder accountability.',
    path: '/approach',
});

export default function ApproachPage() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#060609] pt-16 pb-12 lg:pt-24 lg:pb-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 right-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] blur-3xl"
                />
                <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                        Approach
                    </p>
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#F4F4F8] max-w-4xl">
                        Clear scope, calm execution, reliable launches.
                    </h1>
                    <p className="max-w-[65ch] text-base sm:text-lg leading-[1.68] text-[#A6A5B5]">
                        Most software projects stall because requirements stay vague. Our five-stage workflow
                        keeps deliverables concrete from week one.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium btn-webizera-primary"
                        >
                            <span>Start a project</span>
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            <ApproachSection showHeaderLink={false} />

            <section className="bg-[#060609] py-20 lg:py-24">
                <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PRINCIPLES.map((item) => (
                        <div
                            key={item.number}
                            className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#131020] to-[#090810] p-7 sm:p-8 space-y-3"
                        >
                            <span className="font-mono text-xs text-[#C4B5FD] tabular-nums">{item.number}</span>
                            <h2 className="text-xl font-medium text-[#F4F4F8]">{item.title}</h2>
                            <p className="text-sm sm:text-base leading-[1.65] text-[#A6A5B5]">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CtaSection />
        </>
    );
}