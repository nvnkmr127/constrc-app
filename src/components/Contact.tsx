'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Image Card & Direct Contacts */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 rounded-[44px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-primary-orange/15 rounded-full blur-3xl" />

          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-orange/20 border border-primary-orange/40 text-primary-orange text-xs font-extrabold uppercase tracking-widest">
              📍 Koramangala, Bangalore HQ
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              Build Your Dream Home With Us
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              Visit our Koramangala Experience Center or speak directly with our senior structural engineers and architects.
            </p>
          </div>

          <div className="my-8 relative z-10">
            <img
              alt="Screw Wood Bangalore Architectural Office"
              className="w-full h-56 object-cover rounded-3xl border border-white/10 shadow-lg"
              src="/images/bangalore_architect_planning.png"
            />
          </div>

          <div className="space-y-4 pt-4 border-t border-white/10 text-sm relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary-orange text-white flex items-center justify-center font-bold shrink-0">
                📞
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Direct Consultation Line</p>
                <p className="font-extrabold text-white text-base">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-primary-orange flex items-center justify-center font-bold shrink-0">
                ✉️
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Email Support</p>
                <p className="font-bold text-slate-200">support@screwwood.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-primary-orange flex items-center justify-center font-bold shrink-0">
                🏢
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Office Location</p>
                <p className="font-semibold text-slate-300 text-xs">
                  #58, 60 Feet Road, KHB Colony, 6th Block, Koramangala, Bengaluru 560095
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-[44px] p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[3px] bg-primary-orange rounded-full" />
              <span className="text-primary-orange font-black uppercase tracking-widest text-xs">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Let's Work Together
            </h2>

            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              We'd love to share more with you. Please complete this form and our team will get back to you shortly.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 animate-fade-in my-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white font-black text-3xl mx-auto flex items-center justify-center shadow-md">
                  ✓
                </div>
                <h4 className="text-2xl font-black text-emerald-950">Thank You, {name}!</h4>
                <p className="text-emerald-800 text-sm leading-relaxed max-w-md mx-auto">
                  Your message has been received. Our Bangalore team will contact you at <span className="font-bold text-emerald-950">{phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-primary-orange focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-primary-orange focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-primary-orange focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-800 focus:outline-none focus:border-primary-orange focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary-orange hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider px-10 py-4 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  CONTACT NOW{' '}
                  <span className="bg-black/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                    →
                  </span>
                </button>
              </form>
            )}
          </div>

          <p className="text-[11px] text-slate-400 font-medium mt-6 pt-4 border-t border-slate-100">
            🔒 100% Data Confidentiality • Zero Spam Policy
          </p>
        </div>
      </div>
    </section>
  );
}
