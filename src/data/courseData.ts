import { 
  Users, 
  Star, 
  Award, 
  ShieldCheck, 
  FileText, 
  Compass, 
  Laptop, 
  Briefcase, 
  Search, 
  Sparkles, 
  TrendingUp, 
  MessageSquare 
} from 'lucide-react';

export interface FacultyMember {
  name: string;
  role: string;
  bio: string;
  longBio: string;
}

export interface MonthCurriculum {
  month: string;
  title: string;
  topics: string[];
  assignment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const trustBarMetrics = [
  { label: 'Learners Taught', value: '20,000+', description: 'Across all programs', icon: Users },
  { label: 'Course Ratings', value: '1,000+', description: 'Verified feedback', icon: Star },
  { label: 'Average Rating', value: '93.2/100', description: 'Exceptional satisfaction', icon: Award },
  { label: 'Instructors', value: 'Industry Experts', description: 'Leading legal minds', icon: ShieldCheck },
  { label: 'Guarantee', value: '100% Refund', description: 'Zero-risk enrollment', icon: ShieldCheck },
];

export const problemCards = [
  {
    title: 'Law Firm Internship Confidence',
    description: 'Struggle to write custom clauses during internships when senior partners ask you to draft real commercial provisions. Templates alone won\'t save you.',
    id: 'prob-card-1'
  },
  {
    title: 'Practical Drafting Skills',
    description: 'Tired of blindly copying-and-pasting random internet templates without understanding why specific clauses are structured or negotiated a certain way.',
    id: 'prob-card-2'
  },
  {
    title: 'Freelance & Client Readiness',
    description: 'You know there is a massive global market for remote drafting, but you lack the structural training and profile setup to deliver professional-grade agreements.',
    id: 'prob-card-3'
  }
];

export const challengesData = [
  {
    title: "The 'Infinite NDA' Trap",
    type: "Confidentiality Clause",
    problem: "Many standard templates bind the recipient of confidential information forever, creating permanent legal liability that can block future funding, acquisitions, or partnerships.",
    originalDraft: "This Agreement and the obligations of confidentiality hereunder shall survive in perpetuity and continue to bind the Recipient indefinitely from the date of disclosure.",
    trapHighlight: "survive in perpetuity and continue to bind the Recipient indefinitely",
    correctedDraft: "The Recipient’s obligations under this Agreement with respect to Confidential Information shall continue for a period of three (3) years from the date of termination or expiration of this Agreement.",
    feedback: "Setting a concrete term (typically 2-5 years post-termination) is standard. It limits long-term legal exposure and avoids the administrative nightmare of tracking proprietary info forever."
  },
  {
    title: "Unlimited Indemnity Liability",
    type: "Risk Allocation",
    problem: "Copy-pasting standard indemnity language leaves consultants or service providers liable for unlimited indirect damages, risking complete business failure.",
    originalDraft: "The Contractor agrees to indemnify, defend, and hold harmless the Client from and against any and all claims, damages, liabilities, losses, and expenses of any nature.",
    trapHighlight: "any and all claims, damages, liabilities, losses, and expenses of any nature",
    correctedDraft: "The Contractor’s total liability for indemnification claims under this Section shall be capped at, and in no event exceed, the total fees actually paid to the Contractor under this Agreement.",
    feedback: "Without a clear liability cap (such as total fees paid), a single mistake can bankrupt a business. Placing a realistic limit is a cornerstone of defensive, high-grade drafting."
  },
  {
    title: "Instant Convenience Shock",
    type: "Termination Provision",
    problem: "One-sided convenience termination clauses let clients cancel instantly, leaving freelancers with dedicated resources, uncompensated effort, and immediate cash flow crises.",
    originalDraft: "The Client shall have the absolute right to terminate this Agreement immediately at any time for any reason, without further liability or payment to the Developer.",
    trapHighlight: "immediately at any time for any reason, without further liability or payment",
    correctedDraft: "Either party may terminate this Agreement for convenience upon thirty (30) days prior written notice. Client shall pay Developer for all satisfactory work performed up to the date of termination.",
    feedback: "A professional agreement requires notice (typically 15-30 days) and guarantees payment for all milestones completed and work delivered prior to the termination date."
  }
];

export const whatYouWillLearnGrid = [
  { title: 'Draft Essential Clauses', desc: 'Master the core anatomy: recitals, definitions, boilerplates, and high-stakes risk-allocation clauses like indemnity and limitation of liability.', icon: FileText },
  { title: 'Real Estate Agreements', desc: 'Craft robust sale deeds, powers of attorney, leave and license agreements, and leasing instruments with local law considerations.', icon: Compass },
  { title: 'IP & Tech Agreements', desc: 'Protect assets using tailored intellectual property licensing, copyright transfers, trademarks, and specialized SaaS provisions.', icon: Laptop },
  { title: 'Business & Commercial Contracts', desc: 'Draft operational business pacts: partnership deeds, joint venture agreements, and business transfer agreements.', icon: Briefcase },
  { title: 'Website Terms & Policies', desc: 'Build crucial compliance pages like terms of use, detailed return policies, custom privacy terms, and e-commerce conditions.', icon: Search },
  { title: 'International Agreements', desc: 'Understand governing law, dispute selection, and enforcement mechanisms in cross-border transactions.', icon: Sparkles },
  { title: 'Negotiate Clauses & Terms', desc: 'Learn to identify traps, compromise on commercial terms, and protect your client\'s interests during live negotiations.', icon: TrendingUp },
  { title: 'Build Premium Career Profiles', desc: 'Set up high-converting, professional portfolios on Upwork, Fiverr, LinkedIn, and polished legal CVs.', icon: Award },
  { title: 'Write Winning Proposals', desc: 'Acquire high-value freelance clients by learning to draft targeted, persuasive proposals that win contracts over global competitors.', icon: MessageSquare }
];

export const outcomesList = [
  { title: 'Draft 24+ In-Demand Agreements', desc: 'Gain direct hands-on practice drafting highly requested commercial contracts across multiple industries.' },
  { title: '10 Personalised Feedback Assignments', desc: 'Submit drafting milestones and receive line-by-line, rigorous assessments from senior legal experts.' },
  { title: 'Client-Ready Freelancer Portfolio', desc: 'Establish an impressive, verified portfolio of polished agreements to attract high-paying Upwork and Fiverr clients.' },
  { title: 'Master Complex Formalities', desc: 'Learn exact execution rules including stamp duty, registration, witness requirements, and signing protocols.' },
  { title: 'Negotiation & Client Relations', desc: 'Step up your confidence in client advisory, communication, and real-time clause-by-clause bargaining.' },
  { title: 'Complete Career Assets Pack', desc: 'Leave the course with an optimized CV, bespoke cover letter formulas, and fully optimized professional profiles.' }
];

export const curriculumData: MonthCurriculum[] = [
  {
    month: 'Month 1',
    title: 'Drafting Essential Clauses of a Contract',
    topics: [
      'Anatomy and Skeleton of a Contract',
      'Drafting Recitals, Parties, and Preamble',
      'Definitions and Interpretation rules',
      'Boilerplate Clauses (Severability, Waiver, Assignment)',
      'Drafting Force Majeure and Confidentiality',
      'Indemnity, Limitation of Liability, and Representation & Warranties',
      'Termination and Consequences of Termination',
      'Dispute Resolution & Jurisdiction design'
    ],
    assignment: 'Assignment 1: Drafting a comprehensive Confidentiality and Non-Disclosure Agreement (NDA) with strict liability terms.'
  },
  {
    month: 'Month 2',
    title: 'Execution Formalities and Basic Negotiation Skills',
    topics: [
      'Execution, Stamp Duty, and Registration fundamentals',
      'Witnesses, Signing authorities, and Corporate Authorisations',
      'Employment Agreement drafting (IP transfer, non-compete, garden leave)',
      'Software Licensing Agreement fundamentals',
      'Basic Negotiation Skills (Positions vs. Interests, BATNA)',
      'Handling simple clause compromises under pressure'
    ],
    assignment: 'Assignment 2: Drafting and negotiating an Executive Employment Agreement with restrictive covenants.'
  },
  {
    month: 'Month 3',
    title: 'International Agreements, Common Agreements, and Advanced Negotiation',
    topics: [
      'International Commercial Contracts and Vienna Convention',
      'Governing Law & Arbitral Venue selections in cross-border pacts',
      'Loan Agreement drafting & security creation',
      'Advanced negotiation simulation exercises',
      'Freelancing introduction & client onboarding mechanics',
      'Creating pricing structures for contract drafting services'
    ],
    assignment: 'Assignment 3: Redlining an international distribution contract to secure a client\'s territorial rights.'
  },
  {
    month: 'Month 4',
    title: 'IP, Technology Agreements, and Website Terms',
    topics: [
      'Trademark, Patent, and Copyright licensing contracts',
      'Software-as-a-Service (SaaS) Agreement architecture',
      'E-commerce platforms Terms of Use and online Policies',
      'User Data Protection and Privacy Policy drafting (GDPR/DPDP compliance)',
      'Return, Refund, and shipping terms drafting'
    ],
    assignment: 'Assignment 4: Building the complete compliance suite (Terms & Privacy Policy) for a medical-tech startup.'
  },
  {
    month: 'Month 5',
    title: 'Real Estate Agreements',
    topics: [
      'Drafting Sale Deeds, Conveyance deeds, and Powers of Attorney',
      'Franchisee Agreement structures and brand protection',
      'Leave and License Agreements (Residential vs Commercial properties)',
      'Understanding lease deeds, covenants, and municipal clearance clauses',
      'Active networking strategies for corporate legal deals'
    ],
    assignment: 'Assignment 5: Drafting a Commercial Franchise and Licensing Agreement with complex royalty calculations.'
  },
  {
    month: 'Month 6',
    title: 'Business and Commercial Agreements',
    topics: [
      'Shareholders Agreements (SHA) & Share Purchase Agreements (SPA)',
      'Share Subscription Agreements (SSA) and founder terms',
      'Partnership Deeds and Joint Venture Agreements',
      'Business Transfer Agreements (BTA) & Asset Purchase agreements',
      'Final career reviews, portfolio presentation, and client pitches'
    ],
    assignment: 'Assignment 6: Drafting founder-vesting and drag-along/tag-along clauses for a seed-funded startup.'
  }
];

export const facultyData: FacultyMember[] = [
  {
    name: 'Shashank Sardesai',
    role: 'Corporate Law Expert & Legal Counsel',
    bio: 'Former Senior Associate at a top-tier firm, specializing in cross-border commercial transactions and operational compliance.',
    longBio: 'Shashank brings over a decade of elite experience drafting and advising on cross-border joint ventures, corporate mergers, and international distribution networks. He has guided dozens of Fortune 500 companies through complex multi-jurisdictional compliance.'
  },
  {
    name: 'Akanksha Mishra',
    role: 'IP & Tech Contracting Specialist',
    bio: 'Advises fast-growing SaaS startups and digital entertainment brands on IP licensing, copyright compliance, and SaaS frameworks.',
    longBio: 'Akanksha specializes in the intersection of law and technology. Her regular practice involves drafting complex service agreements, end-user license agreements, intellectual property assignments, and robust privacy structures for scaling global businesses.'
  },
  {
    name: 'Pranjal Doshi',
    role: 'Corporate General Counsel',
    bio: 'Venture Capital & Private Equity advisor with extensive experience in drafting shareholder agreements and founder-vesting provisions.',
    longBio: 'Pranjal is a seasoned transactional lawyer who represents investment funds and early-stage high-growth startups. He has successfully negotiated over 150 equity-financing rounds and is an expert in structuring complex shareholders agreements.'
  },
  {
    name: 'Arunima Jha',
    role: 'Real Estate Law Advocate',
    bio: 'Expert in high-value property lease negotiations, commercial sale deeds, and municipal regulatory clearances.',
    longBio: 'Arunima has represented leading commercial developers and retail chains in structuring leases, land purchase agreements, and complex power of attorney arrangements, ensuring maximum regulatory compliance and asset protection.'
  },
  {
    name: 'Jaibatruka Mohanta',
    role: 'International Arbitration Practitioner',
    bio: 'Focuses on cross-border business agreements and formulating bulletproof alternative dispute resolution clauses.',
    longBio: 'Jaibatruka handles international commercial arbitrations across major hubs including SIAC, LCIA, and MCIA. His practical insights ensure students can draft arbitration agreements that withstand rigorous jurisdictional challenges.'
  },
  {
    name: 'H. B. Keshava',
    role: 'Corporate Law Trainer & Scholar',
    bio: 'Distinguished author and corporate law instructor with deep expertise in boilerplate clauses and execution formalities.',
    longBio: 'H.B. Keshava is an esteemed academic and professional coach who has trained thousands of legal professionals. He specializes in simplifying the complex mechanics of boilerplate clauses and risk allocation frameworks.'
  },
  {
    name: 'Gourav Mohanty',
    role: 'Top-Rated Freelance Attorney on Upwork',
    bio: 'Billed over $100k+ on global freelancing platforms, specializing in remote international contract drafting.',
    longBio: 'Gourav is a pioneer in cross-border remote legal freelancing. He coaches students on how to bypass local constraints to pitch, secure, and deliver high-value drafting contracts for international corporate clients.'
  },
  {
    name: 'Anup Menon V',
    role: 'Senior Technology Counsel',
    bio: 'Handles licensing, software contracts, and data compliance for major technology conglomerates.',
    longBio: 'Anup has extensive experience managing commercial technology portfolios, including cloud infrastructure contracts, open-source compliance, data protection agreements, and software-as-a-service licensing.'
  },
  {
    name: 'Tanuj Kalia',
    role: 'Founder & CEO, Lawctopus',
    bio: 'Veteran career mentor, legal media entrepreneur, and expert in career positioning and profile building.',
    longBio: 'Tanuj is the visionary behind Lawctopus, India\'s leading career development platform for law students. He has mentored over 10,000 students on profile optimization, CV writing, career paths, and legal networking.'
  },
  {
    name: 'Bhumesh Verma',
    role: 'Managing Partner, CorpComm Legal',
    bio: '30+ years of stellar corporate practice, internationally acclaimed speaker, and award-winning author on drafting.',
    longBio: 'Bhumesh is one of India\'s most celebrated corporate attorneys. He is an international authority on commercial contracts, has authored best-selling treatises on contract drafting, and consistently ranks among top corporate lawyers.'
  },
  {
    name: 'Shayonee Dasgupta',
    role: 'Media & Entertainment IP Counsel',
    bio: 'Counsels top digital studios, production houses, and independent artists on media rights and copyright distribution.',
    longBio: 'Shayonee manages licensing portfolios for OTT platforms and digital media creators. She specializes in licensing contracts, media acquisitions, production waivers, and multi-platform distribution agreements.'
  },
  {
    name: 'Debanshu Khettry',
    role: 'Commercial disputes expert & High Court Advocate',
    bio: 'Advises companies on structural joint venture agreements and handles high-value commercial breach litigations.',
    longBio: 'Debanshu is a commercial advocate with extensive litigation experience in contract breaches. His unique dispute-focused lens helps students understand exactly why contracts fail in court and how to draft defensively.'
  }
];

export const whoShouldJoinCards = [
  {
    title: 'Law Students',
    desc: 'Looking to stand out in internship applications, build high-value skillsets, and gain practical confidence that law schools simply do not teach.',
    badge: 'Build Career Foundations'
  },
  {
    title: 'Young Lawyers',
    desc: 'Seeking to transition into corporate law, handle commercial clients independently, or deliver expert contracts in-house without constant supervision.',
    badge: 'Accelerate Practice'
  },
  {
    title: 'Academicians',
    desc: 'Desiring to update their academic contract theories with practical, industry-grade drafting methodologies and realistic case scenarios.',
    badge: 'Bridge Academic Gap'
  },
  {
    title: 'Freelance Enthusiasts',
    desc: 'Eager to build a side income or full-time remote consulting career by accessing premium global client orders on Upwork and Fiverr.',
    badge: 'Unshackle Income'
  }
];

export const faqData: FaqItem[] = [
  {
    question: 'Who is this course for?',
    answer: 'This course is tailored for law students (3rd year and above preferred), young lawyers looking to specialize in corporate law, academicians wanting practical exposure, and any legal professional seeking to establish a freelance contract drafting business.'
  },
  {
    question: 'Is this course live or recorded?',
    answer: 'This is a premium, highly interactive LIVE course. It features 54+ live expert-led interactive sessions over 6 months, ensuring you can ask questions, engage in simulations, and discuss real-world clauses in real-time.'
  },
  {
    question: 'Will I get recordings of live sessions if I miss one?',
    answer: 'Yes! All live sessions are recorded and uploaded to the student learning portal within 24 hours. You get lifetime access to all recordings, templates, checklist guides, and reference documents.'
  },
  {
    question: 'How many contracts will I actually draft?',
    answer: 'You will learn to draft and analyze 24+ complex commercial contracts. Throughout the 6 months, you will draft at least 10 agreements from scratch as part of your core assignments.'
  },
  {
    question: 'Will I get personalised feedback on my drafting assignments?',
    answer: 'Absolutely. This is a core feature of the course. Each of your 10 major drafting assignments is evaluated line-by-line by senior lawyers who provide specific comments, constructive edits, and redlining suggestions.'
  },
  {
    question: 'Will this course help me start freelancing on platforms like Upwork and Fiverr?',
    answer: 'Yes, we have dedicated modules and live sessions focused purely on Upwork, Fiverr, and LinkedIn setup. We teach you how to write proposals, price your services, handle client communication, and build a competitive portfolio of drafted contracts.'
  },
  {
    question: 'Will I receive a professional certificate upon completion?',
    answer: 'Yes. Upon successfully completing the course requirements (attending live sessions or reviewing recordings, and submitting assignments), you will receive a Certificate of Expertise in Contract Drafting and Freelancing issued by Lawctopus Law School.'
  },
  {
    question: 'What is the complete course fee?',
    answer: 'The current discounted course fee is ₹24,999 (inclusive of taxes), reduced from the original standard price of ₹60,000. You save ₹35,001 (58% off) if you register before the enrollment deadline.'
  }
];
