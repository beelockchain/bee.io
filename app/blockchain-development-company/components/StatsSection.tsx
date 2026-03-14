"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ── Types ────────────────────────────────────────────────────────────────────
interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { value: 150, suffix: "+", label: "Trusted by global client" },
  { value: 350, suffix: "+", label: "Successful projects" },
  { value: 8,   suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "+", label: "AI-Powered Blockchain Apps" },
  { value: 98,  suffix: "%", label: "Client Retention Rate" },
];
const STAR_IMAGES = [
  "/assets/images/status-star.png",
  "/assets/images/status-star.png",
  "/assets/images/status-star.png",
  "/assets/images/status-star.png",
  "/assets/images/status-halfstar.png",
];
// ── Logo image paths — place your PNGs in /public/logos/ ────────────────────
// e.g. /public/logos/logo1.png, logo2.png ... logo7.png
// Replace the src values below with your actual filenames if different.
const LOGO_ITEMS = [
  { src: "/assets/images/status-logo-1.png", alt: "Logoipsum 1" },
  { src: "/assets/images/status-logo-2.png", alt: "Logoipsum 2" },
  { src: "/assets/images/status-logo-3.png", alt: "Logoipsum 3" },
  { src: "/assets/images/status-logo-4.png", alt: "Logoipsum 4" },
  { src: "/assets/images/status-logo-5.png", alt: "Logoipsum 5" },
  { src: "/assets/images/status-logo-6.png", alt: "Logoipsum 6" },
  { src: "/assets/images/status-logo-7.png", alt: "Logoipsum 7" },
];

// ── Hook: count-up animation ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// ── Sub-components ────────────────────────────────────────────────────────────

/**
 * Badge pill button — dark pill with white-smoke inner glow.
 * ✅ Place your uploaded image at /public/stars-nietzsche.png
 *    That single image contains the 5 green stars + Nietzsche logo together.
 */
/**
 * ✅ Place your PNGs in /public/:
 *    - /public/star.png      → single star icon (rendered 5 times in a row)
 *    - /public/nietzsche.png → Nietzsche logo image
 */
function StarRating() {
  return (
    <div className="flex justify-center mb-10 md:mb-14">
      <button
        className="flex items-center px-3 md:px-6 py-4 rounded-xl cursor-default"
        style={{
          background: "linear-gradient(135deg, #1c1c1c 0%, #111111 100%)",
          border: "1px solid #2e2e2e",
          boxShadow: `
  inset 0 0 20px rgba(0, 0, 0, 0.5),
  inset 6px -4px 10px #2F3F4B
-webkit-box-shadow: inset 0 0 10px #28333F;
  box-shadow:inset 0 0 10px #28333F;
`
        }}
      >
        <div className="flex items-center gap-3 md:gap-6">
          <span className="text-white text-[14px] md:text-[17px] lg:text-md xl:text-xl font-medium whitespace-nowrap">
            Excellent
          </span>

          <div className="flex items-center gap-2">
            {STAR_IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`star-${i + 1}`}
                className="h-4 w-4 md:h-6 md:w-6 object-contain"
              />
            ))}
          </div>

          <img
            src="/assets/images/status-nietzsche.png"
            alt="Nietzsche"
            className="h-5 w-auto object-contain opacity-90"
          />
        </div>
      </button>
    </div>
  );
}

function StatCard({ stat, animate }: { stat: StatItem; animate: boolean }) {
  const count = useCountUp(stat.value, 2000, animate);
  return (
    <div className="flex flex-col items-center text-center px-4 py-2 flex-1 min-w-32.5">
      <span className="text-[#F6DA00] font-semibold font-monrope text-2xl md:text-[30px] lg:text-[40px] xl:text-[50px] leading-none tracking-tight">
        {count}
        {stat.suffix}
      </span>
      <span className="text-gray-400 text-[13px] md:text-[13px] xl:text-xs xl:text-xs md:text-sm mt-2 leading-snug max-w-30">
        {stat.label}
      </span>
    </div>
  );
}

function LogoItem({ item }: { item: typeof LOGO_ITEMS[number] }) {
  return (
    <div className="flex items-center shrink-0 px-10">
      <Image
        src={item.src}
        alt={item.alt}
        width={120}
        height={32}
        className="h-7 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-300"
      />
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const logoTrack = [...LOGO_ITEMS, ...LOGO_ITEMS];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#010310] py-14 md:py-20 xl:py-0 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Trustpilot badge image ── */}
        <StarRating />

        {/* ── Stats — Desktop ── */}
        <div className="hidden md:flex justify-center items-start font-monrope gap-0 divide-x divide-[#2a2a2a] mb-10">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>

        {/* ── Stats — Mobile ── */}
        <div className="md:hidden relative grid grid-cols-2 gap-y-10 gap-x-0 mb-10">

        {/* Vertical Line (center) */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 h-[80px] w-[0.5] bg-[#393736]" />

        {/* Horizontal Line (between rows) */}
        <div className="absolute  top-1/3 left-1/2 -translate-x-1/2 w-[90px] h-[0.5] bg-[#393736]" />
 {/* Vertical Line (center) */}
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 h-[80px] w-px bg-[#393736]" />
        {STATS.slice(0, 4).map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
        ))}

        {/* Bottom Center Stat */}
        <div className="col-span-2 flex justify-center relative pt-6">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-px bg-[#393736]" />
            
            <StatCard stat={STATS[4]} animate={animate} />
        </div>

        </div>

        {/* ── Description ── */}
        <p className="text-center text-white font-monrope text-[13px] md:text-[14px] lg:text-base max-w-3xl  md:max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16 px-3 md:px-2">
          Trusted worldwide, we help global brands and startups achieve innovation and success with dependable solutions,
          deep expertise, and an unwavering commitment to excellence.
        </p>
      </div>

      {/* ── Marquee logos — no top/bottom border ── */}
      <div className="relative w-full py-4 overflow-hidden">
        {/* Fade masks matching bg */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#010310] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#010310] to-transparent" />

        <div className="flex w-max animate-marquee">
          {logoTrack.map((item, i) => (
            <LogoItem key={i} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}