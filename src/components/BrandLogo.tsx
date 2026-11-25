import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

/**
 * Multinational-grade corporate mark for Uplink Enterprises.
 * Crisp geometric emblem with dual intersecting vectors representing
 * Infrastructure and Software convergence, without glow or neon effects.
 */
export default function BrandLogo({
  className = '',
  variant = 'auto',
  showSubtitle = true,
}: BrandLogoProps) {
  const isLightText = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Emblem */}
      <div className="relative w-9 h-9 flex-shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Base rounded square */}
          <rect
            x="1"
            y="1"
            width="34"
            height="34"
            rx="8"
            fill="#0B3D91"
          />

          {/* Precision chevron intersection */}
          <path
            d="M10 23L18 11L26 23H21.5L18 17.5L14.5 23H10Z"
            fill="#FFFFFF"
          />
          <path
            d="M18 19L21.5 24.5H14.5L18 19Z"
            fill="#0E7490"
          />
        </svg>
      </div>

      {/* Corporate Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-bold text-[16px] tracking-tight leading-none ${
            isLightText ? 'text-white' : 'text-[#0F172A]'
          }`}
        >
          Uplink Enterprises
        </span>
        {showSubtitle && (
          <span
            className={`text-[11px] font-medium leading-none mt-1 tracking-normal ${
              isLightText ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            IT Services &amp; Software
          </span>
        )}
      </div>
    </div>
  );
}
