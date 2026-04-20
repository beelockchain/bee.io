"use client";

import { useState } from "react";
import GradientGlowButton from "@/app/components/GradientGlowButton";

const services = [
  {
    id: 1,
    label: "Blockchain Consultation & Integration",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#25F2EB" strokeWidth="1.5" />
        <path d="M18 10v4M18 22v4M10 18h4M22 18h4" stroke="#25F2EB" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="4" fill="#25F2EB" fillOpacity="0.3" stroke="#25F2EB" strokeWidth="1.5"/>
        <circle cx="18" cy="10" r="2" fill="#25F2EB"/>
        <circle cx="18" cy="26" r="2" fill="#25F2EB"/>
        <circle cx="10" cy="18" r="2" fill="#25F2EB"/>
        <circle cx="26" cy="18" r="2" fill="#25F2EB"/>
      </svg>
    ),
    heading: "Blockchain Consultation & Integration",
    description:
      "Our Blockchain Consultation & Integration service helps organizations adopt transparent and reliable blockchain solutions. From start idea to deployment, we develop and integrate systems with business operations.",
  },
  {
    id: 2,
    label: "Enterprise Blockchain Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="14" width="10" height="14" rx="2" stroke="#25F2EB" strokeWidth="1.5"/>
        <rect x="20" y="8" width="10" height="20" rx="2" stroke="#25F2EB" strokeWidth="1.5"/>
        <path d="M10 10h6M10 7h4" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="18" width="4" height="4" rx="0.5" fill="#25F2EB" fillOpacity="0.4"/>
        <rect x="23" y="12" width="4" height="4" rx="0.5" fill="#25F2EB" fillOpacity="0.4"/>
      </svg>
    ),
    heading: "Enterprise Blockchain Development",
    description:
      "Beelockchain provides Enterprise Blockchain Development services focused on enterprise-level security and regulatory alignment. We build blockchain systems that easily integrate with existing infrastructure and support complex business operations.",
  },
  {
    id: 3,
    label: "Private Blockchain Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="16" width="20" height="14" rx="3" stroke="#25F2EB" strokeWidth="1.5"/>
        <path d="M13 16v-4a5 5 0 0110 0v4" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="23" r="2.5" fill="#25F2EB" fillOpacity="0.5" stroke="#25F2EB" strokeWidth="1.5"/>
        <path d="M18 25.5v2" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Private Blockchain Development",
    description:
      "Our Private Blockchain Development services enable organizations to build permissioned blockchain solutions with complete control over data access, governance, and security. Our development process includes network simulation, security hardening, and enterprise system integration.",
  },
  {
    id: 4,
    label: "Public Blockchain Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="10" stroke="#25F2EB" strokeWidth="1.5"/>
        <path d="M8 18h20M18 8c-3 3-5 6-5 10s2 7 5 10M18 8c3 3 5 6 5 10s-2 7-5 10" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Public Blockchain Development",
    description:
      "Beelockchain provides Public Blockchain Development solutions to build the NFT marketplace, dApps, and protocols on leading blockchain networks. We also developed token economics, smart contracts, and deployed decentralized systems for global adoption.",
  },
  {
    id: 5,
    label: "Asset Tokenization Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="9" stroke="#25F2EB" strokeWidth="1.5"/>
        <path d="M18 11v2M18 23v2M14 14l1.5 1.5M20.5 20.5L22 22M11 18h2M23 18h2M14 22l1.5-1.5M20.5 15.5L22 14" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="3" fill="#25F2EB" fillOpacity="0.5"/>
      </svg>
    ),
    heading: "Asset Tokenization Development",
    description:
      "Our Asset Tokenization Development services help organisations convert real-world and digital assets into blockchain-based tokens. We implement smart contracts, define transfer rules, and deploy token ecosystems built for liquidity and regularity guidance.",
  },
  {
    id: 6,
    label: "Custom Blockchain App Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="7" y="7" width="22" height="22" rx="4" stroke="#25F2EB" strokeWidth="1.5"/>
        <path d="M13 15l-3 3 3 3M23 15l3 3-3 3M19 13l-2 10" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Custom Blockchain App Development",
    description:
      "We are the top notch blockchain development company that builds customized blockchain development for specific business use cases with user-friendly interfaces. Our developer team creates the futuristic blockchain architecture with smart contracts, integrates APIs, and deploys your applications for high security.",
  },
  {
    id: 7,
    label: "Layer-1 Blockchain Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6L30 12v12L18 30 6 24V12z" stroke="#25F2EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M18 6v24M6 12l12 6 12-6" stroke="#25F2EB" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Layer-1 Blockchain Development",
    description:
      "Our Layer-1 Blockchain Development solutions offer independent blockchain protocols from the ground up. We simulate throughput, latency, and fault tolerance before implementing the protocol to ensure long-term stability.",
  },
  {
    id: 8,
    label: "Layer-2 Blockchain Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 10L28 15v10L18 30 8 25V15z" stroke="#25F2EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M18 4L30 10" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M18 4L6 10" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <circle cx="18" cy="4" r="2" fill="#25F2EB"/>
      </svg>
    ),
    heading: "Layer-2 Blockchain Development",
    description:
      "Beelockchain provides the Layer-2 Blockchain Development services with ultra speed transaction and reduces development costs for existing blockchain networks. We also implement rollups, sidechains, or state channels and validate performance.",
  },
  {
    id: 9,
    label: "Hyperledger & Multichain Blockchain",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="10" cy="18" r="4" stroke="#25F2EB" strokeWidth="1.5"/>
        <circle cx="26" cy="10" r="4" stroke="#25F2EB" strokeWidth="1.5"/>
        <circle cx="26" cy="26" r="4" stroke="#25F2EB" strokeWidth="1.5"/>
        <path d="M14 18h4M22 12l-4 4M22 24l-4-4" stroke="#25F2EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Hyperledger & Multichain Blockchain",
    description:
      "We deliver Hyperledger and Multichain Blockchain solutions for enterprises and businesses requiring permissioned blockchain networks and interoperability. We architect modular blockchain systems, interoperability, and deploy enterprise-grade blockchain frameworks with full control for you.",
  },
  {
    id: 10,
    label: "Blockchain Security Auditing & Testing",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6l10 4v8c0 6-4 10-10 12C8 28 4 24 4 18v-8l10-4z" stroke="#25F2EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 18l3 3 7-7" stroke="#25F2EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Blockchain Security Auditing & Testing",
    description:
      "Our Blockchain Security Auditing & Testing services check that your blockchain platforms and smart contracts are secure and compliant. Our Blockchain security team conducts automatic and manual audits to ensure your platform is safe.",
  },
  {
    id: 11,
    label: "Web3 Development Services",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6l10 4v8c0 6-4 10-10 12C8 28 4 24 4 18v-8l10-4z" stroke="#25F2EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 18l3 3 7-7" stroke="#25F2EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: "Web3 Development Services",
    description:
      "Beelockchain offers end-to-end Web3 Development Services for decentralized applications, NFT platforms, and digital ecosystems. Our Web3 solutions enable safe transactions, digital ownership, and sustainable decentralized growth.",
  },
];

