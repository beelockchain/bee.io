"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const TechTrendsMarquee = () => {
  return (
    <div className="w-full bg-[#00020F] h-20 sm:h-40 md:h-40 lg:h-60 flex justify-center items-center overflow-hidden">
      <Marquee className="flex " speed={50} direction="right">
        {[1, 2].map((_, i) => (
          <div key={i} className="flex items-center gap-10 mx-10 overflow-hidden">
            {/* <StarIcon /> */}

            <h2 className="text-2xl  sm:text-6xl  md:text-6xl
                lg:text-6xl font-extrabold tracking-widest
                text-transparent
                bg-clip-text
                [-webkit-text-fill-color:transparent]
                [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]
                bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%] 
                animate-gradient-move"
            >
              GENERATIVE AI
            </h2>
            <Image src="/assets/images/marqueeimg.png" alt="Plus Icon" height={200} width={144}  className=" w-16 h-16
            sm:w-16 sm:h-16
            md:w-18 md:h-18
            lg:w-20 lg:h-20
            xl:w-26 xl:h-26
            object-contain" />
            {/* 
            <StarIcon /> */}

             <h2 className="text-2xl  sm:text-6xl  md:text-6xl
                lg:text-6xl font-extrabold tracking-widest
                text-transparent
                bg-clip-text
                [-webkit-text-fill-color:transparent]
                [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]
                bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%] 
                animate-gradient-move"
            >
              TECH TRENDS
            </h2>
            <Image src="/assets/images/marqueeimg.png" alt="Plus Icon" height={200} width={204} className=" w-16 h-16
    sm:w-16 sm:h-16
    md:w-18 md:h-18
    lg:w-20 lg:h-20
    xl:w-26 xl:h-26
    object-contain" />
            {/* <StarIcon /> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechTrendsMarquee;
