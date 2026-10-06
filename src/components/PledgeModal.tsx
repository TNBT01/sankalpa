import { useState } from 'react';
import { X, ShieldCheck, Share2, Copy, Check, Sparkles, MessageCircle } from 'lucide-react';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pledgeCount: number;
  onIncrementPledge: () => void;
}

export function PledgeModal({ isOpen, onClose, pledgeCount, onIncrementPledge }: PledgeModalProps) {
  const [name, setName] = useState('');
  const [dept, setDept] = useState('Computer Science');
  const [hasPledged, setHasPledged] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    setHasPledged(true);
    onIncrementPledge();
  };

  const shareText = `I proudly stand with TRIPLE POWER ALLIANCE for our college elections!\n\n👑 ONE VOICE — PRESIDENT\n⚡ SANKALPA — VICE PRESIDENT\n🔥 PEOPLE TIGER POWER — GENERAL SECRETARY\n\nNAMMA COLLEGE. NAMMA VOICE.\n"We don't just ask for your vote. We ask for your voice."\n\nRead our manifesto & join the movement: ${window.location.href}`;

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!hasPledged ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Campus Solidarity</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mb-2">
              STAND WITH TRIPLE POWER ALLIANCE
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6">
              Join <span className="text-amber-400 font-bold">{pledgeCount.toLocaleString()}</span> fellow students who have pledged their voice for real campus reform.
            </p>

            <form onSubmit={handlePledge} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Your Name (or Nickname)
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma or Aisha K."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-amber-400 text-white text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Department
                </label>
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-amber-400 text-white text-sm focus:outline-none"
                >
                  <option value="Computer Science & IT">Computer Science & IT</option>
                  <option value="Commerce & Business">Commerce & Business</option>
                  <option value="Biotechnology & Life Sciences">Biotechnology & Life Sciences</option>
                  <option value="Mechanical & Civil Engg">Mechanical & Civil Engg</option>
                  <option value="Electronics & Electrical">Electronics & Electrical</option>
                  <option value="Humanities & Arts">Humanities & Arts</option>
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 italic">
                “I pledge my voice for clean classrooms, vibrant student events, career acceleration, fair sports access, dignified hygiene, and honest representation under the Triple Power Alliance.”
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                <span>Sign Alliance Pledge</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            {/* Digital Supporter Badge */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-neutral-950 to-neutral-900 border-2 border-amber-400/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Sparkles className="w-24 h-24 text-amber-400" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase mb-3">
                OFFICIAL SUPPORTER BADGE 2026
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight mb-1">
                {name || 'Student Supporter'}
              </h4>

              <div className="text-xs text-neutral-400 font-medium mb-4">
                {dept} · Verified Voice Supporter
              </div>

              <div className="py-2.5 px-4 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400 font-display font-black text-sm uppercase tracking-wider mb-2">
                TRIPLE POWER ALLIANCE
              </div>

              <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-300 font-display">
                NAMMA COLLEGE. NAMMA VOICE.
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-bold text-white">
                Share With Your College Groups!
              </h5>
              <p className="text-xs text-neutral-400">
                Spread the word on WhatsApp and Instagram class groups.
              </p>
            </div>

            {/* Share buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Share on WhatsApp</span>
              </button>

              <button
                onClick={handleCopy}
                className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Link!' : 'Copy Campaign Link'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-neutral-500 hover:text-neutral-300 font-semibold"
            >
              Done & Return to Manifesto
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
