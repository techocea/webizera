import Image from "next/image";
import HeaderTitle from "./HeaderTitle";

import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
    return <main id="testimonials">
        <div className="lg:py-24 lg:px-16 py-20 px-2 flex flex-col border-b border-gray-500  items-center justify-center max-md:text-center gap-4">
            <HeaderTitle heading="client feedbacks" text="7xl" />
            <div className="flex items-center justify-center gap-4 lg:gap-10">
                <Image src="/comma.svg" width={132} height={95} alt="Cool agency" className="hidden md:block" />
                <TestimonialCard />
            </div>
        </div>
    </main>
}