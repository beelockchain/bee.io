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
      
      <div className="relative w-full max-w-[1200px] xl:px-6 lg:px-6 md:px-1 hidden md:block ">
             <div className="mb-16 flex justify-center">
              <NavLabel label="Why Choose Us" />
            </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-6 items-stretch">

          {/* LEFT STACK */}
          <div className="col-span-3 flex flex-col gap-6 h-full translate-x-4">

            {/* ICON CARD */}
            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex items-center justify-center">
             
<p className="text-[#43C0A3] text-center xl:text-2xl lg:text-2xl md:text-sm font-bold">
Pioneer blockchain Engineering</p>
 
 
            </div>

            {/* EVO AI CARD */}
            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex flex-col items-center justify-center gap-3">
              <h2 className="xl:text-6xl lg:text-3xl md:text-3xl  font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]">EVO AI</h2>
              <img
                  src="/assets/images/core-approch-icon.png"
                  alt="icon"
                />  
            </div>

            {/* PROJECT CARD (bigger weight) */}
         <div className="flex-[2] rounded-[32px] border border-white/10 
  bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] 
  shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] 
  xl:p-8 lg:p-8 md:p-6 p-4 
  flex items-center justify-center">

  <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
    <Image
      src="/assets/images/floting-text.png"
      alt="Idea Light"
      fill
      className="object-contain"
    />
  </div>

</div>

          </div>

          {/* CENTER HUB (HEIGHT MASTER) */}
          <div className="col-span-6 flex justify-center">
            <div className="relative md:w-[350px] xl:w-[520px]  lg:w-[460px]  aspect-square">
              <Image
                src="/assets/images/whychoose-center-img.png"
                alt="AI Core"
                fill
                priority
                className="object-contain"
              />
              <div className="absolute inset-0 top-28 md:top-24 lg:top-35 flex items-center justify-center z-10">
                <GradientGlowButton className="md:text-[10px] md:px-0"  
                 onClick={() => setIsOpen(true)}>
                  Explore
                </GradientGlowButton>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="col-span-3 flex flex-col gap-6 h-full -translate-x-4">

            {/* DESIGN CARD (bigger weight) */}
            <div className="flex-[2] rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515]
             to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] 
             xl:p-8  md:p-4 sm:p-4 p-4 flex flex-col justify-between">
             <Image src="/assets/images/small-logo.svg" alt="Design Icon" width={64} height={64} className="w-16 h-16 mb-4" />
              <h3 className="xl:text-3xl lg:text-3xl md:text-lg font-semibold leading-tight">
                Design & UI/UX
              </h3>

              <div className="mt-8">
                <p className="xl:text-emerald-50 lg:text-emerald-50 md:text-[10px] text-[22px] lg:text-[14px] font-bold">
                  Development Speed
                </p>
                <p className="text-cyan-400 xl:text-xl lg:text-xl md:text-[10px]">
                  3× faster with AI-assisted coding
                </p>
              </div>
            </div>

            {/* EXECUTION CARD */}
            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 flex flex-col items-center justify-center gap-2">
              <h4 className="text-[#66BAFF] text-center xl:text-3xl lg:text-3xl md:text-xl">
                Execution Consistency
              </h4>
              <p className="text-cyan-200 xl:text-xl lg:text-xl md:text-md">Time-to-Market</p>

              <img
                src="/assets/images/small-avatar-icon.png"
                alt="avatar"
                className="w-30  rounded-full"
              />
            </div>

            {/* MAINTENANCE CARD */}
            <div className="flex-1 text-black rounded-[32px] font-bold border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 flex items-center justify-center">
              <button className="xl:text-2xl lg:text-2xl md:text-[10px] font-medium px-4 py-2 bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0] rounded-full">
                Long-Term <br/> Partnership
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="relative w-full max-w-[1200px] px-4 md:px-6  block md:hidden">

        {/* TITLE */}
        <div className="mb-12  md:mb-16 flex justify-center">
          <NavLabel label="Why Choose Us" />
        </div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 grid-cols-1 xl:gap-6 lg:gap-6 md:gap-6  gap-4 items-stretch">

          {/* LEFT STACK */}
          <div
            className="
               md:col-span-3 col-span-1
               md:flex md:flex-col md:gap-4
              grid grid-cols-2 gap-4
              h-full md:translate-x-4
            "
          >
            {/* ICON CARD */}
            <div className="md:flex-1 md:rounded-[32px] rounded-2xl border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex items-center justify-center">
             <p className="text-[#43C0A3] text-center xl:text-2xl lg:text-2xl md:text-sm font-bold">
              Pioneer blockchain Engineering</p>
            </div>

            {/* EVO AI CARD */}
            <div className="rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col items-center justify-center gap-2">
              <h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text
                bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]">
                EVO AI
              </h2>
              <img
                src="/assets/images/core-approch-icon.png"
                alt="icon"
                className="w-20 md:w-24"
              />
            </div>

            {/* PROJECT CARD – FULL WIDTH ON MOBILE */}
            <div className="col-span-2 rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col justify-between">
             
              <div className="relative h-40 md:h-40">
                <Image
                  src="/assets/images/floting-text.png"
                  alt="Idea"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* CENTER HUB */}
          <div className="col-span-1 md:col-span-6 flex justify-center items-center">
            <div
              className="
                relative
                w-full
                h-[450px]
                sm:h-[520px]
                md:w-[520px]
              "
            >
              {/* DESKTOP / TABLET IMAGE */}
              <Image
                src="/assets/images/whychoose-center-img.png"
                alt="AI Core"
                fill
                priority
                className="hidden md:block object-contain"
              />

              {/* MOBILE IMAGE */}
              <Image
                src="/assets/images/whychoose-center-imgmobile.png"
                alt="AI Core Mobile"
                fill
                priority
                className="block md:hidden object-contain"
              />

              {/* CTA */}
              <div className="absolute top-[17%] inset-0 flex items-center justify-center z-10">
                <GradientGlowButton
                 onClick={() => setIsOpen(true)}>
                   Explore
                </GradientGlowButton>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4 h-full md:-translate-x-4">

            {/* DESIGN CARD */}
            <div className="flex-[1.8] rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16pxexec_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col justify-between">
              <Image
                src="/assets/images/small-logo.svg"
                alt="Design"
                width={64}
                height={64}
                className="w-10 md:w-12"
              />
              <h3 className="text-lg md:text-2xl font-semibold">
                Design & UI/UX
              </h3>
              <div>
                <p className="text-xs md:text-sm font-bold text-emerald-50">
                  Development Speed
                </p>
                <p className="text-xs md:text-lg text-cyan-400">
                  3× faster with AI-assisted coding
                </p>
              </div>
            </div>

            {/* EXECUTION CARD */}
            <div className="flex-[1] rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col items-center justify-center gap-1">
              <h4 className="text-sm md:text-xl text-[#66BAFF] text-center">
                Execution Consistency
              </h4>
              <p className="text-xs md:text-base text-cyan-200">
                Time-to-Market
              </p>
              <img
                src="/assets/images/small-avatar-icon.png"
                alt="avatar"
                className="w-24 rounded-full"
              />
            </div>

            {/* MAINTENANCE CARD */}
            <div className="flex-[1] text-black rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex items-center justify-center">
              <button className="text-[14px]  md:text-lg px-10 py-1.5 rounded-full font-medium
                bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0]">
                Long-Term <br/> Partnership
              </button>
            </div>
          </div>

        </div>
      </div>
      
{isOpen && (
        <ComparisonModal isOpen={isOpen} setIsOpen={setIsOpen} />
)}

    </section>
  );
};

export default Whychooseus;
