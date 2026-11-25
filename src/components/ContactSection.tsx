import React, { useState, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  X,
  ArrowRight,
  Send,
} from 'lucide-react';

interface ContactSectionProps {
  prefillMessage?: string;
  divisionTheme?: 'it' | 'software' | 'both';
}

export default function ContactSection({
  prefillMessage = '',
  divisionTheme = 'both',
}: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM EST');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    divisionInterest:
      divisionTheme === 'it'
        ? 'Division A: IT Services & Infrastructure'
        : divisionTheme === 'software'
        ? 'Division B: Software & Automation'
        : 'Both: Combined IT & Software Partnership',
    message: prefillMessage,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid corporate email address.');
      return;
    }

    setSubmitted(true);
  };

  const handleBookingConfirm = (e: FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-24 bg-[#0A1F44] text-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: CONTACT INFORMATION ================= */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded">
              Engagement &amp; Consultation
            </span>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
            >
              Discuss your organization's technical requirements
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Schedule an executive consultation directly with our solutions architecture team.
              We provide technical feasibility assessments, architectural scoping, and formal quotation estimates.
            </p>

            {/* STATED RESPONSE TIME BADGE */}
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
              <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-white block">
                  Stated Turnaround SLA
                </span>
                <span className="text-xs text-slate-300 mt-0.5 block">
                  [Response Time SLA: e.g. Guaranteed reply from a technical lead within 1 business day]
                </span>
              </div>
            </div>

            {/* Direct Contact Channels with Honest Placeholders */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 text-slate-300">
                <div className="w-9 h-9 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Telephone</span>
                  <span className="text-sm font-semibold text-white">
                    [Client Phone Number: e.g. +1 (800) 000-0000]
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-slate-300">
                <div className="w-9 h-9 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Corporate Inquiries</span>
                  <span className="text-sm font-semibold text-white">
                    [Client Inquiries Email: e.g. inquiries@uplinkenterprises.com]
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-slate-300">
                <div className="w-9 h-9 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Offices</span>
                  <span className="text-sm font-semibold text-white">
                    [Client Office Locations: e.g. New York, NY &amp; Austin, TX]
                  </span>
                </div>
              </div>
            </div>

            {/* DIRECT BOOKING BUTTON */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-slate-600 text-white font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Book 30-Minute Architecture Briefing</span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CLEAN WHITE FORM CARD ================= */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#0F172A] rounded-lg p-8 sm:p-10 border border-slate-200 shadow-xl">
              {submitted ? (
                /* SUCCESS STATE */
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-teal-50 text-[#0E7490] rounded-full flex items-center justify-center mx-auto border border-teal-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Inquiry Received
                  </h3>

                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your requirement has been routed to our enterprise solutions team. We will review your scope and follow up at <strong>{formData.email}</strong> within our standard turnaround window.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          divisionInterest: 'Division A: IT Services & Infrastructure',
                          message: '',
                        });
                      }}
                      className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B3D91] hover:underline"
                    >
                      <span>Submit another requirement</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUTS */
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      Request a Technical Proposal
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Please provide preliminary details regarding your timeline and scope.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corporation"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Division Select */}
                  <div>
                    <label htmlFor="divisionInterest" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Primary Practice of Interest
                    </label>
                    <select
                      id="divisionInterest"
                      value={formData.divisionInterest}
                      onChange={(e) => setFormData({ ...formData, divisionInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] transition-colors"
                    >
                      <option value="Division A: IT Services & Infrastructure">Division A: IT Services &amp; Infrastructure</option>
                      <option value="Division B: Software & Automation">Division B: Software &amp; Automation</option>
                      <option value="Both: Combined IT & Software Partnership">Both: Combined IT &amp; Software Partnership</option>
                    </select>
                  </div>

                  {/* Message Scope */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Operational Requirement or Scope
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline target timeline, current infrastructure, or specific development goals..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0F172A] focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      aria-label="Submit quotation request"
                      className="min-h-[44px] w-full flex items-center justify-center gap-2 bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold py-3 px-6 rounded-lg text-sm shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B3D91]"
                    >
                      <span>Submit Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center font-normal">
                    We treat all information as confidential under mutual non-disclosure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BRIEFING MODAL */}
      {bookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="briefing-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="bg-white text-[#0F172A] rounded-lg max-w-lg w-full p-8 border border-slate-200 shadow-2xl relative">
            <button
              type="button"
              onClick={() => {
                setBookingModalOpen(false);
                setBookingConfirmed(false);
              }}
              className="min-w-[44px] min-h-[44px] absolute top-4 right-4 flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-1">
              Direct Architecture Briefing
            </span>

            <h3 id="briefing-modal-title" className="text-2xl font-bold text-[#0F172A] tracking-tight mb-2">
              Select an available consultation window
            </h3>

            <p className="text-sm text-slate-600 mb-6 font-normal">
              Schedule a 30-minute discovery discussion with an Uplink solutions architect.
            </p>

            {bookingConfirmed ? (
              <div className="text-center py-6 space-y-3 bg-slate-50 rounded-lg p-6 border border-slate-200">
                <CheckCircle2 className="w-8 h-8 text-teal-600 mx-auto" />
                <h4 className="text-lg font-bold text-[#0F172A]">Briefing Registered</h4>
                <p className="text-xs text-slate-600">
                  Calendar invitation scheduled for <strong>{selectedDate} at {selectedSlot}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setBookingModalOpen(false);
                    setBookingConfirmed(false);
                  }}
                  className="min-h-[44px] px-6 py-2 rounded-lg bg-[#0B3D91] text-white font-semibold text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingConfirm} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                    Available Days
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Tomorrow', 'Thursday', 'Friday'].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(day)}
                        className={`min-h-[44px] py-2 px-3 rounded-lg text-xs font-semibold border transition-colors ${
                          selectedDate === day
                            ? 'bg-[#0B3D91] text-white border-[#0B3D91]'
                            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                    Available Times (EST)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['10:00 AM EST', '2:00 PM EST', '4:30 PM EST'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`min-h-[44px] py-2 px-3 rounded-lg text-xs font-semibold border transition-colors ${
                          selectedSlot === slot
                            ? 'bg-[#0B3D91] text-white border-[#0B3D91]'
                            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="min-h-[44px] w-full py-2.5 rounded-lg bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold text-sm shadow-sm transition-colors"
                  >
                    Confirm {selectedDate} at {selectedSlot}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
