import {Suspense} from "react";
import {Clock, Loader2} from "lucide-react";
import {Metadata} from "next";
import {buildMetadata} from "@/lib/seo";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
    title: 'Contact & Book a Strategy Call | Webizera',
    description:
        'Send a project brief or book a free 30-minute strategy call with Webizera founder Brightly Dunsford. Direct response within 1 business day.',
    path: '/contact',
});

export default function ContactPage() {
    return (
        <Suspense fallback={<Loader2 className="animate-spin"/>}>
            <section className="relative overflow-hidden bg-[#060609] pt-16 pb-12 lg:pt-20">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-28 right-[-8%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.24)_0%,transparent_70%)] blur-3xl"
                />
                <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                        <div className="lg:col-span-8 space-y-4">
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#A78BFA]">
                                Start a Conversation
                            </p>
                            <h1 className="text-[clamp(2.35rem,4.8vw,4rem)] font-semibold tracking-[-0.03em] text-[#F4F4F8]">
                                Tell us what you are building—or what is not working.
                            </h1>
                            <p className="max-w-2xl text-base sm:text-lg leading-[1.68] text-[#A6A5B5]">
                                A rough idea is enough to start. Send your project brief.
                            </p>
                        </div>

                        <div
                            className="lg:col-span-4 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#141122] to-[#0A0912] p-6 space-y-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-[#F4F4F8]">
                                <Clock className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true"/>
                                <span>Response expectation</span>
                            </div>
                            <p className="text-sm text-[#A6A5B5]">
                                Every inquiry is reviewed directly by the founder within{' '}
                                <strong className="text-[#F4F4F8] font-medium">1 business day</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                {/*contact form*/}
                <ContactForm/>
            </section>
        </Suspense>
    )
}