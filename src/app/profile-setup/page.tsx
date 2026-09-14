'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { UserProfile, EducationLevel, Stream } from '@/types';
import { 
  User, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Check, 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Percent, 
  IndianRupee 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INTEREST_OPTIONS = [
  'Software Development', 'Artificial Intelligence', 'Data Analysis', 
  'Medical Diagnostics', 'Robotics & Hardware', 'Financial Markets', 
  'Public Administration', 'Civil Services', 'Corporate Law', 
  'Product Design (UI/UX)', 'Renewable Energy', 'Agritech', 
  'Digital Marketing', 'Aviation & Aerospace'
];

const SUBJECT_OPTIONS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 
  'Computer Science', 'Accountancy', 'Economics', 
  'Business Studies', 'History', 'Political Science', 
  'English Literature', 'Psychology'
];

const SKILL_OPTIONS = [
  'Python', 'Problem Solving', 'Communication', 'JavaScript', 
  'Data Structures', 'Graphic Design', 'Financial Modeling', 
  'Public Speaking', 'Critical Thinking', 'Excel & Analytics', 
  'Team Leadership', 'Scientific Research'
];

export default function ProfileSetupPage() {
  const router = useRouter();
  const { profile, setProfile } = useApp();

  const [formData, setFormData] = useState<UserProfile>({ ...profile });
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const toggleArrayItem = (key: 'academicInterests' | 'favoriteSubjects' | 'skills' | 'careerInterests', item: string) => {
    const list = [...formData[key]];
    if (list.includes(item)) {
      setFormData({ ...formData, [key]: list.filter((i) => i !== item) });
    } else {
      setFormData({ ...formData, [key]: [...list, item] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({
      ...formData,
      updatedAt: new Date().toISOString()
    });

    // Dispatch secure admin notification for registration completion
    fetch('/api/notifications/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: `${formData.fullName.toLowerCase().replace(/\s+/g, '.')}@student.onestop.edu`,
        loginMethod: 'Academic Profile Registration',
        onboardingCompleted: true,
        educationLevel: formData.educationLevel,
        stream: formData.stream,
        academicScore: formData.academicScore
      })
    }).catch((err) => console.error('Admin notification dispatch error:', err));

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      router.push('/');
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Step {step} of 3 • Student Personalization</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Complete Your Academic Profile
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg mx-auto">
          Help One-Stop tailor career recommendations, college cutoffs, and course roadmaps specifically to your academic background.
        </p>

        {/* Progress bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full mt-6 max-w-md mx-auto overflow-hidden">
          <div 
            className="bg-gradient-to-r from-brand-600 to-purple-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10">
        {/* STEP 1: BASIC ACADEMICS */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <User className="w-5 h-5 text-brand-600" />
              <span>Personal & Current Education</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="e.g. Aarav Sharma"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Age
                </label>
                <input
                  type="number"
                  min={12}
                  max={40}
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Current Education Level
                </label>
                <select
                  value={formData.educationLevel}
                  onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value as EducationLevel })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="Class 10">Class 10</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Undergraduate">Undergraduate (College)</option>
                  <option value="Graduate">Graduate / Master's</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Academic Stream
                </label>
                <select
                  value={formData.stream}
                  onChange={(e) => setFormData({ ...formData, stream: e.target.value as Stream })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="Science (PCM)">Science (PCM - Physics, Chem, Math)</option>
                  <option value="Science (PCB)">Science (PCB - Physics, Chem, Bio)</option>
                  <option value="Science (PCMB)">Science (PCMB - Four Sciences)</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts & Humanities">Arts & Humanities</option>
                  <option value="Computer Science / IT">Computer Science / IT</option>
                  <option value="Open / Undecided">Open / Undecided</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Recent Academic Score / Percentage</span>
                <span className="text-brand-600 font-bold text-sm">{formData.academicScore}%</span>
              </label>
              <input
                type="range"
                min={40}
                max={100}
                value={formData.academicScore}
                onChange={(e) => setFormData({ ...formData, academicScore: Number(e.target.value) })}
                className="w-full accent-brand-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>40% (Pass)</span>
                <span>60% (First Class)</span>
                <span>80% (Distinction)</span>
                <span>95%+ (Top Rank)</span>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs flex items-center gap-2 shadow-md shadow-brand-500/20 transition"
              >
                <span>Continue to Interests</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: INTERESTS & SKILLS */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <BookOpen className="w-5 h-5 text-brand-600" />
              <span>Interests, Subjects & Skills</span>
            </h2>

            {/* Academic Interests */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                What fields spark your curiosity? (Select 2 or more)
              </label>
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((item) => {
                  const selected = formData.academicInterests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleArrayItem('academicInterests', item)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition flex items-center gap-1.5 ${
                        selected
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {selected && <Check className="w-3.5 h-3.5" />}
                      <span>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Favorite Subjects */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Favorite High School / College Subjects
              </label>
              <div className="flex flex-wrap gap-2">
                {SUBJECT_OPTIONS.map((item) => {
                  const selected = formData.favoriteSubjects.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleArrayItem('favoriteSubjects', item)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition flex items-center gap-1.5 ${
                        selected
                          ? 'bg-purple-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {selected && <Check className="w-3.5 h-3.5" />}
                      <span>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Skills */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Skills you already possess or are currently learning
              </label>
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((item) => {
                  const selected = formData.skills.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleArrayItem('skills', item)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition flex items-center gap-1.5 ${
                        selected
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {selected && <Check className="w-3.5 h-3.5" />}
                      <span>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs flex items-center gap-2 shadow-md shadow-brand-500/20 transition"
              >
                <span>Continue to Preferences</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: COLLEGE & BUDGET PREFERENCES */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <GraduationCap className="w-5 h-5 text-brand-600" />
              <span>College, Location & Budget Preferences</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Government College Preference
                </label>
                <select
                  value={formData.govtCollegePreference}
                  onChange={(e) => setFormData({ ...formData, govtCollegePreference: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="Strong Preference">Strong Preference (IIT/NIT/AIIMS/Central)</option>
                  <option value="Open to Both">Open to Both (Govt & Top Private)</option>
                  <option value="Private Preferred">Private Institute Preferred (BITS/Manipal etc.)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Annual Budget Preference
                </label>
                <select
                  value={formData.budgetPreference}
                  onChange={(e) => setFormData({ ...formData, budgetPreference: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="Low (&lt; 1 Lakh/yr)">Low / Scholarship (&lt; ₹1 Lakh/year)</option>
                  <option value="Moderate (1-3 Lakhs/yr)">Moderate (₹1 - 3 Lakhs/year)</option>
                  <option value="Flexible / High (&gt; 3 Lakhs/yr)">Flexible / High (&gt; ₹3 Lakhs/year)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Preferred Study Locations (Cities/States in India)
              </label>
              <input
                type="text"
                value={formData.preferredLocation.join(', ')}
                onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                placeholder="e.g. Delhi NCR, Bengaluru, Mumbai, Pune, Chennai"
              />
              <p className="text-[11px] text-slate-400 mt-1">Separate multiple locations with commas.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Target Indian Entrance Exams
              </label>
              <input
                type="text"
                value={formData.targetEntranceExams.join(', ')}
                onChange={(e) => setFormData({ ...formData, targetEntranceExams: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                placeholder="e.g. JEE Main, JEE Advanced, CUET, NEET, CLAT, CAT"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Short Bio / Career Aspirations
              </label>
              <textarea
                rows={2}
                value={formData.bio || ''}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                placeholder="Briefly describe what you dream of becoming..."
              />
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-brand-500/25 transition transform active:scale-98"
              >
                <span>Save Profile & Launch Advisor</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Privacy Notice on Email & Admin Notifications */}
      <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1">
        <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
          <Sparkles className="w-4 h-4 text-brand-600" />
          <span>Privacy & Notification Assurance</span>
        </div>
        <p className="leading-relaxed text-[11px]">
          We take student privacy seriously. Your academic interests, scores, and contact information are used exclusively to calibrate personalized educational roadmaps. Upon completion of profile registration, an administrative audit notification is securely dispatched to the platform administrator (<code className="text-brand-600 dark:text-brand-400">admin@onestopadvisor.com</code>). Passwords, tokens, or private secrets are never requested, stored, or transmitted.
        </p>
      </div>
    </div>
  );
}
