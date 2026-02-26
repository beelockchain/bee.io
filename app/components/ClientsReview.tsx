"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavLabel from "./NavLable";

/* ================= DATA ================= */
const testimonials = [
  {
    name: "John Martin",
    role: "Chief Technology Officer",
    content:
      "Beelockchain guided us with EVO AI from idea to development of our blockchain network. Their team delivered secure, scalable, and industry-specific solutions while providing expert guidance at every stage. We couldn't have asked for a better blockchain development partner.",
    avatar: "/assets/images/testi-img.png",
  },
  {
    name: "Sophia Williams",
    role: "Product Head",
    content:
      "Beelockchain guided us with EVO AI from idea to development of our blockchain network. Their team delivered secure, scalable, and industry-specific solutions while providing expert guidance at every stage. We couldn't have asked for a better blockchain development partner.",
    avatar: "/assets/images/testi-img.png",
  },
  {
    name: "David Chen",
    role: "Founder & CEO",
    content:
      "Beelockchain guided us with EVO AI from idea to development of our blockchain network. Their team delivered secure, scalable, and industry-specific solutions while providing expert guidance at every stage. We couldn't have asked for a better blockchain development partner.",
    avatar: "/assets/images/testi-img.png",
  },
  {
    name: "Emma Rodriguez",
    role: "VP of Engineering",
    content:
      "Beelockchain guided us with EVO AI from idea to development of our blockchain network. Their team delivered secure, scalable, and industry-specific solutions while providing expert guidance at every stage. We couldn't have asked for a better blockchain development partner.",
    avatar: "/assets/images/testi-img.png",
  },
  {
    name: "Michael Zhang",
    role: "Innovation Director",
    content:
      "Beelockchain guided us with EVO AI from idea to development of our blockchain network. Their team delivered secure, scalable, and industry-specific solutions while providing expert guidance at every stage. We couldn't have asked for a better blockchain development partner.",
    avatar: "/assets/images/testi-img.png",
  },
];

/* ================= MOBILE CARD ================= */
const MobileTestimonialCard = ({
  name,
  role,
  content,
  avatar,
  active,
}: {
  name: string;
  role: string;
  content: string;
  avatar: string;
  active?: boolean;
}) => {
  return (
    <div className="w-full shrink-0 flex justify-center px-4">
      <div
        className={`
          w-full max-w-[380px] sm:max-w-[420px]
          bg-black rounded-xl sm:rounded-2xl
          px-4 sm:px-6 py-4 sm:py-5
          border transition-all duration-300
          ${active ? "border-cyan-400" : "border-cyan-400/50"}
          flex items-center gap-3 sm:gap-4
        `}
      >
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Quote */}
          <p className="text-white text-[11px] sm:text-[12px] leading-[1.5] mb-3">
            "{content}"
          </p>

          {/* Name + Role */}
          <div className="mt-2">
            <div className="text-[12px] sm:text-[13px] font-semibold text-white truncate">
              {name}
            </div>
            <div className="text-cyan-400 text-[10px] sm:text-[11px] leading-tight truncate">
              {role}
            </div>
          </div>
        </div>

        {/* Avatar */}
        <Image
          src={avatar}
          alt={name}
          width={60}
          height={60}
          className="rounded-full shrink-0 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] border border-cyan-400/40"
        />
      </div>
    </div>
  );
};

