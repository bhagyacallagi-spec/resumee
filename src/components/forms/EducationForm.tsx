'use client';

import { useState } from 'react';
import { useResume } from '@/context/resume-context';
import { Plus, X } from 'lucide-react';

export default function EducationForm() {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  const [isAdding, setIsAdding] = useState(false);
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
  });

  const handleAdd = () => {
    if (newEducation.school && newEducation.degree) {
      addEducation(newEducation);
      setNewEducation({ school: '', degree: '', field: '', startDate: '', endDate: '' });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Education</h3>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                  placeholder="School/University"
                  className="w-full bg-transparent font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                    placeholder="Degree"
                    className="flex-1 bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                    placeholder="Field of Study"
                    className="flex-1 bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                    placeholder="Start Year"
                    className="w-20 bg-transparent text-sm text-slate-500 placeholder:text-slate-400 focus:outline-none"
                  />
                  <span className="text-slate-400">-</span>
                  <input
                    type="text"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                    placeholder="End Year"
                    className="w-20 bg-transparent text-sm text-slate-500 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>
              <button
                onClick={() => removeEducation(edu.id)}
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
              value={newEducation.school}
              onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
              placeholder="School/University"
              className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={newEducation.degree}
                onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                placeholder="Degree"
                className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
              <input
                type="text"
                value={newEducation.field}
                onChange={(e) => setNewEducation({ ...newEducation, field: e.target.value })}
                placeholder="Field"
                className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newEducation.startDate}
                onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                placeholder="Start"
                className="w-20 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
              <input
                type="text"
                value={newEducation.endDate}
                onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                placeholder="End"
                className="w-20 px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
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
