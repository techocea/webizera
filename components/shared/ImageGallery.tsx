import Image from "next/image";

export default function ImageGallery() {
    return (
        <main>
            <div className="grid grid-cols-2 lg:gap-8 gap-4">
                <div className="row-span-1">
                    <Image
                        src="/develop.png"
                        width={280}
                        height={325}
                        className=""
                        alt="webizera,best web design agency,web design agency"
                    />
                </div>
                <div className="row-span-1">
                    <Image
                        src="/concept.png"
                        width={280}
                        height={325}
                        className=""
                        alt="webizera,best web design agency,web design agency"
                    />
                    <div className="row-span-1 lg:mt-8 mt-6">
                        <Image
                            src="/design.png"
                            width={280}
                            height={325}
                            className=""
                            alt="webizera,best web design agency,web design agency"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
