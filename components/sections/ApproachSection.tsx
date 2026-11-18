'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    type MotionValue,
} from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ApproachStep {
    number: string;
    title: string;
    detail: string;
    artifact: string;
}

const APPROACH_STEPS: ApproachStep[] = [
    {
        number: '01',
        title: 'Diagnose',
        detail:
            'Audit how attention enters the business, where inquiries stall, and which operational tasks still rely on spreadsheets or manual chasing.',
        artifact: 'System diagnosis & bottleneck map',
    },
    {
        number: '02',
        title: 'Define',
        detail:
            'Agree on exact scope, page hierarchy, booking or portal flows, third-party integrations, and investment before design starts.',
        artifact: 'Written scope & flow architecture',
    },
    {
        number: '03',
        title: 'Design',
        detail:
            'Shape calm, high-contrast interfaces tailored to your customers and internal staff—clarifying every decision and removing unnecessary steps.',
        artifact: 'Interactive interface & system specs',
    },
    {
        number: '04',
        title: 'Build',
        detail:
            'Engineer the website, portal, scheduling logic, and webhook automations in clean TypeScript with validated forms and fast mobile load times.',
        artifact: 'Staging build & integration testing',
    },
    {
        number: '05',
        title: 'Launch & refine',
        detail:
            'Ship with clean URLs, schema metadata, and analytics—then refine conversion bottlenecks and automated workflows using real usage data.',
        artifact: 'Production launch & documentation',
    },
];

