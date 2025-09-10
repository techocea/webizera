import React from "react";
import { Button } from "../ui/button";

interface BadgeProps {
    title: string;
}

const Badge = ({ title }: BadgeProps) => {
    return (
        <Button variant="outline" className="glass w-fit rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
            {title}
        </Button>
    );
};

export default Badge;
