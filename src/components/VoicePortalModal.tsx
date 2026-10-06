import { useState } from 'react';
import { X, Send, CheckCircle2, ShieldAlert, Sparkles, MessageSquare, AlertCircle, Lightbulb } from 'lucide-react';
import { StudentTicket } from '../data/campaignData';

interface VoicePortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTicketCreated?: (ticket: StudentTicket) => void;
}

export function VoicePortalModal({ isOpen, onClose, onTicketCreated }: VoicePortalModalProps) {
  const [category, setCategory] = useState<'issue' | 'feedback' | 'idea'>('issue');
  const [title, setTitle] = useState('');
  const [dept, setDept] = useState('Computer Science & IT');
  const [year, setYear] = useState('2nd Year');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const code = `TPA-${Math.floor(2000 + Math.random() * 8000)}`;
    const newTicket: StudentTicket = {
      id: `t-${Date.now()}`,
      code,
      category,
      title: title.trim(),
      department: isAnonymous ? 'Anonymous Student' : `${dept} (${year})`,
      status: 'SUBMITTED',
      upvotes: 1,
      date: 'Just now'
    };

    if (onTicketCreated) {
      onTicketCreated(newTicket);
    }

    setSubmitted(code);
    setTitle('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">
              Voice Acknowledged
            </h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto">
              Your concern has been submitted directly to the Triple Power Alliance representatives.
            </p>
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 inline-block font-mono text-amber-400 text-xl font-bold">
              Ticket ID: {submitted}
            </div>
            <p className="text-xs text-neutral-400">
              Pipeline SLA: Verified acknowledgement within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(null);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider font-display text-xs cursor-pointer"
              >
                Back to Manifesto
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Student Democracy Portal</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mb-2">
              MAKE YOUR VOICE HEARD
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6">
              “We don't just ask for your vote. We ask for your voice.” Tell the Alliance what your department needs.
            </p>

            {/* Type selector */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setCategory('issue')}
                className={`py-2 px-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  category === 'issue'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>Issue</span>
              </button>

              <button
                type="button"
                onClick={() => setCategory('idea')}
                className={`py-2 px-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  category === 'idea'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>Idea</span>
              </button>

              <button
                type="button"
                onClick={() => setCategory('feedback')}
                className={`py-2 px-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  category === 'feedback'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>Feedback</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Describe what needs attention
                </label>
                <textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Tell us what problem needs solving or what idea can make college life better..."
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-amber-400 focus:outline-none text-white text-sm placeholder:text-neutral-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Department
                  </label>
                  <select
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    disabled={isAnonymous}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-neutral-200 text-xs focus:outline-none disabled:opacity-40"
                  >
                    <option value="Computer Science & IT">Computer Science & IT</option>
                    <option value="Commerce & Management">Commerce & Management</option>
                    <option value="Science & Biotechnology">Science & Biotechnology</option>
                    <option value="Humanities & Social Sciences">Humanities & Social Sciences</option>
                    <option value="Engineering & Technology">Engineering & Technology</option>
                    <option value="Design & Media Studies">Design & Media Studies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Year of Study
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    disabled={isAnonymous}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-neutral-200 text-xs focus:outline-none disabled:opacity-40"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Postgraduate">Postgraduate</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-amber-400 focus:ring-amber-400"
                  />
                  <span className="text-xs font-medium text-neutral-300">
                    Submit Anonymously
                  </span>
                </label>
                <span className="text-[11px] text-neutral-500">
                  Encrypted & Direct
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send to Triple Power Council</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
