import React, { useState } from 'react';
import type { PageId } from '../types';
import {
  ArrowRight,
  Server,
  Code2,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
  Layers,
  Cpu,
} from 'lucide-react';

interface InteractiveSplitHeroProps {
  onNavigate: (page: PageId) => void;
}

export default function InteractiveSplitHero({ onNavigate }: InteractiveSplitHeroProps) {
  // Active vertical expansion: 'it' | 'software' | null
  const [activeVertical, setActiveVertical] = useState<'it' | 'software' | null>(null);

  return (
    <section
      id="hero"
      aria-label="Uplink Enterprises Dual Technological Divisions"
      className="relative bg-[#070D1E] text-white overflow-hidden border-b border-[#1E294B]"
    >
      {/* Page H1: Exactly one per document for strict SEO */}
      <h1 className="sr-only">
        Uplink Enterprises — Enterprise IT Services &amp; Custom Software Automation
      </h1>

      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" aria-hidden="true" />

      {/* Central Floating Discovery Quiz Bridge (Sticky Banner / Floating Pill) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => onNavigate('quiz')}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#101A38] hover:bg-[#162248] border border-[#1E294B] hover:border-slate-500 shadow-xl text-slate-200 text-xs sm:text-sm font-medium transition-all group focus-visible:ring-2 focus-visible:ring-[#6366F1]"
          >
            <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>Not sure which division fits your needs?</span>
            <span className="font-semibold text-white group-hover:text-amber-300 underline underline-offset-2 flex items-center gap-1">
              Take the 60-Second Quiz <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Split Dual-Path Screen Container */}
      <div className="relative z-10 w-full min-h-[680px] lg:min-h-[760px] flex flex-col lg:flex-row">
        {/* =========================================================================
            LEFT VERTICAL: IT SERVICES (TEAL / CYAN IDENTITY)
            Structured grid, network mesh, infrastructure resilience
           ========================================================================= */}
        <div
          onMouseEnter={() => setActiveVertical('it')}
          onMouseLeave={() => setActiveVertical(null)}
          className={`flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#1E294B] transition-all duration-500 relative ${
            activeVertical === 'it'
              ? 'lg:flex-[1.15] bg-[#0A1630]'
              : activeVertical === 'software'
              ? 'lg:flex-[0.85] bg-[#070D1E]'
              : 'bg-[#081024]'
          }`}
        >
          {/* Teal ambient radial illumination */}
          <div
            className={`absolute top-0 left-0 w-96 h-96 bg-[#14B8A6]/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
              activeVertical === 'it' ? 'opacity-100' : 'opacity-40'
            }`}
            aria-hidden="true"
          />

          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 text-[#2DD4BF] font-mono text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Server className="w-3.5 h-3.5 text-[#2DD4BF]" aria-hidden="true" />
              <span>DIVISION A • IT SERVICES</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Modernize, secure, and support your infrastructure.
            </h2>

            {/* One-Line Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              Zero-downtime cloud migrations, enterprise network micro-segmentation, and dedicated 24/7 Tier-3 NOC operations for mission-critical reliability.
            </p>

            {/* Core Capabilities Preview Pills */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-lg">
              {[
                'Cloud Architecture',
                'Zero-Trust Security',
                '24/7 Managed NOC',
                'IT Consulting & vCIO',
                'Web & Mobile Portals',
                'UI/UX Design Systems',
              ].map((capability) => (
                <span
                  key={capability}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium text-slate-200 bg-[#101A38] border border-[#1E294B]"
                >
                  {capability}
                </span>
              ))}
            </div>

            {/* Key Value Metric Badges */}
            <div className="grid grid-cols-2 gap-3 mb-10 max-w-md">
              <div className="p-3 rounded-lg bg-[#101A38]/70 border border-[#1E294B]">
                <p className="text-xl font-extrabold text-[#2DD4BF] font-mono">&lt; 15 min</p>
                <p className="text-xs text-slate-400">Guaranteed Incident Response</p>
              </div>
              <div className="p-3 rounded-lg bg-[#101A38]/70 border border-[#1E294B]">
                <p className="text-xl font-extrabold text-[#2DD4BF] font-mono">SOC2 / ISO</p>
                <p className="text-xs text-slate-400">Compliance Readiness</p>
              </div>
            </div>

            {/* CTA Button Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('it-services')}
                aria-label="Explore IT Services in depth"
                className="inline-flex items-center gap-2.5 bg-[#14B8A6] hover:bg-[#2DD4BF] text-[#070D1E] font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-lg shadow-[#14B8A6]/20 transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14B8A6] focus-visible:ring-offset-[#070D1E]"
              >
                <span>Explore IT Services</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-[#14B8A6] transition-colors"
              >
                Schedule Infrastructure Audit →
              </button>
            </div>
          </div>

          {/* Interactive Network Mesh Motif Footer */}
          <div className="mt-12 pt-6 border-t border-[#1E294B] flex items-center justify-between" aria-hidden="true">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#101A38] border border-[#1E294B] flex items-center justify-center text-[#2DD4BF]">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Mesh Topology</p>
                <p className="text-xs text-slate-300 font-medium">Multi-Region Redundancy</p>
              </div>
            </div>

            {/* Custom SVG Interlocking Network Nodes */}
            <svg className="w-28 h-8 text-[#14B8A6]/60" viewBox="0 0 120 32" fill="none">
              <line x1="10" y1="16" x2="45" y2="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="45" y1="16" x2="80" y2="16" stroke="currentColor" strokeWidth="1.5" />
              <line x1="80" y1="16" x2="110" y2="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="10" cy="16" r="4" fill="#070D1E" stroke="#14B8A6" strokeWidth="2" />
              <circle cx="45" cy="16" r="4" fill="#14B8A6" />
              <circle cx="80" cy="16" r="4" fill="#070D1E" stroke="#14B8A6" strokeWidth="2" />
              <circle cx="110" cy="16" r="4" fill="#14B8A6" />
            </svg>
          </div>
        </div>

        {/* =========================================================================
            RIGHT VERTICAL: SOFTWARE & AUTOMATION (INDIGO / VIOLET IDENTITY)
            Flowing pipelines, event streams, algorithmic intelligence
           ========================================================================= */}
        <div
          onMouseEnter={() => setActiveVertical('software')}
          onMouseLeave={() => setActiveVertical(null)}
          className={`flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-14 transition-all duration-500 relative ${
            activeVertical === 'software'
              ? 'lg:flex-[1.15] bg-[#0E1130]'
              : activeVertical === 'it'
              ? 'lg:flex-[0.85] bg-[#070D1E]'
              : 'bg-[#080E24]'
          }`}
        >
          {/* Indigo ambient radial illumination */}
          <div
            className={`absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
              activeVertical === 'software' ? 'opacity-100' : 'opacity-40'
            }`}
            aria-hidden="true"
          />

          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#818CF8] font-mono text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Code2 className="w-3.5 h-3.5 text-[#818CF8]" aria-hidden="true" />
              <span>DIVISION B • SOFTWARE &amp; AUTOMATION</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Automate, integrate, and scale your operations.
            </h2>

            {/* One-Line Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              Bespoke distributed applications, autonomous event-driven RPA pipelines, and enterprise CRM/ERP integrations built to eliminate bottlenecks.
            </p>

            {/* Core Capabilities Preview Pills */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-lg">
              {[
                'Custom Enterprise Software',
                'Multi-Tenant SaaS',
                'Process Automation (BPA)',
                'Private AI Copilots',
                'Event-Driven RPA',
                'CRM / ERP Sync',
              ].map((capability) => (
                <span
                  key={capability}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium text-slate-200 bg-[#101A38] border border-[#1E294B]"
                >
                  {capability}
                </span>
              ))}
            </div>

            {/* Key Value Metric Badges */}
            <div className="grid grid-cols-2 gap-3 mb-10 max-w-md">
              <div className="p-3 rounded-lg bg-[#101A38]/70 border border-[#1E294B]">
                <p className="text-xl font-extrabold text-[#818CF8] font-mono">60%–80%</p>
                <p className="text-xs text-slate-400">Manual Task Reduction</p>
              </div>
              <div className="p-3 rounded-lg bg-[#101A38]/70 border border-[#1E294B]">
                <p className="text-xl font-extrabold text-[#818CF8] font-mono">100%</p>
                <p className="text-xs text-slate-400">Source Code Ownership</p>
              </div>
            </div>

            {/* CTA Button Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('software-automation')}
                aria-label="Explore Software and Automation in depth"
                className="inline-flex items-center gap-2.5 bg-[#6366F1] hover:bg-[#818CF8] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-lg shadow-[#6366F1]/25 transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-[#070D1E]"
              >
                <span>Explore Software &amp; Automation</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-[#6366F1] transition-colors"
              >
                Discuss Architecture Blueprint →
              </button>
            </div>
          </div>

          {/* Interactive Pipeline Waveform Motif Footer */}
          <div className="mt-12 pt-6 border-t border-[#1E294B] flex items-center justify-between" aria-hidden="true">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#101A38] border border-[#1E294B] flex items-center justify-center text-[#818CF8]">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Event Stream</p>
                <p className="text-xs text-slate-300 font-medium">Asynchronous Pipeline</p>
              </div>
            </div>

            {/* Custom SVG Pipeline Nodes */}
            <svg className="w-28 h-8 text-[#6366F1]/60" viewBox="0 0 120 32" fill="none">
              <rect x="6" y="8" width="16" height="16" rx="3" stroke="#6366F1" strokeWidth="1.5" fill="#070D1E" />
              <path d="M22 16H46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <rect x="46" y="8" width="16" height="16" rx="3" stroke="#6366F1" strokeWidth="1.5" fill="#070D1E" />
              <path d="M62 16H86" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="92,8 106,16 92,24" stroke="#6366F1" strokeWidth="1.5" fill="#070D1E" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
