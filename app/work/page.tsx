import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata: Metadata = buildMetadata({
    title: 'Selected Work & Case Studies | Webizera',
    description:
        'Websites, booking systems, client portals, and workflow automation built by Webizera for healthcare clinics, hospitality, real estate, and B2B services.',
    path: '/work',
});

export default function WorkPage(){
    return(
        <>
            <section className="relative overflow-hidden bg-[#060609] pt-16 pb-12 lg:pt-24 lg:pb-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 right-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] blur-3xl"
                />
                <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                        Selected Work
                    </p>
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#F4F4F8] max-w-4xl">
                        Digital systems built around real operational bottlenecks.
                    </h1>
                    <p className="max-w-[65ch] text-base sm:text-lg leading-[1.68] text-[#A6A5B5]">
                        Each case study documents the problem before launch, what was built, and the decisions
                        behind it. Private client systems and past sites that are no longer online are labeled
                        plainly.
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

            <PortfolioSection showHeader={false} />
            <CtaSection />
        </>
    )
}