'use client';

import { useResume, TemplateType } from '@/context/resume-context';

const templates: { id: TemplateType; label: string; description: string }[] = [
  { id: 'classic', label: 'Classic', description: 'Traditional, professional layout' },
  { id: 'modern', label: 'Modern', description: 'Clean, contemporary design' },
  { id: 'minimal', label: 'Minimal', description: 'Simple, elegant styling' },
];

export default function TemplateSelector() {
  const { template, setTemplate } = useResume();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <h3 className="text-sm font-medium text-slate-900 mb-3">Template</h3>
      <div className="flex gap-2">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setTemplate(t.id)}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg border transition-all ${
              template === t.id
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
            title={t.description}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
