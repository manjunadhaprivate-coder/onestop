'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp, PRESET_PROFILES } from '@/context/AppContext';
import { 
  Settings, 
  Moon, 
  Sun, 
  Bell, 
  ShieldCheck, 
  HelpCircle, 
  Info, 
  LogOut, 
  RotateCcw, 
  Check, 
  ChevronRight, 
  Sparkles,
  ExternalLink,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const { theme, toggleTheme, loadPresetProfile, setOnboardingCompleted, logout } = useApp();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [examAlertsEnabled, setExamAlertsEnabled] = useState(true);
  const [scholarshipAlertsEnabled, setScholarshipAlertsEnabled] = useState(true);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [resetMessage, setResetMessage] = useState(false);

  // Admin Notification State
  const [testEmailLoading, setTestEmailLoading] = useState(false);
  const [testEmailResult, setTestEmailResult] = useState<{
    status: string;
    message: string;
    isDuplicate?: boolean;
    messageId?: string;
  } | null>(null);

  const handleSendTestAdminNotification = async () => {
    setTestEmailLoading(true);
    setTestEmailResult(null);
    try {
      const res = await fetch('/api/notifications/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: 'Siddharth Patel (Test Student)',
          email: 'siddharth.patel@demo.onestop.edu',
          loginMethod: 'Admin Diagnostics / SIH Test',
          onboardingCompleted: true,
          educationLevel: 'Class 12',
          stream: 'PCM',
          academicScore: 94.5
        })
      });
      const data = await res.json();
      setTestEmailResult(data);
    } catch (err: any) {
      setTestEmailResult({
        status: 'error',
        message: err?.message || 'Failed to dispatch test notification'
      });
    } finally {
      setTestEmailLoading(false);
    }
  };

  const handleResetData = () => {
    localStorage.removeItem('onestep_saved_careers');
    localStorage.removeItem('onestep_saved_colleges');
    localStorage.removeItem('onestep_completed_tasks');
    loadPresetProfile(0);
    setResetMessage(true);
    setTimeout(() => setResetMessage(false), 3000);
  };

  const faqs = [
    {
      q: 'How does the AI Advisor make recommendations?',
      a: 'One-Stop uses a multi-factor matching engine that correlates your academic stream (PCM/PCB/Commerce/Arts), recent board/college marks, declared skills, and budget preferences with national employment trends.'
    },
    {
      q: 'Are the college fees and admission cutoffs official?',
      a: 'All tuition structures and entrance exams are benchmarked against official government NIRF 2024 records, JoSAA counseling, and MCC portals. They are presented as guidance estimates.'
    },
    {
      q: 'Can I switch my persona for testing during the hackathon?',
      a: 'Yes! You can use the top-right profile avatar or the settings persona selector to immediately simulate Class 12 PCM, PCB, Commerce, or Undergraduate students.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
          <Settings className="w-3.5 h-3.5" />
          <span>System & Preferences</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Settings & Application Options
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Customize your experience, toggle appearance, and manage data preferences.
        </p>
      </div>

      <div className="space-y-4">
        {/* Appearance Card */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            {theme === 'dark' ? <Moon className="w-4 h-4 text-brand-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
            <span>Appearance & Theme</span>
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                Dark Mode
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Switch between high-contrast dark theme and crisp daylight theme.
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition duration-300 ${
                theme === 'dark' ? 'bg-brand-600 justify-end' : 'bg-slate-200 justify-start'
              }`}
            >
              <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-brand-600" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
              </div>
            </button>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Bell className="w-4 h-4 text-brand-600" />
            <span>Notification Preferences</span>
          </h3>

          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            <div className="py-3 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">National Exam Cutoffs & Registration</p>
                <p className="text-slate-400 mt-0.5">Alerts when JEE, NEET, or CUET application forms go live.</p>
              </div>
              <input
                type="checkbox"
                checked={examAlertsEnabled}
                onChange={() => setExamAlertsEnabled(!examAlertsEnabled)}
                className="w-4 h-4 accent-brand-600 rounded cursor-pointer"
              />
            </div>

            <div className="py-3 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">Scholarship Deadline Reminders</p>
                <p className="text-slate-400 mt-0.5">Notifications for NSP, AICTE Pragati, and Post-Matric schemes.</p>
              </div>
              <input
                type="checkbox"
                checked={scholarshipAlertsEnabled}
                onChange={() => setScholarshipAlertsEnabled(!scholarshipAlertsEnabled)}
                className="w-4 h-4 accent-brand-600 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Admin Email Notification System & Privacy Card */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Admin Email Notification System</span>
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 inline-flex items-center gap-1 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
              Operational • SIH 25094
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            One-Stop automatically dispatches an administrative email alert whenever a student registers or completes onboarding. This provides real-time visibility into new platform adoption without exposing any sensitive credentials.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Target Admin Recipient</span>
              <p className="font-semibold text-slate-900 dark:text-white font-mono text-xs">admin@onestopadvisor.com</p>
              <p className="text-[11px] text-slate-400">Configured via <code className="text-brand-600 dark:text-brand-400">ADMIN_EMAIL</code> env</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Security & Duplication Policy</span>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Zero Sensitive Data • Deduplication Active
              </p>
              <p className="text-[11px] text-slate-400">Passwords and tokens are omitted by design</p>
            </div>
          </div>

          {/* Privacy Notice on Email Usage */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-blue-900 dark:text-blue-300">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Privacy Notice: Email Usage & Admin Notifications</span>
            </div>
            <p className="text-blue-800/90 dark:text-blue-200/80 leading-relaxed text-[11px]">
              <strong>1. Data Collected:</strong> User’s full name, email address, authentication method, registration timestamp, and onboarding progress stage.<br />
              <strong>2. Security Exclusions:</strong> Passwords, access tokens, refresh tokens, and payment secrets are strictly excluded from emails and server logs.<br />
              <strong>3. Purpose:</strong> Legitimate operational administration, hackathon auditing, and platform safety under Smart India Hackathon guidelines.<br />
              <strong>4. Duplicate Prevention:</strong> High-frequency duplicate triggers for the same user within the active session are automatically suppressed.
            </p>
          </div>

          {/* Diagnostic Test Button */}
          <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Test Notification Dispatch</p>
              <p className="text-[11px] text-slate-500">Trigger a simulated or live SMTP registration email alert to verify backend connectivity.</p>
            </div>

            <button
              onClick={handleSendTestAdminNotification}
              disabled={testEmailLoading}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition disabled:opacity-50 shadow-sm shrink-0"
            >
              {testEmailLoading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending Alert...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Test Admin Alert</span>
                </>
              )}
            </button>
          </div>

          {/* Test Email Result Feedback */}
          {testEmailResult && (
            <div className={`p-3 rounded-xl text-xs border ${
              testEmailResult.status === 'success' 
                ? testEmailResult.isDuplicate 
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200' 
                  : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200' 
                : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200'
            }`}>
              <div className="flex items-center gap-1.5 font-bold mb-1">
                {testEmailResult.status === 'success' ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                <span>
                  {testEmailResult.status === 'success' 
                    ? testEmailResult.isDuplicate ? 'Duplicate Notice Suppressed' : 'Admin Notification Sent' 
                    : 'Dispatch Error'}
                </span>
              </div>
              <p className="leading-relaxed">{testEmailResult.message}</p>
              {testEmailResult.messageId && (
                <p className="mt-1 text-[11px] font-mono opacity-80">Message ID: {testEmailResult.messageId}</p>
              )}
            </div>
          )}
        </div>

        {/* Hackathon Preset Persona Switcher */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Quick Persona Switcher (Hackathon Evaluator)</span>
          </h3>
          <p className="text-xs text-slate-500">
            Click any profile below to immediately reconfigure the application’s recommendations, streams, and marks:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {PRESET_PROFILES.map((preset, idx) => (
              <button
                key={preset.label}
                onClick={() => {
                  loadPresetProfile(idx);
                  alert(`Switched to demo persona: ${preset.label}`);
                }}
                className="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 bg-slate-50 dark:bg-slate-800/60 transition"
              >
                <p className="font-bold text-xs text-slate-900 dark:text-white">{preset.label}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{preset.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Help & Support (FAQ) */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full px-4 py-3 text-left font-bold text-xs text-slate-800 dark:text-slate-200 flex items-center justify-between bg-slate-50 dark:bg-slate-800/40"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 transition ${faqOpen === i ? 'rotate-90' : ''}`} />
                </button>
                {faqOpen === i && (
                  <div className="px-4 py-3 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About One-Stop & Hackathon Info */}
        <div className="p-6 bg-brand-50/60 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 rounded-3xl space-y-2 text-xs">
          <div className="flex items-center gap-2 text-brand-700 dark:text-brand-300 font-bold">
            <Info className="w-4 h-4" />
            <span>Smart India Hackathon 2025 Information</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Problem Statement ID:</strong> SIH 25094 <br />
            <strong>Problem Title:</strong> One-Stop Personalized Career & Education Advisor <br />
            <strong>Theme:</strong> Smart Education <br />
            <strong>Application:</strong> One-Stop ("Your Future. One Step Ahead.")
          </p>
        </div>

        {/* Account Session & Reset Data */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-bold text-xs text-slate-900 dark:text-white">Account & Session Management</h4>
            <p className="text-xs text-slate-500 mt-0.5">Log out of your student account or reset cached bookmarks.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {resetMessage && (
              <span className="text-xs font-semibold text-emerald-600">Storage reset!</span>
            )}
            <button
              onClick={handleResetData}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
            <button
              onClick={() => {
                logout();
                router.push('/login');
              }}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
