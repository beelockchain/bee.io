"use client";

import { useState } from "react";

const tabs = [
  {
    id: "ethereum",
    label: "Ethereum",
    icon: "/assets/images/networksec-contenticon1.png",
    content: {
      image: "/assets/images/networksec-contenticon1.png",
      title: "Ethereum Smart Contracts",
      description:
        "We use Ethereum as our core platform for smart contracts and DApps, taking advantage of its mature ecosystem, extensive developer tools, and strong community. This approach ensures our applications are secure, scalable, and fully compatible with existing DeFi protocols.",
    },
  },
  {
    id: "solana",
    label: "Solana",
    icon: "/assets/images/network-content-solana.png",
    content: {
      image: "/assets/images/network-content-solana.png",
      title: "Solana High Performance",
      description:
        "Solana blockchain is developed for high-performance blockchain applications, offering extremely fast transactions and zero transaction fees. Its low-cost architecture makes it ideal for use cases such as blockchain games, dApps, and blockchain-related platforms.",
    },
  },
  {
    id: "bnb",
    label: "BNB Chain",
    icon: "/assets/images/networksec-bnb.png",
    content: {
      image: "/assets/images/networksec-contenticon2.png",
      title: "BNB Chain Ecosystem",
      description:
        "Binance Smart Chain is an EVM-compatible blockchain network that offers a faster transaction process and the lowest gas fees compared to Ethereum. It is suitable for Decentralised finance platforms, token ecosystems, and blockchain applications.",
    },
  },
  {
    id: "hyperledger",
    label: "Hyperledger",
    icon: "/assets/images/network-content-hyperledger.png",
    content: {
      image: "/assets/images/network-content-hyperledger.png",
      title: "Hyperledger Enterprise",
      description:
        "Hyperledger Fabric is a permissioned blockchain network made for enterprise and consortium use cases. It does not use traditional gas fees, as platform transaction costs are managed internally within the network, making it ideal for regulated environments such as supply chain management, finance, and healthcare. ",
    },
  },
  {
    id: "polygon",
    label: "Polygon",
    icon: "/assets/images/networksec-contenticon7.png",
    content: {
      image: "/assets/images/networksec-contenticon7.png",
      title: "Polygon Layer 2",
      description:
        "Polygon is a famous Layer-2 blockchain solution that enhances Ethereum’s performance and significantly reduces gas fees, and improves transaction speed. It is ideal for blockchain applications that require Ethereum-level security.",
    },
  },
  {
    id: "polkadot",
    label: "Polkadot",
    icon: "/assets/images/networksec-contenticon6.png",
    content: {
      image: "/assets/images/networksec-contenticon6.png",
      title: "Polkadot Interoperability",
      description:
        "It is a multi-chain blockchain network that is built to enable interoperability between independent blockchains through its parachain architecture. Transaction fees are slightly moderate, and it is based on network usage and parachain configuration, making it suitable for cross-chain ecosystems.",
    },
  },
  {
    id: "cosmos",
    label: "Cosmos",
    icon: "/assets/images/networksec-cosmos.png",
    content: {
      image: "/assets/images/networksec-cosmos.png",
      title: "Cosmos Internet of Blockchains",
      description:
        "Cosmos is built to support independent, sovereign blockchains that can communicate with each other through the Inter-Blockchain Communication (IBC) protocol. Gas fees are generally low and customizable depending on the specific blockchain configuration, making Cosmos ideal for scalable and interoperable ecosystems.",
    },
  },
];

