import React from 'react';
import { clientLogos } from '../data/content';
import { ShieldCheck, Activity, Users, Award } from 'lucide-react';

/**
 * Enterprise Proof & Client Grid Component:
 * - Clean light background (#FFFFFF and #F8FAFC)
 * - Honest placeholders clearly marked for client replacement
 * - 4 corporate benchmark cards
 * - 6 client logo placeholder cards
 */
export default function EnterpriseStatsAndLogos() {
  return (
    <section
      aria-label="Enterprise Proven Track Record and Client Network"
      className="bg-white border-b border-slate-200 py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FOUR CORPORATE BENCHMARK CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-14 border-b border-slate-200">
          {/* Metric 1 */}
          <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                Uptime Standard
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                [Add real SLA metric]
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
              e.g. 99.9% target infrastructure availability
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E7490] block mb-1">
                Incident Response
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                [Add real response SLA]
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
              e.g. Under 15-minute critical incident triage
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4338CA] block mb-1">
                Client Deployments
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                [Add real volume]
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
              e.g. Over 100 enterprise production deployments
            </p>
          </div>

          {/* Metric 4 */}
          <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                Compliance Standards
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                [Add real certifications]
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
              e.g. SOC2, HIPAA, or ISO alignment readiness
            </p>
          </div>
        </div>

        {/* CLIENT LOGO PLACEHOLDER GRID */}
        <div className="pt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-base font-semibold text-slate-700">
              Trusted by engineering and operational teams across enterprise sectors
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              [Client Logos: The cards below are clearly marked placeholders for client portfolio marks]
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="h-24 p-4 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col items-center justify-center text-center"
              >
                <span className="text-xs font-bold text-slate-700 block">
                  {client.name}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5 block truncate max-w-full">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
