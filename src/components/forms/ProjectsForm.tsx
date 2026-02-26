'use client';

import { useState } from 'react';
import { useResume } from '@/context/resume-context';
import { Plus, X, AlertCircle } from 'lucide-react';
import { getBulletGuidance } from '@/lib/bullet-guidance';

export default function ProjectsForm() {
  const { resumeData, addProject, updateProject, removeProject } = useResume();
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    technologies: '',
    link: '',
  });

  const handleAdd = () => {
    if (newProject.name) {
      addProject(newProject);
      setNewProject({ name: '', description: '', technologies: '', link: '' });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Projects</h3>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {resumeData.projects.map((proj) => (
          <div key={proj.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={proj.name}
                  onChange={(e) => updateProject(proj.id, { name: e.target.value })}
                  placeholder="Project Name"
                  className="w-full bg-transparent font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <input
                  type="text"
                  value={proj.technologies}
                  onChange={(e) => updateProject(proj.id, { technologies: e.target.value })}
                  placeholder="Technologies used"
                  className="w-full bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                />
                <textarea
                  value={proj.description}
                  onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                  placeholder="Project description..."
                  rows={2}
                  className="w-full bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none resize-none"
                />
                {proj.description && getBulletGuidance(proj.description) && (
                  <div className="flex items-start gap-1.5 mt-1.5 text-xs text-amber-600">
                    <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{getBulletGuidance(proj.description)}</span>
                  </div>
                )}
                <input
                  type="text"
                  value={proj.link || ''}
                  onChange={(e) => updateProject(proj.id, { link: e.target.value })}
                  placeholder="Project link (optional)"
                  className="w-full bg-transparent text-sm text-slate-500 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <button
                onClick={() => removeProject(proj.id)}
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
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              placeholder="Project Name"
              className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
            <input
              type="text"
              value={newProject.technologies}
              onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
              placeholder="Technologies"
              className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Description..."
              rows={2}
              className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 resize-none"
            />
            {newProject.description && getBulletGuidance(newProject.description) && (
              <div className="flex items-start gap-1.5 text-xs text-amber-600">
                <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>{getBulletGuidance(newProject.description)}</span>
              </div>
            )}
            <input
              type="text"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              placeholder="Link (optional)"
              className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-900"
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
