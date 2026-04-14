import React from "react";
import NavLabel from "./NavLable";

const Statictis = () => {
  return (
    <div className="w-full min-h-screen bg-[#00020F] flex flex-col gap-6 px-4 md:px-0 items-center">
      {/* ================= TOP TEXT ================= */}
      <div className="w-full max-w-[1000px]">
        <div className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#0B0F1C] via-[#111827] to-[#0B0F1C]">
          <NavLabel label="Core Identity" className="text-sm md:text-[15px]" />
        </div>

        {/* DESKTOP + TABLET */}
        <div className="hidden md:flex flex-col mt-6 gap-2">
          <div className="flex items-center flex-wrap gap-2">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent h-auto">Who We Are</h2>
            <h3 className="text-white text-lg lg:text-xl">
              Beelockchain is a pioneering{" "}
              <span className="text-[#1BFFE1] ml-1 mr-1">
                Blockchain Development Company
              </span>
              redefining how decentralized technologies are built, deployed, and
              scaled for modern businesses. As a trusted Custom Blockchain
              Development Company, we merge deep blockchain expertise with EVO
              AI, our proprietary intelligence engine, to design and develop
              future-ready blockchain solutions.
            </h3>
            <h3 className="text-white text-lg lg:text-xl">
              A unified approach to blockchain apps and enterprise-grade
              blockchain development solutions provides automation,
              architectural optimization, system behavior prediction, and faster
              development cycles.
            </h3>
          </div>
        </div>

        {/* MOBILE ONLY */}
        <div className="md:hidden mt-4 text-white text-sm leading-relaxed">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-white text-xs lg:text-xl">
              Beelockchain is a pioneering{" "}
              <span className="text-[#1BFFE1] ml-1 mr-1">
                Blockchain Development Company
              </span>
              redefining how decentralized technologies are built, deployed, and
              scaled for modern businesses. As a trusted Custom Blockchain
              Development Company, we merge deep blockchain expertise with EVO
              AI, our proprietary intelligence engine, to design and develop
              future-ready blockchain solutions.
            </h3>
            <h3 className="text-white text-xs lg:text-xl">
              A unified approach to blockchain apps and enterprise-grade
              blockchain development solutions provides automation,
              architectural optimization, system behavior prediction, and faster
              development cycles.
            </h3>
          </div>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div
        className="
          w-full max-w-[1000px]
          grid grid-cols-2 gap-4       /* MOBILE – untouched */
          md:grid-cols-3 md:grid-rows-2 md:gap-6  /* TABLET */
          lg:grid-cols-3 lg:grid-rows-2 lg:gap-6  /* DESKTOP */
        "
      >
        {/* PIONEERS */}
        <div
          className="
            order-2 md:order-1
            h-[120px] md:h-[240px]
            w-[150px] sm:w-[180px] md:w-full mx-auto
            rounded-[24px]
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            border border-white/10 shadow-xl
            flex items-center justify-center p-4
          "
        >
          <h2 className="text-white text-xs lg:text-3xl font-semibold text-center">
            AI-Driven <br /> Discovery & <br />
            Planning
          </h2>
        </div>

        {/* EVO AI */}
        <div
          className="
            order-1 md:order-2
            col-span-2 md:col-span-1
            md:row-span-2
            flex justify-center
          "
        >
          <div
            className="
              relative w-full max-w-[360px]
              h-[420px] md:h-full
              md:max-w-none md:mx-auto
              rounded-[32px] overflow-hidden
              bg-gradient-to-b from-[#00A4AF] to-black
              border border-white/40 shadow-2xl
            "
          >
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

        {/* AUTOMATED */}
        <div
          className="
            order-4 md:order-3
            h-[120px] md:h-[240px]
         w-[150px] sm:w-[180px] md:w-full mx-auto
            rounded-[24px]
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            border border-white/10 shadow-xl
            flex flex-col items-center justify-center p-4
          "
        >
          <h2
            className="text-sm lg:text-4xl font-semibold text-center
            bg-gradient-to-b from-[#00A4AF] to-[#00FF97]
            bg-clip-text text-transparent"
          >
            Custom Blockchain Architecture
          </h2>
        </div>

        {/* PREDICTIVE */}
        <div
          className="
            order-3 md:order-4
            h-[120px] md:h-[240px]
            w-[150px] sm:w-[180px] md:w-full mx-auto
            rounded-[24px]
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            border border-white/10 shadow-xl
            flex flex-col items-center justify-center gap-2 p-4
          "
        >
          <img src="/assets/images/Frame 19.svg" className="w-20 lg:w-40" />
          <p className="text-white text-xs lg:text-xl text-center">
            Intelligent
            <br /> Development &<br /> Automation
          </p>
        </div>

        {/* ACCELERATED */}
        <div
          className="
            order-5
            h-[120px] md:h-[240px]
            w-[150px] sm:w-[180px] md:w-full mx-auto
            rounded-[24px]
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
            border border-white/10 shadow-xl
            flex items-center justify-center p-4
          "
        >
          <h2 className="text-white text-xs lg:text-4xl text-center">
            Deployment,
            <br /> Optimization & <br />
            Growth
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Statictis;
