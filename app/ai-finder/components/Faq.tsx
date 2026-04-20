'use client';

import { useState } from "react";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const faqs = [
  {
    q: "Does AI Project Finder build the project for me?",
    a: "No. AI Project Finder analyzes your idea and provides solution insights, features, and development direction, helping you plan the project before actual development starts.",
  },
  {
    q: "Is AI Project Finder free to use?",
    a: "The timeline depends on project scope, business size, and system complexity. Beelockchain defines a clear roadmap early on, helping organizations understand each phase, expected milestones, and realistic timelines.",
  },
  {
    q: "What happens after I receive the AI results?",
    a: "Once you receive the AI-generated results, you gain a structured project roadmap. This includes solution definition, feature recommendations, development flow, and suggested next steps. You can use this output to communicate clearly with developers, validate your idea with investors, or move directly into development with a well-documented plan.",
  },
  {
    q: "Can AI Project Finder help with blockchain or crypto exchange ideas?",
    a: "Yes, AI Project Finder supports blockchain, Web3, and crypto exchange ideas. It analyzes use cases such as DeFi platforms, NFT marketplaces, wallets, and crypto exchanges, providing feasibility insights, solution structure, and development guidance.",
  },

];


  return (
    <section className="w-full bg-[#00020f] md:py-6 py-7">
      <div className="w-[90%] sm:w-[80%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-0 md:gap-12.5 text-white xl:p-10">

        {/* MOBILE TITLE */}
        <h3 className=" text-xl sm:text-[35px] md:hidden text-center font-semibold text-white mb-6 mt-0 font-manrope">
          FAQs
        </h3>

        {/* LEFT SIDE — Desktop only */}
        <div className="hidden  md:flex md:w-[40%] flex-col gap-10">
            <img src="/assets/images/faq-label-aifinder.png" alt="" className="sm:w-30 md:w-30 lg:w-30 xl:w-30"/>
          <h2 className="text-[64px] sm:text-[40px] md:text-[35px] lg:text-[35px] xl:text-[60px] text-[#E0E1E2]  font-bold leading-tight font-manrope">
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
        <div className="w-full md:w-[80%] flex flex-col gap-4 mt-5 md:mt-20 xl:mt-20 ">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-[14px] p-px bg-[linear-gradient(160deg,#3ADCFF_0%,#050514_65%)] cursor-pointer"
              >
                <div className="bg-[#050514] rounded-[13px] px-5 py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center gap-6 text-left cursor-pointer"
                  >
                    <p className="text-[12px] sm:text-base md:text-[12px] xl:text-sm font-medium font-manrope">
                      {item.q}
                    </p>

                    {isOpen ? (
                      <svg width="16" height="16" viewBox="0 0 16 3">
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
                    <p className="text-[12px] md:text-[12px] xl:text-sm text-white/60 leading-relaxed font-poppins">
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

export default FAQ;
