type PriceCardProps = {
    cardIndex: number;
    category: string;
    description: string;
    price: string;
    points: string[];
};

export default function PriceCard({ category, description, price, points, cardIndex }: PriceCardProps) {
    return (
        <div className="rounded-xl p-2.5 bg-gradient-to-b from-secondary via-[#5F265C] to-secondary h-[700px] lg:max-w-[340px] max-w-[380px]">
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
