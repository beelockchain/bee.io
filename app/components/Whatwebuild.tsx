const Whatwebuild = () => {
    return (
        <div className="w-full h-[320vh] bg-[#00020F] flex flex-col items-center" style={{
            backgroundImage: "url('/Group 1707480377.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
        }}>
            <h2 className="text-4xl mt-14 font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_28%,#FFFFFF_60%)]">
                What We Build</h2>
            <div className="w-full flex justify-center bg-[#00020F] py-10">
                <div className="relative w-[74%] max-w-7xl rounded-[28px] overflow-hidden
                bg-gradient-to-br from-[#0B0F1C] via-[#070A14] to-[#05070F]
                 border border-white/10">

                    {/* subtle noise */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

                    <div className="relative flex gap-12 px-12 py-14">

                        {/* LEFT SIDE */}
                        <div className="relative w-1/2">

                            {/* vertical glow line */}
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/0 via-cyan-400 to-cyan-400/0" />

                            {/* arrow icon */}
                            <div className="absolute -left-6 top-0 w-8 h-8 ml-2 rounded-full bg-cyan-400 flex flex-col items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00121A" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>

                            </div>

                            <h2 className="text-white text-2xl font-semibold mb-8 ml-6">
                                Blockchain Infrastructure
                            </h2>

                            <ul className="space-y-5 ml-6">
                                {[
                                    "Autonomous Smart Contracts",
                                    "AI-Secured Blockchains",
                                    "Token Development",
                                    "Wallet creation",
                                    "Smart contracts",
                                    "DeFi systems",
                                    "ICO/STO setups",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-white/80">
                                        <span className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2EF2E2" strokeWidth="3" >
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative w-1/2 flex items-center justify-center">

                            <img src="/Group 2 (1).svg" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-[#00020F] py-10">
                <div
                    className="relative w-[74%] max-w-7xl rounded-[32px] overflow-hidden
    bg-gradient-to-br from-[#0B0F1C] via-[#070A14] to-[#05070F]
    border border-white/10"
                >
                    {/* grain / noise */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]" />

                    <div className="relative flex items-start  px-14 py-16 gap-16">

                        {/* LEFT – Cards */}
                        <div className="relative w-1/2 flex justify-center">
                            <img src="/Group 2 (1).svg" />


                        </div>

                        {/* CENTER – Vertical line */}


                        {/* RIGHT – Content */}
                        <div className="w-1/2 flex justify-start items-start gap-5">
                            <div className="relative flex flex-col justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00121A" strokeWidth="2">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                                <div className=" h-[180px] w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400 to-transparent" />
                            </div>
                            <div>
                                <h2 className="text-white text-2xl font-semibold mb-8">
                                    AI-Driven Crypto Infrastructure
                                </h2>

                                <ul className="space-y-5">
                                    {[
                                        "Automated smart contract generation",
                                        "Automated Token model optimization",
                                        "AI trading bots",
                                        "Automated Compliance & KYC",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-4 text-white/80">
                                            <span className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2EF2E2" strokeWidth="3">
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-[#00020F] py-10">
                <div className="relative w-[74%] max-w-7xl rounded-[28px] overflow-hidden
    bg-gradient-to-br from-[#0B0F1C] via-[#070A14] to-[#05070F]
    border border-white/10">

                    {/* subtle noise */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

                    <div className="relative flex gap-12 px-12 py-14 justify-center items-center">

                        {/* LEFT SIDE */}
                        <div className="relative w-1/2 flex flex-col">

                            {/* vertical glow line */}
                            <span className="absolute left-0 top-0 h-48 w-[2px] bg-gradient-to-b from-cyan-400/0 via-cyan-400 to-cyan-400/0" />

                            {/* arrow icon */}
                            <div className="absolute -left-6 top-0 w-8 h-8 ml-2 rounded-full bg-cyan-400 flex flex-col items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00121A" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>

                            </div>

                            <h2 className="text-white text-2xl font-bold mb-8 ml-6">
                                Hyper-Reality Gaming (2D, 3D, VR)
                            </h2>

                            <ul className="space-y-5 ml-6">
                                {[
                                    "AI-Generated Game Worlds",
                                    "Real-Time Character Evolution",
                                    "Blockchain-Synced Game Assets",

                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-white/80">
                                        <span className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2EF2E2" strokeWidth="3" >
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative w-1/2 flex items-center justify-center">

                            <img src="/Group 1000005947.svg" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-[#00020F] py-10">
                <div
                    className="relative w-[74%] max-w-7xl rounded-[32px] overflow-hidden
    bg-gradient-to-br from-[#0B0F1C] via-[#070A14] to-[#05070F]
    border border-white/10"
                >
                    {/* grain / noise */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]" />

                    <div className="relative flex items-start  px-14 py-16 gap-16">

                        {/* LEFT – Cards */}
                        <div className="relative w-1/2 flex justify-center">
                            <img src="/Group 2 (1).svg" />


                        </div>

                        {/* CENTER – Vertical line */}


                        {/* RIGHT – Content */}
                        <div className="w-1/2 flex justify-start items-start gap-5">
                            <div className="relative flex flex-col justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00121A" strokeWidth="2">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                                <div className=" h-[240px] w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400 to-transparent" />
                            </div>
                            <div>
                                <h2 className="text-white text-2xl font-semibold mb-8">
                                    Digital Intelligence
                                </h2>

                                <ul className="space-y-5">
                                    {[
                                        "Metaverse environments",
                                        "AR/VR spaces powered by nano-AI",
                                        "NFT platforms",
                                        "GameFi mechanics",
                                        "Web3 apps",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-4 text-white/80">
                                            <span className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2EF2E2" strokeWidth="3">
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whatwebuild;