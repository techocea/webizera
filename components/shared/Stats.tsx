import React from "react";
import Badge from "./Badge";
import HeaderTitle from "./HeaderTitle";
import { STATS } from "@/lib/constants";
import StatCard from "./StatCard";

const Stats = () => {
    return (
        <section className="px-8 my-28 h-full">
            <div className="flex flex-col gap-6 items-center justify-center text-center">
                <div className="lg:max-w-4xl w-full space-y-4">
                    <Badge title="Results" />
                    <HeaderTitle title="Measurable results without the frills" />
                    <p className="font-regular lg:text-lg text-muted">
                        We focus on the results that matter: speed, clarity and conversions.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-16">
                    {STATS.map((item) => (
                        <StatCard
                            key={item.id}
                            icon={item.icon}
                            label={item.label}
                            stat={item.stat}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
