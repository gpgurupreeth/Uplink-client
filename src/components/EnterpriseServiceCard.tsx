import React from 'react';
import type { ServiceItem } from '../types';
import {
  Cloud,
  Server,
  Compass,
  Headphones,
  Globe,
  Smartphone,
  Code2,
  Layers,
  Zap,
  Bot,
  RefreshCw,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface EnterpriseServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Server,
  Compass,
  Headphones,
  Globe,
  Smartphone,
  Code2,
  Layers,
  Zap,
  Bot,
  RefreshCw,
  Cpu,
};

/**
 * Multinational-grade corporate card component:
 * - White background, 1px light border (#E2E8F0), soft shadow
 * - Equal height (h-full flex flex-col justify-between)
 * - Single high-contrast CTA button
 * - Controlled accent color on icon and tag only
 */
export default function EnterpriseServiceCard({
  service,
  onSelect,
}: EnterpriseServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Server;
  const isIT = service.division === 'it';

  const accentColor = isIT ? '#0E7490' : '#4338CA';
  const tagBg = isIT ? 'bg-teal-50 text-[#0E7490] border-teal-200' : 'bg-indigo-50 text-[#4338CA] border-indigo-200';
  const iconBoxBg = isIT ? 'bg-teal-50 text-[#0E7490]' : 'bg-indigo-50 text-[#4338CA]';

  return (
    <article className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
      <div>
        {/* Optional Thumbnail / Photo */}
        {service.imageUrl && (
          <div className="relative h-40 w-full mb-6 rounded-md overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={service.imageUrl}
              alt={service.imageAlt || service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white px-2 py-0.5 rounded">
              [Photo: Replace with client asset]
            </span>
          </div>
        )}

        {/* Category Tag & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-11 h-11 rounded-lg ${iconBoxBg} flex items-center justify-center`}
            style={{ color: accentColor }}
          >
            <IconComponent className="w-5 h-5" aria-hidden="true" />
          </div>

          <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${tagBg}`}>
            {service.categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-3">
          {service.title}
        </h3>

        {/* 2-Line Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6 min-h-[44px]">
          {service.description}
        </p>

        {/* Key Features Bullet Points */}
        <ul className="space-y-2 mb-6 text-xs text-slate-600">
          {service.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2
                className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                style={{ color: accentColor }}
                aria-hidden="true"
              />
              <span className="text-slate-700">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ONE Single Clear CTA */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(service)}
          aria-label={`View technical scope and deliverables for ${service.title}`}
          className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold hover:underline transition-colors"
          style={{ color: accentColor }}
        >
          <span>View Service Scope</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <span className="text-xs text-slate-400">
          {service.timeline}
        </span>
      </div>
    </article>
  );
}
