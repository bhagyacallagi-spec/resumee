'use client';

import { useState } from 'react';
import { Upload, FileText, Check } from 'lucide-react';

export default function ProofPage() {
  const [artifacts, setArtifacts] = useState<{
    problem?: string;
    market?: string;
    architecture?: string;
    hld?: string;
    lld?: string;
    build?: string;
    test?: string;
    ship?: string;
  }>({});

  const handleFileUpload = (step: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setArtifacts((prev) => ({ ...prev, [step]: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const steps = [
    { key: 'problem', label: 'Step 1: Problem Definition' },
    { key: 'market', label: 'Step 2: Market Research' },
    { key: 'architecture', label: 'Step 3: Architecture' },
    { key: 'hld', label: 'Step 4: High Level Design' },
    { key: 'lld', label: 'Step 5: Low Level Design' },
    { key: 'build', label: 'Step 6: Build' },
    { key: 'test', label: 'Step 7: Test' },
    { key: 'ship', label: 'Step 8: Ship' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">Proof of Work</h1>
          <p className="text-slate-600 mt-1">
            Upload artifacts and screenshots from each step of the build process.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.key}
              className={`p-6 rounded-xl border-2 transition-all ${
                artifacts[step.key as keyof typeof artifacts]
                  ? 'bg-green-50 border-green-200'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      artifacts[step.key as keyof typeof artifacts]
                        ? 'bg-green-100 text-green-600'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {artifacts[step.key as keyof typeof artifacts] ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <FileText className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">{step.label}</h3>
                    <p className="text-sm text-slate-500">
                      {artifacts[step.key as keyof typeof artifacts]
                        ? 'Artifact uploaded'
                        : 'No artifact uploaded'}
                    </p>
                  </div>
                </div>
              </div>

              {artifacts[step.key as keyof typeof artifacts] ? (
                <div className="relative">
                  <img
                    src={artifacts[step.key as keyof typeof artifacts]}
                    alt={`${step.label} artifact`}
                    className="w-full h-32 object-cover rounded-lg border border-slate-200"
                  />
                  <label className="absolute bottom-2 right-2 px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg shadow-sm border border-slate-200 cursor-pointer hover:bg-slate-50">
                    Replace
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(step.key, e)}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-slate-400 hover:bg-slate-50 transition-colors">
                  <Upload className="w-8 h-8 text-slate-400 mb-2" />
                  <span className="text-sm text-slate-500">Click to upload screenshot</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(step.key, e)}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 p-6 bg-slate-900 rounded-xl text-white">
          <h2 className="text-lg font-medium mb-2">Submission Summary</h2>
          <p className="text-slate-400 text-sm mb-4">
            {Object.keys(artifacts).length} of 8 steps have artifacts uploaded
          </p>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${(Object.keys(artifacts).length / 8) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
