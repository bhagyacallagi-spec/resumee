'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ProjectState, StepStatus } from '@/types';

const STEPS: StepStatus[] = [
  { stepNumber: 1, route: '/rb/01-problem', title: 'Problem Definition', isCompleted: false },
  { stepNumber: 2, route: '/rb/02-market', title: 'Market Research', isCompleted: false },
  { stepNumber: 3, route: '/rb/03-architecture', title: 'Architecture', isCompleted: false },
  { stepNumber: 4, route: '/rb/04-hld', title: 'High Level Design', isCompleted: false },
  { stepNumber: 5, route: '/rb/05-lld', title: 'Low Level Design', isCompleted: false },
  { stepNumber: 6, route: '/rb/06-build', title: 'Build', isCompleted: false },
  { stepNumber: 7, route: '/rb/07-test', title: 'Test', isCompleted: false },
  { stepNumber: 8, route: '/rb/08-ship', title: 'Ship', isCompleted: false },
];

interface ProjectContextType {
  state: ProjectState;
  completeStep: (stepNumber: number, artifactUrl?: string, artifactType?: 'image' | 'link') => void;
  canAccessStep: (stepNumber: number) => boolean;
  setSubmissionLinks: (links: { lovableLink?: string; githubLink?: string; deployLink?: string }) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProjectState>({
    currentStep: 1,
    steps: STEPS,
    lovableLink: '',
    githubLink: '',
    deployLink: '',
  });

  const completeStep = useCallback((stepNumber: number, artifactUrl?: string, artifactType?: 'image' | 'link') => {
    setState((prev) => {
      const updatedSteps = prev.steps.map((step) =>
        step.stepNumber === stepNumber
          ? { ...step, isCompleted: true, artifactUrl, artifactType }
          : step
      );
      return {
        ...prev,
        steps: updatedSteps,
        currentStep: Math.max(prev.currentStep, stepNumber + 1),
      };
    });
  }, []);

  const canAccessStep = useCallback((stepNumber: number) => {
    if (stepNumber === 1) return true;
    const previousStep = state.steps.find((s) => s.stepNumber === stepNumber - 1);
    return previousStep?.isCompleted ?? false;
  }, [state.steps]);

  const setSubmissionLinks = useCallback((links: { lovableLink?: string; githubLink?: string; deployLink?: string }) => {
    setState((prev) => ({
      ...prev,
      ...links,
    }));
  }, []);

  return (
    <ProjectContext.Provider value={{ state, completeStep, canAccessStep, setSubmissionLinks }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}
