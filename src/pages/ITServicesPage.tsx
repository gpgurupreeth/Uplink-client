import React, { useState } from 'react';
import type { PageId, ServiceItem } from '../types';
import { itServicesList, itProcessSteps } from '../data/content';
import EnterpriseServiceCard from '../components/EnterpriseServiceCard';
import ProcessTimeline from '../components/ProcessTimeline';
import CaseStudiesSection from '../components/CaseStudiesSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import { Server, ArrowRight, CheckCircle2, X } from 'lucide-react';

interface ITServicesPageProps {
  onNavigate: (page: PageId, prefill?: string) => void;
}

export default function ITServicesPage({ onNavigate }: ITServicesPageProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="bg-white">
      {/* 1. Hero Band: Dark Navy (#0A1F44) */}
      <section
        aria-label="IT Services & Infrastructure Overview"
        className="bg-[#0A1F44] text-white py-16 sm:py-20 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800/80 px-3 py-1 rounded">
                Division A Practice
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Enterprise IT services &amp; cloud infrastructure.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                We engineer reliable multi-cloud environments, configure zero-trust network perimeters,
                and provide 24/7 proactive Tier-3 NOC support for distributed enterprise operations.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'I would like to request an IT Infrastructure consultation.')}
                  className="min-h-[44px] inline-flex items-center justify-center bg-[#0E7490] hover:bg-[#155e75] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Request Infrastructure Consultation</span>
                </button>

                <a
                  href="#it-capabilities-grid"
                  className="min-h-[44px] inline-flex items-center justify-center text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-teal-400 transition-colors"
                >
                  View All 6 Core IT Capabilities ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise server room in modern data center"
                  className="w-full h-[300px] sm:h-[340px] object-cover"
                  loading="eager"
                />
                <div className="p-3 bg-slate-900/95 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Cloud &amp; Network Infrastructure</span>
                  <span>[Photo: Replace with client asset]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Exactly 6 IT Service Cards in Balanced 3-Col Desktop / 2-Col Tablet / 1-Col Mobile Grid */}
      <section
        id="it-capabilities-grid"
        aria-labelledby="it-grid-heading"
        className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="it-grid-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4"
            >
              Core IT infrastructure capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Structured to provide complete operational coverage across cloud, network, and end-user support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServicesList.map((service) => (
              <EnterpriseServiceCard
                key={service.id}
                service={service}
                onSelect={(svc) => setSelectedService(svc)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4-Stage IT Process Timeline */}
      <ProcessTimeline
        steps={itProcessSteps}
        division="it"
        title="Our Infrastructure Migration &amp; Hardening Framework"
        subtitle="A phased, four-stage methodology with documented rollback safeguards and verification checks."
      />

      {/* 4. IT-Focused Case Studies */}
      <CaseStudiesSection onNavigate={onNavigate} filterDivision="it" />

      {/* 5. IT Technical FAQ */}
      <FaqSection division="it" />

      {/* 6. Contact CTA Band: Dark Navy (#0A1F44) */}
      <ContactSection
        divisionTheme="it"
        prefillMessage="I am interested in Uplink's IT Infrastructure & Managed Cloud Services."
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

            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-teal-50 text-[#0E7490] border border-teal-200 inline-block mb-3">
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
                    <CheckCircle2 className="w-4 h-4 text-[#0E7490] flex-shrink-0 mt-0.5" />
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
                className="min-h-[44px] flex-1 py-2.5 px-5 rounded-lg bg-[#0E7490] hover:bg-[#155e75] text-white font-semibold text-sm transition-colors"
              >
                Request Scope &amp; Pricing
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
