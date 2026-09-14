'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { CAREERS_DATA } from '@/data/careers';
import { Career, Stream } from '@/types';
import { 
  Search, 
  Filter, 
  Bookmark, 
  Compass, 
  TrendingUp, 
  Map, 
  X, 
  ArrowRight, 
  GraduationCap, 
  DollarSign, 
  Building2, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const { profile, savedCareers, toggleSaveCareer, isCareerSaved } = useApp();

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedStream, setSelectedStream] = useState<string>('All');
  const [selectedGrowth, setSelectedGrowth] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'salary' | 'growth'>('recommended');
  const [activeCareerModal, setActiveCareerModal] = useState<Career | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(CAREERS_DATA.map(c => c.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered and sorted careers
  const filteredCareers = useMemo(() => {
    return CAREERS_DATA.filter((c) => {
      const matchesQuery = 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStream = selectedStream === 'All' || c.stream.includes(selectedStream as Stream);
      const matchesGrowth = selectedGrowth === 'All' || c.growthDemand === selectedGrowth;
      const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;

      return matchesQuery && matchesStream && matchesGrowth && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'growth') {
        return b.growthPercentage.localeCompare(a.growthPercentage);
      }
      if (sortBy === 'salary') {
        return b.salaryRange.mid.localeCompare(a.salaryRange.mid);
      }
      // default: recommend based on current student stream
      const aMatch = a.stream.includes(profile.stream) ? 1 : 0;
      const bMatch = b.stream.includes(profile.stream) ? 1 : 0;
      return bMatch - aMatch;
    });
  }, [searchQuery, selectedStream, selectedGrowth, selectedCategory, sortBy, profile.stream]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-xs font-semibold text-brand-700 dark:text-brand-300 mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>India Career Matrix • 16+ Verified Profiles</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Explore High-Growth Careers
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Discover comprehensive career roadmaps, salary progression in INR (LPA), required entrance exams, and top recruiters across India.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by career title, skill (e.g., Python, Figma, Auditing), or keywords..."
            className="w-full pl-11 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          {/* Stream Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">Stream:</span>
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="py-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium"
            >
              <option value="All">All Streams</option>
              <option value="Science (PCM)">Science (PCM)</option>
              <option value="Science (PCB)">Science (PCB)</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts & Humanities">Arts & Humanities</option>
              <option value="Computer Science / IT">Computer Science / IT</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Demand Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">Growth Demand:</span>
            <select
              value={selectedGrowth}
              onChange={(e) => setSelectedGrowth(e.target.value)}
              className="py-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium"
            >
              <option value="All">Any Growth</option>
              <option value="Very High">Very High</option>
              <option value="High">High</option>
              <option value="Steady">Steady</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-slate-400 font-semibold">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium"
            >
              <option value="recommended">Best Profile Match</option>
              <option value="salary">Salary Potential</option>
              <option value="growth">Growth Velocity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Showing <strong>{filteredCareers.length}</strong> careers</span>
        {selectedStream !== 'All' && (
          <span className="bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 px-2 py-0.5 rounded-md font-medium">
            Filtered by {selectedStream}
          </span>
        )}
      </div>

      {/* Careers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCareers.map((career) => {
          const saved = isCareerSaved(career.id);
          const isUserStream = career.stream.includes(profile.stream);

          return (
            <div
              key={career.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                {/* Badges & Save */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                      {career.category}
                    </span>
                    {isUserStream && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Fits Your Stream
                      </span>
                    )}
                  </div>
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

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600 transition">
                  {career.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {career.overview}
                </p>

                {/* Salary & Growth row */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Mid-Career Salary:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{career.salaryRange.mid}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Industry Growth:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{career.growthPercentage}</span>
                  </div>
                </div>

                {/* Key Skills */}
                <div className="mt-3">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">Key Skills:</span>
                  <div className="flex flex-wrap gap-1">
                    {career.requiredSkills.slice(0, 3).map((sk) => (
                      <span key={sk} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {sk}
                      </span>
                    ))}
                    {career.requiredSkills.length > 3 && (
                      <span className="text-[10px] text-slate-400 px-1">
                        +{career.requiredSkills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => setActiveCareerModal(career)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-semibold transition text-center"
                >
                  View Career Guide
                </button>
                <Link
                  href={`/roadmap?career=${career.id}`}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-600 hover:border-brand-400 transition"
                  title="View Learning Roadmap"
                >
                  <Map className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCareers.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
          <Compass className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">No careers match your filters</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search keywords or switching stream/growth filters to discover more paths.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedStream('All');
              setSelectedGrowth('All');
              setSelectedCategory('All');
            }}
            className="mt-4 px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-semibold"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* FULL CAREER DETAILS MODAL */}
      {activeCareerModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                    {activeCareerModal.category}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    {activeCareerModal.growthPercentage} Growth
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5">
                  {activeCareerModal.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Suitable for: {activeCareerModal.stream.join(', ')}
                </p>
              </div>
              <button
                onClick={() => setActiveCareerModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 py-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                  Career Overview
                </h4>
                <p>{activeCareerModal.overview}</p>
              </div>

              {/* Day in the life */}
              <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-300 text-xs mb-1">
                  A Day in the Life:
                </h4>
                <p className="text-indigo-800 dark:text-indigo-200">
                  {activeCareerModal.dayInTheLife}
                </p>
              </div>

              {/* Why choose */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1.5">
                  Why Choose This Career?
                </h4>
                <ul className="space-y-1 pl-1">
                  {activeCareerModal.whyChoose.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Salary & Entrance Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">
                    Salary Compensation (LPA)
                  </span>
                  <div className="space-y-1 font-semibold text-slate-800 dark:text-slate-200">
                    <p className="flex justify-between"><span>Entry Level:</span> <strong className="text-brand-600">{activeCareerModal.salaryRange.entry}</strong></p>
                    <p className="flex justify-between"><span>Mid-Senior:</span> <strong className="text-brand-600">{activeCareerModal.salaryRange.mid}</strong></p>
                    <p className="flex justify-between"><span>Senior / Director:</span> <strong className="text-brand-600">{activeCareerModal.salaryRange.senior}</strong></p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">
                    Popular Indian Entrance Exams
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeCareerModal.popularExams.map((exam) => (
                      <span key={exam} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 shadow-sm">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Required Education & Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1.5">
                    Educational Qualifications
                  </h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {activeCareerModal.requiredEducation.map((edu, idx) => (
                      <li key={idx}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1.5">
                    Required Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCareerModal.requiredSkills.map((sk) => (
                      <span key={sk} className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Recruiters */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1.5">
                  Top Recruiters in India
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCareerModal.topRecruiters.map((rec) => (
                    <span key={rec} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  toggleSaveCareer(activeCareerModal.id);
                }}
                className={`py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                  isCareerSaved(activeCareerModal.id)
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-600'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{isCareerSaved(activeCareerModal.id) ? 'Saved to Profile' : 'Save Career'}</span>
              </button>

              <Link
                href={`/roadmap?career=${activeCareerModal.id}`}
                onClick={() => setActiveCareerModal(null)}
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition"
              >
                <span>View Learning Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-xs text-slate-400">Loading Career Explorer...</div>}>
      <ExploreContent />
    </Suspense>
  );
}