'use client';

import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { CAREERS_DATA } from '@/data/careers';
import { Career } from '@/types';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  FileText, 
  Bot, 
  TrendingUp, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Bookmark, 
  ExternalLink, 
  Map, 
  GraduationCap,
  Layers,
  ChevronRight,
  X,
  Award,
  Zap
} from 'lucide-react';

const TRENDING_SKILLS = [
  { name: 'Python', category: 'Programming', demand: 'High Demand', growth: '+32%', iconColor: 'text-amber-500' },
  { name: 'Artificial Intelligence', category: 'Emerging Tech', demand: 'Explosive', growth: '+48%', iconColor: 'text-purple-500' },
  { name: 'Cloud Computing', category: 'Infrastructure', demand: 'High Demand', growth: '+29%', iconColor: 'text-sky-500' },
  { name: 'UI/UX Design', category: 'Product', demand: 'Consistent', growth: '+24%', iconColor: 'text-pink-500' },
  { name: 'Cybersecurity', category: 'Defense & Cloud', demand: 'Critical', growth: '+35%', iconColor: 'text-emerald-500' },
  { name: 'Data Analytics', category: 'Business Intelligence', demand: 'High Demand', growth: '+27%', iconColor: 'text-indigo-500' }
];

export default function HomeDashboard() {
  const router = useRouter();
  const { 
    profile, 
    savedCareers, 
    toggleSaveCareer, 
    isCareerSaved,
    savedColleges,
    isAuthenticated,
    onboardingCompleted,
    isAuthLoaded
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<any | null>(null);

  // Auth Guard: Enforce Login/Register first
  useEffect(() => {
    if (isAuthLoaded) {
      if (!isAuthenticated) {
        router.replace('/login');
      } else if (!onboardingCompleted) {
        router.replace('/onboarding');
      }
    }
  }, [isAuthLoaded, isAuthenticated, onboardingCompleted, router]);

  // Calculate Match Score based on student stream & interests
  const calculateMatchScore = (career: Career): number => {
    let score = 65;
    if (career.stream.includes(profile.stream)) score += 20;
    const commonInterests = career.requiredSkills.filter(s => 
      profile.skills.some(userSkill => s.toLowerCase().includes(userSkill.toLowerCase()))
    );
    score += Math.min(commonInterests.length * 5, 15);
    return Math.min(score, 98);
  };

  // Filter careers for recommended section
  const recommendedCareers = CAREERS_DATA.slice(0, 8);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // If unauthenticated or loading, show seamless redirect screen
  if (!isAuthLoaded || !isAuthenticated || !onboardingCompleted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-purple-600 flex items-center justify-center text-white shadow-lg animate-pulse">
          <GraduationCap className="w-6 h-6" />
        </div>
        <p className="text-xs text-slate-500 font-medium">Verifying Student Session...</p>
      </div>
    );
  }

  const userFirstName = profile.fullName?.trim() ? profile.fullName.split(' ')[0] : 'Student';

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. HEADER & GREETING */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-brand-500/20 relative overflow-hidden">
        {/* Background glow graphics */}
        <div className="absolute -right-8 -top-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-white mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI Career & Higher Education Advisor</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Good Morning, {userFirstName} 👋
          </h1>
          <p className="text-xs sm:text-sm text-brand-100 max-w-xl mt-1">
            Stream: <strong className="text-white">{profile.stream}</strong> • Class/Level: <strong className="text-white">{profile.educationLevel}</strong> • Academic Score: <strong className="text-white">{profile.academicScore}%</strong>
          </p>
        </div>

        {/* Quick Profile Summary Badge */}
        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/profile"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition text-white text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-xl bg-white text-brand-600 font-bold flex items-center justify-center text-sm shadow-sm">
              {userFirstName.charAt(0)}
            </div>
            <div className="text-left">
              <span className="block text-[11px] text-brand-200">My Profile</span>
              <span>Saved Items: {savedCareers.length + savedColleges.length}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-brand-200" />
          </Link>
        </div>
      </div>

      {/* 2. SEARCH BAR */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search careers, colleges, courses or skills (e.g., Data Scientist, IIT Bombay, B.Tech, Python)..."
            className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
          />
          <button
            type="submit"
            className="absolute right-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition shadow-sm"
          >
            Search
          </button>
        </div>
      </form>

      {/* 3. QUICK ACTIONS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-brand-600" />
            <span>Quick Actions</span>
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">SIH 25094 Advisor Modules</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Action 1: Career Advisor */}
          <Link
            href="/advisor"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 shadow-sm hover:shadow-md transition group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 transition">
                1. Career Advisor
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Get intelligent AI recommendations matched with your stream and marks.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-brand-600 dark:text-brand-400 gap-1">
              <span>Start Advisor</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Action 2: Education Planner */}
          <Link
            href="/planner"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 shadow-sm hover:shadow-md transition group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-purple-600 transition">
                2. Education Planner
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Compare courses, degree durations, entrance exams, and eligibility criteria.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-purple-600 dark:text-purple-400 gap-1">
              <span>Explore Degrees</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Action 3: Resume Analyzer */}
          <Link
            href="/resume"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 shadow-sm hover:shadow-md transition group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 transition">
                3. Resume Analyzer
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Detect skill gaps, get an ATS score out of 100, and improve career fit.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 gap-1">
              <span>Analyze Resume</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </Link>

          {/* Action 4: AI Chat */}
          <Link
            href="/advisor"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-700 shadow-sm hover:shadow-md transition group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-pink-600 transition">
                4. AI Chat Assistant
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Ask instant questions about stream change, JEE/NEET, or high-paying jobs.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-pink-600 dark:text-pink-400 gap-1">
              <span>Open Chat</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        </div>
      </div>

      {/* 4. RECOMMENDED CAREERS SECTION */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-600" />
              <span>Recommended Careers for You</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Personalized for {profile.stream} • Match Scores computed by One-Stop AI
            </p>
          </div>
          <Link
            href="/explore"
            className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
          >
            <span>View All ({CAREERS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedCareers.map((career) => {
            const matchScore = calculateMatchScore(career);
            const saved = isCareerSaved(career.id);

            return (
              <div
                key={career.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {matchScore}% Match
                    </span>
                    <button
                      onClick={() => toggleSaveCareer(career.id)}
                      className={`p-1.5 rounded-lg transition ${
                        saved 
                          ? 'text-brand-600 bg-brand-50 dark:bg-brand-950' 
                          : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={saved ? 'Remove from Saved' : 'Save Career'}
                    >
                      <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 transition">
                    {career.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                    {career.category}
                  </span>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {career.shortDescription}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500">Salary (Mid):</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{career.salaryRange.mid}</span>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Growth:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{career.growthPercentage}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCareer(career)}
                    className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold transition text-center"
                  >
                    Explore Details
                  </button>
                  <Link
                    href={`/roadmap?career=${career.id}`}
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-600 hover:border-brand-400 transition"
                    title="View Learning Roadmap"
                  >
                    <Map className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. TRENDING SKILLS SECTION */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-600" />
              <span>Trending Skills in Indian Market</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              In-demand technologies with high recruitment velocity across Indian tech hubs
            </p>
          </div>
          <Link
            href="/roadmap"
            className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
          >
            Skill Roadmaps →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TRENDING_SKILLS.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 text-left transition hover:shadow-sm group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                  {skill.growth}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 transition" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mt-2 group-hover:text-brand-600 transition">
                {skill.name}
              </h4>
              <p className="text-[10px] text-slate-400 mt-0.5">{skill.category}</p>
              <span className="inline-block mt-2 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                {skill.demand}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CAREER DETAIL MODAL */}
      {selectedCareer && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                  {selectedCareer.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {selectedCareer.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCareer(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 py-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                  Overview
                </h4>
                <p>{selectedCareer.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                  Why Choose This Career?
                </h4>
                <ul className="list-disc pl-4 space-y-1">
                  {selectedCareer.whyChoose.map((why, i) => (
                    <li key={i}>{why}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <div>
                  <span className="text-slate-400 block text-[11px]">Salary Progression (LPA):</span>
                  <p className="font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    Entry: {selectedCareer.salaryRange.entry} <br />
                    Mid: {selectedCareer.salaryRange.mid} <br />
                    Senior: {selectedCareer.salaryRange.senior}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Popular Indian Entrance Exams:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedCareer.popularExams.map(ex => (
                      <span key={ex} className="text-[10px] bg-white dark:bg-slate-700 px-2 py-0.5 rounded font-semibold text-brand-600 dark:text-brand-300">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                  Required Core Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCareer.requiredSkills.map(sk => (
                    <span key={sk} className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-lg font-medium">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  toggleSaveCareer(selectedCareer.id);
                }}
                className={`py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                  isCareerSaved(selectedCareer.id)
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-600'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{isCareerSaved(selectedCareer.id) ? 'Saved' : 'Save Career'}</span>
              </button>

              <Link
                href={`/roadmap?career=${selectedCareer.id}`}
                onClick={() => setSelectedCareer(null)}
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition"
              >
                <span>View Full Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SKILL DETAIL MODAL */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Skill: {selectedSkill.name}
              </h3>
              <button onClick={() => setSelectedSkill(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {selectedSkill.name} is one of the highest-growth tech proficiencies in India. Hiring managers across Bengaluru, Gurgaon, and Hyderabad prioritize candidates with verified hands-on projects in this domain.
            </p>
            <div className="p-3 bg-brand-50 dark:bg-brand-950 rounded-xl text-xs space-y-1 mb-4 text-brand-900 dark:text-brand-200">
              <p><strong>Category:</strong> {selectedSkill.category}</p>
              <p><strong>Current Demand:</strong> {selectedSkill.demand}</p>
              <p><strong>YoY Growth:</strong> {selectedSkill.growth}</p>
            </div>
            <Link
              href="/roadmap"
              onClick={() => setSelectedSkill(null)}
              className="block w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-center rounded-xl text-xs shadow-md"
            >
              Explore Learning Modules
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
