import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Info } from 'lucide-react';
import { DEFAULT_AGENCY_CONTENT } from '@/data/constants';
import { buildMetadata } from '@/lib/seo';
import { AGENCY_ASSETS } from '@/data/assets';
import { ResilientImage } from '@/components/motion/ResilientImage';
import { CtaSection } from '@/components/sections/CtaSection';


export function generateStaticParams() {
    return DEFAULT_AGENCY_CONTENT.caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const study = DEFAULT_AGENCY_CONTENT.caseStudies.find((item) => item.slug === slug);
    if (!study) {
        return buildMetadata({
            title: 'Case Study Not Found | Webizera',
            description: 'The requested case study could not be found.',
            path: `/work/${slug}`,
        });
    }
    return buildMetadata({
        title: `${study.title} — Case Study | Webizera`,
        description: study.oneLineOutcome,
        path: `/work/${study.slug}`,
    });
}

export default async function CaseStudyPage({
                                                params,
                                            }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const content = DEFAULT_AGENCY_CONTENT;
    const study = content.caseStudies.find((item) => item.slug === slug);

    if (!study) {
        notFound();
    }

    const relatedStudies = content.caseStudies
        .filter((item) => item.slug !== study.slug)
        .slice(0, 2);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: study.title,
        description: study.oneLineOutcome,
        creator: {
            '@type': 'Organization',
            name: 'Webizera',
        },
        datePublished: study.deliveryYear,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="bg-[#060609]">
                {/* Header & Studio-Framed Hero Mockup */}
                <header className="relative overflow-hidden py-16 lg:py-24">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-28 right-[-8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] blur-3xl"
                    />
                    <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-12">
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-sm text-[#A6A5B5] hover:text-[#F4F4F8] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                            <span>All selected work</span>
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-7 space-y-6">
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C4B5FD]">
                                    {study.industry} · {study.projectType} · {study.deliveryYear}
                                </p>

                                <h1 className="text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#F4F4F8]">
                                    {study.title}
                                </h1>

                                <p className="text-base sm:text-lg leading-[1.68] text-[#A6A5B5] max-w-[60ch]">
                                    {study.oneLineOutcome}
                                </p>

                                <div className="pt-2">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium btn-webizera-primary"
                                    >
                                        <span>Start a project</span>
                                        <ArrowRight className="w-4 h-4" aria-hidden="true"/>
                                    </Link>
                                </div>

                                <div
                                    className="hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 flex items-start gap-3.5">
                                    <Info className="w-4 h-4 text-[#C4B5FD] mt-0.5 shrink-0" aria-hidden="true"/>
                                    <div className="text-sm text-[#A6A5B5] space-y-2">
                                        <p>{study.availabilityNotice}</p>
                                        {study.isLive && study.liveUrl ? (
                                            <a
                                                href={study.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 font-medium text-[#F4F4F8] hover:text-[#C4B5FD]"
                                            >
                                                <span>Visit live website</span>
                                                <ArrowUpRight className="w-4 h-4" aria-hidden="true"/>
                                            </a>
                                        ) : (
                                            <Link
                                                href={`/contact?service=${encodeURIComponent(study.projectType)}`}
                                                className="inline-flex items-center gap-1.5 font-medium text-[#F4F4F8] hover:text-[#C4B5FD]"
                                            >
                                                <span>Request walkthrough screenshots</span>
                                                <ArrowRight className="w-4 h-4" aria-hidden="true"/>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Spec Sheet */}
                            <div
                                className="lg:col-span-5 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#141122] to-[#0A0912] p-7 space-y-5">
                                <div className="pb-4 border-b border-white/[0.08]">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8CA0] mb-1">
                    Client
                  </span>
                                    <p className="text-sm font-medium text-[#F4F4F8]">{study.clientLabel}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/[0.08]">
                                    <div>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8CA0] mb-1">
                      Year
                    </span>
                                        <span className="text-sm font-mono text-[#F4F4F8] tabular-nums">
                      {study.deliveryYear}
                    </span>
                                    </div>
                                    <div>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8CA0] mb-1">
                      Timeline
                    </span>
                                        <span className="text-sm font-mono text-[#F4F4F8] tabular-nums">
                      {study.timeline}
                    </span>
                                    </div>
                                </div>

                                <div className="pb-4 border-b border-white/[0.08]">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8CA0] mb-2">
                    Services Provided
                  </span>
                                    <ul className="space-y-1.5 text-sm text-[#A6A5B5]">
                                        {study.servicesProvided.map((service) => (
                                            <li key={service}>{service}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8CA0] mb-1.5">
                    Technology Stack
                  </span>
                                    <p className="text-sm text-[#F4F4F8]">{study.technologies.join(' · ')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Studio Gradient Screenshot Frame */}
                        <div className="rounded-[28px] sm:rounded-[34px] bg-gradient-to-br from-[#5B21B6]/70 via-[#3B0764]/60 to-[#0E0B1A] p-4 sm:p-8 lg:p-10 border border-white/[0.1] shadow-[0_30px_70px_-24px_rgba(109,40,217,0.4)]">
                            <div className="rounded-2xl overflow-hidden aspect-[16/9] ring-1 ring-white/15 bg-[#090810]">
                                <ResilientImage
                                    src={AGENCY_ASSETS.caseStudies[study.imageKey]}
                                    alt={`${study.title} interface mockup`}
                                    fallbackLabel={study.title}
                                    loading="eager"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Challenge, Goal, Approach */}
                <section className="bg-gradient-to-b from-[#060609] via-[#0D0A1B] to-[#060609] py-20 lg:py-24">
                    <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 space-y-3">
                            <span className="font-mono text-xs text-[#C4B5FD] tabular-nums">01 — Challenge</span>
                            <h2 className="text-xl font-medium text-[#F4F4F8]">Where friction started</h2>
                            <p className="text-sm sm:text-base leading-[1.65] text-[#A6A5B5]">
                                {study.problemBefore}
                            </p>
                        </div>
                        <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 space-y-3">
                            <span className="font-mono text-xs text-[#C4B5FD] tabular-nums">02 — Goal</span>
                            <h2 className="text-xl font-medium text-[#F4F4F8]">What the client needed</h2>
                            <p className="text-sm sm:text-base leading-[1.65] text-[#A6A5B5]">
                                {study.clientGoal}
                            </p>
                        </div>
                        <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 space-y-3">
                            <span className="font-mono text-xs text-[#C4B5FD] tabular-nums">03 — Approach</span>
                            <h2 className="text-xl font-medium text-[#F4F4F8]">How we structured it</h2>
                            <p className="text-sm sm:text-base leading-[1.65] text-[#A6A5B5]">{study.approach}</p>
                        </div>
                    </div>
                </section>

                {/* What Was Built, Key Features & Design Decisions */}
                <section className="bg-[#060609] py-20 lg:py-24">
                    <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-6 space-y-10">
                            <div className="space-y-3">
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                                    What Was Built
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-semibold text-[#F4F4F8]">
                                    System architecture &amp; execution
                                </h2>
                                <p className="text-base leading-[1.68] text-[#A6A5B5]">{study.whatWeBuilt}</p>
                                <p className="text-base leading-[1.68] text-[#8E8CA0] pt-2">{study.solution}</p>
                            </div>

                            <div className="pt-8 border-t border-white/[0.08] space-y-4">
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                                    Design Decisions
                                </p>
                                <ul className="space-y-3">
                                    {study.designDecisions.map((decision) => (
                                        <li
                                            key={decision}
                                            className="text-sm sm:text-base leading-[1.65] text-[#A6A5B5]"
                                        >
                                            — {decision}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-6">
                            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#141122] to-[#0A0912] p-7 sm:p-8 space-y-5">
                                <h3 className="text-lg font-medium text-[#F4F4F8]">Key Features</h3>
                                <ul className="space-y-3.5">
                                    {study.keyFeatures.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm sm:text-base text-[#A6A5B5]"
                                        >
                                            <Check
                                                className="w-4 h-4 text-[#C4B5FD] mt-1 shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-8 space-y-4">
                                <h3 className="text-lg font-medium text-[#F4F4F8]">Operational Outcome</h3>
                                <ul className="space-y-3">
                                    {study.resultsOutcome.map((outcome) => (
                                        <li
                                            key={outcome}
                                            className="text-sm sm:text-base leading-[1.6] text-[#A6A5B5]"
                                        >
                                            — {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="bg-[#060609] py-12 lg:py-16">
                    <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
                        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-r from-[#161126] to-[#0C0A16] p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="space-y-3 max-w-2xl">
                                {study.clientTestimonial ? (
                                    <>
                                        <p className="text-lg text-[#F4F4F8] leading-[1.6]">
                                            “{study.clientTestimonial.quote}”
                                        </p>
                                        <p className="text-sm text-[#8E8CA0]">
                                            {study.clientTestimonial.author} · {study.clientTestimonial.role},{' '}
                                            {study.clientTestimonial.company}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-semibold text-[#F4F4F8]">
                                            Need a similar system for your business?
                                        </h2>
                                        <p className="text-sm sm:text-base text-[#A6A5B5]">
                                            Share how your inquiries, bookings, or operations currently work and we will
                                            scope a practical solution.
                                        </p>
                                    </>
                                )}
                            </div>

                            <Link
                                href={`/contact?service=${encodeURIComponent(study.projectType)}`}
                                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium btn-webizera-primary whitespace-nowrap shrink-0"
                            >
                                <span>Start a similar project</span>
                                <ArrowRight
                                    className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Projects */}
                <section className="bg-[#060609] py-16 lg:py-20">
                    <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-8">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                            Related Projects
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedStudies.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    href={`/work/${rel.slug}`}
                                    className="group rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#131020] to-[#090810] p-7 hover:border-[#8B5CF6]/55 transition-colors space-y-3"
                                >
                                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#C4B5FD]">
                                        {rel.industry} · {rel.timeline}
                                    </p>
                                    <h3 className="text-xl font-medium text-[#F4F4F8] group-hover:text-[#DDD6FE] transition-colors">
                                        {rel.title}
                                    </h3>
                                    <p className="text-sm leading-[1.65] text-[#A6A5B5]">{rel.oneLineOutcome}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </article>

            <CtaSection />
        </>
    );
}