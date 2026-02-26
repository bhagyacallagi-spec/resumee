import PremiumLayout from '@/components/layout/PremiumLayout';

const STEP_DATA = {
  stepNumber: 5,
  stepTitle: 'Low Level Design',
  contextTitle: 'Low Level Design (LLD)',
  contextDescription: 'Create detailed component designs, API specs, and database schemas.',
  promptText: `Create a comprehensive Low Level Design (LLD) for the AI Resume Builder.

LLD Components:

1. Component Design
   - React component hierarchy
   - Props interfaces
   - State management per component
   - Reusable UI components

2. API Specifications
   - RESTful endpoints
   - Request/response schemas
   - Error handling
   - Rate limiting

3. Database Schema
   - Entity Relationship Diagram
   - Table definitions
   - Indexes and constraints
   - Migration scripts

4. AI Integration Details
   - Prompt templates
   - Context management
   - Response parsing
   - Fallback strategies

5. State Management
   - Global state (Zustand/Redux)
   - Local state patterns
   - Server state (React Query/SWR)
   - Form state (React Hook Form)

Deliverables:
- Component documentation
- API specification (OpenAPI/Swagger)
- Database schema SQL
- AI prompt library
- State management patterns`,
  prevRoute: '/rb/04-hld',
  nextRoute: '/rb/06-build',
};

export default function LLDPage() {
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
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Step 5: Low Level Design</h3>
          
          <div className="space-y-6">
            <section>
              <h4 className="font-medium text-slate-800 mb-2">Component Architecture</h4>
              <div className="space-y-3">
                {[
                  { name: 'Layout Components', items: 'Header, Sidebar, Footer, Container' },
                  { name: 'UI Components', items: 'Button, Input, Card, Modal, Dropdown' },
                  { name: 'Feature Components', items: 'ResumeEditor, AIChat, TemplateSelector' },
                  { name: 'Page Components', items: 'DashboardPage, EditorPage, SettingsPage' },
                ].map((category) => (
                  <div key={category.name} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-medium text-slate-800">{category.name}</p>
                    <p className="text-sm text-slate-600">{category.items}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">API Endpoints</h4>
              <div className="space-y-2">
                {[
                  { method: 'POST', endpoint: '/api/resumes', desc: 'Create new resume' },
                  { method: 'GET', endpoint: '/api/resumes/:id', desc: 'Get resume by ID' },
                  { method: 'PUT', endpoint: '/api/resumes/:id', desc: 'Update resume' },
                  { method: 'POST', endpoint: '/api/ai/optimize', desc: 'AI optimization' },
                  { method: 'POST', endpoint: '/api/ai/suggestions', desc: 'Get AI suggestions' },
                ].map((api) => (
                  <div key={api.endpoint} className="flex items-center gap-3 p-2 bg-slate-50 rounded border border-slate-200">
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      api.method === 'GET' ? 'bg-green-100 text-green-700' :
                      api.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {api.method}
                    </span>
                    <span className="text-sm font-mono text-slate-700">{api.endpoint}</span>
                    <span className="text-xs text-slate-500">{api.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Database Entities</h4>
              <div className="grid grid-cols-2 gap-3">
                {['User', 'Resume', 'Template', 'JobDescription', 'AIInteraction', 'Subscription'].map((entity) => (
                  <div key={entity} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm font-medium text-slate-800">{entity}</p>
                    <p className="text-xs text-slate-500">Table definition</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="font-medium text-slate-800 mb-2">Deliverables</h4>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Component hierarchy & props documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    OpenAPI/Swagger specification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Database schema & migration scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    AI prompt templates library
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
