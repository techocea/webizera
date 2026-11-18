'use client';

import Link from 'next/link';
import {motion} from 'motion/react';
import {useAgencyContent} from '@/context/ContentContext';
import {AGENCY_ASSETS} from '@/data/assets';
import {TestimonialItem} from "@/types/agency";
import {ResilientImage} from "@/components/motion/ResilientImage";
import {ArrowRight} from "lucide-react";
import React from "react";

function QuoteMarkGlyph({className = ''}: { className?: string }) {
    return (
        <svg
            viewBox="0 0 64 48"
            fill="none"
            aria-hidden="true"
            className={`pointer-events-none select-none ${className}`}
        >
            <path
                d="M24.8 4C14.6 8.2 8.4 16.5 8 27.6h13.6V44H4V27.6C4 13.6 11.4 3.4 24.8 0v4Zm34 0C48.6 8.2 42.4 16.5 42 27.6h13.6V44H38V27.6C38 13.6 45.4 3.4 58.8 0v4Z"
                fill="currentColor"
            />
        </svg>
    );
}

function getInitial(name: string): string {
    const trimmed = name.trim();
    return trimmed ? trimmed.charAt(0).toUpperCase() : 'W';
}

function DarkGlassTestimonialCard({
                                      testimonial,
                                      index,
                                      className = '',
                                  }: {
    testimonial: TestimonialItem;
    index: number;
    className?: string;
}) {
    return (
        <motion.blockquote
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#161228]/92 via-[#0D0B18]/95 to-[#08070E] border border-white/[0.08] hover:border-[#8B5CF6]/55 p-7 sm:p-8 flex flex-col justify-between gap-8 transition-all duration-300 hover:-translate-y-1 shadow-[0_24px_60px_-28px_rgba(91,33,182,0.45)] ${className}`}
        >
            {/* Subtle violet ambient spotlight on hover */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,transparent_70%)] opacity-45 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
            />

            {/* Sculptural translucent purple quote mark watermark */}
            <QuoteMarkGlyph
                className="absolute top-6 right-7 h-10 w-12 text-[#8B5CF6]/18 group-hover:text-[#A78BFA]/30 transition-colors duration-300"/>

            <div className="relative space-y-4 pr-8">
                {testimonial.categoryLabel && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C4B5FD]">
                        {testimonial.categoryLabel}
                    </p>
                )}
                <p className="text-[16px] sm:text-[17px] leading-[1.68] text-[#EFEFF5]">
                    “{testimonial.quote}”
                </p>
            </div>

            <footer className="relative pt-5 border-t border-white/[0.08] flex items-center gap-3.5">
        <span
            aria-hidden="true"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#6D28D9] to-[#4C1D95] text-sm font-semibold text-white ring-1 ring-white/20 shadow-[0_8px_20px_-4px_rgba(124,58,237,0.6)] shrink-0 font-display"
        >
          {getInitial(testimonial.author)}
        </span>
                <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#F4F4F8] truncate">
                        {testimonial.author}
                    </p>
                    <p className="text-xs text-[#A6A5B5] truncate">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </footer>
        </motion.blockquote>
    );
}

