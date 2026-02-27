"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";/* ─────────────────────────────────────────────
   Social Pill (Desktop Only Inline)
───────────────────────────────────────────── */
const socialLinks = [
    { icon: faTelegram, url: "https://www.facebook.com/61585163291942", label: "Telegram" },
    { icon: faWhatsapp , url: "https://x.com/Beelockchain_io", label: "Whatsapp" },
    { icon: faEnvelope , url: "https://www.linkedin.com/company/beelockchain-io", label: "Envelope" },
  ];
/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="w-full bg-[#111111]">
      <div className="w-full xl:max-w-300 mx-auto px-5 md:px-10 xl:px-10 py-10 sm:flex md:flex md:items-center xl:flex xl:items-center">

        {/* LEFT CONTENT */}
        <div className="md:flex xl:flex flex-row  xl:flex-col">
          <div className="items-start flex-row sm:flex-col xl:flex xl:flex-col">
         <h1 className="text-sm md:text-[20px] lg:text-[30px] xl:text-[45px] font-manrope font-semibold text-[#E8E8E8] relative md:top-4 lg:top-6  xl:top-6.25 text-center sm:text-left md:text-left xl:text-center">
            AI Project Finder
          </h1>
           <img src="/assets/images/ai-finder-heading.png" alt="ai-finder-heading.png" className="sm:w-100 md:w-90 lg:w-120 xl:w-150" />
          </div>
        </div>

        {/* Spacer */}
        {/* <div className="flex-1" /> */}

        {/* RIGHT DESCRIPTION */}
        <div className=" w-full sm:max-w-80 md:max-w-80 lg:max-w-99 xl:max-w-120 text-center pt-5 xl:pt-0 md:text-right xl:text-right md:pl-8 lg:pl-15 xl:pl-15">
          <p className="text-[12px] xl:text-[16px] xl:leading-relaxed text-[#ffffff] font-manrope sm:px-4 md:px-0">
            <span className="text-teal-400 font-semibold">
              EVO AI
            </span>{" "}
            Project Finder by Beelockchainio instantly maps your concept
            to the right blockchain and AI solutions, helping you validate
            concepts, reduce uncertainty, and move forward with confidence.
          </p>
        </div>

        {/* SOCIAL PILL */}
        <div className="md:hidden">
                {/* Social Icons (normal scroll) */}
      <div className="fixed md:right-10 lg:right-5 xl:right-10 top-[40%] -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-6">
        <div
          className="
            flex flex-col items-center gap-6
            px-5 py-6
            rounded-[42px]
            bg-linear-to-b from-[#192c3d]/90 to-[#0E111D]/95
            backdrop-blur-md
            border-1 border-white/20
          "
        >

          <div className="flex flex-col gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-5 h-5 flex items-center justify-center rounded-xl text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={social.icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}