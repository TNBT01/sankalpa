import { CheckCircle2, Sparkles, Building, Calendar, Briefcase, Trophy, HeartHandshake } from 'lucide-react';
import { ManifestoPriority } from '../data/campaignData';

interface ManifestoPriorityCardProps {
  priority: ManifestoPriority;
  isReversed?: boolean;
}

export function ManifestoPriorityCard({ priority, isReversed = false }: ManifestoPriorityCardProps) {
  const getPriorityIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Building className="w-5 h-5 text-amber-400" />;
      case '02':
        return <Calendar className="w-5 h-5 text-amber-400" />;
      case '03':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case '05':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case '06':
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div
      id={`priority-${priority.id}`}
      className="scroll-mt-28 py-16 border-b border-neutral-900 last:border-0"
    >
      <div
        className={`flex flex-col ${
          isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-10 lg:gap-14`}
      >
        {/* Visual Frame */}
        <div className="w-full lg:w-1/2">
          <div className="relative group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl">
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={priority.image}
                alt={priority.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              {/* Measured contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            </div>

            {/* Bottom floating badge inside frame */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                  {priority.statLabel}
                </span>
                <span className="text-base sm:text-lg font-black text-amber-400 font-display">
                  {priority.statValue}
                </span>
              </div>
              <span className="text-xs text-neutral-300 font-medium text-right max-w-[200px] hidden sm:block">
                {priority.highlightNote}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & Actionable Points */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Header numbering */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
              PRIORITY {priority.number}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              {getPriorityIcon(priority.number)}
              <span>{priority.title}</span>
            </span>
          </div>

          {/* Core Headline */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase tracking-tight leading-[0.98]">
            {priority.headline}
          </h3>

          {/* Primary Manifesto Statement */}
          <p className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed bg-neutral-900/50 p-4 rounded-2xl border border-neutral-800">
            {priority.description}
          </p>

          {/* Concrete Commitments */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              Direct Alliance Commitments:
            </span>
            <div className="space-y-2.5">
              {priority.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <div className="p-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
