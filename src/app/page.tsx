import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-6">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-white">AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Resume Builder
          </h1>
          <p className="text-xl text-slate-300 mb-2">Project 3 — Build Track</p>
          <p className="text-slate-400">KodNest Premium Build System</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">8-Step Build Process</h2>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              "Problem",
              "Market",
              "Architecture",
              "HLD",
              "LLD",
              "Build",
              "Test",
              "Ship",
            ].map((step, idx) => (
              <div
                key={step}
                className="bg-white/5 rounded-lg p-3 text-center border border-white/10"
              >
                <span className="text-xs text-slate-400">Step {idx + 1}</span>
                <p className="text-sm font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            Complete each step sequentially. Upload artifacts to unlock the next step.
          </p>
        </div>

        <Link
          href="/rb/01-problem"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
        >
          Start Building
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