export default function BlockchainSection() {
  const [activeTab, setActiveTab] = useState("ethereum");
  const active = tabs.find((t) => t.id === activeTab)!;

  const tabStyle = (id: string) => ({
    background: activeTab === id ? "#2bedf0" : "rgba(255,255,255,0.04)",
    border: activeTab === id ? "1px solid rgba(0,230,200,0.5)" : "1px solid rgba(255,255,255,0.08)",
    color: activeTab === id ? "#000000" : "#8a8fa8",
    boxShadow: activeTab === id ? "0 0 14px rgba(0,230,200,0.2)" : "none",
  });

  return (
    <section className="w-full py-20 px-4" style={{ background: "#0a0a0f" }}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[20px] md:text-[20px] lg:text-[25px] xl:text-[35px]  font-bold text-white mb-4 font-manrope">
          Building The Future On Trusted Blockchain Platforms
        </h2>

        {/* Subtext */}
        <p className="text-center text-sm md:text-[13px] py-5 lg:text-[14px] xl:text-[15px] max-w-6xl font-poppins mx-auto mb-10" style={{ color: "#ffffff" }}>
          Our blockchain expertise is built on trusted blockchain platforms that provide resilience,
          high performance, and reliability. These are not experimental technologies; they are proven
          systems trusted by thousands of successful businesses to drive innovation and efficiency.
        </p>

        {/* ── DESKTOP ── */}
        <div className="hidden md:block">
          {/* Row 1: 4 tabs */}
          <div className="flex justify-left gap-3 mb-3">
            {tabs.slice(0, 4).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-3 md:w-100 lg:w-100 xl:w-90 md:px-4 md:py-3 lg:px-4 lg:py-2 xl:px-5 xl:py-3 rounded-full text-sm font-medium transition-all duration-300"
                style={tabStyle(tab.id)}
              >
                <img src={tab.icon} alt={tab.label} width={50} height={50} className="md:w-5 lg:w-10"/>
                {tab.label}
              </button>
            ))}
          </div>
          {/* Row 2: 3 tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {tabs.slice(4).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-3 md:w-50 lg:w-60 xl:w-60 md:px-4 md:py-3 lg:px-4 lg:py-2 xl:px-5 xl:py-3 rounded-full text-sm font-medium transition-all duration-300"
                style={tabStyle(tab.id)}
              >
                <img src={tab.icon} alt={tab.label} width={50} height={50} className="md:w-5 lg:w-10" />
                {tab.label}
              </button>
            ))}
          </div>
          {/* Content Card */}
          <ContentCard active={active} />
        </div>

        {/* ── MOBILE ── */}
<div className="md:hidden flex gap-4 items-start">
  {/* Left: Content Card */}
<div className="flex-1 ">
  <div className="h-full">
    <ContentCard active={active} />
  </div>
</div>
  {/* Right: Tabs */}
  <div className="flex flex-col gap-3 shrink-0">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-xs font-medium transition-all duration-300"
        style={{ ...tabStyle(tab.id), whiteSpace: "nowrap" }}
      >
        <img src={tab.icon} alt={tab.label} width={25} height={25} />
        {tab.label}
      </button>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}

function ContentCard({ active }: { active: (typeof tabs)[0] }) {
  return (
<div
  className="relative rounded-2xl h-92 md:h-full  lg:h-full px-4 md:py-7 lg:py-12 xl:p-10 flex items-center gap-6 overflow-hidden border-r flex-col md:flex-row xl:flex-row justify-center"
  style={{
    background:
      "linear-gradient(180deg, rgba(0,230,200,0.06) 0%, rgba(10,10,20,0.95) 50%)",
    border: "1px solid #37E0FC",
    boxShadow:
      "0 0 60px rgba(0,230,200,0.1), inset 0 1px 0 rgba(0,230,200,0.2)",
  }}
>
  {/* TOP GLOW */}
{/* TOP GLOW */}
<div
  className="absolute bottom-[120px] left-1/2 -translate-x-1/2 pointer-events-none"
  style={{
    width: "900px",
    height: "600px",
    background: `
      radial-gradient(
        70% 60% at 50% 100%,
        #5DE3FF 0%,
        #078AA0 35%,
        #00322F 65%,
        transparent 100%
      )
    `,
    filter: "blur(90px)",
    opacity: 0.9
  }}
/>

  {/* CONTENT */}
  <img
    src={active.content.image}
    alt={active.content.title}
    width={30}
    height={30}
    className="shrink-0 rounded-xl w-20 xl:w-30 relative z-10 p-2 lg:p-0"
  />

  <div className="relative z-10">
    <p className="text-[12px] xl:text-[18px] leading-relaxed" style={{ color: "#ffffff" }}>
      {active.content.description}
    </p>
  </div>
</div>
  );
}