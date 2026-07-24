'use client';

import React, { useState } from 'react';
import { openCallModal } from '@/components/CallModal';

interface FAQItem {
  id: number;
  category: 'General' | 'Pricing & Escrow' | 'Quality & Warranty' | 'Approvals';
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'Quality & Warranty',
    question: 'What kind of warranty does Screw Wood offer on home construction?',
    answer: 'We provide a 10-Year Structural Warranty backed by structural audit certificates, a 1-Year Free Maintenance Guarantee post-handover, and a 6-Month Warranty on interior woodwork and fittings.',
  },
  {
    id: 2,
    category: 'General',
    question: 'What is the step-by-step process for working with Screw Wood?',
    answer: 'Our process is simple and transparent: 1) Free 3D Floor Plan & Instant Cost Estimate, 2) Soil & Structural Engineering Audit, 3) Stage-wise Escrow Payment Setup, 4) Real-Time App Tracking with 430+ QASCON Checks, 5) Final Handover & Occupancy Certificate.',
  },
  {
    id: 3,
    category: 'General',
    question: 'What types of construction projects do you specialize in?',
    answer: 'We specialize in turnkey residential house construction in Bangalore, including independent duplex homes, luxury villas, multi-storey (G+2, G+3, G+4) rental apartments, architectural 3D planning, and interior woodwork.',
  },
  {
    id: 4,
    category: 'Pricing & Escrow',
    question: 'How are payment milestones handled to prevent cost overruns?',
    answer: 'All payments are linked to escrow stage milestones. You never pay upfront lump sums. Funds for each stage (Foundation, Plinth, Slab, Masonry, Plumbing, Finishing) are released only after our certified engineers inspect and pass 430+ QASCON quality checks.',
  },
  {
    id: 5,
    category: 'Approvals',
    question: 'How long does a 30x40 duplex house take to complete in Bangalore?',
    answer: 'A standard 30x40 duplex home (2,400 sq.ft built-up area) is completed in 6 to 7 months from site excavation to keys handover, backed by a strict delay penalty clause.',
  },
  {
    id: 6,
    category: 'Approvals',
    question: 'Do you assist with BBMP, BDA, and BESCOM sanction approvals?',
    answer: 'Yes! Our team handles complete end-to-end municipal approvals including BBMP plan sanctions, BDA permissions, BESCOM temporary electricity connections, and BWSSB water connections.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Quality & Warranty', 'General', 'Pricing & Escrow', 'Approvals'];

  const filteredFaqs = activeCategory === 'All'
    ? faqData
    : faqData.filter(f => f.category === activeCategory);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/60" id="faq">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Title & Support Person Card */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[3px] bg-primary-orange rounded-full" />
              <span className="text-primary-orange font-black uppercase tracking-widest text-xs">
                HELP &amp; ADVICE CENTER
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
              Your Construction<br />FAQ For Customers
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Everything you need to know about plot estimation, escrow stage safety, BBMP approvals, and 10-year warranties in Bangalore.
            </p>
          </div>

          {/* Support Representative Card */}
          <div className="bg-slate-900 p-7 rounded-[32px] text-white shadow-2xl flex items-center gap-5 border border-slate-800 relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 bg-primary-orange/20 rounded-full blur-2xl" />

            <img
              alt="Kiran - Senior Support Advisor"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-primary-orange shrink-0 shadow-md"
              src="/images/indian_professional_man_1.png"
            />
            <div className="space-y-1">
              <p className="font-extrabold text-base text-white">Hello, I'm Kiran From Support</p>
              <p className="text-slate-400 text-xs font-normal">
                Have specific plot or budget questions? Talk to our engineers directly.
              </p>
              <button
                type="button"
                onClick={openCallModal}
                className="mt-2 bg-primary-orange hover:bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                Ask a Question <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Category Filter Pills & Accordion */}
        <div className="lg:col-span-7 space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-3xl transition-all duration-200 overflow-hidden border ${
                    isOpen
                      ? 'bg-[#1C1C1C] text-white border-white/10 shadow-2xl'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg cursor-pointer select-none"
                  >
                    <span className="leading-snug">{faq.question}</span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-primary-orange text-white rotate-180'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-300 text-sm leading-relaxed animate-fade-in space-y-3">
                      <p>{faq.answer}</p>
                      <div className="pt-3 flex items-center justify-between text-xs text-gray-400 font-semibold border-t border-white/10">
                        <span className="text-primary-orange font-bold">Category: {faq.category}</span>
                        <button
                          type="button"
                          onClick={openCallModal}
                          className="hover:text-white underline transition-colors cursor-pointer"
                        >
                          Need more details? Talk to Advisor →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
