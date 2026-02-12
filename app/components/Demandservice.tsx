"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientGlowButton from "./GradientGlowButton";
import NavLabel from "./NavLable";

gsap.registerPlugin(ScrollTrigger);

// Card data
const cardData = [
  {
    title: "Smart Contract Development",
    description:
      "Secure, audit-ready smart contracts for DeFi, NFTs, and enterprise blockchain use cases.",
    buttonText: "Explore Smart Contract Services",
    bgImage: "assets/images/Demandservice.png",
  },
  {
    title: "Crypto Trading Bot Development",
    description:
      "AI-powered automated trading bots for crypto exchanges with real-time market intelligence.",
    buttonText: "View Trading Bot Solutions",
    bgImage: "assets/images/Demandservice1.png",
  },
  {
    title: " 2D / 3D Game Development",
    description:
      "AI-powered automated trading bots for crypto exchanges with real-time market intelligence.",
    buttonText: "Explore Game Services",
    bgImage: "assets/images/Demandservice2.png",
  },
  {
    title: "Unreal Engine Game Development",
    description:
      "Advanced Unreal Engine games with cinematic visuals and immersive gameplay.",
    buttonText: "Unreal Engine Expertise",
    bgImage: "assets/images/Demandservice3.png",
  },
  {
    title: " P2E Game Development",
    description:
      "Blockchain-powered P2E games with NFT assets, token economies, and scalable ecosystems.",
    buttonText: "Build P2E Games",
    bgImage: "assets/images/Demandservice4.png",
  },
  {
    title: "Prediction Market Software",
    description:
      "Decentralized and AI-driven prediction platforms for finance, gaming, and analytics.",
    buttonText: "Explore Prediction Market Solutions",
    bgImage: "assets/images/Demandservice5.png",
  },
];

const Demandservice = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const totalCards = cards.length;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((st) => st.kill());

    cards.forEach((card, index) => {
      // Pin ALL cards including the last one
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    // Unpin all cards when next section arrives
    if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        onEnter: () => {
          ScrollTrigger.getAll().forEach((st) => {
            if (
              st.vars.trigger &&
              cards.includes(st.vars.trigger as HTMLDivElement)
            ) {
              st.disable();
            }
          });
        },
        onLeaveBack: () => {
          ScrollTrigger.getAll().forEach((st) => {
            if (
              st.vars.trigger &&
              cards.includes(st.vars.trigger as HTMLDivElement)
            ) {
              st.enable();
            }
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-2 md:gap-4 py-8 md:py-16 px-4">
        <NavLabel
          label="Your Trusted Partner"
          className="text-sm md:text-[15px]"
        />
        <h3 className="text-xl md:text-3xl bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
          Beelockchain's Core Expertise:
        </h3>
        <h3 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent h-auto md:h-20">
          High-Demand Services
        </h3>
      </div>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex flex-col items-center pb-[22vh] md:pb-0 px-4 md:px-0"
      >
        {cardData.map((card, index) => {
          return (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="w-full md:w-[80%] h-auto min-h-[320px] md:h-[600px] rounded-xl shadow-2xl overflow-hidden relative mb-16 md:mb-32"
              style={{
                zIndex: index + 1,
              }}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center md:bg-right"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                }}
              >
                {/* Gradient Overlay - adjusted for mobile */}
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-teal-900/95 via-teal-800/85 to-teal-900/70 md:from-teal-900/90 md:via-teal-800/70 md:to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center md:items-center">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-1/2 px-5 md:px-12 py-8 md:py-0 space-y-4 md:space-y-6 bg-white/5 backdrop-blur-sm h-auto md:h-96 flex flex-col justify-center rounded-lg mx-4 md:mx-0 md:ml-10 my-4 md:my-0">
                  <h2 className="text-xl md:text-4xl font-bold text-white leading-tight">
                    {card.title}
                  </h2>

                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
                    {card.description}
                  </p>

                  <GradientGlowButton className="w-fit text-sm md:text-base">
                    {card.buttonText}
                  </GradientGlowButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Demandservice;