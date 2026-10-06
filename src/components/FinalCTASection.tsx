import { ShieldCheck, ChevronRight, Share2, Heart } from 'lucide-react';
import { OriginalImage } from './OriginalImage';

interface FinalCTASectionProps {
  onOpenPledgeModal: () => void;
  onScrollToManifesto: () => void;
}

export function FinalCTASection({ onOpenPledgeModal, onScrollToManifesto }: FinalCTASectionProps) {
  return (
    <section id="call-to-action" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Cinematic Visual with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/campaign_unity_students_1791300912596.jpg"
          alt="Large crowd of diverse college students standing together united on campus quad"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark overlay for contrast */}
        <div className="absolute inset-0 bg-neutral-950/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-widest mb-8 shadow-xl">
          <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Election Day Resolution</span>
        </div>

        {/* Big Staggered Typography */}
        <div className="space-y-2 mb-6">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-display tracking-tight uppercase leading-[0.9]">
            THIS IS OUR COLLEGE.
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-amber-400 font-display tracking-tight uppercase leading-[0.9]">
            THIS IS OUR VOICE.
          </h3>
        </div>

        {/* Campaign Slogan */}
        <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase mb-8">
          NAMMA COLLEGE. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">NAMMA VOICE.</span>
        </div>

        {/* TRIPLE POWER ALLIANCE Brand Lockup */}
        <div className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-xl shadow-2xl max-w-3xl w-full mb-10">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase tracking-tight mb-4">
            TRIPLE POWER ALLIANCE
          </h4>

          {/* Three Parties and Posts with Candidate Faces and Symbols */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 pb-5 border-t border-b border-neutral-800/80">
            <div className="p-3.5 rounded-2xl bg-neutral-950/80 border border-amber-500/30 flex items-center gap-3 text-left">
              <OriginalImage
                storageKey="onevoice_pres"
                defaultSrc="/onevoiceparty.jpeg"
                fallbackSrc="/src/assets/images/candidate_onevoice_pres_1791302816403.jpg"
                alt="One Voice President Candidate"
                className="w-12 h-12 rounded-xl object-cover border border-amber-400 shrink-0"
              />
              <div>
                <span className="block text-sm font-black text-amber-400 font-display">
                  ONE VOICE
                </span>
                <span className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                  PRESIDENT · BAT 🏏
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-950/80 border border-cyan-500/30 flex items-center gap-3 text-left">
              <OriginalImage
                storageKey="sankalpa_vp"
                defaultSrc="/WhatsApp Image 2026-10-06 at 8.35.19 PM (2).jpeg"
                fallbackSrc="/src/assets/images/candidate_sankalpa_vp_1791302802246.jpg"
                alt="Sankalpa Vice President Candidate"
                className="w-12 h-12 rounded-xl object-cover border border-cyan-400 shrink-0"
              />
              <div>
                <span className="block text-sm font-black text-cyan-400 font-display">
                  SANKALPA
                </span>
                <span className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                  VICE PRESIDENT · FIST ✊
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-950/80 border border-rose-500/30 flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-xl bg-rose-950/80 border border-rose-400 flex items-center justify-center shrink-0 text-xl">
                🐅
              </div>
              <div>
                <span className="block text-sm font-black text-rose-400 font-display">
                  PEOPLE TIGER POWER
                </span>
                <span className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                  GENERAL SECRETARY
                </span>
              </div>
            </div>
          </div>

          {/* Final Statement */}
          <div className="pt-5 text-base sm:text-lg text-neutral-200 font-medium italic">
            “We don't just ask for your vote. We ask for your voice.”
          </div>
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenPledgeModal}
            className="w-full sm:w-auto px-8 sm:px-10 py-5 rounded-2xl font-display font-black text-sm sm:text-base uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            <span>STAND WITH TRIPLE POWER ALLIANCE</span>
          </button>

          <button
            onClick={onScrollToManifesto}
            className="w-full sm:w-auto px-8 sm:px-10 py-5 rounded-2xl font-display font-bold text-sm sm:text-base uppercase tracking-wider text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>EXPLORE THE MANIFESTO</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
