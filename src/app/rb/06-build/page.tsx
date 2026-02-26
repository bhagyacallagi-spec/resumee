import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 6,
  stepTitle: 'Build',
  contextTitle: 'Build Phase',
  contextDescription: 'Implement the application using Lovable and your design specifications.',
  promptText: `Build the AI Resume Builder application using Lovable.dev

Build Instructions:

1. Project Setup
   - Initialize project in Lovable
   - Connect GitHub repository
   - Configure deployment settings

2. Core Features to Build
   - User authentication (Clerk/Auth0)
   - Resume editor with rich text
   - AI-powered suggestions integration
   - Template selection system
   - Export to PDF/DOCX
   - User dashboard

3. AI Integration
   - Connect OpenAI API
   - Implement resume analysis
   - Build suggestion engine
   - Add job description matching

4. UI/UX Implementation
   - Responsive design
   - Dark/light mode
   - Loading states
   - Error handling

5. Data Persistence
   - Database integration
   - File upload handling
   - User preferences storage

Use the Build Panel to copy prompts into Lovable and track your progress.`,
  prevRoute: '/rb/05-lld',
  nextRoute: '/rb/07-test',
};

export default function BuildPage() {
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
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 6: Build Phase</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">Build Checklist</h4>
              <div className="space-y-3">
                {[
                  { task: 'Project Setup', desc: 'Initialize in Lovable, connect GitHub' },
                  { task: 'Authentication', desc: 'Sign up, login, password reset flows' },
                  { task: 'Resume Editor', desc: 'Rich text editing, sections, formatting' },
                  { task: 'AI Features', desc: 'Suggestions, optimization, analysis' },
                  { task: 'Templates', desc: 'Multiple templates, preview, selection' },
                  { task: 'Export', desc: 'PDF, DOCX download functionality' },
                  { task: 'Dashboard', desc: 'User home, resume list, settings' },
                ].map((item) => (
                  <div key={item.task} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-purple-600 rounded" />
                    <div>
                      <p className="font-medium text-slate-800">{item.task}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Lovable Build Tips</h4>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">→</span>
                    Use the Build Panel prompts for each feature
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">→</span>
                    Test each feature before moving to the next
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">→</span>
                    Commit regularly to GitHub
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">→</span>
                    Use the preview mode to test responsiveness
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Common Issues & Solutions</h4>
              <div className="space-y-2">
                {[
                  { issue: 'AI API not responding', solution: 'Check API key and rate limits' },
                  { issue: 'Export not working', solution: 'Verify puppeteer/playwright setup' },
                  { issue: 'Database errors', solution: 'Check connection string and migrations' },
                ].map((item) => (
                  <div key={item.issue} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-medium text-slate-800">{item.issue}</p>
                    <p className="text-xs text-slate-500">Solution: {item.solution}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </PremiumLayout>
  );
}
