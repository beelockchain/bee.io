import React from 'react';
import NavLabel from './NavLable';



const Statictis = () => {
  return (
    <div className="w-full min-h-screen bg-[#00020F] flex flex-col gap-6 px-4 md:px-0 flex flex-col items-center">

      {/* ================= TOP TEXT (UNCHANGED) ================= */}
      <div className="md:w-[80%] md:max-w-6xl w-[90%]">
        <div className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#0B0F1C] via-[#111827] to-[#0B0F1C]">
         <NavLabel label="Who we are" className="text-sm md:text-[15px]" />
        </div>

        {/* DESKTOP / TABLET TEXT */}
        <div className="hidden md:flex flex-col mt-6 gap-2">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-white text-2xl lg:text-3xl">
              We combine deep expertise with
            </h3>
            <img src="/assets/images/animation.svg" className="w-14 h-14" />
            <h3 className="text-white text-2xl lg:text-3xl">
              EVO AI to enhance
            </h3>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-white text-2xl lg:text-3xl">
              the development process, optimization, and
            </h3>
            <img src="/assets/images/Butterfly.gif" className="w-16 h-16" />
            <h3 className="text-white text-2xl lg:text-3xl">
              scaling
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <h3 className="text-white text-2xl lg:text-3xl">
              of decentralized solutions.
            </h3>
            <img src="/assets/images/Container (2).svg" className="w-52" />
          </div>
        </div>

        {/* MOBILE TEXT */}
        <div className="md:hidden mt-4 text-white text-sm leading-relaxed">
          Create smart blockchain systems that think. EVO AI enhances the
          development process, optimization, and scaling of decentralized
          solutions.
        </div>
      </div>

      {/* ================= CARDS SECTION (ALIGNED) ================= */}
      <div
        className="
          w-full max-w-[1000px]
          grid grid-cols-2 gap-4
          lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 
        "
      >

        {/* PIONEERS - Top Left */}
        <div className="order-2 lg:order-1 h-[120px] lg:h-[240px]
          rounded-[24px] bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
          border border-white/10 shadow-xl
          flex items-center justify-center p-4">
          <h2 className="text-white text-xs lg:text-3xl font-semibold text-center">
            Pioneers in Blockchain Engineering
          </h2>
        </div>

        {/* EVO AI CENTER CARD - Middle (spans 2 rows) */}
        <div className="order-1 lg:order-2 col-span-2 lg:col-span-1 lg:row-span-2 flex justify-center">
           <div className="relative w-full max-w-[360px] lg:max-w-none h-[420px] lg:h-full lg:mx-auto
     rounded-[32px] overflow-hidden
     bg-gradient-to-b from-[#00A4AF] to-black
     border border-white/40 shadow-2xl">

            <div className="pt-8 text-center px-6">
              <p className="text-white/80 text-sm lg:text-lg">Powered by</p>
              <h2 className="text-white text-5xl lg:text-6xl font-bold mt-2">
                EVO AI™
              </h2>
              <h3 className="text-white/80 text-sm lg:text-lg mt-2">
                Intelligence Engine
              </h3>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
              <img
                src="/assets/images/84b9d6946f21a30ebcea8ae14a70972e 1.svg"
                className="w-64 lg:w-80"
                alt="EVO AI"
              />
            </div>
          </div>
        </div>

        {/* AUTOMATED - Top Right */}
        <div className="order-4 lg:order-3 h-[120px] lg:h-[240px]
          rounded-[24px] bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
          border border-white/10 shadow-xl
          flex flex-col items-center justify-center p-4">
          <h2 className="text-sm lg:text-4xl font-semibold text-center
            bg-gradient-to-b from-[#00A4AF] to-[#00FF97]
            bg-clip-text text-transparent">
            Automated & Optimized
          </h2>
          <p className="text-white text-xs lg:text-lg text-center">
            Development Workflows
          </p>
        </div>

        {/* PREDICTIVE - Bottom Left */}
        <div className="order-3 lg:order-4 h-[120px] lg:h-[240px]
          rounded-[24px] bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
          border border-white/10 shadow-xl
          flex flex-col items-center justify-center gap-2 p-4">
          <img src="/assets/images/Frame 19.svg" className="w-20 lg:w-40" />
          <p className="text-white text-xs lg:text-xl text-center">
            Predictive & <br /> Adaptive Architecture
          </p>
        </div>

        {/* ACCELERATED - Bottom Right */}
        <div className="order-5 lg:order-5 h-[120px] lg:h-[240px]
          rounded-[24px] bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
          border border-white/10 shadow-xl
          flex items-center justify-center p-4">
          <h2 className="text-white text-xs lg:text-4xl text-center">
            Accelerated <br /> Time-to-Market
          </h2>
        </div>

      </div>
    </div>
  );
};

export default Statictis;