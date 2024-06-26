import Image from "next/image";

export default function Connect() {
    return (
        <section className="p-10 lg:p-16" id="connect">
            <h3 className="uppercase font-semibold text-[16px] text-secondary text-center md:text-left mb-4">
                connect with us
            </h3>
            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-4 max-md:gap-6 max-w-2xl">
                <ConnectCard
                    image="/github.png"
                    title="github"
                    href="https://github.com/techocea"
                />
                <ConnectCard
                    image="/facebook.png"
                    title="facebook"
                    href="https://web.facebook.com/profile.php?id=61550819112955"
                />
                <ConnectCard
                    image="/messenger.png"
                    title="messenger"
                    href="https://web.facebook.com/profile.php?id=61550819112955"
                />
                <ConnectCard
                    image="/instagram.png"
                    title="instagram"
                    href="https://www.instagram.com/webizera.co"
                />
            </div>
            {/* <Image src="/gradient-globe.png" alt="Gradient GLobe" width={400} height={350} /> */}
        </section>
    );
}

type ConnectCardProps = {
    image: string;
    title: string;
    href: string;
};

function ConnectCard({ image, title, href }: ConnectCardProps) {
    return (
        <a href={href}>
            <div className="bg-secondary max-w-[370px] pl-4 h-10 flex hover:bg-opacity-75">
                <div className="flex items-center justify-center gap-3">
                    <Image src={image} width={38} height={38} alt="Portfolio Images" />
                    <p className="uppercase max-md:text-sm">{title}</p>
                </div>
            </div>
        </a>
    );
}
