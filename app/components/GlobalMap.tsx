'use client'
import React, { useState } from "react";
import { FC } from "react";

/* ================= TYPES ================= */
interface Location {
  id: number;
  country: string;
 Flag: FC;
  phone: string;
  email: string;
  top: string;
  left: string;
}

/* ================= DATA ================= */
const GermanyFlag: FC = () => (
  <svg viewBox="0 0 5 3" className="w-5 h-4">
    <rect width="5" height="1" y="0" fill="#000" />
    <rect width="5" height="1" y="1" fill="#DD0000" />
    <rect width="5" height="1" y="2" fill="#FFCE00" />
  </svg>
);
const UAEFlag: React.FC = () => (
  <svg viewBox="0 0 5 3" className="w-5 h-4">
    {/* Vertical red bar */}
    <rect width="1" height="3" x="0" y="0" fill="#FF0000" />

    {/* Horizontal stripes */}
    <rect width="4" height="1" x="1" y="0" fill="#00732F" />
    <rect width="4" height="1" x="1" y="1" fill="#FFFFFF" />
    <rect width="4" height="1" x="1" y="2" fill="#000000" />
  </svg>
);
const CanadaFlag: React.FC = () => (
  <svg viewBox="0 0 5 3" className="w-5 h-4">
    {/* Side bars */}
    <rect width="1" height="3" x="0" y="0" fill="#FF0000" />
    <rect width="1" height="3" x="4" y="0" fill="#FF0000" />

    {/* Center */}
    <rect width="3" height="3" x="1" y="0" fill="#FFFFFF" />

    {/* Simplified maple leaf */}
    <polygon
      fill="#FF0000"
      points="2.5,0.7 2.7,1.2 3.2,1.2 2.8,1.5
              3,2.1 2.5,1.8 2,2.1 2.2,1.5
              1.8,1.2 2.3,1.2"
    />
  </svg>
);

