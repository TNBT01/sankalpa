import { useState } from 'react';
import { 
  AlertCircle, 
  MessageSquare, 
  Lightbulb, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ThumbsUp, 
  Send, 
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { INITIAL_TICKETS, StudentTicket } from '../data/campaignData';

interface StudentVoiceSectionProps {
  onOpenVoiceModal: () => void;
}

export function StudentVoiceSection({ onOpenVoiceModal }: StudentVoiceSectionProps) {
  const [activeTab, setActiveTab] = useState<'problem' | 'feedback' | 'idea' | 'track'>('problem');
  const [tickets, setTickets] = useState<StudentTicket[]>(INITIAL_TICKETS);
  const [searchCode, setSearchCode] = useState('');
  
  // Interactive Form State
  const [title, setTitle] = useState('');
  const [dept, setDept] = useState('Computer Science & IT');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<StudentTicket | null>(null);
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newCode = `TPA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCategory: 'issue' | 'idea' | 'feedback' = 
      activeTab === 'problem' ? 'issue' : activeTab === 'idea' ? 'idea' : 'feedback';

    const newTicket: StudentTicket = {
      id: `t-${Date.now()}`,
      code: newCode,
      category: newCategory,
      title: title.trim(),
      department: isAnonymous ? 'Anonymous Student' : dept,
      status: 'SUBMITTED',
      upvotes: 1,
      date: 'Just now'
    };

    setTickets([newTicket, ...tickets]);
    setSubmittedTicket(newTicket);
    setTitle('');
  };

  const handleUpvote = (id: string) => {
    if (hasVoted[id]) return;
    setTickets(prev =>
      prev.map(t => (t.id === id ? { ...t, upvotes: t.upvotes + 1 } : t))
    );
    setHasVoted(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="student-voice" className="py-24 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      {/* Visual background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MANIFESTO PRIORITY 04</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-[0.95] mb-4">
            YOUR VOICE. <span className="text-amber-400">HEARD.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-medium max-w-2xl mx-auto leading-relaxed">
            A digital platform where students can raise concerns, share feedback, suggest ideas and track what happens next.
          </p>
        </div>

        {/* Process Flow Banner: SUBMIT -> REVIEW -> ACTION */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-black font-black flex items-center justify-center font-display text-sm shrink-0">
                1
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-amber-400 block uppercase">Step 01</span>
                <span className="text-sm font-bold text-white uppercase font-display tracking-wider">SUBMIT</span>
              </div>
            </div>

            <div className="hidden sm:block text-neutral-600">
              <ArrowRight className="w-5 h-5 text-amber-400/60" />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-xl bg-neutral-800 text-amber-400 font-black border border-amber-400/30 flex items-center justify-center font-display text-sm shrink-0">
                2
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 block uppercase">Step 02</span>
                <span className="text-sm font-bold text-white uppercase font-display tracking-wider">REVIEW</span>
              </div>
            </div>

            <div className="hidden sm:block text-neutral-600">
              <ArrowRight className="w-5 h-5 text-amber-400/60" />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-black border border-emerald-500/40 flex items-center justify-center font-display text-sm shrink-0">
                3
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 block uppercase">Step 03</span>
                <span className="text-sm font-bold text-white uppercase font-display tracking-wider">ACTION</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Modern Digital Platform Interface Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Top Interface Bar */}
          <div className="px-6 py-4 bg-neutral-950/80 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs font-mono text-neutral-400 tracking-wider">
                PORTAL // STUDENT_GRIEVANCE_CONSOLE_V1
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE ALLIANCE DESK ACTIVE</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 p-2 bg-neutral-950/40 border-b border-neutral-800 gap-1.5">
            <button
              onClick={() => { setActiveTab('problem'); setSubmittedTicket(null); }}
              className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'problem'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>REPORT A PROBLEM</span>
            </button>

            <button
              onClick={() => { setActiveTab('feedback'); setSubmittedTicket(null); }}
              className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'feedback'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>GIVE FEEDBACK</span>
            </button>

            <button
              onClick={() => { setActiveTab('idea'); setSubmittedTicket(null); }}
              className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'idea'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>SUGGEST AN IDEA</span>
            </button>

            <button
              onClick={() => setActiveTab('track')}
              className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'track'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              <Search className="w-4 h-4 text-emerald-400" />
              <span>TRACK REQUEST</span>
            </button>
          </div>

          {/* Interface Body */}
          <div className="p-6 sm:p-8">
            {activeTab !== 'track' ? (
              <div>
                {submittedTicket ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-xl font-black text-white font-display">
                      Voice Submission Received!
                    </h4>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto">
                      Your ticket has been logged into the Triple Power Alliance governance dashboard.
                    </p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 font-mono text-amber-400 font-bold text-lg">
                      Ticket Code: {submittedTicket.code}
                    </div>
                    <div className="flex items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => setActiveTab('track')}
                        className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider font-display cursor-pointer"
                      >
                        Track in Live Queue
                      </button>
                      <button
                        onClick={() => setSubmittedTicket(null)}
                        className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                        {activeTab === 'problem'
                          ? 'What is the campus issue or grievance?'
                          : activeTab === 'idea'
                          ? 'What is your idea to improve campus life?'
                          : 'Share your feedback for the Alliance'}
                      </label>
                      <textarea
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={
                          activeTab === 'problem'
                            ? 'e.g. Broken bench screws in Block B 3rd floor, or water dispenser not cooling...'
                            : activeTab === 'idea'
                            ? 'e.g. Host an acoustic musical evening at amphitheatre every 2nd Friday...'
                            : 'e.g. We need clearer announcements regarding sports room badminton tournament timings...'
                        }
                        rows={3}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm placeholder:text-neutral-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                          Your Department / Stream
                        </label>
                        <select
                          value={dept}
                          onChange={(e) => setDept(e.target.value)}
                          disabled={isAnonymous}
                          className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-amber-400 text-white text-sm focus:outline-none disabled:opacity-50"
                        >
                          <option value="Computer Science & IT">Computer Science & IT</option>
                          <option value="Commerce & Management">Commerce & Management</option>
                          <option value="Science & Biotechnology">Science & Biotechnology</option>
                          <option value="Humanities & Social Sciences">Humanities & Social Sciences</option>
                          <option value="Engineering & Technology">Engineering & Technology</option>
                          <option value="Design & Media Studies">Design & Media Studies</option>
                        </select>
                      </div>

                      <div className="flex items-center sm:pt-6">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={isAnonymous}
                            onChange={(e) => setIsAnonymous(e.target.checked)}
                            className="w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-amber-400 focus:ring-amber-400"
                          />
                          <span className="text-xs font-medium text-neutral-300">
                            Submit Anonymously (Identity Protected)
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Directly routed to One Voice, Sankalpa & People Tiger Power</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit to Alliance Portal</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* TRACK YOUR REQUEST TAB */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search ticket code (e.g. TPA-1042)..."
                      value={searchCode}
                      onChange={(e) => setSearchCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                    />
                  </div>
                  <button
                    onClick={() => setSearchCode('')}
                    className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Reset Filter
                  </button>
                </div>

                {/* Tickets Feed */}
                <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                  {tickets
                    .filter(t => !searchCode || t.code.toLowerCase().includes(searchCode.toLowerCase()) || t.title.toLowerCase().includes(searchCode.toLowerCase()))
                    .map((ticket) => (
                      <div
                        key={ticket.id}
                        className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="font-mono font-bold text-amber-400">
                              {ticket.code}
                            </span>
                            <span className="text-neutral-500">·</span>
                            <span className="text-neutral-400 text-[11px]">
                              {ticket.department}
                            </span>
                            <span className="text-neutral-500">·</span>
                            <span className="text-neutral-500 text-[11px]">
                              {ticket.date}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-neutral-200">
                            {ticket.title}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {/* Status Badge */}
                          <span
                            className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${
                              ticket.status === 'ACTION SCHEDULED'
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                : ticket.status === 'UNDER REVIEW'
                                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            }`}
                          >
                            {ticket.status}
                          </span>

                          {/* Upvote button */}
                          <button
                            onClick={() => handleUpvote(ticket.id)}
                            className={`px-2.5 py-1 rounded-md border text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                              hasVoted[ticket.id]
                                ? 'bg-amber-400 text-black border-amber-400'
                                : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-amber-400/50'
                            }`}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>{ticket.upvotes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar with Prominent Button */}
          <div className="px-6 py-4 bg-neutral-950/80 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-neutral-400">
              Live feedback updates are monitored directly by the Triple Power Alliance representatives.
            </span>
            <button
              onClick={onOpenVoiceModal}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-display font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
            >
              MAKE YOUR VOICE HEARD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
