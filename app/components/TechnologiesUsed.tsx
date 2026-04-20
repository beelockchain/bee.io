"use client";

import { useState } from "react";
import { technologies } from "../data/technologiesIcons";

/*
  DESKTOP : 12 icons per row × 3 rows = 36 total
  MOBILE  : 3 columns, same bordered card
  Tiles are separated by 1-px rgba(255,255,255,0.06) lines (right + bottom)
  Entire grid: rounded-2xl, border rgba(255,255,255,0.08)
*/

const CATEGORIES = [
  { key: "blockchain",     color: "#22d3ee", text: "Blockchain" },
  { key: "program",        color: "#fde047", text: "Programm" },
  { key: "smart-contract", color: "#3b82f6", text: "Smart Contract" },
  { key: "backend",        color: "#f97316", text: "Web3 & Backend" },
  { key: "ai",             color: "#f43f5e", text: "AI Technology" },
];

const DESKTOP_COLS = 12;
const MOBILE_COLS  = 3;

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggle = (key: string) =>
    setActiveCategory(prev => (prev === key ? null : key));

  return (
    <section style={{ background: "#05060f" }} className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* ── HEADING ── */}
        <h2
          className="
            font-manrope font-bold text-white leading-tight
            text-left lg:text-center
            text-[28px] sm:text-[36px] lg:text-[52px]
            mb-3
          "
        >
          Our Core Technologies &amp; Framework
        </h2>

        {/* ── SUBTITLE ── */}
        <p
          className="
            font-poppins text-white/50 leading-relaxed
            text-left lg:text-center
            text-[13px] sm:text-[14px] lg:text-[15px]
            max-w-[480px] lg:max-w-[500px] lg:mx-auto
            mb-8 lg:mb-12
          "
        >
          Our core technologies, frameworks, and expertise deliver reliable custom blockchain
          development services for businesses adapting to a fast-changing digital space.
        </p>

        {/* ── LEGEND ── */}
        <div className="flex flex-wrap gap-x-7 gap-y-3 lg:justify-center mb-8 lg:mb-10">
          {CATEGORIES.map(({ key, color, text }) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <span
                  className="w-[13px] h-[13px] rounded-sm flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span
                  className="font-manrope text-[13px] transition-colors duration-200"
                  style={{ color: isActive ? color : "rgba(255,255,255,0.45)" }}
                >
                  {text}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── GRID CARD ── */}
        <div
          className="rounded-2xl overflow-hidden w-full"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Desktop 12-col */}
          <div
            className="hidden lg:grid"
            style={{ gridTemplateColumns: `repeat(${DESKTOP_COLS}, 1fr)` }}
          >
            {technologies.map((tech, i) => (
              <Tile
                key={tech.id}
                tech={tech}
                index={i}
                cols={DESKTOP_COLS}
                total={technologies.length}
                dimmed={activeCategory !== null && tech.category !== activeCategory}
              />
            ))}
          </div>

          {/* Mobile 3-col */}
          <div
            className="grid lg:hidden"
            style={{ gridTemplateColumns: `repeat(${MOBILE_COLS}, 1fr)` }}
          >
            {technologies.map((tech, i) => (
              <Tile
                key={tech.id}
                tech={tech}
                index={i}
                cols={MOBILE_COLS}
                total={technologies.length}
                dimmed={activeCategory !== null && tech.category !== activeCategory}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────── TILE ─────────────────── */
type TechItem = {
  id: number;
  icon: string;
  label: string;
  bg: string;
  category: string;
};

function Tile({
  tech,
  index,
  cols,
  total,
  dimmed,
}: {
  tech: TechItem;
  index: number;
  cols: number;
  total: number;
  dimmed: boolean;
}) {
  const col       = index % cols;
  const row       = Math.floor(index / cols);
  const totalRows = Math.ceil(total / cols);
  const isLastCol = col === cols - 1;
  const isLastRow = row === totalRows - 1;

  return (
    <div
      className="flex flex-col items-center justify-center transition-opacity duration-300"
      style={{
        backgroundColor: tech.bg,
        aspectRatio: "1 / 1",
        opacity: dimmed ? 0.2 : 1,
        borderRight:  isLastCol ? "none" : "1px solid rgba(255,255,255,0.06)",
        borderBottom: isLastRow ? "none" : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <img
        src={tech.icon}
        alt={tech.label}
        style={{ width: 32, height: 32, objectFit: "contain", marginBottom: 8 }}
      />
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 10,
          color: "rgba(255,255,255,0.45)",
          textAlign: "center",
          lineHeight: 1.3,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {tech.label}
      </span>
    </div>
  );
}