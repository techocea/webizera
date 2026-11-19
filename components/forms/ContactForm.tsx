"use client";

import {z} from 'zod';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {AlertCircle, ArrowUpRight, CheckCircle2, Mail, MapPin, MessageCircle} from "lucide-react";
import {AGENCY_ASSETS} from "@/data/assets";

const clientContactSchema = z.object({
    name: z.string().trim().min(2, 'Please enter your full name.'),
    email: z.email('Please enter a valid email address.'),
    whatsapp: z
        .string()
        .trim()
        .min(7, 'Enter your WhatsApp number including country code (e.g. +94 77 ...).')
        .regex(/^\+?[0-9\s\-()]{7,24}$/, 'Use digits, +, spaces, or hyphens only.'),
    businessType: z.string().min(1, 'Select your business category.'),
    budgetRange: z.string().min(1, 'Select an estimated budget range.'),
    projectType: z.string().min(1, 'Select what you need built.'),
    message: z
        .string()
        .trim()
        .min(15, 'Please share a brief overview of your goals (at least 15 characters).'),
});

const BUSINESS_TYPES = [
    'Clinic / Healthcare Provider',
    'Hotel, Villa, or Tour Operator',
    'Real Estate Company',
    'Local Service Business',
    'Startup / SaaS Company',
    'Other Growing Business',
];

const PROJECT_TYPES = [
    'Digital presence',
    'Booking & inquiry systems',
    'Client portals',
    'Operational dashboards',
    'Interface design',
    'Website redesign',
];

const inputClass =
    'w-full rounded-xl border border-white/10 bg-[#08070E] px-4 py-3 text-sm text-[#F4F4F8] placeholder:text-[#737282] focus:border-[#8B5CF6] focus:outline-none transition-colors';

