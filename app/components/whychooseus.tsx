"use client";

import Image from "next/image";
import React from "react";
import GradientGlowButton from "./GradientGlowButton";
import NavLabel from "./NavLable";
import { useState } from "react";
import ComparisonModal from "./ComparisonModal";

const Whychooseus = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="w-full bg-[#00020F] py-10 md:py-10 flex justify-center text-white">

      {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
      <div className="relative w-full max-w-[1200px] xl:px-6 lg:px-6 md:px-1 hidden sm:block">
        <div className="mb-16 flex justify-center">
          <NavLabel label="Why Choose Us" />
        </div>

        <div className="grid grid-cols-12 gap-6 items-stretch">

          {/* LEFT STACK */}
          <div className="col-span-3 flex flex-col gap-6 h-full translate-x-4">

            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 flex items-center justify-center">
              <p className="text-[#43C0A3] text-center xl:text-2xl lg:text-2xl md:text-sm font-bold">
                Pioneer blockchain Engineering
              </p>
            </div>

            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 flex flex-col items-center justify-center gap-3">
              <h2 className="xl:text-6xl lg:text-3xl md:text-3xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]">EVO AI</h2>
              <img src="/assets/images/core-approch-icon.png" alt="icon" className="sm:w-[100px]" />
            </div>

            <div className="flex-[2] rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-6 flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                <Image src="/assets/images/floting-text.png" alt="Idea Light" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* CENTER HUB */}
          <div className="col-span-6 flex justify-center">
            <div className="relative md:w-[350px] xl:w-[520px] lg:w-[460px] aspect-square">
              <Image src="/assets/images/whychoose-center-img.png" alt="AI Core" fill priority className="object-contain" />
              <div className="absolute inset-0 top-28 md:top-24 lg:top-35 flex items-center justify-center z-10">
                <GradientGlowButton className="md:text-[10px] md:px-0" onClick={() => setIsOpen(true)}>
                  Explore
                </GradientGlowButton>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="col-span-3 flex flex-col gap-6 h-full -translate-x-4">

            <div className="flex-[2] rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] sm:p-4 xl:p-8 md:p-4 flex flex-col justify-between">
              <Image src="/assets/images/small-logo.svg" alt="Design Icon" width={64} height={64} className="w-16 h-16 mb-4" />
              <h3 className="sm:text-sm xl:text-3xl lg:text-3xl md:text-lg font-semibold leading-tight">Design & UI/UX</h3>
              <div className="mt-8">
                <p className="xl:text-emerald-50 sm:text-[12px]  lg:text-emerald-50 md:text-[10px] text-[22px] lg:text-[14px] font-bold">Development Speed</p>
                <p className="text-cyan-400 xl:text-xl lg:text-xl md:text-[10px]">3× faster with AI-assisted coding</p>
              </div>
            </div>

            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] sm:p-4 xl:p-8 lg:p-8 md:p-4 flex flex-col items-center justify-center gap-2">
              <h4 className="text-[#66BAFF] text-center xl:text-3xl lg:text-3xl md:text-xl">Execution Consistency</h4>
              <p className="text-cyan-200 xl:text-xl lg:text-xl md:text-md">Time-to-Market</p>
              <img src="/assets/images/small-avatar-icon.png" alt="avatar" className="w-30 rounded-full" />
            </div>

            <div className="flex-1 text-black rounded-[32px] font-bold border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] sm:p-4 xl:p-8 lg:p-8 md:p-4 flex items-center justify-center">
              <button className=" sm:text-[10px] xl:text-2xl lg:text-2xl md:text-[10px] font-medium px-4 py-2 bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0] rounded-full">
                Long-Term <br /> Partnership
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
      <div className="block sm:hidden w-full px-4">

        <div className="mb-10 flex justify-center">
          <NavLabel label="Why Choose Us" />
        </div>

        <div className="flex flex-col gap-3">

          {/* ROW 1 ── Pioneer (left)  +  EVO AI (right) */}
          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-2xl border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-4 flex items-center justify-center min-h-[110px]">
              <p className="text-[#43C0A3] text-center text-md font-bold leading-snug">
                Pioneer Blockchain Engineering
              </p>
            </div>

            <div className="rounded-2xl border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-4 flex flex-col items-center justify-center gap-2 min-h-[110px]">
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text
                bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]">
                EVO AI
              </h2>
              <img
                src="/assets/images/core-approch-icon.png"
                alt="icon"
                className="w-[100px] object-contain"
              />
            </div>
          </div>
          {/* ROW 2 ── Floating Text — full width */}
          <div className="rounded-2xl border border-white/10
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
            p-4 flex items-center justify-center min-h-[110px]">
            <div className="relative w-full h-[200px]">
              <Image
                src="/assets/images/floting-text.png"
                alt="Floating Text"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ROW 3 ── Center Hub Image — full width, tall */}
          <div className="relative w-full h-[550px]">
            <Image
              src="/assets/images/whychoose-center-imgmobile.png"
              alt="AI Core Mobile"
              fill
              priority
              className="object-contain"
            />
            <div className="absolute inset-0 mt-24 flex items-center justify-center z-10">
              <GradientGlowButton onClick={() => setIsOpen(true)}>
                Explore
              </GradientGlowButton>
            </div>
          </div>

       
          {/* ROW 4 ── Design & UI/UX — full width */}
          <div className="rounded-2xl border border-white/10 text-center  items-center
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
            p-5 flex flex-col gap-3">
            <div className="flex items-center text-center gap-3">
              <Image
                src="/assets/images/small-logo.svg"
                alt="Design Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-xl font-semibold ">Design & UI/UX</h3>
            </div>
            <div>
              <p className="text-sm font-bold  text-emerald-50">Development Speed</p>
              <p className="text-sm  text-cyan-400 mt-1">3× faster with AI-assisted coding</p>
            </div>
          </div>

          {/* ROW 5 ── Execution Consistency — full width */}
          <div className="rounded-2xl border border-white/10 text-center items-center
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
            p-5 flex flex-col gap-2">
            <h4 className="text-base text-[#66BAFF] font-semibold">
              Execution Consistency
            </h4>
            <p className="text-sm text-cyan-200">Time-to-Market</p>
            <img
              src="/assets/images/small-avatar-icon.png"
              alt="avatar"
              className="w-20 rounded-full mt-1"
            />
          </div>

          {/* ROW 6 ── Long-Term Partnership — full width */}
          <div className="rounded-2xl border border-white/10
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
             flex items-center justify-center min-h-[80px]">
          <button className="w-[200px] py-3 rounded-full font-semibold text-black text-base
            bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0] mx-auto">
           Long-Term Partnership
          </button>
          </div>

        </div>
      </div>

      {isOpen && <ComparisonModal isOpen={isOpen} setIsOpen={setIsOpen} />}

    </section>
  );
};

export default Whychooseus;