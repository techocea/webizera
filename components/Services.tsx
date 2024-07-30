import HeaderTitle from "./HeaderTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section
            className="lg:py-24 lg:px-20 2xl:px-32 py-20 px-4 md:px-10 border-b border-t border-gray-500 max-md:h-full"
            id="services"
        >
            <div className="flex flex-col gap-10 lg:items-end lg:justify-end text-center items-center ">
                <div className="max-w-4xl lg:text-right">
                    <HeaderTitle
                        heading="our services"
                        text="6xl" />
                    <p className="lg:pt-4 pt-6">
                        We offer comprehensive web design services, from initial concept sketches to polished, user-friendly websites.<br />Our development team uses the latest technologies to build responsive, high-performance websites.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-12">
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
                    <ServiceCard
                        image="/revamp.svg"
                        title="website revamp"
                        description="With the latest technology we deliver a seamless, user-friendly experience  for your audience."
                    />
                </div>
            </div>
        </section>
    );
}



