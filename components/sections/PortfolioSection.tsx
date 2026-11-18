'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAgencyContent } from '@/context/ContentContext';
import { AGENCY_ASSETS } from '@/data/assets';
import {ResilientImage} from "@/components/motion/ResilientImage";

const STUDIO_BACKDROPS = [
    'from-[#701A75]/80 via-[#5B21B6]/70 to-[#140B29]',
    'from-[#4C1D95]/80 via-[#3730A3]/65 to-[#0F0B21]',
    'from-[#6D28D9]/75 via-[#4338CA]/55 to-[#0D0A1B]',
    'from-[#581C87]/80 via-[#6B21A8]/60 to-[#120924]',
];

export function PortfolioSection({showHeader = true}: { showHeader?: boolean }) {
    const { content } = useAgencyContent();
    const [featured, ...secondary] = content.caseStudies;

    return (
        <section
            id="work"
            className="relative overflow-hidden bg-gradient-to-b from-[#060609] via-[#0B0917] to-[#060609] py-24 sm:py-32 lg:py-36"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-12 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
                {showHeader && (
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div className="space-y-3">
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                                04 — Featured Work
                            </p>
                            <h2 className="text-[clamp(2.35rem,4.8vw,3.9rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#F4F4F8]">
                                Featured Work
                            </h2>
                        </div>

                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium btn-webizera-glass whitespace-nowrap shrink-0 self-start sm:self-auto"
                        >
                            <span>Explore More of Our Works</span>
                            <ArrowRight className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                        </Link>
                    </div>
                )}

                {/* Primary Showcase Card with Vibrant Purple Studio Backdrop */}
                {featured && (
                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="group -mx-5 sm:mx-0 rounded-none sm:rounded-[34px] bg-[#0F0D1A]/90 border-y sm:border border-white/[0.09] hover:border-[#8B5CF6]/55 transition-all duration-300 overflow-hidden shadow-[0_32px_70px_-28px_rgba(91,33,182,0.4)]"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                            <Link
                                href={`/work/${featured.slug}`}
                                className={`lg:col-span-7 relative overflow-hidden bg-gradient-to-br ${STUDIO_BACKDROPS[0]} p-6 sm:p-10 lg:p-12 flex items-center justify-center`}
                            >
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.28)_0%,transparent_70%)] blur-2xl"
                                />
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_28px_60px_-14px_rgba(0,0,0,0.65)] ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.03] md:group-hover:-rotate-1">
                                    <ResilientImage
                                        src={AGENCY_ASSETS.caseStudies[featured.imageKey]}
                                        alt={`${featured.title} interface mockup`}
                                        fallbackLabel={featured.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </Link>

                            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                                <div className="space-y-4">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#C4B5FD]">
                                        {featured.industry} · {featured.timeline} · {featured.deliveryYear}
                                    </p>

                                    <h3 className="text-2xl sm:text-3xl font-semibold leading-[1.15] text-[#F4F4F8] group-hover:text-[#DDD6FE] transition-colors">
                                        <Link href={`/work/${featured.slug}`}>{featured.title}</Link>
                                    </h3>

                                    <p className="text-xs font-mono uppercase tracking-[0.06em] text-[#737282]">
                                        {featured.clientLabel}
                                    </p>

                                    <p className="text-base leading-[1.68] text-[#B8B6C8]">
                                        {featured.oneLineOutcome}
                                    </p>
                                </div>

                                <div className="space-y-5 pt-6 border-t border-white/[0.08]">
                                    <p className="font-mono text-[12px] text-[#8E8CA0]">
                                        {featured.technologies.join(' · ')}
                                    </p>

                                    <p className="text-xs text-[#A6A5B5]">{featured.statusLabel}</p>

                                    <Link
                                        href={`/work/${featured.slug}`}
                                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium btn-webizera-glass group-hover:border-[#8B5CF6]/60"
                                    >
                                        <span>Read case study</span>
                                        <ArrowRight
                                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                )}

                {/* Secondary Gradient-Framed Showcase Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
                    {secondary.map((study, idx) => {
                        const backdrop = STUDIO_BACKDROPS[(idx + 1) % STUDIO_BACKDROPS.length];
                        return (
                            <motion.article
                                key={study.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{
                                    duration: 0.55,
                                    delay: idx * 0.08,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="group flex flex-col justify-between rounded-[26px] bg-[#0F0D1A]/90 border border-white/[0.08] overflow-hidden hover:border-[#8B5CF6]/55 transition-all duration-300 shadow-[0_24px_50px_-24px_rgba(76,29,149,0.38)]"
                            >
                                <div>
                                    <Link
                                        href={`/work/${study.slug}`}
                                        className={`block relative overflow-hidden bg-gradient-to-br ${backdrop} p-5 sm:p-6`}
                                    >
                                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-10px_rgba(0,0,0,0.65)] ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.04] md:group-hover:rotate-1">
                                            <ResilientImage
                                                src={AGENCY_ASSETS.caseStudies[study.imageKey]}
                                                alt={`${study.title} interface mockup`}
                                                fallbackLabel={study.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </Link>

                                    <div className="p-6 sm:p-7 space-y-3">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#C4B5FD]">
                                            {study.industry} · {study.timeline}
                                        </p>
                                        <h3 className="text-xl font-medium leading-snug text-[#F4F4F8] group-hover:text-[#DDD6FE] transition-colors">
                                            <Link href={`/work/${study.slug}`}>{study.title}</Link>
                                        </h3>
                                        <p className="text-sm leading-[1.65] text-[#A6A5B5]">
                                            {study.oneLineOutcome}
                                        </p>
                                    </div>
                                </div>

                                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-white/[0.07] space-y-3">
                                    <p className="font-mono text-[11px] text-[#8E8CA0]">
                                        {study.technologies.slice(0, 4).join(' · ')}
                                    </p>
                                    <p className="text-xs text-[#A6A5B5]">{study.statusLabel}</p>
                                    <Link
                                        href={`/work/${study.slug}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F4F4F8] hover:text-[#C4B5FD] transition-colors pt-1"
                                    >
                                        <span>Read case study</span>
                                        <ArrowRight
                                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}