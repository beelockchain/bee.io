"use client";

import React from "react";
import GradientGlowButton from "@/app/components/GradientGlowButton";

export default function BeeBlockchainSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

        .bee-section {
          font-family: 'Inter', sans-serif;
        }

        .glass-card {
          background: rgba(11, 35, 36, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(255, 255, 255, 0.06),
            inset 0 0 20px 10px rgba(11, 35, 36, 0.6);
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          z-index: 10;
        }

        .glass-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          z-index: 10;
        }

        .image-wrap {
          position: relative;
        }

        .image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px 0 0 18px;
          pointer-events: none;
        }

        @media (max-width: 1023px) {
          .image-wrap::after {
            background: linear-gradient(
              to bottom,
              transparent 50%,
              rgba(11, 35, 36, 0.85) 100%
            );
            border-radius: 0 0 18px 18px;
          }
        }
      `}</style>

      <div className="mb-5 bg-[#00020F] md:bg-transparent">
       <section
  className="bee-section relative flex md:h-full lg:h-screen w-full items-center justify-center overflow-hidden px-3 md:px-5 lg:py-10 xl:py-20 lg:bg-[url('/assets/images/block-bf-final.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat"
>
          <div className="glass-card relative z-10 w-full lg:max-w-4xl xl:max-w-6xl">

            {/* Column on mobile + tablet, Row on desktop */}
            <div className="flex flex-col md:flex-row lg:flex-row lg:items-stretch bg-[#0A1921] md:bg-transparent">

              {/* IMAGE */}
              <div className="image-wrap order-2 md:order-1 lg:order-1 md:w-[44%] lg:w-[44%] xl:w-[44%] lg:shrink-0 p-5">
                <img
                  src="/assets/images/blockchain-consultant-leftimg.png"
                  alt="Blockchain 3D visualization"
                  className="block w-full object-cover object-center h-56 rounded-b-[18px] md:h-full lg:h-full lg:rounded-[18px]"
                />
              </div>

              {/* CONTENT */}
              <div className="order-1 flex flex-col justify-center px-3 pb-7 md:w-[50%]  pt-10 md:order-2 lg:order-2 lg:flex-1 lg:px-12 lg:py-14">

                <p
                  className="text-center lg:text-left text-[20px] md:text-[20px] lg:text-[25px] xl:text-[35px] font-bold font-manrope"
                  style={{ color: "#35E0FA" }}
                >
                  Beelockchain
                </p>

                <h1
                  className="font-manrope m-0 text-[20px] md:text-[20px] lg:text-[25px] xl:text-[35px] font-bold leading-[1.15] text-center lg:text-left"
                  style={{ color: "#e8f4f3" }}
                >
                  Blockchain Development
                  <br />
                  Company
                </h1>

                <p
                  className="my-7 font-poppins px-3 lg:px-0 text-center lg:text-left text-[12px] md:text-[11px] lg:text-[12px] xl:text-[16px] md:leading-[1.4] lg:leading-[1.8] text-[#E7E9EF]"
                >
                  As a custom blockchain development company, Beelockchain
                  stands as your partner in turning visionary ideas into
                  inventive digital realities. Our journey, from a small,
                  passionate team to a trusted top blockchain development
                  company, is a testament to our excellence and commitment.
                  The blockchain solutions we build remain cutting-edge and
                  reliable by embracing the latest advancements in the
                  blockchain space.
                </p>

                <div className="text-center lg:text-left">
                  <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%] border-cyan-400/50 hover:bg-cyan-400/10">
                    Explore Our Portfolio
                  </GradientGlowButton>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}