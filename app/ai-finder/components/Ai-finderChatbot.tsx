'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, X, Menu, Mail } from 'lucide-react';
import ModalContent from "./ModalContent";
import EmailModal from "./EmailModal";

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ModalData {
  title: string;
  content: string;
}

const MODAL_DATA: Record<string, ModalData> = {
  'what': {
    title: 'What Is AI Project Finder?',
    content: 'AI Project Finder is an intelligent platform designed to help designers, developers, and product teams discover and generate AI-powered project ideas. Simply describe your concept and let EVO AI guide you through the possibilities.'
  },
  'how': {
    title: 'How EVO AI Project Finder Works',
    content: 'EVO AI Project Finder uses advanced language models to analyze your project description, understand the domain, and suggest tailored AI solutions, tech stacks, and implementation strategies — all in seconds.'
  },
  'why': {
    title: 'Why Use AI Project Finder',
    content: 'Save hours of research and brainstorming. EVO AI Project Finder accelerates ideation, surfaces relevant tools, and gives you a clear starting point — whether you\'re building a startup MVP or exploring new product directions.'
  }
};

const TABS = [
  { id: 'what', label: 'What Is AI Project Finder?', icon: '/assets/images/w-aifinder.png' },
  { id: 'how', label: 'How EVO AI Project Finder Works', icon: '/assets/images/H-aifinder.png' },
  { id: 'why', label: 'Why Use AI Project Finder', icon: '/assets/images/wh-aifinder.png' },
];

const TypingLoader = () => (
  <div className="flex gap-5 justify-start">
    <div className="max-w-3xl px-6 py-4 rounded-3xl bg-black/90 border border-white/10 text-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-[10px] font-bold text-black">
          AI
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.25s]" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.12s]" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  </div>
);

const FormattedMessage = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  const sections: (string | React.ReactNode)[] = [];
  let currentSection: string[] = [];
  let sectionCounter = 0;

  const renderInlineText = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1
        ? <span key={i} className="text-cyan-300 font-semibold">{part}</span>
        : <span key={i}>{part}</span>
    );
  };

  const flushSection = () => {
    if (currentSection.length > 0) {
      sections.push(currentSection.join('\n'));
      currentSection = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.match(/^[A-Z][A-Z\s&]+$/) && trimmed.length > 2 && !trimmed.match(/^\d/)) {
      flushSection();
      sections.push(
        <div key={`header-${sectionCounter++}`} className="mt-5 mb-1">
          <h3 className="text-cyan-300 font-bold text-xs tracking-widest uppercase">{trimmed}</h3>
          <div className="h-px bg-cyan-500/20 mt-1" />
        </div>
      );
    } else if (trimmed.match(/^\d+\./)) {
      flushSection();
      const dotIndex = trimmed.indexOf('.');
      const number = trimmed.substring(0, dotIndex);
      const text = trimmed.substring(dotIndex + 1).trim();
      sections.push(
        <div key={`num-${sectionCounter++}`} className="flex items-start gap-2 py-1 ml-2">
          <span className="text-cyan-400 font-bold text-xs mt-0.5 min-w-[16px]">{number}.</span>
          <span className="text-gray-200 text-sm leading-relaxed">{renderInlineText(text)}</span>
        </div>
      );
    } else if (trimmed.startsWith('•')) {
      flushSection();
      const bulletText = trimmed.substring(1).trim();
      sections.push(
        <div key={`bullet-${sectionCounter++}`} className="flex items-start gap-2 py-1 ml-2">
          <span className="text-cyan-400 mt-1.5 text-xs">●</span>
          <span className="text-gray-200 text-sm leading-relaxed">{renderInlineText(bulletText)}</span>
        </div>
      );
    } else if (trimmed.startsWith('-') && trimmed.length > 2 && trimmed[1] === ' ') {
      flushSection();
      const dashText = trimmed.substring(2).trim();
      sections.push(
        <div key={`dash-${sectionCounter++}`} className="flex items-start gap-2 py-1 ml-2">
          <span className="text-cyan-400 mt-1.5 text-xs">●</span>
          <span className="text-gray-200 text-sm leading-relaxed">{renderInlineText(dashText)}</span>
        </div>
      );
    } else if (!trimmed) {
      flushSection();
    } else {
      currentSection.push(line);
    }
  });

  flushSection();

  return (
    <div className="space-y-1 text-sm leading-relaxed">
      {sections.map((section, idx) => {
        if (typeof section === 'string') {
          return <p key={idx} className="text-gray-100 leading-relaxed">{renderInlineText(section)}</p>;
        }
        return section;
      })}
    </div>
  );
};

const AifinderChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);
  const [chatKey, setChatKey] = useState<number>(0);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isModelPopupOpen, setIsModelPopupOpen] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const desktopScrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const smoothScrollToBottom = (container: HTMLDivElement | null) => {
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    });
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const container = isMobile ? mobileScrollContainerRef.current : desktopScrollContainerRef.current;
    if (container) {
      const timeoutId = setTimeout(() => smoothScrollToBottom(container), 50);
      return () => clearTimeout(timeoutId);
    }
  }, [messages, isGenerating]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isGenerating]);

  // ── SEND EMAIL ────────────────────────────────────────────
  const sendEmail = async (email: string) => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientEmail: email,
        messages: messages.map((m) => ({
          type: m.type,
          content: m.content,
          timestamp: m.timestamp,
        })),
      }),
    });
    if (!res.ok) throw new Error('Failed to send email');
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput('');
    setIsGenerating(false);
    setChatKey(prev => prev + 1);
    setIsMobileSidebarOpen(false);
  };

  const handleSubmit = async (): Promise<void> => {
    if (!input.trim() || isGenerating) return;

    const userInput = input;
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: userInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    const startTime = Date.now();

    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput, conversationHistory }),
      });

      const data = await res.json();
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);
      await new Promise(resolve => setTimeout(resolve, remainingTime));

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: "ai",
        content: data.reply ?? "No response from AI",
        timestamp: new Date(),
      }]);
    } catch (error) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);
      await new Promise(resolve => setTimeout(resolve, remainingTime));
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: "ai",
        content: "Something went wrong. Please try again.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div
      className="w-full h-unset md:h-screen bg-cover bg-center bg-no-repeat flex flex-col md:justify-center"
      style={{ backgroundImage: "url('/assets/images/ai-projectfinder-bg.png')" }}
    >

      {/* ── EMAIL MODAL ── */}
      {showEmailModal && (
        <EmailModal
          onClose={() => setShowEmailModal(false)}
          onSend={sendEmail}
        />
      )}

      {/* ── MOBILE SIDEBAR ── */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isMobileSidebarOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileSidebarOpen(false)}
        />
        <div className={`
          absolute top-0 left-0 h-full w-[280px]
          bg-[#111] border-r border-white/10
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span className="text-white font-semibold font-manrope text-sm">EVO AI</span>
            <button onClick={() => setIsMobileSidebarOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="px-4 py-3 flex flex-col gap-2">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center gap-2 bg-[linear-gradient(to_right,#373737_20%,#202020_80%)] hover:border-cyan-500/40 border border-white/10 text-white text-xs font-manrope rounded-xl px-4 py-2.5 transition-all duration-200"
            >
              <span className="w-5 h-5 rounded-2xl bg-white flex justify-center items-center">
                <Plus size={14} className="text-black" />
              </span>
              New chat
            </button>

            {/* ── SEND TRANSCRIPT BUTTON — mobile sidebar ── */}
            {messages.length > 0 && (
              <button
                onClick={() => { setIsMobileSidebarOpen(false); setShowEmailModal(true); }}
                className="w-full flex items-center gap-2 border border-cyan-800/40 text-cyan-300 text-xs font-manrope rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-cyan-500/10"
              >
                <Mail size={14} />
                Send Transcript
              </button>
            )}
          </div>

          <div className="px-4 flex-1 overflow-y-auto">
            <div className="bg-[#1F1F1F] rounded-xl">
              <p className="text-gray-500 text-[10px] font-bold font-manrope p-3">About AI</p>
              <div className="flex flex-col gap-1 pb-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveModal(MODAL_DATA[tab.id]); setIsMobileSidebarOpen(false); }}
                    className="w-full text-left flex items-center gap-2 text-gray-300 hover:text-white text-[11px] font-manrope hover:bg-white/5 rounded-xl px-3 py-2.5 transition-all duration-200 leading-snug"
                  >
                    <img src={tab.icon} alt={tab.label} className="object-contain opacity-80 w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex w-full justify-center px-6 xl:p-0 h-[80vh] mt-5">
        <div className="flex bg-black/40 backdrop-blur-xl w-full max-w-6xl h-[75vh] rounded-3xl overflow-hidden shadow-[0_0_150px_30px_rgba(0,255,200,0.25),0_0_300px_40px_rgba(0,255,200,0.15)]">

          {/* LEFT PANEL */}
          <div className="w-[260px] flex-shrink-0 bg-black/60 border-r border-[#434343] flex flex-col">
            <div className="px-5 pt-4 pb-3">
              <div
                onClick={() => setIsModelPopupOpen(true)}
                className="flex items-center justify-between bg-[linear-gradient(to_right,#373737_20%,#202020_80%)] rounded-xl px-4 py-2.5 cursor-default select-none"
              >
                <span className="text-white md:text-[13px] lg:text-[14px] xl:text-sm font-semibold font-manrope">EVO AI</span>
                <img src="/assets/images/aifinderchatdropicon.png" alt="dropdown" />
              </div>
            </div>

            <div className="px-5 pb-4 flex flex-col gap-2">
              <button
                onClick={handleNewChat}
                className="w-full flex items-center gap-2 bg-[linear-gradient(to_right,#373737_20%,#202020_80%)] hover:border-cyan-500/40 border border-white/10 text-white text-xs font-manrope rounded-xl px-4 py-2.5 transition-all duration-200"
              >
                <span className="xl:w-5 xl:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-2xl bg-white flex justify-center items-center">
                  <Plus size={14} className="text-black" />
                </span>
                New chat
              </button>

              {/* ── SEND TRANSCRIPT BUTTON — desktop sidebar ── */}
              {messages.length > 0 && (
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="w-full flex items-center gap-2 border border-cyan-800/40 text-cyan-300 text-xs font-manrope rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-cyan-500/10"
                >
                  <Mail size={14} />
                  Send Transcript
                </button>
              )}
            </div>

            <div className="px-5 flex-1">
              <div className="bg-[#1F1F1F] rounded-xl">
                <p className="text-gray-500 text-[13px] font-bold tracking-widest font-manrope mb-2 p-3">About AI</p>
                <div className="flex flex-col gap-1">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveModal(MODAL_DATA[tab.id])}
                      className="w-full text-left flex items-center gap-2 text-gray-300 hover:text-white md:text-[11px] lg:text-[10px] xl:text-[11px] font-manrope hover:bg-white/5 rounded-xl px-3 py-2.5 transition-all duration-200 leading-snug"
                    >
                      <img src={tab.icon} alt={tab.label} className="object-contain opacity-80" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 flex flex-col" key={chatKey}>
            <div className="flex items-center justify-center gap-2 mt-5 px-6 ml-4">
              <img src="/assets/images/ai-finderchathead.png" className="lg:w-50 xl:pt-10" />
            </div>

            <div
              className="flex-1 overflow-y-auto scroll-smooth"
              ref={desktopScrollContainerRef}
              style={{ scrollBehavior: 'smooth' }}
            >
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-6 opacity-25">
                  <div className="relative md:max-w-80 lg:max-w-80 xl:max-w-90 w-full rounded-3xl bg-[rgba(24,25,26,0.55)] backdrop-blur-2xl border border-cyan-400/40 px-8 md:py-4 xl:py-5">
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.08),transparent_60%)] pointer-events-none" />
                    <p className="text-white text-left md:text-[13px] lg:text-[14px] xl:text-[15px] font-semibold mb-6 font-manrope">Examples:</p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4 text-gray-200 md:text-[11px] lg:text-[12px] xl:text-[14px] leading-relaxed font-manrope">
                        <span className="mt-2 w-2 h-2 rounded-full bg-cyan-300 shrink-0" />
                        <span>I want to create a crypto exchange</span>
                      </li>
                      <li className="flex items-start gap-4 text-gray-200 md:text-[11px] lg:text-[12px] xl:text-[14px] leading-relaxed font-manrope">
                        <span className="mt-2 w-2 h-2 rounded-full bg-cyan-300 shrink-0" />
                        <span>Blockchain-based supply chain platform</span>
                      </li>
                      <li className="flex items-start gap-4 text-gray-200 md:text-[11px] lg:text-[12px] xl:text-[14px] leading-relaxed font-manrope">
                        <span className="mt-2 w-2 h-2 rounded-full bg-cyan-300 shrink-0" />
                        <span>NFT game like Axie Infinity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`w-fit px-7 py-5 rounded-3xl max-w-2xl ${message.type === 'user' ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' : 'bg-black/90 text-gray-100'}`}>
                        {message.type === 'user' ? (
                          <p>{message.content}</p>
                        ) : (
                          <FormattedMessage content={message.content} />
                        )}
                      </div>
                    </div>
                  ))}
                  {isGenerating && <TypingLoader />}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            <div className="px-6 py-6 bg-black/20 backdrop-blur-sm">
              <div className="w-full flex justify-center">
                <div className="w-full max-w-3xl chat-glow">
                  <div className="flex items-center gap-4 bg-[#2c2c2c] rounded-full px-6 py-2 shadow-2xl">
                    <img src="/assets/images/Butterfly.gif" alt="icon" className="w-10 mix-blend-screen" />
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                      placeholder="Ask here what you want..."
                      className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-[13px] text-left"
                      disabled={isGenerating}
                    />
                    {/* ── MAIL ICON inside input bar ── */}
                    {messages.length > 0 && (
                      <button
                        onClick={() => setShowEmailModal(true)}
                        title="Send transcript"
                        className="text-gray-400 hover:text-cyan-400 transition-colors flex-shrink-0"
                      >
                        <Mail size={18} />
                      </button>
                    )}
                    <button
                      onClick={handleSubmit}
                      disabled={isGenerating}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 border-4 border-gray-500 hover:from-cyan-600 hover:to-teal-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-5 py-3 rounded-full shadow-lg shadow-cyan-500/25 flex items-center gap-1 transition-all"
                    >
                      <img src="/assets/images/aigenerate-icon.png" alt="" />
                      <span className="font-manrope md:text-[12px] lg:text-[12px] xl:text-[14px] font-bold">
                        {isGenerating ? 'Generating...' : 'Generate'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden flex flex-col h-[70vh]" key={`mobile-${chatKey}`}>

        <div className="flex items-center justify-between px-4 pt-5 pb-3 shrink-0">
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            <Menu size={18} />
          </button>

          <div
            onClick={() => setIsModelPopupOpen(true)}
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 cursor-pointer"
          >
            <span className="text-white text-xs font-semibold font-manrope">EVO AI</span>
            <img src="/assets/images/aifinderchatdropicon.png" alt="" className="w-3 h-3 object-contain" />
          </div>

          <button
            onClick={handleNewChat}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
          >
            <Plus size={18} className="text-white" />
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto scroll-smooth"
          ref={mobileScrollContainerRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-6 opacity-40">
              <div className="relative max-w-70 md:max-w-80 lg:max-w-80 xl:max-w-90 w-full rounded-3xl bg-[rgba(24,25,26,0.55)] backdrop-blur-2xl border border-cyan-400/40 py-5 sm:py-5 px-8 md:py-4 xl:py-5">
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.08),transparent_60%)] pointer-events-none" />
                <p className="text-white text-left text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-semibold mb-6 font-manrope">Examples:</p>
                <ul className="space-y-4 md:space-y-6 lg:space-y-6 xl:space-y-6">
                  <li className="flex items-start gap-2 text-gray-200 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] leading-relaxed font-manrope">
                    <span className="mt-1 md:mt-2 w-2 h-2 rounded-full bg-cyan-300 shrink-0" />
                    <span>I want to create a crypto exchange</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] leading-relaxed font-manrope">
                    <span className="mt-1 md:mt-2 w-2 h-2 rounded-full bg-cyan-300 shrink-0" />
                    <span>Blockchain-based supply chain platform</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] leading-relaxed font-manrope">
                    <span className="mt-1 md:mt-2 w-2 h-2 rounded-full bg-cyan-300 shrink-0" />
                    <span>NFT game like Axie Infinity</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="px-4 py-6 space-y-5">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.type === 'ai' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-[9px] font-bold text-black mr-2 flex-shrink-0 mt-1">
                      AI
                    </div>
                  )}
                  <div className={`
                    max-w-[78%] px-4 py-3 rounded-2xl text-sm font-manrope leading-relaxed
                    ${message.type === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-br-sm'
                      : 'bg-[#1e1e1e] border border-white/10 text-gray-100 rounded-bl-sm'
                    }
                  `}>
                    {message.type === 'user' ? (
                      <p>{message.content}</p>
                    ) : (
                      <FormattedMessage content={message.content} />
                    )}
                  </div>
                </div>
              ))}
              {isGenerating && (
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-[9px] font-bold text-black mr-2 flex-shrink-0 mt-1">
                    AI
                  </div>
                  <div className="bg-[#1e1e1e] border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.25s]" />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.12s]" />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="shrink-0 px-4 pb-6 pt-2 bg-black/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 bg-[#2c2c2c] rounded-full px-4 py-2.5 shadow-2xl mb-3 chat-glow">
            <img src="/assets/images/Butterfly.gif" alt="icon" className="w-7 mix-blend-screen flex-shrink-0" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Ask here what you want..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-[12px]"
              disabled={isGenerating}
            />
            {/* ── MAIL ICON inside mobile input bar ── */}
            {messages.length > 0 && (
              <button
                onClick={() => setShowEmailModal(true)}
                title="Send transcript"
                className="text-gray-400 hover:text-cyan-400 transition-colors flex-shrink-0"
              >
                <Mail size={16} />
              </button>
            )}
            <button
              onClick={handleSubmit}
              disabled={isGenerating}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 border-2 border-gray-500 hover:from-cyan-600 hover:to-teal-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-3 py-2 rounded-full shadow-lg shadow-cyan-500/25 flex items-center gap-1.5 transition-all flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </button>
          </div>

          <div className="flex gap-2 w-full justify-center overflow-x-auto scrollbar-hide pb-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveModal(MODAL_DATA[tab.id])}
                className="flex-shrink-0 flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white rounded-full px-3 py-2 text-[11px] font-manrope whitespace-nowrap transition-all duration-200"
              >
                <img src={tab.icon} className="w-3 h-3 opacity-80" />
                {tab.id === 'what' ? 'What is it?' : tab.id === 'how' ? 'How it works' : 'Why use it'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeModal && (
        <ModalContent
          title={activeModal.title}
          content={activeModal.content}
          onClose={() => setActiveModal(null)}
        />
      )}

    </div>
  );
};

export default AifinderChatbot;