import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldAlert, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 mt-16 pb-20 md:pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                One-Stop
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              "Your Future. One Step Ahead." An intelligent career and education advisor empowering Indian students with personalized course roadmaps and college guidance.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-[11px] font-semibold text-brand-700 dark:text-brand-300">
              <span>SIH 2025</span>
              <span>•</span>
              <span>ID: SIH SIH1781</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Explore Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/advisor" className="hover:text-brand-600 dark:hover:text-brand-400 transition">
                  AI Career Advisor Chat
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-brand-600 dark:hover:text-brand-400 transition">
                  Career Explorer & Streams
                </Link>
              </li>
              <li>
                <Link href="/planner" className="hover:text-brand-600 dark:hover:text-brand-400 transition">
                  Education Planner & Comparison
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-brand-600 dark:hover:text-brand-400 transition">
                  Indian College Directory
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-brand-600 dark:hover:text-brand-400 transition">
                  Personalized Roadmap Tracker
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-brand-600 dark:hover:text-brand-400 transition">
                  ATS Resume Analyzer
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Indian Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              National Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition">
                  National Scholarship Portal (NSP) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://nta.ac.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition">
                  National Testing Agency (NTA) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.aicte-india.org" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition">
                  AICTE Schemes & Portals <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://ugc.ac.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition">
                  University Grants Commission <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer & Hackathon Note */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Advisory Disclaimer
            </h4>
            <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <span>
                One-Stop provides automated career recommendations for educational guidance only. Outcomes depend on student effort and official counseling criteria.
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Developed for Smart India Hackathon (SIH 2025) • Theme: Smart Education
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© 2025-2026 One-Stop Advisor. Built with Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <Link href="/onboarding" className="hover:underline">Replay Onboarding</Link>
            <Link href="/profile-setup" className="hover:underline">Setup Profile</Link>
            <Link href="/settings" className="hover:underline">Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
