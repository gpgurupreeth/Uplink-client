import React from 'react';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';

interface ContactPageProps {
  prefillMessage?: string;
}

export default function ContactPage({ prefillMessage = '' }: ContactPageProps) {
  return (
    <div className="bg-white">
      {/* 1. Header / Context Band */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded">
            Executive Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mt-3">
            Contact our solutions architecture team
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
            Review your project scope, request a formal estimate, or schedule a technical discovery briefing.
          </p>
        </div>
      </section>

      {/* 2. Contact Section (Dark Navy CTA Band) with Working Form & Calendar Modal */}
      <ContactSection prefillMessage={prefillMessage} />

      {/* 3. Technical & Engagement FAQ */}
      <FaqSection division="all" />
    </div>
  );
}
