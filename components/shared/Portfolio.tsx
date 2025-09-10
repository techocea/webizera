import Badge from "./Badge";
import HeaderTitle from "./HeaderTitle";
import PortfolioCard from "./PortfolioCard";
import { PORTFOLIO } from "@/lib/constants";

const Portfolio = () => {
    return (
        <section className="px-8 mt-20 h-full" id="portfolio">
            <div className="flex flex-col gap-6 items-center justify-center text-center">
                <div className="lg:max-w-3xl w-full space-y-4">
                    <Badge title="Our Achievements" />
                    <HeaderTitle title="Some projects we have delivered" />
                    <p className="font-regular lg:text-lg text-muted">
                        Tailor-made solutions that solve your business challenges:
                        applications, platforms, automations and systems optimized for your
                        results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-full mt-4">
                    {PORTFOLIO.map((card) => (
                        <PortfolioCard
                            key={card.id}
                            name={card.name}
                            description={card.description}
                            imageSrc={card.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
