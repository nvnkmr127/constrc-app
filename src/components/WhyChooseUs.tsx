'use client';

import React from 'react';
import { openCallModal } from '@/components/CallModal';

interface WhyChooseItem {
  id: string;
  icon: React.ReactNode;
  art: string;
  title: React.ReactNode;
  description: string;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: '1',
    icon: (
      <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22L22 2v20H2z" />
        <path d="M6 18l4-4" />
        <path d="M10 18l2-2" />
        <path d="M14 18l2-2" />
      </svg>
    ),
    art: '/images/why-choose-us/card1-art-perfect.png',
    title: 'Made to Order',
    description: 'We create personalised spaces that cater to your every requirement.',
  },
  {
    id: '2',
    icon: (
      <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="3" />
      </svg>
    ),
    art: '/images/why-choose-us/card2-art-perfect.png',
    title: (
      <>
        Lowest Prices
        <br />
        Guaranteed
      </>
    ),
    description: 'We provide the best possible solutions that suit your finances.',
  },
  {
    id: '3',
    icon: (
      <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    art: '/images/why-choose-us/card3-art-perfect.png',
    title: (
      <>
        Quality Checks At
        <br />
        Every Step
      </>
    ),
    description: 'We guarantee thorough quality checks till project completion.',
  },
  {
    id: '4',
    icon: (
      <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    art: '/images/why-choose-us/card4-art-perfect.png',
    title: (
      <>
        Timely Delivery
        <br />
        Assurance
      </>
    ),
    description: 'We proactively work on commitments to maintain our benchmark of ontime delivery.',
  },
  {
    id: '5',
    icon: (
      <div className="flex flex-col items-center justify-center text-[10px] font-black text-[#D97706] leading-none">
        <span className="text-[11px] font-black">11</span>
        <span className="text-[7px] font-extrabold uppercase tracking-tighter">YEARS</span>
      </div>
    ),
    art: '/images/why-choose-us/card5-art-perfect.png',
    title: '11-Years Warranty',
    description: 'We invigorate client relationships by offering warranties that last a decade.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-white font-sans overflow-hidden" id="why-choose-us">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 space-y-12">
        {/* Top Section: Header Content + Hero Construction Illustration */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Badge, Title, Subtitle, Accent Line */}
          <div className="lg:col-span-6 space-y-5 z-10 pt-2">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F6] border border-slate-200/80 shadow-2xs">
              <svg className="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 2H9c-1.1 0-2 .9-2 2v6H5c-1.1 0-2 .9-2 2v10h18V4c0-1.1-.9-2-2-2zM9 4h4v2H9V4zm0 4h4v2H9V8zm-4 6h2v2H5v-2zm0 4h2v2H5v-2zm14 2h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2zm0-4h-2V4h2v2z"/>
              </svg>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0B132B] leading-[1.15] tracking-tight">
              Building <span className="text-[#F0B008]">Trust.</span>
              <br />
              Delivering <span className="text-[#F0B008]">Excellence.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              With us, you experience the power of ideas,
              <br className="hidden sm:inline" />
              design and craftsmanship come alive.
            </p>

            {/* Accent Line */}
            <div className="w-12 h-1 bg-[#F0B008] rounded-full mt-4" />
          </div>

          {/* Right Column: Book Consultation Button + Construction Illustration */}
          <div className="lg:col-span-6 relative flex flex-col items-end">
            {/* Book Consultation Button */}
            <div className="w-full flex justify-end mb-4 z-20">
              <button
                type="button"
                onClick={openCallModal}
                className="bg-[#F4AE01] hover:bg-[#E0A000] active:scale-[0.98] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
              >
                <svg className="w-4.5 h-4.5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
                </svg>
                BOOK CONSULTATION
              </button>
            </div>

            {/* Hero Construction Illustration & Dot Grid */}
            <div className="relative w-full max-w-[540px] h-[220px] sm:h-[260px] md:h-[280px]">
              {/* Dot Grid Background Top-Right */}
              <div className="absolute top-2 right-0 grid grid-cols-5 gap-2 opacity-60 pointer-events-none z-0">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#F0B008]/40" />
                ))}
              </div>

              <img
                src="/images/why-choose-us/hero-illustration-clean.png"
                alt="Construction Crane & Building Illustration"
                className="w-full h-full object-contain object-right-bottom relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: 5 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col items-center justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group min-h-[360px]"
            >
              {/* Top Badge Icon (Aligned Top-Left) */}
              <div className="w-full flex justify-start mb-1">
                <div className="w-11 h-11 rounded-full bg-[#FFFBEB] border border-amber-200/60 flex items-center justify-center shadow-2xs">
                  {item.icon}
                </div>
              </div>

              {/* Card Illustration */}
              <div className="w-full h-32 flex items-center justify-center my-2">
                <img
                  src={item.art}
                  alt="Feature Graphic"
                  className="max-h-28 max-w-[155px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Footer Info */}
              <div className="w-full flex flex-col items-center pt-2 space-y-1.5">
                <h3 className="text-sm sm:text-base font-extrabold text-[#0B132B] leading-tight min-h-[42px] flex items-center justify-center text-center">
                  {item.title}
                </h3>

                {/* Yellow Accent Bar */}
                <div className="w-7 h-0.5 bg-[#F0B008] rounded-full my-1.5" />

                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-medium text-center max-w-[200px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
