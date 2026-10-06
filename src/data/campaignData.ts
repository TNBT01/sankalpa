export interface PartyInfo {
  id: string;
  name: string;
  post: string;
  tagline: string;
  description: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  glowColor: string;
  focusAreas: string[];
  number: string;
  symbolName: string;
  symbolTagline: string;
  symbolIcon: string;
  symbolImage?: string;
}

export interface ManifestoPriority {
  id: string;
  number: string;
  title: string;
  headline: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
  statLabel: string;
  statValue: string;
  highlightNote: string;
}

export interface StudentTicket {
  id: string;
  code: string;
  category: 'issue' | 'idea' | 'feedback';
  title: string;
  department: string;
  status: 'SUBMITTED' | 'UNDER REVIEW' | 'ACTION SCHEDULED';
  upvotes: number;
  date: string;
}

export const PARTIES: PartyInfo[] = [
  {
    id: 'one-voice',
    name: 'ONE VOICE',
    post: 'PRESIDENT',
    tagline: 'A voice that represents every student.',
    description: 'Leading with empathy, transparency, and fearless representation to ensure administration listens to every department and year.',
    accentColor: '#f59e0b', // Amber
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-400',
    glowColor: 'shadow-amber-500/20',
    focusAreas: [
      'Universal Student Representation',
      'Direct Open-Door Presidential Hours',
      'Transparency in College Administration Policy'
    ],
    number: '01',
    symbolName: 'Cricket Bat',
    symbolTagline: 'Rise Your Voice',
    symbolIcon: '🏏',
    symbolImage: '/src/assets/images/onevoice_party_poster_1791302838474.jpg'
  },
  {
    id: 'sankalp',
    name: 'SANKALPA',
    post: 'VICE PRESIDENT',
    tagline: 'A commitment to turning student ideas into action.',
    description: 'Relentless execution, bridging the gap between student councils, faculty coordination, and academic opportunities.',
    accentColor: '#06b6d4', // Cyan
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
    badgeText: 'text-cyan-400',
    glowColor: 'shadow-cyan-500/20',
    focusAreas: [
      'Rapid Turnaround on Student Petitions',
      'Academic Flexibility & Exam Grievances',
      'Bridging Student Vision to Concrete Results'
    ],
    number: '02',
    symbolName: 'Clenched Fist over Mountains',
    symbolTagline: 'Strength, Solidarity & Action',
    symbolIcon: '✊',
    symbolImage: '/src/assets/images/sankalpa_party_symbol_1791302827533.jpg'
  },
  {
    id: 'people-tiger-power',
    name: 'PEOPLE TIGER POWER',
    post: 'GENERAL SECRETARY',
    tagline: 'A focus on organization, participation and getting things done.',
    description: 'Grassroots student power, disciplined campus organizing, vibrant event execution, and round-the-clock student welfare.',
    accentColor: '#f43f5e', // Rose/Crimson
    badgeBg: 'bg-rose-500/10 border-rose-500/30',
    badgeText: 'text-rose-400',
    glowColor: 'shadow-rose-500/20',
    focusAreas: [
      'Logistics & Budget Optimization',
      'Campus Safety & Facility Modernization',
      'Active Student Club & Society Empowerment'
    ],
    number: '03',
    symbolName: 'Tiger Power & Campus Unity',
    symbolTagline: 'Discipline, Courage & Action',
    symbolIcon: '🐅'
  }
];

