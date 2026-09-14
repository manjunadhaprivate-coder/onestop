'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useApp, PRESET_PROFILES } from '@/context/AppContext';
import { 
  GraduationCap, 
  Sparkles, 
  Compass, 
  Map, 
  Rocket, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  UserCheck, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OnboardingPage() {
  const router = useRouter();
  const { setOnboardingCompleted, loadPresetProfile, profile, isAuthenticated, isAuthLoaded } = useApp();

  // Phase: 3 = Onboarding Slides (default for registered users), 2 = Welcome, 1 = Splash
  const [phase, setPhase] = useState<1 | 2 | 3>(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [splashProgress, setSplashProgress] = useState(15);
  const [showLegalModal, setShowLegalModal] = useState<'terms' | 'privacy' | null>(null);

  // Auth Guard: Unauthenticated users must register/login first
  useEffect(() => {
    if (isAuthLoaded && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthLoaded, isAuthenticated, router]);

  const slides = [
    {
      title: 'Discover Careers',
      subtitle: 'Explore career opportunities that match your interests.',
      icon: Compass,
      gradient: 'from-blue-600 to-indigo-600',
      description: 'Explore over 100+ dynamic career options in India across Engineering, Medicine, Civil Services, Design, and Commerce with real salary trends and entrance requirements.'
    },
    {
      title: 'AI Guidance',
      subtitle: 'Get personalized career recommendations powered by intelligent guidance.',
      icon: Sparkles,
      gradient: 'from-indigo-600 to-purple-600',
      description: 'Our context-aware AI Advisor evaluates your stream, academic marks, favorite subjects, and budget to prescribe the optimal learning pathways.'
    },
    {
      title: 'Education Roadmaps',
      subtitle: 'Find courses, colleges, and skill paths to achieve your goals.',
      icon: Map,
      gradient: 'from-purple-600 to-pink-600',
      description: 'Access step-by-step milestones, premier Indian government colleges (IITs, AIIMS, DU, NLUs), and central/state scholarship portals.'
    },
    {
      title: 'Ready to Begin?',
      subtitle: "Let's build your future together!",
      icon: Rocket,
      gradient: 'from-brand-600 to-purple-600',
      description: 'Join thousands of students making informed, confident choices for higher education and high-growth careers across India.'
    }
  ];

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      finishOnboarding();
    }
  };

  const dispatchRegistrationAlert = async (loginMethod: string, isCompleted: boolean) => {
    try {
      await fetch('/api/notifications/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: profile.fullName || 'Registered Student',
          email: profile.email || `${(profile.fullName || 'student').toLowerCase().replace(/\s+/g, '.')}@student.onestop.edu`,
          loginMethod,
          onboardingCompleted: isCompleted,
          stream: profile.stream,
          educationLevel: profile.educationLevel,
          academicScore: profile.academicScore
        })
      });
    } catch (e) {
      console.error('Failed to dispatch registration email notification:', e);
    }
  };

  const finishOnboarding = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setOnboardingCompleted(true);
    dispatchRegistrationAlert('Onboarding Completed Tour', true);
    router.push('/');
  };

  const handleGuestLogin = (presetIdx: number = 0, method: string = 'Guest Student Login') => {
    loadPresetProfile(presetIdx);
    dispatchRegistrationAlert(method, false);
    setPhase(3); // move to slides
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-6 px-4">
      {/* SCREEN 1: SPLASH SCREEN */}
      {phase === 1 && (
        <div className="w-full max-w-md text-center p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 animate-in fade-in duration-500">
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-brand-500/30 animate-pulse">
              <GraduationCap className="w-12 h-12" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            One-Stop
          </h1>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
            Personalized Career & Education Advisor
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            "Your Future. One Step Ahead."
          </p>

          <div className="mt-8 space-y-2">
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-brand-600 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${splashProgress}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-400">Loading Smart India Hackathon Advisor Engine...</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <span>Problem Statement: SIH 25094</span>
            <span>•</span>
            <span>Smart Education</span>
          </div>
        </div>
      )}

      {/* SCREEN 2: WELCOME BACK / LOGIN */}
      {phase === 2 && (
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 animate-in fade-in zoom-in-95 duration-400">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-3 border border-brand-100 dark:border-brand-900">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Welcome Back 👋
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Let's continue your career journey.
            </p>
          </div>

          <div className="space-y-3">
            {/* Mock Google Button */}
            <button
              onClick={() => handleGuestLogin(0, 'Google Authentication')}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-3 transition shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" />
                <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z" />
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Mock Apple Button */}
            <button
              onClick={() => handleGuestLogin(1, 'Apple ID Authentication')}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-3 transition shadow-sm"
            >
              <svg className="w-4 h-4 fill-current text-slate-900 dark:text-white" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.85-11.88-14.42-7.51-11.75-13.1-24.97-16.78-39.67-3.68-14.7-5.52-27.88-5.52-39.54 0-16.21 4.29-29.6 12.87-40.18 8.58-10.58 19.3-15.93 32.18-16.05 4.35 0 9.24 1.13 14.67 3.39 5.43 2.26 9.4 3.44 11.9 3.55 2.12 0 6.25-1.25 12.39-3.76 6.13-2.5 11.51-3.64 16.14-3.41 12.01.6 21.68 5.14 29.01 13.62-10.45 6.34-15.56 15.19-15.34 26.54.22 8.92 3.65 16.32 10.3 22.2 6.64 5.88 14.52 9.23 23.63 10.05-2.29 6.84-4.88 13.64-7.79 20.4zM119.22 33.09c0-6.73 2.5-13.06 7.51-18.99 5.01-5.93 11.38-9.97 19.11-12.1 1.09 5.56 1.09 11.09 0 16.59-1.09 5.5-3.68 11.08-7.77 16.74-4.22 5.6-9.18 9.38-14.88 11.34-1.2-4.57-2.52-9.76-3.97-13.58z" />
              </svg>
              <span>Continue with Apple</span>
            </button>

            <div className="relative my-4 flex items-center justify-center">
              <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
              <span className="bg-white dark:bg-slate-900 px-3 text-[11px] text-slate-400 uppercase tracking-wider font-semibold absolute">
                or
              </span>
            </div>

            {/* Guest Login Button */}
            <button
              onClick={() => handleGuestLogin(0, 'Guest Student Login')}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 transition transform active:scale-98"
            >
              <UserCheck className="w-4 h-4" />
              <span>Continue as Guest Student</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center mt-6">
            By continuing, you agree to One-Stop's{' '}
            <button 
              onClick={() => setShowLegalModal('terms')} 
              className="text-brand-600 dark:text-brand-400 underline font-medium"
            >
              Terms & Conditions
            </button>{' '}
            and{' '}
            <button 
              onClick={() => setShowLegalModal('privacy')} 
              className="text-brand-600 dark:text-brand-400 underline font-medium"
            >
              Privacy Policy
            </button>.
          </p>
        </div>
      )}

      {/* SCREEN 3: ONBOARDING SLIDES */}
      {phase === 3 && (
        <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 animate-in fade-in duration-300">
          {/* Slide Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2.5 py-1 rounded-full">
              Step {currentSlide + 1} of {slides.length}
            </span>
            <button
              onClick={finishOnboarding}
              className="text-xs font-semibold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition"
            >
              Skip
            </button>
          </div>

          {/* Slide Graphic */}
          <div className="text-center py-4">
            <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr ${slides[currentSlide].gradient} flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 mb-6 transform transition duration-500 hover:scale-105`}>
              {React.createElement(slides[currentSlide].icon, { className: 'w-12 h-12' })}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1">
              "{slides[currentSlide].subtitle}"
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed max-w-md mx-auto">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Slide Dots */}
          <div className="flex items-center justify-center gap-2 mt-8 mb-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-7 bg-brand-600 dark:bg-brand-400'
                    : 'w-2 bg-slate-200 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {currentSlide === slides.length - 1 ? (
              <button
                onClick={finishOnboarding}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 transition transform active:scale-98"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNextSlide}
                className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-brand-500/20 transition transform active:scale-98"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal for Terms & Conditions and Privacy Policy */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white capitalize">
              {showLegalModal === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 my-4 max-h-60 overflow-y-auto pr-2 leading-relaxed">
              <p>
                <strong>1. Prototype Disclaimer:</strong> One-Stop is an AI-guided student advisory prototype developed for Smart India Hackathon 2025 (Problem Statement SIH 25094).
              </p>
              <p>
                <strong>2. Advisory Recommendations:</strong> College cutoffs, salary figures, and admission procedures are compiled from public educational records and represent guidance, not guarantees.
              </p>
              <p>
                <strong>3. Data Privacy:</strong> User preferences, marks, and profile details are stored locally in your browser session and are not transmitted to third-party advertisers.
              </p>
              <p>
                <strong>4. Email Usage Policy:</strong> Email addresses provided during registration are utilized strictly for user identification, career progress synchronization, and educational alerts.
              </p>
              <p>
                <strong>5. Admin Notification Transparency:</strong> Whenever a new account is initiated or completed, an operational notification containing the student name, email, login method, registration timestamp, and onboarding status is securely sent to the platform administrator. Passwords, access tokens, or sensitive credentials are NEVER accessed, stored, or transmitted.
              </p>
            </div>
            <button
              onClick={() => setShowLegalModal(null)}
              className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold"
            >
              Close & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
