"use client";

import { useState } from "react";
import Image from "next/image";
import { technologies } from "../data/technologiesIcons";

/* ================= DESKTOP GRID CONFIG ================= */
const TILE = 112; // w-28
const GAP = 2;
const COLUMNS = 10;
const GRID_WIDTH = COLUMNS * TILE + (COLUMNS - 1) * GAP;

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#05060f] h-auto md:h-auto lg:h-auto">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TITLE */}
        <h2 className=" font-manrope text-center text-[36px] sm:text-[44px] lg:text-[56px] leading-tight font-bold text-neutral-100 mb-14 font-manrope">
          Technologies & Tools  
        </h2>

        {/* ================= DESKTOP LEGEND ================= */}
        <div className="hidden lg:flex justify-center mb-14">
          <div className="flex items-center gap-20 flex-wrap">
            <Legend color="bg-cyan-400" text="Blockchain" active={activeCategory === "blockchain"} onClick={() => setActiveCategory(p => p === "blockchain" ? null : "blockchain")} />
            <Legend color="bg-yellow-300" text="Program" active={activeCategory === "program"} onClick={() => setActiveCategory(p => p === "program" ? null : "program")} />
            <Legend color="bg-blue-500" text="Smart Contract" active={activeCategory === "smart-contract"} onClick={() => setActiveCategory(p => p === "smart-contract" ? null : "smart-contract")} />
            <Legend color="bg-orange-500" text="Web3 & Backend" active={activeCategory === "backend"} onClick={() => setActiveCategory(p => p === "backend" ? null : "backend")} />
            <Legend color="bg-rose-500" text="AI Technology" active={activeCategory === "ai"} onClick={() => setActiveCategory(p => p === "ai" ? null : "ai")} />
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden lg:block relative h-[500px]">
          {technologies.map((tech, index) => {
            const isCategoryActive = activeCategory === null || tech.category === activeCategory;
            const isIconActive = tech.id === activeId;

            const col = index % COLUMNS;
            const row = Math.floor(index / COLUMNS);

            const left = `calc(50% - ${GRID_WIDTH / 2}px + ${col * (TILE + GAP)}px)`;
            const top = row * (TILE + GAP);

            return (
              <button
                key={tech.id}
                onClick={() => setActiveId(tech.id)}
                className={`
                  absolute w-28 h-28 overflow-hidden
                  transition-all duration-300
                  ${isCategoryActive ? "opacity-100 scale-100" : "opacity-30 scale-[0.95]"}
                  ${isIconActive ? "outline outline-1 outline-cyan-400" : ""}
                  hover:scale-105 hover:opacity-100
                `}
                style={{ left, top, backgroundColor: tech.bg }}
              >
                <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
                  <img src={tech.icon} alt={tech.label} className="w-8 h-8 object-contain" />
                </div>

                <div className="absolute top-[68px] w-full text-center text-white/50 text-xs leading-4 font-poppins">
                  {tech.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* ================= MOBILE & TABLET ================= */}
        <div className="lg:hidden space-y-12">
          {[
            { key: "blockchain", color: "bg-cyan-400" },
            { key: "program", color: "bg-yellow-300" },
            { key: "smart-contract", color: "bg-blue-500" },
            { key: "backend", color: "bg-orange-500" },
            { key: "ai", color: "bg-rose-500" },
          ].map(({ key, color }) => (
            <div key={key}>
              {/* CATEGORY HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full ${color}`} />
                <h3 className="text-white/70 text-sm font-medium capitalize">
                  {key.replace("-", " ")}
                </h3>
              </div>

              {/* ICON GRID */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {technologies
                  .filter((tech) => tech.category === key)
                  .map((tech) => (
                    <div
                      key={tech.id}
                      className="h-24 rounded-md flex flex-col items-center justify-center"
                      style={{ backgroundColor: tech.bg }}
                    >
                      <img src={tech.icon} alt={tech.label} className="w-7 h-7 object-contain mb-2" />
                      <span className="text-[11px] text-white/60 text-center leading-tight px-1 font-poppins">
                        {tech.label}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= LEGEND ================= */

function Legend({
  color,
  text,
  active = false,
  onClick,
}: {
  color: string;
  text: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="flex items-center gap-4 select-none cursor-pointer">
      <div className={`w-5 h-5 rounded-sm ${color}`} />
      <span className={`text-sm transition-colors font-manrope ${active ? "text-cyan-400" : "text-white/50"}`}>
        {text}
      </span>
    </button>
  );
}
