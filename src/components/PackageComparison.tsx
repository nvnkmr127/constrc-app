'use client';

import React from 'react';
import { openCallModal } from '@/components/CallModal';

export default function PackageComparison() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 font-sans" id="packages">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-primary-orange font-black uppercase tracking-widest text-xs">
            TRANSPARENT PRICING &amp; SPECS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Screw Wood Construction Packages
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Simple choices. Transparent material wallets. Built around your home budget. Swipe left/right on mobile.
          </p>
        </div>

        {/* Swipeable Carousel on Mobile / 4-Col Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:pb-0 md:grid md:grid-cols-4 md:overflow-visible">
          {/* ESSENTIAL */}
          <div className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative shrink-0 md:shrink">
            <div className="bg-slate-900 py-3.5 text-center text-white font-black text-sm uppercase tracking-wider">
              Essential
            </div>
            <div className="bg-orange-50/60 p-6 text-center border-b border-slate-100">
              <div className="text-3xl font-black text-slate-900">₹1,849</div>
              <div className="text-xs text-slate-500 font-bold">/sqft (incl. GST)</div>
              <span className="inline-block mt-2 text-[10px] font-black uppercase text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                Rental / Budget
              </span>
            </div>
            <div className="p-6 flex-grow space-y-3 text-xs text-slate-700">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">TMT Steel:</span>
                <span className="font-extrabold text-slate-900">Sunvik / Kamdhenu</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Cement:</span>
                <span className="font-extrabold text-slate-900">Dalmia / Bharathi</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Flooring:</span>
                <span className="font-extrabold text-slate-900">₹60/sqft wallet</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Bathroom:</span>
                <span className="font-extrabold text-slate-900">₹30k / bath (Cera)</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Main Door:</span>
                <span className="font-extrabold text-slate-900">₹30,000 wallet</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">UG Sump:</span>
                <span className="font-extrabold text-slate-900">6 KL Masonry</span>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <button
                type="button"
                onClick={openCallModal}
                className="w-full py-3.5 border border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Select Package
              </button>
            </div>
          </div>

          {/* PRIME */}
          <div className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-primary-orange flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative shrink-0 md:shrink">
            <div className="bg-primary-orange py-3.5 text-center text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-1.5">
              <span>★ PRIME (MOST POPULAR)</span>
            </div>
            <div className="bg-orange-50 p-6 text-center border-b border-slate-100">
              <div className="text-3xl font-black text-primary-orange">₹2,049</div>
              <div className="text-xs text-slate-500 font-bold">/sqft (incl. GST)</div>
              <span className="inline-block mt-2 text-[10px] font-black uppercase text-primary-orange bg-white px-2.5 py-1 rounded-full border border-orange-200 shadow-sm">
                Family Home Recommended
              </span>
            </div>
            <div className="p-6 flex-grow space-y-3 text-xs text-slate-700">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">TMT Steel:</span>
                <span className="font-extrabold text-slate-900">JSW NeoSteel / Jindal</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Cement:</span>
                <span className="font-extrabold text-slate-900">Birla Super / UltraTech</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Flooring:</span>
                <span className="font-extrabold text-slate-900">₹100/sqft vitrified</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Bathroom:</span>
                <span className="font-extrabold text-slate-900">₹45k / bath (Parryware)</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Main Door:</span>
                <span className="font-extrabold text-slate-900">₹50,000 Teak wood</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">UG Sump:</span>
                <span className="font-extrabold text-slate-900">8 KL RCC Sump</span>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-orange-50/50">
              <button
                type="button"
                onClick={openCallModal}
                className="w-full py-3.5 bg-primary-orange hover:bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Select Package
              </button>
            </div>
          </div>

          {/* SIGNATURE */}
          <div className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative shrink-0 md:shrink">
            <div className="bg-slate-900 py-3.5 text-center text-white font-black text-sm uppercase tracking-wider">
              Signature
            </div>
            <div className="bg-amber-50/60 p-6 text-center border-b border-slate-100">
              <div className="text-3xl font-black text-slate-900">₹2,349</div>
              <div className="text-xs text-slate-500 font-bold">/sqft (incl. GST)</div>
              <span className="inline-block mt-2 text-[10px] font-black uppercase text-amber-900 bg-white px-2.5 py-1 rounded-full border border-amber-200">
                Premium Duplex
              </span>
            </div>
            <div className="p-6 flex-grow space-y-3 text-xs text-slate-700">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">TMT Steel:</span>
                <span className="font-extrabold text-slate-900">JSW / Vizag Fe550D</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Cement:</span>
                <span className="font-extrabold text-slate-900">UltraTech / Ramco</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Flooring:</span>
                <span className="font-extrabold text-slate-900">₹150/sqft granite</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Bathroom:</span>
                <span className="font-extrabold text-slate-900">₹70k / bath (Jaquar)</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Main Door:</span>
                <span className="font-extrabold text-slate-900">₹80,000 Teak wood</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">UG Sump:</span>
                <span className="font-extrabold text-slate-900">10 KL RCC Sump</span>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <button
                type="button"
                onClick={openCallModal}
                className="w-full py-3.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Select Package
              </button>
            </div>
          </div>

          {/* ELITE */}
          <div className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative shrink-0 md:shrink">
            <div className="bg-slate-900 py-3.5 text-center text-white font-black text-sm uppercase tracking-wider">
              Elite
            </div>
            <div className="bg-slate-100 p-6 text-center border-b border-slate-100">
              <div className="text-3xl font-black text-slate-900">₹2,699</div>
              <div className="text-xs text-slate-500 font-bold">/sqft (incl. GST)</div>
              <span className="inline-block mt-2 text-[10px] font-black uppercase text-slate-700 bg-white px-2.5 py-1 rounded-full border border-slate-300">
                Luxury Villa
              </span>
            </div>
            <div className="p-6 flex-grow space-y-3 text-xs text-slate-700">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">TMT Steel:</span>
                <span className="font-extrabold text-slate-900">JSW / Jindal Fe550D</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Cement:</span>
                <span className="font-extrabold text-slate-900">UltraTech Premium</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Flooring:</span>
                <span className="font-extrabold text-slate-900">₹220/sqft marble</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Bathroom:</span>
                <span className="font-extrabold text-slate-900">₹1.0L / bath (Kohler)</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">Main Door:</span>
                <span className="font-extrabold text-slate-900">₹1,25,000 Teak wood</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-500">UG Sump:</span>
                <span className="font-extrabold text-slate-900">12 KL RCC Sump</span>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <button
                type="button"
                onClick={openCallModal}
                className="w-full py-3.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Select Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
