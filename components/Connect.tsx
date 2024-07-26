import ContactForm from "./ContactForm";

export default function Connect() {
    return (
        <section className="lg:py-24 lg:px-16 py-20 px-6" id="connect">
            <div className=" lg:flex lg:max-w-7xl justify-between w-full ">
                <div className="flex md:hidden items-center justify-center mb-16">
                    <h1 className="text-6xl font-bold flex text-left uppercase">
                        let`s discuss <br />
                        your
                        <br />
                        project
                    </h1>
                </div>
                <ContactForm />
                <div className="hidden md:flex items-center justify-center mt-20 lg:mt-0">
                    <h1 className="text-6xl font-bold flex text-right uppercase">
                        let`s discuss <br />
                        your
                        <br />
                        project
                    </h1>
                </div>
            </div>
        </section>
    );
}
