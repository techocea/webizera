import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { ArrowRight, Check, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface PriceCardProps {
    id: number;
    icon: LucideIcon;
    label: string;
    description: string;
    points: string[];
}

export default function PriceCard({
    id,
    icon,
    label,
    description,
    points,
}: PriceCardProps) {
    const Icon = icon;
    return (
        <Card
            className={`p-6  ${id === 1
                ? "bg-accent bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-primary/30 shadow-lg shadow-primary/10"
                : "bg-accent hover:border hover:border-primary transition-colors duration-300 hover: border-primary/30 hover:shadow-primary/10"
                }`}
        >
            <CardHeader className="flex items-center justify-between w-full">
                <span className="bg-gradient-to-br from-primary to-primary-foreground max-w-10 w-full h-10 rounded-md flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                </span>
                <p className="text-muted">
                    {id === 1 && (
                        <span className="uppercase px-3 py-1 rounded-full text-sm bg-[rgba(34,197,94,0.15)] text-primary">
                            popular
                        </span>
                    )}
                </p>
            </CardHeader>
            <CardContent className="mt-6 p-0 text-left space-y-4">
                <CardTitle className="text-white">{label}</CardTitle>
                <p className="font-regular text-sm text-muted">{description}</p>
                <CardDescription className="flex flex-col items-start font-bold space-y-4">
                    {points.map((point, idx) => (
                        <ul key={idx} className="flex gap-3">
                            <span>
                                <Check size={24} className="text-primary" />
                            </span>
                            <p className="text-sm">{point}</p>
                        </ul>
                    ))}
                </CardDescription>
            </CardContent>
            <CardFooter className="p-0 mt-4">
                <Button variant="default" size="lg" className="flex items-center gap-2 w-full ">
                    Request a quote <ArrowRight />
                </Button>
            </CardFooter>
        </Card>
    );
}
