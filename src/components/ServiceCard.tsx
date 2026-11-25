import React from 'react';
import type { ServiceItem } from '../types';
import {
  Cloud,
  Server,
  Compass,
  Headphones,
  Globe,
  Smartphone,
  Palette,
  Code2,
  Layers,
  Zap,
  Bot,
  Workflow,
  RefreshCw,
  Cpu,
  LayoutGrid,
  ArrowRight,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

// Icon resolver for high-contrast icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Server,
  Compass,
  Headphones,
  Globe,
  Smartphone,
  Palette,
  Code2,
  Layers,
  Zap,
  Bot,
  Workflow,
  RefreshCw,
  Cpu,
  LayoutGrid,
};

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Server;
  const isIT = service.division === 'it';

  return (
    <article
      className={`group relative bg-[#0B132B] rounded-xl p-8 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
        isIT
          ? 'border-[#1E294B] hover:border-[#14B8A6] hover:shadow-xl hover:shadow-[#14B8A6]/10'
          : 'border-[#1E294B] hover:border-[#6366F1] hover:shadow-xl hover:shadow-[#6366F1]/10'
      }`}
    >
      {/* Top Accent Strip */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all duration-300 ${
          isIT
            ? 'bg-transparent group-hover:bg-[#14B8A6]'
            : 'bg-transparent group-hover:bg-[#6366F1]'
        }`}
        aria-hidden="true"
      />

      <div>
        {/* Category Badge & Icon Row */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-200 ${
              isIT
                ? 'bg-[#14B8A6]/15 text-[#2DD4BF] group-hover:bg-[#14B8A6] group-hover:text-[#070D1E]'
                : 'bg-[#6366F1]/15 text-[#818CF8] group-hover:bg-[#6366F1] group-hover:text-white'
            }`}
          >
            <IconComponent className="w-7 h-7" aria-hidden="true" />
          </div>

          <span
            className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${
              isIT
                ? 'text-[#2DD4BF] bg-[#14B8A6]/10 border-[#14B8A6]/30'
                : 'text-[#818CF8] bg-[#6366F1]/10 border-[#6366F1]/30'
            }`}
          >
            {service.categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-white">
          {service.title}
        </h3>

        {/* 2-Line Description (Strictly Formatted) */}
        <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6 min-h-[44px]">
          {service.description}
        </p>

        {/* Key Features Bullet List */}
        <ul className="space-y-2 mb-6 text-xs text-slate-400">
          {service.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2
                className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                  isIT ? 'text-[#14B8A6]' : 'text-[#6366F1]'
                }`}
                aria-hidden="true"
              />
              <span className="text-slate-300">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ONE SINGLE High-Contrast CTA per Card */}
      <div className="pt-5 border-t border-[#1E294B] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(service)}
          aria-label={`View technical blueprint and scope for ${service.title}`}
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-150 ${
            isIT
              ? 'text-[#2DD4BF] hover:text-white'
              : 'text-[#818CF8] hover:text-white'
          }`}
        >
          <span>View Service Blueprint</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{service.timeline}</span>
        </span>
      </div>
    </article>
  );
}
