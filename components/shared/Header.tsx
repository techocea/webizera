"use client";

import { NAV_ITEMS } from "@/data/constants";
import {useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import {MagneticWrap} from "@/components/motion/MotionPrimitives";

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname() || '/';

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#060609]/82 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_12px_36px_-18px_rgba(0,0,0,0.85)]'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div
                className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2.5 text-lg font-medium tracking-tight text-[#F2F2F6] whitespace-nowrap shrink-0 font-display group"
                >
          <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#4C1D95] text-white shadow-[0_4px_14px_rgba(124,58,237,0.45)] transition-transform duration-300 group-hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.2">
              <path d="M4 6l4.2 12L12 9.5 15.8 18 20 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
                    <span>Webizera</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
                    {NAV_ITEMS.map((item) => {
                        const isActive =
                            pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group relative py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 ${
                                    isActive ? 'text-[#F2F2F6]' : 'text-[#A6A5B5] hover:text-[#F2F2F6]'
                                }`}
                            >
                                <span>{item.label}</span>
                                <span
                                    aria-hidden="true"
                                    className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-3 shrink-0">
                    <MagneticWrap className="hidden sm:inline-block">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium btn-webizera-primary whitespace-nowrap shrink-0"
                        >
                            <span>Start a project</span>
                            <ArrowRight
                                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </Link>
                    </MagneticWrap>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="inline-flex md:hidden items-center justify-center rounded-full border border-white/15 bg-[#12101E]/80 p-2.5 text-[#F2F2F6] hover:border-[#8B5CF6] transition-colors min-h-[44px] min-w-[44px]"
                        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="md:hidden border-t border-white/10 bg-[#08070E]/95 backdrop-blur-xl px-5 py-6">
                    <nav className="flex flex-col divide-y divide-white/10" aria-label="Mobile Navigation">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center justify-between py-3.5 text-base font-medium text-[#F2F2F6] hover:text-[#C4B5FD] transition-colors min-h-[44px]"
                            >
                                <span>{item.label}</span>
                                <ArrowRight className="w-4 h-4 text-[#737282]" aria-hidden="true"/>
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-6">
                        <Link
                            href="/contact"
                            className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium btn-webizera-primary min-h-[44px]"
                        >
                            <span>Start a project</span>
                            <ArrowRight className="w-4 h-4" aria-hidden="true"/>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

