import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 1,
  stepTitle: 'Problem Definition',
  contextTitle: 'Define the Problem',
  contextDescription: 'Understand and document the core problem your AI Resume Builder will solve.',
  promptText: `Create a comprehensive problem definition document for an AI Resume Builder application.

Include:
1. Problem Statement - What pain points do job seekers face?
2. Target Audience - Who will use this application?
3. Current Solutions - What exists today and their limitations?
4. Unique Value Proposition - What makes this solution different?
5. Success Metrics - How will we measure success?

Focus on the key challenges:
- Difficulty in tailoring resumes for specific job descriptions
- Time-consuming resume formatting
- Lack of ATS optimization knowledge
- Missing feedback on resume quality

Output: A detailed problem definition document with user personas and pain points.`,
  nextRoute: '/rb/02-market',
};

export default function ProblemPage() {
  return (
    <PremiumLayout
      stepNumber={STEP_DATA.stepNumber}
      stepTitle={STEP_DATA.stepTitle}
      contextTitle={STEP_DATA.contextTitle}
      contextDescription={STEP_DATA.contextDescription}
      promptText={STEP_DATA.promptText}
      nextRoute={STEP_DATA.nextRoute}
    >
      <div className="max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 1: Problem Definition</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">What You Will Do</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Research and identify the core problem</li>
                <li>Define your target audience and user personas</li>
                <li>Analyze existing solutions and their gaps</li>
                <li>Articulate your unique value proposition</li>
                <li>Establish clear success metrics</li>
              </ul>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Deliverables</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Problem Statement Document
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    User Personas (2-3)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Competitive Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Value Proposition Canvas
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Resources</h4>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-purple-300 transition-colors">
                  <p className="text-sm font-medium text-slate-800">Problem Statement Template</p>
                  <p className="text-xs text-slate-500 mt-1">Notion Template</p>
                </a>
                <a href="#" className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-purple-300 transition-colors">
                  <p className="text-sm font-medium text-slate-800">User Persona Guide</p>
                  <p className="text-xs text-slate-500 mt-1">PDF Guide</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PremiumLayout>
  );
}
