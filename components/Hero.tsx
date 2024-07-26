import { Button } from "./ui/button";

const socialMedia = [
    { title: "Instagram", url: "https://www.instagram.com/webizera.co/" },
    {
        title: "Facebook",
        url: "https://web.facebook.com/profile.php?id=61550819112955",
    },
];

export default function Hero() {
    return (
        <section className="h-full py-12 px-2 lg:py-16">
            <div className="flex max-md:flex-col lg:items-start max-md:items-center max-md:text-center max-md:justify-center lg:justify-between w-full lg:px-10">
                <div className="flex flex-col gap-8 lg:gap-6">
                    <h1 className="text-3xl lg:text-6xl font-bold lg:max-w-3xl w-full leading-[48px] lg:leading-[80px]">
                        We specialize in creating digital solutions to your business needs
                    </h1>
                    <p className="font-semibold">
                        Saving the world with exceptional designs,your satisfaction is our
                        priority
                    </p>
                    <div className="mt-6">
                        <a href="#connect">
                            <Button
                                variant="secondary"
                                className="text-primary uppercase text-xl font-bold rounded-none"
                            >
                                Start a project
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex lg:flex-col gap-4 max-md:mt-16">
                    {socialMedia.map((item, idx) => (
                        <ul key={idx}>
                            <a href={item.url} target="_blank">
                                <li className="font-thin border-b border-white w-fit cursor-pointer  hover:text-secondary hover:border-b-secondary duration-500 ease-in-out">
                                    {item.title}
                                </li>
                            </a>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
}
