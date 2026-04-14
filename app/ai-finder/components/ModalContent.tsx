'use client';

import { X } from 'lucide-react';

interface ModalContentProps {
  title: string;
  content: string;
  onClose: () => void;
}


/* ─────────────────────────────────────────────
   SHARED WRAPPER — Updated Glass Background
───────────────────────────────────────────── */
const ModalWrapper = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
    onClick={onClose}
  >
    <div
      className="relative flex flex-col isolate"
      style={{
        width: '1200px',
        maxWidth: '96vw',
        height: '550px',

        /* 🎨 EXACT COLOR SYSTEM */
        background: `
          radial-gradient(
            circle at 50% -15%,
            #10675E 0%,
            #073731 35%,
            transparent 70%
          ),
          rgba(30,34,36,0.7)
        `,

        backdropFilter: 'blur(50px)',
        WebkitBackdropFilter: 'blur(50px)',

        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.12)',

        boxShadow: `
          0 10px 40px rgba(0,0,0,0.6),
          inset 0 1px 0 rgba(255,255,255,0.06)
        `,

        overflow: 'hidden',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* subtle top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10675E] to-transparent opacity-70 pointer-events-none" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 flex items-center justify-center transition-all duration-200"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: '#ffffff',
          border: '1px solid rgba(255,255,255,0.18)',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            'rgba(255,255,255,0.85)')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            '#ffffff')
        }
      >
        <X size={16} color="#000000" strokeWidth={3} />
      </button>

      {/* Scrollable inner */}
      <div
        className="relative z-10 flex-1 overflow-y-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(16,103,94,0.4) transparent',
        }}
      >
        {children}
      </div>
    </div>
  </div>
);


