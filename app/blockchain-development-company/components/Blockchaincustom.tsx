"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

/* ── ACCORDION DATA ── */
const industries = [
  {
    id: "finance",
    label: "Finance",
    description:
      "Blockchain applications in banking and finance create highly secure environments that accelerate financial operations and modernize asset management. It enables faster payments, simplified investments, and transparent cross-border transfers worldwide.",
    points: [
      "Immutable and tamper-proof records",
      "Smart contract–based automation",
      "Tokenization of digital and physical assets",
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce & Retail",
    description:
      "Blockchain most likely enhances the e-commerce and retail ecosystems, which improve trust, transparency, and operational efficiency. Integrating the blockchain in ecommerce & retail ensures product authenticity and fast payment transactions.",
    points: [
      "Transparent inventory and simple tracking",
      "Fraud-resistant digital payment systems",
      "Tokenized loyalty and reward mechanisms",
    ],
  },
  {
    id: "agriculture",
    label: "Agriculture",
    description:
      "Blockchain solutions modernize the agriculture industry by enabling traceability, fair pricing, and transparent trade across the supply chain. It empowers farmers, distributors, and buyers with trusted data and automated settlements.",
    points: [
      "Farm-to-market traceability",
      "Automated farmer-to-buyer settlements",
      "Transparent agricultural supply chains",
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    description:
      "Blockchain applications in healthcare apps store and secure the sensitive medical data while improving interoperability and trust. It enables control over hospital or organization data sharing, tamper-proof records, and automated insurance workflows.",
    points: [
      "Immutable patient health records",
      "Privacy-controlled data access",
      "Smart contract–driven insurance and claims processing",
    ],
  },
  {
    id: "supply",
    label: "Supply Chain & Logistics",
    description:
      "Developing the supply chain app in blockchain brings transparency and accountability to supply chain and logistics operations. And also enabling real-time tracking data, tamper-proof documentation, and shared visibility across all stakeholders.",
    points: [
      "End-to-end shipment visibility",
      "Tamper-proof logistics documentation",
      "Automated contract execution",
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    description:
      "Blockchain technologies in real estate simplify operations like digitizing ownership, reducing documentation & physical paperwork, and it’s enabling fractional investments through tokenization.",
    points: [
      "Tokenized real estate assets",
      "Transparent ownership records",
      "Automated buying, leasing, and transfers",
    ],
  },
  {
    id: "transportation",
    label: "Transportation",
    description:
      "Blockchain development in transportation optimizes the overall transport ecosystem by improving asset tracking, ensuring data accuracy, and enhancing coordination between operators, vehicles, and service providers.",
    points: [
      "Real-time fleet and asset tracking",
      "Automated billing and service contracts",
      "Improved mobility and fleet management",
    ],
  },
  {
    id: "gaming",
    label: "Gaming",
    description:
      "Recently gaming industries slightly moved into blockchain technologies, enabling a decentralized gaming platform, where players own assets, earn rewards, and participate in transparent game ecosystems.",
    points: [
      "True ownership of in-game assets",
      "Play-to-earn (P2E) reward systems",
      "Decentralized marketplaces",
    ],
  },
];

/* ── MAIN COMPONENT ── */
export default function BlockchainSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-[#070b0e]  flex items-start justify-center px-4 py-10 ">
      {/* Outer border box */}
              {/* ── LEFT CARD (desktop only) ── */}
              <div className=""></div>
        <div
          className="hidden md:flex flex-col md:h-120 lg:h-120 xl:h-125 justify-between m-3 rounded-xl border border-[#1a2d40] p-8"
          style={{
            width: "400px",
           
            flexShrink: 0,
            backgroundImage: "url('/assets/images/Background+VerticalBorder.png')", // ← your bg image here
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text content */}
          <div>
            <h2 className="text-white text-2xl font-semibold leading-snug mb-4 font-manrope">
              Custom Blockchain
              <br />
              Solutions Across Industries
            </h2>
            <p className="text-[#A2ADB5] text-xs leading-relaxed font-poppins">
              Beeblockchain is widely recognized as a leading blockchain
              software development company, trusted by corporate enterprises
              for delivering innovative solutions that address complex
              industry challenges worldwide.
            </p>
          </div>

          {/* Empty bottom space — bg image fills the shield area */}
          <div />
        </div>
        <div className="w-full max-w-[600px]  bg-[#070b0e] flex flex-col md:flex-row">



            {/* ── RIGHT ACCORDION ── */}
            <div className="flex-1 flex flex-col gap-4 md:gap-4 lg:gap-4 xl:gap-3.5 p-3">

            {/* Mobile: heading + para shown above accordion */}
            <div className="md:hidden mb-4">
                {/* Greenish Glow at Top */}
        <div className="absolute top-0 left-0 right-5 h-32 bg-gradient-to-b from-[#00E6C3]/20 via-[#00E6C3]/5 to-transparent pointer-events-none" />
        
                <h2 className="text-white text-2xl font-semibold leading-snug mb-3 font-manrope">
                Custom Blockchain Solutions
                <br />
                Across Industries
                </h2>
                <p className="text-[#FFFFFF] text-xs leading-relaxed font-poppins">
                Beeblockchain is widely recognized as a leading blockchain
                software development company, trusted by corporate enterprises
                for delivering innovative solutions that address complex
                industry challenges worldwide.
                </p>
            </div>

            {/* Accordion rows */}
            {industries.map((item) => {
                const isOpen = openId === item.id;

                return (
                <div
                    key={item.id}
                    className="bg-[#0e1621] border border-[#1c2d3e] rounded-xl overflow-hidden"
                >
                    {/* Row trigger */}
                    <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#12202e] transition-colors"
                    >
                    {/* Icon + Divider */}
                    <div className="flex items-center pr-3 mr-1 border-r border-[#2a3a4a]">
                        <UserPlus size={17} color="#FFFFFF" className="shrink-0" />
                    </div>

                    {/* Label */}
                    <span className="flex-1 text-[#FFFFFF] text-sm xl:text-[16px] font-medium font-manrope">
                        {item.label}
                    </span>

                    {/* Arrow */}
                    {isOpen ? (
                        <FaArrowUp size={12} color="#FFFFFF" className="shrink-0" />
                    ) : (
                        <FaArrowDown size={12} color="#FFFFFF" className="shrink-0" />
                    )}
                    </button>

                    {/* Accordion body */}
                    {isOpen && (
                    <div className="px-4 pb-4 pt-1">
                        <p className="text-[#A2ADB5] text-sm leading-relaxed mb-3 font-poppins">
                        {item.description}
                        </p>

                        <ul className="flex flex-col gap-1.5">
                        {item.points.map((pt, i) => (
                            <li
                            key={i}
                            className="flex items-start gap-2 text-[#FFFFFF] text-sm xl:text-[16px] leading-relaxed font-manrope"
                            >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8a8] mt-1.5 shrink-0" />
                            {pt}
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                );
            })}

            </div>
        </div>
    </section>
  );
}