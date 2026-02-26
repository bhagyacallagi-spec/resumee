'use client';

import { useResume } from '@/context/resume-context';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function SkillsForm() {
  const { resumeData, updateSkills } = useResume();
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const skill = inputValue.trim();
      if (skill && !resumeData.skills.includes(skill)) {
        updateSkills([...resumeData.skills, skill]);
        setInputValue('');
      }
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateSkills(resumeData.skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Skills</h3>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter"
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        />
        <p className="text-xs text-slate-400 mt-1">Press Enter or comma to add a skill</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
