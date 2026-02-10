'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface SpotlightCard {
  id: number;
  image: string;
  date: string;
  readTime: string;
  title: string;
}

const spotlightData: SpotlightCard[] = [
  {
    id: 1,
    image: '/assets/images/bee-article1.png',
    date: 'October 29, 2021',
    readTime: '4 min read',
    title: 'What is an NFT (Non-Fungible Tokens) and how you can buy one',
  },
  {
    id: 2,
    image: '/assets/images/bee-article2.png',
    date: 'October 30, 2021',
    readTime: '7 min read',
    title: '6 great crypto wallets you should try to keep your crypto assets secure',
  },
  {
    id: 3,
    image: '/assets/images/bee-article3.png',
    date: 'October 29, 2021',
    readTime: '4 min read',
    title: 'What is an NFT (Non-Fungible Tokens) and how you can buy one',
  },
];

const Spotlights = () => {
  return (
    <>
      {/* Inline styles for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="bg-[#00020f] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto  lg:p-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-12">
            <div className="mb-8 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
              {/* Spotlights Logo - Image tag for both mobile and desktop */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <img 
                  src="/assets/images/bee-spotlight.png" 
                  alt="Spotlights" 
                  className="h-8 w-auto"
                />
              </div>
              
              {/* Heading - centered on mobile, left-aligned on desktop */}
             <h2 className="text-[16px] font-manrope md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                <span className="text-white">
                    Shaping The Future,
                </span>{' '}
                <span className="text-[#b9babe]">
                    One Insight At A Time
                </span>
            </h2>

              
            </div>

            {/* Browse Articles Button - Hidden on mobile, shown on desktop */}
            <button className="hidden font-manrope md:text-[12px] md:block lg:block px-6 py-3 bg-[#090920] border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all duration-300 whitespace-nowrap">
              Browse articles
            </button>
          </div>

          {/* Mobile Carousel View - Shows current card + peek of next card */}
{/* Mobile Carousel View */}
<div className="md:hidden relative w-full">
  <div className="overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth w-full">
    <div className="flex gap-4 px-4">
      {spotlightData.map((card) => (
        <div
          key={card.id}
          className="flex-shrink-0 w-[80vw] snap-start"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg overflow-hidden border border-slate-800">
            
            {/* Card Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                priority={card.id === 1}
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-center font-manrope gap-4 text-gray-400 mb-4">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Calendar className="w-4 h-4" />
                  <span>{card.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <Clock className="w-4 h-4" />
                  <span>{card.readTime}</span>
                </div>
              </div>

              <h3 className="text-white text-[13px] font-manrope font-medium mb-4 leading-relaxed">
                {card.title}
              </h3>

              <button className="flex items-center gap-1 text-white hover:text-cyan-300 transition-colors duration-200 group">
                <span className="text-[13px] font-medium">Read more</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Mobile Browse Button */}
  <div className="flex justify-center mt-8 px-4">
    <button className="px-8 py-3 bg-transparent border font-manrope border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all duration-300">
      Browse articles
    </button>
  </div>
</div>


          {/* Desktop Grid View */}
          <div className="hidden md:grid lg:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {spotlightData.map((card) => (
              <div
                key={card.id}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
               <div className="relative md:h-38 h-48 overflow-hidden">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                />
                </div>


                {/* Card Content */}
                <div className="p-6">
                  {/* Date and Read Time */}
                  <div className="flex items-center font-manrope gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1.5 text-[8px] md:text-[10px] lg:text-[10px] xl:text-[15px]">
                      <Calendar className="w-4 h-4" />
                      <span>{card.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:text-[10px] lg:text-[10px] xl:text-[15px]">
                      <Clock className="w-4 h-4" />
                      <span>{card.readTime}</span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-white font-manrope text-[11px] md:text-[9px] lg:text-[10px] xl:text-[15px] font-manrope mb-4 leading-relaxed">
                    {card.title}
                  </h3>

                  {/* Read More Button */}
                  <button className="flex items-center gap-1 text-white hover:text-cyan-300 transition-colors duration-200 group">
                    <span className="text-[10px] md:text-[9px] lg:text-[10px] xl:text-[15px] font-manrope">Read more</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Spotlights;