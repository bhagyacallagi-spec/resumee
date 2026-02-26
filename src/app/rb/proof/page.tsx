'use client';

import { useState } from 'react';
import { useProject } from '@/lib/project-context';
import { Check, Lock, Copy, ExternalLink, Github, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ProofPage() {
  const { state, setSubmissionLinks } = useProject();
  const [copied, setCopied] = useState(false);
  const [links, setLinks] = useState({
    lovableLink: state.lovableLink,
    githubLink: state.githubLink,
    deployLink: state.deployLink,
  });

  const completedSteps = state.steps.filter((s) => s.isCompleted).length;
  const allStepsCompleted = completedSteps === 8;

  const handleLinkChange = (field: keyof typeof links, value: string) => {
    const newLinks = { ...links, [field]: value };
    setLinks(newLinks);
    setSubmissionLinks(newLinks);
  };

  const generateSubmissionText = () => {
    return `AI Resume Builder - Project 3 Submission

Build Track Completion Status:
${state.steps.map((s) => `${s.isCompleted ? '✅' : '❌'} Step ${s.stepNumber}: ${s.title}`).join('\n')}

Project Links:
${links.lovableLink ? `Lovable Project: ${links.lovableLink}` : 'Lovable Project: [Not provided]'}
${links.githubLink ? `GitHub Repository: ${links.githubLink}` : 'GitHub Repository: [Not provided]'}
${links.deployLink ? `Live Deployment: ${links.deployLink}` : 'Live Deployment: [Not provided]'}

Completed on: ${new Date().toLocaleDateString()}
`;
  };

  const handleCopySubmission = async () => {
    await navigator.clipboard.writeText(generateSubmissionText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <header className="bg-slate-900 text-white h-16 flex items-center justify-between px-6 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">
            AI
          </div>
          <h1 className="text-lg font-semibold">AI Resume Builder</h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400">Project 3</span>
          <span className="text-slate-600">—</span>
          <span className="text-white font-medium">Proof of Completion</span>
        </div>
        <div className="flex items-center gap-4">
          {allStepsCompleted ? (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              All Steps Complete
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              {completedSteps}/8 Steps
            </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Build Track Progress</h2>
          <div className="grid grid-cols-4 gap-4">
            {state.steps.map((step) => (
              <Link
                key={step.stepNumber}
                href={step.route}
                className={`p-4 rounded-lg border-2 transition-all ${
                  step.isCompleted
                    ? 'bg-green-50 border-green-200 hover:border-green-300'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">Step {step.stepNumber}</span>
                  {step.isCompleted ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Lock className="w-3 h-3 text-slate-400" />
                  )}
                </div>
                <p className={`text-sm font-medium ${step.isCompleted ? 'text-green-800' : 'text-slate-600'}`}>
                  {step.title}
                </p>
                {step.artifactUrl && (
                  <div className="mt-2">
                    <img
                      src={step.artifactUrl}
                      alt={`Step ${step.stepNumber} artifact`}
                      className="w-full h-16 object-cover rounded"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Submission Links */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Project Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  Lovable Project Link
                </span>
              </label>
              <input
                type="url"
                value={links.lovableLink}
                onChange={(e) => handleLinkChange('lovableLink', e.target.value)}
                placeholder="https://lovable.dev/projects/..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-700" />
                  GitHub Repository Link
                </span>
              </label>
              <input
                type="url"
                value={links.githubLink}
                onChange={(e) => handleLinkChange('githubLink', e.target.value)}
                placeholder="https://github.com/username/repo"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  Live Deployment Link
                </span>
              </label>
              <input
                type="url"
                value={links.deployLink}
                onChange={(e) => handleLinkChange('deployLink', e.target.value)}
                placeholder="https://your-app.vercel.app"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Final Submission */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-sm border border-purple-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Final Submission</h2>
          <p className="text-slate-600 mb-4">
            Copy the submission text below and submit it to complete your project.
          </p>
          <button
            onClick={handleCopySubmission}
            disabled={!allStepsCompleted}
            className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium transition-all ${
              allStepsCompleted
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-md'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                Copied to Clipboard!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copy Final Submission
              </>
            )}
          </button>
          {!allStepsCompleted && (
            <p className="text-sm text-slate-500 mt-3 text-center">
              Complete all 8 steps to enable submission
            </p>
          )}
        </div>

        {/* Preview */}
        <div className="mt-6 bg-slate-900 rounded-xl p-6 overflow-x-auto">
          <h3 className="text-sm font-medium text-slate-400 mb-3">Submission Preview</h3>
          <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">
            {generateSubmissionText()}
          </pre>
        </div>
      </main>
    </div>
  );
}
