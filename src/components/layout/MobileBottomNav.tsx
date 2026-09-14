'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Sparkles, Map, User } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  // Hide on onboarding, profile-setup, and login pages
  if (pathname === '/onboarding' || pathname === '/profile-setup' || pathname === '/login') {
    return null;
  }

  const items = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/explore', label: 'Explore', icon: Compass },
    { href: '/advisor', label: 'AI Advisor', icon: Sparkles, isHighlight: true },
    { href: '/roadmap', label: 'Roadmap', icon: Map },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isHighlight) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center -mt-4 relative group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition transform group-active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-tr from-brand-600 via-indigo-600 to-purple-600 ring-4 ring-brand-100 dark:ring-brand-950'
                    : 'bg-gradient-to-tr from-brand-500 to-purple-600'
                }`}>
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <span className={`text-[10px] mt-1 font-semibold ${
                  isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-400'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-1 px-3 rounded-xl transition ${
                isActive
                  ? 'text-brand-600 dark:text-brand-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
