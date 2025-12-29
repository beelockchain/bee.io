import GradientGlowButton from "./GradientGlowButton";
import Topnav from "./Topnav";

const Hero = () => {
    return (
       <div
  className="w-full min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/images/Desktop - 4 (1).svg')",
  }}
>
  <Topnav />

  <div className="w-full flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-10">
    
    {/* Logo */}
    <img
      src="/assets/images/Group 2.svg"
      alt="Beelockchain Logo"
      className="w-36 sm:w-40 md:w-52 lg:w-60 mb-6"
      loading="lazy"
      fetchPriority="high" 
    />

    {/* Content */}
    <div className="max-w-3xl text-center space-y-3 z-10">
      
      <h1 className="text-white font-semibold
        text-xl sm:text-2xl md:text-4xl">
        World’s First AI-Centric Blockchain Development Company
      </h1>

      <p className="text-white opacity-90
        text-xs sm:text-sm md:text-base leading-relaxed">
        Beelockchain empowers businesses with intelligent, scalable,
        next-generation blockchain ecosystems. By fusing advanced Artificial
        Intelligence with future-ready Web3 Solutions, we deliver frictionless,
        secure, and high-performance blockchain solutions built for real-world
        impact.
      </p>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 pt-4">
        <GradientGlowButton className="text-xs sm:text-sm">
          Build Your Project
        </GradientGlowButton>

        <GradientGlowButton className="text-xs sm:text-sm">
          Explore the Techverse
        </GradientGlowButton>
      </div>
    </div>
  </div>
</div>

    );
}

export default Hero;