import React, { useState } from 'react';
import type { PageId, ServiceItem } from '../types';
import { softwareServicesList, softwareProcessSteps } from '../data/content';
import EnterpriseServiceCard from '../components/EnterpriseServiceCard';
import ProcessTimeline from '../components/ProcessTimeline';
import CaseStudiesSection from '../components/CaseStudiesSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import { Code2, ArrowRight, CheckCircle2, X } from 'lucide-react';

interface SoftwarePageProps {
  onNavigate: (page: PageId, prefill?: string) => void;
}

export default function SoftwarePage({ onNavigate }: SoftwarePageProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="bg-white">
      {/* 1. Hero Band: Dark Navy (#0A1F44) */}
      <section
        aria-label="Software & Automation Overview"
        className="bg-[#0A1F44] text-white py-16 sm:py-20 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/60 border border-indigo-800/80 px-3 py-1 rounded">
                Division B Practice
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Custom enterprise software &amp; workflow automation.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                We design and engineer bespoke web platforms, multi-tenant SaaS architectures, applied AI copilots,
                and background process automations that eliminate manual operational bottlenecks.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'I would like to discuss a custom software or automation initiative.')}
                  className="min-h-[44px] inline-flex items-center justify-center bg-[#4338CA] hover:bg-[#3730a3] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Discuss a Software Initiative</span>
                </button>

                <a
                  href="#software-capabilities-grid"
                  className="min-h-[44px] inline-flex items-center justify-center text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-indigo-400 transition-colors"
                >
                  View All 6 Software Capabilities ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                  alt="Software developer workstation displaying enterprise code"
                  className="w-full h-[300px] sm:h-[340px] object-cover"
                  loading="eager"
                />
                <div className="p-3 bg-slate-900/95 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Software Architecture &amp; Development</span>
                  <span>[Photo: Replace with client asset]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Exactly 6 Software Service Cards in Balanced 3-Col Desktop / 2-Col Tablet / 1-Col Mobile Grid */}
      <section
        id="software-capabilities-grid"
        aria-labelledby="software-grid-heading"
        className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="software-grid-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4"
            >
              Enterprise software engineering suite
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Engineered with modern TypeScript, Go, and React frameworks, complete test coverage, and 100% intellectual property assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServicesList.map((service) => (
              <EnterpriseServiceCard
                key={service.id}
                service={service}
                onSelect={(svc) => setSelectedService(svc)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4-Stage Agile Software Process Timeline */}
      <ProcessTimeline
        steps={softwareProcessSteps}
        division="software"
        title="Our Agile Engineering &amp; Delivery Lifecycle"
        subtitle="Transparent bi-weekly sprint reviews, automated test harnesses, and continuous integration into client repositories."
      />

      {/* 4. Software-Focused Case Studies */}
      <CaseStudiesSection onNavigate={onNavigate} filterDivision="software" />

      {/* 5. Software Technical FAQ */}
      <FaqSection division="software" />

      {/* 6. Contact CTA Band: Dark Navy (#0A1F44) */}
      <ContactSection
        divisionTheme="software"
        prefillMessage="I am interested in Custom Software Development, SaaS, or Workflow Automation."
      />

      {/* Scope Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="bg-white rounded-lg max-w-xl w-full p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="min-w-[44px] min-h-[44px] absolute top-4 right-4 flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-indigo-50 text-[#4338CA] border border-indigo-200 inline-block mb-3">
              {selectedService.categoryLabel}
            </span>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{selectedService.title}</h3>
            <p className="text-sm text-slate-600 mb-6 font-normal">{selectedService.description}</p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <span className="text-xs font-semibold uppercase text-slate-500 mb-2 block tracking-wider">
                Inclusions:
              </span>
              <ul className="space-y-2 text-sm text-slate-700">
                {selectedService.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4338CA] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  onNavigate('contact', `Inquiry regarding: ${selectedService.title}`);
                }}
                className="min-h-[44px] flex-1 py-2.5 px-5 rounded-lg bg-[#4338CA] hover:bg-[#3730a3] text-white font-semibold text-sm transition-colors"
              >
                Request Architecture Brief
              </button>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="min-h-[44px] px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
