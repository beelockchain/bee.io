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
    bgImage: "assets/images/Demandserviceimg1.svg",
  },
  {
    title: "Crypto Trading Bot Development",
    description:
      "AI-powered automated trading bots for crypto exchanges with real-time market intelligence.",
    buttonText: "View Trading Bot Solutions",
    bgImage: "assets/images/Demandserviceimg1.svg",
  },
  {
    title: " 2D / 3D Game Development",
    description:
      "AI-powered automated trading bots for crypto exchanges with real-time market intelligence.",
    buttonText: "Explore Game Services",
    bgImage: "assets/images/Demandserviceimg1.svg",
  },
  {
    title: "Unreal Engine Game Development",
    description:
      "Advanced Unreal Engine games with cinematic visuals and immersive gameplay.",
    buttonText: "Unreal Engine Expertise",
    bgImage: "assets/images/Demandserviceimg1.svg",
  },
  {
    title: " P2E Game Development",
    description:
      "Blockchain-powered P2E games with NFT assets, token economies, and scalable ecosystems.",
    buttonText: "Build P2E Games",
    bgImage: "assets/images/Demandserviceimg1.svg",
  },
  {
    title: "Prediction Market Software",
    description:
      "Decentralized and AI-driven prediction platforms for finance, gaming, and analytics.",
    buttonText: "Explore Prediction Market Solutions",
    bgImage: "assets/images/Demandserviceimg1.svg",
  },
];

const Demandservice = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
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
      <div className="flex flex-col items-center text-center gap-4 py-16">
        <NavLabel
          label="Your Trusted Partner"
          className="text-sm md:text-[15px]"
        />
        <h3 className="text-3xl  bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
          Beelockchain's Core Expertise:
        </h3>
        <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent h-20">
          High-Demand Services
        </h3>
      </div>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex flex-col items-center gap-32 pb-[20vh]"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="w-[80%] h-[600px] rounded-xl shadow-2xl overflow-hidden relative"
            style={{ zIndex: index + 1 }}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.bgImage})`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              {/* Left Side - Text Content */}
              <div className="w-1/2 px-12 space-y-6 bg-white/5 backdrop-blur-sm h-96 flex flex-col justify-center rounded-lg ml-10 ">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  {card.title}
                </h2>

                <p className="text-lg text-gray-200 leading-relaxed">
                  {card.description}
                </p>

                <GradientGlowButton className="w-fit">
                  {card.buttonText}
                </GradientGlowButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demandservice;
