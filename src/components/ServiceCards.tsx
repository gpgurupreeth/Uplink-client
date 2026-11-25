import React, { useState } from 'react';
import {
  Server,
  ShieldCheck,
  Headphones,
  Code2,
  Workflow,
  Cpu,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  X,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: 'it' | 'software';
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  detailedSpecs: string[];
  deliverable: string;
}

const services: ServiceItem[] = [
  // 3 IT CARDS (TEAL ACCENT)
  {
    id: 'it-cloud-infra',
    category: 'it',
    categoryLabel: 'IT Infrastructure',
    icon: Server,
    title: 'Managed Cloud & Hybrid Infrastructure',
    description:
      'Multi-cloud migrations and automated architecture engineering designed for high availability. We deliver zero-downtime scalability across AWS, Google Cloud, and private enterprise clusters.',
    detailedSpecs: [
      'Multi-region failover configuration and automated DR backups',
      'Kubernetes cluster orchestration and infrastructure-as-code (Terraform)',
      'Enterprise cloud cost optimization reducing waste by up to 35%',
    ],
    deliverable: '99.99% SLA Cloud Architecture & 24/7 Observability',
  },
  {
    id: 'it-security',
    category: 'it',
    categoryLabel: 'Security & Compliance',
    icon: ShieldCheck,
    title: 'Zero-Trust Cybersecurity & Compliance',
    description:
      'Continuous threat intelligence, SIEM monitoring, and strict zero-trust boundary governance. Protect proprietary IP and satisfy strict SOC2 Type II, HIPAA, and ISO 27001 regulatory standards.',
    detailedSpecs: [
      'Automated vulnerability penetration testing and code security audits',
      'Next-generation identity access management (IAM) and least-privilege policies',
      'Real-time ransomware defense and incident mitigation within 15 minutes',
    ],
    deliverable: 'Comprehensive Compliance Certification & Threat Defense',
  },
  {
    id: 'it-noc',
    category: 'it',
    categoryLabel: 'Managed Operations',
    icon: Headphones,
    title: '24/7 Tier-3 NOC & Unified Helpdesk',
    description:
      'Round-the-clock proactive monitoring, automated ticket triage, and white-glove support for hybrid workforces. Minimize operational friction with guaranteed rapid SLAs and dedicated systems engineers.',
    detailedSpecs: [
      'Direct access to senior Tier-2 and Tier-3 engineers with zero bureaucracy',
      'Automated health checks across all company endpoints and servers',
      'Custom escalations matrix integrated directly into your Slack or Teams',
    ],
    deliverable: '15-Minute Guaranteed Incident Response SLA',
  },

  // 3 SOFTWARE CARDS (INDIGO ACCENT)
  {
    id: 'sw-custom-apps',
    category: 'software',
    categoryLabel: 'Software Engineering',
    icon: Code2,
    title: 'Custom Web & Enterprise Mobile Platforms',
    description:
      'High-throughput web applications and native mobile experiences engineered for complex enterprise workflows. We architect resilient systems with React, Next.js, Node.js, and distributed backends.',
    detailedSpecs: [
      'Modern, accessible user interfaces meeting strict WCAG 2.1 AA standards',
      'Sub-second query optimization and high-concurrency database models',
      'Strict automated testing coverage (unit, integration, and E2E)',
    ],
    deliverable: 'Production-Ready Enterprise Platform & Source Code Ownership',
  },
  {
    id: 'sw-automation',
    category: 'software',
    categoryLabel: 'Process Automation',
    icon: Workflow,
    title: 'Enterprise Workflow & Intelligent RPA',
    description:
      'Eliminate manual data bottlenecks through custom orchestration engines and asynchronous task queues. We automate complex cross-departmental operations to accelerate output and cut human error.',
    detailedSpecs: [
      'Automated document parsing, validation, and multi-tier approval routing',
      'Real-time transactional synchronization across legacy and modern tools',
      'Custom webhook triggers and queue back-pressure management',
    ],
    deliverable: 'Autonomous Operational Pipelines & Executive Analytics',
  },
  {
    id: 'sw-apis-modernization',
    category: 'software',
    categoryLabel: 'Systems Modernization',
    icon: Cpu,
    title: 'API Architecture & Legacy Modernization',
    description:
      'Bridge siloed systems by wrapping legacy mainframes and databases in modern, secure REST and GraphQL APIs. Transition safely to microservices without risking operational downtime.',
    detailedSpecs: [
      'Zero-downtime database schema migration and streaming data replication',
      'Enterprise API gateway design with rate limiting and OAuth2/mTLS',
      'Comprehensive OpenAPI documentation and developer SDK generation',
    ],
    deliverable: 'Modular Microservices Architecture & Modern Developer Portal',
  },
];

export default function ServiceCards() {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <span>Core Competencies</span>
          </div>

          <h2
            id="capabilities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4"
          >
            Our Capabilities
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Delivering robust technological infrastructure and tailor-made software solutions engineered for scalability,
            security, and measurable operational efficiency.
          </p>
        </div>

        {/* 3-Column Desktop Grid / 1-Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isIT = service.category === 'it';

            return (
              <article
                key={service.id}
                className="group bg-white rounded-[12px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
              >
                {/* Top Accent Strip on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-[12px] transition-all duration-300 ${
                    isIT
                      ? 'bg-transparent group-hover:bg-[#14B8A6]'
                      : 'bg-transparent group-hover:bg-[#6366F1]'
                  }`}
                  aria-hidden="true"
                />

                <div>
                  {/* Category & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                        isIT
                          ? 'bg-[#14B8A6]/10 text-[#14B8A6] group-hover:bg-[#14B8A6] group-hover:text-white'
                          : 'bg-[#6366F1]/10 text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    <span
                      className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md border ${
                        isIT
                          ? 'text-[#0d9488] bg-[#14B8A6]/5 border-[#14B8A6]/20'
                          : 'text-[#4f46e5] bg-[#6366F1]/5 border-[#6366F1]/20'
                      }`}
                    >
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Card Title (H3) */}
                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-3 group-hover:text-[#0A1128]">
                    {service.title}
                  </h3>

                  {/* 2-Sentence Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action: Learn More */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModal(service)}
                    aria-label={`Learn more about ${service.title}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 ${
                      isIT
                        ? 'text-[#0d9488] hover:text-[#0f766e]'
                        : 'text-[#4f46e5] hover:text-[#4338ca]'
                    }`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="#contact"
                    className="text-xs font-mono text-slate-400 hover:text-slate-700"
                    aria-label={`Get quote for ${service.title}`}
                  >
                    Inquire →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal for Service Deep Dive */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-[12px] max-w-lg w-full p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span
                className={`font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${
                  activeModal.category === 'it'
                    ? 'bg-[#14B8A6]/10 text-[#0d9488]'
                    : 'bg-[#6366F1]/10 text-[#4f46e5]'
                }`}
              >
                {activeModal.categoryLabel}
              </span>
            </div>

            <h3 id="modal-title" className="text-2xl font-bold text-[#0F172A] mb-3">
              {activeModal.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              {activeModal.description}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
              <p className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Key Technical Specifications:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {activeModal.detailedSpecs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        activeModal.category === 'it' ? 'text-[#14B8A6]' : 'text-[#6366F1]'
                      }`}
                    />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-4">
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                className={`flex-1 inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-5 rounded-lg text-sm shadow transition-all ${
                  activeModal.category === 'it'
                    ? 'bg-[#14B8A6] hover:bg-[#0d9488]'
                    : 'bg-[#6366F1] hover:bg-[#4f46e5]'
                }`}
              >
                <span>Request Custom Scope</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors"
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
