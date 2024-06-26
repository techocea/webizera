
import { Pricingdata } from "@/utils";

export default function Pricing() {
    return (
        <section className="py-10 max-md:px-0 lg:py-20 border-t border-b border-gray-500" id="pricing">
            <h3 className="uppercase font-semibold text-[16px] text-secondary text-center mb-4">
                pricing
            </h3>
            <div

                className="flex flex-wrap items-center justify-center gap-4">
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
        </section>
    );
}

type PriceCardProps = {
    cardIndex: number;
    category: string;
    description: string;
    price: string;
    points: string[];
};

function PriceCard({ category, description, price, points, cardIndex }: PriceCardProps) {
    return (
        <div className="rounded-xl p-2.5 bg-gradient-to-b from-secondary via-[#5F265C] to-secondary h-[700px] max-w-[370px]">
            {cardIndex === 1 ? <span className="text-7xl font-semibold opacity-25">Popular</span> : null}
            <div className={`flex flex-col gap-3  ${cardIndex === 1 ? "mt-[-2rem]" : "mt-10"}`}>
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="font-semibold text-[64px] capitalize">{category}</h1>
                    <p className="text-lg leading-5">{description}</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center text-center">
                    <p>From</p>
                    <h1 className="text-6xl font-bold">${price}</h1>
                </div>
                <div className="flex items-center justify-center text-center">
                    <ul>
                        {points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
