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
      
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Wall of Love
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 font-medium">121 verified Google reviews • 5.0 star rating • Trusted across India.</p>
        </div>
        <div className="relative w-full overflow-hidden mb-16">
          <div className="flex animate-marquee-slow hover:[animation-play-state:paused] space-x-6 w-max px-4">
            {/* Card 1 */}
            <div className="w-[300px] sm:w-[450px] bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col shrink-0">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_man_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I had my home construction done by Screw Wood. They provide the best quality and service that every company can't provide. They are the best in the industry."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg">MR</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Mohammed Rehan</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_woman_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I recently got my home constructed by Screw Wood and found this was the best place. They provided the best quality of work with real dedication."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">JS</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Jhansi Sony</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_man_2.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I chose Screw Wood for my apartment in Jayanagar Bangalore. I have got the best experience and the work on my project was excellent. Highly recommended."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">PM</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Prabavathi Muthukuru</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Card 4 */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_woman_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I am Nithil, from Marathahalli. I completed my home project with Screw Wood. They provide good service and supportive staff. I am very happy."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-lg">NB</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Nithil Bathli</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Clone set for seamless infinite scroll */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_man_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I had my home construction done by Screw Wood. Here they provide best service and quality that every company can't provide."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg">MR</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Mohammed Rehan</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_woman_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I recently used Screw Wood and found this was the best choice. Their team provided the best quality of work."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">JS</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Jhansi Sony</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-fit mx-auto px-10 py-3 bg-white rounded-full shadow-lg border border-slate-100 flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
            <span className="text-slate-900 text-lg">5.0 / 5.0</span>
          </div>
          <div className="flex text-yellow-400 text-base">★★★★★</div>
          <span className="text-slate-300">|</span>
          <span className="">121 Google Reviews</span>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1">
            Jayanagar, Bangalore
            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