export function ProofFounderSection() {
    const {content} = useAgencyContent();
    const [spotlight, ...secondaryQuotes] = content.testimonials;

    return (
        <section
            id="founder"
            className="relative overflow-hidden bg-gradient-to-b from-[#060609] via-[#0A0814] to-[#060609] py-24 sm:py-32 lg:py-36"
        >
            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-28 sm:space-y-32">
                {/* 06 — Founder */}
                {/*<div className="space-y-12">*/}
                {/*    <div className="space-y-4 max-w-2xl">*/}
                {/*        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">*/}
                {/*            06 — Founder*/}
                {/*        </p>*/}
                {/*        <h2 className="text-[clamp(2.15rem,4.3vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F4F4F8]">*/}
                {/*            Work directly with the founder.*/}
                {/*        </h2>*/}
                {/*    </div>*/}

                {/*    <motion.div*/}
                {/*        initial={{opacity: 1, y: 12}}*/}
                {/*        whileInView={{opacity: 1, y: 0}}*/}
                {/*        viewport={{once: true, margin: '-80px'}}*/}
                {/*        transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}*/}
                {/*        className="-mx-5 sm:mx-0 p-[1.5px] rounded-none sm:rounded-[30px] bg-gradient-to-r from-[#7C3AED] via-[#C4B5FD] to-[#4F46E5] shadow-[0_24px_60px_-28px_rgba(124,58,237,0.35)]"*/}
                {/*    >*/}
                {/*        <div*/}
                {/*            className="rounded-none sm:rounded-[28.5px] bg-[#FFFFFF] px-6 py-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12">*/}
                {/*            <div*/}
                {/*                className="w-full max-w-[240px] sm:w-[220px] lg:w-[248px] aspect-square shrink-0 rounded-2xl overflow-hidden bg-[#F4F4F8] border border-[#E6E5EF]">*/}
                {/*                <ResilientImage*/}
                {/*                    src={AGENCY_ASSETS.founderPortrait}*/}
                {/*                    alt="Brightly Dunsford, Founder & CEO of Webizera"*/}
                {/*                    fallbackLabel="Brightly Dunsford — Founder & CEO"*/}
                {/*                    className="h-full w-full object-cover"*/}
                {/*                />*/}
                {/*            </div>*/}

                {/*            <div className="flex-1 space-y-6">*/}
                {/*                <div className="space-y-1.5">*/}
                {/*                    <h3 className="font-display text-2xl sm:text-[30px] font-semibold leading-tight tracking-[-0.02em] text-[#0B0B10]">*/}
                {/*                        Brightly Dunsford*/}
                {/*                    </h3>*/}
                {/*                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#6D28D9]">*/}
                {/*                        Founder &amp; CEO, Webizera*/}
                {/*                    </p>*/}
                {/*                </div>*/}

                {/*                <p className="text-lg sm:text-[21px] font-medium leading-[1.45] tracking-[-0.01em] text-[#1F1E29] max-w-[44ch]">*/}
                {/*                    Planning a high-impact website or custom digital system? Connect directly to*/}
                {/*                    discuss your next project.*/}
                {/*                </p>*/}

                {/*                <div className="flex flex-wrap items-center gap-3.5 pt-1">*/}
                {/*                    <a*/}
                {/*                        href="https://www.linkedin.com/in/brightlydunsford"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noopener noreferrer"*/}
                {/*                        aria-label="Connect with Brightly Dunsford on LinkedIn"*/}
                {/*                        className="inline-flex items-center gap-2.5 rounded-full bg-[#0B0B10] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#6D28D9] transition-colors duration-200 min-h-[44px]"*/}
                {/*                    >*/}
                {/*                        <svg className="w-5 h-5" fill="#ffffff" version="1.1" id="Capa_1"*/}
                {/*                             xmlns="http://www.w3.org/2000/svg"*/}
                {/*                             xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.959 45.959"*/}
                {/*                             xmlSpace="preserve" stroke="#ffffff" color="rgb(255, 255, 255)">*/}
                {/*                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>*/}
                {/*                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"*/}
                {/*                               strokeLinejoin="round"></g>*/}
                {/*                            <g id="SVGRepo_iconCarrier">*/}
                {/*                                <g>*/}
                {/*                                    <g>*/}
                {/*                                        <path*/}
                {/*                                            d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489 c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733 C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123 C8.729,6.477,8.416,7.256,7.847,7.811z"></path>*/}
                {/*                                        <path*/}
                {/*                                            d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"></path>*/}
                {/*                                        <path*/}
                {/*                                            d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711 c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67 C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797 c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473 c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"></path>*/}
                {/*                                    </g>*/}
                {/*                                </g>*/}
                {/*                            </g>*/}
                {/*                        </svg>*/}
                {/*                        <span>Connect on LinkedIn</span>*/}
                {/*                    </a>*/}

                {/*                    <Link*/}
                {/*                        href="/contact"*/}
                {/*                        className="group inline-flex items-center gap-2 rounded-full border border-[#DCDAE8] bg-white px-5 py-2.5 text-sm font-medium text-[#0B0B10] hover:border-[#7C3AED] hover:text-[#6D28D9] transition-colors duration-200 min-h-[44px]"*/}
                {/*                    >*/}
                {/*                        <span>Start a project</span>*/}
                {/*                        <ArrowRight*/}
                {/*                            className="w-4 h-4 text-[#6D28D9] transition-transform duration-200 group-hover:translate-x-0.5"*/}
                {/*                            aria-hidden="true"*/}
                {/*                        />*/}
                {/*                    </Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </motion.div>*/}
                {/*</div>*/}

                {/* 07 — Real Client Testimonials (Asymmetric Bento Grid + High-Contrast Light Spotlight) */}
                <div id="testimonials" className="space-y-12">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div className="space-y-4 max-w-2xl">
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                                06 — Client Outcomes
                            </p>
                            <h2 className="text-[clamp(2.15rem,4.3vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F4F4F8]">
                                Trusted by operators who measure results.
                            </h2>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium btn-webizera-glass whitespace-nowrap shrink-0 self-start sm:self-auto"
                        >
                            <span>Discuss your system</span>
                            <ArrowRight className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true"/>
                        </Link>
                    </div>

                    {spotlight && (
                        <div className="space-y-6">
                            {/* Row 1: 7-col High-Contrast Light Spotlight + 5-col Obsidian-Violet Glass */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                                <motion.blockquote
                                    initial={{opacity: 0, y: 20, scale: 0.99}}
                                    whileInView={{opacity: 1, y: 0, scale: 1}}
                                    viewport={{once: true, margin: '-60px'}}
                                    transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
                                    className="lg:col-span-7 relative overflow-hidden -mx-5 sm:mx-0 rounded-none sm:rounded-[32px] bg-[#FAF9FD] text-[#0B0B10] px-6 py-10 sm:p-10 lg:p-12 flex flex-col justify-between gap-10 shadow-[0_32px_70px_-24px_rgba(124,58,237,0.3)]"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(196,181,253,0.12)_50%,transparent_75%)] blur-2xl"
                                    />

                                    <QuoteMarkGlyph className="absolute top-7 right-8 h-12 w-14 text-[#7C3AED]/14"/>

                                    <div className="relative space-y-5 pr-10">
                                        {spotlight.categoryLabel && (
                                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6D28D9]">
                                                {spotlight.categoryLabel}
                                            </p>
                                        )}
                                        <p className="font-display text-[clamp(1.3rem,2.2vw,1.75rem)] font-medium leading-[1.42] tracking-[-0.015em] text-[#0B0B10]">
                                            “{spotlight.quote}”
                                        </p>
                                    </div>

                                    <footer
                                        className="relative pt-6 border-t border-[#E6E4F0] flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4 min-w-0">
                      <span
                          aria-hidden="true"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] text-base font-semibold text-white shadow-[0_10px_24px_-6px_rgba(109,40,217,0.55)] shrink-0 font-display"
                      >
                        {getInitial(spotlight.author)}
                      </span>
                                            <div className="min-w-0">
                                                <p className="text-base font-semibold text-[#0B0B10] truncate">
                                                    {spotlight.author}
                                                </p>
                                                <p className="text-sm text-[#4B4A58] truncate">
                                                    {spotlight.role}, {spotlight.company}
                                                </p>
                                            </div>
                                        </div>
                                    </footer>
                                </motion.blockquote>

                                {secondaryQuotes[0] && (
                                    <DarkGlassTestimonialCard
                                        testimonial={secondaryQuotes[0]}
                                        index={1}
                                        className="lg:col-span-5"
                                    />
                                )}
                            </div>

                            {/* Row 2: Balanced 3-Column Bento Grid for Remaining Real Testimonials */}
                            {secondaryQuotes.length > 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {secondaryQuotes.slice(1).map((testimonial, idx) => (
                                        <DarkGlassTestimonialCard
                                            key={testimonial.id}
                                            testimonial={testimonial}
                                            index={idx + 2}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


