import React from 'react';

const IndustriesSection = () => {
  const industries = [
    { name: 'Education & E-Learning', image: '/assets/images/bee-industry-icon1.png' },
    { name: 'Logistics', image: '/assets/images/bee-industry-icon2.png' },
    { name: 'Supply Chain', image: '/assets/images/bee-industry-icon3.png' },
    { name: 'Healthcare', image: '/assets/images/bee-industry-icon4.png' },
    { name: 'Fitness & Wellness', image: '/assets/images/bee-industry-icon5.png' },
    { name: 'Fintech', image: '/assets/images/bee-industry-icon6.png' },
    { name: 'Banking', image: '/assets/images/bee-industry-icon7.png' },
    { name: 'Gaming & Entertainment', image: '/assets/images/bee-industry-icon8.png' },
    { name: 'Food & Beverages', image: '/assets/images/bee-industry-icon9.png' },
    { name: 'Cybersecurity', image: '/assets/images/bee-industry-icon10.png' },
  ];

  return (
    <section className="bg-[#00020f] py-16 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#b3b4b8] xl:px-10 font-manrope text-2xl sm:text-2xl md:text-[20px] lg:text-[25px]  xl:text-[40px] font-bold mb-4 leading-tight">
            Industries Beelockchain Serves Across Global Markets
          </h2>
          <p className="text-white text-[15px] sm:text-[15px] md:text-[10px] lg:text-[13px] xl:text-[20px]  md:px-45 lg:px-45 xl:px-30 mx-auto leading-relaxed">
            Beelockchain develops industry-specific blockchain solutions with next-gen features, delivering
            robust and future-proof platforms for all sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-5 xl:gap-5 sm:gap-2">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#3c3d47] to-[#13171f] rounded-2xl p-3 sm:p-8 md:p-3 lg:p-5 xl:p-5 flex flex-col items-center justify-center text-center hover:from-[#1f2535] hover:to-[#161b26] transition-all duration-300 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="w-16 h-16 xl:w-25 xl:h-25 sm:w-20 sm:h-20 md:w-15 md:h-15 rounded-full bg-gradient-to-br from-[#0f1419] to-[#1a1f2e] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-16 h-16 sm:w-16 sm:h-16 md:w-25 md:h-25 lg:w-25 lg:h-25 xl:w-25 xl:h-25 object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="text-white text-[10px] sm:text-[12px] md:text-[9px] lg:text-[10px] xl:text-[14px]  leading-snug font-manrope">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
