'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

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

const BlockchainChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

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
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);

      await new Promise(resolve => setTimeout(resolve, remainingTime));

      const aiMessage: Message = {
        id: Date.now() + 1,
        type: "ai",
        content: data.reply ?? "No response from AI",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);

      await new Promise(resolve => setTimeout(resolve, remainingTime));

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          content: "Something went wrong. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full bg-[#00020F] h-[100vh] md:flex md:flex-col md:justify-center">

      {/* 🔥 HERO SECTION */}
      <div className="text-center h-[20vh]">
        <h2 className="text-lg md:text-3xl text-white font-bold mb-2 font-manrope">
          AI PROJECT FINDER
        </h2>
        <p className="text-2xl md:text-4xl text-[#82888d] font-bold mb-3 font-manrope">
          Powered by EVO AI
        </p>
        <p className="text-sm md:text-base text-white font-bold font-manrope">
          Have only a one-line idea? Start here
        </p>
      </div>

      {/* 💬 CHAT CONTAINER */}
      <div className="w-full flex justify-center px-3 md:px-6 h-[80vh]">
        <div
          className="
            flex bg-black/40 backdrop-blur-xl
            w-full max-w-6xl
            h-[80vh]
            rounded-2xl md:rounded-3xl
            overflow-hidden
            shadow-[0_0_60px_-10px_rgba(58,220,255,0.6),0_0_100px_-30px_rgba(58,220,255,0.4)]
          "
        >
          {/* MAIN AREA */}
          <div className="flex-1 flex flex-col">

            {/* HEADER */}
            <h2 className="text-white text-sm md:text-md font-semibold mt-4 md:mt-5 px-6 md:ml-20 font-manrope">
              AI Project Finder
            </h2>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
                  <h2 className="text-white text-lg md:text-xl font-semibold mb-2 font-manrope">
                    Discover the Magic AI
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm max-w-md font-manrope">
                    Exclusively for designers, developers, product teams & magicians!
                  </p>
                </div>
              ) : (
                <div className="max-w-5xl mx-auto px-3 md:px-6 py-6 md:py-10 space-y-6 md:space-y-8">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user"
                          ? "justify-start md:justify-end"
                          : "justify-start"
                        }`}
                    >
                      <div
                        className={`
        w-fit
        px-5 md:px-7
        py-4 md:py-5
        rounded-2xl md:rounded-3xl
        ${message.type === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                            : "bg-black/90 text-gray-100"
                          }
      `}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isGenerating && <TypingLoader />}
                </div>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="px-3 md:px-6 py-4 md:py-6 bg-black/20 backdrop-blur-sm">
              <div className="w-full flex justify-center">
                <div className="w-full max-w-3xl">
                  <div
                    className="
                      flex items-center gap-3 md:gap-4
                      bg-[#2c2c2c]
                      rounded-full px-4 md:px-6 py-2.5 md:py-3
                      shadow-2xl
                    "
                  >
                    {/* LEFT ICON */}
                    <img
                      src="/assets/images/Butterfly.gif"
                      alt="icon"
                      className="w-8 md:w-10 mix-blend-screen"
                    />

                    {/* INPUT */}
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSubmit()
                      }
                      placeholder="Describe your idea!"
                      className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-xs md:text-sm"
                      disabled={isGenerating}
                    />

                    {/* BUTTON */}
                    <button
                      onClick={handleSubmit}
                      disabled={isGenerating}
                      className="
                        bg-gradient-to-r from-cyan-500 to-teal-500
                        hover:from-cyan-600 hover:to-teal-600
                        disabled:from-gray-500 disabled:to-gray-600
                        text-white
                        px-4 md:px-7 py-2
                        rounded-full
                        shadow-lg shadow-cyan-500/25
                        flex items-center gap-2
                        transition-all
                      "
                    >
                      <Send size={16} />
                      <span className="hidden md:inline font-manrope">
                        {isGenerating ? "Generating..." : "Generate"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockchainChatbot;