import { useState, RefObject } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  Check, 
  ChevronUp, 
  ChevronDown, 
  ShieldCheck, 
  Laptop, 
  TrendingUp, 
  Briefcase, 
  Award, 
  MapPin, 
  Users, 
  Star, 
  Clock, 
  Sparkles, 
  Brain, 
  Mail, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { 
  MonthCurriculum, 
  FacultyMember, 
  FaqItem,
  trustBarMetrics,
  problemCards,
  challengesData,
  whatYouWillLearnGrid,
  outcomesList,
  curriculumData,
  facultyData,
  whoShouldJoinCards,
  faqData
} from '../data/courseData';

// ----------------------------------------------------
// 1. OVERVIEW VIEW
// ----------------------------------------------------
interface OverviewProps {
  timeLeft: { days: number; hours: number; minutes: number; seconds: number };
  openEnrollModal: () => void;
  selectTab: (tab: any) => void;
}

export function OverviewView({ timeLeft, openEnrollModal, selectTab }: OverviewProps) {
  return (
    <div className="space-y-12 text-left" id="overview-tab-view">
      {/* Hero Block with Glass background */}
      <div className="spatial-glass rounded-3xl p-6 sm:p-10 border border-white/60 relative overflow-hidden" id="spatial-hero-block">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand/5 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none animate-float-slower" />

        <div className="relative z-10" id="spatial-hero-content">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-brand text-[10px] font-extrabold uppercase tracking-wider rounded border border-orange-100 mb-6" id="overview-tagline">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            6-Month LIVE Expert-Level Course
          </span>
          
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] text-slate-900 tracking-tight mb-4" id="overview-headline">
            Master Contract Drafting.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-500 font-black">Build Freelancing Income.</span><br />
            Become Client-Ready in 6 Months.
          </h1>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mb-8" id="overview-subheadline">
            Learn to draft 24+ high-demand agreements through live expert-led sessions, practical assignments, personalised feedback, and freelancing guidance on platforms like Upwork, Fiverr, and LinkedIn.
          </p>

          {/* Highlights Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 w-full mb-8" id="overview-highlights-grid">
            {[
              { value: 'July 1', label: 'Program Starts' },
              { value: '54+', label: 'Live Sessions' },
              { value: '24+', label: 'Agreements Covered' },
              { value: '10', label: 'Assignments + Feedback' },
              { value: 'Lifetime', label: 'Recordings Access' },
              { value: 'LWS Certified', label: 'Industry Recognised' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white/70 hover:bg-white hover:border-brand/35 transition-all duration-300 rounded-xl border border-slate-100/80 flex flex-col justify-center shadow-[0_2px_8px_rgba(15,23,42,0.01)]" id={`overview-metric-${idx}`}>
                <div className="text-brand font-display font-extrabold text-sm sm:text-base mb-0.5 leading-none">{item.value}</div>
                <div className="text-slate-500 text-[9px] uppercase font-bold tracking-wider leading-tight">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Pricing Summary Card */}
          <div className="bg-white/80 rounded-2xl p-4 border border-slate-150/80 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm" id="overview-price-callout">
            <div>
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block mb-1">PROMOTION OFFER</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-mono font-extrabold text-slate-900">₹24,999</span>
                <span className="text-slate-400 line-through text-xs font-mono">₹60,000</span>
                <span className="text-[9px] bg-brand text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ml-1">Save 58%</span>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button 
                onClick={openEnrollModal}
                className="w-full sm:w-auto bg-brand hover:bg-brand-hover text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer text-center"
              >
                Lock Seat
              </button>
              <button 
                onClick={() => selectTab('syllabus')}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all cursor-pointer text-center border border-slate-200"
              >
                Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Metrics Section */}
      <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-150" id="overview-trust-panel">
        <h3 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider mb-5 text-center">Proven Training Impact & Reach</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4" id="overview-trust-grid">
          {trustBarMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-4 border border-slate-150 text-center flex flex-col items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.02)]" id={`overview-trust-${idx}`}>
                <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-brand mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-mono font-extrabold text-slate-950 text-sm leading-none">{metric.value}</div>
                <div className="text-slate-500 text-[9px] uppercase font-bold tracking-wider mt-1 leading-tight">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. THE PROBLEM & SANDBOX VIEW
