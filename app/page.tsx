import Services from "@/components/shared/Services";
import Hero from "@/components/shared/Hero";
import Portfolio from "@/components/shared/Portfolio";
import Pricing from "@/components/shared/Pricing";
import Connect from "@/components/shared/Connect";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Testimonials from "@/components/shared/Testimonials";
import Stats from "@/components/shared/Stats";

export default function Home() {
  return (
    <div className="hero-vignette">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Stats />
      <Pricing />
      <Testimonials />
      <Connect />
      <Footer />
    </div>
  );
}
