import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "../ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    icon: LucideIcon;
    label: string;
    stat: string;
}

const StatCard = ({ icon, label, stat }: StatCardProps) => {
    const Icon = icon;
    return (
        <Card className="p-6 bg-accent">
            <CardHeader className="flex items-center text-left gap-2 w-full">
                <span className="bg-gradient-to-br from-primary to-primary-foreground max-w-10 w-full h-10 rounded-md flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                </span>
                <p className="text-muted">{label}</p>
            </CardHeader>
            <CardContent className="mt-6 p-0">
                <CardDescription className="flex items-start font-bold">{stat}</CardDescription>
            </CardContent>
        </Card>
    );
};

export default StatCard;
