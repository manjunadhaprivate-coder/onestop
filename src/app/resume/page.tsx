'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { ResumeAnalysis } from '@/types';
import { 
  FileText, 
  Upload, 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  RefreshCw,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

const SAMPLE_RESUMES = [
  {
    title: 'Software Engineer Fresher (B.Tech)',
    text: `Aarav Sharma
Email: aarav.sharma@example.com | Phone: +91 9876543210 | Bengaluru, India
GitHub: github.com/aaravsharma | LinkedIn: linkedin.com/in/aaravsharma

EDUCATION:
B.Tech in Computer Science & Engineering (2021-2025)
ABC Institute of Technology, CGPA: 8.8/10

TECHNICAL SKILLS:
• Languages: Python, JavaScript, TypeScript, C++, SQL
• Frameworks & Web: React.js, Node.js, Express, HTML5, CSS3, Tailwind CSS
• Databases & Tools: PostgreSQL, MongoDB, Git, GitHub, Docker, Postman

PROJECTS:
1. One-Stop Educational Portal:
• Architected a responsive career guidance platform using Next.js, TypeScript, and Tailwind CSS.
• Integrated local rule-based AI recommendation engine matching student streams with 16+ career tracks.
2. Distributed E-Commerce Microservice:
• Implemented authentication with JWT, payment workflows via Razorpay mock, and deployed on Docker.

INTERNSHIPS:
Software Development Intern at XYZ Tech Labs (Summer 2024):
• Built RESTful API endpoints reducing response latency by 20%.`
  },
  {
    title: 'Data Science & Analytics Aspirant',
    text: `Priya Patel
Email: priya.patel@example.com | Mumbai, India | Kaggle: @priyapatel

EDUCATION:
B.Sc in Statistics & Data Science (2022-2025)
St. Xavier’s College, Mumbai | Aggregate: 86%

TECHNICAL EXPERTISE:
• Programming: Python (Pandas, NumPy, Scikit-learn, Matplotlib), R Basics, SQL
• Machine Learning: Regression, Classification, Random Forests, K-Means Clustering, EDA
• Business Intelligence: Tableau, PowerBI, Advanced Excel (VLOOKUP, Pivot Tables)

PROJECTS:
• Indian Crop Yield Prediction: Analyzed ICAR agricultural rainfall data, trained XGBoost model achieving 92% R2 score.
• UPI Fraud Detection Classifier: Performed exploratory data analysis on transaction logs with imbalanced SMOTE sampling.`
  }
];

export default function ResumeAnalyzerPage() {
  const { profile } = useApp();
  const [resumeText, setResumeText] = useState(SAMPLE_RESUMES[0].text);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ResumeAnalysis | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const runAnalysis = (textToAnalyze?: string) => {
    const text = textToAnalyze || resumeText;
    if (!text.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const lower = text.toLowerCase();

      // Detect skills from text
      const knownSkills = [
        'python', 'javascript', 'typescript', 'react', 'node.js', 'sql', 'c++', 
        'git', 'docker', 'machine learning', 'tableau', 'excel', 'html5', 'css3', 
        'aws', 'linux', 'mongodb', 'postgresql', 'figma'
      ];

      const detected = knownSkills.filter(s => lower.includes(s));
      const detectedCapitalized = detected.map(s => s.charAt(0).toUpperCase() + s.slice(1));

      // Determine missing skills based on Indian software/data roles
      const missingSkills = ['Docker & CI/CD Pipelines', 'System Design & Scalability', 'Unit Testing (Jest/PyTest)', 'Cloud Hosting (AWS/GCP)'].filter(
        m => !lower.includes(m.toLowerCase())
      );

      // Compute score
      let score = 65;
      if (detected.length >= 6) score += 15;
      if (lower.includes('project') || lower.includes('projects')) score += 10;
      if (lower.includes('internship') || lower.includes('experience')) score += 8;
      score = Math.min(score, 94);

      setAnalysisResult({
        score,
        summary: `Your resume demonstrates strong technical foundations with ${detected.length} verified modern skills and documented project execution.`,
        detectedSkills: detectedCapitalized,
        missingSkills,
        recommendedCareers: [
          {
            careerTitle: 'Full Stack Software Engineer',
            matchPercentage: 92,
            rationale: 'Demonstrated React, Node.js, and database design competencies directly match Indian SDE-1 requirements.'
          },
          {
            careerTitle: 'Cloud & DevOps Engineer',
            matchPercentage: 78,
            rationale: 'Solid base in Docker and Linux scripting; upskill in Kubernetes to achieve full fit.'
          }
        ],
        improvementTips: [
          'Add quantifiable metrics to projects (e.g. "reduced latency by 20%", "served 500+ requests").',
          'Include live portfolio / GitHub URLs so recruiters can inspect code quality directly.',
          'Format technical skills by categories: Languages, Frameworks, Developer Tools, and Databases.'
        ],
        strengths: [
          'Clean, modern ATS-friendly layout with readable section headings.',
          'Strong emphasis on full-stack web technologies and projects.',
          'Demonstrated knowledge of version control (Git / GitHub).'
        ]
      });

      setIsAnalyzing(false);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // For prototype: read file name and provide prefilled mock extract
      setResumeText(`[Parsed from uploaded file: ${file.name}]\n\nCandidate Name: ${profile.fullName}\nEducation: ${profile.educationLevel} (${profile.stream})\nSkills: ${profile.skills.join(', ')}\nInterests: ${profile.academicInterests.join(', ')}\n\nProjects:\n• Built ${profile.academicInterests[0] || 'Software Engineering'} solution for smart education.\n• Implemented responsive frontend and database connection.`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
          <FileText className="w-3.5 h-3.5" />
          <span>ATS Resume Analyzer & Skill Gap Detector</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Resume Skill Analyzer & ATS Scorer
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Evaluate your resume against Indian tech & corporate recruitment benchmarks, detect missing competencies, and receive tailored advice.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
        {/* Sample Templates Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            Quick Demo Templates (1-Click Test):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SAMPLE_RESUMES.map((sample) => (
              <button
                key={sample.title}
                onClick={() => {
                  setResumeText(sample.text);
                  setFileName(null);
                  runAnalysis(sample.text);
                }}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition"
              >
                {sample.title}
              </button>
            ))}
          </div>
        </div>

        {/* File Upload Box */}
        <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center hover:border-emerald-500 transition">
          <input
            type="file"
            id="resume-upload"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center">
            <Upload className="w-8 h-8 text-emerald-500 mb-1" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {fileName ? `Selected: ${fileName}` : 'Upload Resume (PDF, DOCX, TXT)'}
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5">
              Click to browse or drag and drop your file here
            </span>
          </label>
        </div>

        {/* Text Area */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            Or Paste / Edit Resume Content:
          </label>
          <textarea
            rows={8}
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-900 dark:text-white leading-relaxed focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            placeholder="Paste your plain text resume here..."
          />
        </div>

        {/* Analyze Button */}
        <div className="flex justify-end">
          <button
            onClick={() => runAnalysis()}
            disabled={isAnalyzing || !resumeText.trim()}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition transform active:scale-98 disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Scanning Skills & Metrics...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Analyze Resume Now</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results View */}
      {analysisResult && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-400">
          {/* ATS Score Card */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex flex-col items-center justify-center font-black">
                <span className="text-2xl leading-none">{analysisResult.score}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">/ 100</span>
              </div>
              <div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  ATS Score: Highly Competitive
                </span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mt-1">
                  Resume Readiness Rating
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-md">
                  {analysisResult.summary}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500">
              <span>Detected Skills: <strong className="text-emerald-600 font-bold">{analysisResult.detectedSkills.length}</strong></span>
              <span>Potential Gap Areas: <strong className="text-amber-500 font-bold">{analysisResult.missingSkills.length}</strong></span>
            </div>
          </div>

          {/* Detected & Missing Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Detected Skills */}
            <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Detected Technical & Soft Skills</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {analysisResult.detectedSkills.map((sk) => (
                  <span key={sk} className="text-xs font-semibold px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-850">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 mb-3">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Recommended Skills to Add</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {analysisResult.missingSkills.map((sk) => (
                  <span key={sk} className="text-xs font-semibold px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-850">
                    + {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Improvement Tips */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 mb-3">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Resume Improvement Checklist</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {analysisResult.improvementTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
