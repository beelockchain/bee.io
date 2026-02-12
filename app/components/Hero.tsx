"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import GradientGlowButton from "./GradientGlowButton";
import Image from "next/image";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: faFacebook, url: "https://www.facebook.com/61585163291942", label: "Facebook" },
    { icon: faXTwitter, url: "https://x.com/Beelockchain_io", label: "X" },
    { icon: faLinkedin, url: "https://www.linkedin.com/company/beelockchain-io", label: "LinkedIn" },
    { icon: faInstagram, url: "https://www.instagram.com/beelockchain_io", label: "Instagram" },
    { icon: faPinterest, url: "https://in.pinterest.com/beelockchain_io", label: "Pinterest" },
  ];
const openChat = () => {
  if (typeof window !== "undefined") {
    const tawk = (window as any).Tawk_API;
    if (tawk && typeof tawk.maximize === "function") {
      tawk.maximize();
    }
  }
};

  return (
    <section className="">
          <div
          className="
            w-full h-[100dvh] md:h-dvh lg:h-dvh xl:h-dvh
            flex flex-col items-center
            bg-cover md:bg-center lg:bg-center xl:bg-center bg-no-repeat relative overflow-hidden
            xl:pt-0 lg:pt-0 md:pt-0
            bg-[url('/assets/images/hero-newbanner-mobile.png')]
            sm:bg-[url('/assets/images/hero-newbanner-mobile.png')]
            md:bg-[url('/assets/images/hero-new-banner.png')]
            lg:bg-[url('/assets/images/hero-new-banner.png')]
          "
        >

     

      {/* Social Icons (normal scroll) */}
      <div className="fixed md:right-10 lg:right-5 xl:right-10 top-[50%] -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-6">
        <div
          className="
            flex flex-col items-center gap-6
            px-5 py-6
            rounded-[42px]
            bg-linear-to-b from-[#192c3d]/90 to-[#0E111D]/95
            backdrop-blur-md
            border-1 border-white/20
          "
        >

          <div className="flex flex-col gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-5 h-5 flex items-center justify-center rounded-xl text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={social.icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow + Circle (same place till scroll end) */}
      <div className="fixed md:right-10 lg:right-5 xl:right-10 md:bottom-0 lg:bottom-10 xl:bottom-4 z-30 hidden lg:flex flex-col items-center gap-6 ">

        <button
          onClick={scrollToTop}
          className="w-11 h-11 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
         <img src="/assets/images/down-arrow.png" alt="down-arrow"/>
        </button>

        
        <div className="w-16 h-16 bee-bounce rounded-full bg-[#1a2332]/60 backdrop-blur-sm border border-gray-700/30 shadow-2xl flex items-center justify-center overflow-hidden">
        
          <Image
        src="/assets/images/bee-hero-chaticon.png"
        alt="Live Chat"
        width={60}
        height={60}
        className="cursor-pointer hover:scale-110 transition-transform"
        onClick={openChat}
      />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 flex flex-col justify-center items-center px-4 mt-[65%] sm:mt-[75%] md:mt-[20%] lg:mt-[16%] xl:mt-[11%]  sm:px-6 md:px-10">


      <h1 className="
        text-white font-manrope font-bold text-center
        px-1 max-w-xl md:max-w-xl lg:max-w-3xl xl:max-w-3xl
        text-[27px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-[45px]
        
        leading-[1.15] md:leading-tight lg:leading-tight
        
        md:mb-2 lg:mb-2 xl:mb-2
        xl:mt-5
        tracking-tighter mb-2
      ">
        World's First AI-Centered Blockchain Development Company
      </h1>


        <p className="text-white/90 font-poppins  lg:font xl:font-semibold text-center mb-5 max-w-xl md:max-w-xl lg:max-w-2xl xl:max-w-4xl text-[12px] sm:text-base md:text-[12px] lg:text-[12px] xl:text-[15px]  px-4">
          Beelockchain builds next-gen blockchain ecosystems by fusing artificial intelligence with Web3 innovation, delivering custom blockchain development solutions optimized for real-world use.
        </p>

        <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%]  border-cyan-400/50 hover:bg-cyan-400/10">
          Build Your Project
        </GradientGlowButton>
      </div>
    </div>
    </section>
  );
};

export default Hero;
