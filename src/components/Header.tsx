import React, { useState } from 'react';
import { ArrowRight, Menu, X, ShieldCheck, Terminal, Layers } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'IT Services', href: '#it-services' },
    { label: 'Software & Automation', href: '#software-automation' },
    { label: 'Discovery Quiz', href: '#discovery-quiz' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Text Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              aria-label="Uplink Enterprises Home"
              className="group flex items-center gap-3 text-[#0A1128] transition-opacity hover:opacity-90"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0A1128] flex items-center justify-center text-white shadow-sm border border-slate-800">
                <Layers className="w-5 h-5 text-[#14B8A6] group-hover:text-[#6366F1] transition-colors" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-wider text-[#0A1128] uppercase font-mono">
                  UPLINK ENTERPRISES
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-medium">
                  IT Infrastructure & Software
                </span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#0F172A] hover:text-[#14B8A6] focus-visible:text-[#6366F1] transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Primary Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              aria-label="Request a Quote from Uplink Enterprises"
              className="inline-flex items-center gap-2 bg-[#0A1128] hover:bg-[#1E293B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border border-[#0A1128] shadow-sm hover:shadow transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6366F1]"
            >
              <span>Request a Quote</span>
              <ArrowRight
                className="w-4 h-4 text-slate-300 group-hover:text-[#14B8A6] group-hover:translate-x-0.5 transition-all"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0A1128] hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#6366F1]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#0F172A] hover:bg-slate-50 hover:text-[#14B8A6] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Request a Quote"
              className="w-full flex items-center justify-center gap-2 bg-[#0A1128] hover:bg-slate-800 text-white font-semibold px-4 py-3 rounded-lg text-sm shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#14B8A6]" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
