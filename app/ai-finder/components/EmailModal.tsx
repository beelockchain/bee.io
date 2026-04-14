'use client';

import { useState } from 'react';
import { X, Mail } from 'lucide-react';

interface EmailModalProps {
  onClose: () => void;
  onSend: (email: string) => Promise<void>;
}

const EmailModal = ({ onClose, onSend }: EmailModalProps) => {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSending(true);
    setError('');
    try {
      await onSend(email);
      setSent(true);
    } catch {
      setError('Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl p-6 shadow-xl">

        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <X size={18} />
        </button>

        {sent ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
              <Mail size={22} className="text-cyan-400" />
            </div>
            <p className="text-white font-semibold font-manrope mb-1">Transcript Sent!</p>
            <p className="text-gray-400 text-xs font-manrope">Check your inbox.</p>
            <button onClick={onClose} className="mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-manrope font-bold px-6 py-2 rounded-full">
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-white font-semibold font-manrope text-sm mb-1">Send Chat Transcript</h3>
            <p className="text-gray-500 text-xs font-manrope mb-4">Enter your email to receive the full conversation.</p>

            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 focus-within:border-cyan-500/50 transition-colors mb-2">
              <Mail size={14} className="text-gray-500 flex-shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="you@example.com"
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-600 font-manrope"
                autoFocus
              />
            </div>

            {error && <p className="text-red-400 text-xs mb-3 ml-1">{error}</p>}

            <button
              onClick={handleSend}
              disabled={sending}
              className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 disabled:opacity-60 text-white text-sm font-manrope font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all mt-1"
            >
              {sending ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
              ) : 'Send Transcript'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailModal;