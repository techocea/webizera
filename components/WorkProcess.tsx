import HeaderTitle from "./HeaderTitle";
import ImageGallery from "./ImageGallery";

export default function WorkProcess() {
    return (
        <section className="lg:py-24 lg:px-16 py-20 px-2 max-md:h-full">
            <div className="max-w-7xl w-full lg:flex flex-col">
                <div className="flex flex-col">
                    <div className="flex flex-col max-md:text-center ">
                        <HeaderTitle heading="working process" text="6xl" />
                        <div className="lg:flex max-md:flex-col lg:max-w-5xl w-full gap-10  items-center text-left justify-center">
                            <ul className="steps steps-vertical mt-10">
                                <li className="step step-primary font-semibold text-[32px] flex flex-col">
                                    <div className="text-left flex flex-col lg:mt-12 mt-8 pl-6">
                                        Research
                                        <span className="max-w-80 w-full lg:text-lg text-[16px] font-normal">
                                            To gather information and insights that will inform the
                                            rest of the project.
                                        </span>
                                    </div>
                                </li>
                                <li className="step font-semibold text-[32px] flex flex-col">
                                    <div className="text-left flex flex-col lg:mt-12 mt-8 pl-6">
                                        Concept
                                        <span className="max-w-80 w-full lg:text-lg text-[16px] font-normal">
                                            To develop a clear, strategic vision for the project based
                                            on the research findings.
                                        </span>
                                    </div>
                                </li>
                                <li className="step font-semibold text-[32px]">
                                    <div className="text-left flex flex-col lg:mt-12 mt-8 pl-6">
                                        Design
                                        <span className="max-w-80 w-full lg:text-lg text-[16px] font-normal">
                                            To create visually appealing, user-friendly designs that
                                            align with the concept.
                                        </span>
                                    </div>
                                </li>
                                <li className="step font-semibold text-[32px]">
                                    <div className="text-left flex flex-col lg:mt-12 mt-8 pl-6">
                                        Development
                                        <span className="max-w-80 w-full lg:text-lg text-[16px] font-normal">
                                            To turn the design into a functional website or
                                            application.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center mt-20">
                                <ImageGallery />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
