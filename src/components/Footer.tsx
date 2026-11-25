import React from 'react';
import type { PageId } from '../types';
import BrandLogo from './BrandLogo';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07152F] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left focus-visible:ring-2 focus-visible:ring-white rounded p-1 -ml-1"
            >
              <BrandLogo variant="light" />
            </button>

            <p className="text-slate-300 text-sm font-medium max-w-sm">
              Multinational IT Infrastructure &amp; Custom Software Engineering.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-normal">
              Partnering with enterprise leadership to architect reliable cloud foundations, enforce security perimeters,
              and build bespoke distributed software and automation platforms.
            </p>

            <p className="text-xs text-slate-500 pt-2">
              [Compliance Note: Replace with client certifications and governing legal standards]
            </p>
          </div>

          {/* Column 2: IT Services Division */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              IT Services
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('it-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cloud Architecture &amp; Migration
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('it-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Network &amp; Zero-Trust Security
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('it-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  24/7 Managed NOC Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('it-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Strategic IT Consulting
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('it-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Web Portals &amp; Mobile Apps
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Software & Automation Division */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              Software &amp; Automation
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('software-automation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Enterprise Software
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('software-automation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Multi-Tenant SaaS Engineering
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('software-automation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Process Automation (BPA)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('software-automation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Applied Enterprise AI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('software-automation')}
                  className="hover:text-white transition-colors text-left"
                >
                  CRM &amp; ERP Integrations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-white transition-colors text-left"
                >
                  Discovery Quiz
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Uplink
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Uplink Enterprises Inc. All rights reserved. Built to WCAG AA accessibility standards.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
