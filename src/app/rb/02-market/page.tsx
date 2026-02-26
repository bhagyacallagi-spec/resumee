import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 2,
  stepTitle: 'Market Research',
  contextTitle: 'Market Research & Validation',
  contextDescription: 'Analyze the market landscape and validate your solution with potential users.',
  promptText: `Conduct comprehensive market research for an AI Resume Builder application.

Research Areas:
1. Market Size - TAM, SAM, SOM calculations
2. Competitive Analysis - Direct and indirect competitors
3. User Interviews - Validate assumptions with 5-10 potential users
4. Pricing Research - What are users willing to pay?
5. Feature Gap Analysis - What is missing in current solutions?

Key Competitors to Analyze:
- Resume.io, Zety, Novoresume
- LinkedIn Resume Builder
- Teal, Jobscan
- ChatGPT/Claude for resume writing

Deliverables:
- Market research report
- Competitor feature matrix
- User interview summary
- Pricing strategy recommendation
- Go-to-market insights`,
  prevRoute: '/rb/01-problem',
  nextRoute: '/rb/03-architecture',
};

export default function MarketPage() {
  return (
    <PremiumLayout
      stepNumber={STEP_DATA.stepNumber}
      stepTitle={STEP_DATA.stepTitle}
      contextTitle={STEP_DATA.contextTitle}
      contextDescription={STEP_DATA.contextDescription}
      promptText={STEP_DATA.promptText}
      prevRoute={STEP_DATA.prevRoute}
      nextRoute={STEP_DATA.nextRoute}
    >
      <div className="max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 2: Market Research</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">Research Objectives</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Validate market demand for AI-powered resume tools</li>
                <li>Understand competitive landscape and positioning</li>
                <li>Identify pricing expectations from target users</li>
                <li>Discover unmet needs and feature gaps</li>
                <li>Define unique selling propositions</li>
              </ul>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Key Competitors</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Resume.io', 'Zety', 'Novoresume', 'Teal', 'Jobscan', 'LinkedIn'].map((comp) => (
                  <div key={comp} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-medium text-slate-800">{comp}</p>
                    <p className="text-xs text-slate-500">Analyze features & pricing</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Deliverables</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Market Size Analysis (TAM/SAM/SOM)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Competitive Feature Matrix
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    User Interview Insights (5-10 users)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Pricing Strategy Document
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PremiumLayout>
  );
}
