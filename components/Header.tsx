"use client";

import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

const navItems = [
    { title: "home", href: "/" },
    { title: "services", href: "#services" },
    { title: "portfolio", href: "#portfolio" },
    { title: "pricing", href: "#pricing" },
    { title: "testimonials", href: "#testimonials" },
    { title: "contact us", href: "#connect" },
];

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav);
    };
    return (
        <header className="lg:sticky top-0 right-0 bg-primary z-20 lg:max-w-7xl py-6 px-6 lg:px-10  flex items-center justify-between w-full">
            <h1 className="uppercase text-3xl tracking-widest font-semibold flex">
                webi <span className="text-secondary">z</span>er
                <span className="text-secondary">a</span>
            </h1>
            <nav className="hidden md:flex gap-10">
                {navItems.map((item, index) => (
                    <ul key={index}>
                        <a href={item.href} className="capitalize font-semibold hover:text-secondary duration-500 ease-in-out">
                            {item.title}
                        </a>
                    </ul>
                ))}
            </nav>
            <div
                className="md:hidden flex items-center justify-center text-secondary  cursor-pointer"
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
