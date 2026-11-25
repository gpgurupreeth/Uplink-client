import React from 'react';
import { testimonials } from '../data/content';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section
      aria-label="Client References and Feedback"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded mb-3">
            Client Feedback &amp; References
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
            Endorsements from organizational leaders
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            [Client Testimonials: The quotes below are representative placeholders for client endorsement quotes]
          </p>
        </div>

        {/* 3 Executive Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 text-slate-300 mb-4" aria-hidden="true" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6 italic">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-[#0F172A]">
                  {item.author}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.role}, {item.company}
                </p>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  {item.metricNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
