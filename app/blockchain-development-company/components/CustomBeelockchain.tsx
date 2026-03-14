import Image from "next/image";
import GradientGlowButton from "@/app/components/GradientGlowButton";
const cards = [
  {
    id: 1,
    bg: "/assets/images/beelockchain-custom.png",
    bgMobile: "/assets/images/custom-beelockmobile1.png",
    title: "AI-Optimized Blockchain Architecture",
    description:
      "Using EVO AI, we architect the right blockchain model and consensus mechanism to reduce risk and speed up deployment.",
  },
  {
    id: 2,
    bg: "/assets/images/beelockchain-performance.png",
    bgMobile: "/assets/images/custom-beelockmobile2.png",
    title: "High-Performance Blockchain Systems",
    description:
      "Our blockchain platforms are engineered with high throughput, low latency, and more reliability.",
  },
  {
    id: 3,
    bg: "/assets/images/beelockchain-deploy.png",
    bgMobile: "/assets/images/custom-beelockmobile3.png",
    title: "Multi-Chain Deployment Capabilities",
    description:
      "We deploy multi-chain platforms across public, private, and hybrid networks.",
  },
  {
    id: 4,
    bg: "/assets/images/beelockchain-industry.png",
    bgMobile: "/assets/images/custom-beelockmobile4.png",
    title: "Industry Expertise",
    description:
      "Blockchain solutions across finance, healthcare, supply chain, gaming, sports.",
  },
  {
    id: 5,
    bg: "/assets/images/beelockchain-security.png",
    bgMobile: "/assets/images/custom-beelockmobile5.png",
    title: "Smart Contract Security",
    description:
      "Smart contract security is the most important in our development lifecycle.",
  },
];

export default function CustomBeelockchain() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#00020F]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-[#F4F4F4] text-center font-bold text-3xl lg:text-3xl xl:text-4xl leading-tight max-w-2xl font-manrope">
          Why Choose Beelockchain for Custom{" "}
          <span className="text-[#AEAFB3]">Blockchain Solutions?</span>
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-[#A2ADB5] text-center text-sm lg:text-[14px] xl:text-[16px] max-w-4xl leading-relaxed font-poppins">
          Partner with Beelockchain for blockchain solutions built on experience, technical mastery, and a commitment to succeed in your business. Our high-end security and innovative platforms help you transform digitally and stay ahead in an ever-changing marketplace.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          {/* <button className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 text-sm font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 min-w-[180px]">
            Consult Our Expert
          </button>
          <button className="px-6 py-3 rounded-full bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition-all duration-300 min-w-[180px]">
            Explore Our Portfolio
          </button> */}
           <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%] border-cyan-400/50 hover:bg-cyan-400/10">
              Consult Our Expert
           </GradientGlowButton>
          <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%] border-cyan-400/50 hover:bg-cyan-400/10">
             Explore Our Portfolio
          </GradientGlowButton>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 w-full">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 lg:gap-6 mb-6">
            {cards.slice(0, 2).map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:gap-3 lg:gap-6">
            {cards.slice(2, 5).map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Card Component ── */
function Card({ card }: { card: (typeof cards)[number] }) {

  const getAlignment = () => {
    if (card.id === 2) return "justify-center mr-40"; // center
    if (card.id === 3 || card.id === 5) return "justify-end"; // bottom
    return "justify-start"; // top
  };

  return (
    <div className="relative h-full md:h-50 lg:h-80 rounded-2xl overflow-hidden border border-white/10 group hover:border-cyan-500/50 transition-all duration-300">

            {/* Background Image */}
      {/* Desktop / Tablet Image */}
      <img
        src={card.bg}
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Mobile Image */}
      <img
        src={card.bgMobile}
        alt=""
        className="block md:hidden absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className={`relative md:p-3 lg:p-6 flex flex-col lg:gap-3 h-full ${getAlignment()}`}>
        <h3 className="text-white font-semibold md:text-[12px] lg:text-[15px] xl:text-lg leading-snug">
          {card.title}
        </h3>

        <p className="text-gray-300 md:text-[10px] lg:text-[13px] xl:text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}