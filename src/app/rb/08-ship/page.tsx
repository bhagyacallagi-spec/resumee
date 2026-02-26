import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 8,
  stepTitle: 'Ship',
  contextTitle: 'Ship Phase',
  contextDescription: 'Deploy your application and prepare for launch.',
  promptText: `Deploy and launch the AI Resume Builder application.

Deployment Checklist:

1. Pre-deployment
   - Final code review
   - Environment variables configured
   - Database migrations run
   - Assets optimized
   - SEO meta tags added

2. Production Deployment
   - Deploy to Vercel/Netlify/Railway
   - Configure custom domain
   - Set up SSL certificate
   - Configure CDN for assets
   - Set up monitoring (Sentry/LogRocket)

3. Post-deployment
   - Smoke tests in production
   - Analytics setup (Google Analytics/Plausible)
   - Error tracking configured
   - Performance monitoring active
   - Backup strategy in place

4. Launch Preparation
   - Create launch announcement
   - Prepare social media posts
   - Set up support channels
   - Document known issues
   - Prepare FAQ

5. Go Live
   - Remove password protection
   - Announce on social media
   - Monitor for issues
   - Collect user feedback
   - Iterate based on feedback

Upload your deployment screenshot and live URL to complete this step.`,
  prevRoute: '/rb/07-test',
};

export default function ShipPage() {
  return (
    <PremiumLayout
      stepNumber={STEP_DATA.stepNumber}
      stepTitle={STEP_DATA.stepTitle}
      contextTitle={STEP_DATA.contextTitle}
      contextDescription={STEP_DATA.contextDescription}
      promptText={STEP_DATA.promptText}
      prevRoute={STEP_DATA.prevRoute}
    >
      <div className="max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 8: Ship Phase</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">Pre-Launch Checklist</h4>
              <div className="space-y-2">
                {[
                  'All critical bugs fixed',
                  'Performance benchmarks met',
                  'Security audit completed',
                  'Analytics and monitoring set up',
                  'Documentation complete',
                  'Support channels ready',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="checkbox" className="w-4 h-4 text-green-600 rounded" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Deployment Steps</h4>
              <div className="space-y-3">
                {[
                  { step: '1. Build', desc: 'Run production build and verify output' },
                  { step: '2. Environment', desc: 'Set all production environment variables' },
                  { step: '3. Database', desc: 'Run migrations and verify connection' },
                  { step: '4. Deploy', desc: 'Push to production hosting platform' },
                  { step: '5. Verify', desc: 'Run smoke tests on production URL' },
                  { step: '6. Monitor', desc: 'Watch error logs and performance metrics' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-sm font-mono text-purple-600 font-medium">{item.step}</span>
                    <span className="text-sm text-slate-700">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Post-Launch</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { task: 'Monitor', desc: 'Errors, performance, uptime' },
                  { task: 'Collect Feedback', desc: 'User surveys, analytics' },
                  { task: 'Iterate', desc: 'Fix issues, add features' },
                  { task: 'Market', desc: 'Social media, content marketing' },
                ].map((item) => (
                  <div key={item.task} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-800">{item.task}</p>
                    <p className="text-xs text-green-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Success Metrics</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Page load time &lt; 3 seconds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    99.9% uptime
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Zero critical bugs in production
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    First 100 users onboarded
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
