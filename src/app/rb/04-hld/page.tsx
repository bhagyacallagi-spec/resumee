import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 4,
  stepTitle: 'High Level Design',
  contextTitle: 'High Level Design (HLD)',
  contextDescription: 'Create detailed high-level design documents and user flows.',
  promptText: `Create a comprehensive High Level Design (HLD) for the AI Resume Builder.

HLD Components:

1. User Flow Diagrams
   - Onboarding flow
   - Resume creation flow
   - AI optimization flow
   - Export/share flow

2. Information Architecture
   - Site map and navigation
   - Content hierarchy
   - Feature organization

3. Wireframes (Low-fidelity)
   - Key screens layout
   - Component placement
   - Responsive breakpoints

4. Data Flow
   - User input to AI processing
   - Resume data lifecycle
   - Third-party integrations

5. Security Considerations
   - Data privacy (PII handling)
   - Authentication flows
   - API security

Deliverables:
- User flow diagrams
- Information architecture map
- Low-fidelity wireframes
- Data flow documentation
- Security checklist`,
  prevRoute: '/rb/03-architecture',
  nextRoute: '/rb/05-lld',
};

export default function HLDPage() {
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
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 4: High Level Design</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">Core User Flows</h4>
              <div className="space-y-3">
                {[
                  { name: 'Onboarding', steps: 'Sign up → Profile setup → First resume' },
                  { name: 'Resume Creation', steps: 'Template selection → Content input → AI suggestions' },
                  { name: 'AI Optimization', steps: 'Job description input → Analysis → Recommendations' },
                  { name: 'Export & Share', steps: 'Preview → Format selection → Download/Share' },
                ].map((flow) => (
                  <div key={flow.name} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-medium text-slate-800">{flow.name}</p>
                    <p className="text-sm text-slate-600">{flow.steps}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Key Screens to Design</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Landing Page',
                  'Dashboard',
                  'Resume Editor',
                  'AI Assistant',
                  'Templates Gallery',
                  'Settings',
                  'Export Preview',
                  'Account/Profile',
                ].map((screen) => (
                  <div key={screen} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-medium text-slate-800">{screen}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Design Principles</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Mobile-first responsive design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Progressive disclosure for complex features
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Clear visual hierarchy and feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Accessibility compliance (WCAG 2.1)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Deliverables</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    User Flow Diagrams (Figma/Miro)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Information Architecture Map
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Low-fidelity Wireframes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Data Flow Documentation
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
