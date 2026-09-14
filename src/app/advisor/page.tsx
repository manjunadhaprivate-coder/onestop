'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { CAREERS_DATA } from '@/data/careers';
import { COURSES_DATA } from '@/data/courses';
import { COLLEGES_DATA } from '@/data/colleges';
import { ChatMessage, Career } from '@/types';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  ShieldAlert, 
  RefreshCw, 
  Map, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Bookmark, 
  ExternalLink 
} from 'lucide-react';

const SAMPLE_PROMPTS = [
  'Which career is best for me?',
  'What should I study after Class 12?',
  'How can I become a Data Scientist?',
  'Which skills should I learn?',
  'What are the best government college options?',
  'What career options are available for my stream?'
];

export default function AdvisorPage() {
  const { profile, toggleSaveCareer, isCareerSaved } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const studentName = profile.fullName?.trim() ? profile.fullName.split(' ')[0] : 'there';
      setMessages([
        {
          id: 'welcome-msg',
          sender: 'assistant',
          text: `Hi ${studentName} 👋\nHow can I help you with your career today? I have analyzed your profile: you are currently in **${profile.educationLevel}** with **${profile.stream}** stream and an academic score of **${profile.academicScore}%**. Feel free to choose a question below or type your query!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedPrompts: SAMPLE_PROMPTS.slice(0, 4)
        }
      ]);
    }
  }, [profile]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Rule-based Intelligent Response Generator
  const generateAIResponse = (query: string): ChatMessage => {
    const q = query.toLowerCase();
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Career best for me
    if (q.includes('best for me') || q.includes('recommended') || q.includes('which career')) {
      const matchedCareers = CAREERS_DATA.filter(c => c.stream.includes(profile.stream)).slice(0, 3);
      return {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: `Based on your academic stream (**${profile.stream}**) and interest in **${profile.academicInterests.slice(0, 2).join(' & ') || 'Technology & Science'}**, here are top personalized career recommendations tailored for you:`,
        timestamp,
        careerRecommendations: matchedCareers.map(c => ({
          id: c.id,
          title: c.title,
          matchScore: 94,
          reason: `Aligns with your ${profile.stream} foundation, your target exams, and current market expansion.`
        })),
        suggestedPrompts: [
          'What are the best government college options?',
          'Which skills should I learn first?'
        ]
      };
    }

    // 2. What to study after Class 12
    if (q.includes('after class 12') || q.includes('after 12th') || q.includes('study after')) {
      let degreeSuggestions = '';
      if (profile.stream.includes('PCM')) {
        degreeSuggestions = '• **B.Tech (CSE / EEE)**: 4-Year engineering via JEE Main/Advanced\n• **B.Sc Data Science & AI**: 3-4 Year research degree\n• **B.Des (Product Design)**: via UCEED or NID DAT';
      } else if (profile.stream.includes('PCB')) {
        degreeSuggestions = '• **MBBS / BDS**: 5.5-Year clinical program via NEET-UG\n• **B.Sc (Hons) Agriculture**: ICAR approved 4-year degree\n• **B.Pharm / Biotechnology**: Healthcare industry track';
      } else if (profile.stream.includes('Commerce')) {
        degreeSuggestions = '• **B.Com (Honours)**: Top DU colleges (SRCC/Hindu) via CUET\n• **CA Foundation**: Professional articleship credential with ICAI\n• **BBA / IPM**: 5-Year integrated management at IIM Indore/Rohtak';
      } else {
        degreeSuggestions = '• **B.A. (Hons) in Political Science / Economics**: Top choice for Civil Services\n• **5-Year Integrated B.A. LL.B**: via CLAT for National Law Universities\n• **B.Des in Visual Design / Animation**: via NID or UCEED';
      }

      return {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: `Here are the premier undergraduate degree pathways recommended for **${profile.stream}** pass-outs in India:\n\n${degreeSuggestions}\n\n*Note: Admission to government universities is primarily through CUET, JEE, or NEET examinations.*`,
        timestamp,
        suggestedPrompts: [
          'What are the best government college options?',
          'How can I become a Data Scientist?'
        ]
      };
    }

    // 3. How to become Data Scientist
    if (q.includes('data scientist') || q.includes('machine learning') || q.includes('ai')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: `To become a **Data Scientist** in India:\n\n1. **Degree Path**: Pursue B.Tech CSE, B.Sc Statistics/Math, or specialized B.Sc Data Science.\n2. **Core Mathematics**: Focus on Linear Algebra, Multivariate Calculus, Probability, and Bayes Theorem.\n3. **Programming**: Master Python (Pandas, NumPy, Scikit-learn) and SQL.\n4. **Projects & Kaggle**: Build 3 exploratory data analysis (EDA) and predictive ML projects.\n5. **Campus Entrance**: Prepare for JEE, CUET, or IIT Madras BS Qualifier.`,
        timestamp,
        careerRecommendations: [
          {
            id: 'data-scientist',
            title: 'Data Scientist',
            matchScore: 96,
            reason: 'High recruitment surge across Indian fintech, e-commerce, and enterprise analytics.'
          }
        ],
        suggestedPrompts: ['Which skills should I learn?', 'Which career is best for me?']
      };
    }

    // 4. Which skills to learn
    if (q.includes('skill') || q.includes('skills')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: `For a student in **${profile.stream}**, these skills will provide the highest career ROI over the next 3-5 years:\n\n1. **Python Programming & Scripting**: Fundamental for automation, data science, and backend development.\n2. **SQL & Relational Databases**: Required by 80%+ of tech, business, and analytics roles.\n3. **Generative AI & Prompt Engineering**: Utilizing LLMs and APIs for workflow automation.\n4. **Analytical Writing & Communication**: Essential for competitive exams, consulting, and management.\n5. **Version Control (Git/GitHub)**: The universal standard for collaborative projects.`,
        timestamp,
        suggestedPrompts: [
          'How can I become a Data Scientist?',
          'What are the best government college options?'
        ]
      };
    }

    // 5. Government colleges
    if (q.includes('government college') || q.includes('govt college') || q.includes('college')) {
      const topColleges = COLLEGES_DATA.filter(c => c.type.includes('Government') || c.type.includes('Premier')).slice(0, 4);
      return {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: `Here are top government & premier institutions matching your profile preference (**${profile.govtCollegePreference}**):\n\n${topColleges.map(c => `• **${c.name}** (${c.location.city}, ${c.location.state}) - Admission via *${c.admissionMode}* (NIRF #${c.nirfRank || 'Top'})`).join('\n')}\n\n*Govt colleges offer substantially subsidized fees and strong merit scholarships like Central Sector NSP and AICTE Pragati.*`,
        timestamp,
        suggestedPrompts: [
          'What should I study after Class 12?',
          'Which career is best for me?'
        ]
      };
    }

    // 6. Career options for my stream
    if (q.includes('stream') || q.includes('options')) {
      const streamCareers = CAREERS_DATA.filter(c => c.stream.includes(profile.stream));
      return {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: `Students with a background in **${profile.stream}** can target lucrative paths across private and public sectors:\n\n${streamCareers.slice(0, 5).map(c => `• **${c.title}**: ${c.shortDescription} (Mid Salary: ${c.salaryRange.mid})`).join('\n\n')}`,
        timestamp,
        suggestedPrompts: [
          'Which career is best for me?',
          'What should I study after Class 12?'
        ]
      };
    }

    // Generic fallback with profile awareness
    return {
      id: `ai-${Date.now()}`,
      sender: 'assistant',
      text: `Thank you for asking! Based on your profile as a **${profile.educationLevel}** student in **${profile.stream}** with an academic score of **${profile.academicScore}%**, I recommend building hands-on projects and aligning your exam preparation with national entrance schedules (such as JEE, CUET, or NEET).\n\nCould you clarify if you are looking for specific degree comparisons, skill milestones, or government college options?`,
      timestamp,
      suggestedPrompts: [
        'Which career is best for me?',
        'What should I study after Class 12?',
        'What are the best government college options?'
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate natural AI thinking time
    setTimeout(() => {
      const botResponse = generateAIResponse(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: `Hi ${profile.fullName.split(' ')[0]} 👋\nChat history refreshed. How else can I guide your higher education or career plans today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPrompts: SAMPLE_PROMPTS.slice(0, 4)
      }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base text-slate-900 dark:text-white">
                One-Stop AI Career & Education Advisor
              </h1>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Context
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Personalized for: <span className="font-semibold text-slate-700 dark:text-slate-300">{profile.fullName}</span> ({profile.stream})
            </p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          title="Reset Conversation"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Advisory Notice Banner */}
      <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-[11px] text-amber-800 dark:text-amber-300">
        <ShieldAlert className="w-4 h-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
        <span>
          <strong>Advisory Notice:</strong> One-Stop AI recommendations are guidance based on your profile and public educational trends. They do not guarantee admission or job placement.
        </span>
      </div>

      {/* Chat Messages Area */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-sm min-h-[460px] max-h-[600px] overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                  isUser
                    ? 'bg-gradient-to-tr from-brand-600 to-purple-600 text-white shadow-sm'
                    : 'bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800'
                }`}
              >
                {isUser ? profile.fullName.charAt(0) : <Sparkles className="w-4 h-4" />}
              </div>

              {/* Message Content */}
              <div className={`max-w-[85%] sm:max-w-[75%] space-y-2`}>
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    isUser
                      ? 'bg-brand-600 text-white rounded-tr-none shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/50 dark:border-slate-700/50'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Embedded Career Recommendation Cards */}
                {msg.careerRecommendations && msg.careerRecommendations.length > 0 && (
                  <div className="space-y-2 pt-1">
                    {msg.careerRecommendations.map((rec) => {
                      const careerObj = CAREERS_DATA.find(c => c.id === rec.id);
                      const saved = isCareerSaved(rec.id);

                      return (
                        <div
                          key={rec.id}
                          className="p-3.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                                {rec.title}
                              </h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                {rec.matchScore}% Match
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                              {rec.reason}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => toggleSaveCareer(rec.id)}
                              className={`p-1.5 rounded-lg border text-xs transition ${
                                saved
                                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-600'
                                  : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                              }`}
                              title={saved ? 'Saved' : 'Save Career'}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
                            </button>
                            <Link
                              href={`/roadmap?career=${rec.id}`}
                              className="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs flex items-center gap-1 shadow-sm transition"
                            >
                              <span>Roadmap</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Suggested Next Prompts */}
                {msg.suggestedPrompts && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.suggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleSendMessage(prompt)}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 hover:bg-brand-50 dark:bg-slate-800 dark:hover:bg-brand-950/60 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200 dark:border-slate-700 transition"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-slate-400 block px-1">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 flex items-center justify-center text-xs">
              <Sparkles className="w-4 h-4 animate-spin" />
            </div>
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 flex-shrink-0">
          <Sparkles className="w-3 h-3 text-brand-500" /> Prompts:
        </span>
        {SAMPLE_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSendMessage(prompt)}
            className="text-[11px] font-medium px-3 py-1 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-brand-600 hover:border-brand-300 dark:hover:border-brand-700 border border-slate-200 dark:border-slate-800 whitespace-nowrap transition flex-shrink-0"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          placeholder="Ask anything about courses, cutoffs, exams, or career choices..."
          className="w-full pl-4 pr-24 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm shadow-sm focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!inputQuery.trim() || isTyping}
          className="absolute right-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white text-xs font-bold disabled:opacity-50 transition shadow-sm flex items-center gap-1.5"
        >
          <span>Ask</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
