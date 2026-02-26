import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 3,
  stepTitle: 'Architecture',
  contextTitle: 'System Architecture Design',
  contextDescription: 'Design the high-level system architecture and technology stack.',
  promptText: `Design the system architecture for an AI Resume Builder application.

Architecture Components:
1. Frontend Architecture
   - React/Next.js with TypeScript
   - State management (Zustand/Redux)
   - UI component library (Tailwind + shadcn)
   
2. Backend Architecture
   - API design (REST vs GraphQL)
   - Authentication (Auth0/Clerk/NextAuth)
   - Database schema (PostgreSQL/MongoDB)
   
3. AI/ML Integration
   - LLM provider (OpenAI/Anthropic)
   - Prompt engineering strategy
   - Resume parsing (OCR/NLP)
   
4. Infrastructure
   - Deployment (Vercel/AWS)
   - CDN and asset storage
   - CI/CD pipeline

Deliverables:
- Architecture diagram
- Technology stack document
- API specification draft
- Data model design`,
  prevRoute: '/rb/02-market',
  nextRoute: '/rb/04-hld',
};

export default function ArchitecturePage() {
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
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 3: System Architecture</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">Architecture Layers</h4>
              <div className="space-y-3">
                {[
                  { name: 'Presentation Layer', desc: 'Next.js, React, Tailwind CSS, shadcn/ui' },
                  { name: 'Application Layer', desc: 'API routes, business logic, middleware' },
                  { name: 'Data Layer', desc: 'Database, file storage, caching' },
                  { name: 'AI Layer', desc: 'LLM integration, resume parsing, recommendations' },
                  { name: 'Infrastructure', desc: 'Hosting, CDN, CI/CD, monitoring' },
                ].map((layer) => (
                  <div key={layer.name} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-slate-800">{layer.name}</p>
                      <p className="text-sm text-slate-600">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Technology Stack Recommendations</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border border-slate-200 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">Frontend</p>
                  <p className="text-xs text-slate-500">Next.js 14, TypeScript, Tailwind</p>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">Backend</p>
                  <p className="text-xs text-slate-500">Next.js API, Prisma ORM</p>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">Database</p>
                  <p className="text-xs text-slate-500">PostgreSQL, Redis cache</p>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">AI/ML</p>
                  <p className="text-xs text-slate-500">OpenAI GPT-4, LangChain</p>
                </div>
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Deliverables</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    System Architecture Diagram
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Technology Stack Document
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Database Schema Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    API Specification (OpenAPI)
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
