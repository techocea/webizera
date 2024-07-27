import Image from "next/image";
import HeaderTitle from "./HeaderTitle";

const portfolioImages = [
    { alt: "achievers", source: "/achievers.png" },
    { alt: "delight", source: "/delight.png" },
    { alt: "grameen", source: "/grameen.png" },
];

export default function Portfolio() {
    return (
        <section className="lg:py-24 lg:px-16 py-20 px-4 border-b border-t border-gray-500 max-md:h-full"
            id="portfolio">
            <div className="flex flex-col md:gap-10 lg:items-end text-center lg:justify-end lg:text-right">
                <HeaderTitle heading="our projects" text="6xl" />
                <div className="flex flex-wrap items-center justify-center gap-16 mt-16 lg:mt-0">
                    {portfolioImages.map((item) => (
                        <Image
                            src={item.source}
                            key={item.alt}
                            width={300}
                            height={300}
                            alt={`"webizera,quality web design agency", ${item.alt}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
