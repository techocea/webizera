import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Connect from "@/components/Connect";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <>
      <div className="bg-primary text-white lg:max-w-7xl 2xl:w-screen-2xl w-full">
        <Header />
        <Hero />
        <Services />
        <WorkProcess />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Connect />
        <Footer />
      </div>
    </>
  );
}
