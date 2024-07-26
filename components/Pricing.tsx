
import { Pricingdata } from "@/utils";
import PriceCard from "./PriceCard";
import HeaderTitle from "./HeaderTitle";

export default function Pricing() {
    return (
        <section className="lg:py-24 lg:px-32 py-20 px-8 border-b border-gray-500" id="pricing">
            <div className="flex flex-col gap-10 max-md:text-center">
                <div className="max-w-4xl flex flex-col max-md:gap-8">
                    <HeaderTitle
                        heading="our prices"
                        text="6xl" />
                    <p className="lg:pt-4">
                        We offer three pricing package for you to choose based on your requirements for your website.
                    </p>
                </div>
                <div
                    className="flex flex-wrap items-center justify-center lg:gap-4 gap-8">
                    {Pricingdata.map((item, index) => (
                        <PriceCard
                            key={index}
                            cardIndex={index}
                            category={["Basic", "Premium", "Enterprise"][index]}
                            description={[
                                "Responsive website with essential features to establish your online presence",
                                "Responsive website with fully customized website with advanced features",
                                "Delivers a comprehensive web solution with custom integrations, advanced functionality",
                            ][index]}
                            price={["499", "1299", "1999"][index]}
                            points={item.points}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
