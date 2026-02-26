'use client';

import { useProject } from '@/lib/project-context';
import { Check, Lock, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface ProofFooterProps {
  stepNumber: number;
  prevRoute?: string;
  nextRoute?: string;
}

export default function ProofFooter({ stepNumber, prevRoute, nextRoute }: ProofFooterProps) {
  const { state, canAccessStep } = useProject();

  const currentStep = state.steps.find((s) => s.stepNumber === stepNumber);
  const isCompleted = currentStep?.isCompleted ?? false;
  const canGoNext = isCompleted && nextRoute && canAccessStep(stepNumber + 1);

  return (
    <footer className="bg-white border-t border-slate-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {state.steps.map((step) => (
            <Link
              key={step.stepNumber}
              href={step.route}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                step.stepNumber === stepNumber
                  ? 'bg-purple-600 text-white'
                  : step.isCompleted
                  ? 'bg-green-500 text-white'
                  : canAccessStep(step.stepNumber)
                  ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              onClick={(e) => {
                if (!canAccessStep(step.stepNumber)) {
                  e.preventDefault();
                }
              }}
            >
              {step.isCompleted ? (
                <Check className="w-4 h-4" />
              ) : !canAccessStep(step.stepNumber) ? (
                <Lock className="w-3 h-3" />
              ) : (
                step.stepNumber
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {prevRoute && stepNumber > 1 && (
          <Link
            href={prevRoute}
            className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Link>
        )}

        {nextRoute ? (
          <Link
            href={nextRoute}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              canGoNext
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed pointer-events-none'
            }`}
            onClick={(e) => {
              if (!canGoNext) {
                e.preventDefault();
              }
            }}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href="/rb/proof"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isCompleted
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed pointer-events-none'
            }`}
          >
            View Proof
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </footer>
  );
}
