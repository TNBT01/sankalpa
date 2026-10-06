import { Sparkles, Shield, X as CloseIcon } from 'lucide-react';

export function AllianceConvergenceSection() {
  return (
    <section className="py-28 bg-neutral-950 relative overflow-hidden border-t border-b border-neutral-900">
      {/* Background visual geometry & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.06)_0,_transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>The Alliance Synergy</span>
        </div>

        {/* The Three Parties coming together */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="px-6 py-4 rounded-2xl bg-neutral-900/90 border border-amber-500/30 text-amber-400 font-display font-black text-xl sm:text-2xl tracking-wider shadow-lg">
            ONE VOICE
          </div>

          <span className="text-2xl sm:text-3xl font-black text-amber-500 font-display">
            ×
          </span>

          <div className="px-6 py-4 rounded-2xl bg-neutral-900/90 border border-cyan-500/30 text-cyan-400 font-display font-black text-xl sm:text-2xl tracking-wider shadow-lg">
            SANKALPA
          </div>

          <span className="text-2xl sm:text-3xl font-black text-amber-500 font-display">
            ×
          </span>

          <div className="px-6 py-4 rounded-2xl bg-neutral-900/90 border border-rose-500/30 text-rose-400 font-display font-black text-xl sm:text-2xl tracking-wider shadow-lg">
            PEOPLE TIGER POWER
          </div>
        </div>

        {/* Dramatic converging downward arrow */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-0.5 h-10 bg-gradient-to-b from-amber-500/80 to-amber-400" />
          <div className="w-3 h-3 rotate-45 border-b-2 border-r-2 border-amber-400 -mt-1.5" />
        </div>

        {/* Merged Outcome */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border border-neutral-800 shadow-2xl relative">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-4 text-amber-400 shadow-lg shadow-amber-500/10">
            <Shield className="w-7 h-7" />
          </div>

          <h3 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-display uppercase tracking-tight leading-[0.95] mb-4">
            TRIPLE POWER <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">ALLIANCE</span>
          </h3>

          <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-amber-400 font-display tracking-tight uppercase mb-6">
            NAMMA COLLEGE. NAMMA VOICE.
          </div>

          <p className="text-base sm:text-xl text-neutral-300 font-medium max-w-2xl mx-auto leading-relaxed">
            “Different parties. Shared responsibility. One vision for our college.”
          </p>
        </div>
      </div>
    </section>
  );
}
