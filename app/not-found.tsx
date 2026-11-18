import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <section className="relative overflow-hidden bg-[#060609] py-28 sm:py-36">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-3xl"
            />
            <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 space-y-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                    404 — Not Found
                </p>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#F4F4F8] max-w-2xl">
                    That page does not exist.
                </h1>
                <p className="max-w-lg text-base leading-[1.68] text-[#A6A5B5]">
                    The link may have moved or been typed incorrectly. Return to the studio overview or
                    explore selected work.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium btn-webizera-primary"
                    >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        <span>Return home</span>
                    </Link>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium btn-webizera-glass"
                    >
                        <span>View selected work</span>
                        <ArrowRight className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
