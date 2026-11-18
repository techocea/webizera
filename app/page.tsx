import {HeroSection} from "@/components/sections/HeroSection";
import {BeliefProblemSection} from "@/components/sections/BeliefProblemSection";
import {MonumentalBrandSection} from "@/components/sections/MonumentalBrandSection";
import {CapabilitiesSection} from "@/components/sections/CapabilitiesSection";
import {PortfolioSection} from "@/components/sections/PortfolioSection";
import {ApproachSection} from "@/components/sections/ApproachSection";
import {ProofFounderSection} from "@/components/sections/ProofFounderSection";
import {FaqSection} from "@/components/sections/FaqSection";
import {CtaSection} from "@/components/sections/CtaSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <BeliefProblemSection/>
            <CapabilitiesSection/>
            <MonumentalBrandSection/>
            <PortfolioSection/>
            <ApproachSection/>
            <ProofFounderSection/>
            <CtaSection/>
            <FaqSection/>
        </>
    );
}
