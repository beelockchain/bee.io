"use client";

import Topnav from "./components/Topnav";
import dynamic from "next/dynamic";
import IndustriesSection from "./components/IndustriesSection";
import BlockchainNetworks from "./components/BlockchainNetworks";
import Spotlights from "./components/Spotlights";
import RewardsSection from "./components/RewardsSection";
import ContactSection from "./components/ContactSection";
import Demandservice from "./components/Demandservice";

// Lazy-load components with fallback placeholders
const Hero = dynamic(() => import("./components/Hero"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Hero...</p>
  ),
});
const Statictis = dynamic(() => import("./components/Statictis"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Statistics...</p>
  ),
});
const Teams = dynamic(() => import("./components/Teams"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Teams...</p>
  ),
});
const Whychooseus = dynamic(() => import("./components/whychooseus"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Why Choose Us...</p>
  ),
});
const TechTrendsMarquee = dynamic(() => import("./components/Marquee"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Tech Trends...</p>
  ),
});
const Aisolution = dynamic(() => import("./components/Aisolution"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading AI Solution...</p>
  ),
});
const Aiblueprint = dynamic(() => import("./components/Aiblueprint"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading AI Blueprint...</p>
  ),
});
const HowItWorksCards = dynamic(() => import("./sections/HowItWorksCards"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading How It Works...</p>
  ),
});
const Whatweprovide = dynamic(() => import("./sections/Whatweprovide"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading What We Provide...</p>
  ),
});
const ProcessSection = dynamic(() => import("./components/ProcessSection"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Process...</p>
  ),
});
const ClientsReview = dynamic(() => import("./components/ClientsReview"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Clients Review...</p>
  ),
});
const TechnologiesSection = dynamic(
  () => import("./components/TechnologiesUsed"),
  {
    loading: () => (
      <p className="text-white text-center py-10">Loading Technologies...</p>
    ),
  },
);
const AIProjectFinderSection = dynamic(
  () => import("./components/AIProjectFinderSection"),
  {
    loading: () => (
      <p className="text-white text-center py-10">
        Loading AI Project Finder...
      </p>
    ),
  },
);
const Shortidea = dynamic(() => import("./components/Shortidea"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Short Ideas...</p>
  ),
});
const GlobalMap = dynamic(() => import("./components/GlobalMap"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Global Map...</p>
  ),
});
const FAQSection = dynamic(() => import("./components/faq"), {
  loading: () => <p className="text-white text-center py-10">Loading FAQ...</p>,
});
const Footer = dynamic(() => import("./components/footer"), {
  loading: () => (
    <p className="text-white text-center py-10">Loading Footer...</p>
  ),
});

export default function Home() {
  return (
    <div className="bg-[#00020F] h-auto space-y-10">
      <Hero />
      <Statictis />
      {/* <Teams /> */}
      <Demandservice />
      <Whychooseus />
      <TechTrendsMarquee />
      {/* <Aisolution /> */}
      <Aiblueprint />
      {/* <HowItWorksCards /> */}
      <Whatweprovide />
      <IndustriesSection />
      <BlockchainNetworks />
      <ProcessSection />
      <ClientsReview />
      <RewardsSection />
      <Spotlights />
      <FAQSection />
      <ContactSection />
         <GlobalMap />
      {/* <TechnologiesSection /> */}
      {/* <AIProjectFinderSection />
      <Shortidea /> */}
    </div>
  );
}
