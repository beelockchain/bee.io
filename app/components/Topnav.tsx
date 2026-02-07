"use client";

import { useState } from "react";
import Image from "next/image";
import GradientGlowButton from "./GradientGlowButton";

const Topnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Services");
type menuItems = {
  name: string;
  href: string;
  image?: string;
  superscript?: string;
};

const menuItems: menuItems[] = [
  { name: "Services", href: "#services" },
  { name: "Insights", href: "#insights" },
  {
    name: "EVO AI Finder",
    href: "#evo",
    image: "/assets/images/evo-menu-item.png"
  },
  { name: "Contact Us", href: "#contact" }
];



  return (
    <header className="w-full relative z-50 bg-black mb-0">
      {/* NAV BAR */}
      <div className="flex justify-center px-2 md:px-0 lg:px-0 xl:px-0 py-4 lg:py-4 xl:py-4 border-1 border-[#1e3854]">
        <div className="w-full max-w-[1400px] px-4 lg:px-6 xl:px-10 flex justify-between items-center gap-4 lg:gap-8">

          {/* PART 1: LOGO */}
          <div className="flex-shrink-0">
            <img
              src="/assets/images/Group 10.svg"
              alt="Logo"
              className="w-20 sm:w-20 md:w-32 lg:w-26 xl:w-36"
            />
          </div>

          {/* PART 2: MENU ITEMS (DESKTOP ONLY) */}
          <nav className="hidden lg:flex items-stretch bg-[#1a1a1a] rounded-full px-0 py-0 border border-[#252528]
                          absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                className={`
                  relative px-5 py-2.5 rounded-full text-sm md:text-sm lg:text-[10px] xl:text-sm font-medium transition-all duration-300
                  ${
                    activeMenu === item.name
                      ? "bg-[radial-gradient(circle_at_50%_50%,#4b4c4e_0%,#4b4c4e_55%,rgba(255,255,255,0.10)_75%,rgba(255,255,255,0.04)_110%,#2b2c2e_110%)] text-cyan-300"
                      : "text-gray-400 hover:bg-[#252525] hover:text-white"
                  }
                `}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={4}
                    className="pointer-events-none"
                  />
                ) : (
                  <>
                    {item.name}
                    {item.superscript && (
                      <sup className="text-xs ml-0.5">{item.superscript}</sup>
                    )}
                  </>
                )}

                {activeMenu === item.name && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-6 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                )}
              </button>
            ))}
          </nav>


          {/* PART 3: CTA BUTTONS & MENU ICON */}
          <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <GradientGlowButton className="scale-90 sm:scale-95 md:scale-100 lg:scale-85">
              Get Started
            </GradientGlowButton>
            
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-white"
              aria-label="Toggle menu"
            >
              <span className="hidden sm:inline text-xl md:text-xl lg:text-[16px] xl:text-xl  font-medium ml-5">Menu</span>
              <Image
                src="/assets/images/menu-icon.png"
                alt="Menu"
                width={30}
                height={30}
                className="w-7 h-7 sm:w-6 sm:h-6 ml-5"
              />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute left-0 right-0 bg-[#1a1a1a] transition-all duration-300 ease-out border-t border-white/10
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <nav className="flex flex-col">
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveMenu(item.name);
                setMenuOpen(false);
              }}
              className={`
                px-6 py-4 text-left transition
                ${
                  activeMenu === item.name
                    ? "bg-[#2a2a2a] text-white"
                    : "text-gray-400 hover:bg-[#252525] hover:text-white"
                }
                ${index !== menuItems.length - 1 ? "border-b border-white/10" : ""}
              `}
            >
              {item.name}
              {item.superscript && (
                <sup className="text-xs ml-0.5">{item.superscript}</sup>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Topnav;
