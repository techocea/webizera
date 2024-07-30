"use client";

import { navItems } from "@/lib/constants";
import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";



export default function Header() {
    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav);
    };
    return (
        <header className="xl:sticky top-0 right-0 bg-primary z-20 2xl:max-w-[1700px] lg:px-20 2xl:px-32 py-6  px-6 md:px-10 flex items-center justify-between w-full">
            <h1 className="uppercase text-3xl tracking-widest font-semibold flex">
                webi <span className="text-secondary">z</span>er
                <span className="text-secondary">a</span>
            </h1>
            <nav className="max-lg:hidden lg:flex gap-10">
                {navItems.map((item, index) => (
                    <ul key={index}>
                        <a href={item.href} className="capitalize font-semibold hover:text-secondary duration-500 ease-in-out">
                            {item.title}
                        </a>
                    </ul>
                ))}
            </nav>
            <div
                className="lg:hidden max-lg:flex items-center justify-center text-secondary  cursor-pointer"
                onClick={handleNav}
            >
                {!showNav ? <FiMenu size={38} /> : <LiaTimesSolid size={38} />}
                <div
                    className={`${showNav
                        ? "bg-primary py-12 absolute z-20 top-20 left-0 h-auto w-full ease-in-out duration-500 flex flex-col items justify-center"
                        : "bg-primary absolute z-20 top-[-100%] left-0 h-full w-full ease-in-out duration-500"
                        }`}
                >
                    {navItems.map((item, idx) => (
                        <ul key={idx} className="py-4">
                            <a href={item.href} className="capitalize text-3xl pl-8">{item.title}</a>
                        </ul>
                    ))}
                </div>
            </div>
        </header>
    );
}
