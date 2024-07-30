import { workProcessData } from "@/lib/constants";
import HeaderTitle from "./HeaderTitle";
import ImageGallery from "./ImageGallery";

export default function WorkProcess() {
    return (
        <section className="lg:max-w-screen-[1700px] lg:px-20 2xl:px-32  py-20 px-6 max-md:h-full">
            <div className="w-full lg:flex flex-col">
                <div className="flex flex-col">
                    <HeaderTitle heading="working process" text="6xl" />
                    <div className="flex flex-col max-md:text-center ">
                        <div className="lg:flex max-md:flex-col lg:max-w-full  gap-10  items-center text-left justify-center lg:justify-between">
                            <ul className="steps steps-vertical mt-10">
                                {workProcessData.map((item)=>(
                                <li className={`step font-semibold text-[32px] flex flex-col`} key={item.id}>
                                    <div className="text-left flex flex-col lg:mt-12 mt-8 pl-6">
                                        {item.title}
                                        <span className="max-w-80 lg:max-w-96 w-full lg:text-lg text-[16px] font-normal">
                                            {item.description}
                                        </span>
                                    </div>
                                </li>
                                ))}
                                
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
