"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const clientTestimonials = [
    {
        company: "DrinkDrive",
        message:
            "Good Job Webizera, really appreciate the work you have done, Looking forward to work with you in the future",
    },
    {
        company: "Agrah Consultants",
        message:
            "Excellent !!, As we requested you delievered on time, and with quality work and nice colors",
    },
    {
        company: "Negombo Smart Achievers",
        message:
            "Wonderful task, Deliverd on time and really had a good time in working with you Webizera.",
    },
];
export default function TestimonialCard() {
    return (
        <div className="mt-10  lg:max-w-lg max-w-[290px] w-full">
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="flex max-md:flex-col items-center justify-center">
                <CarouselContent>
                    {clientTestimonials.map((item) => (
                        <CarouselItem key={item.company} className="pl-8 flex flex-col gap-4">
                            <p className="max-md:pr-2 max-md:text-sm">{item.message}</p>
                            <span className="font-bold text-sm">{item.company}</span>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
    );
}
