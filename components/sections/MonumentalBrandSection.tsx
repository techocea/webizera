'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Layers, CalendarClock, Sparkles } from 'lucide-react';
import {MagneticWrap, ParallaxDrift} from "@/components/motion/MotionPrimitives"

const FLOATING_STACK_CARDS = [
    {
        icon: Layers,
        title: 'Web Engineering',
        stack: 'React · Next.js · TypeScript',
        className: 'lg:absolute lg:top-[8%] lg:left-[4%]',
        offsetY: 36,
        offsetX: -12,
        delay: 0.1,
    },
    {
        icon: CalendarClock,
        title: 'Booking & Portals',
        stack: 'Scheduling · Auth · Workflows',
        className: 'lg:absolute lg:top-[38%] lg:right-[3%]',
        offsetY: -28,
        offsetX: 14,
        delay: 0.2,
    },
    {
        icon: Sparkles,
        title: 'Product Interface Design',
        stack: 'UI/UX · Design Systems · Motion',
        className: 'lg:absolute lg:bottom-[10%] lg:left-[8%]',
        offsetY: 26,
        offsetX: 10,
        delay: 0.3,
    },
];

export function MonumentalBrandSection() {
    return (
        <section className="relative overflow-hidden bg-[#060609] py-24 sm:py-32 lg:py-40">
            {/* Subtle architectural grid backdrop */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-grid-architectural [mask-image:radial-gradient(ellipse_80%_75%_at_50%_50%,#000_40%,transparent_100%)]"
            />

            {/* Rich violet center radial wash */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_62%_56%_at_50%_50%,rgba(109,40,217,0.34)_0%,rgba(59,7,100,0.16)_48%,transparent_78%)]"
            />

            <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
                <div className="relative flex flex-col items-center justify-center py-6 sm:py-12 lg:py-16">
                    {/* Monumental Stacked Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center select-none"
                    >
                        <h2 className="font-display font-bold uppercase tracking-[-0.04em] leading-[0.88] text-[clamp(3.35rem,11.5vw,9.25rem)]">
                            <span className="block text-[#F4F4F8]">Build</span>
                            <span className="block text-gradient-violet">Smarter</span>
                            <span className="block text-[#F4F4F8]">Systems</span>
                        </h2>
                    </motion.div>

                    {/* Floating Glass Stack Badges */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:block gap-4 w-full lg:mt-0">
                        {FLOATING_STACK_CARDS.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.title} className={`${card.className} z-20`}>
                                    <ParallaxDrift offset={card.offsetY} horizontalOffset={card.offsetX}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.94 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.55,
                                                delay: card.delay,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="glass-surface rounded-2xl px-4 py-3.5 flex items-center gap-3.5 hover:border-[#A78BFA]/60 transition-colors"
                                        >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6]/35 to-[#4C1D95]/60 border border-[#C4B5FD]/30 text-[#E9D5FF] shrink-0">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </span>
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-[#F4F4F8] whitespace-nowrap">
                                                    {card.title}
                                                </p>
                                                <p className="font-mono text-[11px] text-[#A6A5B5] whitespace-nowrap">
                                                    {card.stack}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </ParallaxDrift>
                                </div>
                            );
                        })}
                    </div>

                    {/* Rotating Circular Kinetic CTA Badge */}
                    <div className="mt-10 lg:mt-0 lg:absolute lg:bottom-[4%] lg:right-[6%] z-30">
                        <MagneticWrap>
                            <Link
                                href="/contact"
                                aria-label="Start a project with Webizera"
                                className="group relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center"
                            >
                                <svg
                                    viewBox="0 0 120 120"
                                    className="h-full w-full animate-spin-slow text-[#D8B4FE]/85"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <path
                                            id="webizeraCircleText"
                                            d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                                        />
                                    </defs>
                                    <text className="fill-current font-mono text-[8.7px] uppercase tracking-[0.21em]">
                                        <textPath href="#webizeraCircleText">
                                            WEBIZERA SYSTEMS · DIRECT FOUNDER ·
                                        </textPath>
                                    </text>
                                </svg>

                                <span className="absolute flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#5B21B6] text-white shadow-[0_0_32px_rgba(139,92,246,0.65)] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                  />
                </span>
                            </Link>
                        </MagneticWrap>
                    </div>
                </div>
            </div>
        </section>
    );
}