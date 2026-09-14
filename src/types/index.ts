export type EducationLevel = 'Class 10' | 'Class 12' | 'Undergraduate' | 'Graduate';

export type Stream = 
  | 'Science (PCM)' 
  | 'Science (PCB)' 
  | 'Science (PCMB)' 
  | 'Commerce' 
  | 'Arts & Humanities' 
  | 'Computer Science / IT' 
  | 'Open / Undecided';

export interface UserProfile {
  id: string;
  fullName: string;
  email?: string;
  age: number;
  educationLevel: EducationLevel;
  stream: Stream;
  academicInterests: string[];
  favoriteSubjects: string[];
  skills: string[];
  careerInterests: string[];
  preferredLocation: string[];
  govtCollegePreference: 'Strong Preference' | 'Open to Both' | 'Private Preferred';
  budgetPreference: 'Low (< 1 Lakh/yr)' | 'Moderate (1-3 Lakhs/yr)' | 'Flexible / High (> 3 Lakhs/yr)';
  academicScore: number; // e.g., 85%
  targetEntranceExams: string[];
  bio?: string;
  avatarUrl?: string;
  updatedAt: string;
}

export interface Career {
  id: string;
  title: string;
  category: string;
  stream: Stream[];
  educationLevel: EducationLevel[];
  shortDescription: string;
  overview: string;
  whyChoose: string[];
  requiredEducation: string[];
  requiredSkills: string[];
  popularExams: string[];
  salaryRange: {
    entry: string; // e.g. "4 - 8 LPA"
    mid: string;   // e.g. "10 - 22 LPA"
    senior: string; // e.g. "25 - 50+ LPA"
  };
  growthDemand: 'Very High' | 'High' | 'Steady';
  growthPercentage: string; // e.g. "+28% YoY"
  suitableProfile: string;
  relatedCourses: string[];
  topRecruiters: string[];
  dayInTheLife: string;
  iconName: string;
  isTrending?: boolean;
}

export interface Course {
  id: string;
  name: string;
  category: string; // Engineering, Medicine, Commerce, etc.
  duration: string; // "4 Years", "3 Years", "5.5 Years"
  eligibility: string;
  suitableStreams: Stream[];
  overview: string;
  keySubjects: string[];
  topEntranceExams: string[];
  averageFeesGovt: string;
  averageFeesPrivate: string;
  careerOutcomes: string[];
  higherStudies: string[];
  averageStartingSalary: string;
  rating: number;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  location: {
    city: string;
    state: string;
  };
  type: 'Central Government' | 'State Government' | 'Autonomous / Premier' | 'Private';
  established: number;
  nirfRank?: number;
  overview: string;
  availableCourses: string[];
  eligibilitySummary: string;
  admissionMode: string; // e.g. "JEE Advanced", "NEET-UG", "CUET-UG", "CAT"
  feeStructureSummary: string;
  officialWebsite: string;
  campusHighlights: string[];
  scholarshipAvailable: boolean;
  placementHighlights: string;
}

export interface Scholarship {
  id: string;
  title: string;
  offeredBy: string; // "Ministry of Education", "AICTE", "State Govt", etc.
  eligibility: string;
  awardAmount: string;
  deadline: string;
  category: 'Merit' | 'Means-based' | 'Girl Child / Diversity' | 'Special Category';
  applyUrl: string;
}

export interface AdmissionAlert {
  id: string;
  examOrCollege: string;
  announcement: string;
  date: string;
  status: 'Registration Open' | 'Upcoming' | 'Admit Cards Released' | 'Results Declared';
  link: string;
}

export interface RoadmapTask {
  id: string;
  title: string;
  description: string;
  estimatedHours: string;
  skillsGained: string[];
  resources: {
    name: string;
    type: 'YouTube / Video' | 'Documentation' | 'Free Course' | 'Practice Project';
    url: string;
  }[];
}

export interface RoadmapStage {
  stageNumber: number;
  title: string;
  duration: string;
  description: string;
  isUnlocked: boolean;
  tasks: RoadmapTask[];
}

export interface CareerRoadmap {
  careerId: string;
  careerTitle: string;
  stages: RoadmapStage[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  careerRecommendations?: {
    id: string;
    title: string;
    matchScore: number;
    reason: string;
  }[];
  suggestedPrompts?: string[];
}

export interface ResumeAnalysis {
  score: number;
  summary: string;
  detectedSkills: string[];
  missingSkills: string[];
  recommendedCareers: {
    careerTitle: string;
    matchPercentage: number;
    rationale: string;
  }[];
  improvementTips: string[];
  strengths: string[];
}
