"use client"

import { Button } from "./ui/button";

export default function Connect() {
    const number = "+94724388956";
    const message = "Hello, I need to create a new website";

    const handleWhatsappClick = () => {
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };
    return (
        <section className="lg:py-24 lg:px-20 2xl:px-32 py-20 px-4" id="connect">
            <div className=" lg:flex lg:max-w-7xl justify-between w-full ">
                <div className="flex md:hidden items-center justify-center mb-16">
                    <h1 className="text-6xl font-bold flex text-left uppercase">
                        let`s discuss <br />
                        your
                        <br />
                        project
                    </h1>
                </div>
                <div className="hidden md:flex items-start justify-center mt-20 lg:mt-0">
                    <h1 className="text-6xl font-bold flex text-right uppercase">
                        let`s discuss <br />
                        your
                        <br />
                        project
                    </h1>
                </div>
                <div className="lg:max-w-lg text-center text-xl leading-normal flex flex-col ">
                    <h1>
                        Ready to transform your vision into stunning reality? Reach out to
                        us, and let’s create something extraordinary together!{" "}
                    </h1>
                    <div className="mt-10">
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={handleWhatsappClick}
                            className="font-medium text-2xl text-white rounded-full"
                        >
                            Let`s Talk
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
