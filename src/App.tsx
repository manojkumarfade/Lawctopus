import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Star, 
  Users, 
  ShieldCheck, 
  Award, 
  Clock, 
  Calendar, 
  FileText, 
  MapPin, 
  Brain, 
  TrendingUp, 
  Briefcase, 
  Check, 
  X, 
  Menu, 
  Mail, 
  Sparkles, 
  Compass, 
  Search, 
  Laptop, 
  MessageSquare,
  ChevronRight,
  BookOpen,
  DollarSign,
  AlertCircle
} from 'lucide-react';

// Imported Interfaces & Course Data Arrays
import {
  FacultyMember,
  MonthCurriculum,
  FaqItem,
  PolicyContent,
  trustBarMetrics,
  problemCards,
  challengesData,
  whatYouWillLearnGrid,
  outcomesList,
  curriculumData,
  facultyData,
  whoShouldJoinCards,
  faqData,
  termsOfUse,
  privacyPolicy,
  refundPolicy
} from './data/courseData';

// Imported Sub-page Views for Spatial Layout
import {
  OverviewView,
  ProblemsView,
  SyllabusView,
  CareerView,
  FacultyView,
  InvestmentView
} from './components/PageViews';

export default function App() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Accordion states
  const [expandedMonth, setExpandedMonth] = useState<number | null>(0); // Month 1 open by default
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);

  // Floating CTA state (visible on mobile after scrolling past hero)
  const [showMobileStickyCTA, setShowMobileStickyCTA] = useState(false);

  // Modal registration funnel state
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Law Student'
  });
  const [registrationCode, setRegistrationCode] = useState('');

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Interactive drafting challenge state
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [challengeStep, setChallengeStep] = useState<'draft' | 'spotted' | 'corrected'>('draft');

  // Pricing tier state
  const [pricingTier, setPricingTier] = useState<'student' | 'professional'>('student');

  // Policy modal state
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyContent | null>(null);

  const openPolicy = (policy: PolicyContent) => {
    setActivePolicy(policy);
    setPolicyModalOpen(true);
  };

  // Active Tab state for spatial UI
  const [activeTab, setActiveTab] = useState<'overview' | 'problems' | 'syllabus' | 'career' | 'faculty' | 'investment'>('overview');

  const selectTab = (tab: 'overview' | 'problems' | 'syllabus' | 'career' | 'faculty' | 'investment') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate countdown to June 30, 2026
  useEffect(() => {
    const targetDate = new Date('2026-06-30T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Monitor scroll position to show sticky mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowMobileStickyCTA(true);
      } else {
        setShowMobileStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Open enroll modal
  const openEnrollModal = () => {
    setEnrollModalOpen(true);
    setRegistrationSuccess(false);
  };

  // Handle registration form submit
  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!registrationForm.fullName || !registrationForm.email || !registrationForm.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    // Generate simulated registration code
    const randomCode = 'LLS-CD-' + Math.floor(10000 + Math.random() * 90000);
    setRegistrationCode(randomCode);
    setRegistrationSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand/10 selection:text-brand relative font-sans overflow-x-hidden" id="main-landing-container">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-[100] transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-bar"
      />

      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200" id="sticky-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => selectTab('overview')} id="header-logo-container">
            <div className="w-10 h-10 bg-brand rounded flex items-center justify-center font-bold text-white text-xs text-center" id="logo-badge">
              LWS
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900">
              Lawctopus <span className="text-brand font-medium">Law School</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500" id="desktop-navigation">
            <button onClick={() => selectTab('overview')} className={`transition-colors cursor-pointer ${activeTab === 'overview' ? 'text-brand font-bold' : 'hover:text-brand text-slate-500'}`}>Overview</button>
            <button onClick={() => selectTab('problems')} className={`transition-colors cursor-pointer ${activeTab === 'problems' ? 'text-brand font-bold' : 'hover:text-brand text-slate-500'}`}>The Gap</button>
            <button onClick={() => selectTab('syllabus')} className={`transition-colors cursor-pointer ${activeTab === 'syllabus' ? 'text-brand font-bold' : 'hover:text-brand text-slate-500'}`}>Curriculum</button>
            <button onClick={() => selectTab('career')} className={`transition-colors cursor-pointer ${activeTab === 'career' ? 'text-brand font-bold' : 'hover:text-brand text-slate-500'}`}>Career & AI</button>
            <button onClick={() => selectTab('faculty')} className={`transition-colors cursor-pointer ${activeTab === 'faculty' ? 'text-brand font-bold' : 'hover:text-brand text-slate-500'}`}>Faculty</button>
            <button onClick={() => selectTab('investment')} className={`transition-colors cursor-pointer ${activeTab === 'investment' ? 'text-brand font-bold' : 'hover:text-brand text-slate-500'}`}>Fees & FAQ</button>
          </nav>

          {/* Header CTA */}
          <div className="hidden md:flex items-center gap-4" id="header-cta-container">
            <button 
              onClick={openEnrollModal} 
              className="bg-brand hover:bg-brand-hover text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
              id="header-enroll-btn"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4 shadow-inner"
              id="mobile-navigation-dropdown"
            >
              <button onClick={() => selectTab('overview')} className={`text-left py-2 font-semibold text-xs uppercase tracking-wider hover:text-brand ${activeTab === 'overview' ? 'text-brand font-extrabold' : 'text-slate-700'}`}>Overview</button>
              <button onClick={() => selectTab('problems')} className={`text-left py-2 font-semibold text-xs uppercase tracking-wider hover:text-brand ${activeTab === 'problems' ? 'text-brand font-extrabold' : 'text-slate-700'}`}>The Gap & Sandbox</button>
              <button onClick={() => selectTab('syllabus')} className={`text-left py-2 font-semibold text-xs uppercase tracking-wider hover:text-brand ${activeTab === 'syllabus' ? 'text-brand font-extrabold' : 'text-slate-700'}`}>Curriculum</button>
              <button onClick={() => selectTab('career')} className={`text-left py-2 font-semibold text-xs uppercase tracking-wider hover:text-brand ${activeTab === 'career' ? 'text-brand font-extrabold' : 'text-slate-700'}`}>Career & AI</button>
              <button onClick={() => selectTab('faculty')} className={`text-left py-2 font-semibold text-xs uppercase tracking-wider hover:text-brand ${activeTab === 'faculty' ? 'text-brand font-extrabold' : 'text-slate-700'}`}>Faculty</button>
              <button onClick={() => selectTab('investment')} className={`text-left py-2 font-semibold text-xs uppercase tracking-wider hover:text-brand ${activeTab === 'investment' ? 'text-brand font-extrabold' : 'text-slate-700'}`}>Fees & FAQ</button>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button 
                  onClick={() => { setMobileMenuOpen(false); openEnrollModal(); }} 
                  className="bg-brand text-white w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider text-center hover:bg-brand-hover transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. SPATIAL UI NAVIGATION STRIP FOR MOBILE */}
      <div className="lg:hidden sticky top-20 z-40 bg-slate-50/90 backdrop-blur-md border-b border-slate-150 flex gap-2 px-4 py-2.5 overflow-x-auto scrollbar-none" id="mobile-tabs-strip">
        {[
          { id: 'overview', name: 'Overview' },
          { id: 'problems', name: 'The Gap' },
          { id: 'syllabus', name: 'Curriculum' },
          { id: 'career', name: 'Career & AI' },
          { id: 'faculty', name: 'Faculty' },
          { id: 'investment', name: 'Fees & FAQ' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => selectTab(tab.id as any)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === tab.id 
                ? 'bg-brand text-white shadow-sm font-extrabold' 
                : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="spatial-dashboard-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="spatial-dashboard-grid">
          
          {/* LEFT COLUMN: DESKTOP FLOATING SPATIAL SIDEBAR */}
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-6 sticky top-28 self-start animate-float-slow" id="desktop-spatial-sidebar-col">
            <div className="spatial-glass rounded-2xl p-5 flex flex-col gap-5 border border-white/40 shadow-sm" id="desktop-spatial-sidebar-card">
              <div className="border-b border-slate-200/60 pb-3 text-left" id="sidebar-header">
                <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">COURSE DASHBOARD</span>
                <h4 className="font-display font-bold text-slate-900 text-sm mt-0.5">Spatial Interface</h4>
              </div>

              {/* Spatial neomorphic nav links */}
              <nav className="flex flex-col gap-2.5" id="sidebar-navigation">
                {[
                  { id: 'overview', label: 'Program Overview', icon: Compass },
                  { id: 'problems', label: 'Theory-Practice Gap', icon: AlertCircle },
                  { id: 'syllabus', label: 'Syllabus & Roadmap', icon: BookOpen },
                  { id: 'career', label: 'Career Support & AI', icon: Briefcase },
                  { id: 'faculty', label: 'Instructors & Vetting', icon: Users },
                  { id: 'investment', label: 'Investment & FAQs', icon: DollarSign }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => selectTab(item.id as any)}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-left text-xs uppercase font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'neo-pressed text-brand border border-brand/20 font-extrabold bg-slate-50' 
                          : 'hover:bg-slate-50/50 text-slate-600 hover:text-slate-900 border border-transparent'
                      }`}
                      id={`sidebar-link-${item.id}`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-brand scale-110' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Tactile Timer Widget Inside Sidebar */}
              <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-150 text-center neo-pressed mt-2" id="sidebar-countdown-block">
                <span className="text-[9px] text-slate-500 font-extrabold block mb-2 uppercase tracking-wider">⏳ July Batch Closes in:</span>
                <div className="flex justify-center items-center gap-2 text-slate-800 font-display font-bold text-xs" id="sidebar-countdown">
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-slate-950 font-mono font-bold leading-none">{timeLeft.days}</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">d</span>
                  </div>
                  <span className="text-slate-300 font-light">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-slate-950 font-mono font-bold leading-none">{timeLeft.hours}</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">h</span>
                  </div>
                  <span className="text-slate-300 font-light">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-slate-950 font-mono font-bold leading-none">{timeLeft.minutes}</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">m</span>
                  </div>
                  <span className="text-slate-300 font-light">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-slate-950 font-mono font-bold leading-none">{timeLeft.seconds}</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro enrollment helper info in sidebar */}
            <div className="p-4 rounded-xl bg-orange-50/50 border border-brand/10 text-left shadow-[inset_0_1px_3px_rgba(0,0,0,0.01)]" id="sidebar-micro-info">
              <p className="text-[10px] text-slate-600 leading-relaxed font-semibold">
                🎓 Student fee: <strong className="text-slate-900">₹24,999</strong><br />
                💼 Professional fee: <strong className="text-slate-900">₹34,999</strong><br />
                🔒 100% Risk-Free Guarantee Policy
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: MAIN CONTENT SPACE WITH PERSPECTIVE TRANSITIONS */}
          <div className="lg:col-span-9 w-full" id="desktop-spatial-content-col" style={{ perspective: '1200px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, rotateY: -1.5 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -20, rotateY: 1.5 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
                className="w-full"
                id="spatial-view-container"
              >
                {activeTab === 'overview' && (
                  <OverviewView 
                    timeLeft={timeLeft} 
                    openEnrollModal={openEnrollModal} 
                    selectTab={selectTab} 
                  />
                )}
                
                {activeTab === 'problems' && (
                  <ProblemsView 
                    challengeIdx={challengeIdx} 
                    setChallengeIdx={setChallengeIdx} 
                    challengeStep={challengeStep} 
                    setChallengeStep={setChallengeStep} 
                  />
                )}

                {activeTab === 'syllabus' && (
                  <SyllabusView 
                    expandedMonth={expandedMonth} 
                    setExpandedMonth={setExpandedMonth} 
                  />
                )}

                {activeTab === 'career' && (
                  <CareerView />
                )}

                {activeTab === 'faculty' && (
                  <FacultyView 
                    expandedFaculty={expandedFaculty} 
                    setExpandedFaculty={setExpandedFaculty} 
                  />
                )}

                {activeTab === 'investment' && (
                  <InvestmentView 
                    pricingTier={pricingTier} 
                    setPricingTier={setPricingTier} 
                    openEnrollModal={openEnrollModal} 
                    expandedFaq={expandedFaq} 
                    setExpandedFaq={setExpandedFaq} 
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* PERSISTENT FINAL CALL-TO-ACTION CARD ON ALL VIEWS */}
            <section className="py-12 sm:py-16 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-900 overflow-hidden relative mt-8" id="final-cta-section">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mb-4" id="final-cta-headline">
                  Start drafting like a professional.<br />
                  <span className="text-brand">Start building your freelancing portfolio.</span>
                </h2>
                
                <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mb-8" id="final-cta-subheadline">
                  Join the 6-month live expert-level course and learn contract drafting through practice, feedback, and career-focused mentoring.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" id="final-cta-buttons">
                  <button 
                    onClick={openEnrollModal}
                    className="w-full sm:w-auto bg-brand hover:bg-brand-hover text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer text-center flex items-center justify-center gap-2 hover:scale-103 active:scale-98"
                    id="final-primary-cta"
                  >
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => selectTab('syllabus')}
                    className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-250 text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all cursor-pointer text-center hover:scale-103"
                    id="final-secondary-cta"
                  >
                    View Curriculum
                  </button>
                </div>

                <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-6 tracking-wide">
                  ⏳ Only a few seats left for the July cohort. Closing registration June 30.
                </p>
              </div>
            </section>
          </div>

        </div>
      </div>

      {/* 16. FOOTER */}
      <footer className="bg-white text-slate-500 py-12 border-t border-slate-100" id="footer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-150" id="footer-top">
            
            {/* Logo placeholder */}
            <div className="flex items-center gap-3" id="footer-logo">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-sm shadow-sm">
                L
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-sm tracking-tight block text-slate-900 leading-none">Lawctopus</span>
                <span className="font-mono text-[8px] tracking-widest text-brand uppercase font-bold">LAW SCHOOL</span>
              </div>
            </div>

            {/* Emails & Contact */}
            <div className="flex flex-col sm:flex-row gap-6 text-xs text-slate-500 font-bold uppercase tracking-wider" id="footer-contact">
              <a href="mailto:courses@lawctopus.com" className="hover:text-brand flex items-center gap-1.5 transition-colors">
                <Mail className="w-4 h-4 text-slate-455" />
                courses@lawctopus.com
              </a>
              <a href="mailto:support@lawctopus.com" className="hover:text-brand flex items-center gap-1.5 transition-colors">
                <Mail className="w-4 h-4 text-slate-455" />
                support@lawctopus.com
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-slate-400 font-semibold" id="footer-bottom">
            <p>© 2026 Lawctopus Law School. All rights reserved.</p>
            <div className="flex gap-4">
              <span onClick={() => openPolicy(termsOfUse)} className="cursor-pointer hover:text-brand transition-colors">Terms of Use</span>
              <span onClick={() => openPolicy(privacyPolicy)} className="cursor-pointer hover:text-brand transition-colors">Privacy Policy</span>
              <span onClick={() => openPolicy(refundPolicy)} className="cursor-pointer hover:text-brand transition-colors">Refund Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* PERSISTENT STICKY MOBILE CTA BAR */}
      <AnimatePresence>
        {showMobileStickyCTA && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-3 z-40 md:hidden flex items-center justify-between shadow-lg"
            id="mobile-sticky-cta-bar"
          >
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-mono font-extrabold text-slate-950">₹24,999</span>
                <span className="text-slate-400 line-through text-xs">₹60,000</span>
              </div>
              <span className="text-[9px] font-bold text-brand block uppercase tracking-wider">Discount locks June 30</span>
            </div>
            <button 
              onClick={openEnrollModal}
              className="bg-brand hover:bg-brand-hover text-white text-[10px] font-bold uppercase tracking-wider px-5 py-3 rounded-full shadow-sm cursor-pointer"
              id="sticky-bar-enroll-btn"
            >
              Enroll Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INTERACTIVE REGISTRATION MODAL FUNNEL */}
      <AnimatePresence>
        {enrollModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto" id="registration-modal-portal">
            
            {/* Modal Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEnrollModalOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
              id="modal-backdrop"
            />

            {/* Modal Body container */}
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div 
                initial={{ scale: 0.98, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 10 }}
                className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all w-full max-w-md p-6 border border-slate-250 animate-fade-in"
                id="modal-card"
              >
                
                {/* Close Button */}
                <button 
                  onClick={() => setEnrollModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
                  id="modal-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>

                {!registrationSuccess ? (
                  /* REGISTRATION FORM */
                  <form onSubmit={handleRegisterSubmit} id="registration-form" className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-brand flex items-center justify-center mx-auto mb-3 border border-orange-100">
                        <Award className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-slate-950 uppercase tracking-wide">
                        Secure Your Seat
                      </h3>
                      <p className="text-slate-500 text-xs mt-1">
                        Register for Lawctopus 6-Month Contract Drafting Program
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-center flex justify-between items-center">
                      <div className="text-left">
                        <span className="text-[9px] text-slate-450 font-extrabold block uppercase tracking-wider">PROMO COURSE FEE</span>
                        <span className="font-mono font-extrabold text-base text-slate-900">₹24,999 <span className="text-xs text-slate-400 line-through font-normal">₹60,000</span></span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded uppercase tracking-wider">
                        58% off locked
                      </span>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={registrationForm.fullName}
                          onChange={(e) => setRegistrationForm({ ...registrationForm, fullName: e.target.value })}
                          placeholder="E.g., Aditya Sharma"
                          className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={registrationForm.email}
                          onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                          placeholder="E.g., aditya@example.com"
                          className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Mobile/WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={registrationForm.phone}
                          onChange={(e) => setRegistrationForm({ ...registrationForm, phone: e.target.value })}
                          placeholder="E.g., +91 98765 43210"
                          className="w-full px-3 py-2 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Current Professional Status</label>
                        <select 
                          value={registrationForm.role}
                          onChange={(e) => setRegistrationForm({ ...registrationForm, role: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded text-xs bg-white focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                        >
                          <option>Law Student</option>
                          <option>Young Lawyer (0-3 yrs exp)</option>
                          <option>Corporate Lawyer</option>
                          <option>Academician</option>
                          <option>Freelancing Enthusiast</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-brand hover:bg-brand-hover text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-all cursor-pointer text-center block"
                        id="submit-register-btn"
                      >
                        Submit Registration & Secure Seat
                      </button>
                      <span className="block text-[9px] text-slate-400 text-center mt-2 font-semibold">
                        🛡️ Your details are protected under standard privacy policies.
                      </span>
                    </div>
                  </form>
                ) : (
                  /* REGISTRATION SUCCESS FLOW */
                  <div className="text-center py-6" id="success-screen">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-display font-bold text-slate-900 text-lg uppercase tracking-wide">
                      Enrollment Initiated!
                    </h3>
                    <p className="text-slate-500 text-xs mt-2 max-w-sm mx-auto">
                      Thank you, <strong className="text-slate-800">{registrationForm.fullName}</strong>. Your special promotional pricing seat has been locked.
                    </p>

                    {/* Booking Confirmation Code */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 my-6">
                      <span className="text-[9px] text-slate-400 font-extrabold block uppercase tracking-wider">REGISTRATION CODE:</span>
                      <span className="font-mono text-base font-extrabold text-brand tracking-wider block mt-1">
                        {registrationCode}
                      </span>
                    </div>

                    {/* Next Steps List */}
                    <div className="text-left space-y-3 text-xs text-slate-600 bg-slate-50/50 p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-700 uppercase tracking-wider text-[9px]">WHAT HAPPENS NEXT:</h4>
                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-150 text-slate-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-250">1</span>
                        <p>We will email your official onboarding instructions to <strong className="text-slate-800">{registrationForm.email}</strong> within 15 minutes.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-150 text-slate-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-250">2</span>
                        <p>You will receive an invite code to the exclusive student WhatsApp cohort channel.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-150 text-slate-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-250">3</span>
                        <p>Your 1-month Indian Kanoon Prism pro-key will be shared via SMS at {registrationForm.phone}.</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => setEnrollModalOpen(false)}
                      className="w-full bg-slate-900 hover:bg-slate-850 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full mt-6 transition-all cursor-pointer text-center block"
                      id="close-success-btn"
                    >
                      Return to Landing Page
                    </button>
                  </div>
                )}

              </motion.div>
            </div>

          </div>
        )}
      </AnimatePresence>

      {/* POLICY MODAL */}
      <AnimatePresence>
        {policyModalOpen && activePolicy && (
          <div className="fixed inset-0 z-50 overflow-y-auto" id="policy-modal-portal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPolicyModalOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
              id="policy-modal-backdrop"
            />
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 10 }}
                className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all w-full max-w-2xl max-h-[90vh] flex flex-col border border-slate-250"
                id="policy-modal-card"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0 bg-white sticky top-0 z-10" id="policy-modal-header">
                  <h3 className="font-display font-bold text-slate-900 text-base">{activePolicy.title}</h3>
                  <button
                    onClick={() => setPolicyModalOpen(false)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                    id="policy-modal-close-btn"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="px-6 py-5 overflow-y-auto space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed" id="policy-modal-body">
                  {activePolicy.content.map((para, idx) => (
                    <p key={idx} id={`policy-para-${idx}`}>{para}</p>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-slate-100 shrink-0 bg-white sticky bottom-0 flex justify-end" id="policy-modal-footer">
                  <button
                    onClick={() => setPolicyModalOpen(false)}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all cursor-pointer"
                    id="policy-modal-close-footer-btn"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