const IndiaFlag: React.FC = () => (
  <svg viewBox="0 0 5 3" className="w-5 h-4">
    <rect width="5" height="1" y="0" fill="#FF9933" />
    <rect width="5" height="1" y="1" fill="#FFFFFF" />
    <rect width="5" height="1" y="2" fill="#138808" />

    {/* Ashoka Chakra */}
    <circle cx="2.5" cy="1.5" r="0.35" fill="none" stroke="#000080" strokeWidth="0.08" />
  </svg>
);
const PhoneIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1843_4470)">
<path d="M19.1222 15.2391L15.2422 12.6391C14.7622 12.3191 14.0822 12.3991 13.7222 12.8791L12.6022 14.3191C12.4422 14.5191 12.2022 14.5591 12.0022 14.4391L11.7622 14.3191C11.0422 13.9191 10.1622 13.4391 8.36222 11.6391C6.56222 9.83911 6.08222 8.95911 5.68222 8.23911L5.56222 7.99911C5.44222 7.75911 5.48222 7.51911 5.68222 7.39911L7.12222 6.27911C7.56222 5.91911 7.72222 5.23911 7.36222 4.75911L4.80222 0.919109C4.48222 0.399109 3.80222 0.279109 3.28222 0.559109L1.68222 1.51911C1.12222 1.83911 0.762224 2.31911 0.602224 2.91911C0.00222448 5.03911 0.442224 8.71911 5.88222 14.1191C10.2022 18.4791 13.4022 19.6391 15.6022 19.6391C16.1222 19.6391 16.6022 19.5591 17.1222 19.4391C17.7222 19.2791 18.2022 18.8791 18.4822 18.3991L19.4422 16.7991C19.7622 16.2391 19.6022 15.5591 19.1222 15.2391ZM18.8822 16.3991L17.9222 17.9991C17.6822 18.3591 17.3222 18.6391 16.9622 18.7591C15.0022 19.3191 11.5222 18.8391 6.32222 13.6391C1.12222 8.43911 0.682224 5.03911 1.20222 3.07911C1.32222 2.67911 1.60222 2.31911 1.96222 2.11911L3.56222 1.15911C3.80222 1.03911 4.08222 1.07911 4.20222 1.31911L5.64222 3.39911L6.84223 5.15911C6.96222 5.39911 6.92222 5.67911 6.76222 5.79911L5.32222 6.91911C4.88222 7.23911 4.72222 7.83911 5.04222 8.35911L5.16222 8.59911C5.56222 9.35911 6.08222 10.2791 7.92222 12.1591C9.76222 14.0391 10.6822 14.5191 11.4822 14.9191L11.7222 15.0391C12.2022 15.2791 12.8022 15.1991 13.1622 14.7591L14.2822 13.3191C14.4422 13.1191 14.7222 13.0791 14.9222 13.2391L18.8022 15.8391C18.9622 15.9191 19.0422 16.1991 18.8822 16.3991Z" fill="white"/>
<path d="M11.2809 3.59898C14.2809 3.59898 16.7209 6.03898 16.7209 9.03898C16.7209 9.19898 16.8409 9.35898 17.0409 9.35898C17.2009 9.35898 17.3609 9.23898 17.3609 9.03898C17.3609 5.67898 14.6409 2.95898 11.2809 2.95898C11.1209 2.95898 10.9609 3.07898 10.9609 3.27898C11.0009 3.51898 11.0809 3.59898 11.2809 3.59898Z" fill="white"/>
<path d="M11.2809 5.51891C13.2009 5.51891 14.8009 7.11891 14.8009 9.03891C14.8009 9.19891 14.9209 9.35891 15.1209 9.35891C15.2809 9.35891 15.4409 9.23891 15.4409 9.03891C15.4409 6.75891 13.5609 4.87891 11.2809 4.87891C11.1209 4.87891 10.9609 4.99891 10.9609 5.19891C10.9609 5.39891 11.0809 5.51891 11.2809 5.51891Z" fill="white"/>
<path d="M11.2809 7.43883C12.1609 7.43883 12.8809 8.15883 12.8809 9.03883C12.8809 9.19883 13.0009 9.35883 13.2009 9.35883C13.3609 9.35883 13.5209 9.23883 13.5209 9.03883C13.5209 7.79883 12.5209 6.79883 11.2809 6.79883C11.1209 6.79883 10.9609 6.91883 10.9609 7.11883C10.9609 7.31883 11.0809 7.43883 11.2809 7.43883Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1843_4470">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

);
const EmailIcon: React.FC = () => (
 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.678438 18.9191C0.598438 18.9191 0.558438 18.8791 0.478438 18.8391C0.438438 18.7991 0.398438 18.7191 0.398438 18.6791V7.75906C0.398438 7.67906 0.438437 7.55906 0.518437 7.51906L3.43844 5.47906V3.31906C3.43844 3.15906 3.55844 3.07906 3.67844 3.07906H6.95844L9.79844 1.11906C9.83844 1.07906 9.87844 1.03906 9.95844 1.03906C10.0384 1.03906 10.0384 1.07906 10.1184 1.11906L12.9184 3.07906H16.2384C16.3984 3.07906 16.5184 3.19906 16.5184 3.31906V5.55906L19.3984 7.59906C19.4784 7.63906 19.4784 7.67906 19.4784 7.75906L19.5984 18.6791C19.5984 18.8391 19.4784 18.9591 19.3584 18.9591L0.678438 18.9191ZM1.47844 18.3591H18.4384L9.99844 11.7991L1.47844 18.3591ZM0.958438 18.1191L7.67844 12.9191L0.958438 8.27906V18.1191ZM12.3584 12.8791L19.0784 18.0791V8.27906L12.3584 12.8791ZM3.99844 9.75906L8.11844 12.5991L9.83844 11.2791C9.91844 11.2391 9.91844 11.1991 9.99844 11.1991C10.0784 11.1991 10.1184 11.2391 10.1584 11.2791L11.8784 12.5991L15.9984 9.71906V3.63906H3.99844V9.75906ZM1.15844 7.75906L3.43844 9.31906V6.15906L1.15844 7.75906ZM16.5184 9.31906L18.7584 7.75906L16.5184 6.19906V9.31906ZM7.95844 3.07906H11.9984L9.99844 1.67906L7.95844 3.07906ZM6.59844 9.23906C6.43844 9.23906 6.35844 9.11906 6.35844 8.99906C6.35844 8.83906 6.47844 8.71906 6.59844 8.71906H13.3984C13.5584 8.71906 13.6384 8.83906 13.6384 8.99906C13.6384 9.15906 13.5184 9.23906 13.3984 9.23906H6.59844ZM6.59844 6.59906C6.43844 6.59906 6.35844 6.47906 6.35844 6.31906C6.35844 6.15906 6.47844 6.07906 6.59844 6.07906H13.3984C13.5584 6.07906 13.6384 6.19906 13.6384 6.31906C13.6384 6.47906 13.5184 6.59906 13.3984 6.59906H6.59844Z" fill="white"/>
</svg>

);

