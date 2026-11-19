'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {Mail, MessageCircle, Check} from 'lucide-react';
import {AGENCY_ASSETS} from "@/data/assets";

export function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [feedback, setFeedback] = useState('');

    const linkedIn = AGENCY_ASSETS.linkedIn;

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) {
            setStatus('error');
            setFeedback('Please enter an email address.');
            return;
        }

        setStatus('submitting');
        setFeedback('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email}),
            });
            const data = await response.json();
            if (!response.ok) {
                setStatus('error');
                setFeedback(data.error || 'Could not subscribe. Please try again.');
                return;
            }

            setStatus('success');
            setFeedback(
                data.alreadySubscribed
                    ? 'You are already subscribed to Webizera updates.'
                    : 'Subscribed. Thank you for following Webizera.'
            );
            setEmail('');
        } catch {
            setStatus('error');
            setFeedback('Network error. Please try again.');
        }
    };

    return (
        <footer className="bg-[#060609] pt-8 pb-0 sm:pb-14">
            <div className="mx-auto max-w-[1320px] px-0 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 sm:gap-5 lg:gap-6 items-stretch">
                    {/* Left Bento Card: Dark Obsidian-Violet Moving Curve Card */}
                    <div
                        className="lg:col-span-4 relative overflow-hidden rounded-none sm:rounded-[28px] bg-[#0B0916] border-y sm:border border-white/[0.08] px-6 py-10 sm:p-10 flex flex-col justify-between min-h-[290px]">
                        <FooterVioletCurves/>

                        <div className="relative z-10 space-y-3">
                            <Link
                                href="/"
                                className="inline-block text-xl font-semibold tracking-tight text-[#F4F4F8] font-display"
                            >
                                Webizera
                            </Link>
                            <p className="text-base leading-[1.55] text-[#F4F4F8] max-w-[26ch]">
                                Digital systems &amp; websites,
                                <span className="block text-[#A6A5B5]">built for growing businesses.</span>
                            </p>
                        </div>

                        <div className="relative z-10 pt-10 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D4D2E4]">
                Stay in touch
              </span>

                            <div className="flex items-center gap-2.5">
                                <a
                                    href="https://www.linkedin.com/in/brightly-dunsford"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Brightly Dunsford on LinkedIn"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-[#F4F4F8] hover:border-[#C4B5FD] hover:bg-[#7C3AED]/40 transition-colors"
                                >
                                    <img
                                        src={linkedIn}
                                        alt="LinkedIn"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </a>
                                <a
                                    href="https://wa.me/94770000000?text=Hi%20Brightly%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Webizera."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp Webizera"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-[#F4F4F8] hover:border-[#C4B5FD] hover:bg-[#7C3AED]/40 transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" aria-hidden="true"/>
                                </a>
                                <a
                                    href="mailto:hello@webizera.com"
                                    aria-label="Email Webizera"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-[#F4F4F8] hover:border-[#C4B5FD] hover:bg-[#7C3AED]/40 transition-colors"
                                >
                                    <Mail className="w-4 h-4" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Bento Card: Crisp Bright Light Container (Edge-to-edge on mobile, rounded on sm+) */}
                    <div
                        className="lg:col-span-8 rounded-none sm:rounded-[28px] bg-[#FAF9FD] text-[#0B0B10] px-6 py-10 sm:p-10 lg:p-12 flex flex-col justify-between gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                            {/* Stylized 3D Dark Metallic Monogram */}
                            <div className="md:col-span-4 flex items-start">
                                <svg
                                    viewBox="0 0 120 120"
                                    className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-[0_14px_20px_rgba(17,17,22,0.22)]"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <linearGradient id="footerMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3B3A4A"/>
                                            <stop offset="50%" stopColor="#17171F"/>
                                            <stop offset="100%" stopColor="#09090D"/>
                                        </linearGradient>
                                    </defs>
                                    <polygon points="60,12 104,48 60,84 16,48" fill="url(#footerMetal)"/>
                                    <polygon points="60,31 80,48 60,65 40,48" fill="#FAF9FD"/>
                                    <polygon points="24,62 60,92 96,62 96,86 60,112 24,86" fill="#17171F"/>
                                </svg>
                            </div>

                            <div className="md:col-span-4 space-y-3.5">
                                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#737282]">
                                    Studio
                                </h3>
                                <ul className="space-y-2.5 text-sm font-medium text-[#2A2935]">
                                    <li>
                                        <Link href="/" className="hover:text-[#6D28D9] transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/capabilities" className="hover:text-[#6D28D9] transition-colors">
                                            Capabilities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/work" className="hover:text-[#6D28D9] transition-colors">
                                            Work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/approach" className="hover:text-[#6D28D9] transition-colors">
                                            Approach
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="hover:text-[#6D28D9] transition-colors">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="hover:text-[#6D28D9] transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-4 space-y-3.5">
                                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#737282]">
                                    Systems &amp; Legal
                                </h3>
                                <ul className="space-y-2.5 text-sm font-medium text-[#2A2935]">
                                    {/*{SEO_LANDING_PAGES.slice(0, 3).map((page) => (*/}
                                    {/*    <li key={page.slug}>*/}
                                    {/*        <Link href={page.route} className="hover:text-[#6D28D9] transition-colors">*/}
                                    {/*            {page.serviceType}*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*))}*/}
                                    <li>
                                        <Link href="/studio" className="hover:text-[#6D28D9] transition-colors">
                                            Content Studio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="hover:text-[#6D28D9] transition-colors">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="hover:text-[#6D28D9] transition-colors">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="pt-4 border-t border-[#E6E5EF] flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-1 text-xs text-[#6E6D7D]">
                                <p>© {new Date().getFullYear()} Webizera. Founded by Brightly Dunsford.</p>
                                <p>
                                    Negombo, Sri Lanka ·{' '}
                                    <a href="/sitemap.xml" className="underline hover:text-[#0B0B10]">
                                        Sitemap
                                    </a>
                                </p>
                            </div>

                            <div className="w-full md:w-auto space-y-2">
                                <p className="text-xs font-medium text-[#3F3E4D]">
                                    Practical system notes. Stay updated with Webizera.
                                </p>
                                <form
                                    onSubmit={handleSubscribe}
                                    noValidate
                                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
                                >
                                    <label htmlFor="footer-newsletter-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="footer-newsletter-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email address"
                                        className="min-w-[220px] rounded-full border border-[#DCDAE8] bg-white px-4 py-2.5 text-sm text-[#0B0B10] placeholder:text-[#8E8CA0] focus:border-[#6D28D9] focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-medium btn-webizera-dark whitespace-nowrap disabled:opacity-60"
                                    >
                                        {status === 'success' && <Check className="w-4 h-4 text-[#A78BFA]"/>}
                                        <span>{status === 'submitting' ? 'Subscribing...' : 'Subscribe'}</span>
                                    </button>
                                </form>
                                {feedback && (
                                    <p
                                        className={`text-xs ${
                                            status === 'error' ? 'text-[#DC2626]' : 'text-[#5B21B6]'
                                        }`}
                                    >
                                        {feedback}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterVioletCurves() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Diagonal violet-blue architectural light beam */}
            <div
                className="absolute -bottom-24 -left-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.68)_0%,rgba(79,70,229,0.34)_40%,transparent_72%)] blur-2xl"/>
            <div
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28)_0%,transparent_70%)] blur-2xl"/>

            {/* Moving gradient bezier curves gliding calmly inside the purple card */}
            <svg
                viewBox="0 0 600 420"
                preserveAspectRatio="none"
                className="absolute -inset-x-[8%] inset-y-0 h-full w-[116%] animate-curve-drift-a"
            >
                <defs>
                    <linearGradient id="footerVioletWave" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0"/>
                        <stop offset="35%" stopColor="#A78BFA" stopOpacity="0.45"/>
                        <stop offset="68%" stopColor="#6366F1" stopOpacity="0.32"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="footerVioletGlowBand" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.24"/>
                        <stop offset="55%" stopColor="#4F46E5" stopOpacity="0.14"/>
                        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
                    </linearGradient>
                </defs>

                <path
                    d="M-40,390 C90,260 220,340 360,210 C470,110 550,150 650,40 L650,440 L-40,440 Z"
                    fill="url(#footerVioletGlowBand)"
                />
                <path
                    d="M-40,365 C95,235 225,315 365,185 C475,85 555,125 650,20"
                    fill="none"
                    stroke="url(#footerVioletWave)"
                    strokeWidth="2"
                />
                <path
                    d="M-30,410 C120,285 255,355 395,235 C495,150 565,180 650,85"
                    fill="none"
                    stroke="url(#footerVioletWave)"
                    strokeWidth="1.2"
                    strokeOpacity="0.65"
                />
            </svg>

            <svg
                viewBox="0 0 600 420"
                preserveAspectRatio="none"
                className="absolute -inset-x-[8%] inset-y-0 h-full w-[116%] animate-curve-drift-b"
            >
                <defs>
                    <linearGradient id="footerVioletWaveB" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0"/>
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.28"/>
                        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0"/>
                    </linearGradient>
                </defs>
                <path
                    d="M-30,270 C130,360 280,170 430,245 C520,290 580,215 650,145"
                    fill="none"
                    stroke="url(#footerVioletWaveB)"
                    strokeWidth="1.25"
                />
            </svg>
        </div>
    );
}