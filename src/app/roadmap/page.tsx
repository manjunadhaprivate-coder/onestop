'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { ROADMAPS_DATA } from '@/data/roadmaps';
import { CAREERS_DATA } from '@/data/careers';
import { RoadmapTask, RoadmapStage } from '@/types';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  Lock, 
  Clock, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Trophy, 
  ChevronRight,
  PlayCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

function RoadmapContent() {
  const searchParams = useSearchParams();
  const careerParam = searchParams.get('career');
  const { completedTasks, toggleTaskCompleted, isTaskCompleted } = useApp();

  const availableCareerIds = Object.keys(ROADMAPS_DATA);
  const defaultCareerId = (careerParam && availableCareerIds.includes(careerParam)) 
    ? careerParam 
    : 'software-engineer';

  const [selectedCareerId, setSelectedCareerId] = useState<string>(defaultCareerId);

  useEffect(() => {
    if (careerParam && availableCareerIds.includes(careerParam)) {
      setSelectedCareerId(careerParam);
    }
  }, [careerParam]);

  const currentRoadmap = ROADMAPS_DATA[selectedCareerId] || ROADMAPS_DATA['software-engineer'];

  // Calculate total tasks and progress
  const allTasks: RoadmapTask[] = currentRoadmap.stages.flatMap(s => s.tasks);
  const completedCount = allTasks.filter(t => isTaskCompleted(t.id)).length;
  const progressPercent = allTasks.length > 0 ? Math.round((completedCount / allTasks.length) * 100) : 0;

  const handleTaskToggle = (taskId: string) => {
    const wasCompleted = isTaskCompleted(taskId);
    toggleTaskCompleted(taskId);
    if (!wasCompleted) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-xs font-semibold text-brand-700 dark:text-brand-300 mb-2">
          <Map className="w-3.5 h-3.5" />
          <span>Interactive Skill Roadmap & Milestones</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Personalized Career Roadmap
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Master the exact technologies, projects, and fundamentals required by top employers in India.
        </p>
      </div>

      {/* Career Selector & Progress Banner */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Select Career Pathway
            </label>
            <select
              value={selectedCareerId}
              onChange={(e) => setSelectedCareerId(e.target.value)}
              className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold"
            >
              {availableCareerIds.map((id) => (
                <option key={id} value={id}>
                  {ROADMAPS_DATA[id].careerTitle}
                </option>
              ))}
            </select>
          </div>

          {/* Progress stats */}
          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-sm">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Path Completion</span>
              <p className="font-extrabold text-slate-900 dark:text-white text-sm">
                {progressPercent}% <span className="text-xs text-slate-400 font-normal">({completedCount}/{allTasks.length} milestones)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stages Timeline */}
      <div className="space-y-6">
        {currentRoadmap.stages.map((stage) => {
          const stageTasksCompleted = stage.tasks.filter(t => isTaskCompleted(t.id)).length;
          const isStageDone = stageTasksCompleted === stage.tasks.length;

          return (
            <div
              key={stage.stageNumber}
              className={`p-6 rounded-3xl border transition ${
                isStageDone
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Stage Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                    isStageDone
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400'
                  }`}>
                    {isStageDone ? <CheckCircle2 className="w-5 h-5" /> : stage.stageNumber}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Stage {stage.stageNumber}: {stage.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Duration: {stage.duration}</span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="mt-4 space-y-3">
                {stage.tasks.map((task) => {
                  const completed = isTaskCompleted(task.id);

                  return (
                    <div
                      key={task.id}
                      className={`p-4 rounded-2xl border transition ${
                        completed
                          ? 'bg-white/80 dark:bg-slate-800/80 border-emerald-200 dark:border-emerald-800/50'
                          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/70 dark:border-slate-700/60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => handleTaskToggle(task.id)}
                            className="mt-0.5 text-slate-400 hover:text-emerald-600 transition"
                            title={completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                          >
                            {completed ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </button>

                          <div>
                            <h4 className={`font-bold text-xs sm:text-sm ${
                              completed 
                                ? 'line-through text-slate-400 dark:text-slate-500' 
                                : 'text-slate-900 dark:text-white'
                            }`}>
                              {task.title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                              {task.description}
                            </p>

                            {/* Skills Tagged */}
                            <div className="flex flex-wrap gap-1 mt-2">
                              {task.skillsGained.map((sk) => (
                                <span key={sk} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600">
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <span className="text-[11px] text-slate-400 font-semibold whitespace-nowrap">
                          {task.estimatedHours}
                        </span>
                      </div>

                      {/* Curated Resources */}
                      {task.resources && task.resources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                            <BookOpen className="w-3 h-3" /> Free Resources:
                          </span>
                          {task.resources.map((res) => (
                            <a
                              key={res.name}
                              href={res.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 hover:text-brand-700 hover:underline border border-slate-200 dark:border-slate-600 flex items-center gap-1 shadow-2xs"
                            >
                              <span>{res.name} ({res.type})</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-xs text-slate-400">Loading Learning Roadmap...</div>}>
      <RoadmapContent />
    </Suspense>
  );
}