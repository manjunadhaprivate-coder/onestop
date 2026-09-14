'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { CAREERS_DATA } from '@/data/careers';
import { COLLEGES_DATA } from '@/data/colleges';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Bookmark, 
  Edit3, 
  MapPin, 
  Sparkles, 
  Settings, 
  LogOut, 
  X, 
  Check, 
  Map, 
  Trash2, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProfilePage() {
  const router = useRouter();
  const { 
    profile, 
    setProfile, 
    savedCareers, 
    toggleSaveCareer, 
    savedColleges, 
    toggleSaveCollege,
    completedTasks,
    isAuthenticated,
    isAuthLoaded,
    logout
  } = useApp();

  const [activeTab, setActiveTab] = useState<'info' | 'savedCareers' | 'savedColleges'>('info');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...profile });

  useEffect(() => {
    if (isAuthLoaded && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthLoaded, isAuthenticated, router]);

  const savedCareersList = CAREERS_DATA.filter(c => savedCareers.includes(c.id));
  const savedCollegesList = COLLEGES_DATA.filter(c => savedColleges.includes(c.id));

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({
      ...editForm,
      updatedAt: new Date().toISOString()
    });
    setIsEditing(false);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Profile Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 rounded-3xl text-white shadow-xl shadow-brand-500/20 relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white text-brand-600 font-black text-2xl flex items-center justify-center shadow-md">
              {profile.fullName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold">{profile.fullName}</h1>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                  {profile.educationLevel}
                </span>
              </div>
              <p className="text-xs text-brand-100 mt-0.5">
                Stream: <strong>{profile.stream}</strong> • Score: <strong>{profile.academicScore}%</strong> • Age: <strong>{profile.age}</strong>
              </p>
              <p className="text-[11px] text-brand-200 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Preferred: {profile.preferredLocation.join(', ') || 'Anywhere in India'}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setEditForm({ ...profile });
                setIsEditing(true);
              }}
              className="px-4 py-2 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl text-xs font-bold border border-white/20 transition flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>

            <Link
              href="/settings"
              className="p-2 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl text-xs font-bold border border-white/20 transition"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                logout();
                router.push('/login');
              }}
              className="p-2 bg-rose-500/30 hover:bg-rose-500/50 backdrop-blur-md rounded-xl text-xs font-bold border border-rose-300/30 transition text-white"
              title="Log Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('info')}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold transition border-b-2 flex items-center gap-2 ${
            activeTab === 'info'
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <User className="w-4 h-4" />
          <span>My Information & Goals</span>
        </button>

        <button
          onClick={() => setActiveTab('savedCareers')}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold transition border-b-2 flex items-center gap-2 ${
            activeTab === 'savedCareers'
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Saved Careers ({savedCareers.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('savedColleges')}
          className={`pb-3 px-4 text-xs sm:text-sm font-bold transition border-b-2 flex items-center gap-2 ${
            activeTab === 'savedColleges'
              ? 'border-brand-600 text-brand-600 dark:text-brand-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Saved Colleges ({savedColleges.length})</span>
        </button>
      </div>

      {/* TAB 1: USER INFO */}
      {activeTab === 'info' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in">
          {/* Bio and Education */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-600" />
              <span>Academic Details</span>
            </h3>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <p><strong>Current Level:</strong> {profile.educationLevel}</p>
              <p><strong>Stream:</strong> {profile.stream}</p>
              <p><strong>Academic Score:</strong> {profile.academicScore}%</p>
              <p><strong>Target Exams:</strong> {profile.targetEntranceExams.join(', ') || 'Not specified'}</p>
              <p><strong>College Preference:</strong> {profile.govtCollegePreference}</p>
              <p><strong>Annual Budget:</strong> {profile.budgetPreference}</p>
            </div>
            {profile.bio && (
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-600 dark:text-slate-400 italic">
                "{profile.bio}"
              </div>
            )}
          </div>

          {/* Interests & Skills */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Interests & Verified Skills</span>
            </h3>
            
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">Academic Interests:</span>
              <div className="flex flex-wrap gap-1.5">
                {profile.academicInterests.map((item) => (
                  <span key={item} className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">Current Skills:</span>
              <div className="flex flex-wrap gap-1.5">
                {profile.skills.map((item) => (
                  <span key={item} className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">Favorite Subjects:</span>
              <div className="flex flex-wrap gap-1.5">
                {profile.favoriteSubjects.map((item) => (
                  <span key={item} className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SAVED CAREERS */}
      {activeTab === 'savedCareers' && (
        <div className="space-y-4 animate-in fade-in">
          {savedCareersList.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
              <Bookmark className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-xs text-slate-500">No saved careers yet. Explore careers and tap the bookmark icon to save them!</p>
              <Link href="/explore" className="mt-3 inline-block px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-semibold">
                Explore Careers
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedCareersList.map((c) => (
                <div key={c.id} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                        {c.category}
                      </span>
                      <button
                        onClick={() => toggleSaveCareer(c.id)}
                        className="text-slate-400 hover:text-red-500 p-1"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-2">{c.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{c.shortDescription}</p>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2">
                      Mid CTC: {c.salaryRange.mid}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <Link
                      href={`/roadmap?career=${c.id}`}
                      className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1"
                    >
                      <span>View Roadmap</span>
                      <Map className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: SAVED COLLEGES */}
      {activeTab === 'savedColleges' && (
        <div className="space-y-4 animate-in fade-in">
          {savedCollegesList.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
              <GraduationCap className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-xs text-slate-500">No saved colleges yet. Browse the college directory to bookmark institutes!</p>
              <Link href="/colleges" className="mt-3 inline-block px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-semibold">
                View Colleges
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedCollegesList.map((col) => (
                <div key={col.id} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                        {col.type}
                      </span>
                      <button
                        onClick={() => toggleSaveCollege(col.id)}
                        className="text-slate-400 hover:text-red-500 p-1"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-2">{col.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{col.location.city}, {col.location.state}</p>
                    <p className="text-xs font-semibold text-brand-600 mt-2">
                      Admission: {col.admissionMode}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <a
                      href={col.officialWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1"
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* EDIT PROFILE MODAL */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Edit Profile Information
              </h3>
              <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 py-4 text-xs">
              <div>
                <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={editForm.fullName}
                  onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">Level</label>
                  <select
                    value={editForm.educationLevel}
                    onChange={(e) => setEditForm({ ...editForm, educationLevel: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Class 10">Class 10</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">Academic Score %</label>
                  <input
                    type="number"
                    min={40}
                    max={100}
                    value={editForm.academicScore}
                    onChange={(e) => setEditForm({ ...editForm, academicScore: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">Stream</label>
                <select
                  value={editForm.stream}
                  onChange={(e) => setEditForm({ ...editForm, stream: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="Science (PCM)">Science (PCM)</option>
                  <option value="Science (PCB)">Science (PCB)</option>
                  <option value="Science (PCMB)">Science (PCMB)</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts & Humanities">Arts & Humanities</option>
                  <option value="Computer Science / IT">Computer Science / IT</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 font-bold uppercase tracking-wider mb-1">Aspirations Bio</label>
                <textarea
                  rows={2}
                  value={editForm.bio || ''}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-600 text-white rounded-xl font-bold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
