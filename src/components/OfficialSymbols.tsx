interface EmblemProps {
  className?: string;
  size?: number;
}

export function SankalpaEmblem({ className = '', size = 200 }: EmblemProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden shadow-2xl flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring */}
        <circle cx="250" cy="250" r="240" fill="#FBBF24" stroke="#D97706" strokeWidth="8" />
        
        {/* Dark Green Inner Circle */}
        <circle cx="250" cy="250" r="225" fill="#064E3B" />

        {/* Golden Sun & Rays */}
        <circle cx="250" cy="200" r="110" fill="#FACC15" />
        {/* Sunbeams */}
        <g stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" opacity="0.9">
          <line x1="250" y1="70" x2="250" y2="25" />
          <line x1="160" y1="100" x2="120" y2="65" />
          <line x1="340" y1="100" x2="380" y2="65" />
          <line x1="90" y1="170" x2="45" y2="155" />
          <line x1="410" y1="170" x2="455" y2="155" />
          <line x1="200" y1="80" x2="180" y2="40" />
          <line x1="300" y1="80" x2="320" y2="40" />
        </g>

        {/* Mountain Ridges */}
        <polygon points="30,350 150,220 280,350" fill="#047857" />
        <polygon points="220,350 360,230 470,350" fill="#059669" />
        <polygon points="110,350 250,250 390,350" fill="#10B981" opacity="0.8" />

        {/* Horizontal field horizon curve */}
        <path d="M 30 350 Q 250 320 470 350 L 470 470 L 30 470 Z" fill="#064E3B" />
        <path d="M 30 350 Q 250 320 470 350" stroke="#FBBF24" strokeWidth="6" fill="none" />

        {/* Clenched Fist */}
        <g fill="#022C22" stroke="#064E3B" strokeWidth="2">
          {/* Forearm */}
          <path d="M 215 400 L 210 260 L 290 260 L 285 400 Z" fill="#022C22" />
          
          {/* Clenched Fingers & Knuckles */}
          <rect x="200" y="200" width="35" height="40" rx="10" fill="#022C22" stroke="#FBBF24" strokeWidth="2" />
          <rect x="230" y="190" width="35" height="50" rx="10" fill="#022C22" stroke="#FBBF24" strokeWidth="2" />
          <rect x="260" y="195" width="35" height="45" rx="10" fill="#022C22" stroke="#FBBF24" strokeWidth="2" />
          <rect x="285" y="208" width="30" height="35" rx="8" fill="#022C22" stroke="#FBBF24" strokeWidth="2" />
          
          {/* Thumb folded across fingers */}
          <path d="M 185 240 C 190 215, 230 220, 265 245 C 265 260, 240 270, 205 260 Z" fill="#022C22" stroke="#FBBF24" strokeWidth="3" />
        </g>

        {/* Bottom Banner with SANKALPA */}
        <text
          x="250"
          y="410"
          textAnchor="middle"
          fill="#FDE047"
          fontFamily="system-ui, sans-serif"
          fontWeight="900"
          fontSize="46"
          letterSpacing="4"
        >
          SANKALPA
        </text>

        {/* Decorative Diamond & Accent Lines */}
        <g fill="#FDE047" stroke="#FDE047">
          <polygon points="250,430 258,438 250,446 242,438" />
          <line x1="160" y1="438" x2="230" y2="438" strokeWidth="3" />
          <line x1="270" y1="438" x2="340" y2="438" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

export function OneVoiceSymbol({ className = '' }: { className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-slate-900 border border-amber-400/40 p-4 shadow-xl select-none flex flex-col justify-between ${className}`}>
      {/* Poster Header */}
      <div className="text-center pt-2">
        <h4 className="text-2xl sm:text-3xl font-black text-amber-400 font-display tracking-tight leading-none uppercase drop-shadow-md">
          ONE
        </h4>
        <h4 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-none uppercase drop-shadow-md">
          VOICE
        </h4>
        <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase mt-0.5 px-2 py-0.5 bg-amber-500/20 rounded">
          PARTY
        </span>
      </div>

      {/* Cricket Bat Symbol in Golden Motion Ring */}
      <div className="my-4 relative flex items-center justify-center">
        {/* Golden Circular Ring */}
        <div className="w-24 h-24 rounded-full border-4 border-amber-400 flex items-center justify-center relative shadow-lg shadow-amber-500/20 bg-slate-950/40">
          {/* Dynamic Speed Lines */}
          <div className="absolute -left-3 top-1/2 w-8 h-1 bg-amber-400 rounded-full rotate-[-35deg]" />
          <div className="absolute -right-2 top-1/3 w-6 h-1 bg-amber-300 rounded-full rotate-[-35deg]" />

          {/* Cricket Bat Graphic angled 45 deg */}
          <svg viewBox="0 0 100 100" className="w-20 h-20 -rotate-45" fill="none">
            {/* Bat Blade */}
            <rect x="42" y="32" width="16" height="52" rx="4" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="50" y1="36" x2="50" y2="78" stroke="#E2E8F0" strokeWidth="2" />
            
            {/* Bat Handle / Grip */}
            <rect x="46" y="10" width="8" height="22" rx="2" fill="#0F172A" stroke="#F8FAFC" strokeWidth="1" />
            <line x1="46" y1="14" x2="54" y2="14" stroke="#F8FAFC" strokeWidth="1" />
            <line x1="46" y1="18" x2="54" y2="18" stroke="#F8FAFC" strokeWidth="1" />
            <line x1="46" y1="22" x2="54" y2="22" stroke="#F8FAFC" strokeWidth="1" />
            <line x1="46" y1="26" x2="54" y2="26" stroke="#F8FAFC" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Slogan Banner */}
      <div className="bg-amber-400 py-1.5 px-3 rounded-lg text-center shadow-md">
        <span className="text-xs font-black text-black font-display tracking-wider uppercase block">
          RISE YOUR VOICE
        </span>
      </div>

      {/* Crowd Silhouettes at bottom */}
      <div className="flex items-center justify-center gap-1.5 pt-3 opacity-60">
        <span className="text-sm">🙌</span>
        <span className="text-sm">🙋</span>
        <span className="text-sm">🙌</span>
        <span className="text-sm">🙋</span>
        <span className="text-sm">🙌</span>
      </div>
    </div>
  );
}
