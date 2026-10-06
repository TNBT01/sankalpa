import { Shield, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenVoiceModal: () => void;
  onOpenPledgeModal: () => void;
}

export function Footer({ onScrollToTop, onOpenVoiceModal, onOpenPledgeModal }: FooterProps) {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-black flex items-center justify-center font-display font-black text-sm">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-white font-display tracking-tight uppercase">
                TRIPLE POWER ALLIANCE
              </span>
            </div>

            <div className="text-amber-400 font-display font-bold text-sm uppercase tracking-wider">
              NAMMA COLLEGE. NAMMA VOICE.
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm max-w-md leading-relaxed">
              A united coalition of One Voice (President), Sankalpa (Vice President), and People Tiger Power (General Secretary), dedicated to democratic student representation and tangible campus reforms.
            </p>

            <div className="text-xs text-neutral-500 italic">
              “We don't just ask for your vote. We ask for your voice.”
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-200">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#alliance" className="hover:text-amber-400 transition-colors">
                  Three Parties Alliance
                </a>
              </li>
              <li>
                <a href="#priorities" className="hover:text-amber-400 transition-colors">
                  6 Core Priorities
                </a>
              </li>
              <li>
                <a href="#student-voice" className="hover:text-amber-400 transition-colors">
                  Live Voice Platform
                </a>
              </li>
              <li>
                <a href="#manifesto-summary" className="hover:text-amber-400 transition-colors">
                  Manifesto Timeline
                </a>
              </li>
              <li>
                <a href="#call-to-action" className="hover:text-amber-400 transition-colors">
                  Stand With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Campaign Action */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-200">
              Student Action
            </h5>
            <div className="space-y-2">
              <button
                onClick={onOpenVoiceModal}
                className="w-full text-left px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                Submit Grievance / Idea
              </button>
              <button
                onClick={onOpenPledgeModal}
                className="w-full text-left px-3 py-2 rounded-lg bg-amber-400/10 border border-amber-400/30 hover:bg-amber-400/20 text-xs text-amber-400 font-semibold transition-colors cursor-pointer"
              >
                Sign Supporter Pledge
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Triple Power Alliance Campaign Committee. Built by and for students.
          </div>
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
