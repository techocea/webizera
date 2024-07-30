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
<<<<<<< HEAD
      <div className="bg-primary text-white">
=======
      <div className="bg-primary text-white lg:max-w-7xl 2xl:w-screen-2xl w-full">
>>>>>>> b2b8179dbcf9e8ea10f587ad678d2e4ece51725a
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
