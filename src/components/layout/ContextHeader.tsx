'use client';

interface ContextHeaderProps {
  title: string;
  description: string;
}

export default function ContextHeader({ title, description }: ContextHeaderProps) {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="text-slate-600 mt-1 text-sm">{description}</p>
    </div>
  );
}
