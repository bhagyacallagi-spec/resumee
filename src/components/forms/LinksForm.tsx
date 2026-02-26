'use client';

import { useResume } from '@/context/resume-context';

export default function LinksForm() {
  const { resumeData, updateLinks } = useResume();
  const { links } = resumeData;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Links</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-slate-600 mb-1">GitHub</label>
          <input
            type="text"
            value={links.github}
            onChange={(e) => updateLinks({ github: e.target.value })}
            placeholder="github.com/username"
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">LinkedIn</label>
          <input
            type="text"
            value={links.linkedin}
            onChange={(e) => updateLinks({ linkedin: e.target.value })}
            placeholder="linkedin.com/in/username"
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Website/Portfolio</label>
          <input
            type="text"
            value={links.website}
            onChange={(e) => updateLinks({ website: e.target.value })}
            placeholder="yourwebsite.com"
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
