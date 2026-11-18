'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import {MagneticWrap} from "@/components/motion/MotionPrimitives";
import {PROBLEMS} from "@/data/constants";

export function BeliefProblemSection() {
    return (
        <section className="relative bg-[#060609] py-8 sm:py-14 lg:py-20">
            <div className="space-y-20 sm:space-y-28 lg:space-y-32">
                {/* 01 — High-Contrast Light Showcase Card (Full-width edge-to-edge on mobile, rounded on sm+) */}
                <div className="mx-auto max-w-[1320px] px-0 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.985 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden rounded-none sm:rounded-[32px] lg:rounded-[36px] bg-[#FAF9FD] text-[#0B0B10] shadow-[0_32px_80px_-24px_rgba(124,58,237,0.28)]"
                    >
                        {/* Soft radial blooms */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-28 -left-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.24)_0%,rgba(196,181,253,0.12)_45%,transparent_75%)] blur-2xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-32 right-[12%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] blur-2xl"
                        />

                        {/* Calm slow-drifting bezier curves */}
                        <LightSectionAmbientCurves />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-6 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
                            <div className="lg:col-span-7 space-y-6">
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6D28D9]">
                                    01 — Core Belief
                                </p>

                                <h2 className="text-[clamp(2.2rem,4.8vw,4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#0B0B10]">
                                    Systems-first,
                                    <span className="block text-gradient-violet-dark">not just a website.</span>
                                </h2>

                                <p className="max-w-[54ch] text-base sm:text-[17px] leading-[1.68] text-[#4B4A58]">
                                    Most businesses have a website. Few have a digital system that makes it easy for
                                    customers to understand them, trust them, take action, and get a response.
                                    Webizera engineers that missing layer cleanly.
                                </p>

                                <div className="pt-2 flex flex-wrap items-center gap-4">
                                    <MagneticWrap>
                                        <Link
                                            href="/contact"
                                            className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium btn-webizera-dark min-h-[46px]"
                                        >
                                            <span>Estimate my project</span>
                                            <ArrowRight
                                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </MagneticWrap>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <IsometricSystemEmblem />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 02 — Bottlenecks Solved */}
                <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                        <div className="lg:col-span-7 space-y-4">
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                                02 — Where Momentum Breaks
                            </p>
                            <h2 className="text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F4F4F8]">
                                Why most websites feel disconnected from daily operations.
                            </h2>
                        </div>
                        <p className="lg:col-span-5 text-base leading-[1.65] text-[#A6A5B5]">
                            We connect the front-end customer experience directly to bookings, intake workflows,
                            and internal visibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                        {PROBLEMS.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.07,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141222] via-[#0D0C15] to-[#08070D] p-7 sm:p-9 border border-white/[0.07] hover:border-[#8B5CF6]/45 transition-all duration-300"
                            >
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <span className="font-mono text-xs text-[#C4B5FD] tabular-nums">
                  0{index + 1}
                </span>
                                <h3 className="mt-4 text-xl font-medium text-[#F4F4F8] leading-snug">
                                    {problem.title}
                                </h3>
                                <p className="mt-2.5 text-sm sm:text-[15px] leading-[1.65] text-[#A6A5B5]">
                                    {problem.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function LightSectionAmbientCurves() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
                viewBox="0 0 1440 520"
                preserveAspectRatio="none"
                className="absolute -inset-x-[6%] top-0 h-full w-[112%] animate-curve-drift-a opacity-80"
            >
                <defs>
                    <linearGradient id="lightCurveA" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                        <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.16" />
                        <stop offset="65%" stopColor="#6366F1" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lightRibbonFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.16" />
                        <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <path
                    d="M-60,340 C260,210 520,440 860,280 C1140,150 1320,250 1500,140 L1500,520 L-60,520 Z"
                    fill="url(#lightRibbonFill)"
                />
                <path
                    d="M-60,310 C260,180 540,410 880,255 C1150,130 1320,220 1500,115"
                    fill="none"
                    stroke="url(#lightCurveA)"
                    strokeWidth="1.75"
                />
                <path
                    d="M-40,380 C300,255 580,455 920,305 C1180,190 1350,270 1500,180"
                    fill="none"
                    stroke="url(#lightCurveA)"
                    strokeWidth="1.1"
                />
            </svg>

            <svg
                viewBox="0 0 1440 520"
                preserveAspectRatio="none"
                className="absolute -inset-x-[6%] top-0 h-full w-[112%] animate-curve-drift-b opacity-70"
            >
                <defs>
                    <linearGradient id="lightCurveB" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
                        <stop offset="45%" stopColor="#7C3AED" stopOpacity="0.13" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d="M-50,140 C280,250 610,60 940,210 C1210,330 1360,190 1500,270"
                    fill="none"
                    stroke="url(#lightCurveB)"
                    strokeWidth="1.4"
                />
            </svg>
        </div>
    );
}

function IsometricSystemEmblem() {
    return (
        <div className="relative flex items-center justify-center w-full h-full min-h-[220px] sm:min-h-[300px]">
            <div
                aria-hidden="true"
                className="absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-xl"
            />
            <motion.svg
                viewBox="0 0 280 280"
                className="relative w-52 h-52 sm:w-64 sm:h-64 drop-shadow-[0_28px_36px_rgba(17,17,22,0.28)]"
                initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="metalFaceA" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B3A4A" />
                        <stop offset="45%" stopColor="#17171F" />
                        <stop offset="100%" stopColor="#09090D" />
                    </linearGradient>
                    <linearGradient id="metalFaceB" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#525266" />
                        <stop offset="50%" stopColor="#1F1E2A" />
                        <stop offset="100%" stopColor="#0C0C12" />
                    </linearGradient>
                    <linearGradient id="violetEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C4B5FD" />
                        <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                </defs>

                <polygon
                    points="148,26 226,92 148,158 70,92"
                    fill="url(#metalFaceA)"
                    stroke="url(#violetEdge)"
                    strokeOpacity="0.32"
                    strokeWidth="1.5"
                />
                <polygon points="148,58 192,92 148,126 104,92" fill="#F7F7FB" />

                <polygon points="66,112 128,162 128,242 66,192" fill="url(#metalFaceB)" />
                <polygon points="128,162 212,126 212,202 128,242" fill="url(#metalFaceA)" />
                <polygon points="128,162 212,126 174,100 94,136" fill="#272634" />
                <polygon
                    points="128,158 196,129 196,136 128,165"
                    fill="url(#violetEdge)"
                    fillOpacity="0.85"
                />
            </motion.svg>
        </div>
    );
}