export default function BlockchainServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const active = services[activeIndex];
  const maxIndex = services.length - 1;

  const scrollCarousel = (dir: "left" | "right") => {
    setCarouselIndex((prev) =>
      dir === "left" ? Math.max(0, prev - 1) : Math.min(maxIndex, prev + 1)
    );
  };

  return (
    <section className="relative w-full bg-[#000706] overflow-hidden py-16 px-4 md:px-10 lg:px-16">
      <style>{`
        .glass-card {
          background: rgba(11, 35, 36, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(255, 255, 255, 0.06),
            inset 0 0 20px 10px rgba(11, 35, 36, 0.6);
          position: relative;
          overflow: hidden;
        }
        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          z-index: 10;
        }
        .glass-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          z-index: 10;
        }
      `}</style>

      {/* ── Background radial glow — sits behind left card only ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          /* Horizontally centered on the left panel (~35% of width),
             vertically centered in the card area */
          left: "20%",
          top: "50%",
          transform: "translateY(-30%)",
          width: "100%",
          height: "600px",
          background: `radial-gradient(
            ellipse at 40% 50%,
            rgba(20, 180, 160, 0.55) 0%,
            rgba(18, 148, 132, 0.40) 22%,
            rgba(14, 110, 100, 0.28) 42%,
            rgba(10,  80,  75, 0.14) 62%,
            transparent 80%
          )`,
          filter: "blur(18px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── PART 1: Heading + Description ── */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-12 md:mb-14">
          <div className="md:w-1/2">
            <h2 className="text-white font-manrope font-bold text-[20px] md:text-[20px] lg:text-[25px] xl:text-[35px]  leading-tight">
              What We Provide:{" "}
              <span className="block">Blockchain</span>
              <span className="block">Development Services</span>
            </h2>
          </div>
          <div className="md:w-1/2 flex items-center">
            <p className="text-[#CCCCCC] font-poppins text-sm md:text-[13px] lg:text-[14px] leading-relaxed">
              Beelockchain provides end-to-end blockchain development services
              that turn on your digital ideas into powerful Web3 solutions. Our
              custom blockchain development services cover the complete Web3
              lifecycle, from ideation to deployment.
            </p>
          </div>
        </div>

        {/* ── DESKTOP: Tab Section ── */}
        <div className="hidden md:flex gap-5 items-stretch ">

          {/* Left: Active Content Card — glassmorphism */}
          <div className="glass-card flex-1 md:px-6 md:p-y-5 xl:px-30 xl:py-20 flex flex-col md:justify-center lg:justify-center  min-h-[300px] md:max-w-2xl xl:max-w-4xl">
            <div>
              {/* Icon container — teal circle matching screenshot */}
              <div
                className="mb-6 w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(20, 160, 150, 0.35)",
                  border: "1px solid rgba(37, 242, 235, 0.25)",
                  boxShadow: "0 0 16px rgba(37, 242, 235, 0.15)",
                }}
              >
                {active.icon}
              </div>

              {/* Heading */}
              <h3 className="text-white font-bold md:text-[30px] lg:text-[35px] mb-4 leading-snug font-manrope">
                {active.heading}
              </h3>

              {/* Description */}
              <p className="text-[#B0D8DC] md:text-[15px] lg:text-[14px] xl:text-[18px] leading-relaxed font-poppines">
                {active.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%] border-cyan-400/50 hover:bg-cyan-400/10">
                Know more
              </GradientGlowButton>
            </div>
          </div>

          {/* Right: Tab List */}
          <div className="md:w-60 lg:w-80 xl:w-105 flex flex-col gap-2">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveIndex(i)}
                className={`flex justify-center items-center md:px-3 md:py-3  xl:px-4 lg:py-3 rounded-full md:text-[11px] xl:text-sm font-medium transition-all duration-200 text-center ${
                  activeIndex === i
                    ? "bg-[#25F2EB] text-[#060B12] font-semibold shadow-[0_0_16px_rgba(45,212,212,0.35)]"
                    : "bg-[#0C1418] text-[#ffffff] hover:bg-[#1A2A33] hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── MOBILE: Carousel ── */}
        <div className="md:hidden">
          <div className="relative mt-4">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-400 ease-in-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {services.map((s) => (
                  <div key={s.id} className="min-w-full px-1">
                    <div className="glass-card p-6 flex flex-col gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(20, 160, 150, 0.35)",
                          border: "1px solid rgba(37, 242, 235, 0.25)",
                        }}
                      >
                        {s.icon}
                      </div>
                      <h3 className="text-white font-bold text-xl leading-snug">
                        {s.heading}
                      </h3>
                      <p className="text-[#B0D8DC] text-sm leading-relaxed">
                        {s.description}
                      </p>
                      <button className="mt-2 self-start border border-white/30 text-white text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors duration-200">
                        Know more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center items-center gap-4 mt-5">
              <button
                onClick={() => scrollCarousel("left")}
                disabled={carouselIndex === 0}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:border-[#25F2EB] hover:text-[#25F2EB] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                disabled={carouselIndex === maxIndex}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:border-[#25F2EB] hover:text-[#25F2EB] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}