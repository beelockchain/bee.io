"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import GradientGlowButton from "./GradientGlowButton";

const Topnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false); // Fix hydration
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  type menuItems = {
    name: string;
    href: string;
    image?: string;
    superscript?: string;
  };

  const menuItems: menuItems[] = [
      { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Insights", href: "#insights" },
    {
      name: "EVO AI Finder",
      href: "#evo",
      image: "/assets/images/evo-menu-item.png"
    },
  ];

  const serviceCategories = [
    { 
      name: "Blockchain", 
      icon: "/assets/images/bee-submenu-icon.png",
      services: [
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development"
      ]
    },
    { 
      name: "Blockchain", 
      icon: "/assets/images/bee-submenu-icon.png",
      services: [
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development"
      ]
    },
    { 
      name: "Blockchain", 
      icon: "/assets/images/bee-submenu-icon.png",
      services: [
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development"
      ]
    },
    { 
      name: "Blockchain", 
      icon: "/assets/images/bee-submenu-icon.png",
      services: [
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development"
      ]
    },
    { 
      name: "Blockchain", 
      icon: "/assets/images/bee-submenu-icon.png",
      services: [
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development",
        "Web3 App Development"
      ]
    }
  ];

  // Side menu items
  const sideMenuItems = [
    { 
      name: "About Us", 
      href: "#about",
      image: "/assets/images/side-menu-about.png"
    },
    { 
      name: "Our Portfolio", 
      href: "#portfolio",
      image: "/assets/images/side-menu-portfolio.png"
    },
    { 
      name: "Bees Career", 
      href: "#career",
      image: "/assets/images/side-menu-career.png"
    },
    { 
      name: "Pitch Deck", 
      href: "#pitch",
      image: "/assets/images/side-menu-pitch.png"
    },
    { 
      name: "Imprint", 
      href: "#imprint",
      image: "/assets/images/side-menu-import.png"
    }
  ];

  const currentServices = serviceCategories[activeServiceCategory]?.services || [];

  const handleMenuClick = (itemName: string) => {
    setActiveMenu(itemName);
    if (itemName === "Services") {
      setServicesOpen(true);
      setActiveServiceCategory(0); // Reset to first category
    } else {
      setServicesOpen(false);
    }
  };

  const handleMenuHover = (itemName: string) => {
    // Clear any pending timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }

    if (itemName === "Services") {
      setServicesOpen(true);
    } else {
      // Only hide if Services is not actively clicked
      if (activeMenu !== "Services") {
        setServicesOpen(false);
      }
    }
  };

  const handleNavMouseLeave = () => {
    // Only hide if Services is not the active menu
    if (activeMenu !== "Services") {
      dropdownTimeoutRef.current = setTimeout(() => {
        // Check if mouse is not in dropdown
        if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
          setServicesOpen(false);
        }
      }, 300);
    }
  };

  const handleDropdownMouseEnter = () => {
    // Clear timeout when entering dropdown
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    // Only hide if Services is not the active menu
    if (activeMenu !== "Services") {
      dropdownTimeoutRef.current = setTimeout(() => {
        // Check if mouse is not in nav
        if (navRef.current && !navRef.current.matches(':hover')) {
          setServicesOpen(false);
        }
      }, 200);
    }
  };

  const handleMobileServicesClick = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const toggleMobileCategory = (categoryName: string) => {
    setMobileActiveCategory(mobileActiveCategory === categoryName ? null : categoryName);
  };

  // Fix hydration and cleanup timeout
  useEffect(() => {
    setIsMounted(true);
    
    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current && 
        navRef.current &&
        !dropdownRef.current.contains(target) && 
        !navRef.current.contains(target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);


// Disable body scroll when side menu is open (without layout shake)
useEffect(() => {
  if (sideMenuOpen) {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`; // prevents shake
  } else {
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0px';
  }

  return () => {
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0px';
  };
}, [sideMenuOpen]);


  return (
    <header className="w-full relative z-50 bg-black mb-0">
      {/* NAV BAR */}
      <div className="flex justify-center px-2 md:px-0 lg:px-0 xl:px-0 py-4 lg:py-4 xl:py-4  border-1 border-[#1e3854]">
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
          <nav 
            ref={navRef} 
            onMouseLeave={handleNavMouseLeave}
            className="hidden lg:flex items-stretch bg-[#1C1E25] rounded-full px-0 py-0 border border-[#252528] 
                          absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                onMouseEnter={() => handleMenuHover(item.name)}
                className={` cursor-pointer font-Poppins
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
                    height={30}
                    className="pointer-events-none"
                  />
                ) : (
                  <>
                    {item.name}
                    {item.superscript && (
                      <sup className="text-xs ml-0.5 font-Poppins">{item.superscript}</sup>
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
            <span className="hidden sm:inline text-xl md:text-xl lg:text-[16px] xl:text-xl font-Poppins font-medium ml-5">Menu</span>
            <button
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
              className="flex items-center gap-2 text-white"
              aria-label="Toggle menu"
            >
              
              <Image
                src="/assets/images/menu-icon.png"
                alt="Menu"
                width={30}
                height={30}
                className="w-7 h-7 sm:w-6 sm:h-6 ml-5 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP SERVICES DROPDOWN */}
      <div
        ref={dropdownRef}
        className={`hidden lg:block absolute left-0 right-0 transition-all duration-300 ease-out
        ${servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <div className="flex justify-center px-4  pb-8">
          <div className="w-full max-w-[1400px] relative overflow-hidden
              bg-[#0d1117]
              border border-[#2a2f36]
              shadow-[0_0_60px_rgba(0,255,255,0.08)]
            ">
  
              {/* TOP CYAN HALF-CIRCLE GLOW */}
              <div className="absolute -top-50 left-1/2 -translate-x-[45%] w-[1200px] h-[450px]
                bg-[radial-gradient(circle_at_center,#198177_3%,rgba(17,105,97,0.55)_45%,rgba(17,105,97,0.25)_100%,rgba(17,105,97,0.08)_10%,transparent_10%)]
                blur-3xl opacity-100 pointer-events-none"
              />


              {/* LEFT DARK EDGE */}
              <div className="absolute top-0 bottom-0 left-0 w-[0px]
                bg-gradient-to-r from-[#11161b] via-[#11161bcc] to-transparent pointer-events-none"
              />

              {/* RIGHT DARK EDGE */}
              <div className="absolute top-0 bottom-0 right-0 w-[0px]
                bg-gradient-to-l from-[#11161b] via-[#11161bcc] to-transparent pointer-events-none"
              />

              {/* BOTTOM DARK EDGE */}
              <div className="absolute bottom-0 left-0 right-0 h-[0px]
                bg-gradient-to-t from-[#11161b] via-[#11161bcc] to-transparent pointer-events-none"
              />

            {/* Cyan glow at top */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
            
            <div className="p-8">
              {/* Services Header */}
            <div className="mb-6 lg:px-25 xl:px-50">
              <h3 className="md:text-xl lg:text-xl font-Poppins xl:text-2xl font-semibold text-white mb-1">Services</h3>

              <svg width="100" height="10" viewBox="0 0 120 12" fill="none">
                <path
                  d="M2 10 Q60 -2 118 10"
                  stroke="url(#grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="120" y2="0">
                    <stop offset="0%" stopColor="#20F8E6" stopOpacity="0.7" />
                    <stop offset="60%" stopColor="#20F8E6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#20F8E6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
              <div className="flex gap-6 lg:px-25 xl:px-50">
                {/* Left Side - Service Categories (Column 1) */}
                <div className="lg:w-48 xl:w-58 flex flex-col gap-4">
                    {serviceCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveServiceCategory(index)}
                        className={`
                          flex items-center cursor-pointer gap-3 px-2 py-1 rounded-lg transition-all duration-200
                        ${
                          activeServiceCategory === index
                            ? "bg-[#1a2b3a] border border-[#384045] text-transparent bg-clip-text bg-[linear-gradient(90deg,#00E6C3_0%,#00E6C3_70%,#FFFFFF_70%,#FFFFFF_100%)]"
                            : "bg-[#0f1821] border border-[#384045] text-gray-400 hover:bg-[#1a2b3a] hover:border-cyan-500/20 hover:text-gray-300"
                        }

                        `}
                      >
                        <img
                          src={category.icon}
                          alt={category.name}
                          className="w-10 h-10 object-cover"
                        />
                        <span
                        className={`
                          text-[12px] md:text-[13px] lg:text-[13px] xl:text-[15px] font-medium font-Poppins
                          ${
                            activeServiceCategory === index
                              ? "text-transparent bg-clip-text bg-[linear-gradient(90deg,#00E6C3_0%,#00E6C3_70%,#FFFFFF_70%,#FFFFFF_100%)]"
                              : "text-gray-400"
                          }
                        `}
                      >
                        {category.name}
                      </span>

                      </button>
                    ))}
                </div>

                {/* Middle - Arrow Icon (Column 2) - Moves with active category */}
                <div className="flex flex-col gap-3 px-4">
                  {serviceCategories.map((_, index) => (
                    <div 
                      key={index} 
                      className="h-[52px] flex items-center justify-center"
                    >
                      {activeServiceCategory === index && (
                        <img src='/assets/images/bee-submenu-arrow.png' alt="bee-submenu-arrow.png"/>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Side - Services Grid (2 Columns) */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 ">
                    {currentServices.map((service, index) => (
                      <div
                        key={index}
                        className="group relative xl:w-80 xl:px-10 py-4 hover:bg-[#053933] hover:border-cyan-500/30 transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center justify-center">
                         <span
                          className="
                            lg:text-[12px] xl:text-[15px]
                            text-gray-300
                            group-hover:text-transparent group-hover:bg-clip-text
                            group-hover:bg-[linear-gradient(90deg,#00E6C3_0%,#00E6C3_70%,#FFFFFF_80%,#FFFFFF_100%)]
                            transition-all duration-300 font-Poppins
                          "
                        >
                            {service}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - First Navbar */}
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
                    : "text-gray-400 hover:bg-[#252525] hover:text-white font-Poppins"
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

      {/* MOBILE MENU - Second Navbar (Services Menu) */}
      <div className="lg:hidden w-full bg-black">
        <nav className="bg-[#1a1a1a] rounded-none px-2 py-0 border-b border-[#252528]">
          <div className="flex items-stretch">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  if (item.name === "Services") {
                    handleMobileServicesClick();
                  } else {
                    setMobileServicesOpen(false);
                  }
                }}
                className={`
                  flex-1 relative rounded-3xl px-2 py-2 text-[10px] sm:text-xs font-medium transition-all duration-300 font-Poppins
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
                    height={20}
                    className="pointer-events-none mx-auto"
                  />
                ) : (
                  <>
                    <span className="block">{item.name}</span>
                    {item.superscript && (
                      <sup className="text-[8px] ml-0.5">{item.superscript}</sup>
                    )}
                  </>
                )}
                {activeMenu === item.name && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 sm:w-8 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Services Accordion */}
        {mobileServicesOpen && (
          <div className="bg-[#00020F] px-4 py-2">
            {serviceCategories.map((category, catIndex) => {
              const isOpen = mobileActiveCategory === category.name + catIndex;

              return (
                <div key={catIndex} className="mb-3 last:mb-0">

                  {/* ACCORDION HEADER */}
                  <button
                    onClick={() => toggleMobileCategory(category.name + catIndex)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 font-Poppins
                      text-left bg-[#00020F] hover:bg-[#1a2b3a] transition-all duration-200
                      rounded-lg
                      border-x border-t border-[#444444] 
                      ${isOpen ? "border-b-0" : "border-b border-[#444444]"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={category.icon}
                        alt={category.name}
                        className="w-10 h-10 object-cover"
                      />

                      <span
                        className={`
                          text-sm font-medium transition-all font-Poppins
                          ${
                            isOpen
                              ? "text-transparent bg-clip-text bg-[linear-gradient(90deg,#00E6C3_0%,#00E6C3_70%,#FFFFFF_70%,#FFFFFF_100%)]"
                              : "text-gray-300"
                          }
                        `}
                      >
                        {category.name}
                      </span>
                    </div>

                    {/* Arrow */}
                    <svg
                      className={`w-4 h-4 text-cyan-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* ACCORDION BODY */}
                  {isOpen && (
                    <div className="bg-[#00020F] overflow-hidden border-x border-b border-[#444444]">

                      {category.services.slice(0, 5).map((service, serviceIndex) => (
                        <button
                          key={serviceIndex}
                          className="
                            w-full px-8 py-3 text-center text-sm
                            text-[#fff]
                            hover:text-transparent
                            hover:bg-[#1a2b3a]
                            hover:bg-clip-text
                            hover:bg-[linear-gradient(90deg,#00E6C3_0%,#00E6C3_70%,#FFFFFF_70%,#FFFFFF_100%)]
                            transition-all duration-200 font-Poppins
                          "
                        >
                          {service}
                        </button>
                      ))}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* SIDE NAVIGATION MENU - DESKTOP (Half Width with right spacing) */}
      <div
        className={`
          hidden lg:block
          fixed top-21 h-full
          border-x border-b border-[#2B3037]
          z-[100]
          transition-all duration-500 ease-in-out
          ${sideMenuOpen ? 'right-[10%] w-[calc(50%-30px)]' : 'right-0 w-1/2 translate-x-full'}
        `}
      >
        {/* Greenish Glow at Top */}
      {/* BASE DARK */}
          <div className="absolute inset-0 bg-[#05070B]" />

          {/* RIGHT CYAN GLOW */}
          <div
            className="
              absolute top-4 right-4
              lg:w-[500px]
              xl:w-[1000px] h-[400px]
              pointer-events-none
              bg-[radial-gradient(circle_at_top_right,#127067_10%,rgba(18,112,103,0.65)_60%,rgba(18,112,103,0.25)_50%,transparent_100%)]
              blur-2xl
              opacity-90
            "
          />

          {/* LEFT GREEN-GRAY AMBIENT */}
          <div
            className="
              absolute top-0 left-0 bottom-0
              w-[420px]
              pointer-events-none
              bg-[radial-gradient(circle_at_left,#222427_0%,rgba(34,36,39,0.7)_40%,transparent_80%)]
              blur-2xl
              opacity-80
            "
          />

        
        {/* Content Container */}
        <div className="relative h-full flex flex-col p-5">
          
          {/* Close Button */}
          <button
            onClick={() => setSideMenuOpen(false)}
            className="absolute top-5 right-8 text-white hover:text-cyan-300 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="bg-black p-5 rounded-2xl mt-11">
                {/* Who We Are Header */}
            <div className="flex items-center gap-3 mb-8   pb-4">
              <img 
                src="/assets/images/side-menu-w-arrow.png" 
                alt="Return arrow"
                className="w-6 h-6"
              />
              <h2 className="lg:text-md xl:text-xl font-semibold text-white font-Poppins">Who We Are</h2>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col gap-4">
              {sideMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setSideMenuOpen(false)}
                  className="group flex items-center justify-between px-6 py-3 bg-black border-b border-cyan-500/20  hover:bg-[#0a1f1c] hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-10 rounded-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-Poppins font-bold text-[15px] text-gray-200 group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  
                 <span className="w-7" ><img src="/assets/images/side-menu-arrow.png" alt="side-menu-arrow" /></span>
                </a>
              ))}
            </nav>

            {/* Footer Links */}
            <div className="mt-8 text-center">
              <a href="#privacy" className="text-white font-Poppins font-bold hover:text-cyan-300 transition-colors text-sm">
                Privacy Policy
              </a>
              <span className="text-white font-bold mx-1">|</span>
              <a href="#terms" className="text-white font-Poppins font-bold hover:text-cyan-300 transition-colors text-sm">
                Terms & Conditions
              </a>
            </div>
            </div>
       
        </div>
      </div>

      {/* SIDE NAVIGATION MENU - MOBILE (Full Width) */}
      <div
        className={`
          lg:hidden
          fixed top-0 right-0 h-full w-full
          bg-black
          z-[100]
          transition-transform duration-500 ease-in-out
          ${sideMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Greenish Glow at Top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#00E6C3]/20 via-[#00E6C3]/5 to-transparent pointer-events-none" />
        
        {/* Content Container */}
        <div className="relative h-full flex flex-col p-6">
          
          {/* Close Button */}
          <button
            onClick={() => setSideMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-cyan-300 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Who We Are Header */}
          <div className="flex items-center gap-3 mb-6  pb-4 mt-2">
            <img 
              src="/assets/images/side-menu-w-arrow.png" 
              alt="Return arrow"
              className="w-5 h-5"
            />
            <h2 className="text-xl font-semibold text-white">Who We Are</h2>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-3">
            {sideMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setSideMenuOpen(false)}
                className="group flex items-center justify-between px-4 py-4 bg-black border-b border-cyan-500/20 rounded-lg hover:bg-[#0a1f1c] hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-20 h-8 rounded-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[15px] font-Poppins font-bold text-gray-200 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </span>
                </div>
                
               <span className="w-5 h-5"><img src="/assets/images/side-menu-arrow.png" alt="side-menu-arrow" /></span>
              </a>
            ))}
          </nav>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <a href="#privacy" className="text-white font-Poppins hover:text-cyan-300 transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-white mx-2">|</span>
            <a href="#terms" className="text-white font-Poppins hover:text-cyan-300 transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for side menu */}
      {sideMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50  z-[90]"
          onClick={() => setSideMenuOpen(false)}
        />
      )}

      {/* Overlay for closing dropdown */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => {
            setMenuOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Topnav;