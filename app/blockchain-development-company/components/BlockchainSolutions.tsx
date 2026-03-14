"use client";

import { useRouter } from "next/navigation";

const services = [
  { label: "Smart Contract Development", href: "/services/smart-contract-development", active: true },
  { label: "DEX Development",            href: "/services/dapp-development" },
  { label: "Dapp Development", href: "/services/nft-marketplace-development" },
  { label: "Crypto Exchange Development ",  href: "/services/smart-contract-audit" },
  { label: "NFT Marketplace Development",             href: "/services/dex-development" },
  { label: "NFT Development",             href: "/services/nft-development" },
  { label: "Smart Contract Development", href: "/services/crypto-exchange-development" },
  { label: "Wallet Development",          href: "/services/wallet-development" },
  { label: "Crypto Trading Bot Development", href: "/services/crypto-trading-bot" },
  { label: "Token & Coin Development",             href: "/services/ico-development" },
  { label: "ICO Development", href: "/services/security-token-offering" },
  { label: "Blockchain Game Development", href: "/services/zk-rollup-scaling-solutions" },
  { label: "Security Token Offering(STO)",    href: "/services/token-coin-development" },
  { label: "Prediction Market", href: "/services/blockchain-game-development" },
  { label: "ZK Rollup Scaling Solutions",           href: "/services/prediction-market" },
];

// Desktop rows — matches image (4-4-4-3)
const desktopRows = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14],
];

// Mobile: 8 rows with precise % widths as specified
// [serviceIndex, widthPercent]
const mobileRows: [number, number][][] = [
  [[0, 55], [1, 45]],
  [[2, 45], [3, 55]],
  [[4, 70], [5, 30]],
  [[6, 65], [7, 35]],
  [[8, 65], [9, 35]],
  [[10, 30], [11, 70]],
  [[12, 65], [13, 35]],
  [[14, 55]],
];

export default function BlockchainSolutions() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-[#00020F]  flex items-center justify-center py-10 px-4 overflow-hidden">

      {/* Faint grid lines background */}
      <div
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-[920px] mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12 px-2">
         <h2 className="text-[#ffffff] xl:px-10 font-manrope text-2xl sm:text-2xl md:text-[17px] lg:text-[20px]  xl:text-[30px] font-bold leading-tight">
           Our Future-Ready
          </h2>
          <h2 className="text-[#DEDEDF] xl:px-0 font-manrope text-2xl sm:text-2xl md:text-[40px] lg:text-[45px]  xl:text-[60px] font-bold mb-4 leading-tight">
            Custom Blockchain Solutions
          </h2>
          <p className="text-white text-xs sm:text-sm md:text-[12px] lg:text-[13px] xl:text-[13px] leading-relaxed  mx-auto font-poppins">
            Our blockchain expertise is built on trusted blockchain platforms that provide resilience,
            high performance, and reliability. These are not experimental technologies; they are proven
            systems trusted by thousands of successful businesses to drive innovation and efficiency.
          </p>
        </div>

        {/* ── DESKTOP Layout (md+) ── */}
        <div className="hidden md:flex flex-col items-center gap-3">
          {desktopRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex justify-center gap-3">
              {row.map((idx) => {
                const svc = services[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => router.push(svc.href)}
                    className={[
                      "relative px-5 py-5 md:px-4 md:py-4 lg:px-4 lg:py-4 xl:px-5 xl:py-5 rounded-lg border md:text-[11px] lg:text-[12px] xl:text-[14px] font-medium",
                      "transition-all duration-200 cursor-pointer overflow-hidden group",
                      "focus:outline-none focus:bg-[#33353F]",
                      svc.active
                        ? "bg-[#07323B] border-[#1FFAE4] border text-white font-bold"
                        : "bg-[#25272E] border-[#3A3B42] text-white font-bold hover:bg-[#07323B] hover:border-[#1a5f6b] hover:text-white",
                    ].join(" ")}
                  >
                    {/* Shimmer on hover */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                    {svc.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* ── MOBILE Layout (below md) — zigzag variable widths ── */}
        <div className="flex flex-col gap-2.5 md:hidden w-full">
          {mobileRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-2.5 w-full">
              {row.map(([idx, widthPct]) => {
                const svc = services[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => router.push(svc.href)}
                    style={{ width: `${widthPct}%` }}
                    className={[
                      "relative flex-none px-2 py-2.5 rounded-md border",
                      "text-[10px] font-medium text-center leading-snug",
                      "transition-all duration-200 cursor-pointer overflow-hidden group",
                      "active:scale-95 focus:outline-none focus:bg-[#33353F]",
                      svc.active
                        ? "bg-[#07323B] border-[#1a5f6b] text-white"
                        : "bg-[#25272E] border-[#3A3B42] text-gray-300 hover:bg-[#07323B] hover:border-[#1a5f6b] hover:text-white",
                    ].join(" ")}
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                    {svc.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}