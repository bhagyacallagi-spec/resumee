'use client';

import { useState } from 'react';
import { useResume } from '@/context/resume-context';
import { Plus, X } from 'lucide-react';

export default function ExperienceForm() {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  const [isAdding, setIsAdding] = useState(false);
  const [newExperience, setNewExperience] = useState({
    company: '',
    title: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleAdd = () => {
    if (newExperience.company && newExperience.title) {
      addExperience(newExperience);
      setNewExperience({ company: '', title: '', location: '', startDate: '', endDate: '', description: '' });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Experience</h3>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {resumeData.experience.map((exp) => (
          <div key={exp.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                  placeholder="Job Title"
                  className="w-full bg-transparent font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                    placeholder="Company"
                    className="flex-1 bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                    placeholder="Location"
                    className="flex-1 bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                    placeholder="Start"
                    className="w-20 bg-transparent text-sm text-slate-500 placeholder:text-slate-400 focus:outline-none"
                  />
                  <span className="text-slate-400">-</span>
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                    placeholder="End"
                    className="w-20 bg-transparent text-sm text-slate-500 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                  placeholder="Description of your role and achievements..."
                  rows={2}
                  className="w-full bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none resize-none"
                />
              </div>
              <button
                onClick={() => removeExperience(exp.id)}
                className="p-1 text-slate-400 hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {isAdding && (
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <input
              type="text"
              value={newExperience.title}
              onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
              placeholder="Job Title"
              className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={newExperience.company}
                onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                placeholder="Company"
                className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
              <input
                type="text"
                value={newExperience.location}
                onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                placeholder="Location"
                className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newExperience.startDate}
                onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
                placeholder="Start"
                className="w-20 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
              <input
                type="text"
                value={newExperience.endDate}
                onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
                placeholder="End"
                className="w-20 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
            <textarea
              value={newExperience.description}
              onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
              placeholder="Description..."
              rows={2}
              className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 resize-none"
            />
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleAdd}
                className="px-3 py-1 bg-slate-900 text-white text-sm rounded hover:bg-slate-800"
              >
                Add
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="px-3 py-1 text-slate-600 text-sm hover:text-slate-900"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