/* ═══════════════════════════════════════════════
   MODAL 1 — "What Is AI Project Finder?"
   Layout: centred title + prose paragraphs + dash-list
═══════════════════════════════════════════════ */
const WhatModal = ({ onClose }: { onClose: () => void }) => (
  <ModalWrapper onClose={onClose}>
    <div className='px-5 py-15 sm:px-25 sm:py-24 md:px-15 md:py-20 lg:px-25 lg:py-24 xl:px-25 xl:py-17'>

      {/* ── Title ── */}
      <h2
        className="
          text-center
           text-[20px]
           sm:text-[25px]
          md:text-[30px]
          font-bold
          leading-[1.3]
          mb-[36px]
          bg-gradient-to-r from-white via-white to-[#4fffc8]
          bg-clip-text
          text-transparent
          tracking-[-0.3px]
          z-[100]
          font-[Poppins]
        "
      >
        What Is AI Project Finder?
      </h2>

      {/* ── Body ¶1 ── */}
      <p
        className="
          text-[11px]
          md:text-[12px]
          xl:text-[14px]
          leading-[1.9]
          text-white/70
          mb-[28px]
          font-normal
          font-poppins
        "
      >
        AI Project Finder is an AI-powered idea analysis and project discovery platform aimed to simplify
        the early-stage project planning by converting even a single-line idea into a clear, structured,
        and actionable software solution. Acting as an advanced software development solution finder, it
        analyzes your concept using EVO AI and transforms it into detailed solution insights, feature
        definitions, and recommended workflows.
      </p>

      {/* ── Dash-list block ── */}
      <div style={{ marginBottom: '28px' }}>
        <p className="text-[11px] md:text-[12px]  xl:text-[14px] leading-loose text-white/70 mb-0.5 font-poppins">
          This enables founders, startups, and enterprises to clearly understand,
        </p>
        {[
          'what the product should deliver',
          'how it should function',
          'which technical direction best supports their business goals.',
        ].map((item) => (
          <p
            key={item}
            className="text-[11px] md:text-[12px]  xl:text-[14px] leading-[1.95] text-white/70 font-poppins"
          >
            - {item}
          </p>
        ))}
      </div>

      {/* ── Body ¶2 ── */}
<p className="text-[11px] md:text-[12px]  xl:text-[14px] leading-[1.9] text-white/70 font-normal font-poppins">
        As a powerful AI project idea generator, AI Project Finder removes uncertainty from early-stage
        planning by validating ideas and outlining strategic next steps before development begins. It
        provides clarity at the ideation stage, it saves time, reduces costs, and ensures every project
        starts with a strong, well-defined foundation and a confident path forward.
      </p>
    </div>
  </ModalWrapper>
);


/* ═══════════════════════════════════════════════
   MODAL 2 — "How EVO AI Project Finder Works"
   Layout: centred title → CAPS tagline → step blocks
═══════════════════════════════════════════════ */
interface StepBlockProps {
  stepLabel: string;
  title: string;
  subtitle: string;
  body: string;
  bullets?: string[];
  nextpoint:string;
}

const StepBlock = ({ stepLabel, title, subtitle, body, bullets,nextpoint }: StepBlockProps) => (
  <div style={{ marginBottom: '36px' }}>

    {/* Step label + title row */}
  <div className="flex items-center gap-2.5 mb-2.5">
    
    <span className="w-2 h-2 rounded-full bg-[#2dd4bf] shrink-0" />

    <h3 className="text-[13px] md:text-[14px] xl:text-[16px] font-bold text-[#2dd4bf] tracking-[-0.1px] m-0 font-manrope">
      {stepLabel}: {title}
    </h3>

  </div>
    {/* Subtitle */}
    <p className="text-[12.5px] md:text-[12px] xl:text-[15px] font-semibold text-white/90 mb-2.5 pl-4.5 font-manrope">
      {subtitle}
    </p>

    {/* Body */}
    <p
      className={`
        text-[11px]
        md:text-[12px]
        xl:text-[14px]
        leading-[1.82]
        text-white/60
        pl-4.5
        whitespace-pre-line
        font-manrope
        ${bullets ? "mb-2.5" : "mb-0"}
      `}
    >
      {body}
    </p>

    {/* Bullets */}
    {bullets && (
    <ul className="pl-[26px] m-0">
      {bullets.map((b) => (
        <li
          key={b}
          className="list-none text-[11px] md:text-[12px] xl:text-[14px] leading-[1.82] text-white/60"
        >
          · {b}
        </li>
      ))}
    </ul>
    )}
        <p
      className={`
        text-[11px]
        md:text-[12px]
        xl:text-[14px]
        leading-[1.82]
        text-white/60
        pl-4.5
        whitespace-pre-line
        font-manrope
        ${bullets ? "mb-2.5" : "mb-0"}
      `}
    >
      {nextpoint}
    </p>
  </div>
);

const HowModal = ({ onClose }: { onClose: () => void }) => (
  <ModalWrapper onClose={onClose}>
    <div className='px-5 py-15 sm:px-25 sm:py-24 md:px-15 md:py-20 lg:px-25 lg:py-24 xl:px-25 xl:py-17'>

{/* ── CAPS tagline ── */}
<p className="text-[15px] md:text-[18px] font-extrabold uppercase tracking-[0.5px] leading-[1.45] mb-10 text-white font-poppins text-center">
  FROM IDEA TO →
  <span className="text-white"> SOLUTION → PROJECT OVERVIEW IN </span>
  <span className="text-[#2dd4bf]">SECONDS.</span>
</p>

      {/* ── Steps ── */}
      <StepBlock
        stepLabel="Step 1"
        title="Share Your Initial Idea"
        subtitle="No technical knowledge required. Just your starting point."
        body={`Begin by entering a simple one-line description — a vision, challenge, or concept.\nThis can be an early-stage idea, a business problem, or a rough direction related to blockchain solutions.\n\nEVO AI uses this as a foundation - not a conclusion.`}
        nextpoint=""
      />

      <StepBlock
        stepLabel="Step 2"
        title="EVO AI Asks the Right Questions"
        subtitle="No assumptions. Only guided clarity."
        body="Based on your input, EVO AI dynamically asks follow-up questions to understand:"
        bullets={[
          'Your industry and target users',
          'Core use-case and objectives',
          'Budget range and scalability expectations',
          'Preferred tech stack or any constraints',
        ]}
        nextpoint="This interactive process ensures the idea is fully understood, not guessed."
      />

      <StepBlock
          stepLabel="Step 3"
          title="EVO AI Analyzes & Structures the Vision"
          subtitle="No confusion. Just intelligent alignment."
          body="Once enough information is gathered, EVO AI processes the complete context using models trained in:"
          bullets={[
            'Blockchain architecture and protocols',
            'Smart contract development',
            'Web3 application frameworks',
            'Enterprise blockchain solutions',
          ]}
          nextpoint="Your idea is then mapped to the most suitable technologies and development approach."
      />

      <StepBlock
        stepLabel="Step 4"
        title="You Receive a Clear Project Overview"
        subtitle="No planning gaps. Just a complete blueprint."
        body="EVO AI delivers a comprehensive text-based project overview, including:"
         bullets={[
            'Clear solution definition',
            'Recommended blockchain architecture',
            'Suitable networks, tools, and protocols',
            'Development roadmap and logical next steps',
            'From here, users can explore deeper insights or continue directly to the relevant Blockchain Development Services pages      '
          ]}
          nextpoint=""
      />
    </div>
  </ModalWrapper>
);


/* ═══════════════════════════════════════════════
   MODAL 3 — "Why Use AI Project Finder"
   Layout: intro text → 2-column reason cards grid
═══════════════════════════════════════════════ */
interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
  tealTitle?: boolean;
}

