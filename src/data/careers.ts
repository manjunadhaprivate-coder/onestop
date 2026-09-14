import { Career } from '@/types';

export const CAREERS_DATA: Career[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    category: 'Information Technology',
    stream: ['Science (PCM)', 'Computer Science / IT', 'Science (PCMB)'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Build scalable software applications, backend services, and cutting-edge web platforms.',
    overview: 'Software Engineers architect, code, test, and maintain modern digital products. In the Indian tech ecosystem, software engineers power startups, global MNCs, and Digital India government initiatives.',
    whyChoose: [
      'Vibrant job market with top product & service companies in Bengaluru, Hyderabad, Pune, and NCR',
      'High growth trajectory with opportunities to transition into System Architecture or Engineering Management',
      'Option for global remote work with international remuneration'
    ],
    requiredEducation: ['B.Tech / B.E. in CSE, IT, or related fields', 'BCA followed by MCA', 'B.Sc Computer Science with self-taught portfolio'],
    requiredSkills: ['Data Structures & Algorithms', 'Python / Java / TypeScript', 'System Design', 'Git / GitHub', 'SQL & NoSQL Databases', 'RESTful APIs'],
    popularExams: ['JEE Main / Advanced', 'BITSAT', 'WBJEE', 'MHT-CET', 'GATE (for M.Tech/PSUs)'],
    salaryRange: {
      entry: '4.5 - 12 LPA',
      mid: '14 - 30 LPA',
      senior: '35 - 70+ LPA'
    },
    growthDemand: 'Very High',
    growthPercentage: '+24% YoY',
    suitableProfile: 'Students who enjoy logical reasoning, problem-solving, mathematics, and building digital tools.',
    relatedCourses: ['btech-cse', 'bca', 'mca'],
    topRecruiters: ['Google India', 'Microsoft', 'Amazon', 'Tata Consultancy Services', 'Infosys', 'Flipkart', 'Swiggy'],
    dayInTheLife: 'Collaborate with product designers, write clean modular code, review pull requests from teammates, debug complex service bottlenecks, and deploy updates to cloud infrastructure.',
    iconName: 'Code',
    isTrending: true
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Data & Artificial Intelligence',
    stream: ['Science (PCM)', 'Computer Science / IT', 'Science (PCMB)', 'Commerce'],
    educationLevel: ['Undergraduate', 'Graduate'],
    shortDescription: 'Extract actionable insights, build predictive machine learning models, and analyze big data.',
    overview: 'Data Scientists blend statistical modeling, programming, and business acumen to solve intricate problems. In India, data science plays a critical role in fintech (UPI, credit underwriting), e-commerce, healthcare, and governance.',
    whyChoose: [
      'One of the fastest growing tech careers in India with high compensation packages',
      'Impactful work transforming raw business data into predictive insights',
      'Interdisciplinary field combining statistics, coding, and business strategy'
    ],
    requiredEducation: ['B.Tech in CSE / Data Science / AI', 'B.Sc / M.Sc in Statistics, Mathematics, or Economics', 'B.Tech with specialized certifications'],
    requiredSkills: ['Python (Pandas, NumPy, Scikit-learn)', 'Machine Learning Algorithms', 'SQL & Data Warehousing', 'Data Visualization (PowerBI, Tableau)', 'Probability & Statistics'],
    popularExams: ['JEE Main', 'CUET (UG/PG)', 'GATE (Data Science & AI)', 'JAM (Joint Admission test for Masters)'],
    salaryRange: {
      entry: '6 - 15 LPA',
      mid: '16 - 36 LPA',
      senior: '40 - 80+ LPA'
    },
    growthDemand: 'Very High',
    growthPercentage: '+31% YoY',
    suitableProfile: 'Students passionate about patterns, statistics, mathematics, and deriving logical answers from data.',
    relatedCourses: ['btech-cse', 'bsc-data-science'],
    topRecruiters: ['Fractal Analytics', 'Mu Sigma', 'JPMorgan Chase', 'Amazon India', 'Reliance Jio', 'PhonePe'],
    dayInTheLife: 'Extract data from distributed databases, clean messy features, train regression and classification models, validate metrics, and present visual dashboards to stakeholders.',
    iconName: 'BarChart2',
    isTrending: true
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Information Security',
    stream: ['Science (PCM)', 'Computer Science / IT'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Defend critical infrastructure, corporate networks, and cloud applications against cyber threats.',
    overview: 'With the exponential rise in digital payments and enterprise cloud migration, Cybersecurity Analysts ensure system defense, ethical penetration testing, and compliance with data privacy regulations in India.',
    whyChoose: [
      'Crucial national importance with high demand across banking, defense, and multinational corporations',
      'Immense shortage of certified ethical hackers and security researchers in India',
      'Rewarding career with specialized certifications like CEH, CompTIA Security+, and CISSP'
    ],
    requiredEducation: ['B.Tech in Cybersecurity / CSE / IT', 'BCA / B.Sc in Information Security', 'Diploma in Cyber Forensics'],
    requiredSkills: ['Network Security & Protocols', 'Ethical Hacking & Penetration Testing', 'SIEM Tools (Splunk, Wireshark)', 'Linux Shell Scripting', 'Cryptography Basics', 'OWASP Top 10'],
    popularExams: ['JEE Main', 'State CETs', 'GATE CS/IT'],
    salaryRange: {
      entry: '4.5 - 9 LPA',
      mid: '12 - 24 LPA',
      senior: '28 - 55+ LPA'
    },
    growthDemand: 'Very High',
    growthPercentage: '+33% YoY',
    suitableProfile: 'Inquisitive students who like exploring how systems work, breaking down puzzles, and safeguarding digital integrity.',
    relatedCourses: ['btech-cse', 'bca'],
    topRecruiters: ['CERT-In', 'PwC India', 'KPMG', 'Wipro Cyber Defense Center', 'Indian Cyber Crime Coordination Centre', 'Cisco'],
    dayInTheLife: 'Monitor network traffic for intrusion attempts, perform vulnerability assessments on production servers, patch zero-day bugs, and conduct security awareness drills.',
    iconName: 'ShieldCheck',
    isTrending: true
  },
  {
    id: 'civil-services-ias',
    title: 'Civil Services (IAS / IPS / IFS)',
    category: 'Public Administration & Governance',
    stream: ['Arts & Humanities', 'Commerce', 'Science (PCM)', 'Science (PCB)', 'Science (PCMB)', 'Computer Science / IT'],
    educationLevel: ['Undergraduate', 'Graduate'],
    shortDescription: 'Lead public administration, policy implementation, district governance, and diplomacy in India.',
    overview: 'The Indian Civil Services (UPSC CSE) offer prestigious leadership roles in public service. Officers oversee district development, law enforcement, foreign diplomacy, welfare schemes, and nation-building policies.',
    whyChoose: [
      'Unmatched opportunity to make direct, tangible impact on society and millions of citizens',
      'High social respect, job stability, executive authority, and leadership responsibility',
      'Open to graduates from any academic stream: Arts, Science, Engineering, or Commerce'
    ],
    requiredEducation: ['Graduation (Bachelor’s degree) in ANY stream from a recognized university'],
    requiredSkills: ['Analytical Writing', 'Current Affairs & Geopolitics', 'Public Policy Understanding', 'Ethical Decision Making', 'Leadership & Crisis Management'],
    popularExams: ['UPSC Civil Services Examination (Prelims, Mains, Interview)', 'State PSC Examinations (UPPSC, MPPSC, KPSC, TNPSC, etc.)'],
    salaryRange: {
      entry: '₹56,100/mo (Basic) + DA/HRA (~8-10 LPA gross)',
      mid: '₹1,00,000 - ₹1,50,000/mo + Perquisites',
      senior: '₹2,25,000 - ₹2,50,000/mo (Cabinet Secretary rank)'
    },
    growthDemand: 'Steady',
    growthPercentage: 'Prestigious / Fixed Intake',
    suitableProfile: 'Disciplined, socially conscious students with deep reading habits, interest in governance, ethics, and community welfare.',
    relatedCourses: ['ba-humanities', 'btech-cse', 'bcom-hons'],
    topRecruiters: ['Government of India', 'State Governments', 'NITI Aayog', 'Ministry of External Affairs'],
    dayInTheLife: 'Inspect district welfare projects, review law and order with police chiefs, attend policy committee meetings, resolve public grievances, and coordinate disaster responses.',
    iconName: 'Landmark',
    isTrending: false
  },
  {
    id: 'doctor-mbbs',
    title: 'Doctor (General Physician / Specialist)',
    category: 'Healthcare & Medicine',
    stream: ['Science (PCB)', 'Science (PCMB)'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Diagnose illnesses, prescribe treatment, perform medical procedures, and save lives.',
    overview: 'A noble and revered profession in India. Doctors complete an intensive 5.5-year MBBS followed by MD/MS specialization to provide clinical care across government hospitals, private clinics, and tertiary research centers.',
    whyChoose: [
      'Immense societal gratitude and noble purpose in healing patients and saving lives',
      'Perpetual demand across urban centers, Tier-2/3 cities, and rural primary health centers in India',
      'Resilient profession unaffected by macroeconomic downturns'
    ],
    requiredEducation: ['MBBS (5.5 years including mandatory internship)', 'MD / MS (3 years specialization)', 'DM / M.Ch for super-specialization'],
    requiredSkills: ['Clinical Diagnostics', 'Patient Empathy & Communication', 'Emergency Response', 'Medical Pharmacology', 'Surgical Precision (for surgeons)'],
    popularExams: ['NEET-UG (National Eligibility cum Entrance Test)', 'NEET-PG / NExT (National Exit Test)', 'INI-CET (for AIIMS/PGI)'],
    salaryRange: {
      entry: '6 - 12 LPA (Junior Resident)',
      mid: '15 - 32 LPA (Consultant / Specialist)',
      senior: '40 - 100+ LPA (Senior Consultant / Surgeon)'
    },
    growthDemand: 'Very High',
    growthPercentage: '+18% YoY',
    suitableProfile: 'Empathetic, resilient students with strong biology foundations, attention to detail, and dedication to lifelong learning.',
    relatedCourses: ['mbbs', 'bds'],
    topRecruiters: ['AIIMS', 'Apollo Hospitals', 'Fortis Healthcare', 'State Health Departments', 'Max Healthcare'],
    dayInTheLife: 'Conduct morning inpatient rounds, diagnose outpatients in OPD, evaluate lab tests and imaging scans, discuss treatment protocols with families, and attend emergency calls.',
    iconName: 'HeartPulse',
    isTrending: true
  },
  {
    id: 'ux-designer',
    title: 'UI/UX Product Designer',
    category: 'Design & Creative Tech',
    stream: ['Arts & Humanities', 'Computer Science / IT', 'Commerce', 'Science (PCM)'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Craft intuitive, engaging digital product interfaces, user journeys, and design systems.',
    overview: 'UI/UX Designers conduct user research, create wireframes, and design aesthetic interactive experiences for mobile and web applications. As Indian consumer tech scales to 800M+ smartphone users, vernacular and accessible UX is paramount.',
    whyChoose: [
      'Perfect intersection of visual creativity, human psychology, and modern technology',
      'High demand across Indian product unicorns, global tech companies, and design agencies',
      'Freedom to work on diverse products: fintech, edtech, healthtech, and gaming'
    ],
    requiredEducation: ['B.Des in Product / Interaction Design', 'B.Tech in CSE / IT with design portfolio', 'Degree in Arts/Architecture + UI/UX bootcamps'],
    requiredSkills: ['Figma & FigJam', 'User Research & Persona Mapping', 'Wireframing & Prototyping', 'Design Systems (Material UI, iOS HIG)', 'Information Architecture', 'Usability Testing'],
    popularExams: ['UCEED (for IITs)', 'NID DAT', 'CEED (for Masters)', 'NIFT Entrance'],
    salaryRange: {
      entry: '5 - 11 LPA',
      mid: '14 - 28 LPA',
      senior: '32 - 60+ LPA'
    },
    growthDemand: 'High',
    growthPercentage: '+22% YoY',
    suitableProfile: 'Creative thinkers who notice details in everyday apps, understand empathy, and enjoy visual storytelling.',
    relatedCourses: ['bdes', 'bca'],
    topRecruiters: ['Zomato', 'Cred', 'Swiggy', 'Microsoft India', 'Razorpay', 'Thoughtworks'],
    dayInTheLife: 'Interview real users to uncover pain points, sketch interactive wireframes in Figma, sync with engineering teams on layout feasibility, and test click-through prototypes.',
    iconName: 'Palette',
    isTrending: true
  },
  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant (CA)',
    category: 'Finance & Accounting',
    stream: ['Commerce', 'Science (PCM)', 'Arts & Humanities'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Master financial auditing, taxation, corporate finance advisory, and accounting standards.',
    overview: 'Conducted by ICAI, the Chartered Accountancy credential is one of India’s most rigorous and esteemed qualifications. CAs oversee corporate financial health, statutory audits, GST compliance, and strategic financial planning.',
    whyChoose: [
      'Globally recognized professional credential with statutory signing authority under Indian law',
      'High autonomy: choose between Big 4 consulting, corporate CFO tracks, or independent practice',
      'Extremely cost-effective education pathway compared to private MBAs'
    ],
    requiredEducation: ['ICAI Course (Foundation, Intermediate, 3 Years Articleship, Final)'],
    requiredSkills: ['Financial Auditing & Assurance', 'Direct & Indirect Taxation (GST, Income Tax)', 'Financial Reporting (Ind AS / IFRS)', 'Risk Assessment', 'Corporate Law'],
    popularExams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
    salaryRange: {
      entry: '8 - 14 LPA',
      mid: '16 - 32 LPA',
      senior: '35 - 75+ LPA'
    },
    growthDemand: 'High',
    growthPercentage: '+15% YoY',
    suitableProfile: 'Analytical thinkers with strong numerical aptitude, patience for thorough audits, and interest in commerce.',
    relatedCourses: ['bcom-hons', 'bba'],
    topRecruiters: ['Deloitte', 'EY (Ernst & Young)', 'PwC', 'KPMG', 'HDFC Bank', 'Tata Sons', 'Reliance Industries'],
    dayInTheLife: 'Audit enterprise ledger entries, optimize corporate tax structures, review quarterly balance sheets, advise on merger evaluations, and ensure regulatory compliance.',
    iconName: 'Coins',
    isTrending: false
  },
  {
    id: 'ai-specialist',
    title: 'AI & Machine Learning Engineer',
    category: 'Data & Artificial Intelligence',
    stream: ['Science (PCM)', 'Computer Science / IT'],
    educationLevel: ['Undergraduate', 'Graduate'],
    shortDescription: 'Develop neural networks, large language models (LLMs), computer vision, and autonomous agents.',
    overview: 'AI Engineers research, implement, and deploy generative AI, transformer models, and reinforcement learning systems. With India driving National AI missions, AI specialists are building bilingual vernacular models and smart automation.',
    whyChoose: [
      'At the absolute frontier of technology innovation globally',
      'Commanding the highest compensation brackets and research grants in tech',
      'Immense potential to solve India-scale challenges in agriculture, healthcare, and education'
    ],
    requiredEducation: ['B.Tech / M.Tech in CSE / AI & ML', 'Ph.D. in Computer Science / Deep Learning', 'B.Tech with specialized research publications'],
    requiredSkills: ['PyTorch & TensorFlow', 'Natural Language Processing (NLP)', 'Transformer Architectures & LLMs', 'Vector Databases & RAG Systems', 'Linear Algebra & Calculus', 'Model Deployment (ONNX, Triton)'],
    popularExams: ['JEE Advanced', 'GATE CS / DA', 'CUET PG'],
    salaryRange: {
      entry: '8 - 18 LPA',
      mid: '20 - 45 LPA',
      senior: '50 - 100+ LPA'
    },
    growthDemand: 'Very High',
    growthPercentage: '+42% YoY',
    suitableProfile: 'Students who excel in advanced mathematics, algorithmic thinking, coding, and continuous research.',
    relatedCourses: ['btech-cse', 'bsc-data-science'],
    topRecruiters: ['Google DeepMind', 'NVIDIA India', 'Microsoft Research', 'Sarvam AI', 'Krutrim', 'Adobe India'],
    dayInTheLife: 'Fine-tune domain-specific language models, evaluate hallucination benchmarks, optimize GPU cluster throughput, and integrate intelligent agents into production software.',
    iconName: 'Cpu',
    isTrending: true
  },
  {
    id: 'renewable-energy-engineer',
    title: 'Renewable Energy Engineer',
    category: 'Engineering & Sustainability',
    stream: ['Science (PCM)'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Design solar, wind, battery storage, and green hydrogen power systems for a clean energy future.',
    overview: 'India is targeting 500 GW of non-fossil energy by 2030. Renewable Energy Engineers design solar farms, offshore wind installations, smart power grids, and electric vehicle battery charging infrastructure.',
    whyChoose: [
      'Massive government backing under the National Green Hydrogen Mission and PM Surya Ghar Muft Bijli Yojana',
      'Purpose-driven career directly mitigating climate change and national carbon emissions',
      'Expanding job market with domestic clean-tech conglomerates and international energy firms'
    ],
    requiredEducation: ['B.Tech in Electrical / Mechanical / Energy Engineering', 'M.Tech in Renewable Energy Systems'],
    requiredSkills: ['Power System Simulation (MATLAB / Simulink)', 'Solar PV Design (PVsyst)', 'Grid Integration & Energy Storage', 'Thermal & Fluid Dynamics', 'Project Feasibility Analysis'],
    popularExams: ['JEE Main / Advanced', 'GATE EE/ME', 'State Engineering CETs'],
    salaryRange: {
      entry: '5 - 10 LPA',
      mid: '12 - 24 LPA',
      senior: '26 - 50 LPA'
    },
    growthDemand: 'High',
    growthPercentage: '+29% YoY',
    suitableProfile: 'Students passionate about physics, environmental sustainability, hardware engineering, and mega-projects.',
    relatedCourses: ['btech-electrical', 'btech-mechanical'],
    topRecruiters: ['Tata Power Solar', 'Adani Green Energy', 'NTPC Renewable', 'Suzlon', 'ReNew Power', 'L&T'],
    dayInTheLife: 'Model solar irradiance data for upcoming 100MW solar plants, design inverter grid connections, oversee site commissioning, and monitor battery degradation telemetry.',
    iconName: 'Sun',
    isTrending: true
  },
  {
    id: 'agritech-specialist',
    title: 'Agricultural Scientist / Agri-Tech Specialist',
    category: 'Agriculture & Food Science',
    stream: ['Science (PCB)', 'Science (PCMB)', 'Science (PCM)'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Innovate precision farming, crop genetics, drone sensors, and climate-resilient agriculture.',
    overview: 'Agriculture forms the backbone of the Indian economy. Agri-Tech specialists leverage satellite imagery, IoT soil sensors, bio-fertilizers, and genetic crop engineering to increase yield and farmer prosperity.',
    whyChoose: [
      'Huge national priority with ICAR research institutes, Agritech startups, and state farm departments',
      'Combination of field biology, biotechnology, and modern sensor technology',
      'Direct contribution to national food security and sustainable farming'
    ],
    requiredEducation: ['B.Sc in Agriculture (4 Years - ICAR approved)', 'M.Sc in Agronomy / Plant Genetics / Agri-Biotech'],
    requiredSkills: ['Crop Physiology & Soil Science', 'Drone Remote Sensing & GIS', 'Pest & Disease Diagnostics', 'Hydroponics & Precision Farming', 'Statistical Field Experimentation'],
    popularExams: ['CUET-ICAR AIEEA (UG & PG)', 'State Agriculture Entrance Exams (KCET, KEAM, etc.)'],
    salaryRange: {
      entry: '4 - 8 LPA',
      mid: '9 - 18 LPA',
      senior: '20 - 40 LPA'
    },
    growthDemand: 'High',
    growthPercentage: '+20% YoY',
    suitableProfile: 'Students interested in nature, biology, farming technology, and uplifting rural Indian livelihoods.',
    relatedCourses: ['bsc-agriculture'],
    topRecruiters: ['ICAR', 'ITC Agri-Business', 'DeHaat', 'Bayer Crop Science', 'NABARD', 'Ninjacart'],
    dayInTheLife: 'Collect soil samples across trial farms, analyze drought-tolerant seed varieties in the laboratory, inspect drone multispectral crop health maps, and conduct farmer workshops.',
    iconName: 'Sprout',
    isTrending: false
  },
  {
    id: 'commercial-pilot',
    title: 'Commercial Airline Pilot',
    category: 'Aviation & Aerospace',
    stream: ['Science (PCM)'],
    educationLevel: ['Class 12', 'Undergraduate'],
    shortDescription: 'Fly passenger aircraft, master flight navigation, aerodynamics, and global aviation safety.',
    overview: 'With India becoming the third-largest domestic aviation market with record plane orders (Air India, IndiGo), the demand for licensed commercial pilots has surged unprecedentedly.',
    whyChoose: [
      'High-adrenaline, prestigious profession with world travel opportunities',
      'Lucrative compensation from the beginning of first-officer tenure',
      'Structured career progression from Junior First Officer to Captain and Line Training Captain'
    ],
    requiredEducation: ['Class 12 with Physics & Mathematics (minimum 50%)', 'Commercial Pilot License (CPL) training (200 flying hours)', 'Type Rating (A320 / B737)'],
    requiredSkills: ['Aviation Meteorology & Navigation', 'Aircraft Systems & Instruments', 'Situational Awareness & Calm Under Pressure', 'Crew Resource Management', 'Multi-Engine Flight Maneuvers'],
    popularExams: ['DGCA Ground Exams (Nav, Met, Regs, Tech)', 'Cadet Pilot Programme Selection Exams (IndiGo, Air India)'],
    salaryRange: {
      entry: '15 - 22 LPA (First Officer)',
      mid: '30 - 55 LPA (Senior First Officer / Captain)',
      senior: '65 - 1.2+ Cr PA (Senior Line Captain)'
    },
    growthDemand: 'High',
    growthPercentage: '+26% YoY',
    suitableProfile: 'Students with quick reflexes, excellent spatial awareness, physical fitness, discipline, and passion for flying.',
    relatedCourses: ['cpl-aviation'],
    topRecruiters: ['IndiGo Airlines', 'Air India', 'Akasa Air', 'SpiceJet', 'Indian Air Force (via AFCAT/NDA)'],
    dayInTheLife: 'Conduct pre-flight cockpit checklist inspection, review flight route weather and fuel consumption, execute takeoff and instrument landings, and liaise with Air Traffic Control (ATC).',
    iconName: 'Plane',
    isTrending: true
  },
  {
    id: 'corporate-lawyer',
    title: 'Corporate Lawyer / Legal Counsel',
    category: 'Legal & Corporate Advisory',
    stream: ['Arts & Humanities', 'Commerce', 'Science (PCM)', 'Science (PCB)', 'Science (PCMB)'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Navigate mergers & acquisitions, corporate governance, intellectual property, and commercial contracts.',
    overview: 'Corporate lawyers advise businesses on regulatory compliance, venture capital fundraises, joint ventures, and dispute resolutions across the National Company Law Tribunal (NCLT) and High Courts.',
    whyChoose: [
      'Intellectually challenging career with high financial rewards at top law firms',
      'Essential pillar for India’s burgeoning startup ecosystem and cross-border trade',
      'Strong legal reasoning and negotiation skills applicable to policy and entrepreneurship'
    ],
    requiredEducation: ['5-Year Integrated B.A. LL.B / B.B.A. LL.B from National Law Universities (NLUs)'],
    requiredSkills: ['Contract Drafting & Negotiation', 'Company Law & Securities Regulation (SEBI)', 'Legal Research & Case Analysis', 'M&A Due Diligence', 'Intellectual Property Rights'],
    popularExams: ['CLAT (Common Law Admission Test)', 'AILET (for NLU Delhi)', 'SLAT', 'LSAT India'],
    salaryRange: {
      entry: '9 - 18 LPA (Tier-1 Law Firm)',
      mid: '20 - 45 LPA (Senior Associate)',
      senior: '50 - 1.5+ Cr PA (Partner / General Counsel)'
    },
    growthDemand: 'Steady',
    growthPercentage: '+16% YoY',
    suitableProfile: 'Articulate, inquisitive students who enjoy persuasive writing, debate, contract review, and critical analysis.',
    relatedCourses: ['ba-llb'],
    topRecruiters: ['Shardul Amarchand Mangaldas', 'AZB & Partners', 'Khaitan & Co', 'Trilegal', 'Cyril Amarchand Mangaldas'],
    dayInTheLife: 'Draft shareholder agreements for funding rounds, research landmark Supreme Court judgments, advise boardroom executives on regulatory filings, and negotiate terms with opposing counsels.',
    iconName: 'Scale',
    isTrending: false
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketing & Growth Strategist',
    category: 'Marketing & Media',
    stream: ['Commerce', 'Arts & Humanities', 'Computer Science / IT', 'Science (PCM)'],
    educationLevel: ['Class 12', 'Undergraduate', 'Graduate'],
    shortDescription: 'Drive customer acquisition, performance marketing campaigns, SEO, and brand growth.',
    overview: 'As Indian businesses transition online, Growth Strategists optimize digital advertising budgets across Google, Meta, and influencers to acquire millions of active customers with measurable ROI.',
    whyChoose: [
      'Fast-paced, creative, and data-driven discipline with immediate feedback loops',
      'Low entry barriers with high upside for talented performance marketeers',
      'Flexible freelance, agency, startup, and remote consulting opportunities'
    ],
    requiredEducation: ['BBA / B.Com / Mass Communication / B.Tech', 'MBA in Marketing (optional for senior growth roles)'],
    requiredSkills: ['Performance Ads (Google Ads, Meta Ads)', 'Search Engine Optimization (SEO)', 'Marketing Analytics & Attribution', 'Content Strategy & Copywriting', 'Conversion Rate Optimization (CRO)'],
    popularExams: ['CAT / XAT / CMAT (for Top MBA Marketing programs)', 'CUET UG'],
    salaryRange: {
      entry: '3.5 - 7.5 LPA',
      mid: '10 - 22 LPA',
      senior: '25 - 50+ LPA'
    },
    growthDemand: 'High',
    growthPercentage: '+25% YoY',
    suitableProfile: 'Creative yet analytical students who understand consumer psychology, social media trends, and return on investment.',
    relatedCourses: ['bba', 'bcom-hons'],
    topRecruiters: ['Nykaa', 'boAt', 'Mamaearth', 'Ogilvy India', 'Dentsu', 'Swiggy'],
    dayInTheLife: 'Analyze real-time ROAS (Return on Ad Spend), write compelling campaign copy, run A/B landing page tests, and coordinate video creatives with brand influencers.',
    iconName: 'TrendingUp',
    isTrending: false
  },
  {
    id: 'cloud-devops-engineer',
    title: 'Cloud & DevOps Architect',
    category: 'Information Technology',
    stream: ['Science (PCM)', 'Computer Science / IT'],
    educationLevel: ['Undergraduate', 'Graduate'],
    shortDescription: 'Automate CI/CD pipelines, orchestrate Kubernetes clusters, and scale cloud infrastructure.',
    overview: 'DevOps & Cloud Engineers bridge software development and operations. They ensure 99.99% uptime for massive applications by writing infrastructure-as-code and automating zero-downtime deployments.',
    whyChoose: [
      'High market demand as enterprise workloads migrate to AWS, Azure, and Google Cloud',
      'Generous compensation packages and direct involvement with core production reliability',
      'Strong international remote opportunities'
    ],
    requiredEducation: ['B.Tech in CSE / IT / Electronics', 'BCA / MCA with hands-on cloud certifications'],
    requiredSkills: ['Linux & Bash Scripting', 'Docker & Kubernetes (K8s)', 'AWS / GCP / Azure', 'Terraform (Infrastructure as Code)', 'CI/CD Pipelines (GitHub Actions, Jenkins)', 'Monitoring (Prometheus, Grafana)'],
    popularExams: ['JEE Main', 'GATE CS/IT'],
    salaryRange: {
      entry: '5 - 11 LPA',
      mid: '15 - 32 LPA',
      senior: '36 - 70+ LPA'
    },
    growthDemand: 'Very High',
    growthPercentage: '+35% YoY',
    suitableProfile: 'Students who love systems, automation, scripting, and ensuring smooth technical operations.',
    relatedCourses: ['btech-cse', 'bca'],
    topRecruiters: ['AWS India', 'Red Hat', 'Microsoft', 'Paytm', 'Thoughtworks', 'Accenture Cloud'],
    dayInTheLife: 'Deploy automated Kubernetes microservices, configure multi-region load balancers, resolve staging pipeline alerts, and audit cloud security compliance.',
    iconName: 'Cloud',
    isTrending: true
  },
  {
    id: 'product-manager',
    title: 'Product Manager (Tech)',
    category: 'Product Management & Strategy',
    stream: ['Science (PCM)', 'Computer Science / IT', 'Commerce', 'Arts & Humanities'],
    educationLevel: ['Undergraduate', 'Graduate'],
    shortDescription: 'Define product vision, prioritize roadmap features, and collaborate across engineering, design, and business.',
    overview: 'Product Managers are the CEOs of features. They discover user needs, define product requirements, and guide cross-functional teams to launch beloved applications that achieve business objectives.',
    whyChoose: [
      'Key strategic leadership role preparing professionals for future CXO or founder positions',
      'High compensation and prestige at top tech companies',
      'Holistic blend of business strategy, technology, and user empathy'
    ],
    requiredEducation: ['B.Tech + MBA from top institutes (IIMs/ISB)', 'B.Tech with strong APM (Associate Product Manager) track record'],
    requiredSkills: ['Product Strategy & Roadmapping', 'User Empathy & PRD Writing', 'A/B Testing & Data Analytics', 'Cross-Functional Stakeholder Management', 'Agile / Scrum Methodologies'],
    popularExams: ['CAT / GMAT', 'JEE Main'],
    salaryRange: {
      entry: '12 - 22 LPA (APM)',
      mid: '25 - 50 LPA (PM / Senior PM)',
      senior: '55 - 1.2+ Cr PA (Director of Product / VP)'
    },
    growthDemand: 'High',
    growthPercentage: '+27% YoY',
    suitableProfile: 'Visionary communicators with strong analytical skills, leadership, and curiosity about consumer behavior.',
    relatedCourses: ['btech-cse', 'bba', 'mba'],
    topRecruiters: ['Flipkart', 'Uber India', 'MakeMyTrip', 'Razorpay', 'CRED', 'Google India'],
    dayInTheLife: 'Review product analytics funnels, write a Product Requirement Document (PRD) for a new payment feature, conduct sprint planning with developers, and align executive goals.',
    iconName: 'Briefcase',
    isTrending: true
  },
  {
    id: 'professor-researcher',
    title: 'Higher Education Professor & Researcher',
    category: 'Education & Academic Research',
    stream: ['Science (PCM)', 'Science (PCB)', 'Arts & Humanities', 'Commerce', 'Science (PCMB)'],
    educationLevel: ['Graduate'],
    shortDescription: 'Teach university students, publish peer-reviewed papers, and mentor the next generation of thinkers.',
    overview: 'College professors teach undergraduate and graduate students in premier universities like IISc, IITs, Central Universities, and state colleges while conducting research funded by government grants (DST, CSIR, ICSSR).',
    whyChoose: [
      'Intellectual freedom to pursue fundamental scientific, social, or technological discoveries',
      'Work-life balance, sabbatical opportunities, and respected standing in academic society',
      'National building role shaping bright young minds'
    ],
    requiredEducation: ['Master’s Degree with 55% marks + Ph.D. in specialized discipline', 'UGC-NET / CSIR-NET Qualification'],
    requiredSkills: ['Deep Subject Mastery', 'Academic Writing & Publishing', 'Pedagogy & Public Speaking', 'Research Grant Proposal Writing', 'Mentorship'],
    popularExams: ['UGC-NET / JRF', 'CSIR-NET', 'GATE (for PhD admissions)'],
    salaryRange: {
      entry: '₹65,000 - ₹90,000/mo (Assistant Professor - 7th CPC)',
      mid: '₹1,20,000 - ₹1,80,000/mo (Associate Professor)',
      senior: '₹2,00,000 - ₹2,50,000/mo (Professor / Dean)'
    },
    growthDemand: 'Steady',
    growthPercentage: '+12% YoY',
    suitableProfile: 'Scholarly individuals who enjoy deep research, reading, teaching, and academic discussions.',
    relatedCourses: ['mtech', 'msc', 'ma'],
    topRecruiters: ['IITs', 'IISc Bangalore', 'Delhi University', 'JNU', 'NITs', 'Central Universities'],
    dayInTheLife: 'Deliver a lecture on advanced algorithms, review doctoral student draft dissertations, write research grant applications, and experiment in the university lab.',
    iconName: 'GraduationCap',
    isTrending: false
  }
];