const locations: Location[] = [
      {
    id: 1,
    country: "India",
    Flag: IndiaFlag,
    phone: "+91 98765 43210",
    email: "info@beetech.com",
    top: "53%",
    left: "61%",
  },
    {
    id: 2,
    country: "UAE",
    Flag: UAEFlag,
    phone: "+971 987 654 321",
    email: "info@beetech.com",
       top: "53%",
    left: "57%",
  },
 
  {
    id: 3,
    country: "Canada",
   Flag: CanadaFlag,
    phone: "+1 987 654 3210",
    email: "info@beetech.com",
    top: "34%",
    left: "28%",
  }, {
    id: 4,
    country: "Germany",
    Flag: GermanyFlag,
    phone: "+49 897 957654",
    email: "info@beetech.com",
       top: "32%",
    left: "49%"
  },

];

/* ================= COMPONENT ================= */
const GlobalMap: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#05070f] py-3 lg:py-2 xl:py-8 text-white">
      <h2 className="text-center text-[30px] md:text-[36px] lg:text-[40px]  font-semibold font-manrope">
        Global Presence
      </h2>

      {/* Map Wrapper */}
<div className="relative max-w-6xl mx-auto w-full">
    <div className="relative w-full aspect-[2/1]"> {/* adjust ratio to match your map */}

        {/* World Map */}
      <img
      src="/assets/images/map.png"
      alt="World Map"
      className="w-full h-full object-contain"
    />

        {/* Map Pins */}
        {locations.map((loc) => (
      <div
        key={loc.id}
        className="absolute"
        style={{ top: loc.top, left: loc.left }}
        onMouseEnter={() => setActive(loc.id)}
        onMouseLeave={() => setActive(null)}
      >
        <span className="block w-3.5 h-3.5 bg-cyan-400 rounded-full ring-4 ring-cyan-400/30 cursor-pointer" />

            {/* Tooltip */}
          {active === loc.id && (
  <div className="absolute left-1/2 -translate-x-1/2 top-6 z-20">
    {/* Tooltip box */}
    <div className="relative bg-[#65737e] text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px] 
    rounded-xl px-4 py-3 w-36 shadow-xl border border-blue-500">
      {/* Arrow */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
        border-l-8 border-r-8 border-b-8 
        border-l-transparent border-r-transparent border-b-blue-500">
      </div>

      {/* Inner arrow to match background */}
      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-0 h-0 
        border-l-6 border-r-6 border-b-6 
        border-l-transparent border-r-transparent border-b-[#65737e]">
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2 font-medium">
          <loc.Flag />
          <span>{loc.country}</span>
        </div>

        <div className="flex items-center gap-2 text-[10px]  text-cyan-400 underline">
          <PhoneIcon />
          <span>{loc.phone}</span>
        </div>

        <div className="flex items-center gap-2 text-[10px]  text-cyan-400 underline">
          <EmailIcon />
          <span>{loc.email}</span>
        </div>
      </div>
    </div>
  </div>
)}

          </div>
        ))}
        </div>

       {/* 🖥 Desktop cards OVER the map */}
<div className="hidden md:block absolute md:bottom-1 lg:bottom-20 left-4 right-4 z-10">
  {/* SINGLE CARD */}
  <div className="
    bg-white/5 
    backdrop-blur-xl 
    border border-white/10 
    rounded-xl 
    shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
    px-4 py-4
  ">
    
    <div className="grid grid-cols-4 gap-6">
      {locations.map((loc) => (
        <div key={loc.id}>
          <div className="space-y-1">
            
            {/* COUNTRY */}
            <div className="flex items-center gap-2 font-medium text-white">
              <loc.Flag />
              <span>{loc.country}</span>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-2 text-xs text-white/70">
              <PhoneIcon />
              <span>{loc.phone}</span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-2 text-xs text-white/70">
              <EmailIcon />
              <span>{loc.email}</span>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</div>



        {/* 📱 Mobile cards (below map) */}
<div className="block md:hidden mt-6 px-4">
  {/* SINGLE CARD */}
  <div className="bg-[#0b1220]/95 backdrop-blur rounded-xl px-4 py-4 shadow-lg">
    
    <div className="grid grid-cols-2 gap-4">
      {locations.map((loc) => (
        <div key={loc.id}>
          <div className="space-y-1">
            
            {/* COUNTRY */}
            <div className="flex items-center gap-2 font-medium">
              <loc.Flag />
              <span>{loc.country}</span>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-2 text-[10px] text-white/70">
              <PhoneIcon />
              <span>{loc.phone}</span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-2 text-[10px] text-white/70">
              <EmailIcon />
              <span>{loc.email}</span>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</div>


      </div>
    </section>
  );
};

export default GlobalMap;
