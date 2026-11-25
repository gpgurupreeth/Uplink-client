import React, { useState, useEffect } from 'react';
import type { PageId } from '../types';
import BrandLogo from './BrandLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent awkward background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Plain text links as required (no badges or pills)
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'it-services', label: 'IT Services' },
    { id: 'software-automation', label: 'Software & Automation' },
    { id: 'quiz', label: 'Discovery Quiz' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            aria-label="Uplink Enterprises Home"
            className="flex items-center text-left focus-visible:ring-2 focus-visible:ring-[#0B3D91] rounded-lg p-1 -ml-1"
          >
            <BrandLogo variant="dark" />
          </button>

          {/* Desktop Navigation: Plain Text Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[15px] font-medium transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-[#0B3D91] rounded ${
                    isActive
                      ? 'text-[#0B3D91] font-semibold border-b-2 border-[#0B3D91]'
                      : 'text-slate-600 hover:text-[#0B3D91]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: One Solid "Get a Quote" Button */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              aria-label="Get a Quote from Uplink Enterprises"
              className="inline-flex items-center justify-center bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B3D91]"
            >
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button (Min 44x44px Tap Target) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#0B3D91] hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
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

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-white border-t border-slate-200 px-6 py-6 overflow-y-auto flex flex-col justify-between">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] flex items-center text-left px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#0B3D91] bg-slate-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B3D91]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-200 mt-6">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="min-h-[44px] w-full flex items-center justify-center bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold px-4 py-3 rounded-lg text-base shadow-sm transition-colors"
            >
              <span>Get a Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
