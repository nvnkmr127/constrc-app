'use client';

import React from 'react';
import { openCallModal } from '@/components/CallModal';

export default function Testimonials() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white overflow-hidden" id="process">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-50/80 via-white to-slate-50 rounded-3xl md:rounded-[48px] p-6 md:p-12 border border-orange-100 shadow-xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-orange/15 text-primary-orange text-xs font-black uppercase tracking-widest border border-primary-orange/30">
                ⚡ HOW SCREW WOOD WORKS
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Turn Your Vision Into Reality — In 6 Simple Steps
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-medium">
                Experience tech-enabled home construction &amp; interiors tailored to your style, budget, and lifestyle — effortlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Side 6 Steps Grid (8 cols) - Touch Carousel on Mobile */}
              <div className="lg:col-span-8 flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-4 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible">
                {/* Step 1 */}
                <div className="min-w-[240px] sm:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all group shrink-0 sm:shrink">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-orange text-white rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <span className="text-2xl sm:text-3xl opacity-80 group-hover:scale-110 transition-transform">📞</span>
                  </div>
                  <div className="mt-6 sm:mt-8 space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      Book Consultation
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      Schedule a 1-on-1 session with Bangalore's leading architects.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="min-w-[240px] sm:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all group shrink-0 sm:shrink">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-orange text-white rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <span className="text-2xl sm:text-3xl opacity-80 group-hover:scale-110 transition-transform">📐</span>
                  </div>
                  <div className="mt-6 sm:mt-8 space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      Meet Designer
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      Receive custom 3D floor plans &amp; structural concepts.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="min-w-[240px] sm:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all group shrink-0 sm:shrink">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-orange text-white rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <span className="text-2xl sm:text-3xl opacity-80 group-hover:scale-110 transition-transform">📋</span>
                  </div>
                  <div className="mt-6 sm:mt-8 space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      Transparent Quote
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      Lock itemized material wallets &amp; package rates.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="min-w-[240px] sm:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all group shrink-0 sm:shrink">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-orange text-white rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      4
                    </div>
                    <span className="text-2xl sm:text-3xl opacity-80 group-hover:scale-110 transition-transform">🛡️</span>
                  </div>
                  <div className="mt-6 sm:mt-8 space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      Stage Escrow
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      Safe milestone payments linked to site quality approvals.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="min-w-[240px] sm:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all group shrink-0 sm:shrink">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-orange text-white rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      5
                    </div>
                    <span className="text-2xl sm:text-3xl opacity-80 group-hover:scale-110 transition-transform">🏗️</span>
                  </div>
                  <div className="mt-6 sm:mt-8 space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      430+ QASCON Checks
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      Real-time app updates &amp; multi-stage site inspections.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="min-w-[240px] sm:min-w-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all group shrink-0 sm:shrink">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                      6
                    </div>
                    <span className="text-2xl sm:text-3xl opacity-80 group-hover:scale-110 transition-transform">🗝️</span>
                  </div>
                  <div className="mt-6 sm:mt-8 space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      Move-In &amp; Warranty
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      Snag-free handover backed by 10-year structural warranty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Video Testimonial Card (4 cols) */}
              <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xl flex flex-col justify-between">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-60 group">
                  <img
                    alt="Kavita's Interior Transformation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/indian_professional_woman_1.png"
                  />
                  {/* Top Branding Badges */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-primary-orange shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse"></span>
                    Screw Wood Client Story
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <button
                      type="button"
                      onClick={openCallModal}
                      className="w-14 h-14 bg-primary-orange text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform"
                    >
                      <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xl font-black text-white tracking-tight drop-shadow-md">
                      "Delivered on time with zero stress!"
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-slate-600 text-xs font-medium px-2 leading-relaxed italic">
                    "They transformed our plot into a dream 3BHK villa with complete escrow safety and top-quality materials!"
                  </p>
                  <h5 className="text-lg font-black text-slate-900">Kavita &amp; Family</h5>

                  <div className="grid grid-cols-3 border-t border-slate-100 pt-4 text-center">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Budget</p>
                      <p className="font-extrabold text-xs text-slate-900 mt-0.5">₹45 Lacs</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Home</p>
                      <p className="font-extrabold text-xs text-slate-900 mt-0.5">3BHK Duplex</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Location</p>
                      <p className="font-extrabold text-xs text-slate-900 mt-0.5">Bangalore</p>
                    </div>
                  </div>
                </div>
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
