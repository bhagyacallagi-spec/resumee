'use client';

import { useResume } from '@/context/resume-context';
import { AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';

export default function ATSScore() {
  const { atsScore, suggestions } = useResume();
  const { score, maxScore } = atsScore;

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-slate-600';
  };

  const getScoreBg = () => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-slate-500';
  };

  const getScoreLabel = () => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Work';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-slate-900">ATS Readiness Score</h3>
          <p className="text-xs text-slate-500 mt-0.5">How well your resume performs with ATS</p>
        </div>
        <div className={`text-right ${getScoreColor()}`}>
          <span className="text-3xl font-bold">{score}</span>
          <span className="text-sm text-slate-400">/{maxScore}</span>
        </div>
      </div>

      {/* Score Meter */}
      <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
        <div
          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ease-out ${getScoreBg()}`}
          style={{ width: `${score}%` }}
        />
      </div>

      {/* Score Label */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-sm font-medium ${getScoreColor()}`}>
          {getScoreLabel()}
        </span>
        <span className="text-xs text-slate-400">
          {score >= 80 ? 'Ready to apply' : 'Keep improving'}
        </span>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-700">Suggestions</span>
          </div>
          <ul className="space-y-2">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className={`flex items-start gap-2 text-sm ${
                  suggestion.priority === 'high'
                    ? 'text-amber-700'
                    : suggestion.priority === 'medium'
                    ? 'text-slate-600'
                    : 'text-slate-500'
                }`}
              >
                {suggestion.priority === 'high' ? (
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" />
                )}
                <span>{suggestion.message}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {suggestions.length === 0 && score >= 80 && (
        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Your resume looks great!</span>
          </div>
        </div>
      )}
    </div>
  );
}
