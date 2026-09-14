'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useApp, PRESET_PROFILES } from '@/context/AppContext';
import { 
  GraduationCap, 
  Compass, 
  Sparkles, 
  BookOpen, 
  Landmark, 
  Map, 
  FileText, 
  Bell, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown,
  CheckCircle2,
  Settings,
  LogOut,
  LogIn
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { 
    profile, 
    theme, 
    toggleTheme, 
    notificationCount, 
    clearNotifications,
    loadPresetProfile,
    isAuthenticated,
    logout
  } = useApp();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // If inside onboarding, login, or splash screen, keep navbar clean
  const isOnboarding = pathname === '/onboarding' || pathname === '/profile-setup' || pathname === '/login';

  const navLinks = [
    { href: '/', label: 'Dashboard', icon: Compass },
    { href: '/advisor', label: 'AI Advisor', icon: Sparkles, badge: 'Smart' },
    { href: '/explore', label: 'Careers', icon: Compass },
    { href: '/planner', label: 'Planner', icon: BookOpen },
    { href: '/colleges', label: 'Colleges & Aid', icon: Landmark },
    { href: '/roadmap', label: 'Roadmap', icon: Map },
    { href: '/resume', label: 'Resume Analyzer', icon: FileText },
  ];

  if (isOnboarding) {
    return (
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                One-Stop
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">SIH 1781 • Smart Education</p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                One-Stop
              </span>
              <span className="text-[10px] bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold px-1.5 py-0.5 rounded-full">
                Advisor
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Your Future. One Step Ahead.</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-0.5 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                setProfileDropdownOpen(false);
                clearNotifications();
              }}
              aria-label="Notifications"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition relative"
            >
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-pink-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
              )}
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Recent Alerts</h4>
                  <span className="text-[11px] text-brand-600 dark:text-brand-400 font-medium">SIH 2025 Updates</span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800/60 mt-1 max-h-64 overflow-y-auto">
                  <div className="py-2">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">CUET-UG 2025 Window Opened</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">National Testing Agency registration portal is now live.</p>
                  </div>
                  <div className="py-2">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">AICTE Pragati Scholarship</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">₹50,000/yr financial aid for eligible girl technical students.</p>
                  </div>
                  <div className="py-2">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">New Career Path: AI Engineer</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Check out the step-by-step roadmap tailored for your stream.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Preset Profile Switcher & User Avatar OR Sign In Button */}
          {!isAuthenticated ? (
            <Link
              href="/login"
              className="px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs flex items-center gap-1.5 transition shadow-sm"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => {
                  setProfileDropdownOpen(!profileDropdownOpen);
                  setNotificationsOpen(false);
                }}
                className="flex items-center gap-2 p-1.5 pl-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 bg-slate-50 dark:bg-slate-800/70 transition"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  {profile.fullName?.trim() ? profile.fullName.charAt(0) : 'U'}
                </div>
                <div className="hidden sm:block text-left pr-1">
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[90px]">
                    {profile.fullName?.trim() ? profile.fullName.split(' ')[0] : 'Student'}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                    {profile.educationLevel}
                  </p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl mb-2">
                    <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {profile.fullName || 'Student Account'}
                    </p>
                    {profile.email && (
                      <p className="text-[10px] text-slate-400 truncate mb-1">{profile.email}</p>
                    )}
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{profile.stream} • Score: {profile.academicScore}%</p>
                    <div className="mt-2 flex gap-1.5">
                      <Link
                        href="/profile"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="text-center w-full py-1 text-xs bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition"
                      >
                        View Profile
                      </Link>
                      <Link
                        href="/settings"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="p-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 transition"
                      >
                        <Settings className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Switch Demo Personas */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1.5">
                      Switch Demo Persona (Hackathon Test)
                    </p>
                    <div className="space-y-1">
                      {PRESET_PROFILES.map((preset, idx) => (
                        <button
                          key={preset.label}
                          onClick={() => {
                            loadPresetProfile(idx);
                            setProfileDropdownOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-950/50 flex items-center justify-between text-xs transition"
                        >
                          <div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200 block">{preset.label}</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{preset.description}</span>
                          </div>
                          {profile.fullName === preset.profile.fullName && (
                            <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Logout Button */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        logout();
                        router.push('/login');
                      }}
                      className="w-full text-left px-2.5 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 transition"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                  isActive
                    ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand-500" />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500 text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  logout();
                  router.push('/login');
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
              >
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition"
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In / Register</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
