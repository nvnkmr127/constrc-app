'use client';

import React from 'react';
import { openCallModal } from '@/components/CallModal';

export default function Testimonials() {
  return (
    <>
      <section className="py-16 md:py-24 bg-[#FEFDFB] relative overflow-hidden text-[#1E293B]" id="process">
        {/* Background Architectural Sketch Accent */}
        <div
          className="absolute left-0 top-1/4 bottom-1/4 w-[280px] pointer-events-none opacity-15 bg-contain bg-left bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/how-it-works/blueprint_sketch.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#D49B35]/50 bg-[#FFFDF9] text-[#C8933F] text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-2xs">
                <span>⚡</span> HOW SCREW WOOD WORKS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-[#182238] tracking-tight leading-tight mb-3">
              Turn Your Vision Into Reality
              <span className="block sm:inline text-[#C8933F] ml-0 sm:ml-2">
                — In 6 Simple Steps
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Experience tech-enabled home construction &amp; interiors tailored to your style, budget, and lifestyle — effortlessly.
            </p>
          </div>

          {/* Grid Container (6 Cards + Right Client Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
            {/* Left Side: 6 Steps Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
              {/* Desktop Connecting Dots */}
              <div className="hidden lg:flex items-center justify-center absolute top-[28%] left-[32.8%] z-20 -translate-x-1/2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D49B35] border-2 border-white shadow-2xs" />
              </div>
              <div className="hidden lg:flex items-center justify-center absolute top-[28%] left-[66.1%] z-20 -translate-x-1/2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D49B35] border-2 border-white shadow-2xs" />
              </div>
              <div className="hidden lg:flex items-center justify-center absolute bottom-[24%] left-[32.8%] z-20 -translate-x-1/2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D49B35] border-2 border-white shadow-2xs" />
              </div>
              <div className="hidden lg:flex items-center justify-center absolute bottom-[24%] left-[66.1%] z-20 -translate-x-1/2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D49B35] border-2 border-white shadow-2xs" />
              </div>

              {/* Step 01 */}
              <div className="relative bg-white rounded-[22px] border border-[#F2EBE1] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]">
                <div className="absolute top-3.5 left-3.5 w-7 h-7 rounded-full bg-[#DA8F19] text-white text-xs font-extrabold flex items-center justify-center shadow-2xs">
                  01
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FAF3E8] flex items-center justify-center mt-2 mb-4 shrink-0">
                  <svg className="w-7 h-7 text-[#283631]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-base font-bold text-[#1E293B] mb-1.5 leading-snug">
                    Book Consultation
                  </h4>
                  <div className="w-7 h-[2px] bg-[#DA8F19] rounded-full mb-2 opacity-80" />
                  <p className="text-[12px] md:text-[13px] text-[#64748B] font-normal leading-relaxed text-center">
                    Schedule a 1-on-1 session with Bangalore's leading architects.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative bg-white rounded-[22px] border border-[#F2EBE1] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]">
                <div className="absolute top-3.5 left-3.5 w-7 h-7 rounded-full bg-[#DA8F19] text-white text-xs font-extrabold flex items-center justify-center shadow-2xs">
                  02
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FAF3E8] flex items-center justify-center mt-2 mb-4 shrink-0">
                  <svg className="w-7 h-7 text-[#283631]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 21H3V3l18 18z" />
                    <path d="M7 14h7" />
                    <path d="M7 17h4" />
                    <path d="M7 11h2" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-base font-bold text-[#1E293B] mb-1.5 leading-snug">
                    Meet Designer
                  </h4>
                  <div className="w-7 h-[2px] bg-[#DA8F19] rounded-full mb-2 opacity-80" />
                  <p className="text-[12px] md:text-[13px] text-[#64748B] font-normal leading-relaxed text-center">
                    Receive custom 3D floor plans &amp; structural concepts.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative bg-white rounded-[22px] border border-[#F2EBE1] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]">
                <div className="absolute top-3.5 left-3.5 w-7 h-7 rounded-full bg-[#DA8F19] text-white text-xs font-extrabold flex items-center justify-center shadow-2xs">
                  03
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FAF3E8] flex items-center justify-center mt-2 mb-4 shrink-0">
                  <svg className="w-7 h-7 text-[#283631]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="M9 12h1" />
                    <path d="M12 12h3" />
                    <path d="M9 16h1" />
                    <path d="M12 16h3" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-base font-bold text-[#1E293B] mb-1.5 leading-snug">
                    Transparent Quote
                  </h4>
                  <div className="w-7 h-[2px] bg-[#DA8F19] rounded-full mb-2 opacity-80" />
                  <p className="text-[12px] md:text-[13px] text-[#64748B] font-normal leading-relaxed text-center">
                    Lock itemized material wallets &amp; package rates.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="relative bg-white rounded-[22px] border border-[#F2EBE1] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]">
                <div className="absolute top-3.5 left-3.5 w-7 h-7 rounded-full bg-[#DA8F19] text-white text-xs font-extrabold flex items-center justify-center shadow-2xs">
                  04
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FAF3E8] flex items-center justify-center mt-2 mb-4 shrink-0">
                  <svg className="w-7 h-7 text-[#283631]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-base font-bold text-[#1E293B] mb-1.5 leading-snug">
                    Stage Escrow
                  </h4>
                  <div className="w-7 h-[2px] bg-[#DA8F19] rounded-full mb-2 opacity-80" />
                  <p className="text-[12px] md:text-[13px] text-[#64748B] font-normal leading-relaxed text-center">
                    Safe milestone payments linked to site quality approvals.
                  </p>
                </div>
              </div>

              {/* Step 05 */}
              <div className="relative bg-white rounded-[22px] border border-[#F2EBE1] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]">
                <div className="absolute top-3.5 left-3.5 w-7 h-7 rounded-full bg-[#DA8F19] text-white text-xs font-extrabold flex items-center justify-center shadow-2xs">
                  05
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FAF3E8] flex items-center justify-center mt-2 mb-4 shrink-0">
                  <svg className="w-7 h-7 text-[#283631]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22V5l7-3h9v3H9v17" />
                    <path d="M4 11h5" />
                    <path d="M4 17h5" />
                    <path d="M17 5v8l-2 2" />
                    <circle cx="15" cy="15" r="1" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-base font-bold text-[#1E293B] mb-1.5 leading-snug">
                    430+ QASCON Checks
                  </h4>
                  <div className="w-7 h-[2px] bg-[#DA8F19] rounded-full mb-2 opacity-80" />
                  <p className="text-[12px] md:text-[13px] text-[#64748B] font-normal leading-relaxed text-center">
                    Real-time app updates &amp; multi-stage site inspections.
                  </p>
                </div>
              </div>

              {/* Step 06 */}
              <div className="relative bg-white rounded-[22px] border border-[#F2EBE1] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]">
                <div className="absolute top-3.5 left-3.5 w-7 h-7 rounded-full bg-[#223537] text-white text-xs font-extrabold flex items-center justify-center shadow-2xs">
                  06
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FAF3E8] flex items-center justify-center mt-2 mb-4 shrink-0">
                  <svg className="w-7 h-7 text-[#283631]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7.5" cy="15.5" r="4.5" />
                    <path d="M10.7 12.3L19.5 3.5" />
                    <path d="M16 4l2 2" />
                    <path d="M18.5 6.5l2 2" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-base font-bold text-[#1E293B] mb-1.5 leading-snug">
                    Move-In &amp; Warranty
                  </h4>
                  <div className="w-7 h-[2px] bg-[#DA8F19] rounded-full mb-2 opacity-80" />
                  <p className="text-[12px] md:text-[13px] text-[#64748B] font-normal leading-relaxed text-center">
                    Snag-free handover backed by 10-year structural warranty.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Screw Wood Client Story Card (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-[26px] border border-[#F2EBE1] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col justify-between">
              {/* Top Photo */}
              <div className="relative h-[210px] w-full overflow-hidden group">
                <img
                  src="/images/how-it-works/client_photo_hd.png"
                  alt="Kavita Client Story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Left Pill Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1E293B] shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#DA8F19]" />
                  Screw Wood Client Story
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <button
                    type="button"
                    onClick={openCallModal}
                    className="w-13 h-13 sm:w-14 sm:h-14 bg-white/95 text-[#DA8F19] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    <svg className="w-6 h-6 fill-[#DA8F19] ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Middle Dark Olive Body */}
              <div className="bg-[#273530] p-6 text-center text-white flex-1 flex flex-col justify-center items-center space-y-3">
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#E5B869] leading-snug">
                  “ Delivered on time with zero stress! ”
                </h4>
                <div className="w-10 h-[2px] bg-[#E5B869]/60 mx-auto" />
                <p className="text-xs sm:text-[13px] text-[#E2DDD3] italic font-normal leading-relaxed max-w-[270px] mx-auto">
                  “They transformed our plot into a dream 3BHK villa with complete escrow safety and top-quality materials! ”
                </p>
                <h5 className="font-bold text-sm sm:text-base text-[#E5B869] mt-1">
                  Kavita &amp; Family
                </h5>
              </div>

              {/* Bottom White Footer */}
              <div className="bg-[#FAF8F5] border-t border-[#F2EBE1] grid grid-cols-3 divide-x divide-[#F2EBE1] py-3.5 px-2 text-center">
                <div className="flex flex-col items-center">
                  <svg className="w-4 h-4 text-slate-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">BUDGET</p>
                  <p className="text-xs font-extrabold text-[#1E293B] mt-0.5">₹45 Lacs</p>
                </div>

                <div className="flex flex-col items-center">
                  <svg className="w-4 h-4 text-slate-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">HOME</p>
                  <p className="text-xs font-extrabold text-[#1E293B] mt-0.5">3BHK Duplex</p>
                </div>

                <div className="flex flex-col items-center">
                  <svg className="w-4 h-4 text-slate-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">LOCATION</p>
                  <p className="text-xs font-extrabold text-[#1E293B] mt-0.5">Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Full-Width Trust Bar */}
          <div className="bg-[#FFFDF9] rounded-full md:rounded-[36px] border border-[#F2EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.02)] py-4 px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#F2EBE1] gap-4 md:gap-0 text-center">
            {/* Trust Item 1 */}
            <div className="flex items-center justify-center gap-3 px-2 py-1 md:py-0">
              <div className="w-8 h-8 rounded-full border border-[#D49B35]/40 flex items-center justify-center shrink-0 text-[#C8933F]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold text-[#1E293B] leading-tight">10+ Years</p>
                <p className="text-[11px] text-slate-500 font-normal">Industry Experience</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex items-center justify-center gap-3 px-2 py-1 md:py-0">
              <div className="w-8 h-8 rounded-full border border-[#D49B35]/40 flex items-center justify-center shrink-0 text-[#C8933F]">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold text-[#1E293B] leading-tight">430+</p>
                <p className="text-[11px] text-slate-500 font-normal">Quality Checks</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex items-center justify-center gap-3 px-2 py-1 md:py-0">
              <div className="w-8 h-8 rounded-full border border-[#D49B35]/40 flex items-center justify-center shrink-0 text-[#C8933F]">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold text-[#1E293B] leading-tight">1000+</p>
                <p className="text-[11px] text-slate-500 font-normal">Homes Delivered</p>
              </div>
            </div>

            {/* Trust Item 4 */}
            <div className="flex items-center justify-center gap-3 px-2 py-1 md:py-0">
              <div className="w-8 h-8 rounded-full border border-[#D49B35]/40 flex items-center justify-center shrink-0 text-[#C8933F]">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold text-[#1E293B] leading-tight">On-Time</p>
                <p className="text-[11px] text-slate-500 font-normal">Commitment</p>
              </div>
            </div>

            {/* Trust Item 5 */}
            <div className="flex items-center justify-center gap-3 px-2 py-1 md:py-0 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-full border border-[#D49B35]/40 flex items-center justify-center shrink-0 text-[#C8933F]">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold text-[#1E293B] leading-tight">10-Year</p>
                <p className="text-[11px] text-slate-500 font-normal">Structural Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 mb-14 text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f2bd19]/15 text-slate-900 border border-[#f2bd19]/40 text-xs font-black uppercase tracking-widest">
            ⚡ REAL FEEDBACK FROM BENGALURU HOMEOWNERS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium max-w-xl mx-auto">
            121+ verified Google reviews • 5.0 star rating • Trusted across Bangalore for quality home construction.
          </p>
        </div>

        {/* Marquee Carousel Container with Side Fade Overlays */}
        <div className="relative w-full overflow-hidden mb-12">
          {/* Left Side Fade */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          {/* Right Side Fade */}
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-slow hover:[animation-play-state:paused] space-x-6 w-max px-4">
            {/* Card 1 */}
            <div className="w-[310px] sm:w-[440px] bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex text-[#f2bd19] text-base space-x-0.5 font-bold">
                    ★★★★★
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    ✓ Verified Owner
                  </span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base mb-6 italic leading-relaxed">
                  "I had my home construction done by Screw Wood. They provide the best quality and service that every company can't provide. Truly the best tech-enabled team in Bangalore!"
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <img
                    alt="Mohammed Rehan"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f2bd19] shadow-sm shrink-0"
                    src="/images/indian_professional_man_1.png"
                  />
                  <div className="flex-grow min-w-0">
                    <h5 className="text-slate-900 font-extrabold text-sm truncate">Mohammed Rehan</h5>
                    <p className="text-slate-500 text-[11px] font-medium truncate">Owner • Villa in Whitefield, Bangalore</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <span>Google Review</span> • <span className="text-[#f2bd19] font-black">5.0 ★</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[310px] sm:w-[440px] bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex text-[#f2bd19] text-base space-x-0.5 font-bold">
                    ★★★★★
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    ✓ Verified Owner
                  </span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base mb-6 italic leading-relaxed">
                  "I recently got my home constructed by Screw Wood and found this was the best place. They provided the best quality of work with real dedication and 100% escrow safety."
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <img
                    alt="Jhansi Sony"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f2bd19] shadow-sm shrink-0"
                    src="/images/indian_professional_woman_1.png"
                  />
                  <div className="flex-grow min-w-0">
                    <h5 className="text-slate-900 font-extrabold text-sm truncate">Jhansi Sony</h5>
                    <p className="text-slate-500 text-[11px] font-medium truncate">Owner • 3BHK Duplex in Koramangala</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <span>Google Review</span> • <span className="text-[#f2bd19] font-black">5.0 ★</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[310px] sm:w-[440px] bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex text-[#f2bd19] text-base space-x-0.5 font-bold">
                    ★★★★★
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    ✓ Verified Owner
                  </span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base mb-6 italic leading-relaxed">
                  "I chose Screw Wood for my residence in Jayanagar Bangalore. I got the best experience and the structural execution was top class. Highly recommended!"
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <img
                    alt="Prabavathi Muthukuru"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f2bd19] shadow-sm shrink-0"
                    src="/images/indian_professional_man_2.png"
                  />
                  <div className="flex-grow min-w-0">
                    <h5 className="text-slate-900 font-extrabold text-sm truncate">Prabavathi Muthukuru</h5>
                    <p className="text-slate-500 text-[11px] font-medium truncate">Owner • Independent House in Jayanagar</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <span>Google Review</span> • <span className="text-[#f2bd19] font-black">5.0 ★</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-[310px] sm:w-[440px] bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex text-[#f2bd19] text-base space-x-0.5 font-bold">
                    ★★★★★
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    ✓ Verified Owner
                  </span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base mb-6 italic leading-relaxed">
                  "I completed my home project with Screw Wood. They provide outstanding customer service, transparent material wallets, and supportive site engineers."
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <img
                    alt="Nithil Bathli"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f2bd19] shadow-sm shrink-0"
                    src="/images/indian_professional_woman_1.png"
                  />
                  <div className="flex-grow min-w-0">
                    <h5 className="text-slate-900 font-extrabold text-sm truncate">Nithil Bathli</h5>
                    <p className="text-slate-500 text-[11px] font-medium truncate">Owner • Villa in Marathahalli</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <span>Google Review</span> • <span className="text-[#f2bd19] font-black">5.0 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Summary Footer Pill */}
        <div className="max-w-fit mx-auto px-6 py-3.5 bg-white rounded-full shadow-lg border border-slate-200 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-900 text-base font-black">5.0 / 5.0</span>
            <div className="flex text-[#f2bd19] text-sm font-bold">★★★★★</div>
          </div>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-slate-900 font-extrabold">121 Verified Google Reviews</span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-slate-500 font-medium">Screw Wood, Bangalore</span>
        </div>
      </section>
    </>
  );
}
