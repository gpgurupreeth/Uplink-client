import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Network, Workflow, CheckCircle2 } from 'lucide-react';

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<'it' | 'software' | null>(null);

  return (
    <section
      id="hero"
      aria-label="Uplink Enterprises Dual Capabilities"
      className="relative bg-[#0A1128] text-white overflow-hidden border-b border-slate-800"
    >
      {/* Strict SEO: Single H1 for the page */}
      <h1 className="sr-only">
        Uplink Enterprises — Enterprise IT Services &amp; Custom Software Automation
      </h1>

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full min-h-[680px] lg:min-h-[740px] flex flex-col lg:flex-row">
        {/* ================= LEFT SIDE: IT SERVICES ================= */}
        <div
          id="it-services"
          onMouseEnter={() => setHoveredSide('it')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-800/80 transition-all duration-500 relative ${
            hoveredSide === 'software' ? 'opacity-70 lg:scale-[0.995]' : 'opacity-100'
          } ${hoveredSide === 'it' ? 'bg-[#0f1b3d]/90 shadow-2xl' : 'bg-transparent'}`}
        >
          {/* Subtle Ambient Glow for IT (Teal) */}
          <div
            className={`absolute top-0 left-0 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
              hoveredSide === 'it' ? 'opacity-100' : 'opacity-40'
            }`}
            aria-hidden="true"
          />

          <div>
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/15 border border-[#14B8A6]/30 text-[#14B8A6] font-mono text-xs font-semibold tracking-widest uppercase mb-6">
              <Network className="w-3.5 h-3.5 text-[#14B8A6]" aria-hidden="true" />
              <span>IT SERVICES</span>
            </div>

            {/* Display Heading */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Modernize, secure, and support your business.
            </p>

            {/* Subtitle / Value Prop */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              Enterprise-grade infrastructure management, 24/7 security operations, zero-trust cloud migrations,
              and dedicated engineering support built for high-stakes compliance.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-lg">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0" aria-hidden="true" />
                <span>99.99% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0" aria-hidden="true" />
                <span>SOC2 &amp; ISO 27001 Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0" aria-hidden="true" />
                <span>Zero-Trust Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0" aria-hidden="true" />
                <span>24/7/365 Tier-3 NOC</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                aria-label="Consult with our IT Services team"
                className="inline-flex items-center gap-2.5 bg-[#14B8A6] hover:bg-[#0d9488] active:bg-[#0f766e] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-lg shadow-[#14B8A6]/20 transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14B8A6]"
              >
                <span>Explore IT Services</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#capabilities"
                aria-label="View IT infrastructure capabilities"
                className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-[#14B8A6] transition-colors"
              >
                View Infrastructure Deck
              </a>
            </div>
          </div>

          {/* Subtle SVG of Interlocking Infrastructure Nodes */}
          <div className="mt-12 pt-8 border-t border-slate-800/60 flex items-center justify-between" aria-hidden="true">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-md bg-slate-900/80 border border-slate-700/60 text-[#14B8A6]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Network Mesh</p>
                <p className="text-xs text-slate-300 font-medium">Multi-Region Cloud &amp; Edge</p>
              </div>
            </div>

            {/* Node Interlock Diagram */}
            <svg
              className="w-24 h-10 text-[#14B8A6]/40 overflow-visible"
              viewBox="0 0 100 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="10" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="30" y2="8" stroke="currentColor" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="70" y2="32" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="20" r="4" fill="#0A1128" stroke="#14B8A6" strokeWidth="2" />
              <circle cx="30" cy="8" r="3.5" fill="#14B8A6" />
              <circle cx="50" cy="20" r="5" fill="#0A1128" stroke="#14B8A6" strokeWidth="2" />
              <circle cx="70" cy="32" r="3.5" fill="#14B8A6" />
              <circle cx="90" cy="20" r="4" fill="#0A1128" stroke="#14B8A6" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* ================= RIGHT SIDE: SOFTWARE & AUTOMATION ================= */}
        <div
          id="software-automation"
          onMouseEnter={() => setHoveredSide('software')}
          onMouseLeave={() => setHoveredSide(null)}
          className={`flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 transition-all duration-500 relative ${
            hoveredSide === 'it' ? 'opacity-70 lg:scale-[0.995]' : 'opacity-100'
          } ${hoveredSide === 'software' ? 'bg-[#121438]/90 shadow-2xl' : 'bg-transparent'}`}
        >
          {/* Subtle Ambient Glow for Software (Indigo) */}
          <div
            className={`absolute top-0 right-0 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
              hoveredSide === 'software' ? 'opacity-100' : 'opacity-40'
            }`}
            aria-hidden="true"
          />

          <div>
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/15 border border-[#6366F1]/30 text-[#818cf8] font-mono text-xs font-semibold tracking-widest uppercase mb-6">
              <Workflow className="w-3.5 h-3.5 text-[#818cf8]" aria-hidden="true" />
              <span>SOFTWARE &amp; AUTOMATION</span>
            </div>

            {/* Display Heading */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Automate, integrate, and scale your operations.
            </p>

            {/* Subtitle / Value Prop */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              Custom software development, intelligent RPA workflows, legacy API modernization,
              and distributed cloud applications architected to eliminate operational bottlenecks.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-lg">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6366F1] flex-shrink-0" aria-hidden="true" />
                <span>Custom Microservices &amp; APIs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6366F1] flex-shrink-0" aria-hidden="true" />
                <span>Automated ETL &amp; Pipelines</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6366F1] flex-shrink-0" aria-hidden="true" />
                <span>Enterprise ERP/CRM Sync</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6366F1] flex-shrink-0" aria-hidden="true" />
                <span>Rapid Product Prototyping</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                aria-label="Build a product with our software team"
                className="inline-flex items-center gap-2.5 bg-[#6366F1] hover:bg-[#4f46e5] active:bg-[#4338ca] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-lg shadow-[#6366F1]/25 transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6366F1]"
              >
                <span>Explore Software &amp; Automation</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#capabilities"
                aria-label="Explore software case studies"
                className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-[#6366F1] transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Subtle SVG of Workflow Automation Nodes */}
          <div className="mt-12 pt-8 border-t border-slate-800/60 flex items-center justify-between" aria-hidden="true">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-md bg-slate-900/80 border border-slate-700/60 text-[#818cf8]">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Automated Pipeline</p>
                <p className="text-xs text-slate-300 font-medium">Event-Driven Orchestration</p>
              </div>
            </div>

            {/* Workflow Nodes Diagram */}
            <svg
              className="w-24 h-10 text-[#6366F1]/40 overflow-visible"
              viewBox="0 0 100 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="12" width="16" height="16" rx="3" stroke="#6366F1" strokeWidth="1.5" fill="#0A1128" />
              <path d="M22 20H42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <rect x="42" y="12" width="16" height="16" rx="3" stroke="#6366F1" strokeWidth="1.5" fill="#0A1128" />
              <path d="M58 20H78" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="84,12 94,20 84,28" stroke="#6366F1" strokeWidth="1.5" fill="#0A1128" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
