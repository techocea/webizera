import { PRICING } from "@/lib/constants";
import PriceCard from "./PriceCard";
import HeaderTitle from "./HeaderTitle";
import Badge from "./Badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
    return (
        <section className="px-4 mt-16 lg:max-w-6xl xl:max-w-5xl w-full mx-auto lg:mt-20 h-full" id="services">
            <div className="flex flex-col gap-6 items-center justify-center text-center">
                <div className="lg:max-w-3xl w-full space-y-4">
                    <Badge title="Services" />
                    <HeaderTitle title="Our tailor-made services" />
                    <p className="font-regular lg:text-lg text-muted">
                        Every project is unique. Discover our solutions and contact us for a
                        personalized quote.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 lg:mt-12">
                    {PRICING.map((item) => (
                        <PriceCard
                            key={item.id}
                            id={item.id}
                            icon={item.icon}
                            label={item.label}
                            points={item.points}
                            description={item.description}
                        />
                    ))}
                </div>

                <div className="lg:max-w-3xl w-full flex flex-col items-center justify-center mt-8 space-y-4">
                    <p className="font-regular text-lg text-muted">
                        Need a tailor-made solution? We create projects tailored to your
                        specific needs.
                    </p>
                    <div>
                        <Button variant="outline" size="lg" className="glass flex items-center gap-2 text-lg">
                            Let`s discuss your project <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
