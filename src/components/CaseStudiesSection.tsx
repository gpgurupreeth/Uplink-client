import React from 'react';
import type { PageId } from '../types';
import { caseStudies } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudiesSectionProps {
  onNavigate: (page: PageId) => void;
  filterDivision?: 'it' | 'software' | 'both';
}

export default function CaseStudiesSection({
  onNavigate,
  filterDivision,
}: CaseStudiesSectionProps) {
  const displayedStudies = filterDivision
    ? caseStudies.filter((cs) => cs.division === filterDivision || cs.division === 'both')
    : caseStudies;

  return (
    <section
      aria-labelledby="case-studies-heading"
      className="py-20 lg:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded mb-3">
            Engagement Case Studies
          </span>

          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4"
          >
            Representative client engagements
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Exemplifying our methodology in enterprise infrastructure modernization and bespoke software development.
          </p>
        </div>

        {/* 3-Column Grid Desktop / 1 Column Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedStudies.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Real-looking photography */}
                <div className="relative h-48 w-full bg-slate-100 border-b border-slate-200 overflow-hidden">
                  <img
                    src={study.imageUrl}
                    alt={study.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 text-[#0F172A] px-2.5 py-1 rounded text-xs font-semibold border border-slate-200 shadow-sm">
                    {study.divisionLabel}
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white px-2 py-0.5 rounded">
                    [Photo: Replace with client asset]
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {study.clientIndustry}
                  </span>

                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-4 leading-snug">
                    {study.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-sm">
                    <div>
                      <span className="text-xs font-semibold text-slate-700 block mb-0.5">
                        Operational challenge:
                      </span>
                      <p className="text-slate-600 font-normal leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-700 block mb-0.5">
                        Technical solution:
                      </span>
                      <p className="text-slate-600 font-normal leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics with Honest Placeholders */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 mb-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <p className="text-sm font-bold text-[#0B3D91]">
                          {metric.value}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {study.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B3D91] hover:underline transition-colors"
                >
                  <span>Request Full Case Study Reference</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
