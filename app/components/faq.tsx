'use client';

import { useState } from "react";
import GradientGlowButton from "./GradientGlowButton";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const faqs = [
  {
    q: "What makes Beelockchain different from other blockchain development companies?",
    a: "We are the world’s first AI-centered blockchain development company, integrating EVO AI into every layer from blueprint to deployment, ensuring smarter, faster, and more scalable solutions."
  },
  {
    q: "Do you offer custom blockchain development services?",
    a: "Yes. We build custom Layer-1, Layer-2, public, private, and hybrid blockchains tailored to your business needs."
  },
  {
    q: "Can you integrate AI into blockchain systems?",
    a: "Absolutely. EVO AI automates architecture design, testing, optimization, and predictive analysis across your blockchain environment."
  },
  {
    q: "Do you develop dApps and smart contracts?",
    a: "Yes. We design and develop secure, scalable smart contracts and AI-enhanced dApps across multiple chains."
  },
  {
    q: "What industries do you support?",
    a: "Finance, gaming, supply chain, healthcare, real estate, energy, government, logistics, and more."
  },
  {
    q: "Do you help with token launches and crypto exchanges?",
    a: "Yes, including token creation, exchange development, wallet integration, liquidity tools, and compliance guidance."
  }
];


  return (
    <section className="w-full bg-[#00020f] md:py-6 py-0">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 md:gap-[120px] text-white">

        {/* MOBILE TITLE */}
        <h3 className="md:hidden text-xl  text-center font-semibold text-white mb-6 mt-10 font-manrope">
          FAQs
        </h3>

        {/* LEFT SIDE — Desktop only */}
        <div className="hidden md:flex md:w-[40%] flex-col gap-10">
          <h2 className="text-[64px] font-bold leading-tight font-manrope">
            Frequently <br /> Asked <br /> Questions
          </h2>

          {/* <div className="flex flex-col items-start gap-2 font-poppins">
            <GradientGlowButton>
              Get started
            </GradientGlowButton>
            <p className="text-sm text-white/40 ml-4 font-pooppins">
              No card required.
            </p>
          </div> */}
        </div>

        {/* RIGHT SIDE — FAQ */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-[14px] p-[0.8px] bg-[linear-gradient(160deg,#3ADCFF_0%,#050514_65%)] cursor-pointer"
              >
                <div className="bg-[#050514] rounded-[13px] px-5 py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center gap-6 text-left cursor-pointer"
                  >
                    <p className="text-sm sm:text-base font-medium font-manrope">
                      {item.q}
                    </p>

                    {isOpen ? (
                      <svg width="16" height="3" viewBox="0 0 16 3">
                        <path d="M1 1H15" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path d="M8 1V15M1 8H15" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-white/60 leading-relaxed font-poppins">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
