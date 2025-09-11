import React from "react";
import Badge from "./Badge";
import HeaderTitle from "./HeaderTitle";
import { STATS } from "@/lib/constants";
import StatCard from "./StatCard";

const Stats = () => {
    return (
        <section className="px-4 mt-16 lg:mt-20 h-full">
            <div className="flex flex-col gap-4 items-center justify-center text-center">
                <div className="lg:max-w-4xl w-full space-y-4">
                    <Badge title="Results" />
                    <HeaderTitle title="Measurable results without the frills" />
                    <p className="font-regular lg:text-lg text-muted">
                        We focus on the results that matter: speed, clarity and conversions.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 w-full mt-10 lg:mt-12">
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
