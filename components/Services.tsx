import Image from "next/image";

export default function Services() {
    return (
        // <Separator/>
        <section
            className="py-10 max-md:py-16 border-b border-t border-gray-500 max-md:h-full"
            id="services"
        >
            <div className="flex flex-wrap md:gap-4 items-center justify-center">
                <div className="max-w-[435px]   max-md:text-center max-md:mb-10">
                    <h3 className="uppercase font-semibold text-[16px] text-secondary">
                        services
                    </h3>
                    <p>
                        We offer comprehensive web design services, from initial concept
                        sketches to polished, user-friendly websites.
                    </p>
                    <br />
                    <p className="max-md:font-bold max-md:scale-110">
                        Our development team uses the latest technologies to build
                        responsive, high-performance websites.
                    </p>
                </div>
                <div className="flex max-md:flex-col items-center gap-4 lg:gap-8">
                    <ServiceCard
                        image="/brush.svg"
                        title="ui/ux design"
                        description="Professional web design with clean UI/UX, perfect for small businesses establishing an online presences"
                    />
                    <ServiceCard
                        image="/code.svg"
                        title="web development"
                        description="Superior web development with top-tier UI/UX design, custom integrations, and dedicated support"
                    />
                </div>
            </div>
        </section>
    );
}

type ServiceCardProps = {
    image: string;
    title: string;
    description: string;
};

function ServiceCard({ image, title, description }: ServiceCardProps) {
    return (
        <div className="flex flex-col gap-3 bg-secondary p-2.5   max-md:w-[380px] w-[295px]">
            <span>
                <Image src={image} alt={title} width={25} height={25} />
            </span>
            <h2 className="uppercase font-bold ">{title}</h2>
            <p className="text-sm leading-[26px]">{description}</p>
        </div>
    );
}
