import { MANIFESTO_PRIORITIES } from '../data/campaignData';
import { Target } from 'lucide-react';

interface ManifestoIntroProps {
  activePriorityId: string;
  onSelectPriority: (id: string) => void;
}

export function ManifestoIntro({ activePriorityId, onSelectPriority }: ManifestoIntroProps) {
  return (
    <section id="priorities" className="py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Sub-label */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
          <Target className="w-4 h-4" />
          <span>The Ground Reality & Action Plan</span>
        </div>

        {/* Big Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-[0.95] mb-6">
          OUR COLLEGE.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
            OUR RESPONSIBILITY.
          </span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
          A better college begins when students speak, ideas become action and everyone takes responsibility for the campus we share.
        </p>

        {/* Core Tag */}
        <div className="inline-block p-1 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl mb-12">
          <div className="px-8 py-4 rounded-xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase">
              6 PRIORITIES. <span className="text-amber-400">1 VISION.</span>
            </span>
          </div>
        </div>

        {/* Interactive Segmented Jump Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-neutral-900/60 rounded-2xl border border-neutral-800/80 max-w-4xl mx-auto backdrop-blur-sm">
          {MANIFESTO_PRIORITIES.map((p) => {
            const isActive = activePriorityId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectPriority(p.id)}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{p.number}</span>
                <span>{p.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