export function ApproachSection({ showHeaderLink = true }: { showHeaderLink?: boolean }) {
    const journeyRef = useRef<HTMLOListElement | null>(null);
    const reducedMotion = Boolean(useReducedMotion());

    const { scrollYProgress } = useScroll({
        target: journeyRef,
        offset: ['start 74%', 'end 62%'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 130,
        damping: 26,
        restDelta: 0.001,
    });

    return (
        <section
            id="approach"
            className="relative overflow-hidden bg-gradient-to-b from-[#060609] via-[#0E0B1A] to-[#060609] py-24 sm:py-32 lg:py-36"
        >
            {/* Subtle atmospheric glow behind the journey spine */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[640px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.12)_0%,transparent_70%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                            05 — Approach
                        </p>
                        <h2 className="text-[clamp(2.15rem,4.3vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#F4F4F8]">
                            A connected journey from friction to system.
                        </h2>
                    </div>

                    {showHeaderLink && (
                        <Link
                            href="/approach"
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium btn-webizera-glass whitespace-nowrap shrink-0 self-start sm:self-auto"
                        >
                            <span>Our approach</span>
                            <ArrowRight className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                        </Link>
                    )}
                </div>

                <ol ref={journeyRef} className="relative space-y-8 sm:space-y-10 lg:space-y-12 py-2">
                    {/* Continuous vertical track (left rail on mobile, centered spine on desktop) */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 bottom-0 left-5 -translate-x-1/2 lg:left-1/2 w-[10px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_44px,black_calc(100%-44px),transparent_100%)]"
                    >
                        {/* Dormant hairline track */}
                        <div className="mx-auto h-full w-[2px] rounded-full bg-white/[0.08]" />

                        {/* Soft wide violet aura beam */}
                        <motion.div
                            style={
                                reducedMotion
                                    ? { scaleY: 1, opacity: 0.75 }
                                    : { scaleY: smoothProgress, opacity: 0.85 }
                            }
                            className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-[#6D28D9]/45 via-[#8B5CF6]/70 to-[#C4B5FD]/60 blur-[5px]"
                        />

                        {/* Crisp luminous core line */}
                        <motion.div
                            style={reducedMotion ? { scaleY: 1 } : { scaleY: smoothProgress }}
                            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] origin-top rounded-full bg-gradient-to-b from-[#6D28D9] via-[#8B5CF6] to-[#DDD6FE]"
                        />
                    </div>

                    {APPROACH_STEPS.map((step, index) => (
                        <JourneyStepRow
                            key={step.number}
                            step={step}
                            index={index}
                            total={APPROACH_STEPS.length}
                            progress={smoothProgress}
                            reducedMotion={reducedMotion}
                        />
                    ))}
                </ol>
            </div>
        </section>
    );
}

function JourneyStepRow({
                            step,
                            index,
                            total,
                            progress,
                            reducedMotion,
                        }: {
    step: ApproachStep;
    index: number;
    total: number;
    progress: MotionValue<number>;
    reducedMotion: boolean;
}) {
    const isLeft = index % 2 === 0;
    const threshold = (index + 0.28) / total;
    const start = Math.max(0, threshold - 0.11);
    const end = Math.min(1, threshold + 0.04);

    const stepGlow = useTransform(progress, [start, end], [0, 1], { clamp: true });

    return (
        <li className="relative pl-12 lg:pl-0">
            {/* Horizontal connector branch linking the spine node to the card */}
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-[61px] left-5 w-7 h-[2px] overflow-hidden ${
                    isLeft
                        ? 'lg:left-auto lg:right-1/2 lg:w-14'
                        : 'lg:left-1/2 lg:right-auto lg:w-14'
                }`}
            >
                <div className="h-full w-full bg-white/[0.08]" />
                <motion.div
                    style={
                        reducedMotion
                            ? { scaleX: 1, opacity: 1 }
                            : { scaleX: stepGlow, opacity: stepGlow }
                    }
                    className={`absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] shadow-[0_0_12px_rgba(139,92,246,0.7)] origin-left ${
                        isLeft ? 'lg:origin-right lg:bg-gradient-to-l' : 'lg:origin-left'
                    }`}
                />
            </div>

            {/* Step node anchored on the vertical spine */}
            <div
                aria-hidden="true"
                className="absolute top-[41px] left-5 -translate-x-1/2 lg:left-1/2 z-10 flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center"
            >
                {/* Outer violet halo that illuminates when scroll beam passes */}
                <motion.div
                    style={reducedMotion ? { opacity: 0.75, scale: 1 } : { opacity: stepGlow, scale: stepGlow }}
                    className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.55)_0%,rgba(109,40,217,0.18)_55%,transparent_75%)] blur-[5px]"
                />

                {/* Dormant node ring */}
                <div className="relative flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-white/15 bg-[#090811] shadow-[0_8px_20px_-6px_rgba(0,0,0,0.8)]">
                    <span className="font-mono text-xs text-[#8E8CA0] tabular-nums">{step.number}</span>

                    {/* Active illuminated node state */}
                    <motion.div
                        style={reducedMotion ? { opacity: 1 } : { opacity: stepGlow }}
                        className="absolute inset-0 flex items-center justify-center rounded-full border border-[#C4B5FD]/75 bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#4C1D95] shadow-[0_0_22px_rgba(139,92,246,0.55),inset_0_1px_0_rgba(255,255,255,0.28)]"
                    >
            <span className="font-mono text-xs font-medium text-white tabular-nums">
              {step.number}
            </span>
                    </motion.div>
                </div>
            </div>

            {/* Alternating card column on desktop (left for even index, right for odd index); full-width on mobile */}
            <div className={isLeft ? 'lg:w-1/2 lg:pr-14' : 'lg:w-1/2 lg:ml-auto lg:pl-14'}>
                <motion.div
                    initial={reducedMotion ? false : { y: 12, opacity: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141122]/95 via-[#0E0C18]/95 to-[#090810]/95 border border-white/[0.08] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-0.5"
                >
                    {/* Scroll-triggered luminous border & subtle corner aura */}
                    <motion.div
                        aria-hidden="true"
                        style={reducedMotion ? { opacity: 0.85 } : { opacity: stepGlow }}
                        className="pointer-events-none absolute inset-0 rounded-3xl border border-[#8B5CF6]/45 shadow-[inset_0_1px_0_rgba(196,181,253,0.16)]"
                    />
                    <motion.div
                        aria-hidden="true"
                        style={reducedMotion ? { opacity: 0.7 } : { opacity: stepGlow }}
                        className={`pointer-events-none absolute -top-24 ${
                            isLeft ? 'lg:-right-20 -left-20 lg:left-auto' : '-left-20'
                        } h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16)_0%,transparent_70%)]`}
                    />

                    <div className="relative z-10 space-y-4">
                        <div className="flex items-baseline justify-between gap-4">
                            <h3 className="text-xl sm:text-2xl font-medium text-[#F4F4F8] tracking-tight">
                                {step.title}
                            </h3>
                            <span className="font-mono text-[11px] text-[#8E8CA0] tabular-nums">
                Stage {step.number}
              </span>
                        </div>

                        <p className="text-sm sm:text-[15px] leading-[1.68] text-[#A6A5B5]">{step.detail}</p>

                        <div className="pt-3 border-t border-white/[0.07] flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.07em] text-[#A78BFA] group-hover:text-[#DDD6FE] transition-colors">
                {step.artifact}
              </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </li>
    );
}