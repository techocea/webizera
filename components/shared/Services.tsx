import { SERVICES } from "@/lib/constants";
import Badge from "./Badge";
import HeaderTitle from "./HeaderTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section className="px-8 my-32 h-full" id="services">
            <div className="flex flex-col gap-6 items-center justify-center text-center">
                <div className="lg:max-w-3xl w-full space-y-4">
                    <Badge title="Process" />
                    <HeaderTitle title="How it works" />
                    <p className="font-regular lg:text-lg text-muted">
                        A simple and reliable process, from idea to launch.
                    </p>
                </div>
                <div className="flex flex-col gap-16 w-full mt-16">
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
