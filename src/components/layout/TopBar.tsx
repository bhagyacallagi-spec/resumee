'use client';

import { useProject } from '@/lib/project-context';

interface TopBarProps {
  stepNumber: number;
  stepTitle: string;
}

export default function TopBar({ stepNumber, stepTitle }: TopBarProps) {
  const { state } = useProject();

  const getStatusBadge = () => {
    const step = state.steps.find((s) => s.stepNumber === stepNumber);
    if (step?.isCompleted) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          Completed
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
        In Progress
      </span>
    );
  };

  return (
    <header className="bg-slate-900 text-white h-16 flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">
          AI
        </div>
        <h1 className="text-lg font-semibold">AI Resume Builder</h1>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-400">Project 3</span>
        <span className="text-slate-600">—</span>
        <span className="text-white font-medium">Step {stepNumber} of 8</span>
        <span className="text-slate-600 mx-2">|</span>
        <span className="text-slate-300">{stepTitle}</span>
      </div>
      
      <div className="flex items-center gap-4">
        {getStatusBadge()}
      </div>
    </header>
  );
}
