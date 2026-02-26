'use client';

import { useResume } from '@/context/resume-context';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import TemplateSelector from '@/components/resume/TemplateSelector';
import ClassicTemplate from '@/components/resume/templates/ClassicTemplate';
import ModernTemplate from '@/components/resume/templates/ModernTemplate';
import MinimalTemplate from '@/components/resume/templates/MinimalTemplate';

export default function PreviewPage() {
  const { resumeData, template } = useResume();
  const { personalInfo, summary, education, experience, projects, skills, links } = resumeData;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/builder"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Builder</span>
          </Link>
          <h1 className="text-lg font-medium text-slate-900">Resume Preview</h1>
          <div className="w-32">
            <TemplateSelector />
          </div>
        </div>
      </div>

      {/* Resume Display */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white shadow-xl min-h-[800px]">
          {template === 'modern' && <ModernTemplate data={resumeData} />}
          {template === 'minimal' && <MinimalTemplate data={resumeData} />}
          {(template === 'classic' || !template) && (
            <div className="p-12 max-w-3xl mx-auto">
            {/* Header */}
            <div className="border-b-2 border-black pb-6 mb-6">
              {personalInfo.name ? (
                <h1 className="text-4xl font-bold text-black uppercase tracking-wider">
                  {personalInfo.name}
                </h1>
              ) : (
                <h1 className="text-4xl font-bold text-black uppercase tracking-wider">
                  Your Name
                </h1>
              )}
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-700">
                {personalInfo.email && <span>{personalInfo.email}</span>}
                {personalInfo.phone && <span className="text-slate-400">|</span>}
                {personalInfo.phone && <span>{personalInfo.phone}</span>}
                {personalInfo.location && <span className="text-slate-400">|</span>}
                {personalInfo.location && <span>{personalInfo.location}</span>}
              </div>
              <div className="flex flex-wrap gap-4 mt-2 text-sm">
                {links.github && (
                  <>
                    <a href={`https://${links.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-black">
                      {links.github}
                    </a>
                  </>
                )}
                {links.linkedin && (
                  <>
                    <span className="text-slate-400">|</span>
                    <a href={`https://${links.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-black">
                      {links.linkedin}
                    </a>
                  </>
                )}
                {links.website && (
                  <>
                    <span className="text-slate-400">|</span>
                    <a href={`https://${links.website}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-black">
                      {links.website}
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Summary */}
            {(summary || personalInfo.name === '') && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-3">
                  Summary
                </h2>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {summary || 'A brief overview of your professional background and key strengths goes here.'}
                </p>
              </div>
            )}

            {/* Experience */}
            <div className="mb-6">
              <h2 className="text-sm font-bold text-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">
                Experience
              </h2>
              {experience.length > 0 ? (
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-black text-base">{exp.title}</h3>
                        <span className="text-sm text-slate-600 font-medium">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <div className="text-sm text-slate-700 mt-0.5">
                        {exp.company}{exp.location && `, ${exp.location}`}
                      </div>
                      {exp.description && (
                        <p className="text-sm text-slate-800 mt-2 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-black text-base">Job Title</h3>
                      <span className="text-sm text-slate-600 font-medium">Start - End</span>
                    </div>
                    <div className="text-sm text-slate-700 mt-0.5">Company Name, Location</div>
                    <p className="text-sm text-slate-800 mt-2 leading-relaxed">
                      Description of your role and key achievements goes here.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-sm font-bold text-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">
                Education
              </h2>
              {education.length > 0 ? (
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-black">{edu.school}</h3>
                        <span className="text-sm text-slate-600 font-medium">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                      <div className="text-sm text-slate-700">
                        {edu.degree}{edu.field && `, ${edu.field}`}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-black">University Name</h3>
                    <span className="text-sm text-slate-600 font-medium">Start - End</span>
                  </div>
                  <div className="text-sm text-slate-700">Degree, Field of Study</div>
                </div>
              )}
            </div>

            {/* Projects */}
            {projects.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">
                  Projects
                </h2>
                <div className="space-y-3">
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
            <div>
              <h2 className="text-sm font-bold text-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-3">
                Skills
              </h2>
              <p className="text-sm text-slate-800">
                {skills.length > 0 
                  ? skills.join(', ') 
                  : 'List your key skills here, separated by commas'}
              </p>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
