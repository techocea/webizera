import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GradientCircle from "./ui/GradientBackground";



export default function Hero() {
    return (
        <section className="py-20 max-md:pb-20 max-md:pt-0 z-20" id="home">
            <div className="h-screen w-full dark:bg-primary bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flexitems-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-primary bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex items-center justify-center text-center relative my-20 z-10 h-full">
                <GradientCircle />
                <div className="flex flex-col items-center max-w-3xl max-md:mt-[4rem]">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
                        Transforming Ideas into Digital Experiences
                    </h2>
                    <TextGenerateEffect
                        className="text-center  max-md:mb-10 text-[96px] md:text-5xl lg:text-7xl"
                        words=" We specialize in creating digital solutions to your business needs."
                    />
                    <a href="#portfolio">
                        <MagicButton
                            title="See our work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
