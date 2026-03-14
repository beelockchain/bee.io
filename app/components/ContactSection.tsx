import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#00020f] sm:px-5 md:px-5 md:py-16 lg:py-10 xl:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Desktop View - Gradient Box with Rounded Corners */}
        <div className="hidden sm:block md:block bg-linear-to-r  rounded-[15px] px-12 py-10 sm:py-5  md:py-5  lg:px-16 lg:py-8 xl:px-10 xl:py-6  relative overflow-hidden"
            style={{
                background: `
                linear-gradient(
                    135deg,
                    #2A7B8D 0%,
                    #2A7B8D 40%,
                    #46A3A8 60%,
                    #8DFFEF 100%
                )
                `,
            }}
            >
          <div className="flex items-center justify-between">
            <div className="max-w-3xl">
              <h2 className="text-white font-manrope text-4xl sm:text-[25px] md:text-[28px] lg:text-4xl xl:text-[55px] font-manrope font-bold mb-4 tracking-tight">
                We'd Love To Hear From You
              </h2>
              <p className="text-white font-manrope xl:max-w-xl text-base sm:text-[12px] md:text-[11px] lg:text-[14px] xl:text-[15px] opacity-90 leading-relaxed">
                Share your requirements with Beelockchain and connect with our technical experts to explore the best solution for your project.
              </p>
            </div>
            <div className="ml-8">
              <button className="bg-[#0a0e1a] font-manrope text-white px-8 py-3 rounded-full  font-medium text-base hover:bg-[#151b2b] transition-colors duration-300 whitespace-nowrap sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View - Full Gradient with Centered Content */}
        <div className="sm:hidden md:hidden font-manrope bg-gradient-to-br from-[#2a7b8d] via-[#2a7b8d] to-[#2a7b8d] px-7  py-10 text-left tracking-tight">
          <h2 className="text-white text-[25px] font-bold mb-4 text-center">
            We'd Love To Hear From You
          </h2>
          <p className="text-white text-[12px]  text-center opacity-90 leading-relaxed mb-8 font-manrope">
            Share your requirements with Beelockchain and connect with our technical experts to explore the best solution for your project.
          </p>
          <button className="bg-[#0a0e1a] font-manrope text-white px-8 py-3 rounded-full font-medium text-[13px] hover:bg-[#151b2b] transition-colors duration-300 w-full max-w-xs mx-auto block">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;