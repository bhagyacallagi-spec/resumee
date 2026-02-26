'use client';

import { useResume } from '@/context/resume-context';

export default function SummaryForm() {
  const { resumeData, updateSummary } = useResume();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Summary</h3>
      <div>
        <textarea
          value={resumeData.summary}
          onChange={(e) => updateSummary(e.target.value)}
          placeholder="Brief overview of your professional background and key strengths..."
          rows={4}
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none"
        />
      </div>
    </div>
  );
}
