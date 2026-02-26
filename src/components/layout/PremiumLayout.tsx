'use client';

import TopBar from './TopBar';
import ContextHeader from './ContextHeader';
import BuildPanel from './BuildPanel';
import ProofFooter from './ProofFooter';

interface PremiumLayoutProps {
  stepNumber: number;
  stepTitle: string;
  contextTitle: string;
  contextDescription: string;
  promptText: string;
  prevRoute?: string;
  nextRoute?: string;
  children: React.ReactNode;
}

export default function PremiumLayout({
  stepNumber,
  stepTitle,
  contextTitle,
  contextDescription,
  promptText,
  prevRoute,
  nextRoute,
  children,
}: PremiumLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-slate-50">
      <TopBar stepNumber={stepNumber} stepTitle={stepTitle} />
      
      <ContextHeader title={contextTitle} description={contextDescription} />
      
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
        
        <aside className="w-[30%] min-w-[320px] max-w-[400px]">
          <BuildPanel stepNumber={stepNumber} promptText={promptText} />
        </aside>
      </div>
      
      <ProofFooter stepNumber={stepNumber} prevRoute={prevRoute} nextRoute={nextRoute} />
    </div>
  );
}
