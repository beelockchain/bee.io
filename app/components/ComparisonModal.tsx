"use client";

interface ComparisonModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ComparisonModal({
  isOpen,
  setIsOpen,
}: ComparisonModalProps) {

  const rows = [
    {
      title: "Core Approach",
      left: "AI-first architecture — blockchain built around EVO AI intelligence.",
      right: "AI was added later as an optional feature, not integrated deeply.",
    },
    {
      title: "Project Ideation & Planning",
      left: "EVO AI generates fresh concepts, blueprints, user flows, tokenomics & technical structure instantly.",
      right: "Manual planning often relies on generic project outlines.",
    },
    {
      title: "Design & UI/UX",
      left: "AI-generated custom design, interactions & branding tailored uniquely for each project.",
      right: "White-label designs — change logo, colors, and theme only. Limited originality.",
    },
    {
      title: "Development Speed",
      left: "3x faster with AI-assisted coding, automated architecture mapping & testing.",
      right: "Traditional hand-coded development — slower and dependent on manpower.",
    },
    {
      title: "Smart Contract Accuracy",
      left: "AI-powered auditing, auto-debugging & error prediction ensure near-zero vulnerabilities.",
      right: "Manual auditing; error-prone and slower to catch security gaps.",
    },
    {
      title: "Security Layer",
      left: "AI-based threat detection, anomaly prediction & zero-trust validation.",
      right: "Standard security practices — reactive, not predictive.",
    },
    {
      title: "Customization",
      left: "100% original architecture, no reused scripts. Tailored for long-term growth.",
      right: "Recycled modules and reusable scripts handed to multiple clients.",
    },
    {
      title: "Execution Consistency",
      left: "EVO AI auto-monitors progress, optimizes workflows & ensures uniform quality.",
      right: "Human-dependent execution quality varies by developer.",
    },
    {
      title: "Time-to-Market",
      left: "Significantly faster launch due to AI automation across all stages.",
      right: "Slower delivery as every step is manual and sequential.",
    },
    {
      title: "Maintenance & Upgrades",
      left: "AI-driven diagnostics, predictive maintenance, and automated updates.",
      right: "Manual maintenance requires long cycles and developer availability.",
    },
    {
      title: "Cost Efficiency",
      left: "Reduced engineering hours and faster delivery → higher ROI.",
      right: "Higher long-term costs due to manual processes and slower iterations.",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-2 sm:px-4 mt-2 pt-4">
      {/* Modal Container */}
{/* Close Button */}
<button
  onClick={() => setIsOpen(false)}
  className="absolute top-0 lg:top-3 right-3 sm:top-4 sm:right-4 z-[60]
    bg-black/40 sm:bg-white/10
    hover:bg-white/20
    backdrop-blur-md
    border border-white/20
    rounded-full
    w-8 h-8 sm:w-9 sm:h-9
    flex items-center justify-center
    text-white hover:text-cyan-300
    text-lg sm:text-xl
    font-semibold
    transition-all duration-300"
  aria-label="Close modal"
>
  &times;
</button>


      
      <div
        className="relative w-full max-w-[1000px] h-[90vh] sm:h-[85vh] rounded-md overflow-hidden
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-2xl
        border border-white/20
        shadow-[0_0_80px_rgba(0,230,195,0.25)]
        flex flex-col"
      >
           {/* Close Button */}
       
        {/* Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-40 
          bg-gradient-to-b 
          from-[#00E6C3]/30 
          via-[#00E6C3]/10 
          to-transparent 
          pointer-events-none" 
        />

     

        {/* Scroll Area (Header + Rows share this) */}
        <div className="flex-1 overflow-auto relative z-10">

          {/* Shared Table Width */}
          <div className="min-w-[700px]">

            {/* HEADER */}
     <div
  className="sticky top-0 z-50
    bg-[#191B26] text-center lg:text-start
    grid gap-4 font-poppins text-xs sm:text-sm font-medium
    border-b border-white/10 py-4 px-4 sm:px-8"
  style={{ gridTemplateColumns: "0.9fr 1.7fr 1.7fr" }}
>

              <div className="text-zinc-300">Category</div>

              <div className="text-transparent bg-clip-text 
                bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_54%,#FFFFFF_60%)] leading-tight">
                Beelockchain (AI-Centric <br/> Blockchain Company)
              </div>

              <div className="text-zinc-300 leading-tight">
                Traditional Blockchain<br/> Development Companies
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={index}
                className="grid gap-4 text-[11px] sm:text-sm"
                style={{ gridTemplateColumns: "0.8fr 1.6fr 1.6fr" }}
              >
                <div className="p-4 text-transparent bg-clip-text
                  bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_15%,#FFFFFF_20%)] font-medium">
                  {row.title}
                </div>

                <div className="p-4 border-l border-cyan-500/10 text-cyan-300/90 leading-relaxed">
                  {row.left}
                </div>

                <div className="p-4 border-l border-cyan-500/10 text-gray-300/90 leading-relaxed">
                  {row.right}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
