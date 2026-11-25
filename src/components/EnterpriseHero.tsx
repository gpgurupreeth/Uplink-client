import React from 'react';
import type { PageId } from '../types';
import { ArrowRight, Server, Code2, CheckCircle2 } from 'lucide-react';

interface EnterpriseHeroProps {
  onNavigate: (page: PageId, prefill?: string) => void;
}

/**
 * Executive Hero Section conforming strictly to the visual direction:
 * - Dark navy (#0A1F44) hero band
 * - Full-width split layout with text and value statement on left, real photography on right
 * - Two clear, equal-weight panels for the dual-path choice (IT Services vs Software & Automation)
 * - Sentence case headings, no glows, no neon, no blobs
 */
export default function EnterpriseHero({ onNavigate }: EnterpriseHeroProps) {
  return (
    <section
      id="hero"
      aria-label="Uplink Enterprises Technology Practice Overview"
      className="bg-[#0A1F44] text-white py-16 sm:py-20 lg:py-24 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict single H1 for the page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 border-b border-slate-800/80">
          {/* Left Column: Heading and Overview */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800/80 px-3 py-1 rounded">
              Enterprise Technology Partner
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Enterprise IT infrastructure and custom software engineering.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Uplink Enterprises partners with multinational organizations to modernize cloud architecture,
              enforce zero-trust network security, and build bespoke distributed software and automation platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="min-h-[44px] inline-flex items-center justify-center bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold text-base px-6 py-3 rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get a Quote</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('quiz')}
                className="min-h-[44px] inline-flex items-center justify-center bg-transparent hover:bg-white/10 border border-slate-600 text-white font-semibold text-base px-6 py-3 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Take the 60-Second Quiz</span>
              </button>
            </div>
          </div>

          {/* Right Column: Real-Looking Corporate Technology Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
                alt="Enterprise technology operations center with engineering monitors"
                className="w-full h-[320px] sm:h-[380px] object-cover"
                loading="eager"
              />
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Enterprise Technology Operations</span>
                <span className="text-slate-400">[Photo: Replace with client asset]</span>
              </div>
            </div>
          </div>
        </div>

        {/* DUAL-PATH CHOICE: TWO CLEAR, EQUAL-WEIGHT PANELS */}
        <div className="pt-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Select your organization's primary requirement
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Choose an area of focus below to explore our dedicated capabilities and methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Panel 1: IT Services (Equal Weight) */}
            <div className="bg-white text-[#0F172A] rounded-lg p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-200 text-[#0E7490] flex items-center justify-center mb-6">
                  <Server className="w-6 h-6" aria-hidden="true" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#0E7490] mb-2">
                  Division A
                </div>

                <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                  IT Services &amp; Infrastructure
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Modernize enterprise cloud architecture, secure network perimeters, and maintain system continuity
                  with dedicated 24/7 technical operations.
                </p>

                <ul className="space-y-2.5 mb-8 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E7490] flex-shrink-0 mt-0.5" />
                    <span>Cloud architecture &amp; migration (AWS, Azure, GCP)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E7490] flex-shrink-0 mt-0.5" />
                    <span>Network engineering &amp; zero-trust security perimeters</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E7490] flex-shrink-0 mt-0.5" />
                    <span>24/7 Managed NOC and enterprise helpdesk support</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('it-services')}
                  className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 bg-[#0E7490] hover:bg-[#155e75] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#0E7490]"
                >
                  <span>Explore IT Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Panel 2: Software & Automation (Equal Weight) */}
            <div className="bg-white text-[#0F172A] rounded-lg p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-200 text-[#4338CA] flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" aria-hidden="true" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#4338CA] mb-2">
                  Division B
                </div>

                <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                  Software &amp; Automation
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Build bespoke web platforms, multi-tenant SaaS products, and automate complex cross-system
                  business workflows to eliminate operational delays.
                </p>

                <ul className="space-y-2.5 mb-8 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4338CA] flex-shrink-0 mt-0.5" />
                    <span>Custom enterprise software &amp; web application development</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4338CA] flex-shrink-0 mt-0.5" />
                    <span>Business process automation (BPA) &amp; background RPA</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4338CA] flex-shrink-0 mt-0.5" />
                    <span>Enterprise CRM &amp; ERP bi-directional synchronization</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('software-automation')}
                  className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 bg-[#4338CA] hover:bg-[#3730a3] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#4338CA]"
                >
                  <span>Explore Software &amp; Automation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
