import { ArrowDown, MessageSquareQuote, Sparkles, ChevronRight } from 'lucide-react';
import { OriginalImage } from './OriginalImage';

interface HeroSectionProps {
  onOpenVoicePortal: () => void;
  onScrollToManifesto: () => void;
}

export function HeroSection({ onOpenVoicePortal, onScrollToManifesto }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Cinematic Image with Deep Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_campus_students_1791300833460.jpg"
          alt="Vibrant college campus students walking and studying together at golden hour"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for 4.5:1+ contrast across all viewports */}
        <div className="absolute inset-0 bg-neutral-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neutral-950/50 to-neutral-950" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Quiet Kicker Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md text-xs font-semibold text-neutral-300 mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Official Student Union Election Manifesto 2026</span>
          <span className="text-neutral-500">·</span>
          <span className="text-amber-400 font-bold">Alliance Unified Front</span>
        </div>

        {/* Main Alliance Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter font-display uppercase leading-[0.95] max-w-5xl mb-4 drop-shadow-2xl">
          TRIPLE POWER <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">ALLIANCE</span>
        </h1>

        {/* Campaign Slogan */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight font-display mb-4 uppercase">
          NAMMA COLLEGE. <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-8">NAMMA VOICE.</span>
        </div>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8">
          Three parties. One alliance. One collective vision for our college.
        </p>

        {/* Three Parties Visual Bar with Official Election Symbols */}
        <div className="w-full max-w-5xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2.5 bg-neutral-900/85 backdrop-blur-md rounded-2xl border border-neutral-800 shadow-2xl">
            {/* ONE VOICE - CRICKET BAT */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-950/80 border border-amber-500/30 hover:border-amber-400 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-amber-400/10 border-2 border-amber-400 flex flex-col items-center justify-center shrink-0 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <span className="text-2xl">🏏</span>
                <span className="text-[9px] font-mono font-black text-amber-400 tracking-wider">BAT</span>
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                  Standing for: President
                </span>
                <span className="text-base font-black text-white font-display group-hover:text-amber-300 transition-colors truncate">
                  ONE VOICE
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                    Symbol:
                  </span>
                  <span className="text-[11px] font-extrabold text-amber-300">
                    Cricket Bat
                  </span>
                </div>
              </div>
            </div>

            {/* SANKALPA - CLENCHED FIST */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-950/80 border border-cyan-500/30 hover:border-cyan-400 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border-2 border-cyan-400 flex flex-col items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <span className="text-2xl">✊</span>
                <span className="text-[9px] font-mono font-black text-cyan-400 tracking-wider">FIST</span>
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold">
                  Standing for: Vice President
                </span>
                <span className="text-base font-black text-white font-display group-hover:text-cyan-300 transition-colors truncate">
                  SANKALPA
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                    Symbol:
                  </span>
                  <span className="text-[11px] font-extrabold text-cyan-300">
                    Clenched Fist
                  </span>
                </div>
              </div>
            </div>

            {/* PEOPLE TIGER POWER - TIGER */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-950/80 border border-rose-500/30 hover:border-rose-400 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-rose-950/60 border-2 border-rose-400 flex flex-col items-center justify-center shrink-0 shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
                <span className="text-2xl">🐅</span>
                <span className="text-[9px] font-mono font-black text-rose-300 tracking-wider">TIGER</span>
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-rose-400 font-bold">
                  Standing for: General Secretary
                </span>
                <span className="text-base font-black text-white font-display group-hover:text-rose-300 transition-colors truncate">
                  PEOPLE TIGER POWER
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                    Symbol:
                  </span>
                  <span className="text-[11px] font-extrabold text-rose-300">
                    Tiger Power
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onScrollToManifesto}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>EXPLORE OUR MANIFESTO</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
          <button
            onClick={onOpenVoicePortal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-400/60 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>MAKE YOUR VOICE HEARD</span>
          </button>
        </div>

        {/* Supporting Message Callout */}
        <div className="flex items-center gap-3 max-w-xl px-5 py-3 rounded-xl bg-neutral-900/70 border border-neutral-800 backdrop-blur-sm text-neutral-300 text-sm italic">
          <MessageSquareQuote className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="font-medium">
            “We don't just ask for your vote. We ask for your voice.”
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={onScrollToManifesto}
            className="text-neutral-400 hover:text-white transition-colors flex flex-col items-center gap-2 group cursor-pointer"
            aria-label="Scroll to manifesto"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300">
              Scroll Down
            </span>
            <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
