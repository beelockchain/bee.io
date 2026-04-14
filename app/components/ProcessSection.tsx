import NavLabel from "./NavLable";

const ProcessSection = () => {
  return (
    <section className="w-full bg-black flex justify-center">
      <div
        className="relative w-[90%] max-w-7xl rounded-3xl
        bg-gradient-to-b from-[#0b0f1a] via-[#000000] to-[#085967]
        border border-white/10
        shadow-[0_0_80px_rgba(0,255,255,0.08)]
        px-10 py-16 flex flex-col items-center"
      >
        {/* TOP BADGE */}
        <div className="flex justify-center mb-6">
     


            {/* <h2 className="relative text-white font-semibold tracking-wide ">
                        Who we are
                    </h2> */}
            <NavLabel label="Simple process" />
        
        </div>

        {/* TITLE */}
        <h2 className="text-center text-2xl md:text-5xl font-semibold text-white leading-tight mb-12 md:w-[670px] font-manrope">
          Development Process EVO AI- Stepwise Process
        </h2>

        {/* VIDEO / IMAGE BLOCK */}
        <div className="relative w-full rounded-t-2xl overflow-hidden mb-10 hidden md:block">
          <img
            src="/assets/images/stepwise-bg.png" // replace with your image
            alt="Process visual"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 justify-start">
          {[
            "WEB3",
            "IT Services",
            "Tech Solutions",
            "Apps Mobile",
            "Program Development",
            "Blockchain",
            "Exchange",
            "Telecommunication",
            "Technology",
            "Finance Application",
            "SEO",
          ].map((tag, index) => (
            <span
              key={tag}
              className={`px-4 py-2 rounded-full text-sm text-[#085967]
              bg-white/5 border border-white/10 backdrop-blur
              ${index >= 3 ? 'hidden sm:inline-flex' : 'inline-flex'}`}
            >
              #<span className="text-white font-manrope">{tag}</span>
            </span>
          ))}
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "STEP 01",
              title: "Share Your Idea",
              desc: "Submit a short brief (1–2 paragraphs or a checklist): goal, industry, must-have features.",
            },
            {
              step: "STEP 02",
              title: "EVO AI Intake & Analysis",
              desc: " EVO AI parses requirements, identifies technical needs, and selects optimal architecture patterns.",
            },
            {
              step: "STEP 03",
              title: "Quick Review & Feedback",
              desc: "Short alignment call to confirm scope. EVO AI applies minor revisions within 24–48 hours.",
            },
            {
              step: "STEP 04",
              title: "Design & Prototype",
              desc: " EVO AI seeds wireframes and design variants; team finalizes clickable prototypes for early testing.",
            },
            {
              step: "STEP 05",
              title: "Development (AI-Assisted)",
              desc: "Engineers build smart contracts, backend & dApp with EVO AI scaffolding, code templates, and CI/CD presets",
            },
            {
              step: "STEP 06",
              title: "AI-Powered Testing & Security",
              desc: "Automated functional tests, load simulation and EVO AI predictive vulnerability checks; issues prioritized and fixed.",
            },
            
          ].map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl  xl:p-6 lg:p-6 p-5 overflow-hidden
     
              border border-white/10
              shadow-[0_20px_60px_rgba(0,180,180,0.15)]
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_30px_80px_rgba(0,255,255,0.25)]
              text-white"
            >
              {/* STEP BADGE */}
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-300">
                  {item.step}
                </span>
                <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center ml-2">
                  ↗
                </span>
              </div>

              <h3 className="xl:text-lg lg:text-lg md:text-[10px] font-semibold mb-2 font-manrope">{item.title}</h3>
              <p className="text-[14px] md:text-[9px] lg:text-lg xl:text-lg  text-white/70 leading-relaxed font-poppins">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default ProcessSection;