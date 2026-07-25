'use client';

import React from 'react';
import { openCallModal } from '@/components/CallModal';

export default function MaintenanceComparison() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 font-sans" id="maintenance-gap">
      <div className="max-w-7xl mx-auto px-4 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f2bd19]/15 text-slate-900 border border-[#f2bd19]/40 text-xs font-black uppercase tracking-widest">
            ⚡ ZERO HIDDEN REPAIR COSTS
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            The <span className="text-[#f2bd19]">10-Year Gap</span>
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
            Others Ignore, We Cover
          </p>
          <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Most local contractors end responsibility on Day 1. Screw Wood protects your home with up to 10 years of structural warranty and zero-cost maintenance support.
          </p>
        </div>

        {/* 3-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: With Traditional Contractors (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-[32px] overflow-hidden shadow-lg border border-red-200/80 flex flex-col justify-between transition-all hover:shadow-xl group">
            <div className="bg-red-500 py-4 px-6 text-center text-white font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2">
              <span>✕ Traditional Contractors</span>
            </div>

            <div className="p-6 md:p-8 space-y-5 text-xs text-slate-700 flex-grow">
              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Day 1</span>
                <span className="text-slate-600 text-right font-medium">Project completed. Contractor responsibility ends.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 1</span>
                <span className="text-slate-600 text-right font-medium">Hairline wall cracks appear. You handle repair costs.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 2</span>
                <span className="text-slate-600 text-right font-medium">Bathroom seepage &amp; wall dampness begin.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 5</span>
                <span className="text-slate-600 text-right font-medium">Plumbing &amp; electrical wear out. Zero support.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 7</span>
                <span className="text-slate-600 text-right font-medium">Major terrace waterproofing rework required.</span>
              </div>

              <div className="flex items-start justify-between pb-1 gap-3">
                <span className="font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 10</span>
                <span className="text-slate-600 text-right font-medium">Accumulated repair bills mount up.</span>
              </div>
            </div>

            <div className="p-6 bg-red-50/80 border-t border-red-100 flex justify-between items-center">
              <div className="text-red-600 font-black text-xs uppercase tracking-wider">
                You Spend
              </div>
              <div className="text-red-600 font-black text-lg sm:text-xl">
                ₹7–₹10 Lakhs Extra
              </div>
            </div>
          </div>

          {/* Center Column: Highlight Feature Image & Guarantee Pill (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900 rounded-[32px] p-6 text-white shadow-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden group min-h-[420px]">
            <div className="absolute inset-0 z-0">
              <img
                alt="Screw Wood Construction Quality"
                className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                src="/images/bangalore_hero_building.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3 text-center pt-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#f2bd19] text-slate-900 text-[11px] font-black uppercase tracking-wider shadow-md">
                🛡️ 100% COVERED GUARANTEE
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-white">
                Protect Your Family Investment
              </h3>
              <p className="text-slate-300 text-xs font-normal max-w-xs mx-auto">
                No unexpected repair costs or contractor ghosting. Get 10-year structural warranty &amp; zero-cost maintenance.
              </p>
            </div>

            <div className="relative z-10 space-y-4 text-center pb-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-1">
                <span className="text-2xl block">🏆</span>
                <h4 className="text-white font-extrabold text-xs">430+ Quality Checks</h4>
                <p className="text-slate-300 text-[11px]">Certified by structural engineers</p>
              </div>

              <button
                type="button"
                onClick={openCallModal}
                className="w-full bg-[#f2bd19] hover:bg-amber-500 text-slate-900 font-extrabold text-xs uppercase tracking-wider py-4 rounded-2xl shadow-lg transition-all cursor-pointer"
              >
                CLAIM YOUR 10-YR GUARANTEE 📞
              </button>
            </div>
          </div>

          {/* Right Column: With Screw Wood Construction (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-[32px] overflow-hidden shadow-xl border-2 border-[#f2bd19] flex flex-col justify-between transition-all hover:shadow-2xl group">
            <div className="bg-[#f2bd19] py-4 px-6 text-center text-slate-900 font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2">
              <span>✓ With Screw Wood</span>
            </div>

            <div className="p-6 md:p-8 space-y-5 text-xs text-slate-700 flex-grow">
              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-slate-900 bg-amber-100 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Day 1</span>
                <span className="text-slate-900 text-right font-extrabold">10-Year structural warranty initiated.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-slate-900 bg-amber-100 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 1</span>
                <span className="text-slate-900 text-right font-extrabold">Covered under zero-cost maintenance*.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-slate-900 bg-amber-100 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 2</span>
                <span className="text-slate-900 text-right font-extrabold">Free routine inspection &amp; seal checks.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-slate-900 bg-amber-100 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 5</span>
                <span className="text-slate-900 text-right font-extrabold">Ongoing structural support &amp; audit.</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                <span className="font-black text-slate-900 bg-amber-100 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 7</span>
                <span className="text-slate-900 text-right font-extrabold">Protected under long-term warranty*.</span>
              </div>

              <div className="flex items-start justify-between pb-1 gap-3">
                <span className="font-black text-slate-900 bg-amber-100 px-2.5 py-1 rounded-lg text-[10px] uppercase shrink-0">Year 10</span>
                <span className="text-slate-900 text-right font-extrabold">Complete peace of mind achieved.</span>
              </div>
            </div>

            <div className="p-6 bg-emerald-50 border-t border-emerald-100 flex justify-between items-center">
              <div className="text-emerald-700 font-black text-xs uppercase tracking-wider">
                You Save
              </div>
              <div className="text-emerald-700 font-black text-lg sm:text-xl">
                ₹7–₹10 Lakhs Total
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
