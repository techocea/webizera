'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAgencyContent } from '@/context/ContentContext';

export function FaqSection({ limit }: { limit?: number }) {
    const { content } = useAgencyContent();
    const [openId, setOpenId] = useState<string | null>(content.faqs[0]?.id ?? null);

    const items = limit ? content.faqs.slice(0, limit) : content.faqs;

    return (
        <section id="faq" className="relative bg-[#060609] py-20 sm:py-28">
            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 space-y-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                            Questions &amp; Answers
                        </p>
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#F4F4F8]">
                            Questions before starting.
                        </h2>
                        <p className="text-sm sm:text-base leading-[1.65] text-[#A6A5B5]">
                            Plain answers on project scope, timelines, cost ranges, and technical ownership.
                        </p>
                    </div>

                    <div className="lg:col-span-8 space-y-3">
                        {items.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className={`rounded-2xl border transition-colors duration-300 ${
                                        isOpen
                                            ? 'border-[#8B5CF6]/45 bg-[#120F20]/90'
                                            : 'border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04]'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left min-h-[48px]"
                                    >
                    <span className="text-base sm:text-lg font-medium text-[#F4F4F8]">
                      {faq.question}
                    </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#A6A5B5] shrink-0">
                      {isOpen ? (
                          <Minus className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                      ) : (
                          <Plus className="w-4 h-4" aria-hidden="true" />
                      )}
                    </span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pr-12 text-sm sm:text-base leading-[1.68] text-[#A6A5B5] max-w-[65ch]">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
