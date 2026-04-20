"use client";

import React from "react";

type GradientGlowButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // ✅ add this
};

const GradientGlowButton = ({
  children,
  className = "",
  onClick, // ✅ receive it
}: GradientGlowButtonProps) => {
  return (
    <div
      className={`relative inline-flex rounded-full p-[1px] ${className}`}
    >
      {/* GRADIENT BORDER */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[linear-gradient(200deg,#3ADCFF_0%,#050514_70%)]
          [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
          [mask-composite:exclude]
        "
      />

      {/* TOP-RIGHT FADE SHADOW */}
      <div
        className="
          absolute
          -top-[3px] md:-top-[4px]
          -right-[6px] md:-right-[8px]
          w-[100%] md:w-[80%]
          h-full
          rounded-full
          bg-[linear-gradient(255deg,#3ADCFF_0%,rgba(58,220,255,0.35)_30%,transparent_60%)]
          blur-[6px] md:blur-[8px]
          opacity-90
          pointer-events-none
        "
      />

      {/* BUTTON */}
      <button
        onClick={onClick}  // ✅ attach here
        className="
          relative z-10
          px-7 py-3 md:px-8 md:py-2
          rounded-full
          bg-[#090920]
          border border-white/10
          text-[13px] md:text-[10px] xl:text-[15px] lg:text-[15px]
          text-white
          transition-all
          cursor-pointer
        "
      >
        {children}
      </button>
    </div>
  );
};

export default GradientGlowButton;
