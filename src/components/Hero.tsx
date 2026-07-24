'use client';

import LocationAutocomplete from '@/components/LocationAutocomplete';

export default function Hero() {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern Interior"
          className="w-full h-full object-cover"
          src="/images/bangalore_hero_building.png"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-dark-charcoal text-4xl md:text-7xl font-extrabold leading-tight mb-8">
              Building <span className="text-primary-orange">Bangalore's</span> Dream Homes &amp; Apartments
            </h1>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary-orange/10 p-2 rounded-full text-primary-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-dark-charcoal">1:1 Consultation with <span className="text-primary-orange">Bangalore's Top Architects</span></p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-orange/10 p-2 rounded-full text-primary-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-dark-charcoal">Meet <span className="text-primary-orange">Verified Contractors</span> for BDA/BBMP limits</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-orange/10 p-2 rounded-full text-primary-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-dark-charcoal">Compare <span className="text-primary-orange">quotes &amp; materials</span> for local climate needs</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary-orange/20 px-6 py-3 rounded-xl w-fit flex items-center gap-2 shadow-sm">
              <span className="text-primary-orange font-bold">✓</span>
              <span className="text-dark-charcoal font-bold">+1,500 Bangalore Homes Delivered</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-1 text-center tracking-tight">
                Start Your Construction Journey
              </h3>
              <p className="text-slate-500 text-xs font-medium text-center mb-6">
                Get a free quote &amp; consultation from Bangalore experts
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                    Full Name*
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition-all"
                    placeholder="Enter your full name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                    Mobile Number*
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition-all"
                    placeholder="Enter 10-digit mobile number"
                    type="tel"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                    Property Location*
                  </label>
                  <LocationAutocomplete />
                </div>
                <button
                  className="w-full bg-primary-orange hover:bg-orange-600 text-white font-extrabold text-base uppercase tracking-wider py-4 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 mt-4"
                  type="submit"
                >
                  Talk to an Expert <span className="text-lg">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
