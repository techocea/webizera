"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Button } from "../ui/button";

interface PortfolioCardProps {
    imageSrc: string;
    name: string;
    description: string;
}

const PortfolioCard = ({ imageSrc, name, description }: PortfolioCardProps) => {
    return (
        <CardContainer className="inter-var h-fit">
            <CardBody className="bg-accent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl">
                <CardItem translateZ="100" className="w-full">
                    <Image
                        src={imageSrc}
                        height={1000}
                        width={1000}
                        className="h-60 w-full object-cover rounded-xl rounded-bl-none rounded-br-none group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex flex-col items-start text-left gap-4 p-4">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="rounded-xl text-xl font-normal text-white"
                    >
                        {name}
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="rounded-xl text-[16px] font-normal text-left text-muted line-clamp-2"
                    >
                        {description}
                    </CardItem>
                    <Button variant="outline" size="default" className="glass w-full">See Details</Button>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default PortfolioCard;
