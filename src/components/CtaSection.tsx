import React, { useState, type FormEvent } from 'react';
import {
  CheckCircle,
  ShieldCheck,
  Send,
  Lock,
  ArrowRight,
  Headphones,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Both IT & Software',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: 'Both IT & Software',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="py-20 lg:py-28 bg-[#0A1128] text-white relative overflow-hidden"
    >
      {/* Subtle Background Lighting */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT COLUMN: PROPOSITION ================= */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-mono text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" aria-hidden="true" />
              <span>Let's Build &amp; Scale</span>
            </div>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Ready to move your business forward?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              Partner with Uplink Enterprises for end-to-end IT reliability and transformative custom software.
              Schedule a direct consultation with our technical principals to discuss your architecture, security, or product roadmap.
            </p>

            {/* Enterprise Guarantees */}
            <div className="space-y-4 pt-4 border-t border-slate-800 max-w-lg">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#14B8A6]/15 text-[#14B8A6] mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">24-Hour Guaranteed Turnaround</p>
                  <p className="text-xs text-slate-400">Our engineering leads review every inquiry within one business day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#6366F1]/15 text-[#818cf8] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Mutual NDA Protection</p>
                  <p className="text-xs text-slate-400">All discussions, technical requirements, and intellectual property remain strictly confidential.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-slate-800 text-slate-300 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">No-Obligation Architecture Review</p>
                  <p className="text-xs text-slate-400">Receive actionable insights and preliminary estimates before any contractual commitment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#0F172A] rounded-[12px] p-8 sm:p-10 shadow-2xl border border-slate-100 relative">
              {submitted ? (
                /* SUCCESS STATE */
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[#14B8A6]/10 text-[#0d9488] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Inquiry Received!
                  </h3>

                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A senior solutions architect from our team has been notified and will reach out to <strong>{formData.email}</strong> within 24 business hours.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1128] hover:text-[#6366F1] underline underline-offset-4"
                    >
                      <span>Submit another inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUTS */
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      Request a Consultation
                    </h3>
                    <span className="text-xs font-mono text-slate-500">Confidential</span>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] transition-colors"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Primary Interest Select */}
                  <div>
                    <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Primary Vertical of Interest
                    </label>
                    <select
                      id="interest"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] transition-colors"
                    >
                      <option value="IT Services">IT Infrastructure &amp; Cybersecurity</option>
                      <option value="Software & Automation">Custom Software &amp; Workflow Automation</option>
                      <option value="Both IT & Software">Combined 360° IT &amp; Software Support</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Project or Requirement Scope
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your systems, goals, or timeline..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      aria-label="Submit quotation request"
                      className="w-full flex items-center justify-center gap-2 bg-[#0A1128] hover:bg-[#1e293b] text-white font-semibold py-3.5 px-6 rounded-lg text-sm shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A1128]"
                    >
                      <span>Submit Request</span>
                      <Send className="w-4 h-4 text-[#14B8A6]" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center font-normal">
                    We respect your privacy. No marketing spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
