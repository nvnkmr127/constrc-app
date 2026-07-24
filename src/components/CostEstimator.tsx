export default function CostEstimator() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-24 relative z-10 font-montserrat">
        <div className="bg-[#2b261e] rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-block border border-primary-orange rounded-full px-4 py-1 mb-8">
              <span className="text-primary-orange text-xs font-bold tracking-widest uppercase">Free Cost Estimator</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6">How much will your home construction cost?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl">Get a room-wise estimate in under 3 minutes. Select your BHK, customise your scope, and see plan-wise pricing.</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-orange"></span>
                <span className="text-white font-medium">Economy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-orange"></span>
                <span className="text-white font-medium">Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-orange"></span>
                <span className="text-white font-medium">Luxury</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-primary-orange hover:opacity-90 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 shadow-lg transition-all">
              Get My Full Estimate <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-white/60 text-xs font-bold tracking-widest uppercase">Takes less than 3 mins</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-24 relative z-10 font-montserrat">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-1.5 h-16 bg-[#ff4155] rounded-full hidden md:block"></div>
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-dark-charcoal mb-2">Wondering about the cost?</h3>
              <p className="text-slate-500 font-medium">Get a free room-wise estimate for your home.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-gray-50 px-6 py-3 rounded-full border border-gray-100 text-xs font-bold text-dark-charcoal uppercase tracking-wider">1-4 BHK</div>
            <div className="bg-gray-50 px-6 py-3 rounded-full border border-gray-100 text-xs font-bold text-dark-charcoal uppercase tracking-wider">ECONOMY • PREMIUM • LUXURY</div>
            <div className="bg-gray-50 px-6 py-3 rounded-full border border-gray-100 text-xs font-bold text-dark-charcoal uppercase tracking-wider">~3 MIN</div>
          </div>
          <div className="flex items-center">
            <button className="bg-primary-orange hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-lg transition-all">
              Try the Estimator <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
