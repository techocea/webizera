'use client';

import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle, MapPin } from 'lucide-react';
import {MagneticWrap} from "@/components/motion/MotionPrimitives";

export function CtaSection() {
    return (
        <section className="relative overflow-hidden bg-[#060609] py-20 sm:py-28">
            {/* Ambient purple spotlight */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[540px] w-[780px] rounded-full bg-[radial-gradient(ellipse,rgba(109,40,217,0.22)_0%,transparent_68%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1320px] px-0 sm:px-8 lg:px-12">
                <div
                    className="rounded-none sm:rounded-[34px] lg:rounded-[36px] bg-gradient-to-br from-[#18122B]/90 via-[#0E0C18]/95 to-[#090810] border-y sm:border border-white/[0.09] px-6 py-12 sm:p-12 lg:p-16 space-y-12 shadow-[0_36px_80px_-28px_rgba(124,58,237,0.3)]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                        <div className="lg:col-span-8 space-y-5">
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C4B5FD]">
                                07 — Start Your Project
                            </p>
                            <h2 className="text-[clamp(2.35rem,5vw,4.35rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-[#F4F4F8]">
                                Have a system worth building?
                            </h2>
                            <p className="max-w-[56ch] text-[17px] sm:text-[18px] leading-[1.65] text-[#A6A5B5]">
                                Tell us what you are building, what is not working, or where you want the business
                                to go next.
                            </p>
                        </div>

                        <div className="lg:col-span-4 lg:flex lg:justify-end">
                            <MagneticWrap>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-medium btn-webizera-primary whitespace-nowrap shrink-0 min-h-[48px]"
                                >
                                    <span>Start a project</span>
                                    <ArrowRight
                                        className="w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </MagneticWrap>
                        </div>
                    </div>

                    <div
                        className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#737282] mb-1.5">
                Email
              </span>
                            <a
                                href="mailto:hello@webizera.com"
                                className="inline-flex items-center gap-2 text-[#F4F4F8] hover:text-[#C4B5FD] transition-colors"
                            >
                                <Mail className="w-4 h-4 text-[#A78BFA]" aria-hidden="true"/>
                                <span>hello@webizera.com</span>
                            </a>
                        </div>

                        <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#737282] mb-1.5">
                WhatsApp
              </span>
                            <a
                                href="https://wa.me/94724388956?text=Hi%20Brightly%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Webizera."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#F4F4F8] hover:text-[#C4B5FD] transition-colors"
                            >
                                <MessageCircle className="w-4 h-4 text-[#A78BFA]" aria-hidden="true"/>
                                <span>Direct WhatsApp</span>
                            </a>
                        </div>

                        <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#737282] mb-1.5">
                LinkedIn
              </span>
                            <a
                                href="https://www.linkedin.com/in/brightly-dunsford"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F4F4F8] hover:text-[#C4B5FD] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#8B5CF6]"
                            >
                                Brightly Dunsford
                            </a>
                        </div>

                        <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#737282] mb-1.5">
                Location &amp; Status
              </span>
                            <span className="inline-flex items-center gap-1.5 text-[#A6A5B5]">
                <MapPin className="w-4 h-4 text-[#A78BFA]" aria-hidden="true"/>
                <span>Negombo, Sri Lanka · Open for projects</span>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}