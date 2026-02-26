"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

/* ================= DATA ================= */
const CARD_DATA = [
  {
    title: "Blockchain Development",
    subcontent:
      "Develop strong blockchain solutions that prioritize data security, transparency, & trust in digital transactions",
    links: [
      { label: "Custom Blockchain Development", href: "#" },
      { label: "Smart Contract Development", href: "#" },
      { label: "Dapp Development", href: "#" },
      { label: "Layer 1 Blockchain Development", href: "#" },
      { label: "Layer 2 Blockchain Development", href: "#" },
      { label: "NFT Marketplace Development", href: "#" },
      { label: "Hyperledger Blockchain Development", href: "#" },
    ],
  },
   { title: "Crypto Development", subcontent: "Create custom cryptocurrencies that are optimized for your business model, with a strong focus on secure transactions and an intuitive user interface.", 
    links: [
      { label: "Crypto Exchange Development", href: "#" },
      { label: "Crypto Wallet Development", href: "#" },
      { label: "Token & Coin Creation", href: "#" },
      { label: "ICO Development", href: "#" },
      { label: "IDO Development", href: "#" },
      { label: "Crypto Trading Bot Development", href: "#" },
    ],
  },
   { title: "Game Development", subcontent: "Design captivating games featuring immersive storylines and advanced graphics to deliver memorable player experiences.", 
    links: [
      { label: "Play-to-Earn Game Development", href: "#" },
      { label: "Move-to-Earn Game Development", href: "#" },
      { label: "2D & 3D Game Development", href: "#" },
      { label: "NFT Game Development", href: "#" },
      { label: "Casino Game Development", href: "#" },
      { label: "Unreal Engine Game Development", href: "#" },
      { label: "iGaming Software Development", href: "#" },
      { label: "Poker Game Development", href: "#" },
    ],
  },
  { title: "Game Art ", subcontent: "Create captivating game assets and artwork that enhance gameplay, storytelling, and player immersion.", 
    links: [
      { label: "3D Art", href: "#" },
      { label: "2D Art", href: "#" },
      { label: "Character Design", href: "#" },
      { label: "Game Animation", href: "#" },
      { label: "UI & UX Service", href: "#" },
    ] },
      { title: "Prediction Market", subcontent: "Build reliable and robust prediction market platforms with real-time data processing and forecasting capabilities.", 
        links: [
      { label: "Prediction Market Software", href: "#" },
    ] },


];
/* ================= CONFIG ================= */
const ACTIVE_WIDTH = 520;
const EASE = "power2.out";

/* ================= COMPONENT ================= */
export default function CoreSolutionsWeBuild() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const elementsRef = useRef<any[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const isAnimating = useRef(false);
const getActiveWidth = () => {
  if (typeof window === "undefined") return 520;

  const width = window.innerWidth;

  if (width < 768) return "100%";   // mobile
  if (width < 1024) return 400;     // tablet
  return 520;                       // desktop
};
  /* ---------- INIT ---------- */
  useEffect(() => {
    elementsRef.current = cardRefs.current.map((card) => {
      if (!card) return null;

      return {
        card,
        collapsedTitle: card.querySelector(".collapsed-title"),
        activeContent: card.querySelector(".active-content"),
        arrowCollapsed: card.querySelector(".arrow-collapsed"),
        arrowActive: card.querySelector(".arrow-active"),
      };
    });

    elementsRef.current.forEach((el) => {
      if (!el) return;

      gsap.set(el.card, { flexGrow: 1, flexBasis: 0 });
      gsap.set(el.collapsedTitle, { rotate: -90, opacity: 1 });
      gsap.set(el.activeContent, { opacity: 0, y: 20 });

      gsap.set(el.arrowCollapsed, { opacity: 1 });
      gsap.set(el.arrowActive, { opacity: 0 });
    });
  }, []);

  /* ---------- ACTIVATE ---------- */
  const activateCard = (index: number) => {
    if (active === index || isAnimating.current) return;

    isAnimating.current = true;
    setActive(index);

    elementsRef.current.forEach((el, i) => {
      if (!el) return;

      const { card, collapsedTitle, activeContent, arrowCollapsed, arrowActive } = el;

      gsap.killTweensOf([card, collapsedTitle, activeContent, arrowCollapsed, arrowActive]);

      if (i !== index) {
        gsap.to(card, { flexGrow: 1, flexBasis: 0, duration: 0.25 });

        gsap.to(collapsedTitle, { opacity: 1, rotate: -90, duration: 0.2 });
        gsap.to(activeContent, { opacity: 0, y: 20, duration: 0.2 });

        gsap.to(arrowCollapsed, { opacity: 1, duration: 0.2 });
        gsap.to(arrowActive, { opacity: 0, duration: 0.15 });
        return;
      }

      /* ACTIVE */
    gsap.to(card, {
      flexGrow: 0,
  flexBasis: getActiveWidth(),
      duration: 0.3,
      ease: EASE,
    });
      gsap.to(collapsedTitle, { opacity: 0, duration: 0.15 });

      gsap.to(activeContent, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        delay: 0.1,
      });

      gsap.to(arrowCollapsed, { opacity: 0, duration: 0.15 });

      gsap.to(arrowActive, {
        opacity: 1,
        duration: 0.25,
        delay: 0.1,
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    });
  };
useEffect(() => {
  const handleResize = () => {
    if (active !== null) {
      activateCard(active);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [active]);
  /* ---------- RESET ---------- */
  const resetAll = () => {
    if (isAnimating.current) return;

    setActive(null);

    elementsRef.current.forEach((el) => {
      if (!el) return;

      const { card, collapsedTitle, activeContent, arrowCollapsed, arrowActive } = el;

      gsap.killTweensOf([card, collapsedTitle, activeContent, arrowCollapsed, arrowActive]);

      gsap.to(card, { flexGrow: 1, flexBasis: 0, duration: 0.25 });

      gsap.to(collapsedTitle, { opacity: 1, rotate: -90, duration: 0.2 });
      gsap.to(activeContent, { opacity: 0, y: 20, duration: 0.2 });

      gsap.to(arrowCollapsed, { opacity: 1 });
      gsap.to(arrowActive, { opacity: 0 });
    });
  };

  return (
    <section className="w-full bg-[#05060f] py-6">
     <h2 className="text-center text-transparent bg-clip-text bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_54%,#FFFFFF_60%)]
      text-[24px] sm:text-[20px] md:text-[22px] lg:text-[34px] xl:text-[36px] font-semibold mb-5 lg:mb-10">
        Core Solutions We Build
      </h2>

      {/* DESKTOP */}
      <div className="hidden md:flex md:h-[500px] lg:h-[600px]" onMouseLeave={resetAll}>
        {CARD_DATA.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            onMouseEnter={() => activateCard(i)}
            className={`relative flex-grow basis-0 cursor-pointer overflow-hidden  ${
              i !== CARD_DATA.length - 1 ? "border-r border-white/20" : ""
            }`}
          >
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-b  from-[#393939] via-[#0f244f] to-[#393939]" />

            {/* COLLAPSED TITLE */}
            <h3 className="collapsed-title absolute inset-0 flex items-center justify-center text-white text-xl whitespace-nowrap">
              {card.title}
            </h3>

            {/* ACTIVE CONTENT */}
            <div className="active-content relative z-10 h-full p-8 text-white ">
              
              {/* TITLE + ARROW CLOSE */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-semibold">{card.title}</h3>

                <div className="arrow-active">
                  <Image
                    src="/assets/images/active-arrow.png"
                    alt="arrow"
                    width={22}
                    height={22}
                  />
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-5">
                {card.subcontent}
              </p>

              <div className="space-y-2">
                {card.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="block text-[#1BFFE1] hover:translate-x-1 transition"
                  >
                    • {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* COLLAPSED ARROW */}
            <div className="arrow-collapsed absolute bottom-5 left-1/2 -translate-x-1/2">
              <Image
                src="/assets/images/initial-arrow.png"
                alt="arrow"
                width={32}
                height={32}
              />
            </div>
          </div>
        ))}
      </div>


{/* MOBILE VIEW */}
      <div className="md:hidden divide-y divide-white/10">
  {CARD_DATA.map((card, i) => {
    const isOpen = active === i;

    return (
      <div
        key={i}
        className="bg-gradient-to-r from-[#2c2c2c] via-[#0f244f] to-[#2c2c2c]"
      >
        {/* HEADER */}
        <button
          onClick={() => setActive(isOpen ? null : i)}
          className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left"
        >
          {/* LEFT CONTENT */}
          <div className="flex items-center gap-3">
            <Image
              src={
                isOpen
                  ? "/assets/images/active-arrow.png"
                  : "/assets/images/initial-arrow.png"
              }
              alt="Arrow"
              width={16}
              height={16}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            />

            <span className="text-white text-[18px] sm:text-base font-medium leading-tight">
              {card.title}
            </span>
          </div>
        </button>

        {/* CONTENT WRAPPER */}
        <div
          className={`transition-all duration-300 ease-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-5">
            {/* SUBCONTENT (only when open) */}
            <p className="text-[15px] sm:text-sm text-gray-300 mb-3 leading-relaxed">
              {card.subcontent}
            </p>

            {/* LINKS */}
            <div className="flex flex-col gap-2">
              {card.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-[#1BFFE1] text-[15px] hover:translate-x-1 transition"
                >
                  • {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
    </section>
  );
}