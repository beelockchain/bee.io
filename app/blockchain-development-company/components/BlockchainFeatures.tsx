import Image from "next/image";

// ✅ Replace this path with your actual image path in /public folder
// e.g. if your image is at public/blockchain-card.png → use "/blockchain-card.png"
const CARD_IMAGE_PATH = "/assets/images/beelock-dev-feature.png";

const features = [
  {
    title: "Gas Fee Optimization Technique",
    icon: "/assets/images/beelockchain-editicon.png",
  },
  {
    title: "Interoperability & Cross-Chain Integration",
    icon: "/assets/images/beelockchain-editicon.png",
  },
  {
    title: "Enterprise-Grade Security Architecture",
    icon: "/assets/images/beelockchain-editicon.png",
  },
  {
    title: "Multi-Blockchain Platform Support",
    icon: "/assets/images/beelockchain-editicon.png",
  },
  {
    title: "Consensus Mechanism Implementation",
    icon: "/assets/images/beelockchain-editicon.png",
  },
  {
    title: "High-Performance Architecture",
    icon: "/assets/images/beelockchain-editicon.png",
  },
  {
    title: "Data Transparency & Traceability",
    icon: "/assets/images/beelockchain-editicon.png",
  },
];

export default function BlockchainFeatures() {
  return (
    // ─── Outer Section ───────────────────────────────────────────────────────
    <section
      className="
        min-h-screen w-full
        bg-[#000404]
        flex flex-col items-center justify-center
        px-6 py-16
      "
    >
      {/* ─── Heading Block ─────────────────────────────────────────────────── */}
      <div className="text-center mb-12 max-w-4xl">
        <h2 className="text-[#E2E3E3] text-[25.4px] xl:text-[45px] font-bold leading-tight mb-4 font-manrope">
          Beelockchain -{" "}
          <span className="text-[#E2E3E3]">Top Blockchain</span>
          <br />
          Development Features{" "}
          <span className="text-white font-extrabold">You Should Know</span>
        </h2>
        <p className="text-[#E2E3E3] text-sm md:text-base xl:text-[20px] xl:text-center">
          Explore Beelockchain&apos;s blockchain development services, offering
          core features for building trusted digital ecosystems.
        </p>
      </div>

      {/* ─── Two-Column Layout ─────────────────────────────────────────────── */}
      <div
        className="
          flex flex-col lg:flex-row
          items-center justify-center
          gap-10 w-full max-w-5xl
        "
      >
        {/* ── LEFT: Feature List ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 w-full lg:w-1/2">
          {features.map((feature, index) => (
            <button
              key={index}
              className="
                flex items-center gap-3
                bg-[#333636] hover:bg-[#163030]
                border border-[#1e3333]
                text-white text-sm font-medium
                rounded-xl px-5 py-4
                text-left
                transition-all duration-200
                cursor-pointer
                group
              "
            >
              {/* Icon circle */}
              <span
                className="
                  w-8 h-8 flex items-center justify-center
                  rounded-full bg-[#5C6363]
                  text-base flex-shrink-0
                  group-hover:scale-110 transition-transform duration-200
                "
              >
                <Image
                src={feature.icon}
                alt="icon"
                width={18}
                height={18}
              />
              </span>

              {/* Title */}
              <span className="leading-snug">{feature.title}</span>
            </button>
          ))}
        </div>

        {/* ── RIGHT: Image Card ──────────────────────────────────────────── */}
        <div
          className="
            w-full lg:w-1/2 
            flex items-center justify-center
          "
        >
          <div
            className="
              relative w-full max-w-sm aspect-square
              shadow-[0_0_60px_rgba(0,200,180,0.15)]
            "
          >
        <Image
          src={CARD_IMAGE_PATH}
          alt="Beelockchain Feature Visual"
          width={700}
          height={700}
        />
          </div>
        </div>
      </div>
    </section>
  );
}