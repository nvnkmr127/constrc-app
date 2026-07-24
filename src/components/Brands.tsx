import React from 'react';

const track1 = [
  { name: 'UltraTech', desc: 'No.1 Structural Cement', category: 'Structural', icon: 'foundation' },
  { name: 'Tata Tiscon', desc: '500D TMT Rebars', category: 'Steel', icon: 'hardware' },
  { name: 'Saint-Gobain', desc: 'Architectural Glass', category: 'Glass', icon: 'window' },
  { name: 'Finolex', desc: 'Heavy Duty Plumbing', category: 'Plumbing', icon: 'plumbing' },
  { name: 'Greenply', desc: 'BWP Marine Plywood', category: 'Woodwork', icon: 'table_restaurant' },
  { name: 'Astral Pipes', desc: 'CPVC Lead-Free Pipes', category: 'Plumbing', icon: 'water' },
];

const track2 = [
  { name: 'Jaquar', desc: 'Premium Bath Fittings', category: 'Bathware', icon: 'water_drop' },
  { name: 'Kohler', desc: 'Luxury Sanitaryware', category: 'Sanitary', icon: 'bathtub' },
  { name: 'Asian Paints', desc: 'Royal Emulsion & Apex', category: 'Finishing', icon: 'format_paint' },
  { name: 'Havells', desc: 'FR Wires & Switches', category: 'Electrical', icon: 'electric_bolt' },
  { name: 'Schneider', desc: 'Smart Electricals', category: 'Automation', icon: 'power' },
  { name: 'Ebco', desc: 'Architectural Hardware', category: 'Fittings', icon: 'door_sliding' },
];

export default function Brands() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 text-slate-900 overflow-hidden relative">
      {/* Edge Gradient Fades for Seamless Vignette Effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-primary-orange text-xs font-extrabold uppercase tracking-widest mb-3">
          100% Genuine Materials Guarantee
        </span>
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">
          Premium Brand Partners We Build With
        </h3>
        <p className="text-slate-600 text-sm font-medium max-w-xl mx-auto">
          We source directly from India's most trusted manufacturers to ensure 430+ QASCON quality benchmarks on every square foot.
        </p>
      </div>

      {/* Dual Track Marquees */}
      <div className="space-y-6">
        {/* Track 1 (Scrolls Left) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max space-x-6 animate-marquee-slow hover:[animation-play-state:paused]">
            {[...track1, ...track1].map((b, i) => (
              <div
                key={`t1-${i}`}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[260px] hover:border-primary-orange hover:bg-white transition-all hover:scale-[1.02] shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{b.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-slate-900 text-base group-hover:text-primary-orange transition-colors">
                      {b.name}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded-full">
                      {b.category}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2 (Scrolls Right - Reverse) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max space-x-6 animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...track2, ...track2].map((b, i) => (
              <div
                key={`t2-${i}`}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[260px] hover:border-primary-orange hover:bg-white transition-all hover:scale-[1.02] shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{b.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-slate-900 text-base group-hover:text-primary-orange transition-colors">
                      {b.name}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded-full">
                      {b.category}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
