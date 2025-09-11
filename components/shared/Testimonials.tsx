import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { TESTIMONIALS } from "@/lib/constants";
import Badge from "./Badge";
import HeaderTitle from "./HeaderTitle";

const Testimonials = () => {
    return (
        <section className="px-4 mt-16 lg:mt-20" id="services">
            <div className="flex flex-col gap-6 items-center justify-center text-center">
                <div className="lg:max-w-3xl w-full space-y-4">
                    <Badge title="Testimonials" />
                    <HeaderTitle title="What our customers say" />
                    <p className="font-regular lg:text-lg text-muted">
                        Concrete results, clear communication and on-time deliveries.
                    </p>
                </div>
            </div>
            <BentoGrid className="max-w-5xl mx-auto mt-10 lg:mt-12">
                {TESTIMONIALS.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        author={item.author}
                        designation={item.designation}
                        description={item.testimonial}
                        className={i === 3 || i === 5 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Testimonials;
