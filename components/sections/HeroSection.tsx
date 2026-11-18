'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import {motion} from 'motion/react';
import {ParallaxDrift, MagneticWrap, SplitLineReveal,} from "@/components/motion/MotionPrimitives";
import {ArrowRight} from "lucide-react";
import {HERO_CALLOUTS} from "@/data/constants";

const HeroScene = dynamic(
    () => import("@/components/motion/HeroScene").then((mod) => ({default: mod.HeroScene})),
    {ssr: false}
)

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#060609] min-h-[600px] lg:min-h-[700px] flex items-center">
            {/* Architectural faint grid fading softly into obsidian */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-grid-architectural [mask-image:radial-gradient(ellipse_78%_72%_at_65%_45%,#000_35%,transparent_100%)]"
            />

            {/* Atmospheric purple radial washes */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-36 right-[-8%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.34)_0%,rgba(76,29,149,0.16)_42%,transparent_72%)] blur-2xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-120px] left-[-10%] h-[460px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(91,33,182,0.18)_0%,transparent_70%)] blur-3xl"
            />

            {/* Unclipped Full-Bleed WebGL Wireframe Canvas directly inside Hero */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1]"
            >
                <HeroScene />
            </div>

            {/* Subtle left-side readability vignette on narrow viewports */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#060609]/85 via-[#060609]/45 to-transparent lg:from-[#060609]/70 lg:via-transparent"
            />

            <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-14 pb-20 sm:pt-20 sm:pb-24 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">
                    <div className="lg:col-span-6 space-y-7">
                        <motion.div
                            initial={{ opacity: 1, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#A6A5B5]"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
                            <span>Independent Digital Studio · Sri Lanka</span>
                        </motion.div>

                        <h1 className="text-[clamp(2.85rem,6.4vw,5.4rem)] font-semibold leading-[1.01] tracking-[-0.03em] text-[#F4F4F8]">
                            <SplitLineReveal
                                lines={['The system behind', 'a growing business.']}
                                baseDelay={0.08}
                            />
                        </h1>

                        <motion.p
                            initial={{ opacity: 1, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-[54ch] text-[17px] sm:text-[18px] leading-[1.68] text-[#B8B6C8]"
                        >
                            Webizera designs and builds conversion-focused websites, booking systems, client
                            portals, dashboards, and automation that turn attention into action—and manual work
                            into a system.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 1, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-4 pt-2"
                        >
                            <MagneticWrap>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium btn-webizera-primary whitespace-nowrap shrink-0 min-h-[46px]"
                                >
                                    <span>Start a project</span>
                                    <ArrowRight
                                        className="w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </MagneticWrap>

                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium btn-webizera-glass whitespace-nowrap shrink-0 min-h-[46px]"
                            >
                                <span>See the work</span>
                            </Link>
                        </motion.div>

                        <p className="font-mono text-[12px] text-[#737282] pt-1">
                            Currently accepting select projects · Direct founder access
                        </p>
                    </div>

                    {/* Open Spatial Layer for Floating Glass Callouts (no background box) */}
                    <div className="lg:col-span-6 hidden md:block relative h-[480px] lg:h-[520px]">
                        {HERO_CALLOUTS.map((callout) => {
                            const Icon = callout.icon;
                            return (
                                <div
                                    key={callout.label}
                                    className={`absolute ${callout.positionClass} z-20`}
                                >
                                    <ParallaxDrift offset={callout.offset}>
                                        <motion.div
                                            initial={{ opacity: 1, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: callout.delay * 0.4,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="glass-surface rounded-2xl px-4 py-3 flex items-center gap-3 transition-transform duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/55"
                                        >
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7C3AED]/20 border border-[#8B5CF6]/30 text-[#C4B5FD]">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </span>
                                            <div>
                                                <p className="text-xs sm:text-sm font-medium text-[#F4F4F8] whitespace-nowrap">
                                                    {callout.label}
                                                </p>
                                                <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#A6A5B5] whitespace-nowrap">
                                                    {callout.sub}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </ParallaxDrift>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}