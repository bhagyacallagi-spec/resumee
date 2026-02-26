import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 7,
  stepTitle: 'Test',
  contextTitle: 'Testing Phase',
  contextDescription: 'Comprehensive testing of all features and user flows.',
  promptText: `Test the AI Resume Builder application thoroughly.

Testing Areas:

1. Functional Testing
   - User authentication flows
   - Resume CRUD operations
   - AI feature accuracy
   - Export functionality
   - Template rendering

2. UI/UX Testing
   - Responsive design (mobile, tablet, desktop)
   - Cross-browser compatibility
   - Accessibility (screen readers, keyboard nav)
   - Loading states and error handling

3. Performance Testing
   - Page load times
   - AI response times
   - Export generation speed
   - Database query optimization

4. Security Testing
   - Authentication security
   - Data validation
   - XSS prevention
   - CSRF protection

5. User Acceptance Testing
   - Test with real users
   - Gather feedback
   - Identify pain points
   - Document bugs

Test Cases to Cover:
- Create, edit, delete resume
- AI suggestions accuracy
- Export in different formats
- Mobile responsiveness
- Error scenarios

Use the Build Panel to upload test results and screenshots.`,
  prevRoute: '/rb/06-build',
  nextRoute: '/rb/08-ship',
};

export default function TestPage() {
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
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 7: Testing Phase</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">Test Categories</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Functional', desc: 'Core features work correctly', color: 'bg-blue-100 text-blue-700' },
                  { name: 'UI/UX', desc: 'Design consistency & usability', color: 'bg-purple-100 text-purple-700' },
                  { name: 'Performance', desc: 'Speed & responsiveness', color: 'bg-green-100 text-green-700' },
                  { name: 'Security', desc: 'Data protection & auth', color: 'bg-red-100 text-red-700' },
                ].map((test) => (
                  <div key={test.name} className={`p-3 rounded-lg border ${test.color} border-opacity-20`}>
                    <p className="font-medium">{test.name}</p>
                    <p className="text-xs opacity-80">{test.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Critical Test Cases</h4>
              <div className="space-y-2">
                {[
                  'User can sign up and log in successfully',
                  'User can create a new resume from scratch',
                  'AI generates relevant suggestions',
                  'Resume exports correctly to PDF',
                  'All templates render properly',
                  'Mobile view is fully functional',
                  'Error messages are clear and helpful',
                ].map((testCase, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                    <span className="text-sm text-slate-700">{testCase}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Testing Tools</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Jest', use: 'Unit testing' },
                  { name: 'Cypress', use: 'E2E testing' },
                  { name: 'Lighthouse', use: 'Performance' },
                  { name: ' axe DevTools', use: 'Accessibility' },
                  { name: 'BrowserStack', use: 'Cross-browser' },
                  { name: 'Postman', use: 'API testing' },
                ].map((tool) => (
                  <div key={tool.name} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <p className="text-sm font-medium text-slate-800">{tool.name}</p>
                    <p className="text-xs text-slate-500">{tool.use}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Bug Tracking</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-sm text-slate-600 mb-3">
                  Document all bugs found during testing with:
                </p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Bug description and steps to reproduce</li>
                  <li>• Expected vs actual behavior</li>
                  <li>• Severity level (Critical, High, Medium, Low)</li>
                  <li>• Screenshots or screen recordings</li>
                  <li>• Environment details (browser, device)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PremiumLayout>
  );
}
