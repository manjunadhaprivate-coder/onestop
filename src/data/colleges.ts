import { College } from '@/types';

export const COLLEGES_DATA: College[] = [
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay (IIT Bombay)',
    shortName: 'IIT Bombay',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra'
    },
    type: 'Autonomous / Premier',
    established: 1958,
    nirfRank: 3,
    overview: 'Globally renowned Institute of National Importance celebrated for pioneering engineering research, vibrant entrepreneurship culture (E-Cell), and stellar campus placements in Powai.',
    availableCourses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'B.Des', 'M.Tech', 'Ph.D.'],
    eligibilitySummary: 'Class 12 PCM (Top 20 percentile or 75%+) + Qualified in JEE Advanced',
    admissionMode: 'JEE Advanced via JoSAA Counseling',
    feeStructureSummary: 'Approx. ₹1.15 Lakh per semester (substantial tuition waivers for SC/ST/EWS and family income < ₹5 LPA)',
    officialWebsite: 'https://www.iitb.ac.in',
    campusHighlights: ['Vibrant 550-acre lakeside campus in Powai', 'Society for Innovation and Development (SINE incubator)', 'Mood Indigo & Techfest festivals'],
    scholarshipAvailable: true,
    placementHighlights: 'Median CTC > 21 LPA; Top international packages exceeding ₹1 Cr+'
  },
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    shortName: 'AIIMS New Delhi',
    location: {
      city: 'New Delhi',
      state: 'Delhi'
    },
    type: 'Central Government',
    established: 1956,
    nirfRank: 1,
    overview: 'The apex tertiary healthcare and medical research institution in India, known for clinical excellence, state-of-the-art super-specialty hospitals, and nearly zero academic tuition.',
    availableCourses: ['MBBS', 'B.Sc Nursing', 'MD / MS', 'DM / M.Ch'],
    eligibilitySummary: 'Class 12 PCB with 60% marks + Top all-India ranking in NEET-UG',
    admissionMode: 'NEET-UG via Medical Counseling Committee (MCC)',
    feeStructureSummary: 'Under ₹6,000 for the entire 5.5-year MBBS course including hostel accommodation',
    officialWebsite: 'https://www.aiims.edu',
    campusHighlights: ['India’s premier medical trauma center', 'Extensive laboratory research infrastructure', 'Monthly stipend during internship'],
    scholarshipAvailable: true,
    placementHighlights: '100% placement / residency options with highest clinical repute worldwide'
  },
  {
    id: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad (IIM-A)',
    shortName: 'IIM Ahmedabad',
    location: {
      city: 'Ahmedabad',
      state: 'Gujarat'
    },
    type: 'Autonomous / Premier',
    established: 1961,
    nirfRank: 1,
    overview: 'India’s premier management school, renowned globally for the Louis Kahn heritage brick campus, case-based pedagogy, and producing top corporate executives and public policy leaders.',
    availableCourses: ['MBA (PGP)', 'PGP-FABM (Food & Agri-Business)', 'ePGP', 'Ph.D. in Management'],
    eligibilitySummary: 'Bachelor’s degree in any discipline with 50%+ + Exceptional percentile in CAT + WAT/PI',
    admissionMode: 'Common Admission Test (CAT)',
    feeStructureSummary: 'Approx. ₹25 - 28 Lakhs for 2-year PGP (need-based scholarships up to 100% available)',
    officialWebsite: 'https://www.iima.ac.in',
    campusHighlights: ['Iconic Louis Kahn architecture', 'Vikram Sarabhai Library', 'CIIE.CO Startup Incubator'],
    scholarshipAvailable: true,
    placementHighlights: 'Median CTC > 32 LPA with offers across McKinsey, BCG, Goldman Sachs, and top conglomerates'
  },
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology Madras (IIT Madras)',
    shortName: 'IIT Madras',
    location: {
      city: 'Chennai',
      state: 'Tamil Nadu'
    },
    type: 'Autonomous / Premier',
    established: 1959,
    nirfRank: 1,
    overview: 'Consistently ranked NIRF #1 overall engineering institution in India for multiple consecutive years. Home to India’s first university research park (IITM Research Park) and pioneer of online BS in Data Science.',
    availableCourses: ['B.Tech CSE', 'B.Tech Electrical', 'BS in Data Science & Applications', 'Interdisciplinary Dual Degrees'],
    eligibilitySummary: 'JEE Advanced for B.Tech; Class 12 with Math for BS Data Science Qualifier Exam',
    admissionMode: 'JEE Advanced (JoSAA) / IITM Qualifier for BS Degree',
    feeStructureSummary: 'Approx. ₹1.1 Lakh per semester (B.Tech); ₹1-2.5 Lakhs for BS Degree',
    officialWebsite: 'https://www.iitm.ac.in',
    campusHighlights: ['630-acre campus with deer and lush green flora', 'IITM Research Park housing 100+ deep-tech startups', 'Pravartak Technologies AI hub'],
    scholarshipAvailable: true,
    placementHighlights: 'Median CTC > 19 LPA; highest placement rate in core engineering and analytics'
  },
  {
    id: 'delhi-university-srcc',
    name: 'Shri Ram College of Commerce (SRCC), University of Delhi',
    shortName: 'SRCC Delhi',
    location: {
      city: 'New Delhi',
      state: 'Delhi'
    },
    type: 'Central Government',
    established: 1926,
    nirfRank: 11,
    overview: 'The unquestioned pinnacle of undergraduate commerce and economics education in India, boasting high-achieving alumni across finance, civil services, and entrepreneurship.',
    availableCourses: ['B.Com (Honours)', 'B.A. (Honours) Economics', 'M.Com', 'Global Business Operations'],
    eligibilitySummary: 'Class 12 with Commerce or Mathematics + Top percentiles in CUET-UG',
    admissionMode: 'CUET-UG via Delhi University CSAS Portal',
    feeStructureSummary: 'Approx. ₹30,000 - ₹35,000 per academic year',
    officialWebsite: 'https://www.srcc.edu',
    campusHighlights: ['Historic North Campus DU location', 'Active financial societies & mock stock exchanges', 'Air-conditioned digital auditorium'],
    scholarshipAvailable: true,
    placementHighlights: 'Median CTC ~ 10-12 LPA for undergraduate commerce graduates at Big 4 and MBB'
  },
  {
    id: 'iisc-bangalore',
    name: 'Indian Institute of Science (IISc Bangalore)',
    shortName: 'IISc Bangalore',
    location: {
      city: 'Bengaluru',
      state: 'Karnataka'
    },
    type: 'Autonomous / Premier',
    established: 1909,
    nirfRank: 2,
    overview: 'India’s foremost research university, founded by Jamsetji Tata and Swami Vivekananda. Renowned globally for quantum computing, aerospace, artificial intelligence, and basic sciences.',
    availableCourses: ['Bachelor of Science (Research)', 'B.Tech in Mathematics & Computing', 'M.Tech', 'Integrated Ph.D.'],
    eligibilitySummary: 'Top ranks in JEE Advanced, JEE Main, or NEET-UG for B.Sc / B.Tech',
    admissionMode: 'JEE Advanced / JEE Main / NEET-UG rank cards',
    feeStructureSummary: 'Approx. ₹25,000 - ₹40,000 per year for B.Sc (Research)',
    officialWebsite: 'https://www.iisc.ac.in',
    campusHighlights: ['400-acre canopy tree campus in Malleswaram', 'Supercomputer Education & Research Centre (SERC)', 'Param Pravega supercomputer'],
    scholarshipAvailable: true,
    placementHighlights: 'Top research fellowships globally (MIT, Stanford, Max Planck) and premier R&D labs'
  },
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli (NIT Trichy)',
    shortName: 'NIT Trichy',
    location: {
      city: 'Tiruchirappalli',
      state: 'Tamil Nadu'
    },
    type: 'Central Government',
    established: 1964,
    nirfRank: 9,
    overview: 'The highest-ranked National Institute of Technology (NIT) in India, renowned for academic rigor, technical clubs, robust alumni network, and affordable quality education.',
    availableCourses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'B.Arch', 'MCA', 'M.Tech'],
    eligibilitySummary: 'Class 12 with PCM (75%+ or top 20 percentile) + Qualified in JEE Main',
    admissionMode: 'JEE Main through JoSAA / CSAB counseling',
    feeStructureSummary: 'Approx. ₹62,500 per semester (full waiver for SC/ST/PwD & family income < ₹1 LPA)',
    officialWebsite: 'https://www.nitt.edu',
    campusHighlights: ['800-acre self-contained campus with octagonal library', 'Festember & Pragyan national techno-cultural festivals', 'High-speed campus-wide fiber network'],
    scholarshipAvailable: true,
    placementHighlights: 'Median CTC > 14 LPA with top technology and PSU recruitment drives'
  },
  {
    id: 'nlsiu-bangalore',
    name: 'National Law School of India University (NLSIU)',
    shortName: 'NLSIU Bangalore',
    location: {
      city: 'Bengaluru',
      state: 'Karnataka'
    },
    type: 'State Government',
    established: 1987,
    nirfRank: 1,
    overview: 'The pioneer of five-year integrated law education in India, ranked NIRF #1 Law School since inception. Renowned for rigorous mooting culture and shaping Indian legal jurisprudence.',
    availableCourses: ['B.A. LL.B. (Hons)', 'LL.M', 'Master’s in Public Policy (MPP)', 'Ph.D.'],
    eligibilitySummary: 'Class 12 in any discipline + Top all-India ranks in CLAT',
    admissionMode: 'Common Law Admission Test (CLAT)',
    feeStructureSummary: 'Approx. ₹3.5 Lakhs per year (need-based scholarships and student loan tie-ups available)',
    officialWebsite: 'https://www.nls.ac.in',
    campusHighlights: ['Sri Narayana Rao Melgiri Memorial National Law Library', 'Premier international moot court record', 'Active legal aid clinic'],
    scholarshipAvailable: true,
    placementHighlights: '100% placement in Tier-1 corporate law firms (Shardul Amarchand, AZB, Trilegal) and judicial clerkships'
  },
  {
    id: 'jnu-delhi',
    name: 'Jawaharlal Nehru University (JNU New Delhi)',
    shortName: 'JNU New Delhi',
    location: {
      city: 'New Delhi',
      state: 'Delhi'
    },
    type: 'Central Government',
    established: 1969,
    nirfRank: 2,
    overview: 'Pinnacle of social sciences, international relations, linguistics, and public policy in India. Noted for critical academic discourse, democratic ethos, and subsidized education.',
    availableCourses: ['B.A. Foreign Languages', 'M.A. International Relations', 'M.A. Political Science', 'Ph.D.'],
    eligibilitySummary: 'Class 12 / Bachelor’s degree with qualifying marks + CUET (UG/PG)',
    admissionMode: 'CUET-UG & CUET-PG via NTA',
    feeStructureSummary: 'Nominal fee of approx. ₹300 - ₹500 per year with highly subsidized hostel facilities',
    officialWebsite: 'https://www.jnu.ac.in',
    campusHighlights: ['1,000-acre forested ridge campus', 'Renowned School of International Studies (SIS)', 'Parthasarathy Rock and 24/7 central library'],
    scholarshipAvailable: true,
    placementHighlights: 'Unrivaled track record in Civil Services (UPSC), diplomatic services (IFS), academia, and think tanks'
  },
  {
    id: 'bits-pilani',
    name: 'Birla Institute of Technology and Science, Pilani (BITS Pilani)',
    shortName: 'BITS Pilani',
    location: {
      city: 'Pilani',
      state: 'Rajasthan'
    },
    type: 'Private',
    established: 1964,
    nirfRank: 25,
    overview: 'Premier Institute of Eminence with zero reservation quotas and merit-only admissions. Known for Practice School (6-month industry internship), flexible dual degree programs, and unicorn founder alumni.',
    availableCourses: ['B.E. Computer Science', 'B.E. Electrical', 'M.Sc (Hons) Dual Degrees', 'B.Pharm'],
    eligibilitySummary: 'Class 12 with PCM (minimum 75% aggregate in PCM) + BITSAT entrance score',
    admissionMode: 'BITSAT Examination',
    feeStructureSummary: 'Approx. ₹2.6 Lakhs per semester (merit-cum-need scholarships available)',
    officialWebsite: 'https://www.bits-pilani.ac.in',
    campusHighlights: ['No attendance policy fostering entrepreneurial spirit', 'Practice School I & II structured industrial attachments', 'Pilani Innovation & Technology Hub (PIEDS)'],
    scholarshipAvailable: true,
    placementHighlights: 'Median CTC > 18 LPA; alumni founders include Swiggy, Postman, BigBasket, Groww'
  },
  {
    id: 'dtu-delhi',
    name: 'Delhi Technological University (DTU, formerly DCE)',
    shortName: 'DTU Delhi',
    location: {
      city: 'New Delhi',
      state: 'Delhi'
    },
    type: 'State Government',
    established: 1941,
    nirfRank: 29,
    overview: 'One of India’s oldest and most prestigious engineering colleges with a sprawling campus in Bawana, exceptional coding culture, and massive industry alumni presence in NCR.',
    availableCourses: ['B.Tech CSE', 'B.Tech IT', 'B.Tech Software Engineering', 'B.Tech Mechanical', 'BBA'],
    eligibilitySummary: 'Class 12 with PCM (60%+) + JEE Main score (85% seats reserved for Delhi Region candidates)',
    admissionMode: 'JEE Main via Joint Admission Counselling (JAC Delhi)',
    feeStructureSummary: 'Approx. ₹2.1 Lakhs per year (fee concession for EWS and defense wards)',
    officialWebsite: 'https://www.dtu.ac.in',
    campusHighlights: ['164-acre lush green residential campus', 'Famous solar car and unmanned aerial vehicle student teams', 'Open-air amphitheater (OAT)'],
    scholarshipAvailable: true,
    placementHighlights: 'Over 300+ recruiters visit annually; highest package > ₹1.2 Cr; median CTC ~ 13 LPA'
  },
  {
    id: 'st-stephens-delhi',
    name: 'St. Stephen’s College, University of Delhi',
    shortName: 'St. Stephen’s College',
    location: {
      city: 'New Delhi',
      state: 'Delhi'
    },
    type: 'Central Government',
    established: 1881,
    nirfRank: 14,
    overview: 'One of the oldest and most prestigious liberal arts and science colleges in India, known for academic distinction, Victorian architecture, and cultivating leaders across politics, literature, and judiciary.',
    availableCourses: ['B.A. (Hons) Economics', 'B.A. (Hons) English', 'B.Sc (Hons) Mathematics', 'B.Sc (Hons) Physics'],
    eligibilitySummary: 'Class 12 with relevant subjects + CUET-UG score + college interview (where applicable)',
    admissionMode: 'CUET-UG via Delhi University admission portal',
    feeStructureSummary: 'Approx. ₹40,000 - ₹50,000 per academic year',
    officialWebsite: 'https://www.ststephens.edu',
    campusHighlights: ['Historic North Campus red-brick heritage complex', 'Famed college dining hall and junior combination room', 'Distinguished societies like Shakespeare Society'],
    scholarshipAvailable: true,
    placementHighlights: 'Placements in consulting firms (McKinsey, Bain), investment banks, and global masters admissions'
  },
  {
    id: 'iari-new-delhi',
    name: 'ICAR - Indian Agricultural Research Institute (Pusa Institute)',
    shortName: 'IARI Pusa',
    location: {
      city: 'New Delhi',
      state: 'Delhi'
    },
    type: 'Central Government',
    established: 1905,
    nirfRank: 1,
    overview: 'India’s flagship agricultural research institute that catalyzed the Green Revolution. Offers world-class education in agronomy, plant breeding, bio-technological genetics, and agricultural engineering.',
    availableCourses: ['B.Sc (Hons) Agriculture', 'M.Sc Agronomy', 'M.Sc Genetics & Plant Breeding', 'Ph.D.'],
    eligibilitySummary: 'Class 12 with PCB / PCM / PCMB + ICAR AIEEA entrance examination',
    admissionMode: 'CUET-ICAR AIEEA via NTA',
    feeStructureSummary: 'Highly nominal government tuition (approx. ₹15,000 - ₹25,000 per year)',
    officialWebsite: 'https://www.iari.res.in',
    campusHighlights: ['500-acre sprawling experimental farmland in Central Delhi', 'National Gene Bank for crop seeds', 'Advanced Phytotron facility for climate simulation'],
    scholarshipAvailable: true,
    placementHighlights: 'Scientist positions in Agricultural Research Service (ARS), MNC seed companies, and NABARD'
  },
  {
    id: 'nift-delhi',
    name: 'National Institute of Fashion Technology (NIFT New Delhi)',
    shortName: 'NIFT Delhi',
    location: {
      city: 'New Delhi',
      state: 'Delhi'
    },
    type: 'Autonomous / Premier',
    established: 1986,
    nirfRank: 1,
    overview: 'Statutory leader in fashion design, textile development, and apparel manufacturing management under the Ministry of Textiles, Government of India.',
    availableCourses: ['B.Des Fashion Design', 'B.Des Textile Design', 'B.F.Tech Apparel Production', 'Master of Design'],
    eligibilitySummary: 'Class 12 in any stream + NIFT General Ability & Creative Ability Test (GAT & CAT)',
    admissionMode: 'NIFT Entrance Examination & Situation Test',
    feeStructureSummary: 'Approx. ₹1.6 - ₹1.8 Lakhs per semester (SARTHAK financial assistance available)',
    officialWebsite: 'https://www.nift.ac.in',
    campusHighlights: ['Design studios with CAD and industrial sewing labs', 'National Resource Centre (NRC) textile archive', 'Annual fashion showcases attended by top designers'],
    scholarshipAvailable: true,
    placementHighlights: 'Recruitment by global apparel brands (Zara, Aditya Birla Fashion, Reliance Retail, Raymond)'
  },
  {
    id: 'iiit-hyderabad',
    name: 'International Institute of Information Technology Hyderabad (IIIT-H)',
    shortName: 'IIIT Hyderabad',
    location: {
      city: 'Hyderabad',
      state: 'Telangana'
    },
    type: 'Autonomous / Premier',
    established: 1998,
    nirfRank: 55,
    overview: 'A world-class autonomous research institute widely recognized as India’s top center for competitive programming, computer vision (CVIT), speech recognition, and natural language processing.',
    availableCourses: ['B.Tech CSE', 'B.Tech ECE', 'Dual Degree B.Tech + MS in Computer Science', 'M.Tech CSE'],
    eligibilitySummary: 'JEE Main score (Top 99.8+ percentile for B.Tech) or UGEE (Undergraduate Engineering Entrance)',
    admissionMode: 'JEE Main (Direct Mode) / UGEE Exam & Interview',
    feeStructureSummary: 'Approx. ₹3.6 Lakhs per year (Pratibha scholarships and state reimbursement options)',
    officialWebsite: 'https://www.iiith.ac.in',
    campusHighlights: ['Kohli Center on Intelligent Systems (KCIS)', 'Highest number of ACM-ICPC World Finalists from India', 'CIE Startup Incubator in Gachibowli IT Corridor'],
    scholarshipAvailable: true,
    placementHighlights: 'Average B.Tech CSE package ~ 30 LPA; unmatched pedigree for elite tech and research labs'
  },
  {
    id: 'jipmer-puducherry',
    name: 'Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)',
    shortName: 'JIPMER Puducherry',
    location: {
      city: 'Puducherry',
      state: 'Puducherry'
    },
    type: 'Central Government',
    established: 1823,
    nirfRank: 5,
    overview: 'Institution of National Importance (INI) under the Ministry of Health & Family Welfare, offering subsidized medical training, free healthcare to underprivileged patients, and top clinical research.',
    availableCourses: ['MBBS', 'B.Sc Allied Health Sciences', 'MD / MS', 'DM / M.Ch'],
    eligibilitySummary: 'Class 12 PCB with 50%+ + Top all-India ranks in NEET-UG',
    admissionMode: 'NEET-UG via MCC Counseling',
    feeStructureSummary: 'Approx. ₹12,000 for the entire MBBS course + subsidized hostel facilities',
    officialWebsite: 'https://www.jipmer.edu.in',
    campusHighlights: ['195-acre seaside campus in Gorimedu', 'Multi-specialty tertiary care hospital with 2,000+ beds', 'Advanced telemedicine research center'],
    scholarshipAvailable: true,
    placementHighlights: 'Premier medical residency placement across India and NHS UK / US residency pathways'
  }
];
