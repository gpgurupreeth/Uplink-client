import React from 'react';
import { clientLogos } from '../data/content';
import { ShieldCheck, Activity, Users, Award, CheckCircle2 } from 'lucide-react';

export default function StatsAndLogos() {
  return (
    <section
      aria-label="Enterprise Proven Track Record and Client Network"
      className="bg-[#0B132B] border-b border-[#1E294B] py-12 lg:py-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* STATS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12 border-b border-[#1E294B]/80">
          {/* Stat 1 */}
          <div className="p-6 rounded-xl bg-[#101A38]/60 border border-[#1E294B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  99.98%
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-signal-pulse" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Guaranteed Infrastructure Uptime
              </p>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-3 pt-3 border-t border-[#1E294B]">
              [Client Benchmark SLA Tier]
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-xl bg-[#101A38]/60 border border-[#1E294B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2DD4BF] font-mono tracking-tight">
                  &lt; 12 min
                </span>
                <Activity className="w-5 h-5 text-[#2DD4BF]" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Average Incident Triage Latency
              </p>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-3 pt-3 border-t border-[#1E294B]">
              [24/7 Global NOC SLA]
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-xl bg-[#101A38]/60 border border-[#1E294B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#818CF8] font-mono tracking-tight">
                  140+
                </span>
                <Users className="w-5 h-5 text-[#818CF8]" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Production Enterprise Deployments
              </p>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-3 pt-3 border-t border-[#1E294B]">
              [Audited Client Metric]
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-xl bg-[#101A38]/60 border border-[#1E294B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  SOC2 / ISO
                </span>
                <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Security Governance Alignment
              </p>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-3 pt-3 border-t border-[#1E294B]">
              [Compliance Framework]
            </p>
          </div>
        </div>

        {/* CLIENT LOGOS ROW */}
        <div className="pt-10">
          <p className="text-center font-mono text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by Engineering &amp; Operations Leaders Across Regulated Industries
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-4 rounded-lg bg-[#101A38]/40 border border-[#1E294B]/70 hover:border-slate-500 hover:bg-[#101A38] transition-all"
              >
                {/* Clean SVG Monogram */}
                <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white font-mono font-bold text-xs mb-2 transition-colors">
                  {client.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors text-center">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 text-center truncate max-w-[120px]">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] font-mono text-slate-500 mt-4">
            * Representative client portfolio. Case studies and references available under mutual non-disclosure agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