const ContactForm = () => {
    const searchParams = useSearchParams();
    const openedAtRef = useRef<number>(Date.now());

    const linkedIn = AGENCY_ASSETS.linkedIn;


    const [formState, setFormState] = useState({
        name: '',
        email: '',
        whatsapp: '',
        businessType: '',
        budgetRange: '',
        projectType: searchParams?.get('service') || '',
        message: '',
        website: '',
    });

    useEffect(() => {
        const prefill = searchParams?.get('service');
        if (prefill) {
            setFormState((prev) => ({...prev, projectType: prefill}));
        }
    }, [searchParams]);

    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
        'idle'
    );
    const [submitMessage, setSubmitMessage] = useState('');
    const [inquiryRef, setInquiryRef] = useState('');

    const handleInquirySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFieldErrors({});
        setSubmitMessage('');

        const validation = clientContactSchema.safeParse(formState);
        if (!validation.success) {
            const errors: Record<string, string> = {};
            for (const issue of validation.error.issues) {
                const key = String(issue.path[0] || '');
                if (key && !errors[key]) {
                    errors[key] = issue.message;
                }
            }
            setFieldErrors(errors);
            setSubmitStatus('error');
            setSubmitMessage('Please fix the highlighted fields before submitting.');
            return;
        }

        setSubmitStatus('submitting');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ...formState,
                    formOpenedAt: openedAtRef.current,
                }),
            });
            const result = await response.json();
            if (!response.ok) {
                setSubmitStatus('error');
                setSubmitMessage(result.error || 'Could not submit your inquiry. Please try again.');
                return;
            }

            setInquiryRef(result.inquiryId || 'WBZ-RECEIVED');
            setSubmitStatus('success');
            setSubmitMessage(
                'Your project brief has been saved directly for Brightly Dunsford. We review every brief personally and reply within 1 business day.'
            );
            setFormState({
                name: '',
                email: '',
                whatsapp: '',
                businessType: '',
                budgetRange: '',
                projectType: '',
                message: '',
                website: '',
            });
        } catch {
            setSubmitStatus('error');
            setSubmitMessage('Network error submitting your brief. Please email hello@webizera.com.');
        }
    };


    return (
        <section className="bg-gradient-to-b from-[#060609] via-[#0C0919] to-[#060609] py-12 lg:py-16">
            <div
                className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left: Project Inquiry Form */}
                <div
                    id="inquiry-form"
                    className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-[#0D0B17]/90 p-7 sm:p-10 space-y-6"
                >
                    {submitStatus === 'success' ? (
                        <div className="rounded-2xl border border-[#22C55E]/40 bg-[#08070E] p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" aria-hidden="true"/>
                                <h3 className="text-lg font-medium text-[#F4F4F8]">
                                    Project Brief Received ({inquiryRef})
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed text-[#A6A5B5]">{submitMessage}</p>
                            <button
                                type="button"
                                onClick={() => setSubmitStatus('idle')}
                                className="text-sm font-medium text-[#C4B5FD] hover:text-[#F4F4F8]"
                            >
                                Submit another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleInquirySubmit} noValidate className="space-y-5">
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="website">Website</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={formState.website}
                                    onChange={(e) => setFormState({...formState, website: e.target.value})}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-[#A6A5B5] mb-2">
                                        Tell us your name!
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                                        placeholder="Your name"
                                        className={inputClass}
                                    />
                                    {fieldErrors.name && (
                                        <p className="mt-1.5 text-xs text-[#EF4444]">{fieldErrors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-[#A6A5B5] mb-2">
                                        Can you share your email?
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                                        placeholder="you@company.com"
                                        className={inputClass}
                                    />
                                    {fieldErrors.email && (
                                        <p className="mt-1.5 text-xs text-[#EF4444]">{fieldErrors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="whatsapp"
                                        className="block text-xs font-medium text-[#A6A5B5] mb-2"
                                    >
                                        Can we have your contact number as well?
                                    </label>
                                    <input
                                        id="whatsapp"
                                        type="tel"
                                        required
                                        value={formState.whatsapp}
                                        onChange={(e) => setFormState({...formState, whatsapp: e.target.value})}
                                        placeholder="+94 77 000 0000"
                                        className={inputClass}
                                    />
                                    {fieldErrors.whatsapp && (
                                        <p className="mt-1.5 text-xs text-[#EF4444]">{fieldErrors.whatsapp}</p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="businessType"
                                        className="block text-xs font-medium text-[#A6A5B5] mb-2"
                                    >
                                        What do you want to talk about?
                                    </label>
                                    <select
                                        id="businessType"
                                        required
                                        value={formState.businessType}
                                        onChange={(e) => setFormState({...formState, businessType: e.target.value})}
                                        className={inputClass}
                                    >
                                        <option value="">Select business type</option>
                                        {BUSINESS_TYPES.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    {fieldErrors.businessType && (
                                        <p className="mt-1.5 text-xs text-[#EF4444]">{fieldErrors.businessType}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="projectType"
                                    className="block text-xs font-medium text-[#A6A5B5] mb-2"
                                >
                                    Project Type *
                                </label>
                                <select
                                    id="projectType"
                                    required
                                    value={formState.projectType}
                                    onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                                    className={inputClass}
                                >
                                    <option value="">Select project type</option>
                                    {PROJECT_TYPES.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                {fieldErrors.projectType && (
                                    <p className="mt-1.5 text-xs text-[#EF4444]">{fieldErrors.projectType}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-[#A6A5B5] mb-2">
                                    Project Details &amp; Goals!
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    placeholder="What problem are you trying to solve? (e.g., more direct bookings, automating WhatsApp follow-up, replacing spreadsheets with a client portal)"
                                    className={inputClass}
                                />
                                {fieldErrors.message && (
                                    <p className="mt-1.5 text-xs text-[#EF4444]">{fieldErrors.message}</p>
                                )}
                            </div>

                            {submitStatus === 'error' && submitMessage && (
                                <div
                                    className="flex items-start gap-2.5 rounded-xl border border-[#EF4444]/40 bg-[#140B14] p-3.5 text-sm text-[#EF4444]">
                                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true"/>
                                    <span>{submitMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitStatus === 'submitting'}
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium btn-webizera-primary disabled:opacity-60 min-h-[46px]"
                            >
                  <span>
                    {submitStatus === 'submitting' ? 'Sending Project Brief...' : 'Send Project Brief'}
                  </span>
                            </button>
                        </form>
                    )}
                </div>
                {/* Right: Contact Details */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="rounded-3xl border border-white/[0.08] w-full bg-[#0D0B17]/90 p-6 sm:p-7 space-y-3">
                        <h3 className="text-sm font-medium text-[#F4F4F8]">Direct Channels</h3>
                        <a
                            href="https://wa.me/94724388956?text=Hi%20Brightly%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Webizera."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#08070E] p-3.5 text-sm text-[#F4F4F8] hover:border-[#8B5CF6]/55 transition-colors"
                        >
                        <span className="flex items-center gap-2.5">
                          <MessageCircle className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true"/>
                          <span>WhatsApp Chat</span>
                        </span>
                            <ArrowUpRight className="w-4 h-4 text-[#737282]" aria-hidden="true"/>
                        </a>

                        <a
                            href="mailto:hello@webizera.com"
                            className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#08070E] p-3.5 text-sm text-[#F4F4F8] hover:border-[#8B5CF6]/55 transition-colors"
                        >
                            <span className="flex items-center gap-2.5">
                              <Mail className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true"/>
                              <span>hello@webizera.com</span>
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-[#737282]" aria-hidden="true"/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/brightly-dunsford"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Brightly Dunsford on LinkedIn"
                            className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#08070E] p-3.5 text-sm text-[#F4F4F8] hover:border-[#8B5CF6]/55 transition-colors"
                        >
                            <span className="flex items-center gap-2.5">
                              <img
                                  src={linkedIn}
                                  alt="LinkedIn"
                                  width={20}
                                  height={20}
                                  className="w-4 h-4 text-[#A78BFA]"
                              />
                              <span>Follow on LinkedIn</span>
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-[#737282]" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm
