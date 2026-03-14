"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import GradientGlowButton from "./GradientGlowButton";
import GradientGlowButton from "@/app/components/GradientGlowButton";
interface SocialLink {
  icon: typeof faTwitter;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: faTwitter,    url: "#", label: "Twitter"  },
  { icon: faLinkedinIn, url: "#", label: "LinkedIn" },
  { icon: faTelegram,   url: "#", label: "Telegram" },
  { icon: faInstagram,  url: "#", label: "Instagram"},
];

export default function HeroSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const openChat    = () => console.log("open chat");

  return (
    <>
      {/* ── BUTTON ANIMATION STYLES ── */}
     
      {/* ══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
      ══════════════════════════════════════════ */}
      <section
        className="
          relative w-full lg:min-h-screen
          bg-[url('/assets/images/blockchain-dev-hero-bg.png')] bg-cover bg-center bg-no-repeat
          flex flex-col items-center justify-start
          overflow-hidden pt-14 px-5
          lg:hidden
        "
      >
        {/* teal radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(0,220,200,.13) 0%, transparent 70%)",
          }}
        />

        {/* content stack */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4 w-full max-w-md">

          {/* Heading */}
          <h1
            className="
              text-[#000000] font-manrope font-bold
              text-[29px] leading-[1.25] tracking-tight
              drop-shadow-[0_2px_24px_rgba(0,220,200,.35)]
              mt-2
            "
          >
            Blockchain Development Services
          </h1>

          {/* Paragraph */}
          <p
            className="
              text-[#000000] font-poppins font-semibold
              text-[14px] leading-relaxed
              max-w-sm
            "
          >
            Explore the blockchain universe with our world-class custom
            decentralised solutions and expert blockchain development
            services.
          </p>

          {/* Cube image */}
          <div className="relative w-90 h-90 my-2 select-none">
            <Image
              src="/assets/images/blockchain-dev-cube.png"
              alt="Blockchain Cube"
              fill
              className="object-contain drop-shadow-[0_0_48px_rgba(0,220,200,.55)]"
              priority
            />
          </div>

          {/* Buttons — stacked, centered */}
          <div className="flex flex-col items-center gap-3 w-full mt-1">
        <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%]  border-cyan-400/50 hover:bg-cyan-400/10">
         Consult With Experts
        </GradientGlowButton>
        <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%]  border-cyan-400/50 hover:bg-cyan-400/10">
         Explore Our Portfolio
        </GradientGlowButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg) — UNCHANGED
      ══════════════════════════════════════════ */}
      <section
        className="
          relative w-full min-h-screen
          bg-[url('/assets/images/blockchain-dev-hero-bg.png')] bg-cover bg-center bg-no-repeat
          flex-col items-center justify-center
          overflow-hidden
          hidden lg:flex
        "
      >
        {/* top radial teal glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 40%, rgba(0,220,200,.10) 0%, transparent 70%)",
          }}
        />

        {/* centre content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-10 gap-6 -mt-10 md:-mt-16 lg:mt-13 xl:mt-13">

          <h1 className="text-[#000000] font-manrope font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight tracking-tight drop-shadow-[0_2px_24px_rgba(0,220,200,.35)]">
            Blockchain Development Services
          </h1>

          <p className="text-[#000000] font-poppins text-sm sm:text-base  lg:max-w-2xl xl:max-w-4xl leading-relaxed lg:text-[16px] xl:text-[18px] font-semibold">
            Explore the blockchain universe with our world-class custom
            decentralised solutions and expert blockchain development services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-1">
        <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%]  border-cyan-400/50 hover:bg-cyan-400/10">
         Consult With Experts
        </GradientGlowButton>
        <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%]  border-cyan-400/50 hover:bg-cyan-400/10">
         Explore Our Portfolio
        </GradientGlowButton>
          </div>

          <div className="mt-6 md:mt-8 xl:mt-0 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 xl:w-140 xl:h-140 relative select-none">
            <Image
              src="/assets/images/blockchain-dev-cube.png"
              alt="Blockchain Cube"
              fill
              className="object-contain drop-shadow-[0_0_48px_rgba(0,220,200,.50)]"
              priority
            />
          </div>
        </div>

        {/* social icons sidebar */}
        <div className="fixed md:right-10 lg:right-5 xl:right-10 top-[50%] -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6 px-5 py-6 rounded-[42px] bg-gradient-to-b from-[#192c3d]/90 to-[#0E111D]/95 backdrop-blur-md border border-white/20">
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="w-5 h-5 flex items-center justify-center rounded-xl text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* arrow + bee chat */}
        <div className="fixed md:right-10 lg:right-5 xl:right-10 md:bottom-0 lg:bottom-10 xl:bottom-4 z-30 hidden lg:flex flex-col items-center gap-6">
          <button onClick={scrollToTop} className="w-11 h-11 flex items-center justify-center cursor-pointer" aria-label="Scroll to top">
            <img src="/assets/images/down-arrow.png" alt="down-arrow" />
          </button>
          <div className="w-16 h-16 bee-bounce rounded-full bg-[#1a2332]/60 backdrop-blur-sm border border-gray-700/30 shadow-2xl flex items-center justify-center overflow-hidden">
            <Image src="/assets/images/bee-hero-chaticon.png" alt="Live Chat" width={60} height={60} className="cursor-pointer hover:scale-110 transition-transform" onClick={openChat} />
          </div>
        </div>
      </section>
    </>
  );
}