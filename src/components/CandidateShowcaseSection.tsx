import { Vote, CheckCircle2, Sparkles, Shield } from 'lucide-react';
import { SankalpaEmblem, OneVoiceSymbol } from './OfficialSymbols';

export function CandidateShowcaseSection() {
  return (
    <section id="symbols" className="py-24 bg-neutral-950 relative overflow-hidden border-t border-b border-neutral-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
            <Vote className="w-4 h-4" />
            <span>OFFICIAL ELECTION 2026 BALLOT GUIDE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-[0.95] mb-4">
            OFFICIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">PARTY SYMBOLS.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-medium max-w-2xl mx-auto leading-relaxed">
            On election day, stamp your vote for the official symbols of the Triple Power Alliance to elect student leaders committed to real campus reform.
          </p>
        </div>

        {/* Dual Spotlight for the Party Election Symbols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Symbol 1: ONE VOICE - CRICKET BAT */}
          <div className="rounded-3xl bg-neutral-900/80 border-2 border-amber-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
                  BALLOT POST: PRESIDENT
                </span>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
                  ALLIANCE POST 01
                </span>
              </div>

              {/* Symbol Showcase & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mb-6 items-center">
                <div className="sm:col-span-6 rounded-2xl overflow-hidden border border-amber-400/40 shadow-xl bg-slate-950">
                  <OneVoiceSymbol className="h-64 w-full" />
                </div>

                <div className="sm:col-span-6 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block">
                    PARTY: ONE VOICE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                    CRICKET BAT 🏏
                  </h3>
                  <p className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                    “Rise Your Voice”
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                    The Cricket Bat symbolizes energy, high performance, teamwork, and smashing through bureaucratic campus delays.
                  </p>
                  <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
                    Vote for the Cricket Bat symbol on your presidential ballot!
                  </div>
                </div>
              </div>

              {/* Action Commitments */}
              <div className="space-y-2 pt-2 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fearless student union representation across all departments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Open-door Presidential grievance hours every single week</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400">
                BALLOT: ONE VOICE
              </span>
              <span className="text-xs font-black text-black bg-amber-400 px-3 py-1 rounded-md uppercase font-display">
                PRESIDENT
              </span>
            </div>
          </div>

          {/* Symbol 2: SANKALPA - CLENCHED FIST */}
          <div className="rounded-3xl bg-neutral-900/80 border-2 border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-cyan-400 transition-all duration-300">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
                  BALLOT POST: VICE PRESIDENT
                </span>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
                  ALLIANCE POST 02
                </span>
              </div>

              {/* Symbol Showcase & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mb-6 items-center">
                <div className="sm:col-span-6 rounded-2xl overflow-hidden border border-cyan-400/40 shadow-xl bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center justify-center p-4 h-64">
                  <SankalpaEmblem size={190} />
                </div>

                <div className="sm:col-span-6 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block">
                    PARTY: SANKALPA
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                    CLENCHED FIST ✊
                  </h3>
                  <p className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    “Solidarity & Relentless Action”
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                    The rising fist against the mountains and golden sun represents unbreakable student unity and resolving problems through action.
                  </p>
                  <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-xs font-semibold text-cyan-300">
                    Vote for the Sankalpa Fist symbol on your vice-presidential ballot!
                  </div>
                </div>
              </div>

              {/* Action Commitments */}
              <div className="space-y-2 pt-2 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Rapid 72-hour turnaround on student petitions & grievances</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Academic flexibility, examination reforms, and practical welfare</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-400">
                BALLOT: SANKALPA
              </span>
              <span className="text-xs font-black text-black bg-cyan-400 px-3 py-1 rounded-md uppercase font-display">
                VICE PRESIDENT
              </span>
            </div>
          </div>
        </div>

        {/* Third Alliance Pillar: People Tiger Power */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-rose-500/30 backdrop-blur-md max-w-4xl mx-auto shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-rose-950/80 border-2 border-rose-500/50 flex flex-col items-center justify-center shrink-0 shadow-lg shadow-rose-500/20">
              <span className="text-3xl">🐅</span>
              <span className="text-[10px] font-mono font-black text-rose-300 uppercase">TIGER</span>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest block">
                ALLIANCE POST 03 · GENERAL SECRETARY
              </span>
              <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">
                PEOPLE TIGER POWER
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Official symbol: <strong>Tiger Power</strong> — fierce grassroots discipline, flawless campus logistics, 24/7 student welfare, and sports room revitalization.
              </p>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <span className="text-xs font-mono font-bold text-neutral-400 block mb-1 uppercase">
              BALLOT POST
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-black uppercase font-display tracking-wider inline-block">
              GENERAL SECRETARY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
