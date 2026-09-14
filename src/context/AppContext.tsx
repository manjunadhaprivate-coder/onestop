'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, EducationLevel, Stream } from '@/types';

export interface DemoProfileOption {
  label: string;
  description: string;
  profile: UserProfile;
}

export const PRESET_PROFILES: DemoProfileOption[] = [
  {
    label: 'Class 12 Science (PCM)',
    description: 'Aspirant for Engineering, Software & Tech with 88% marks',
    profile: {
      id: 'demo-user-pcm',
      fullName: 'Aarav Sharma',
      age: 17,
      educationLevel: 'Class 12',
      stream: 'Science (PCM)',
      academicInterests: ['Computer Programming', 'Mathematics', 'Robotics'],
      favoriteSubjects: ['Mathematics', 'Physics', 'Computer Science'],
      skills: ['Python Basics', 'Logical Reasoning', 'Web Basics (HTML/CSS)'],
      careerInterests: ['Software Engineer', 'Data Scientist', 'AI Specialist'],
      preferredLocation: ['Delhi NCR', 'Bengaluru', 'Maharashtra'],
      govtCollegePreference: 'Strong Preference',
      budgetPreference: 'Moderate (1-3 Lakhs/yr)',
      academicScore: 88,
      targetEntranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT'],
      bio: 'Enthusiastic Class 12 student passionate about coding and software algorithms. Aiming for premier government engineering institutes.',
      updatedAt: new Date().toISOString()
    }
  },
  {
    label: 'Class 12 Science (PCB)',
    description: 'Medical & Healthcare aspirant with Biology focus',
    profile: {
      id: 'demo-user-pcb',
      fullName: 'Ananya Verma',
      age: 18,
      educationLevel: 'Class 12',
      stream: 'Science (PCB)',
      academicInterests: ['Human Anatomy', 'Biochemistry', 'Clinical Diagnostics'],
      favoriteSubjects: ['Biology', 'Chemistry', 'English'],
      skills: ['Observation', 'Scientific Research', 'Empathy & Communication'],
      careerInterests: ['Doctor (General Physician / Specialist)', 'Agricultural Scientist / Agri-Tech Specialist'],
      preferredLocation: ['Delhi NCR', 'Karnataka', 'Tamil Nadu'],
      govtCollegePreference: 'Strong Preference',
      budgetPreference: 'Low (< 1 Lakh/yr)',
      academicScore: 92,
      targetEntranceExams: ['NEET-UG'],
      bio: 'Dedicated medical aspirant preparing for NEET-UG to pursue MBBS at AIIMS or state government medical colleges.',
      updatedAt: new Date().toISOString()
    }
  },
  {
    label: 'Class 12 Commerce',
    description: 'Finance, Auditing & Corporate Strategy aspirant',
    profile: {
      id: 'demo-user-comm',
      fullName: 'Rohan Mehta',
      age: 17,
      educationLevel: 'Class 12',
      stream: 'Commerce',
      academicInterests: ['Financial Markets', 'Corporate Auditing', 'Economics'],
      favoriteSubjects: ['Accountancy', 'Economics', 'Business Studies'],
      skills: ['Financial Analysis', 'Spreadsheets (Excel)', 'Business Strategy'],
      careerInterests: ['Chartered Accountant (CA)', 'Corporate Lawyer / Legal Counsel', 'Digital Marketing & Growth Strategist'],
      preferredLocation: ['Mumbai', 'Delhi NCR', 'Ahmedabad'],
      govtCollegePreference: 'Open to Both',
      budgetPreference: 'Moderate (1-3 Lakhs/yr)',
      academicScore: 86,
      targetEntranceExams: ['CUET-UG', 'CA Foundation', 'IPMAT'],
      bio: 'Commerce student aiming for top DU colleges like SRCC and preparing for the CA Foundation curriculum.',
      updatedAt: new Date().toISOString()
    }
  },
  {
    label: 'Undergraduate (Final Year)',
    description: 'B.Tech student preparing for tech placements & upskilling',
    profile: {
      id: 'demo-user-ug',
      fullName: 'Priya Sundaram',
      age: 21,
      educationLevel: 'Undergraduate',
      stream: 'Computer Science / IT',
      academicInterests: ['Distributed Systems', 'Cloud Native Apps', 'Open Source'],
      favoriteSubjects: ['Data Structures', 'Operating Systems', 'Database Systems'],
      skills: ['JavaScript / React', 'Node.js', 'SQL', 'Git / GitHub', 'Docker Basics'],
      careerInterests: ['Software Engineer', 'Cloud & DevOps Architect', 'Cybersecurity Analyst'],
      preferredLocation: ['Bengaluru', 'Hyderabad', 'Pune'],
      govtCollegePreference: 'Open to Both',
      budgetPreference: 'Flexible / High (> 3 Lakhs/yr)',
      academicScore: 84,
      targetEntranceExams: ['GATE CS', 'Campus Placements'],
      bio: 'Third-year CSE undergraduate preparing for SDE-1 software engineering placements and building full-stack projects.',
      updatedAt: new Date().toISOString()
    }
  }
];