/* ================= QUOTE ICON ================= */
const QuoteIcon = ({ active }: { active?: boolean }) => {
  return active ? (
    <svg
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[69px] lg:h-[69px]"
    >
      <rect width="68.9626" height="68.9626" rx="34.4813" fill="#222222" />
      <g clipPath="url(#clip0_active)">
        <path
          d="M45.7897 22.7188C47.8127 22.7188 49.2982 23.2245 50.2464 24.2359C51.1315 25.3106 51.574 26.6697 51.574 28.3133V29.6409C51.574 32.2327 50.8154 35.0774 49.2982 38.175C47.781 41.3358 45.6633 44.0857 42.945 46.4246H36.5919C38.4883 44.4017 40.0371 42.4737 41.2382 40.6404C42.3761 38.8704 43.1979 36.8791 43.7036 34.6665C42.4393 34.3504 41.5227 33.7499 40.9537 32.8649C40.3216 31.9798 40.0055 30.9052 40.0055 29.6409V28.3133C40.0055 26.6697 40.4796 25.3106 41.4279 24.2359C42.3129 23.2245 43.7668 22.7188 45.7897 22.7188ZM26.6354 22.7188C28.6583 22.7188 30.1439 23.2245 31.0921 24.2359C31.9771 25.3106 32.4196 26.6697 32.4196 28.3133V29.6409C32.4196 32.2327 31.661 35.0774 30.1439 38.175C28.6267 41.3358 26.5089 44.0857 23.7907 46.4246H17.4375C19.334 44.4017 20.8828 42.4737 22.0839 40.6404C23.2217 38.8704 24.0435 36.8791 24.5493 34.6665C23.285 34.3504 22.3683 33.7499 21.7994 32.8649C21.1672 31.9798 20.8512 30.9052 20.8512 29.6409V28.3133C20.8512 26.6697 21.3253 25.3106 22.2735 24.2359C23.1585 23.2245 24.6125 22.7188 26.6354 22.7188Z"
          fill="url(#paint0_linear_active)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_active"
          x1="34.5057"
          y1="22.7188"
          x2="34.5057"
          y2="46.4246"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3ADCFF" />
          <stop offset="1" stopColor="#1BFFE1" />
        </linearGradient>
        <clipPath id="clip0_active">
          <rect
            width="35.3433"
            height="24.9989"
            fill="white"
            transform="translate(16.8125 21.9824)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[69px] lg:h-[69px]"
    >
      <rect width="68.9626" height="68.9626" rx="34.4813" fill="#222222" />
      <g clipPath="url(#clip0_inactive)">
        <path
          d="M45.7897 22.7188C47.8127 22.7188 49.2982 23.2245 50.2464 24.2359C51.1315 25.3106 51.574 26.6697 51.574 28.3133V29.6409C51.574 32.2327 50.8154 35.0774 49.2982 38.175C47.781 41.3358 45.6633 44.0857 42.945 46.4246H36.5919C38.4883 44.4017 40.0371 42.4737 41.2382 40.6404C42.3761 38.8704 43.1979 36.8791 43.7036 34.6665C42.4393 34.3504 41.5227 33.7499 40.9537 32.8649C40.3216 31.9798 40.0055 30.9052 40.0055 29.6409V28.3133C40.0055 26.6697 40.4796 25.3106 41.4279 24.2359C42.3129 23.2245 43.7668 22.7188 45.7897 22.7188ZM26.6354 22.7188C28.6583 22.7188 30.1439 23.2245 31.0921 24.2359C31.9771 25.3106 32.4196 26.6697 32.4196 28.3133V29.6409C32.4196 32.2327 31.661 35.0774 30.1439 38.175C28.6267 41.3358 26.5089 44.0857 23.7907 46.4246H17.4375C19.334 44.4017 20.8828 42.4737 22.0839 40.6404C23.2217 38.8704 24.0435 36.8791 24.5493 34.6665C23.285 34.3504 22.3683 33.7499 21.7994 32.8649C21.1672 31.9798 20.8512 30.9052 20.8512 29.6409V28.3133C20.8512 26.6697 21.3253 25.3106 22.2735 24.2359C23.1585 23.2245 24.6125 22.7188 26.6354 22.7188Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_inactive">
          <rect
            width="35.3433"
            height="24.9989"
            fill="white"
            transform="translate(16.8125 21.9824)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

/* ================= DESKTOP/TABLET CARD ================= */
const TestimonialCard = ({
  active,
  position,
  name,
  role,
  content,
  avatar,
}: {
  active?: boolean;
  position?: "left" | "center" | "right";
  name: string;
  role: string;
  content: string;
  avatar: string;
}) => {
  return (
    <div
      className={`
        w-[90vw] md:w-[550px] lg:w-[706px]
        h-auto md:h-[270px] lg:h-[280px]
        shrink-0
        flex items-center justify-center
        transition-all duration-700

        ${
          position === "center"
            ? "opacity-100 scale-100 z-20"
            : "opacity-40 scale-95 z-10"
        }

        ${
          position === "left"
            ? "md:-translate-x-4 lg:-translate-x-6"
            : position === "right"
            ? "md:translate-x-4 lg:translate-x-6"
            : "translate-x-0"
        }
      `}
    >
      <div
        className={`
          relative w-full h-full rounded-2xl md:rounded-3xl bg-black
          p-5 md:p-6 lg:p-8
          transition-all duration-700 overflow-visible
          ${
            active
              ? "outline outline-[1.2px] outline-cyan-400"
              : "outline outline-[0.8px] outline-white/20"
          }
        `}
      >
        {/* Quote Icon */}
        <div className="absolute -top-6 md:-top-8 lg:-top-10 left-6 md:left-8 lg:left-11 z-30 rounded-full flex items-center justify-center bg-neutral-800">
          <QuoteIcon active={active} />
        </div>

        {/* Content */}
        <p className="max-w-[90%] md:max-w-[340px] lg:max-w-[470px] text-white text-[12px] md:text-[13px] lg:text-[14px] leading-[1.6] md:leading-6 mt-6 md:mt-4">
          "{content}"
        </p>

        {/* Name & Role */}
        <div className="mt-4 md:mt-6">
          <div className="text-base md:text-lg font-semibold text-white">{name}</div>
          <div className="text-cyan-400 text-sm md:text-base">{role}</div>
        </div>

        {/* Avatar */}
        <div
          className={`
            absolute
            right-6 bottom-6
            md:right-6 md:top-16
            lg:right-10 lg:top-10
            transition-all duration-700
            ${active ? "scale-100 opacity-100" : "scale-90 opacity-60"}
          `}
        >
          <Image
            src={avatar}
            alt={name}
            width={160}
            height={160}
            className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] border border-cyan-400/60"
          />
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const ClientsReview = () => {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(706);
  const [cardGap, setCardGap] = useState(40);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Create extended array for infinite loop
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Check if component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update card width and gap on resize
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 768) {
        setCardWidth(0);
        setCardGap(0);
      } else if (window.innerWidth < 1024) {
        setCardWidth(550);
        setCardGap(32);
      } else {
        setCardWidth(706);
        setCardGap(40);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Start at the middle set
  useEffect(() => {
    setIndex(testimonials.length);
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (index >= testimonials.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(testimonials.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
    } else if (index < testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(testimonials.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
    }
  }, [index]);

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  // Calculate actual index for mobile
  const actualMobileIndex = index % testimonials.length;

  return (
    <div className="bg-[#191B26]">
      <section className="relative w-full max-w-[1920px] mx-auto h-[530px] sm:h-[620px] md:h-[700px] lg:h-[700px] bg-[#191B26] overflow-hidden">
        {/* Label */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[60px] sm:top-[80px] md:top-[102px]">
          <NavLabel label="Clients Review" />
        </div>

        {/* Heading */}
        <h2
          className="
            absolute left-1/2 -translate-x-1/2
            text-center text-white font-semibold font-manrope px-4
            top-[110px] text-[14px] 
            sm:top-[130px] sm:text-[24px]
            md:top-[158px] md:text-[28px]
            lg:text-[48px] text-nowrap
          "
        >
          What Our Clients Say About Beelockchain
        </h2>

        {/* ================= MOBILE CAROUSEL ================= */}
        <div className="md:hidden absolute top-[200px] sm:top-[220px] w-full">
          <div className="relative overflow-hidden">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{
                transform: `translateX(-${actualMobileIndex * 100}%)`,
              }}
            >
              {testimonials.map((item, i) => (
                <MobileTestimonialCard key={i} {...item} active={i === actualMobileIndex} />
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-end gap-4 sm:gap-6 mt-6 sm:mt-8 px-4">
            <button
              onClick={prev}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-cyan-400 flex items-center justify-center hover:bg-cyan-300 transition-colors active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  d="M3.77344 8.61974L11.3162 1.07696L12.3938 2.1545L5.92852 8.61974L12.3938 15.085L11.3162 16.1625L3.77344 8.61974Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-cyan-400 flex items-center justify-center hover:bg-cyan-300 transition-colors active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  d="M13.4719 8.61974L5.9291 1.07696L4.85156 2.1545L11.3168 8.61974L4.85156 15.085L5.9291 16.1625L13.4719 8.61974Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ================= TABLET/DESKTOP CAROUSEL ================= */}
        {isMounted && (
          <div
            className="
              absolute
              left-1/2 -translate-x-1/2
              w-full pointer-events-none
              hidden md:block
              top-[260px]
              md:top-[300px]
              lg:top-[350px]
            "
          >
            <div
              className={`relative flex gap-6 md:gap-8 lg:gap-10 ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{
                transform: `translateX(calc(50% - ${index * (cardWidth + cardGap)}px - ${cardWidth / 2}px))`,
              }}
            >
              {extendedTestimonials.map((item, i) => {
                const position = i === index ? "center" : i < index ? "left" : "right";
                
                return (
                  <TestimonialCard
                    key={i}
                    active={i === index}
                    position={position}
                    {...item}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Desktop/Tablet Navigation Buttons */}
        <div className="hidden md:block">
          <button
            onClick={prev}
            className="
              absolute
              left-[20px] md:left-[40px] lg:left-[120px] xl:left-[181px]
              top-[440px] md:top-[460px] lg:top-[480px]
              w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
              rounded-full bg-cyan-400
              flex items-center justify-center
              hover:bg-cyan-300 hover:scale-105
              transition-all active:scale-95 cursor-pointer
            "
            aria-label="Previous testimonial"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                d="M3.77344 8.61974L11.3162 1.07696L12.3938 2.1545L5.92852 8.61974L12.3938 15.085L11.3162 16.1625L3.77344 8.61974Z"
                fill="black"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="
              absolute
              right-[20px] md:right-[40px] lg:right-[120px] xl:right-[181px]
              top-[440px] md:top-[460px] lg:top-[480px]
              w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
              rounded-full bg-cyan-400
              flex items-center justify-center
              hover:bg-cyan-300 hover:scale-105
              transition-all active:scale-95 cursor-pointer
            "
            aria-label="Next testimonial"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                d="M13.4719 8.61974L5.9291 1.07696L4.85156 2.1545L11.3168 8.61974L4.85156 15.085L5.9291 16.1625L13.4719 8.61974Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        {/* Edge Fade Gradient */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute left-0 top-0 h-full w-32 md:w-40 lg:w-48 bg-gradient-to-r from-[#191B26] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-32 md:w-40 lg:w-48 bg-gradient-to-l from-[#191B26] to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default ClientsReview;