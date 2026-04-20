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
      {/* Background */}
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
          <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%] border-cyan-400/50 hover:bg-cyan-400/10">
            Consult Our Expert
          </GradientGlowButton>
          <GradientGlowButton className="bg-transparent shadow-none border lg:mb-[1%] xl:mb-[2%] border-cyan-400/50 hover:bg-cyan-400/10">
            Explore Our Portfolio
          </GradientGlowButton>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 w-full">

          {/* Mobile: single column stacked cards */}
          {/* Tablet+: Row 1 - 2 cols, Row 2 - 3 cols */}

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 lg:gap-6 mb-4 md:mb-6">
            {cards.slice(0, 2).map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 lg:gap-6">
            {cards.slice(2, 5).map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Per-card mobile height ── */
const mobileHeightMap: Record<number, string> = {
  1: "h-[620px]",
  2: "h-[400px]",
  3: "h-[400px]",
  4: "h-[400px]",
  5: "h-[400px]",
};

/* ── Card Component ── */
function Card({ card }: { card: (typeof cards)[number] }) {

  const getDesktopAlignment = () => {
    if (card.id === 2) return "justify-center mr-40";
    if (card.id === 3 || card.id === 5) return "justify-end";
    return "justify-start";
  };

  const mobileHeight = mobileHeightMap[card.id] ?? "h-[260px]";

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden border border-white/10
        group hover:border-cyan-500/50 transition-all duration-300
        ${mobileHeight}
        md:h-50 lg:h-80
      `}
    >
      {/* Desktop / Tablet Background Image */}
      <img
        src={card.bg}
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Mobile Background Image — fills card completely */}
      <img
        src={card.bgMobile}
        alt=""
        className="block md:hidden absolute inset-0 w-full  object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark gradient overlay on mobile so text is always readable */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ── DESKTOP content (original positioning logic) ── */}
      <div
        className={`
          hidden md:flex relative md:p-3 lg:p-6
          flex-col lg:gap-3 h-full
          ${getDesktopAlignment()}
        `}
      >
        <h3 className="text-white font-semibold md:text-[12px] lg:text-[15px] xl:text-lg leading-snug">
          {card.title}
        </h3>
        <p className="text-gray-300 md:text-[10px] lg:text-[13px] xl:text-sm leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* ── MOBILE content — bottom for cards 2 & 5, top for rest ── */}
      <div className={`flex md:hidden absolute left-0 right-0 p-4 flex-col gap-1 ${card.id === 2 || card.id === 5 ? "bottom-0" : "top-0"}`}>
        <h3 className="text-white font-semibold text-[15px] leading-snug">
          {card.title}
        </h3>
        <p className="text-gray-300 text-[14px] leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}