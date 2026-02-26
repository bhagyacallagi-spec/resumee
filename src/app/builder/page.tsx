'use client';

import { useResume } from '@/context/resume-context';
import PersonalInfoForm from '@/components/forms/PersonalInfoForm';
import SummaryForm from '@/components/forms/SummaryForm';
import EducationForm from '@/components/forms/EducationForm';
import ExperienceForm from '@/components/forms/ExperienceForm';
import ProjectsForm from '@/components/forms/ProjectsForm';
import SkillsForm from '@/components/forms/SkillsForm';
import LinksForm from '@/components/forms/LinksForm';
import ResumePreview from '@/components/resume/ResumePreview';
import ATSScore from '@/components/resume/ATSScore';

export default function BuilderPage() {
  const { loadSampleData, clearData } = useResume();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Left Column - Forms */}
          <div className="w-1/2 overflow-y-auto p-6">
            <div className="max-w-xl mx-auto space-y-8 pb-20">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-slate-900">Resume Builder</h1>
                <div className="flex gap-2">
                  <button
                    onClick={loadSampleData}
                    className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
                  >
                    Load Sample Data
                  </button>
                  <button
                    onClick={clearData}
                    className="px-3 py-1.5 text-sm text-slate-600 hover:text-red-600 border border-slate-200 rounded-lg hover:border-red-200 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Form Sections */}
              <PersonalInfoForm />
              <SummaryForm />
              <ExperienceForm />
              <EducationForm />
              <ProjectsForm />
              <SkillsForm />
              <LinksForm />
            </div>
          </div>

          {/* Right Column - Preview + ATS Score */}
          <div className="w-1/2 bg-slate-200 p-6 overflow-y-auto">
            <div className="max-w-2xl mx-auto space-y-6">
              <ATSScore />
              <div className="bg-white shadow-lg min-h-[800px]">
                <ResumePreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
