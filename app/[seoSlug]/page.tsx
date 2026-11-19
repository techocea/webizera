import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import { SEO_LANDING_PAGES } from '@/data/seo-pages';
import { AGENCY_ASSETS } from '@/data/assets';
import { DEFAULT_AGENCY_CONTENT } from '@/data/constants';
import { buildMetadata } from '@/lib/seo';
import { ResilientImage } from '@/components/motion/ResilientImage';
import { CtaSection } from '@/components/sections/CtaSection';

export const dynamicParams = false;

export function generateStaticParams() {
    return SEO_LANDING_PAGES.map((page) => ({ seoSlug: page.slug }));
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ seoSlug: string }>;
}): Promise<Metadata> {
    const { seoSlug } = await params;
    const page = SEO_LANDING_PAGES.find((p) => p.slug === seoSlug);
    if (!page) {
        return buildMetadata({
            title: 'Page Not Found | Webizera',
            description: 'The requested page could not be found.',
            path: `/${seoSlug}`,
        });
    }
    return buildMetadata({
        title: page.metaTitle,
        description: page.metaDescription,
        path: page.route,
    });
}

export default async function SeoLandingPage({
                                                 params,
                                             }: {
    params: Promise<{ seoSlug: string }>;
}) {
    const { seoSlug } = await params;
    const page = SEO_LANDING_PAGES.find((p) => p.slug === seoSlug);

    if (!page) {
        notFound();
    }

    const content = DEFAULT_AGENCY_CONTENT;
    const relatedStudies = content.caseStudies.filter((cs) =>
        page.relatedCaseStudySlugs.includes(cs.slug)
    );
    const primaryService = content.services.find((s) => s.id === page.primaryServiceId);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: page.serviceType,
        name: page.metaTitle,
        description: page.metaDescription,
        areaServed: page.areaServed,
        provider: {
            '@type': 'Organization',
            name: 'Webizera',
            founder: 'Brightly Dunsford',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Negombo',
                addressCountry: 'LK',
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="relative overflow-hidden bg-[#060609] py-20 lg:py-28">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-28 right-[-8%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] blur-3xl"
                />
                <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
                    <div className="max-w-3xl space-y-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                            {page.serviceType} · {page.areaServed}
                        </p>
                        <h1 className="text-[clamp(2.25rem,4.8vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#F4F4F8]">
                            {page.headline}
                        </h1>
                        <p className="text-base sm:text-lg leading-[1.68] text-[#A6A5B5] max-w-[62ch]">
                            {page.subheadline}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href={`/contact?service=${encodeURIComponent(
                                    primaryService?.inquiryType || page.serviceType
                                )}`}
                                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium btn-webizera-primary"
                            >
                                <span>Start a project</span>
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium btn-webizera-glass"
                            >
                                <span>View selected work</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#060609] via-[#0D0A1B] to-[#060609] py-20 lg:py-24">
                <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-6 space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#F4F4F8]">
                            Built for operational clarity
                        </h2>
                        <p className="text-base leading-[1.68] text-[#A6A5B5]">{page.overview}</p>

                        <div className="pt-4 space-y-3">
                            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                                Designed For
                            </h3>
                            <ul className="space-y-2.5">
                                {page.idealFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#A6A5B5]">
                                        <Check className="w-4 h-4 text-[#C4B5FD] mt-0.5 shrink-0" aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                        <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA] mb-2">
                            Bottlenecks Solved
                        </h3>
                        {page.challengesSolved.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/[0.08] bg-[#0E0C19]/90 p-6 space-y-1.5"
                            >
                                <h4 className="text-base font-medium text-[#F4F4F8]">{item.title}</h4>
                                <p className="text-sm leading-[1.65] text-[#A6A5B5]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#060609] py-20 lg:py-24">
                <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 space-y-5">
                        <h2 className="text-2xl font-semibold text-[#F4F4F8]">What is included</h2>
                        <ul className="space-y-3">
                            {page.deliverables.map((del) => (
                                <li key={del} className="flex items-start gap-2.5 text-sm sm:text-base text-[#A6A5B5]">
                                    <Check className="w-4 h-4 text-[#C4B5FD] mt-1 shrink-0" aria-hidden="true" />
                                    <span>{del}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-3">
                            <Link
                                href="/capabilities"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C4B5FD] hover:text-[#F4F4F8]"
                            >
                                <span>Explore all capabilities</span>
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <h2 className="text-2xl font-semibold text-[#F4F4F8]">Relevant Case Studies</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {relatedStudies.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={`/work/${study.slug}`}
                                    className="group rounded-3xl border border-white/[0.08] bg-[#0E0C19] overflow-hidden hover:border-[#8B5CF6]/55 transition-colors"
                                >
                                    <div className="bg-gradient-to-br from-[#5B21B6]/70 via-[#3B0764]/60 to-[#0E0B1A] p-4">
                                        <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/15">
                                            <ResilientImage
                                                src={AGENCY_ASSETS.caseStudies[study.imageKey]}
                                                alt={study.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-5 space-y-2">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#C4B5FD]">
                                            {study.industry}
                                        </p>
                                        <h3 className="text-base font-medium text-[#F4F4F8] group-hover:text-[#DDD6FE]">
                                            {study.title}
                                        </h3>
                                        <p className="text-xs text-[#8E8CA0]">{study.statusLabel}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}