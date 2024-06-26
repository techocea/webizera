import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { portfolioData } from "@/utils";


export default function Portfolio() {
    return (
        <section className="py-16" id="portfolio">
            <div className="flex flex-col items-center">
                <h3 className="uppercase font-semibold text-[16px] text-secondary text-center mb-4">
                    portfolio
                </h3>
                <div className="flex flex-col gap-3">
                    <PortfolioCard />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[70px] max-md:text-5xl max-md:w-[350px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary mt-10 max-md:mb-10">enough about us - let`s start yours</h1>
                    <a href="mailto:dunsfordbrigt@gmail.com">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
type PortfolioProps = {
    id: number;
    description: string;
    icons: string[];
    image: string;
};

function PortfolioCard() {
    return (
        <div className="flex flex-col gap-[100px]">
            {portfolioData.map((item: PortfolioProps, index) => (
                <>
                    <div key={index} className={`flex max-md:flex-col-reverse items-start max-md:items-center max-md:p-2.5 max-md:text-center gap-6 lg:gap-8 justify-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
                        <div className="flex flex-col gap-3 md:max-w-xl">
                            <p>{item.description}</p>
                            <div className="flex items-center max-md:justify-center gap-6">
                                {item.icons.map((icon, idx) => (
                                    <Image key={idx} src={icon} alt="icon" width={60} height={60} />
                                ))}
                            </div>
                        </div>
                        <Image
                            src={item.image}
                            width={316}
                            height={290}
                            alt="Portfolio Image"
                        />
                    </div>
                </>
            ))}
        </div>
    );
}
