import React from 'react';
import type { ProcessStep } from '../types';
import { CheckCircle2, Clock } from 'lucide-react';

interface ProcessTimelineProps {
  steps: ProcessStep[];
  division: 'it' | 'software';
  title?: string;
  subtitle?: string;
}

export default function ProcessTimeline({
  steps,
  division,
  title = 'Our Technical Delivery Framework',
  subtitle = 'A structured, four-stage methodology engineered to eliminate risk and ensure system reliability.',
}: ProcessTimelineProps) {
  const isIT = division === 'it';
  const badgeColor = isIT ? 'text-[#0E7490] bg-teal-50 border-teal-200' : 'text-[#4338CA] bg-indigo-50 border-indigo-200';
  const numberColor = isIT ? 'text-[#0E7490]' : 'text-[#4338CA]';
  const iconColor = isIT ? '#0E7490' : '#4338CA';

  return (
    <section
      aria-label="Technical Delivery Process Timeline"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded border mb-3 ${badgeColor}`}>
            Delivery Framework
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4-Step Process Grid (4 Columns Desktop / 2 Tablet / 1 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-bold tracking-tight ${numberColor}`}>
                    {step.number}
                  </span>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{step.duration}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Key deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: iconColor }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
