import { SERVICES } from "@/lib/constants";
import Badge from "./Badge";
import HeaderTitle from "./HeaderTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section className="px-4 mt-16 lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:mt-20 h-full" id="services">
            <div className="flex flex-col lg:gap-6 gap-0 items-center justify-center text-center">
                <div className="space-y-4">
                    <Badge title="Process" />
                    <HeaderTitle title="How it works" />
                    <p className="font-regular lg:text-lg text-muted">
                        A simple and reliable process, from idea to launch.
                    </p>
                </div>
                <div className="flex flex-col gap-8 lg:gap-16 w-full lg:mt-12 mt-10">
                    {SERVICES.map((item) => (
                        <ServiceCard
                            id={item.id}
                            key={item.id}
                            step={item.step}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
