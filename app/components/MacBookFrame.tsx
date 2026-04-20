// src/MacBookFrame.tsx
import React, { ReactNode } from 'react';
import { Wifi } from "lucide-react";

interface MacBookFrameProps {
  children: ReactNode;
}

export const MacBookFrame: React.FC<MacBookFrameProps> = ({ children }) => {
  return (
    <div
      className="lg:min-h-screen w-full h-full bg-black flex items-center justify-center p-2 sm:p-4 lg:p-8 overflow-x-hidden"
      style={{ scrollbarGutter: "stable" }}
    >
      <div className="origin-center w-full">
        {/* Space background */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(27,255,225,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.10),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_40%)]" />

        {/* Macbook body */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          {/* Outer bezel - Adaptive padding */}
          <div className="relative rounded-[12px] sm:rounded-[18px] lg:rounded-[24px] bg-[#0b0f15] p-[3px] sm:p-[4px] lg:p-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.65)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.65)] border border-white/10">
            {/* Inner bezel */}
            <div className="rounded-[10px] sm:rounded-[16px] lg:rounded-[20px] bg-black p-[2px] sm:p-[2px] lg:p-[3px] border border-white/10">
              {/* Screen */}
              <div className="relative rounded-[8px] sm:rounded-[12px] lg:rounded-[16px] overflow-hidden bg-gradient-to-br bg-black">
                {/* Top macOS menu bar - Fully Responsive */}
                <div className="h-7 sm:h-8 md:h-9 lg:h-10 w-full flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-6 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-white/70 bg-black/40 border-b border-white/10 backdrop-blur">
                  {/* Left side */}
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-6">
                    <img src='/assets/images/logo-ai-blu.svg' alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain"/>
                    <span className="font-semibold text-white/80 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]">Finder</span>
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]">File</span>
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]">Edit</span>
                    <span className="hidden lg:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">View</span>
                    <span className="hidden lg:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">Go</span>
                    <span className="hidden lg:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">Window</span>
                    <span className="hidden lg:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">Help</span>
                  </div>
                  
                  {/* Right side - Fully Responsive */}
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-5">
                  <span className="hidden md:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">Lunch.37m left</span>
                    {/* Wifi icon */}
                    <Wifi className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 opacity-100" />
                    
                    {/* Battery indicator */}
                    <div className="relative w-4 h-2 sm:w-5 sm:h-2.5 md:w-5.5 md:h-2.5 lg:w-6 lg:h-3 rounded-sm border border-white/60">
                      {/* Battery level */}
                      <div className="absolute inset-[1.5px] sm:inset-[2px] bg-white rounded-[1px]" />
                      {/* Battery cap */}
                      <div className="absolute -right-[1.5px] sm:-right-[2px] md:-right-[2.5px] lg:-right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] sm:w-[2px] h-1 sm:h-1.5 md:h-1.5 lg:h-2 bg-white/70 rounded-[1px]" />
                    </div>

                    {/* Date - hidden on mobile and small tablets */}
                    <span className="hidden md:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">Mon Jun 22</span>
                    
                    {/* Time - fully responsive */}
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">
                      <span className="md:hidden">9:41</span>
                      <span className="hidden md:inline">9:41 AM</span>
                    </span>
                  </div>
                </div>

                {/* Camera notch - Responsive */}
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 sm:w-20 sm:h-3.5 lg:w-28 lg:h-5 bg-black/85 rounded-b-lg border-x border-b border-white/10 z-50" />

                {/* Your app lives here */}
                <div className="px-1.5 sm:px-2 py-2 sm:py-3 lg:py-4 flex justify-center">
                  <div className="w-full max-w-[1100px]">
                    {children}
                  </div>
                </div>

                {/* Glass shine */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_35%)]" />
              </div>
            </div>
          </div>

          {/* Bottom base hint */}
          <div className="mx-auto mt-1.5 sm:mt-2 lg:mt-3 h-1 sm:h-1.5 lg:h-2 w-2/3 rounded-full bg-black/50 blur-[1px]" />
        </div>
      </div>
    </div>
  );
};