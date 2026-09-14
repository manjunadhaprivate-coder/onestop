'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { COURSES_DATA } from '@/data/courses';
import { Course, Stream, EducationLevel } from '@/types';
import { 
  BookOpen, 
  Layers, 
  Scale, 
  Clock, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Plus, 
  X, 
  IndianRupee, 
  GraduationCap 
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Engineering',
  'Medicine',
  'Commerce',
  'Arts',
  'Computer Applications',
  'Science',
  'Management',
  'Design',
  'Law',
  'Agriculture'
];

export default function EducationPlannerPage() {
  const { profile } = useApp();

  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>(profile.educationLevel);
  const [selectedStream, setSelectedStream] = useState<string>(profile.stream);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [compareList, setCompareList] = useState<Course[]>([]);
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesStream = 
        selectedStream === 'All' || 
        course.suitableStreams.includes(selectedStream as Stream);

      const matchesCategory = 
        selectedCategory === 'All' || 
        course.category === selectedCategory;

      return matchesStream && matchesCategory;
    });
  }, [selectedStream, selectedCategory]);

  const toggleCompare = (course: Course) => {
    if (compareList.some(c => c.id === course.id)) {
      setCompareList(compareList.filter(c => c.id !== course.id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare a maximum of 3 courses simultaneously.');
        return;
      }
      setCompareList([...compareList, course]);
    }
  };

  const isInCompare = (courseId: string) => compareList.some(c => c.id === courseId);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Undergraduate & Professional Course Planner</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Higher Education & Degree Planner
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Explore structured degree options matching your stream, examine government vs private fee brackets, and compare courses side-by-side.
        </p>
      </div>

      {/* Stream & Filter Control Panel */}
      <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Level */}
          <div>
            <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">
              Current Education Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as EducationLevel)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
            >
              <option value="Class 10">Class 10</option>
              <option value="Class 12">Class 12</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>

          {/* Stream */}
          <div>
            <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">
              Target Stream
            </label>
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
            >
              <option value="All">All Streams</option>
              <option value="Science (PCM)">Science (PCM)</option>
              <option value="Science (PCB)">Science (PCB)</option>
              <option value="Science (PCMB)">Science (PCMB)</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts & Humanities">Arts & Humanities</option>
              <option value="Computer Science / IT">Computer Science / IT</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">
              Discipline Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-t border-slate-100 dark:border-slate-800 pt-3 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-Side Course Comparison Dock */}
      {compareList.length > 0 && (
        <div className="p-4 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 rounded-2xl animate-in slide-in-from-top-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h3 className="font-bold text-xs sm:text-sm text-purple-900 dark:text-purple-200">
                Course Comparison Dock ({compareList.length}/3 selected)
              </h3>
            </div>
            <button
              onClick={() => setCompareList([])}
              className="text-[11px] font-semibold text-purple-700 dark:text-purple-300 hover:underline"
            >
              Clear Comparison
            </button>
          </div>

          {/* Comparison Cards Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {compareList.map((course) => (
              <div
                key={course.id}
                className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm text-xs relative"
              >
                <button
                  onClick={() => toggleCompare(course)}
                  className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <h4 className="font-bold text-slate-900 dark:text-white pr-4">
                  {course.name}
                </h4>
                <div className="mt-2 space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px]">
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Govt Fees:</strong> {course.averageFeesGovt}</p>
                  <p><strong>Private Fees:</strong> {course.averageFeesPrivate}</p>
                  <p><strong>Avg Starting CTC:</strong> <span className="text-emerald-600 font-bold">{course.averageStartingSalary}</span></p>
                  <p className="line-clamp-2"><strong>Exams:</strong> {course.topEntranceExams.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCourses.map((course) => {
          const inCompare = isInCompare(course.id);

          return (
            <div
              key={course.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                    {course.category} • {course.duration}
                  </span>
                  <button
                    onClick={() => toggleCompare(course)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition flex items-center gap-1 ${
                      inCompare
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    <Scale className="w-3 h-3" />
                    <span>{inCompare ? 'Comparing' : 'Compare'}</span>
                  </button>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {course.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {course.overview}
                </p>

                {/* Eligibility & Exams */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <strong className="text-slate-500 text-[11px] min-w-[70px]">Eligibility:</strong>
                    <span className="text-slate-700 dark:text-slate-300 text-[11px]">{course.eligibility}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <strong className="text-slate-500 text-[11px] min-w-[70px]">Top Exams:</strong>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold text-[11px]">
                      {course.topEntranceExams.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <strong className="text-slate-500 text-[11px] min-w-[70px]">Average CTC:</strong>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                      {course.averageStartingSalary}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Govt: {course.averageFeesGovt}
                </span>
                <button
                  onClick={() => setActiveCourseModal(course)}
                  className="px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/80 hover:bg-purple-600 hover:text-white text-purple-700 dark:text-purple-300 text-xs font-semibold transition"
                >
                  Full Syllabus & Outcomes
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* COURSE DETAIL MODAL */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  {activeCourseModal.category} • {activeCourseModal.duration}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeCourseModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 py-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1">
                  Course Overview
                </h4>
                <p>{activeCourseModal.overview}</p>
              </div>

              {/* Fees comparison */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <div>
                  <span className="text-slate-400 block text-[11px]">Government College Fee:</span>
                  <p className="font-bold text-emerald-600 text-xs mt-0.5">{activeCourseModal.averageFeesGovt}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Private College Fee:</span>
                  <p className="font-bold text-slate-700 dark:text-slate-300 text-xs mt-0.5">{activeCourseModal.averageFeesPrivate}</p>
                </div>
              </div>

              {/* Core Subjects */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1.5">
                  Key Semester Subjects
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeCourseModal.keySubjects.map((sub) => (
                    <span key={sub} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Outcomes & Higher Studies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1">
                    Direct Career Outcomes
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
                    {activeCourseModal.careerOutcomes.map((out, i) => (
                      <li key={i}>{out}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1">
                    Future Higher Studies (PG)
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
                    {activeCourseModal.higherStudies.map((pg, i) => (
                      <li key={i}>{pg}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveCourseModal(null)}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-xs"
              >
                Close Course Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
