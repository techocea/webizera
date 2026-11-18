'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAgencyContent } from '@/context/ContentContext';
import { AGENCY_ASSETS } from '@/data/assets';
import {ResilientImage} from "@/components/motion/ResilientImage";

export function CapabilitiesSection() {
    const { content } = useAgencyContent();
    const [activeId, setActiveId] = useState<string>(content.services[0]?.id ?? '');

    const activeService =
        content.services.find((s) => s.id === activeId) ?? content.services[0];

    return (
        <section
            id="capabilities"
            className="relative overflow-hidden bg-gradient-to-b from-[#060609] via-[#0D0A1B] to-[#060609] py-24 sm:py-32 lg:py-36"
        >
            {/* Subtle violet ambient spotlight */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/4 left-[-12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.18)_0%,transparent_70%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-14">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                            03 — Capabilities
                        </p>
                        <h2 className="text-[clamp(2.15rem,4.3vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F4F4F8]">
                            Interfaces and workflows built as one system.
                        </h2>
                    </div>

                    <Link
                        href="/capabilities"
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium btn-webizera-glass whitespace-nowrap shrink-0 self-start sm:self-auto"
                    >
                        <span>All capabilities</span>
                        <ArrowRight className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    {/* Interactive capability selector */}
                    <div className="lg:col-span-7 space-y-2.5">
                        {content.services.map((service) => {
                            const isSelected = service.id === activeService?.id;
                            return (
                                <div
                                    key={service.id}
                                    className={`relative rounded-2xl transition-colors duration-300 ${
                                        isSelected
                                            ? 'bg-[#171428]/90 border border-[#8B5CF6]/45 shadow-[0_18px_40px_-20px_rgba(124,58,237,0.4)]'
                                            : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04]'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onMouseEnter={() => setActiveId(service.id)}
                                        onFocus={() => setActiveId(service.id)}
                                        onClick={() => setActiveId(service.id)}
                                        aria-expanded={isSelected}
                                        className="w-full px-6 py-5 sm:px-7 sm:py-6 text-left flex items-start justify-between gap-6"
                                    >
                                        <div className="flex items-baseline gap-5 sm:gap-7">
                      <span
                          className={`font-mono text-xs tabular-nums transition-colors ${
                              isSelected ? 'text-[#C4B5FD]' : 'text-[#737282]'
                          }`}
                      >
                        {service.number}
                      </span>
                                            <div className="space-y-2">
                                                <h3
                                                    className={`text-lg sm:text-xl font-medium transition-colors ${
                                                        isSelected ? 'text-[#F4F4F8]' : 'text-[#A6A5B5]'
                                                    }`}
                                                >
                                                    {service.title}
                                                </h3>

                                                {isSelected && (
                                                    <div className="space-y-3 pt-1 lg:hidden">
                                                        <p className="text-sm leading-[1.65] text-[#A6A5B5]">
                                                            {service.shortDescription}
                                                        </p>
                                                        <p className="font-mono text-[11px] text-[#A78BFA]">
                                                            {service.tags.join(' · ')}
                                                        </p>
                                                        <Link
                                                            href={`/contact?service=${encodeURIComponent(service.inquiryType)}`}
                                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C4B5FD]"
                                                        >
                                                            <span>Explore capability</span>
                                                            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <ArrowRight
                                            className={`w-4 h-4 mt-1.5 shrink-0 transition-transform duration-300 ${
                                                isSelected
                                                    ? 'text-[#C4B5FD] translate-x-1'
                                                    : 'text-[#737282]'
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Sticky Studio-Framed Preview Panel */}
                    <div className="hidden lg:block lg:col-span-5">
                        {activeService && (
                            <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-[#19142B] via-[#100E1B] to-[#090810] border border-white/[0.1] overflow-hidden shadow-[0_32px_70px_-24px_rgba(109,40,217,0.35)]">
                                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#4C1D95]/50 via-[#1E1B4B]/40 to-[#090810] p-4">
                                    <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeService.id}
                                                initial={{ opacity: 0.65, scale: 1.04 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0.65 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="h-full w-full"
                                            >
                                                <ResilientImage
                                                    src={AGENCY_ASSETS.caseStudies[activeService.previewImageKey]}
                                                    alt={`${activeService.title} preview`}
                                                    fallbackLabel={activeService.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="p-7 space-y-5">
                                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-[#A78BFA]">
                                        <span>{activeService.number}</span>
                                        <span>{activeService.tags.join(' · ')}</span>
                                    </div>

                                    <p className="text-[15px] leading-[1.68] text-[#D1D0DC]">
                                        {activeService.shortDescription}
                                    </p>

                                    <ul className="space-y-2 pt-3 border-t border-white/[0.08] text-sm text-[#A6A5B5]">
                                        {activeService.deliverables.map((del) => (
                                            <li key={del} className="flex items-start gap-2">
                                                <span className="text-[#8B5CF6]">—</span>
                                                <span>{del}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-2">
                                        <Link
                                            href={`/contact?service=${encodeURIComponent(activeService.inquiryType)}`}
                                            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium btn-webizera-primary"
                                        >
                                            <span>Scope this capability</span>
                                            <ArrowRight
                                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}