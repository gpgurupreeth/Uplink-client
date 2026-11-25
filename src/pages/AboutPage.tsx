import React from 'react';
import type { PageId } from '../types';
import { ShieldCheck, Server, Code2, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-white text-[#0F172A]">
      {/* 1. HERO SECTION: Light with real corporate photography */}
      <section
        aria-label="About Uplink Enterprises"
        className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded">
                Corporate Overview
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
                Uniting infrastructure governance and custom software engineering.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Uplink Enterprises was established to eliminate the traditional divide between managed IT maintenance
                and bespoke software development. We provide enterprise organizations with a single, accountable
                technology partner across cloud infrastructure and custom software.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
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
                  onClick={() => onNavigate('quiz')}
                  className="min-h-[44px] inline-flex items-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  <span>Take Assessment Quiz</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise engineering team collaborating in corporate office"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                  loading="eager"
                />
                <div className="p-3 bg-white border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                  <span>Executive Technology Leadership</span>
                  <span>[Photo: Replace with client asset]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE OPERATIONAL PILLARS (Clean light cards) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              Our core operational principles
            </h2>
            <p className="text-base text-slate-600 font-normal">
              How our teams structure engagements, maintain code transparency, and govern delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-[#F8FAFC] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-teal-50 text-[#0E7490] border border-teal-200 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Single-Vendor Accountability</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  We eliminate finger-pointing between infrastructure vendors and software contractors by providing
                  cohesive architecture design, continuous monitoring, and application support under one roof.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-[#F8FAFC] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-indigo-50 text-[#4338CA] border border-indigo-200 flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">100% IP &amp; Code Assignment</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  All custom code, database structures, and cloud configuration files are committed directly to
                  client-owned repositories. We do not impose proprietary vendor lock-in or recurring runtime royalties.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-[#F8FAFC] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#0B3D91] border border-blue-200 flex items-center justify-center mb-6">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Multinational Governance</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Every solution is engineered to satisfy enterprise security audits, compliance standards, and
                  formal change-control procedures required by regulated industry leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL DIVISION SYNERGY MATRIX */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E7490] block mb-2">
                Division A: IT Services &amp; Infrastructure
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                Cloud architecture &amp; technical operations
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                Focused on enterprise cloud migration, zero-trust network boundaries, disaster recovery, and 24/7 proactive Tier-3 NOC operations.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0E7490]" />
                  <span>Multi-cloud VPC topologies &amp; Terraform automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0E7490]" />
                  <span>Continuous 24/7/365 infrastructure telemetry monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0E7490]" />
                  <span>Network micro-segmentation and access control audits</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4338CA] block mb-2">
                Division B: Software &amp; Automation
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                Bespoke software &amp; autonomous workflows
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                Focused on custom web platforms, multi-tenant SaaS engineering, event-driven process automation, and CRM/ERP data synchronization.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4338CA]" />
                  <span>Custom enterprise software &amp; multi-tenant SaaS architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4338CA]" />
                  <span>Autonomous RPA and cross-system event stream queues</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4338CA]" />
                  <span>Bi-directional ERP, CRM, and database sync middleware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION (Accenture style light CTA) */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Partner with an integrated technology practice
          </h2>
          <p className="text-slate-600 text-base mb-8">
            Speak directly with a solutions architect to review your technical scope or roadmap requirements.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="min-h-[44px] inline-flex items-center gap-2 bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold px-8 py-3.5 rounded-lg text-base shadow-sm transition-colors"
          >
            <span>Request Initial Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
