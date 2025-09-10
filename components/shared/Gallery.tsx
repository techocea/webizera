import { GALLERY } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Gallery = () => {
    return (
        <div className="lg:max-w-5xl mask-x-fade mt-10 py-6 sm:py-8 mx-auto w-full">
            <div className="flex items-end justify-center gap-8">
                {GALLERY.map((item) => (
                    <div
                        key={item.id}
                        className={`relative w-[150px] sm:w-[160px] md:w-[280px] aspect-[4/3] rounded-2xl overflow-hidden glass border-white/10 shadow-soft hover:shadow-glow-green transition-all duration-300 ${item.id % 2 === 0 ? "rotate-[3deg]" : "rotate-[-4deg]"
                            }  hover:rotate-0`}
                    >
                        <Image
                            src={item.imageSrc}
                            fill
                            loading="lazy"
                            className="object-cover"
                            sizes="(max-width: 768px) 65vw, 46vw"
                            alt={item.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
