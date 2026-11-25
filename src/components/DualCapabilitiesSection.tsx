import React, { useState } from 'react';
import type { ServiceItem, PageId } from '../types';
import { itServicesList, softwareServicesList } from '../data/content';
import EnterpriseServiceCard from './EnterpriseServiceCard';
import { Server, Code2, Layers, X, CheckCircle2, ArrowRight } from 'lucide-react';

interface DualCapabilitiesProps {
  onNavigate: (page: PageId) => void;
}

export default function DualCapabilitiesSection({ onNavigate }: DualCapabilitiesProps) {
  // Tab state: 'featured' | 'it' | 'software'
  // Note: Exactly 6 items in every view so a 3-column desktop / 2-column tablet / 1-column mobile
  // grid is ALWAYS completely filled with zero awkward empty cells!
  const [activeTab, setActiveTab] = useState<'featured' | 'it' | 'software'>('featured');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const displayedServices: ServiceItem[] =
    activeTab === 'it'
      ? itServicesList
      : activeTab === 'software'
      ? softwareServicesList
      : [...itServicesList.slice(0, 3), ...softwareServicesList.slice(0, 3)];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded mb-3">
            Core Technological Capabilities
          </span>

          <h2
            id="capabilities-heading"
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4"
          >
            Capabilities across both enterprise divisions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether your focus is mission-critical infrastructure stability or high-velocity custom software,
            our teams operate with multinational governance and delivery discipline.
          </p>

          {/* Division Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 rounded-lg bg-white border border-slate-200 max-w-md mx-auto shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('featured')}
              className={`flex-1 min-h-[40px] py-1.5 px-3 rounded-md text-sm font-semibold transition-colors ${
                activeTab === 'featured'
                  ? 'bg-[#0B3D91] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0B3D91]'
              }`}
            >
              Featured (6)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('it')}
              className={`flex-1 min-h-[40px] py-1.5 px-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'it'
                  ? 'bg-[#0E7490] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0E7490]'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>IT Services</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('software')}
              className={`flex-1 min-h-[40px] py-1.5 px-3 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'software'
                  ? 'bg-[#4338CA] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#4338CA]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Software</span>
            </button>
          </div>
        </div>

        {/* 3 Columns Desktop / 2 Columns Tablet / 1 Column Mobile (Always Full Width, Zero Empty Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <EnterpriseServiceCard
              key={service.id}
              service={service}
              onSelect={(svc) => setSelectedService(svc)}
            />
          ))}
        </div>

        {/* Direct Link to Dedicated Pages */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
            <span className="text-sm text-slate-600">Need specific documentation?</span>
            <button
              type="button"
              onClick={() => onNavigate('it-services')}
              className="text-sm font-semibold text-[#0E7490] hover:underline"
            >
              View IT Services Practice →
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={() => onNavigate('software-automation')}
              className="text-sm font-semibold text-[#4338CA] hover:underline"
            >
              View Software &amp; Automation Practice →
            </button>
          </div>
        </div>
      </div>

      {/* SERVICE SCOPE MODAL */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="bg-white rounded-lg max-w-xl w-full p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="min-w-[44px] min-h-[44px] absolute top-4 right-4 flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 inline-block mb-3">
              {selectedService.categoryLabel}
            </span>

            <h3 id="modal-service-title" className="text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
              {selectedService.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              {selectedService.description}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-xs font-semibold uppercase text-slate-500 mb-3 tracking-wider">
                Technical inclusions:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {selectedService.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded border border-slate-200 bg-white">
                <span className="text-xs text-slate-500 block">Deliverable</span>
                <span className="text-xs font-semibold text-slate-800 mt-1 block">
                  {selectedService.deliverable}
                </span>
              </div>
              <div className="p-3 rounded border border-slate-200 bg-white">
                <span className="text-xs text-slate-500 block">Typical timeline</span>
                <span className="text-xs font-semibold text-slate-800 mt-1 block">
                  {selectedService.timeline}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  onNavigate('contact');
                }}
                className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors"
              >
                <span>Request Scope &amp; Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="min-h-[44px] px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