// ----------------------------------------------------
interface ProblemsProps {
  challengeIdx: number;
  setChallengeIdx: (idx: number) => void;
  challengeStep: 'draft' | 'spotted' | 'corrected';
  setChallengeStep: (step: 'draft' | 'spotted' | 'corrected') => void;
}

export function ProblemsView({ challengeIdx, setChallengeIdx, challengeStep, setChallengeStep }: ProblemsProps) {
  const currentCh = challengesData[challengeIdx];

  return (
    <div className="space-y-12 text-left" id="problems-tab-view">
      
      {/* Core Gap Description */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm" id="the-gap-panel">
        <span className="text-[10px] text-brand font-extrabold uppercase tracking-wider block mb-2">The Educational Gap</span>
        <h2 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight mb-4">
          Why Standard Law Degrees Fail to Make You "Drafting-Ready"
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          Traditional law school curriculum focuses heavily on case-law memorization and judicial history, completely ignoring commercial deal-making. As a result, students are left copying random templates online without understanding the strategic consequences of individual terms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="problems-grid">
          {problemCards.map((card, idx) => (
            <div key={card.id} className="bg-slate-50/50 rounded-xl p-5 border border-slate-200" id={card.id}>
              <div className="w-6 h-6 rounded-full bg-brand/10 text-brand font-mono font-bold text-xs flex items-center justify-center mb-3">
                {idx + 1}
              </div>
              <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm mb-2">{card.title}</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Drafting Challenge Sandbox */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xl" id="interactive-challenge-section">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
        
        <div className="relative z-10" id="challenge-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-[9px] bg-white/15 px-2.5 py-1 rounded font-mono font-bold tracking-wider text-orange-400 uppercase">Interactive Legal Sandbox</span>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mt-2">Identify Contract Drafting Traps</h3>
              <p className="text-white/60 text-xs mt-1">Can you redline these three hazardous template clauses used in NDAs, service contracts, and indemnities?</p>
            </div>

            {/* Sandbox Tabs Selector */}
            <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 shrink-0 self-start" id="challenge-tab-selector">
              {challengesData.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => { setChallengeIdx(idx); setChallengeStep('draft'); }}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    challengeIdx === idx 
                      ? 'bg-brand text-white shadow-sm' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  id={`challenge-tab-btn-${idx}`}
                >
                  Clause {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" id="challenge-grid-body">
            
            {/* Left Box: Active Clause Details */}
            <div className="lg:col-span-6 space-y-4" id="challenge-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <span className="text-[8px] text-orange-400 font-extrabold uppercase tracking-widest block mb-1">{currentCh.type}</span>
                <h4 className="font-display font-bold text-white text-sm mb-2">{currentCh.title}</h4>
                <p className="text-white/70 text-[11px] sm:text-xs leading-relaxed">{currentCh.problem}</p>
              </div>

              {/* Progress Flow Selector */}
              <div className="grid grid-cols-3 gap-2 bg-white/5 p-1 rounded-xl border border-white/10" id="challenge-step-selector">
                {[
                  { step: 'draft', label: '1. Standard Draft' },
                  { step: 'spotted', label: '2. Spot the Trap' },
                  { step: 'corrected', label: '3. Redlined Fix' }
                ].map((item) => (
                  <button
                    key={item.step}
                    onClick={() => setChallengeStep(item.step as any)}
                    className={`py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                      challengeStep === item.step 
                        ? 'bg-white text-slate-900 font-extrabold shadow-sm' 
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                    id={`challenge-step-btn-${item.step}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Box: Code / Clause Workspace Rendering */}
            <div className="lg:col-span-6 bg-slate-950 rounded-xl border border-white/10 overflow-hidden shadow-inner font-mono text-xs flex flex-col min-h-[220px]" id="challenge-right">
              
              {/* Fake Terminal Header */}
              <div className="bg-slate-900 border-b border-white/10 px-4 py-2 flex items-center justify-between shrink-0" id="challenge-terminal-header">
                <span className="text-[10px] text-white/40 font-mono font-medium">docket_draft_workspace.ts</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between text-left" id="challenge-terminal-body">
                <div>
                  {challengeStep === 'draft' && (
                    <div id="challenge-pane-draft" className="space-y-3">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Original Clause:</span>
                      <p className="text-slate-300 leading-relaxed italic text-xs">
                        "{currentCh.originalDraft}"
                      </p>
                    </div>
                  )}

                  {challengeStep === 'spotted' && (
                    <div id="challenge-pane-spotted" className="space-y-3 animate-fade-in">
                      <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest block">⚠️ Identified Risk:</span>
                      <p className="text-slate-300 leading-relaxed italic text-xs">
                        "{currentCh.originalDraft.replace(currentCh.trapHighlight, `[[ ${currentCh.trapHighlight.toUpperCase()} ]]`)}"
                      </p>
                      <div className="bg-red-500/10 border border-red-500/20 text-red-300 rounded p-3 text-[11px] leading-normal font-sans">
                        <strong>The Trap:</strong> This phrasing establishes indefinite liabilities. Under law, unlimited liabilities can hold the drafting party responsible forever.
                      </div>
                    </div>
                  )}

                  {challengeStep === 'corrected' && (
                    <div id="challenge-pane-corrected" className="space-y-3 animate-fade-in">
                      <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block">✅ Defensive Redline:</span>
                      <p className="text-emerald-300 leading-relaxed font-semibold text-xs">
                        "{currentCh.correctedDraft}"
                      </p>
                      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded p-3 text-[11px] leading-normal font-sans">
                        <strong>Feedback:</strong> {currentCh.feedback}
                      </div>
                    </div>
                  )}
                </div>

                {/* Micro instructions button */}
                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between shrink-0" id="challenge-terminal-footer">
                  <span className="text-[10px] text-white/30">Step {challengeStep === 'draft' ? '1/3' : challengeStep === 'spotted' ? '2/3' : '3/3'}</span>
                  {challengeStep !== 'corrected' ? (
                    <button 
                      onClick={() => setChallengeStep(challengeStep === 'draft' ? 'spotted' : 'corrected')}
                      className="text-[10px] text-brand font-bold uppercase tracking-wider flex items-center gap-1 hover:text-orange-400 cursor-pointer"
                      id="challenge-terminal-next-btn"
                    >
                      Next Step <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const nextIdx = (challengeIdx + 1) % challengesData.length;
                        setChallengeIdx(nextIdx);
                        setChallengeStep('draft');
                      }}
                      className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1 hover:text-emerald-300 cursor-pointer"
                      id="challenge-terminal-cycle-btn"
                    >
                      Try Next Clause <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------
// 3. COURSE CURRICULUM VIEW
// ----------------------------------------------------
interface SyllabusProps {
  expandedMonth: number | null;
  setExpandedMonth: (month: number | null) => void;
}

export function SyllabusView({ expandedMonth, setExpandedMonth }: SyllabusProps) {
  return (
    <div className="space-y-12 text-left" id="syllabus-tab-view">
      
      {/* What you will learn grid */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm" id="skills-overview-panel">
        <span className="text-[10px] text-brand font-extrabold uppercase tracking-wider block mb-2">Detailed Curricular Architecture</span>
        <h2 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight mb-4">
          Core Agreement Skillset You Will Acquire
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6" id="skills-overview-grid">
          {whatYouWillLearnGrid.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:border-brand/20 transition-colors" id={`skills-item-${idx}`}>
                <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-brand mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-slate-950 text-xs sm:text-sm mb-1.5">{item.title}</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Outcomes Grid */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-150" id="outcomes-panel">
        <h3 className="font-display font-bold text-slate-900 text-base mb-6 text-center">Concrete Learning Outcomes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="outcomes-grid">
          {outcomesList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4.5 border border-slate-150 flex gap-3 text-left shadow-[0_1px_2px_rgba(0,0,0,0.01)]" id={`outcomes-item-${idx}`}>
              <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm mb-1">{item.title}</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Month-by-month Accordion */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm" id="curriculum-roadmap">
        <h3 className="font-display font-bold text-slate-950 text-lg mb-6">6-Month Structured Syllabus Roadmap</h3>
        
        <div className="space-y-4" id="curriculum-accordion-container">
          {curriculumData.map((curr, idx) => {
            const isOpen = expandedMonth === idx;
            return (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-colors" id={`curriculum-card-${idx}`}>
                <button
                  onClick={() => setExpandedMonth(isOpen ? null : idx)}
                  className="w-full px-6 py-4 bg-slate-50/50 flex items-center justify-between text-left cursor-pointer"
                  id={`curriculum-toggle-btn-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold text-brand bg-orange-50 border border-orange-100 px-2 py-0.5 rounded uppercase">
                      {curr.month}
                    </span>
                    <span className="font-display font-bold text-slate-900 text-xs sm:text-sm">
                      {curr.title}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 py-5 border-t border-slate-150 space-y-4 text-left bg-white" id={`curriculum-expanded-${idx}`}>
                        <div id={`curriculum-topics-${idx}`}>
                          <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest block mb-2">WEEKLY MODULE TOPICS:</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600">
                            {curr.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2" id={`topic-item-${idx}-${tIdx}`}>
                                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Practical Assignment Box */}
                        <div className="bg-orange-50/50 rounded-lg p-3.5 border border-brand/10" id={`curriculum-assignment-${idx}`}>
                          <div className="flex items-center gap-1.5 text-brand mb-1.5">
                            <span className="text-[9px] bg-brand text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">PRACTICAL ASSIGNMENT</span>
                          </div>
                          <p className="text-[11px] text-slate-700 leading-normal font-medium">{curr.assignment}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------
// 4. CAREER & AI VIEW
// ----------------------------------------------------
export function CareerView() {
  return (
    <div className="space-y-12 text-left" id="career-tab-view">
      
      {/* Freelancing and Career Support metrics cards */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm" id="career-freelance-panel">
        <span className="text-[10px] text-brand font-extrabold uppercase tracking-wider block mb-2">Remote Work & Client Pipelines</span>
        <h2 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight mb-4">
          Unlocking Global Income Through Contract Freelancing
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          Unlike other law school courses, we don't just teach the theories of contract drafting. We provide hands-on pipelines on exactly how to pitch, bid for, and win contract jobs on global platforms, transforming your legal know-how into a robust freelance asset.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" id="career-gigs-grid">
          {[
            { metric: '$100k+', label: 'Elite Freelancing', desc: 'Billed on Upwork/Fiverr by guest mentors' },
            { metric: '1-on-1', label: 'Gig Optimisation', desc: 'Custom portfolio redlines and proposals review' },
            { metric: 'WhatsApp', label: 'VIP Groups', desc: 'Direct updates on corporate legal jobs & internships' },
            { metric: 'Lifetime', label: 'Sponsorship Pack', desc: 'Custom invoice templates & profile credentials' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50/50 rounded-xl p-4.5 border border-slate-200 text-center flex flex-col justify-between" id={`career-card-${idx}`}>
              <div>
                <span className="font-mono font-black text-slate-950 text-base sm:text-lg block leading-none mb-1">{item.metric}</span>
                <span className="text-[10px] font-bold text-brand block uppercase tracking-wider mb-2">{item.label}</span>
              </div>
              <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI-Ready Legal Career Integration */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xl" id="ai-career-integration">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand/5 blur-3xl pointer-events-none animate-float-slow" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="ai-career-grid">
          <div className="lg:col-span-7 space-y-4" id="ai-career-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-orange-400 text-[10px] font-extrabold uppercase tracking-wider rounded border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              Advanced AI Legal Workflows
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-white">
              Become an AI-Leveraged Commercial Drafter
            </h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Legal practice is changing. Top global law firms expect associates and freelancers to utilize generative AI responsibly to speed up contract analysis, identify gaps, and structure agreements.
            </p>
            
            <ul className="space-y-2 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>4-Hour AI Contract Engineering Live Workshop</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>31-Page Custom AI Prompts eBook for Lawyers & Corporate Counsels</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>1-Month Premium Access to Indian Kanoon Prism Pro database</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6" id="ai-career-right">
            <span className="text-[9px] text-orange-400 font-extrabold uppercase tracking-widest block mb-2">BONUS INCLUSION DETAILS</span>
            <div className="space-y-3.5 text-left text-xs text-white/70">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex gap-3">
                <Brain className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-[11px] sm:text-xs">Advanced Prompt Libraries</h4>
                  <p className="text-[10px] mt-0.5">Ready-to-use template strings for structuring NDAs, shareholder deals, and corporate policies safely.</p>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex gap-3">
                <Laptop className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-[11px] sm:text-xs">Indian Kanoon Premium Access</h4>
                  <p className="text-[10px] mt-0.5">Quickly query commercial judgments, precedent rulings, and legislative amendments on-the-fly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------
// 5. INSTRUCTORS & CHECKLIST VIEW
// ----------------------------------------------------
interface FacultyProps {
  expandedFaculty: number | null;
  setExpandedFaculty: (faculty: number | null) => void;
}

export function FacultyView({ expandedFaculty, setExpandedFaculty }: FacultyProps) {
  return (
    <div className="space-y-12 text-left" id="faculty-tab-view">
      
      {/* Faculty Profiles Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm" id="faculty-grid-panel">
        <span className="text-[10px] text-brand font-extrabold uppercase tracking-wider block mb-2">Industry Vetted Mentorship</span>
        <h2 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight mb-4">
          Learn From Elite Corporate Lawyers & Authors
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" id="faculty-grid">
          {facultyData.map((f, idx) => {
            const isExpanded = expandedFaculty === idx;
            return (
              <div 
                key={idx} 
                className="bg-slate-50/50 rounded-xl p-4.5 border border-slate-200 flex flex-col justify-between text-left transition-all hover:border-brand/20"
                id={`faculty-card-${idx}`}
              >
                <div>
                  <h4 className="font-display font-extrabold text-slate-900 text-xs sm:text-sm">{f.name}</h4>
                  <span className="text-[10px] text-brand font-bold block mb-2 uppercase tracking-wide leading-tight">{f.role}</span>
                  <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-3">{f.bio}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-col gap-2" id={`faculty-action-${idx}`}>
                  {isExpanded && (
                    <p className="text-slate-600 text-[10px] sm:text-[11px] leading-relaxed bg-white border border-slate-150 p-2.5 rounded-lg mb-1 animate-fade-in">
                      {f.longBio}
                    </p>
                  )}
                  <button 
                    onClick={() => setExpandedFaculty(isExpanded ? null : idx)}
                    className="text-[9px] text-brand hover:text-brand-hover font-bold uppercase tracking-wider text-left flex items-center gap-1 cursor-pointer"
                    id={`faculty-btn-${idx}`}
                  >
                    {isExpanded ? 'Collapse Bio' : 'Expand full biography'} <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Candidate Checklist Cards */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-150" id="who-should-join-panel">
        <h3 className="font-display font-bold text-slate-900 text-base mb-6 text-center">Is This Course Right For You?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" id="who-should-join-grid">
          {whoShouldJoinCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-150 text-left flex flex-col justify-between" id={`who-join-item-${idx}`}>
              <div>
                <span className="text-[9px] bg-orange-50 text-brand px-2 py-0.5 rounded font-bold uppercase tracking-wider block mb-2.5 w-max">
                  {card.badge}
                </span>
                <h4 className="font-display font-bold text-slate-950 text-xs sm:text-sm mb-1.5">{card.title}</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------
// 6. INVESTMENT & FAQS VIEW
// ----------------------------------------------------
interface InvestmentProps {
  pricingTier: 'student' | 'professional';
  setPricingTier: (tier: 'student' | 'professional') => void;
  openEnrollModal: () => void;
  expandedFaq: number | null;
  setExpandedFaq: (faq: number | null) => void;
}

export function InvestmentView({ pricingTier, setPricingTier, openEnrollModal, expandedFaq, setExpandedFaq }: InvestmentProps) {
  return (
    <div className="space-y-12 text-left" id="investment-tab-view">
      
      {/* Tier Selector & Fee Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center" id="investment-selector-panel">
        <span className="text-[10px] text-brand font-extrabold uppercase tracking-wider block mb-3">Tuition Fees & Enrollment Option</span>
        <h2 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight mb-6">
          Invest in Your Contract Drafting Expertise
        </h2>

        {/* Dynamic pricing toggle switches */}
        <div className="flex justify-center mb-8" id="pricing-tier-selector">
          <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200">
            <button
              onClick={() => setPricingTier('student')}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                pricingTier === 'student'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              id="pricing-toggle-student"
            >
              🎓 Student Edition
            </button>
            <button
              onClick={() => setPricingTier('professional')}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                pricingTier === 'professional'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              id="pricing-toggle-professional"
            >
              💼 Professional Level
            </button>
          </div>
        </div>

        {/* Pricing Card Block */}
        <div className="max-w-xl mx-auto bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden text-left" id="pricing-card-container">
          <div className="bg-brand px-6 py-4 flex items-center justify-between text-white" id="pricing-header-banner">
            <span className="font-display font-bold text-xs tracking-wider uppercase">⚡ Limited seats remaining</span>
            <span className="text-[10px] bg-white/25 px-2.5 py-1 rounded font-bold uppercase tracking-wide">Closing June 30</span>
          </div>

          <div className="p-6 sm:p-8" id="pricing-card-body">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
              <div>
                <h3 className="font-display font-bold text-slate-950 text-sm uppercase tracking-wider">
                  {pricingTier === 'student' ? 'Student Level Drafting Program' : 'Professional Level Drafting Program'}
                </h3>
                <p className="text-slate-500 text-[11px] mt-1">6 Months of LIVE instruction & career mentorship</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-mono font-extrabold text-slate-900">
                    {pricingTier === 'student' ? '₹24,999' : '₹34,999'}
                  </span>
                  <span className="text-slate-400 line-through text-xs font-mono">
                    {pricingTier === 'student' ? '₹60,000' : '₹85,000'}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded inline-block mt-1">
                  {pricingTier === 'student' ? 'Save 58%' : 'Save 59%'}
                </span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="py-6" id="pricing-inclusions-grid">
              <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-3">EVERYTHING THAT IS INCLUDED:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-600">
                {pricingTier === 'student' ? [
                  '54+ Live Interactive Sessions',
                  'Line-by-line Portfolio Feedback',
                  'Upwork & Fiverr Profile Setup',
                  'Indian Kanoon Prism Pro (1 Mo)',
                  'Lifetime Course Material Access',
                  '10 Detailed Drafting Assignments',
                  'Structured Reading Resources',
                  'WhatsApp Job/Internship Groups',
                  '31-Page AI Prompts eBook',
                  'Expert-Level Course Certificate'
                ].map((inc, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2" id={`inclusion-item-${iIdx}`}>
                    <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    <span className="text-[11px]">{inc}</span>
                  </div>
                )) : [
                  '54+ Live Interactive Sessions',
                  'Line-by-line Portfolio Feedback',
                  'Upwork & Fiverr Profile Setup',
                  'Indian Kanoon Prism Pro (3 Mo)',
                  'Lifetime Course Material Access',
                  '10 Detailed Drafting Assignments',
                  'Structured Reading Resources',
                  'WhatsApp Job/Internship Groups',
                  '31-Page AI Prompts eBook',
                  'Expert-Level Course Certificate',
                  '1-on-1 Profile Optimization Review',
                  'Custom Corporate Sponsorship Invoice',
                  'Advanced Corporate Advisory Modules',
                  'Corporate Legal Network Introductions'
                ].map((inc, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2 text-slate-700" id={`inclusion-item-prof-${iIdx}`}>
                    <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    <span className={`text-[11px] ${iIdx >= 10 ? 'font-bold text-brand' : ''}`}>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={openEnrollModal}
              className="w-full bg-brand hover:bg-brand-hover text-white text-[11px] font-bold uppercase tracking-wider py-3.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer text-center block"
              id="pricing-card-enroll-btn"
            >
              Enroll Now & Secure Discounted Seat
            </button>
          </div>
        </div>
      </div>

      {/* 100% Guarantee Block */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start gap-6 text-left" id="guarantee-panel">
        <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-brand mt-1" id="guarantee-icon">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div id="guarantee-text">
          <span className="text-[10px] text-brand font-extrabold uppercase tracking-wider block mb-1">100% Risk-Free Guarantee</span>
          <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base mb-2">
            Lawctopus Law School Refund Protection Policy
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed mb-4">
            We are extremely confident in the curriculum. If you sincerely complete the course requirements and still feel it did not add significant value to your career, Lawctopus offers a 100% fee refund.
          </p>
          
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200" id="guarantee-eligibility">
            <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wider block mb-2">ELIGIBILITY CRITERIA:</span>
            <ul className="space-y-1 text-xs text-slate-600">
              <li className="flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                <span className="text-[11px]">Attend at least 66% live classes with your video turned on</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                <span className="text-[11px]">Submit all assignments and receive passing grades</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                <span className="text-[11px]">Email support within 10 days after course completion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm text-left" id="faqs-panel">
        <h3 className="font-display font-bold text-slate-900 text-lg mb-6">Frequently Asked Questions</h3>
        
        <div className="space-y-4" id="faq-accordion">
          {faqData.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200"
                id={`faq-accordion-item-${idx}`}
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  id={`faq-toggle-btn-${idx}`}
                >
                  <span className="font-display font-bold text-slate-900 text-xs sm:text-sm">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="px-5 pb-4 pt-1 border-t border-slate-100 text-slate-600 text-xs leading-relaxed text-left" id={`faq-expanded-content-${idx}`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
