import React from 'react';
import type { PageId } from '../types';
import EnterpriseHero from '../components/EnterpriseHero';
import EnterpriseStatsAndLogos from '../components/EnterpriseStatsAndLogos';
import DualCapabilitiesSection from '../components/DualCapabilitiesSection';
import DiscoveryQuiz from '../components/DiscoveryQuiz';
import ProcessTimeline from '../components/ProcessTimeline';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import { itProcessSteps } from '../data/content';
import { ArrowRight, Server, Code2, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, prefill?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* 1. Hero Band: Dark Navy (#0A1F44) with Split Layout & 2 Equal-Weight Panels */}
      <EnterpriseHero onNavigate={onNavigate} />

      {/* 2. Proof & Metric Benchmarks with Honest Placeholders */}
      <EnterpriseStatsAndLogos />

      {/* 3. Dual-Vertical Capabilities Grid (6 Cards, 3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile) */}
      <DualCapabilitiesSection onNavigate={onNavigate} />

      {/* 4. Strategic Advantage Section (Light Theme with Real Corporate Photography) */}
      <section
        aria-labelledby="synergy-heading"
        className="py-20 lg:py-24 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded">
                The Dual-Practice Model
              </span>

              <h2
                id="synergy-heading"
                className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight"
              >
                Why enterprise leaders avoid managing separate infrastructure and software vendors
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Traditional IT outsourcing providers maintain infrastructure but lack custom engineering capabilities.
                Conversely, software agencies write applications without deep expertise in multi-region failover, network
                segmentation, or 24/7 Tier-3 monitoring.
              </p>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Uplink Enterprises unites both domains. We engineer the underlying cloud architecture, lock down the
                security perimeter, and build the custom software applications that run on top of it.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="min-h-[44px] inline-flex items-center gap-2 bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm"
                >
                  <span>Request an Executive Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="min-h-[44px] inline-flex items-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  <span>Read About Our Methodology</span>
                </button>
              </div>
            </div>

            {/* Right Column: Real Corporate Photography */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise systems architecture team reviewing technical roadmap"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Architecture &amp; Engineering Operations</span>
                  <span>[Photo: Replace with client asset]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Discovery Quiz (Light Theme with Progress Bar) */}
      <DiscoveryQuiz onNavigate={onNavigate} />

      {/* 6. Case Studies (Honest Metrics, Real Photography) */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 7. Executive Testimonials (Honest Placeholders) */}
      <TestimonialsSection />

      {/* 8. Technical FAQ */}
      <FaqSection division="all" />

      {/* 9. Contact CTA Band: Dark Navy (#0A1F44) */}
      <ContactSection />
    </div>
  );
}