export const EMPTY_PROFILE: UserProfile = {
  id: '',
  fullName: '',
  email: '',
  age: 17,
  educationLevel: 'Class 12',
  stream: 'Science (PCM)',
  academicInterests: ['Technology', 'Mathematics'],
  favoriteSubjects: ['Mathematics', 'Physics'],
  skills: ['Problem Solving'],
  careerInterests: ['Engineering', 'Technology'],
  preferredLocation: ['All India'],
  govtCollegePreference: 'Open to Both',
  budgetPreference: 'Moderate (1-3 Lakhs/yr)',
  academicScore: 85,
  targetEntranceExams: [],
  bio: '',
  updatedAt: new Date().toISOString()
};

interface AppContextType {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
  loadPresetProfile: (presetIndex: number) => void;
  isAuthenticated: boolean;
  isAuthLoaded: boolean;
  registerUser: (fullName: string, email: string, stream?: Stream, educationLevel?: EducationLevel) => Promise<void>;
  loginUser: (email: string, fullName?: string) => Promise<boolean>;
  logout: () => void;
  savedCareers: string[];
  toggleSaveCareer: (careerId: string) => void;
  isCareerSaved: (careerId: string) => boolean;
  savedColleges: string[];
  toggleSaveCollege: (collegeId: string) => void;
  isCollegeSaved: (collegeId: string) => boolean;
  completedTasks: string[];
  toggleTaskCompleted: (taskId: string) => void;
  isTaskCompleted: (taskId: string) => boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onboardingCompleted: boolean;
  setOnboardingCompleted: (val: boolean) => void;
  notificationCount: number;
  clearNotifications: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfileState] = useState<UserProfile>(EMPTY_PROFILE);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthLoaded, setIsAuthLoaded] = useState<boolean>(false);
  const [savedCareers, setSavedCareers] = useState<string[]>([]);
  const [savedColleges, setSavedColleges] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [onboardingCompleted, setOnboardingCompletedState] = useState<boolean>(false);
  const [notificationCount, setNotificationCount] = useState<number>(3);

  // Initialize from LocalStorage if available
  useEffect(() => {
    try {
      const storedTheme = (localStorage.getItem('onestop_theme') || localStorage.getItem('onestep_theme')) as 'light' | 'dark' | null;
      if (storedTheme) {
        setTheme(storedTheme);
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }

      // Strictly verify authentication flag before loading any stored profile
      const authFlag = localStorage.getItem('onestop_is_authenticated');
      const storedProfile = localStorage.getItem('onestop_user_profile') || localStorage.getItem('onestep_user_profile');

      if (authFlag === 'true' && storedProfile) {
        const parsed = JSON.parse(storedProfile);
        if (parsed && parsed.fullName && parsed.fullName.trim() !== '') {
          setProfileState(parsed);
          setIsAuthenticated(true);
          const storedOnboarding = localStorage.getItem('onestop_onboarding_completed') ?? localStorage.getItem('onestep_onboarding_completed');
          setOnboardingCompletedState(storedOnboarding === 'true');
        } else {
          setIsAuthenticated(false);
          setOnboardingCompletedState(false);
          setProfileState(EMPTY_PROFILE);
        }
      } else {
        // Unauthenticated session by default: Never open directly with any hardcoded demo user
        setIsAuthenticated(false);
        setOnboardingCompletedState(false);
        setProfileState(EMPTY_PROFILE);
      }

      const storedSavedCareers = localStorage.getItem('onestop_saved_careers') || localStorage.getItem('onestep_saved_careers');
      if (storedSavedCareers) {
        setSavedCareers(JSON.parse(storedSavedCareers));
      }

      const storedSavedColleges = localStorage.getItem('onestop_saved_colleges') || localStorage.getItem('onestep_saved_colleges');
      if (storedSavedColleges) {
        setSavedColleges(JSON.parse(storedSavedColleges));
      }

      const storedCompletedTasks = localStorage.getItem('onestop_completed_tasks') || localStorage.getItem('onestep_completed_tasks');
      if (storedCompletedTasks) {
        setCompletedTasks(JSON.parse(storedCompletedTasks));
      }
    } catch (err) {
      console.error('Error loading initial local storage:', err);
    } finally {
      setIsAuthLoaded(true);
    }
  }, []);

  const registerUser = async (
    fullName: string,
    email: string,
    stream: Stream = 'Science (PCM)',
    educationLevel: EducationLevel = 'Class 12'
  ) => {
    const newId = 'user-' + Date.now();
    const newProfile: UserProfile = {
      ...EMPTY_PROFILE,
      id: newId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      stream,
      educationLevel,
      updatedAt: new Date().toISOString()
    };

    setProfileState(newProfile);
    setIsAuthenticated(true);
    setOnboardingCompletedState(false);

    try {
      localStorage.setItem('onestop_is_authenticated', 'true');
      localStorage.setItem('onestop_user_profile', JSON.stringify(newProfile));
      localStorage.setItem('onestop_onboarding_completed', 'false');
      localStorage.setItem('onestep_user_profile', JSON.stringify(newProfile));
      localStorage.setItem('onestep_onboarding_completed', 'false');
    } catch (e) {}

    // Dispatch admin notification for new user registration
    try {
      await fetch('/api/notifications/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: newProfile.fullName,
          email: newProfile.email,
          loginMethod: 'Direct Account Registration',
          onboardingCompleted: false,
          stream: newProfile.stream,
          educationLevel: newProfile.educationLevel,
          academicScore: newProfile.academicScore
        })
      });
    } catch (err) {
      console.error('Registration notification failed:', err);
    }
  };

  const loginUser = async (email: string, fullName?: string): Promise<boolean> => {
    const normalizedEmail = email.trim().toLowerCase();
    let existingProfile: UserProfile | null = null;

    try {
      const stored = localStorage.getItem('onestop_user_profile');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.email && parsed.email.toLowerCase() === normalizedEmail) {
          existingProfile = parsed;
        }
      }
    } catch (e) {}

    if (!existingProfile) {
      const inferredName = fullName || normalizedEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      existingProfile = {
        ...EMPTY_PROFILE,
        id: 'user-' + Date.now(),
        fullName: inferredName,
        email: normalizedEmail,
        updatedAt: new Date().toISOString()
      };
    }

    setProfileState(existingProfile);
    setIsAuthenticated(true);

    let onboardingStatus = false;
    try {
      localStorage.setItem('onestop_is_authenticated', 'true');
      localStorage.setItem('onestop_user_profile', JSON.stringify(existingProfile));
      const storedOnboarding = localStorage.getItem('onestop_onboarding_completed');
      if (storedOnboarding === 'true') {
        onboardingStatus = true;
        setOnboardingCompletedState(true);
      } else {
        setOnboardingCompletedState(false);
      }
    } catch (e) {}

    try {
      await fetch('/api/notifications/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: existingProfile.fullName,
          email: existingProfile.email,
          loginMethod: 'Student Account Login',
          onboardingCompleted: onboardingStatus,
          stream: existingProfile.stream,
          educationLevel: existingProfile.educationLevel
        })
      });
    } catch (err) {
      console.error('Login notification failed:', err);
    }

    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setOnboardingCompletedState(false);
    setProfileState(EMPTY_PROFILE);
    setSavedCareers([]);
    setSavedColleges([]);
    setCompletedTasks([]);

    try {
      localStorage.removeItem('onestop_is_authenticated');
      localStorage.removeItem('onestep_is_authenticated');
      localStorage.removeItem('onestop_user_profile');
      localStorage.removeItem('onestep_user_profile');
      localStorage.removeItem('onestop_onboarding_completed');
      localStorage.removeItem('onestep_onboarding_completed');
    } catch (e) {}
  };

  const setProfile = (newProfile: UserProfile) => {
    setProfileState(newProfile);
    try {
      localStorage.setItem('onestop_user_profile', JSON.stringify(newProfile));
      localStorage.setItem('onestep_user_profile', JSON.stringify(newProfile));
    } catch (e) {}
  };

  const loadPresetProfile = (index: number) => {
    const selected = PRESET_PROFILES[index];
    if (selected) {
      const presetWithEmail = {
        ...selected.profile,
        email: `${selected.profile.fullName.toLowerCase().replace(/\s+/g, '.')}@student.onestop.edu`
      };
      setProfile(presetWithEmail);
      setIsAuthenticated(true);
      try {
        localStorage.setItem('onestop_is_authenticated', 'true');
        localStorage.setItem('onestop_user_profile', JSON.stringify(presetWithEmail));
      } catch (e) {}
    }
  };

  const toggleSaveCareer = (careerId: string) => {
    setSavedCareers((prev) => {
      const updated = prev.includes(careerId)
        ? prev.filter((id) => id !== careerId)
        : [...prev, careerId];
      try {
        localStorage.setItem('onestop_saved_careers', JSON.stringify(updated));
        localStorage.setItem('onestep_saved_careers', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const isCareerSaved = (careerId: string) => savedCareers.includes(careerId);

  const toggleSaveCollege = (collegeId: string) => {
    setSavedColleges((prev) => {
      const updated = prev.includes(collegeId)
        ? prev.filter((id) => id !== collegeId)
        : [...prev, collegeId];
      try {
        localStorage.setItem('onestop_saved_colleges', JSON.stringify(updated));
        localStorage.setItem('onestep_saved_colleges', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const isCollegeSaved = (collegeId: string) => savedColleges.includes(collegeId);

  const toggleTaskCompleted = (taskId: string) => {
    setCompletedTasks((prev) => {
      const updated = prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId];
      try {
        localStorage.setItem('onestop_completed_tasks', JSON.stringify(updated));
        localStorage.setItem('onestep_completed_tasks', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const isTaskCompleted = (taskId: string) => completedTasks.includes(taskId);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('onestop_theme', nextTheme);
        localStorage.setItem('onestep_theme', nextTheme);
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
      return nextTheme;
    });
  };

  const setOnboardingCompleted = (val: boolean) => {
    setOnboardingCompletedState(val);
    try {
      localStorage.setItem('onestop_onboarding_completed', String(val));
      localStorage.setItem('onestep_onboarding_completed', String(val));
    } catch (e) {}
  };

  const clearNotifications = () => {
    setNotificationCount(0);
  };

  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile,
        loadPresetProfile,
        savedCareers,
        toggleSaveCareer,
        isCareerSaved,
        savedColleges,
        toggleSaveCollege,
        isCollegeSaved,
        completedTasks,
        toggleTaskCompleted,
        isTaskCompleted,
        theme,
        toggleTheme,
        onboardingCompleted,
        setOnboardingCompleted,
        notificationCount,
        clearNotifications
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
