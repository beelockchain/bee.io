"use client"
import React, { useState, useRef, useEffect } from 'react';

const RewardsSection: React.FC = () => {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const awards = [
    {
      id: 1,
      src: '/assets/images/beelock-reward1.png',
      alt: 'Clutch Top Company 2023',
    },
    {
      id: 2,
      src: '/assets/images/beelock-reward2.png',
      alt: 'GoodFirms Top Company',
    },
    {
      id: 3,
      src: '/assets/images/beelock-reward3.png',
      alt: 'Clutch Global 2023',
    },
    {
      id: 4,
      src: '/assets/images/beelock-reward4.png',
      alt: 'Top Mobile App Development',
    },
    {
      id: 5,
      src: '/assets/images/beelock-reward5.png',
      alt: 'GoodFirms Verified',
    },
  ];

  /**
   * MOBILE INFINITE LOOP SETUP
   */
  const loopAwards = [...awards, ...awards, ...awards];
  const [currentIndex, setCurrentIndex] = useState(awards.length);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset index silently when reaching cloned edges
  useEffect(() => {
    if (currentIndex >= awards.length * 2) {
      setTimeout(() => {
        setCurrentIndex(awards.length);
      }, 300);
    }

    if (currentIndex <= awards.length - 1) {
      setTimeout(() => {
        setCurrentIndex(awards.length * 2 - 1);
      }, 300);
    }
  }, [currentIndex, awards.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    carouselRef.current?.classList.add('cursor-grabbing');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX.current !== 0) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (touchStartX.current !== 0) {
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      touchStartX.current = 0;
      touchEndX.current = 0;
      carouselRef.current?.classList.remove('cursor-grabbing');
    }
  };

  // Transform calculation
  const getTransformValue = () => {
    const itemWidth = 100 / 3;
    return currentIndex * itemWidth;
  };

  return (
    <section className="relative w-full py-16 md:py-20  md:bg-[#00020F]  lg:bg-[#00020F]  xl:bg-[#00020F] overflow-hidden" 
    style={{
      background: `
        radial-gradient(
          120% 70% at 50% 100%,
          rgba(38, 215, 218, 0.35) 0%,
          rgba(8, 44, 56, 0.25) 50%,
          rgba(0, 2, 15, 0.85) 65%,
          #00020F 100%
        )
      `,
    }}
    >
      {/* Background gradient glow - Desktop only */}
<div className="hidden md:block absolute inset-0 overflow-hidden">

  {/* Base dark background */}
  <div className="absolute inset-0 bg-[#00020F]" />

  {/* Radial gradient glow */}
  <div
    className="absolute inset-0 opacity-90"
    style={{
      background: `
        radial-gradient(
          65% 55% at 50% 100%,
          #26D7DA 0%,
          #082C38 40%,
          #00020F 75%
        )
      `,
      filter: "blur(0px)"
    }}
  />
  {/* Soft intense glow core */}
  <div
    className="absolute left-1/2 -translate-x-1/2 bottom-[-140px]"
    style={{
      width: "900px",
      height: "420px",
      background: "radial-gradient(circle, #26D7DA 0%, transparent 70%)",
      filter: "blur(140px)",
      borderRadius: "9999px",
      opacity: 0.7
    }}
  />
</div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f0f1f6] text-center mb-12 md:mb-16 font-manrope">
          Rewards & Recognition
        </h2>

        {/* Desktop View - UNCHANGED */}
        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-1">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex-shrink-0 w-24 h-24   lg:w-50 lg:h-28  rounded-2xl  flex items-center justify-center "
            >
              <img
                src={award.src}
                alt={award.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Infinite Loop Carousel */}
        <div className="md:hidden relative">
          <div className="relative h-28 overflow-hidden " >

            {/* GLOBAL merged glow — spreads entire section */}
            <div className="absolute inset-0 pointer-events-none">

              {/* main atmospheric spread */}
              <div
                className="absolute inset-0"
              />

              {/* bottom glow */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-[-90px]"
                style={{
                  width: "420px",
                  height: "220px",
                }}
              />

              {/* left blend */}
              <div
                className="absolute left-[-120px] top-0 bottom-0 w-[260px]"
              />

              {/* right blend */}
              <div
                className="absolute right-[-120px] top-0 bottom-0 w-[260px]"

              />

              {/* top soft spread (removes hard line under heading) */}
              <div
                className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[420px] h-[200px]"
              />
            </div>

            {/* Carousel */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                ref={carouselRef}
                className="h-full px-8 cursor-grab"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div
                  className="flex h-full transition-transform duration-300 px-1 ease-out"
                  style={{
                    transform: `translateX(calc(-${getTransformValue()}% + 0px))`,
                
                  }}
                >
                  {loopAwards.map((award, index) => (
                    <div
                      key={`${award.id}-${index}`}
                      className="flex-shrink-0 flex items-center justify-center sm:rounded-2xl"
                      style={{ width: '33.333%' }}

                    >
                      <div
                        className={`w-50 h-20 sm:w-40 sm:h-40 rounded-2xl sm:rounded-2xl p-1 sm:p-6 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          Math.abs(index - currentIndex) <= 1
                            ? 'scale-100 opacity-100'
                            : 'scale-90 opacity-60'
                        }`}
                      >
                        <img
                          src={award.src}
                          alt={award.alt}
                          className="w-full h-full object-cover rounded-2xl sm:rounded-2xl"
                          draggable="false"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* edge fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16  pointer-events-none z-10"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
