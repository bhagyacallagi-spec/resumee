'use client';

import { useResume } from '@/context/resume-context';

export default function ResumePreview() {
  const { resumeData } = useResume();
  const { personalInfo, summary, education, experience, projects, skills, links } = resumeData;

  const hasContent = 
    personalInfo.name || 
    personalInfo.email || 
    summary || 
    education.length > 0 || 
    experience.length > 0 ||
    projects.length > 0 ||
    skills.length > 0;

  if (!hasContent) {
    return (
      <div className="h-full flex items-center justify-center text-slate-400">
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-sm">Start filling out the form to see your resume preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 min-h-full">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 mb-4">
        {personalInfo.name && (
          <h1 className="text-3xl font-bold text-black uppercase tracking-wide">
            {personalInfo.name}
          </h1>
        )}
        <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-700">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
        <div className="flex flex-wrap gap-3 mt-1 text-sm">
          {links.github && (
            <a href={`https://${links.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-black">
              {links.github}
            </a>
          )}
          {links.linkedin && (
            <a href={`https://${links.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-black">
              {links.linkedin}
            </a>
          )}
          {links.website && (
            <a href={`https://${links.website}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-black">
              {links.website}
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-4">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-sm text-slate-800 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
            Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-black">{exp.title}</h3>
                  <span className="text-sm text-slate-600">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="text-sm text-slate-700">
                  {exp.company}{exp.location && `, ${exp.location}`}
                </div>
                {exp.description && (
                  <p className="text-sm text-slate-800 mt-1 leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-black">{edu.school}</h3>
                  <span className="text-sm text-slate-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="text-sm text-slate-700">
                  {edu.degree}{edu.field && `, ${edu.field}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
            Projects
          </h2>
          <div className="space-y-2">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-black">{proj.name}</h3>
                  {proj.link && (
                    <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-black">
                      {proj.link}
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <div className="text-sm text-slate-600 italic">{proj.technologies}</div>
                )}
                {proj.description && (
                  <p className="text-sm text-slate-800 mt-1 leading-relaxed">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-black uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
            Skills
          </h2>
          <p className="text-sm text-slate-800">{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