export const MANIFESTO_PRIORITIES: ManifestoPriority[] = [
  {
    id: 'clean-campus',
    number: '01',
    title: 'CLEAN CLASSROOMS & BENCHES',
    headline: 'CLEAN CAMPUS. BETTER LEARNING.',
    tagline: 'Pristine study spaces, ergonomic seating & sanitized environments.',
    description: 'Clean classrooms and well-maintained benches create a better environment for every student to learn, focus and grow.',
    image: '/src/assets/images/manifesto_clean_classroom_1791300845890.jpg',
    imageAlt: 'Spotless modern lecture classroom with neatly arranged wooden study benches and natural sunlight',
    deliverables: [
      'Immediate overhaul of all damaged benches, loose screws, and broken writing desks across all lecture halls.',
      'Daily scheduled deep-cleaning audits with time-stamped digital cleanliness logs for every floor.',
      'Segregated dry and wet waste bins placed at every corridor corner and seminar entrance.',
      'Comprehensive lighting and fan maintenance audits prior to every examination cycle.'
    ],
    statLabel: 'Target Benchmark',
    statValue: '100% Repaired Benches',
    highlightNote: 'Audited across all departments within first 30 days.'
  },
  {
    id: 'events-culture',
    number: '02',
    title: 'EVENTS & CULTURAL LIFE',
    headline: 'MORE EVENTS. MORE MEMORIES.',
    tagline: 'Unleashing talent, inter-college glory & unforgettable celebrations.',
    description: 'More opportunities for students to participate, perform, compete, discover their talents and create unforgettable college memories.',
    image: '/src/assets/images/manifesto_college_fest_1791300860724.jpg',
    imageAlt: 'High-energy college cultural fest stage with stage lighting, cheering students and musical celebration',
    deliverables: [
      'Revamped flagship inter-college cultural fest with transparent student committee selections.',
      'Monthly Amphitheatre Open-Mic, Acoustic Evenings, and Battle of the Bands.',
      'Simplified, fast-track entry pass system with zero gate bottlenecks for enrolled students.',
      'Dedicated budget grants for department fests, debate society, photography clubs, and dance squads.'
    ],
    statLabel: 'Annual Cultural Calendar',
    statValue: '12+ Flagship Events',
    highlightNote: 'Guaranteed student-led artist selections and fair funding.'
  },
  {
    id: 'career-opportunities',
    number: '03',
    title: 'CAREER & OPPORTUNITIES',
    headline: 'FROM CLASSROOM TO CAREER.',
    tagline: 'Industry readiness, verified internships & practical workshops.',
    description: 'Students deserve greater exposure to career opportunities, skill development, workshops, networking and practical experiences.',
    image: '/src/assets/images/manifesto_career_workshop_1791300872012.jpg',
    imageAlt: 'College students engaged in professional resume clinic and career skill development seminar',
    deliverables: [
      'Semester-long Industry Bootcamp series featuring practical tech, finance, design, and analytics training.',
      'Bi-weekly 1-on-1 resume reviews, LinkedIn personal branding clinics, and mock interviews with alumni.',
      'Active placement coordination cell with dedicated drives for Tier-1 corporate and startup internships.',
      'Subsidized access to industry recognized certification programs.'
    ],
    statLabel: 'Career Expos & Clinics',
    statValue: '100% Student Access',
    highlightNote: 'Inclusive opportunities for all streams and years.'
  },
  {
    id: 'student-voice',
    number: '04',
    title: 'STUDENT VOICE & FEEDBACK',
    headline: 'YOUR VOICE. HEARD.',
    tagline: 'A real-time student governance portal: Submit, Review, Action.',
    description: 'A digital platform where students can raise concerns, share feedback, suggest ideas and track what happens next.',
    image: '', // Will be replaced by interactive UI showcase
    imageAlt: 'Modern digital student feedback portal and action tracking dashboard',
    deliverables: [
      'Public grievance & idea submission dashboard with anonymous reporting option.',
      'Automated SLA tracking: Every submission acknowledged in 24 hours, reviewed in 72 hours.',
      'Weekly Alliance Status Bulletin detailing every resolved student ticket.',
      'Monthly Open Town Hall with Alliance representatives and college admin.'
    ],
    statLabel: 'Grievance Resolution Target',
    statValue: '72hr Acknowledgment',
    highlightNote: 'Full accountability with live public progress markers.'
  },
  {
    id: 'sports-access',
    number: '05',
    title: 'SPORTS ROOM & ATHLETICS',
    headline: 'SPORTS FOR STUDENTS.',
    tagline: 'Unrestricted equipment access, modernized sports room & leagues.',
    description: 'Better access to sports facilities means more participation, more activity and more opportunities for students to play and compete.',
    image: '/src/assets/images/manifesto_sports_room_1791300883945.jpg',
    imageAlt: 'Modern student sports room with table tennis, badminton and athletic gear neatly arranged',
    deliverables: [
      'Extended sports room hours: Open from 7:00 AM to 7:00 PM including weekends before tournaments.',
      'Complete restocking of high-grade badminton rackets, table tennis equipment, cricket kits, and basketballs.',
      'Establishment of the Annual Inter-Department Sports Olympiad and e-sports championships.',
      'Fair, reservation-free court booking and designated daily practice hours for women athletes.'
    ],
    statLabel: 'Facility Operating Hours',
    statValue: '12 Hours Daily',
    highlightNote: 'Open access for all students with zero red tape.'
  },
  {
    id: 'sanitary-hygiene',
    number: '06',
    title: 'SANITARY HYGIENE & WELLNESS',
    headline: 'DIGNITY. HYGIENE. ACCESS.',
    tagline: 'Restored automated vending dispensers, pristine restrooms & privacy.',
    description: 'Restore the sanitary facility so students have reliable access to essential hygiene support when they need it.',
    image: '/src/assets/images/manifesto_hygiene_facility_1791300901067.jpg',
    imageAlt: 'Dignified, clean modern restroom with automated sanitary dispenser and spotless hygiene standards',
    deliverables: [
      'Complete restoration and 100% operational guarantee of automated sanitary pad vending dispensers.',
      'Daily restock logs and sensor checks to ensure machines never run out during working hours.',
      'Dignified, touch-free waste disposal mechanisms and scheduled sanitization every 3 hours.',
      'Discreet emergency hygiene kits stationed in college medical room and departmental rest lounges.'
    ],
    statLabel: 'Dispenser Uptime',
    statValue: '100% Functional',
    highlightNote: 'Handled with dignity, maturity, and uncompromised urgency.'
  }
];

export const INITIAL_TICKETS: StudentTicket[] = [
  {
    id: 't-1',
    code: 'TPA-1042',
    category: 'issue',
    title: 'Broken desk rows in Main Block Room 204 need bench screw fixing',
    department: 'Science & Tech Dept',
    status: 'ACTION SCHEDULED',
    upvotes: 84,
    date: 'Oct 04, 2026'
  },
  {
    id: 't-2',
    code: 'TPA-1039',
    category: 'idea',
    title: 'Host an inter-department outdoor acoustic open-mic night at quad amphitheatre',
    department: 'Humanities & Arts',
    status: 'UNDER REVIEW',
    upvotes: 142,
    date: 'Oct 03, 2026'
  },
  {
    id: 't-3',
    code: 'TPA-1035',
    category: 'issue',
    title: 'Vending dispenser restocking in 2nd Floor Block B washroom facility',
    department: 'Commerce & Management',
    status: 'ACTION SCHEDULED',
    upvotes: 119,
    date: 'Oct 02, 2026'
  },
  {
    id: 't-4',
    code: 'TPA-1028',
    category: 'idea',
    title: 'Extend evening sports room access till 7:30 PM for badminton practice',
    department: 'Engineering Dept',
    status: 'UNDER REVIEW',
    upvotes: 97,
    date: 'Oct 01, 2026'
  }
];
