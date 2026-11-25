import React from 'react';
import type { PageId } from '../types';
import DiscoveryQuiz from '../components/DiscoveryQuiz';

interface QuizPageProps {
  onNavigate: (page: PageId, prefill?: string) => void;
}

export default function QuizPage({ onNavigate }: QuizPageProps) {
  return (
    <div className="bg-white py-12 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded">
          Operational Assessment Tool
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mt-3">
          60-Second Solution Assessment
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
          Evaluate whether your immediate milestone aligns with Managed IT Services, Custom Software &amp; Automation, or a combined partnership.
        </p>
      </div>

      <DiscoveryQuiz onNavigate={onNavigate} />
    </div>
  );
}
