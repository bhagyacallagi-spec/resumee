export interface StepStatus {
  stepNumber: number;
  route: string;
  title: string;
  isCompleted: boolean;
  artifactUrl?: string;
  artifactType?: 'image' | 'link';
}

export interface ProjectState {
  currentStep: number;
  steps: StepStatus[];
  lovableLink: string;
  githubLink: string;
  deployLink: string;
}

export interface BuildPanelState {
  promptText: string;
  buildStatus: 'idle' | 'building' | 'success' | 'error';
  screenshotUrl?: string;
}
