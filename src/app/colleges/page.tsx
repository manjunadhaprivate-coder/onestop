'use client';

import React, { useState, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import { COLLEGES_DATA } from '@/data/colleges';
import { SCHOLARSHIPS_DATA, ADMISSION_ALERTS } from '@/data/scholarships';
import { College } from '@/types';
import { 
  Landmark, 
  Search, 
  MapPin, 
  Award, 
  Bookmark, 
  ExternalLink, 
  GraduationCap, 
  CheckCircle2, 
  Bell, 
  DollarSign, 
  X,
  Building,
  Sparkles
} from 'lucide-react';

export default function CollegesPage() {
  const { savedColleges, toggleSaveCollege, isCollegeSaved } = useApp();

  const [activeTab, setActiveTab] = useState<'colleges' | 'scholarships' | 'alerts'>('colleges');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const [activeCollegeModal, setActiveCollegeModal] = useState<College | null>(null);

  // States list
  const states = useMemo(() => {
    const list = Array.from(new Set(COLLEGES_DATA.map(c => c.location.state)));
    return ['All', ...list.sort()];
  }, []);

  // Filtered colleges
  const filteredColleges = useMemo(() => {
    return COLLEGES_DATA.filter((col) => {
      const matchesSearch = 
        col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        col.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        col.location.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        col.availableCourses.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesState = selectedState === 'All' || col.location.state === selectedState;
      const matchesType = selectedType === 'All' || col.type === selectedType;
      const matchesCourse = selectedCourse === 'All' || col.availableCourses.some(c => c.includes(selectedCourse));

      return matchesSearch && matchesState && matchesType && matchesCourse;
    });
  }, [searchQuery, selectedState, selectedType, selectedCourse]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-xs font-semibold text-brand-700 dark:text-brand-300 mb-2">
          <Landmark className="w-3.5 h-3.5" />
          <span>Premier Indian Institutes & Scholarships Portal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Indian College Directory & Financial Aid
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Explore premier Government and Central universities (IITs, AIIMS, NITs, DU), fee waivers, cutoffs, and national scholarship portals.
        </p>
      </div>

      {/* Main Tabs: Colleges | Scholarships | Admission Alerts */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('colleges')}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold transition border-b-2 flex items-center gap-2 ${
            activeTab === 'colleges'
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Colleges Directory ({COLLEGES_DATA.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('scholarships')}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold transition border-b-2 flex items-center gap-2 ${
            activeTab === 'scholarships'
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Scholarships & Schemes ({SCHOLARSHIPS_DATA.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('alerts')}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold transition border-b-2 flex items-center gap-2 ${
            activeTab === 'alerts'
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>Admission Updates ({ADMISSION_ALERTS.length})</span>
        </button>
      </div>

      {/* TAB 1: COLLEGES DIRECTORY */}
      {activeTab === 'colleges' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Filters Bar */}
          <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search college name, city (e.g. Mumbai, Bengaluru, Delhi) or course..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-semibold">State:</span>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="py-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium"
                >
                  {states.map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-semibold">Institution Type:</span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="py-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium"
                >
                  <option value="All">All Types</option>
                  <option value="Central Government">Central Government</option>
                  <option value="State Government">State Government</option>
                  <option value="Autonomous / Premier">Autonomous / Premier</option>
                  <option value="Private">Private</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-semibold">Course:</span>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="py-1 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium"
                >
                  <option value="All">All Courses</option>
                  <option value="B.Tech">B.Tech Engineering</option>
                  <option value="MBBS">MBBS Medicine</option>
                  <option value="B.Com">B.Com Commerce</option>
                  <option value="B.A.">B.A. Humanities / Law</option>
                  <option value="B.Des">B.Des Design</option>
                </select>
              </div>

              <span className="ml-auto text-slate-400 font-medium">
                Found {filteredColleges.length} colleges
              </span>
            </div>
          </div>

          {/* Colleges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredColleges.map((col) => {
              const saved = isCollegeSaved(col.id);

              return (
                <div
                  key={col.id}
                  className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    {/* Top badging */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                        {col.type}
                      </span>
                      <button
                        onClick={() => toggleSaveCollege(col.id)}
                        className={`p-1.5 rounded-lg transition ${
                          saved
                            ? 'text-brand-600 bg-brand-50 dark:bg-brand-950'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                        title={saved ? 'Remove from Saved' : 'Save College'}
                      >
                        <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {col.name}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{col.location.city}, {col.location.state}</span>
                      {col.nirfRank && (
                        <span className="ml-2 font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.2 rounded text-[10px]">
                          NIRF #{col.nirfRank}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {col.overview}
                    </p>

                    {/* Quick admission info box */}
                    <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs space-y-1">
                      <div className="flex items-start justify-between">
                        <span className="text-slate-400 text-[11px]">Admission Mode:</span>
                        <span className="font-bold text-brand-600 dark:text-brand-400 text-[11px]">{col.admissionMode}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-slate-400 text-[11px]">Fee Summary:</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300 text-[11px] truncate max-w-[170px]">{col.feeStructureSummary}</span>
                      </div>
                    </div>

                    {/* Courses Pills */}
                    <div className="mt-3">
                      <span className="text-[10px] font-bold text-slate-400 block mb-1">Top Programs:</span>
                      <div className="flex flex-wrap gap-1">
                        {col.availableCourses.slice(0, 3).map(c => (
                          <span key={c} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveCollegeModal(col)}
                      className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition text-center"
                    >
                      Campus Details & Cutoffs
                    </button>
                    <a
                      href={col.officialWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-600 hover:border-brand-400 transition"
                      title="Official Institute Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: SCHOLARSHIPS */}
      {activeTab === 'scholarships' && (
        <div className="space-y-4 animate-in fade-in">
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300">
            <strong>Government Scholarship Tip:</strong> The National Scholarship Portal (NSP) and state DBT portals accept applications annually between August and November. Keep your income certificate, caste certificate (if applicable), and Class 12 marks sheet verified.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCHOLARSHIPS_DATA.map((sch) => (
              <div
                key={sch.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {sch.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Deadline: {sch.deadline}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {sch.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Offered by: {sch.offeredBy}
                  </p>

                  <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs space-y-1">
                    <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                      <strong>Eligibility:</strong> {sch.eligibility}
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold text-xs pt-1">
                      Award: {sch.awardAmount}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <a
                    href={sch.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition"
                  >
                    <span>Apply on Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ADMISSION ALERTS */}
      {activeTab === 'alerts' && (
        <div className="space-y-4 animate-in fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ADMISSION_ALERTS.map((alert) => (
              <div
                key={alert.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      alert.status === 'Registration Open'
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                        : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                    }`}>
                      {alert.status}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Date: {alert.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {alert.examOrCollege}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {alert.announcement}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <a
                    href={alert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center gap-1.5 transition"
                  >
                    <span>Official Notification</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* COLLEGE DETAIL MODAL */}
      {activeCollegeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                  {activeCollegeModal.type} • Estd. {activeCollegeModal.established}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeCollegeModal.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {activeCollegeModal.location.city}, {activeCollegeModal.location.state}
                </p>
              </div>
              <button
                onClick={() => setActiveCollegeModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 py-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1">
                  Institute Overview
                </h4>
                <p>{activeCollegeModal.overview}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 space-y-2">
                <div>
                  <span className="text-slate-400 block text-[11px]">Admission Mode:</span>
                  <p className="font-bold text-brand-600 text-xs mt-0.5">{activeCollegeModal.admissionMode}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Eligibility Criteria:</span>
                  <p className="font-medium text-slate-700 dark:text-slate-200 text-xs mt-0.5">{activeCollegeModal.eligibilitySummary}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Tuition & Fee Structure:</span>
                  <p className="font-medium text-slate-700 dark:text-slate-200 text-xs mt-0.5">{activeCollegeModal.feeStructureSummary}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1">
                  Placement & Research Highlights
                </h4>
                <p>{activeCollegeModal.placementHighlights}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-1.5">
                  Campus Facilities
                </h4>
                <ul className="list-disc pl-4 space-y-1">
                  {activeCollegeModal.campusHighlights.map((fac, i) => (
                    <li key={i}>{fac}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => toggleSaveCollege(activeCollegeModal.id)}
                className="px-4 py-2 border rounded-xl text-xs font-semibold"
              >
                {isCollegeSaved(activeCollegeModal.id) ? 'Saved' : 'Save College'}
              </button>

              <a
                href={activeCollegeModal.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
