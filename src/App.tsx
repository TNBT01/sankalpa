import { ArrowDown } from 'lucide-react';
import { OriginalImage } from './components/OriginalImage';
import { PhotoUploadAssistant } from './components/PhotoUploadAssistant';

export default function App() {
  const candidates = [
    {
      party: 'ONE VOICE',
      post: 'PRESIDENT',
      symbol: 'Cricket Bat 🏏',
      symbolBadge: '🏏 CRICKET BAT',
      storageKey: 'onevoice_pres',
      defaultSrc: '/onevoiceparty.jpeg',
      fallbackSrc: '/src/assets/images/candidate_onevoice_pres_1791302816403.jpg',
      alt: 'One Voice Candidate for President',
      accentBorder: 'border-amber-400',
      accentGlow: 'group-hover:border-amber-400',
      badgeBg: 'bg-amber-400 text-black',
      textColor: 'text-amber-400'
    },
    {
      party: 'SANKALP',
      post: 'VICE PRESIDENT',
      symbol: 'Fist ✊',
      symbolBadge: '✊ FIST',
      storageKey: 'sankalpa_vp',
      defaultSrc: '/WhatsApp Image 2026-10-06 at 8.35.19 PM (2).jpeg',
      fallbackSrc: '/src/assets/images/candidate_sankalpa_vp_1791302802246.jpg',
      alt: 'Sankalp Candidate for Vice President',
      accentBorder: 'border-cyan-400',
      accentGlow: 'group-hover:border-cyan-400',
      badgeBg: 'bg-cyan-400 text-black',
      textColor: 'text-cyan-400'
    },
    {
      party: 'PEOPLE TIGER POWER',
      post: 'GENERAL SECRETARY',
      symbol: 'Tiger 🐅',
      symbolBadge: '🐅 TIGER',
      storageKey: 'ptp_gensec',
      defaultSrc: '/src/assets/images/candidate_ptp_gensec_1791306087481.jpg',
      fallbackSrc: '/src/assets/images/candidate_ptp_gensec_1791306087481.jpg',
      alt: 'People Tiger Power Candidate for General Secretary',
      accentBorder: 'border-rose-400',
      accentGlow: 'group-hover:border-rose-400',
      badgeBg: 'bg-rose-400 text-black',
      textColor: 'text-rose-400'
    }
  ];

  const manifestoPoints = [
    {
      number: '01',
      title: 'CLEAN CLASSROOMS & BENCHES',
      image: '/src/assets/images/manifesto_clean_classroom_1791300845890.jpg',
      alt: 'Clean classrooms and benches',
      text: 'Clean classrooms and well-maintained benches create a better environment for every student to learn, focus and grow.'
    },
    {
      number: '02',
      title: 'EVENTS',
      image: '/src/assets/images/manifesto_college_fest_1791300860724.jpg',
      alt: 'College cultural events and festival',
      text: 'More opportunities for students to participate, perform, compete, discover their talents and create unforgettable college memories.'
    },
    {
      number: '03',
      title: 'CAREER & OPPORTUNITIES',
      image: '/src/assets/images/manifesto_career_workshop_1791300872012.jpg',
      alt: 'Career workshops and student skill development',
      text: 'Greater exposure to career opportunities, skill development, workshops, networking and practical experiences.'
    },
    {
      number: '04',
      title: 'STUDENT VOICE',
      image: '/src/assets/images/manifesto_student_voice_1791306101757.jpg',
      alt: 'Students speaking at an open forum',
      text: 'A real digital platform where students raise concerns, share feedback, suggest ideas and track action.'
    },
    {
      number: '05',
      title: 'SPORTS ROOM',
      image: '/src/assets/images/manifesto_sports_room_1791300883945.jpg',
      alt: 'College sports room and athletic equipment',
      text: 'Better access to sports facilities means more participation, more activity and more opportunities to play and compete.'
    },
    {
      number: '06',
      title: 'SANITARY HYGIENE',
      image: '/src/assets/images/manifesto_hygiene_facility_1791300901067.jpg',
      alt: 'Dignified clean restroom and automated dispenser',
      text: 'Restore the sanitary facility so students have reliable access to essential hygiene support when they need it.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-body selection:bg-amber-400 selection:text-black">
      {/* Minimal Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="#"
            className="text-base sm:text-lg font-black tracking-tight text-white font-display hover:text-amber-400 transition-colors uppercase"
          >
            TRIPLE POWER ALLIANCE
          </a>
          <nav className="flex items-center gap-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400">
            <a href="#candidates" className="hover:text-amber-400 transition-colors">
              Candidates
            </a>
            <a href="#manifesto" className="hover:text-amber-400 transition-colors">
              Manifesto
            </a>
          </nav>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background Cinematic Image with Deep Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_campus_students_1791300833460.jpg"
            alt="College campus with students walking and studying together"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Dark cinematic scrim */}
          <div className="absolute inset-0 bg-neutral-950/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter font-display uppercase leading-[0.9] max-w-5xl mb-6 drop-shadow-2xl">
            TRIPLE POWER <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">ALLIANCE</span>
          </h1>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight font-display uppercase mb-12 drop-shadow-lg">
            NAMMA COLLEGE. NAMMA VOICE.
          </h2>

          {/* Clean Scroll Indicator */}
          <a
            href="#candidates"
            className="mt-6 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to candidates"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300">
              MEET THE CANDIDATES
            </span>
            <ArrowDown className="w-5 h-5 text-amber-400 animate-bounce" />
          </a>
        </div>
      </section>

      {/* 2. CANDIDATES SECTION */}
      <section id="candidates" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clean Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
              THE CANDIDATES
            </h3>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base font-medium">
              Three united parties standing together for our college.
            </p>
          </div>

          {/* Three Strong Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {candidates.map((c, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 shadow-2xl flex flex-col"
              >
                {/* Large Candidate Photo (Main Visual Element) */}
                <div className="aspect-[4/5] w-full overflow-hidden relative bg-neutral-950">
                  <OriginalImage
                    storageKey={c.storageKey}
                    defaultSrc={c.defaultSrc}
                    fallbackSrc={c.fallbackSrc}
                    alt={c.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Scrim at the bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                  {/* Top Floating Symbol Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-neutral-950/90 backdrop-blur-md border border-neutral-700 text-xs font-mono font-black text-white uppercase shadow-xl tracking-wider">
                      {c.symbolBadge}
                    </span>
                  </div>

                  {/* Bottom Info on the Image */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-1">
                    <span className="text-xs font-mono font-black uppercase tracking-widest text-neutral-400 block">
                      STANDING FOR
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-wide block">
                      {c.post}
                    </span>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-6 bg-neutral-900/90 border-t border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-black text-white font-display tracking-tight uppercase">
                      {c.party}
                    </h4>
                    <span className="text-xs font-semibold text-neutral-400 mt-0.5 block">
                      Symbol: {c.symbol}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase ${c.badgeBg}`}>
                    {c.post.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MANIFESTO SECTION */}
      <section id="manifesto" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-6xl font-black text-white font-display uppercase tracking-tight">
              OUR MANIFESTO
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base font-medium">
              6 Priorities. 1 Vision for our college.
            </p>
          </div>

          {/* 6 Visual Manifesto Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manifestoPoints.map((item) => (
              <div
                key={item.number}
                className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-2xl flex flex-col"
              >
                {/* Large Image */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-amber-400 font-mono font-black text-sm">
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight mb-3">
                      {item.number} — {item.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 border-t border-neutral-900">
        {/* Powerful Full-Width Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/campaign_unity_students_1791300912596.jpg"
            alt="Large group of students together on campus"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Measured Dark Scrim */}
          <div className="absolute inset-0 bg-neutral-950/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter font-display uppercase leading-[0.9] mb-6 drop-shadow-2xl">
            TRIPLE POWER <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">ALLIANCE</span>
          </h2>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight font-display uppercase drop-shadow-lg">
            NAMMA COLLEGE. NAMMA VOICE.
          </h3>
        </div>
      </section>

      {/* Minimal Clean Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-8 px-6 text-center text-xs text-neutral-500 font-mono">
        © 2026 TRIPLE POWER ALLIANCE · NAMMA COLLEGE. NAMMA VOICE.
      </footer>

      {/* Floating Original Photo Sync tool */}
      <PhotoUploadAssistant />
    </div>
  );
}
