import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenVoicePortal: () => void;
  onOpenPledgeModal: () => void;
}

export function Navbar({ onOpenVoicePortal, onOpenPledgeModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-black tracking-tight text-white font-display hover:text-amber-400 transition-colors shrink-0"
          >
            TRIPLE POWER ALLIANCE
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-300">
            <a
              href="#alliance"
              className="hover:text-amber-400 transition-colors tracking-wide"
            >
              The Alliance
            </a>
            <a
              href="#candidates"
              className="hover:text-amber-400 transition-colors tracking-wide"
            >
              Candidates & Symbols
            </a>
            <a
              href="#priorities"
              className="hover:text-amber-400 transition-colors tracking-wide"
            >
              6 Priorities
            </a>
            <a
              href="#student-voice"
              className="hover:text-amber-400 transition-colors tracking-wide"
            >
              Student Voice
            </a>
            <a
              href="#call-to-action"
              className="hover:text-amber-400 transition-colors tracking-wide"
            >
              Stand With Us
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVoicePortal}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-200 border border-neutral-700 hover:border-amber-500/60 hover:text-white bg-neutral-900/80 rounded-lg transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Voice Portal</span>
            </button>
            <button
              onClick={onOpenPledgeModal}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pledge Support</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenVoicePortal}
              className="px-2.5 py-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg"
            >
              Voice
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/98 border-b border-neutral-800 px-5 pt-3 pb-6 space-y-4 animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-3 pt-2 text-base font-medium">
            <a
              href="#alliance"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-amber-400 py-1"
            >
              The Alliance
            </a>
            <a
              href="#priorities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-amber-400 py-1"
            >
              6 Priorities
            </a>
            <a
              href="#student-voice"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-amber-400 py-1"
            >
              Student Voice Portal
            </a>
            <a
              href="#manifesto-summary"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-amber-400 py-1"
            >
              Manifesto Timeline
            </a>
            <a
              href="#call-to-action"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-amber-400 py-1"
            >
              Stand With Us
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVoicePortal();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-neutral-200 border border-neutral-700 bg-neutral-900 rounded-lg text-center flex items-center justify-center gap-2"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              Make Your Voice Heard
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPledgeModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
            >
              Stand With Triple Power Alliance
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