const ReasonCard = ({ number, title, description, tealTitle }: ReasonCardProps) => (
<div className="bg-white/2.5 border border-[#3ADCFF] rounded-xl pt-5.5 px-6 pb-6">
  
  <h4
    className={`
      text-[14px]
      md:text-[14px]
      xl:text-[16px]
      font-bold
      tracking-[-0.1px]
      mb-3
      ${tealTitle ? "text-white" : "text-white/90"}
    `}
  >
    {number}. {title}
  </h4>

  <p className=" text-[11px] md:text-[12px]
      xl:text-[14px] leading-loose text-white/55 m-0">
    {description}
  </p>

</div>
);

const REASONS: ReasonCardProps[] = [
  {
    number: 1,
    title: 'From Idea to Clarity – Instantly',
    description:
      'Users often start with just a single line of thought. EVO AI transforms that input into a structured project overview, identifying the right blockchain development, Web3 architecture, and solution approach within seconds.',
  },
  {
    number: 2,
    title: 'Built for Non-Technical & Technical Users',
    description:
      "Whether you're a founder, enterprise leader, or product team, AI Project Finder eliminates the need for deep technical knowledge. It bridges the gap between business vision and blockchain development.",
  },
  {
    number: 3,
    title: 'Smarter Decisions',
    description:
      'By analyzing use case, industry, scalability needs, and complexity, EVO AI helps avoid costly missteps early in the process — before development begins.',
  },
  {
    number: 4,
    title: 'Time-to-Market',
    description:
      'What typically takes days or weeks with traditional blockchain consulting is delivered instantly — accelerating your development lifecycle and planning phase.',
  },
  {
    number: 5,
    title: 'Tailored, Not Template-Based',
    description:
      'Unlike white-label or generic recommendations, EVO AI generates custom project insights, aligning technologies, workflows, and next steps specifically to your idea.',
  },
  {
    number: 6,
    title: 'Foundation for Scalable Development',
    description:
      'The output becomes a ready reference for blockchain development services, smart contract development, dApp development, and enterprise-grade execution.',
    tealTitle: true,
  },
];

const WhyModal = ({ onClose }: { onClose: () => void }) => (
  <ModalWrapper onClose={onClose}>
<div className="px-5 py-[60px] sm:px-[100px] sm:py-[96px] md:px-[60px] md:py-[80px] lg:px-[100px] lg:py-[96px] xl:px-[100px] xl:py-[96px]">

  {/* ── Intro paragraph ── */}
  <p className="text-[11px] md:text-[12px]  xl:text-[14px] leading-[1.9] text-white/60 mb-[36px]">
    Turning an idea into a successful blockchain product usually requires weeks of consultations,
    technical discussions, and documentation. AI Project Finder by EVO AI removes that friction.
  </p>

  {/* ── 2-column reason cards ── */}
  <div className="grid md:grid-cols-2 gap-4.5">
    {REASONS.map((r) => (
      <ReasonCard key={r.number} {...r} />
    ))}
  </div>

</div>
  </ModalWrapper>
);


/* ═══════════════════════════════════════════════
   ROOT EXPORT — routes to correct modal by title
═══════════════════════════════════════════════ */
const ModalContent = ({ title, content, onClose }: ModalContentProps) => {
  if (title === 'What Is AI Project Finder?') return <WhatModal onClose={onClose} />;
  if (title === 'How EVO AI Project Finder Works') return <HowModal onClose={onClose} />;
  if (title === 'Why Use AI Project Finder')      return <WhyModal onClose={onClose} />;
  return null;
};

export default ModalContent;