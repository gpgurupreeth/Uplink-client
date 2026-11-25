import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { itFaqs, softwareFaqs } from '../data/content';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  division?: 'it' | 'software' | 'all';
}

export default function FaqSection({ division = 'all' }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] =
    division === 'it'
      ? itFaqs
      : division === 'software'
      ? softwareFaqs
      : [...itFaqs, ...softwareFaqs];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-20 lg:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded mb-3">
            Technical &amp; Commercial FAQ
          </span>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4"
          >
            Frequently asked questions
          </h2>

          <p className="text-base text-slate-600 font-normal">
            Addressing common inquiries regarding engagement structure, code ownership, and migration SLAs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="min-h-[48px] w-full text-left p-6 flex items-center justify-between gap-4 text-[#0F172A] hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
                >
                  <span className="text-base sm:text-lg font-bold tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0B3D91]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
