
import { Pricingdata } from "@/lib/constants";
import PriceCard from "./PriceCard";
import HeaderTitle from "./HeaderTitle";

export default function Pricing() {
    return (
        <section className="lg:max-w-screen-[1700px] lg:px-20 2xl:px-32 py-20 md:px-10 px-4 max-md:h-full border-b border-gray-500" id="pricing">
            <div className="flex flex-col gap-10 max-md:text-center">
                <div className="lg:items-start text-center lg:justify-start lg:text-right  flex flex-col max-md:gap-8">
                    <HeaderTitle
                        heading="our prices"
                        text="6xl" />
                    <p className="lg:pt-4 md:pt-6">
                        We offer three pricing packages for you to choose based on your requirements for your website.
                    </p>
                </div>
                {/* card container */}
                <div
                    className="flex flex-wrap items-center justify-center 2xl:gap-6 gap-8">
                    {Pricingdata.map((item, index) => (
                        <PriceCard
                            key={index}
                            cardIndex={index}
                            category={["Basic", "Premium", "Enterprise"][index]}
                            description={[
                                "Simple website to establish your online presence",
                                "Corporate style website to establish your online presence",
                                "Enterprise level website to establish your online presence",
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
