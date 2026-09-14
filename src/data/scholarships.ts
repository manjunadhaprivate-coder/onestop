import { Scholarship, AdmissionAlert } from '@/types';

export const SCHOLARSHIPS_DATA: Scholarship[] = [
  {
    id: 'nsp-central-sector',
    title: 'Central Sector Scheme of Scholarships for College and University Students',
    offeredBy: 'Department of Higher Education, Ministry of Education, Govt. of India',
    eligibility: 'Class 12 pass-outs with above 80th percentile in respective State Board / CBSE / CISCE with parental income < ₹4.5 LPA.',
    awardAmount: '₹12,000/year for first 3 years of Graduation; ₹20,000/year at PG level',
    deadline: 'Annually October 31 (via NSP Portal)',
    category: 'Merit',
    applyUrl: 'https://scholarships.gov.in'
  },
  {
    id: 'aicte-pragati',
    title: 'AICTE - Pragati Scholarship Scheme for Girl Students (Degree)',
    offeredBy: 'All India Council for Technical Education (AICTE)',
    eligibility: 'Female students admitted to 1st year of AICTE-approved degree programs (maximum 2 girls per family, family income < ₹8 LPA).',
    awardAmount: '₹50,000 per year towards college fees, books, and equipment',
    deadline: 'Annually November 30',
    category: 'Girl Child / Diversity',
    applyUrl: 'https://www.aicte-india.org/schemes/students-development-schemes'
  },
  {
    id: 'pmsss-jk-ladakh',
    title: 'Prime Minister’s Special Scholarship Scheme (PMSSS)',
    offeredBy: 'Ministry of Education & AICTE',
    eligibility: 'Domicile of UTs of Jammu & Kashmir and Ladakh who have passed 10+2 with family income < ₹8 LPA.',
    awardAmount: 'Full academic fee waiver up to ₹3.0 Lakhs/year + ₹1.0 Lakh/year maintenance allowance',
    deadline: 'June - July annually',
    category: 'Special Category',
    applyUrl: 'https://www.aicte-jk-scholarship-gov.in'
  },
  {
    id: 'inspire-she',
    title: 'INSPIRE Scholarship for Higher Education (SHE)',
    offeredBy: 'Department of Science & Technology (DST), Govt. of India',
    eligibility: 'Students in top 1% of Class 12 board exams pursuing B.Sc / B.S. / Int. M.Sc in Natural & Basic Sciences.',
    awardAmount: '₹80,000 per year (₹60,000 annual scholarship + ₹20,000 summer research mentorship attachment)',
    deadline: 'Annually December 31',
    category: 'Merit',
    applyUrl: 'https://online-inspire.gov.in'
  },
  {
    id: 'post-matric-sc-st',
    title: 'Post-Matric Scholarship for SC/ST/OBC Students',
    offeredBy: 'Ministry of Social Justice and Empowerment / Tribal Affairs',
    eligibility: 'Students belonging to SC/ST/OBC categories pursuing post-matriculation or post-secondary courses with annual parental income < ₹2.5 LPA.',
    awardAmount: '100% compulsory non-refundable fees reimbursed + monthly maintenance allowance of up to ₹1,200/month',
    deadline: 'Varies by State Portal (NSP / State DBT)',
    category: 'Means-based',
    applyUrl: 'https://scholarships.gov.in'
  },
  {
    id: 'aicte-saksham',
    title: 'AICTE - Saksham Scholarship Scheme for Specially Abled Students',
    offeredBy: 'All India Council for Technical Education (AICTE)',
    eligibility: 'Differently abled students having disability of not less than 40% admitted to 1st year of technical degree.',
    awardAmount: '₹50,000 per year for every year of technical study',
    deadline: 'Annually November 30',
    category: 'Special Category',
    applyUrl: 'https://www.aicte-india.org'
  }
];

export const ADMISSION_ALERTS: AdmissionAlert[] = [
  {
    id: 'alert-jee-main',
    examOrCollege: 'JEE (Main) Session 1 & 2',
    announcement: 'National Testing Agency (NTA) notification for admissions to NITs, IIITs, CFTIs and eligibility for JEE Advanced.',
    date: 'Jan & April Sessions (Annual)',
    status: 'Upcoming',
    link: 'https://jeemain.nta.nic.in'
  },
  {
    id: 'alert-neet-ug',
    examOrCollege: 'NEET-UG National Medical Entrance',
    announcement: 'Single entrance test across India for MBBS, BDS, BAMS, BHMS, and BSMS seats in all government and private medical colleges.',
    date: 'First Sunday of May',
    status: 'Upcoming',
    link: 'https://neet.nta.nic.in'
  },
  {
    id: 'alert-cuet-ug',
    examOrCollege: 'CUET (UG) - Common University Entrance Test',
    announcement: 'Mandatory single-window test for undergraduate admissions into Delhi University, BHU, JNU, Jamia, and 200+ universities.',
    date: 'May - June (Annual)',
    status: 'Registration Open',
    link: 'https://exams.nta.ac.in/CUET-UG'
  },
  {
    id: 'alert-clat',
    examOrCollege: 'CLAT (Common Law Admission Test)',
    announcement: 'Consortium of NLUs announcement for admissions to 24 National Law Universities across India for 5-Year Integrated LL.B.',
    date: 'First Sunday of December',
    status: 'Upcoming',
    link: 'https://consortiumofnlus.ac.in'
  }
];
