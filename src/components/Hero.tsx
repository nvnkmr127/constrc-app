'use client';

import LocationAutocomplete from '@/components/LocationAutocomplete';

export default function Hero() {
  return (
    <section className="relative min-h-[760px] md:min-h-[820px] flex items-center overflow-hidden pt-24 md:pt-36 pb-14 md:pb-20 bg-slate-950 font-sans">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Bangalore Architecture"
          className="w-full h-full object-cover scale-105 filter brightness-75"
          src="/images/bangalore_hero_building.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text & Value Props (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-orange/20 border border-primary-orange/40 text-primary-orange text-[10px] sm:text-xs font-black uppercase tracking-widest backdrop-blur-md">
              ⚡ Bangalore's #1 Tech-Enabled Home Builder
            </div>

            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Building <span className="text-primary-orange">Bangalore's</span> Dream Homes &amp; Villas
            </h1>

            <p className="text-slate-300 text-sm sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Transparent package rates from <strong className="text-white">₹1,849/sq.ft</strong> with zero hidden costs, stage-wise escrow safety &amp; 430+ QASCON quality checks.
            </p>

            {/* Key Value Props Grid (3-Col Grid on Mobile too for compact height) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-1">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 sm:p-4 rounded-2xl text-center sm:text-left space-y-0.5 sm:space-y-1">
                <span className="text-xl sm:text-2xl block">🛡️</span>
                <h4 className="text-white font-extrabold text-[10px] sm:text-xs leading-tight">Stage Escrow</h4>
                <p className="text-slate-300 text-[9px] sm:text-[11px] hidden sm:block">Pay after quality checks.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 sm:p-4 rounded-2xl text-center sm:text-left space-y-0.5 sm:space-y-1">
                <span className="text-xl sm:text-2xl block">📐</span>
                <h4 className="text-white font-extrabold text-[10px] sm:text-xs leading-tight">1:1 3D Plans</h4>
                <p className="text-slate-300 text-[9px] sm:text-[11px] hidden sm:block">Architect floor plans.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2.5 sm:p-4 rounded-2xl text-center sm:text-left space-y-0.5 sm:space-y-1">
                <span className="text-xl sm:text-2xl block">🏆</span>
                <h4 className="text-white font-extrabold text-[10px] sm:text-xs leading-tight">10-Yr Warranty</h4>
                <p className="text-slate-300 text-[9px] sm:text-[11px] hidden sm:block">Structural warranty.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-1">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-1.5 shadow-sm text-[10px] sm:text-xs font-bold text-white">
                <span className="text-emerald-400">✓</span> +1,500 Homes Delivered in Bengaluru
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-1.5 shadow-sm text-[10px] sm:text-xs font-bold text-white">
                <span className="text-amber-400">★</span> 4.9/5 Google Rating
              </div>
            </div>
          </div>

          {/* Right Column Consultation Lead Form (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl w-full max-w-md border border-slate-200 text-slate-900 relative">
              <div className="text-center space-y-1 mb-4 sm:mb-6">
                <span className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-orange-100 text-primary-orange text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                  Free 1-on-1 Consultation
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Book Architect Session
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs font-medium">
                  Get a custom 3D layout &amp; itemized cost estimate
                </p>
              </div>

              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name*
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-slate-900 text-xs sm:text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-primary-orange transition-all"
                    placeholder="Enter full name"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number*
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:py-3 text-slate-900 text-xs sm:text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-primary-orange transition-all"
                    placeholder="Enter 10-digit mobile number"
                    type="tel"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Plot Location in Bengaluru*
                  </label>
                  <LocationAutocomplete />
                </div>

                <button
                  className="w-full bg-primary-orange hover:bg-orange-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  type="submit"
                >
                  TALK TO AN ARCHITECT NOW 📞
                </button>

                <p className="text-[9px] sm:text-[10px] text-slate-400 text-center font-medium">
                  🔒 Zero Spam • Instant Callback from Local Experts
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
