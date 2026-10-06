import { useState } from 'react';
import { PARTIES, PartyInfo } from '../data/campaignData';
import { Crown, Zap, Flame, Shield, ArrowRight, CheckCircle2, Vote } from 'lucide-react';
import { SankalpaEmblem, OneVoiceSymbol } from './OfficialSymbols';

export function AllianceSection() {
  const [selectedParty, setSelectedParty] = useState<PartyInfo | null>(null);

  const getPartyIcon = (id: string) => {
    switch (id) {
      case 'one-voice':
        return <Crown className="w-6 h-6 text-amber-400" />;
      case 'sankalp':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'people-tiger-power':
        return <Flame className="w-6 h-6 text-rose-400" />;
      default:
        return <Shield className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="alliance" className="relative py-28 bg-neutral-950 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-rose-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <span>Unified Front</span>
            <span>·</span>
            <span>Unshakeable Solidarity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-[0.95]">
            THREE PARTIES.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              ONE POWERFUL ALLIANCE.
            </span>
          </h2>
          <p className="mt-5 text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not rival factions fighting for power, but three dedicated student movements coming together with complementary strengths to transform campus life.
          </p>
        </div>

        {/* Three Premium Cards with Candidate Photos and Symbols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 mb-16">
          {PARTIES.map((party) => (
            <div
              key={party.id}
              className={`relative rounded-3xl p-7 bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl ${
                selectedParty?.id === party.id ? 'ring-2 ring-amber-400/50 bg-neutral-900/95' : ''
              }`}
            >
              <div>
                {/* Official Party Election Symbol Showcase (No Faces) */}
                <div className="mb-6 relative overflow-hidden rounded-2xl border-2 border-neutral-800 bg-neutral-950 group-hover:border-neutral-700 transition-colors">
                  {party.id === 'one-voice' ? (
                    <div className="h-56 p-3 flex flex-col justify-center">
                      <OneVoiceSymbol className="h-full w-full" />
                    </div>
                  ) : party.id === 'sankalp' ? (
                    <div className="h-56 p-4 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-900">
                      <SankalpaEmblem size={170} />
                    </div>
                  ) : (
                    <div className="h-56 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 to-rose-950/20 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-rose-500/10 border-2 border-rose-500/50 flex flex-col items-center justify-center mb-3 shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
                        <span className="text-4xl">🐅</span>
                        <span className="text-[10px] font-mono font-black text-rose-300">PTP</span>
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
                        OFFICIAL SYMBOL: TIGER POWER
                      </span>
                      <span className="text-sm font-black text-white font-display mt-0.5 uppercase">
                        Grassroots Unity & Discipline
                      </span>
                    </div>
                  )}

                  {/* Top floating party emblem */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-700 flex items-center gap-1.5 text-xs font-bold text-white shadow-lg">
                    {getPartyIcon(party.id)}
                    <span>{party.name}</span>
                  </div>

                  {/* Official Election Symbol Floating Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-amber-400 text-black flex items-center gap-1 text-[11px] font-black font-mono uppercase shadow-lg">
                    <span>SYMBOL:</span>
                    <span>{party.symbolName.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Party Name & Post Header */}
                <div className="mb-3">
                  <span
                    className={`inline-block text-xs font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md border ${party.badgeBg} ${party.badgeText} mb-2`}
                  >
                    STANDING FOR: {party.post}
                  </span>
                  <h3 className="text-2xl font-black text-white font-display tracking-tight">
                    {party.name}
                  </h3>
                </div>

                {/* Slogan & Core quote */}
                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-neutral-200 leading-snug">
                    “{party.tagline}”
                  </p>
                </div>

                {/* Official Ballot Symbol Callout Box */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                      BALLOT SYMBOL:
                    </span>
                    <span className="text-xs font-black text-white font-display">
                      {party.symbolName}
                    </span>
                  </div>
                  {party.symbolTagline && (
                    <span className="text-[10px] font-mono text-amber-300/80 uppercase">
                      {party.symbolTagline}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                  {party.description}
                </p>

                {/* Focus Areas List */}
                <div className="space-y-2 border-t border-neutral-800/80 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Core Action Focus:
                  </span>
                  {party.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer action */}
              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  Standing for: {party.post}
                </span>
                <button
                  onClick={() => setSelectedParty(party)}
                  className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Party Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Convergence Toward the Centre */}
        <div className="relative mt-8 pt-8 text-center flex flex-col items-center">
          {/* Subtle SVG convergence connector paths */}
          <div className="w-full max-w-2xl h-12 hidden lg:flex items-center justify-center relative mb-4">
            <svg className="w-full h-full stroke-neutral-700/60" viewBox="0 0 600 50" fill="none">
              <path d="M 50 10 C 150 40, 250 45, 300 48" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 550 10 C 450 40, 350 45, 300 48" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="300" y1="10" x2="300" y2="48" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative inline-flex flex-col items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border border-neutral-800 max-w-2xl shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/10">
              <Shield className="w-8 h-8 text-amber-400" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              Three Distinct Strengths · One Unified Force
            </span>

            <h4 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight uppercase mb-2">
              TRIPLE POWER ALLIANCE
            </h4>

            <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-display tracking-wide uppercase">
              NAMMA COLLEGE. NAMMA VOICE.
            </div>

            <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
              When One Voice, Sankalpa, and People Tiger Power stand as one, no student concern goes unheard, no idea gets forgotten, and no campus problem remains unattended.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for party details if clicked */}
      {selectedParty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedParty(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 text-lg font-bold"
            >
              ✕
            </button>
            {/* Official Party Symbol Showcase in Modal */}
            <div className="flex items-center gap-4 mb-5 p-3 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-amber-400/40 flex items-center justify-center shrink-0">
                {selectedParty.id === 'one-voice' ? (
                  <span className="text-3xl">🏏</span>
                ) : selectedParty.id === 'sankalp' ? (
                  <span className="text-3xl">✊</span>
                ) : (
                  <span className="text-3xl">🐅</span>
                )}
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                  OFFICIAL BALLOT SYMBOL
                </span>
                <span className="text-base font-black text-white font-display block uppercase">
                  {selectedParty.symbolName}
                </span>
                <span className="text-xs text-neutral-400 mt-0.5 block italic">
                  “{selectedParty.symbolTagline}”
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                {getPartyIcon(selectedParty.id)}
              </div>
              <div>
                <span className="text-xs font-extrabold tracking-wider text-amber-400 uppercase">
                  {selectedParty.post}
                </span>
                <h3 className="text-2xl font-black text-white font-display">
                  {selectedParty.name}
                </h3>
              </div>
            </div>
            <p className="text-sm font-semibold text-neutral-200 mb-4 bg-neutral-950/70 p-3 rounded-xl border border-neutral-800">
              “{selectedParty.tagline}”
            </p>
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              {selectedParty.description}
            </p>
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Action Plan:
            </h5>
            <div className="space-y-2 mb-6">
              {selectedParty.focusAreas.map((fa, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{fa}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedParty(null)}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-black font-display cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
