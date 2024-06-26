import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Connect from "@/components/Connect";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/utils";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-primary flex justify-center items-center flex-col overflow-hidden sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Connect />
        <Footer />
      </div>
    </main>
  );
}
