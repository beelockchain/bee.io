const Shortidea = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[#00020F] bg-cover bg-center " 
            style={{ backgroundImage: "url('/Section.svg')" }}>

            {/* MOBILE LAYOUT */}
            <div className="md:hidden w-full min-h-screen flex flex-col justify-center items-center px-6 py-12 space-y-8">

                {/* Title */}
                <h2 className="text-xl text-white text-center leading-tight font-manrope">
                    Enter a short <span className="bg-gradient-to-r font-manrope from-[#00A4AF] to-[#01eeff] bg-clip-text text-transparent">idea</span> such as:
                </h2>

                {/* Arrow and Cards Container */}
                <div className="w-full relative flex justify-end items-start min-h-[300px]">

                    {/* Arrow Image - Right Side */}
                    <div className="absolute right-0 top-0">
                        <svg width="89" height="308" viewBox="0 0 89 308" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[70px] h-auto">
                            <g clipPath="url(#clip0_1060_3278)">
                                <path d="M87.7734 0.468754C56.8304 33.914 23.8455 63.8789 48.2801 212.219C61.1384 290.282 10.8371 309.196 0.520655 307.423L-90.709 307.423" stroke="url(#paint0_linear_1060_3278)" strokeWidth="0.934446" strokeDasharray="2.34 2.34" />
                                <path d="M87.7734 0.468754C56.831 15.132 42.3193 24.3121 54.3359 82.2839C61.7343 117.977 10.8387 135.823 0.522415 135.046" stroke="white" strokeWidth="0.934428" strokeDasharray="2.34 2.34" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1060_3278" x1="87.7734" y1="154.001" x2="0.520665" y2="154.001" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3ADCFF" />
                                    <stop offset="1" stopColor="#1BFFE1" />
                                </linearGradient>
                                <clipPath id="clip0_1060_3278">
                                    <rect width="308" height="88.2853" fill="white" transform="translate(88.2891 3.85907e-06) rotate(90)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    {/* Cards positioned to align with arrow curve */}
                    <div className="w-full flex flex-col items-center space-y-4 pt-20">

                        {/* Card 1 - Positioned at first curve */}
                        <div className="w-[180px] h-20 p-[2px] rounded-lg bg-gradient-to-r from-[#1BFFE1] to-black ml-4">
                            <div className="w-full h-full flex justify-center items-center px-4 py-3 rounded-lg backdrop-blur-sm bg-[#1BFFE1]/15">
                                <h2 className="text-white text-xs font-medium text-center leading-tight drop-shadow-md font-manrope">
                                    Decentralized marketplace for digital art
                                </h2>
                            </div>
                        </div>

                        {/* OR Text */}
                        <h2 className="text-xl text-white font-light self-center">or</h2>

                        {/* Card 2 - Positioned at end of arrow */}
                        <div className="w-[180px] h-20 p-[2px] rounded-lg bg-gradient-to-r from-[#1BFFE1] to-black ml-2">
                            <div className="w-full h-full flex justify-center items-center px-4 py-3 rounded-lg backdrop-blur-sm bg-[#1BFFE1]/15">
                                <h2 className="text-white text-xs font-medium text-center leading-tight drop-shadow-md font-manrope">
                                    A private blockchain for enterprise data verification.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D Image */}
                <div className="w-full flex justify-center my-8">
                    <img src="/assets/images/div.tabs-steps-content.svg" className="w-[180px] max-w-full h-60" alt="3D visualization" />
                </div>

                {/* Bottom Text Section */}
                <div className="space-y-4 text-left w-full ">
                    <p className="text-[14px] font-bold text-white leading-relaxed font-poppins">
                        EVO AI analyzes your input and delivers a full project insight
                    </p>
                    <h2 className=" font-poppins text-xl font-bold bg-gradient-to-b from-[#00A4AF] to-[#01eeff] bg-clip-text text-transparent leading-tight">
                        From one sentence → to complete project clarity.
                    </h2>
                    <p className="font-poppins text-[12px] font-bold text-white leading-relaxed">
                        Perfect for founders, enterprises, and teams validating their next big Web3 idea
                    </p>
                </div>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden md:flex w-[90%] max-w-7xl h-screen">

                {/* Left Section - 70% */}
                <div className="w-[70%] h-full flex flex-col justify-center items-start pr-12 space-y-10">

                    {/* Title */}
                    <h2 className="text-5xl text-white leading-tight">
                        Enter a short <span className="bg-gradient-to-r from-[#00A4AF] to-[#01eeff] bg-clip-text text-transparent">idea</span> such as:
                    </h2>

                    {/* Arrow and Cards Section */}
                    <div className="w-full space-y-8">

                        {/* Arrow Image */}
                        <div className="w-full">
                            <img src="/assets/images/image.svg" className="w-[500px]" alt="arrow" />
                        </div>

                        {/* Cards Container - Horizontal */}
                        <div className="w-full flex items-center gap-10 ml-20">

                            {/* Card 1 */}
                            <div className="w-60 h-20 p-[2px] rounded-lg bg-gradient-to-r from-[#1BFFE1] to-black flex-shrink-0">
                                <div className="w-full h-full flex justify-center items-center px-4 rounded-lg backdrop-blur-sm bg-[#1BFFE1]/15">
                                    <h2 className="text-white text-sm font-medium text-start leading-tight drop-shadow-md">
                                        Decentralized marketplace for digital art
                                    </h2>
                                </div>
                            </div>

                            {/* OR Text */}
                            <h2 className="text-2xl text-white font-light flex-shrink-0">OR</h2>

                            {/* Card 2 */}
                            <div className="w-60 h-20 p-[2px] rounded-lg bg-gradient-to-r from-[#1BFFE1] to-black flex-shrink-0">
                                <div className="w-full h-full flex justify-center items-center px-4 rounded-lg backdrop-blur-sm bg-[#1BFFE1]/15">
                                    <h2 className="text-white text-sm font-medium text-start leading-tight drop-shadow-md">
                                        A private blockchain for enterprise data verification.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Text Section */}
                    <div className="space-y-4 max-w-3xl">
                        <p className="text-md font-bold text-white">
                            EVO AI analyzes your input and delivers a full project insight
                        </p>
                        <h2 className="text-3xl font-bold bg-gradient-to-b from-[#00A4AF] to-[#01eeff] bg-clip-text text-transparent leading-tight">
                            From one sentence → to complete project clarity.
                        </h2>
                        <p className="text-lg font-bold text-white">
                            Perfect for founders, enterprises, and teams validating their next big Web3 idea
                        </p>
                    </div>
                </div>

                {/* Right Section - 30% */}
                <div className="w-[30%] h-full flex flex-col justify-center items-center">
                    <img src="/assets/images/div.tabs-steps-content.svg" className="w-80" alt="3D visualization" />
                </div>
            </div>
        </div>
    );
};

export default Shortidea;