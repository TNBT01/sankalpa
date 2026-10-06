import { useState } from 'react';
import { MANIFESTO_PRIORITIES } from '../data/campaignData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ManifestoTimelineProps {
  onSelectPriority: (id: string) => void;
}

export function ManifestoTimeline({ onSelectPriority }: ManifestoTimelineProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const timelineItems = [
    {
      num: '01',
      title: 'CLEAN CLASSROOMS',
      summary: 'Repaired study benches, daily verified sanitization & proper waste segregation.',
      target: '100% Repaired Benches',
      id: 'clean-campus'
    },
    {
      num: '02',
      title: 'EVENTS & CULTURAL LIFE',
      summary: 'Revamped annual fest, monthly amphitheatre open mics & student-led clubs.',
      target: '12+ Annual Events',
      id: 'events-culture'
    },
    {
      num: '03',
      title: 'CAREER & OPPORTUNITIES',
      summary: 'Practical skill bootcamps, resume clinics, mock interviews & corporate drives.',
      target: 'All-Year Placement Support',
      id: 'career-opportunities'
    },
    {
      num: '04',
      title: 'STUDENT VOICE',
      summary: 'Live digital portal to report issues, suggest ideas & track real resolutions.',
      target: '72hr Grievance Turnaround',
      id: 'student-voice'
    },
    {
      num: '05',
      title: 'SPORTS ACCESS',
      summary: '12-hour sports room access, quality gear restocking & inter-department leagues.',
      target: '7 AM – 7 PM Daily Access',
      id: 'sports-access'
    },
    {
      num: '06',
      title: 'SANITARY HYGIENE',
      summary: 'Restored automated vending dispensers, dignified restrooms & urgent care kits.',
      target: '100% Functional Dispensers',
      id: 'sanitary-hygiene'
    }
  ];

  return (
    <section id="manifesto-summary" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase block mb-3">
            COMPREHENSIVE ROADMAP
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-display uppercase tracking-tight leading-[0.95] mb-4">
            MANIFESTO <span className="text-amber-400">SUMMARY</span>
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mx-auto">
            Six distinct commitments engineered to elevate your college experience from day one.
          </p>
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineItems.map((item, index) => {
            const isHovered = activeStep === index;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => onSelectPriority(item.id)}
                className={`relative p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isHovered
                    ? 'bg-neutral-900 border-amber-400/60 shadow-xl shadow-amber-500/10 -translate-y-1'
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-amber-400 tracking-tight">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      {item.target}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white font-display tracking-tight uppercase mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
