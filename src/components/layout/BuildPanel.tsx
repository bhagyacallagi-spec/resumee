'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { useProject } from '@/lib/project-context';
import { Copy, ExternalLink, Check, X, Upload } from 'lucide-react';

interface BuildPanelProps {
  stepNumber: number;
  promptText: string;
}

export default function BuildPanel({ stepNumber, promptText }: BuildPanelProps) {
  const { state, completeStep } = useProject();
  const [copied, setCopied] = useState(false);
  const [buildStatus, setBuildStatus] = useState<'idle' | 'building' | 'success' | 'error'>('idle');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentStep = state.steps.find((s) => s.stepNumber === stepNumber);
  const isCompleted = currentStep?.isCompleted ?? false;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBuildInLovable = () => {
    setBuildStatus('building');
    window.open('https://lovable.dev', '_blank');
    setTimeout(() => setBuildStatus('idle'), 3000);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setScreenshot(result);
        completeStep(stepNumber, result, 'image');
        setBuildStatus('success');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleItWorked = () => {
    if (screenshot) {
      completeStep(stepNumber, screenshot, 'image');
      setBuildStatus('success');
    }
  };

  const handleError = () => {
    setBuildStatus('error');
  };

  const handleAddScreenshot = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full h-full bg-slate-50 border-l border-slate-200 flex flex-col">
      <div className="px-4 py-3 bg-slate-100 border-b border-slate-200">
        <h3 className="font-semibold text-slate-800">Build Panel</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Copy This Into Lovable
          </label>
          <div className="relative">
            <textarea
              readOnly
              value={promptText}
              className="w-full h-48 p-3 text-sm font-mono bg-white border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-slate-600" />
              )}
            </button>
          </div>
        </div>

        <button
          onClick={handleBuildInLovable}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md"
        >
          <ExternalLink className="w-4 h-4" />
          Build in Lovable
        </button>

        <div className="border-t border-slate-200 pt-4">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Did it work?
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={handleItWorked}
              disabled={!screenshot && buildStatus !== 'success'}
              className="flex items-center justify-center gap-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
            >
              <Check className="w-4 h-4" />
              It Worked
            </button>
            <button
              onClick={handleError}
              className="flex items-center justify-center gap-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
            >
              <X className="w-4 h-4" />
              Error
            </button>
            <button
              onClick={handleAddScreenshot}
              className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
            >
              <Upload className="w-4 h-4" />
              Add Screenshot
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {screenshot && (
          <div className="border-t border-slate-200 pt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Uploaded Artifact
            </label>
            <div className="relative rounded-lg overflow-hidden border border-slate-200">
              <img
                src={screenshot}
                alt="Step artifact"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        )}

        {buildStatus === 'building' && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">Building in Lovable...</p>
          </div>
        )}

        {buildStatus === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">Build failed. Please try again or check the error.</p>
          </div>
        )}

        {isCompleted && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-700 flex items-center gap-2">
              <Check className="w-4 h-4" />
              Step completed! You can proceed to the next step.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
