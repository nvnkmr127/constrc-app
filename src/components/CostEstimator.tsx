'use client';

import React, { useState } from 'react';
import { openCallModal } from '@/components/CallModal';

interface PackageSpec {
  id: string;
  name: string;
  rate: number;
  badge?: string;
  recommendedFor: string;
  flooring: string;
  bathroomTile: string;
  mainDoor: string;
  windows: string;
  bathroomFittings: string;
  sump: string;
  elevation: string;
  steelCement: string;
  smartHome: string;
}

const packages: PackageSpec[] = [
  {
    id: 'essential',
    name: 'ESSENTIAL',
    rate: 1849,
    recommendedFor: 'Rental homes, investment properties & budget duplexes',
    flooring: '₹60/sq.ft indoor tiles',
    bathroomTile: '₹50/sq.ft wall & floor tiles',
    mainDoor: '₹30,000 door wallet',
    windows: 'Up to ₹450/sq.ft UPVC',
    bathroomFittings: '₹30,000 / bathroom (Cera / Hindware)',
    sump: '6 KL Masonry + 1.5 KL OHT',
    elevation: '₹1.50 Lakh elevation wallet',
    steelCement: 'Sunvik/Kamdhenu TMT Fe550D & Dalmia/Bharathi Cement',
    smartHome: 'Standard electrical points',
  },
  {
    id: 'prime',
    name: 'PRIME',
    rate: 2049,
    badge: 'MOST POPULAR',
    recommendedFor: 'Family homes - easiest choice for owner-occupied Bengaluru homes',
    flooring: '₹100/sq.ft vitrified tiles',
    bathroomTile: '₹75/sq.ft premium tiles',
    mainDoor: '₹50,000 Teak door wallet',
    windows: '₹550/sq.ft UPVC with mesh',
    bathroomFittings: '₹45,000 / bathroom (Parryware / Jaquar Essco)',
    sump: '8 KL RCC + 2 KL 4-layer OHT',
    elevation: '₹2.50 Lakh elevation wallet',
    steelCement: 'JSW NeoSteel / Jindal Panther & UltraTech / Birla Super',
    smartHome: 'EV + UPS + AC provisions included',
  },
  {
    id: 'signature',
    name: 'SIGNATURE',
    rate: 2349,
    recommendedFor: 'Premium duplexes & long-term personal residences',
    flooring: '₹150/sq.ft granite / large tiles',
    bathroomTile: '₹110/sq.ft designer tiles',
    mainDoor: '₹80,000 Teak wood door',
    windows: '₹650/sq.ft Premium UPVC',
    bathroomFittings: '₹70,000 / bathroom (Jaquar / Kohler entry)',
    sump: '10 KL RCC + 2 KL 4-layer OHT',
    elevation: '₹4.00 Lakh elevation wallet',
    steelCement: 'JSW NeoSteel / Vizag Fe550D & UltraTech / Ramco Cement',
    smartHome: 'EV + Solar + CCTV + Video Doorbell',
  },
  {
    id: 'elite',
    name: 'ELITE',
    rate: 2699,
    recommendedFor: 'Luxury villas & architect-designed custom homes',
    flooring: '₹220/sq.ft Italian marble / flooring',
    bathroomTile: '₹175/sq.ft luxury tiles',
    mainDoor: '₹1,25,000 Premium Teak door',
    windows: '₹800/sq.ft UPVC / Aluminium',
    bathroomFittings: '₹1,00,000 / bathroom (Kohler / Grohe / Jaquar premium)',
    sump: '12 KL RCC + 3 KL 4-layer OHT',
    elevation: '₹7.00 Lakh elevation wallet',
    steelCement: 'JSW NeoSteel / Jindal & UltraTech / Birla Super',
    smartHome: 'Automation-ready + EV + Solar + CCTV',
  },
];

export default function CostEstimator() {
  const [plotLength, setPlotLength] = useState<number>(30);
  const [plotWidth, setPlotWidth] = useState<number>(40);
  const [floorsCount, setFloorsCount] = useState<number>(2); // G+1
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(3);
  const [balconyArea, setBalconyArea] = useState<number>(150);
  const [parkingArea, setParkingArea] = useState<number>(200);
  const [selectedPkgId, setSelectedPkgId] = useState<string>('prime');
  const [activeTab, setActiveTab] = useState<'calculator' | 'materials' | 'timeline'>('calculator');

  // Calculation Logic per PDF Page 8:
  const groundPlotArea = plotLength * plotWidth;
  const livingFloorArea = Math.max(100, groundPlotArea - parkingArea);
  
  const totalLivingBUA = livingFloorArea * floorsCount;
  const balconyBUA = Math.round(balconyArea * 0.7);
  const parkingBUA = Math.round(parkingArea * 0.7);
  const totalBUA = totalLivingBUA + balconyBUA + parkingBUA;

  const currentPkg = packages.find((p) => p.id === selectedPkgId) || packages[1];
  const totalCost = totalBUA * currentPkg.rate;
  const estimatedLacs = (totalCost / 100000).toFixed(2);
  const estimatedCrores = (totalCost / 10000000).toFixed(2);

  const estimatedMonths = Math.max(5, Math.ceil(floorsCount * 2.2 + (totalBUA > 3000 ? 2 : 0)));

  return (
    <section className="py-16 bg-slate-50 text-slate-800 font-sans" id="calculator">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Clean Light Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-primary-orange text-xs font-black uppercase tracking-widest">
            ⚡ AI House Construction Price Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Calculate Your Home Construction Cost
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Transparent plot built-up area estimation, material brand specifications, and stage-wise payment schedules.
          </p>

          {/* Tab Filter Navigation */}
          <div className="flex justify-center gap-2 pt-4">
            {[
              { id: 'calculator', label: '1. Cost Calculator' },
              { id: 'materials', label: '2. Material Specifications' },
              { id: 'timeline', label: '3. Construction Timeline' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Calculator Widget (Clean White Layout, No Dark Background) */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Left Controls Box */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[36px] p-6 md:p-8 shadow-xl space-y-8">
              {/* 1. Plot Dimensions */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
                  1. Plot Size Presets &amp; Custom Dimensions
                </label>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: '30 x 40 (1200 sqft)', l: 30, w: 40 },
                    { label: '40 x 60 (2400 sqft)', l: 40, w: 60 },
                    { label: '50 x 80 (4000 sqft)', l: 50, w: 80 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setPlotLength(preset.l);
                        setPlotWidth(preset.w);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                        plotLength === preset.l && plotWidth === preset.w
                          ? 'bg-primary-orange text-white border-primary-orange shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Plot Length:</span>
                      <span className="text-primary-orange font-black">{plotLength} ft</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={100}
                      value={plotLength}
                      onChange={(e) => setPlotLength(Number(e.target.value))}
                      className="w-full accent-primary-orange cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Plot Width:</span>
                      <span className="text-primary-orange font-black">{plotWidth} ft</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={100}
                      value={plotWidth}
                      onChange={(e) => setPlotWidth(Number(e.target.value))}
                      className="w-full accent-primary-orange cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Number of Floors */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
                  2. Number of Floors
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { num: 1, label: 'G (Ground)' },
                    { num: 2, label: 'G + 1' },
                    { num: 3, label: 'G + 2' },
                    { num: 4, label: 'G + 3' },
                    { num: 5, label: 'G + 4' },
                  ].map((f) => (
                    <button
                      key={f.num}
                      type="button"
                      onClick={() => setFloorsCount(f.num)}
                      className={`py-3 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                        floorsCount === f.num
                          ? 'bg-primary-orange text-white border-primary-orange shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Room Configuration */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
                  3. Room &amp; Layout Configuration
                </label>
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                      Bedrooms: {bedrooms} BHK
                    </span>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBedrooms(b)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            bedrooms === b
                              ? 'bg-slate-900 text-white'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                      Bathrooms: {bathrooms} Baths
                    </span>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBathrooms(b)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            bathrooms === b
                              ? 'bg-slate-900 text-white'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Package Selection Cards */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
                  4. Choose Construction Package (Inclusive of GST)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packages.map((pkg) => {
                    const isSelected = selectedPkgId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPkgId(pkg.id)}
                        className={`text-left p-4 rounded-2xl border transition-all relative cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-primary-orange shadow-lg'
                            : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {pkg.badge && (
                          <span className="absolute top-3 right-3 bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                            {pkg.badge}
                          </span>
                        )}
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-black text-sm">{pkg.name}</span>
                          <span className="text-primary-orange font-black text-base">₹{pkg.rate.toLocaleString()}/sqft</span>
                        </div>
                        <p className={`text-[11px] font-normal leading-snug ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {pkg.recommendedFor}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Result Summary Box */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-[36px] p-6 md:p-8 shadow-xl space-y-6 text-slate-900 sticky top-28">
              <div className="border-b border-slate-200 pb-4">
                <span className="inline-block px-3 py-1 bg-orange-100 text-primary-orange text-[10px] font-extrabold uppercase tracking-widest rounded-full border border-orange-200 mb-2">
                  Estimated Summary
                </span>
                <p className="text-slate-500 text-xs font-semibold">Total Construction Price</p>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mt-1 tracking-tight">
                  ₹{estimatedLacs} <span className="text-2xl font-bold text-slate-500">Lacs</span>
                </h3>
                <p className="text-xs font-extrabold text-primary-orange mt-1">
                  (Approx. ₹{estimatedCrores} Cr incl. GST)
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold">Total Built-Up Area</p>
                  <p className="text-slate-900 font-black text-base">{totalBUA.toLocaleString()} sq.ft</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold">Est. Timeline</p>
                  <p className="text-emerald-600 font-black text-base">{estimatedMonths} Months</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold">Plot Area</p>
                  <p className="text-slate-900 font-bold">{groundPlotArea.toLocaleString()} sq.ft</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold">Package Tier</p>
                  <p className="text-slate-900 font-bold">{currentPkg.name} @ ₹{currentPkg.rate}</p>
                </div>
              </div>

              {/* Included Wallets Preview */}
              <div className="space-y-2.5 pt-1 text-xs">
                <h4 className="font-extrabold uppercase tracking-wider text-slate-900 text-[11px] border-b border-slate-100 pb-2">
                  Material Allowances ({currentPkg.name})
                </h4>
                <div className="flex justify-between">
                  <span className="text-slate-500">Flooring Wallet:</span>
                  <span className="font-bold text-slate-800">{currentPkg.flooring}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Main Door Wallet:</span>
                  <span className="font-bold text-slate-800">{currentPkg.mainDoor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Windows Allowance:</span>
                  <span className="font-bold text-slate-800">{currentPkg.windows}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Elevation Wallet:</span>
                  <span className="font-bold text-slate-800">{currentPkg.elevation}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={openCallModal}
                  className="w-full bg-primary-orange hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider py-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  TALK TO AN ADVISOR 📞
                </button>

                <button
                  type="button"
                  onClick={() => alert(`Detailed Estimate Summary:\n- Built-Up Area: ${totalBUA} sq.ft\n- Package: ${currentPkg.name} (₹${currentPkg.rate}/sq.ft)\n- Estimated Cost: ₹${estimatedLacs} Lacs\n- Timeline: ${estimatedMonths} Months\n\nOur team can email you a complete PDF proposal.`)}
                  className="w-full bg-slate-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  PREVIEW DETAILED QUOTATION PDF 📄
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center font-medium">
                * Indicative client-facing rates inclusive of GST. Subject to final BUA &amp; signed agreement.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Material Specifications Table */}
        {activeTab === 'materials' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl animate-fade-in space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-black text-slate-900">Included Material Wallets &amp; Specifications</h3>
              <p className="text-slate-500 text-xs mt-1">Detailed material brand allowances for {currentPkg.name} package @ ₹{currentPkg.rate}/sq.ft</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-2">
                  Structural &amp; Civil Specs
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong className="text-slate-900">Steel &amp; Cement:</strong> {currentPkg.steelCement}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong className="text-slate-900">Sump Capacity:</strong> {currentPkg.sump}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong className="text-slate-900">Smart Home &amp; Tech:</strong> {currentPkg.smartHome}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-2">
                  Finishes &amp; Fixtures Wallets
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong className="text-slate-900">Indoor Flooring:</strong> {currentPkg.flooring}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong className="text-slate-900">Bathroom Tiles:</strong> {currentPkg.bathroomTile}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong className="text-slate-900">Sanitary Fittings:</strong> {currentPkg.bathroomFittings}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  <strong className="text-slate-900">Front Elevation:</strong> {currentPkg.elevation}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={openCallModal}
              className="mt-4 bg-primary-orange hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer"
            >
              Customise Material Brands With Architect →
            </button>
          </div>
        )}

        {/* Tab 3: Construction Timeline & Payment Milestone */}
        {activeTab === 'timeline' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl animate-fade-in space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-black text-slate-900">Stage-Wise Escrow Payment Schedule</h3>
              <p className="text-slate-500 text-xs mt-1">Zero-risk escrow payment releases linked to 430+ QASCON quality audits.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-primary-orange font-black text-lg">10%</span>
                <p className="font-bold text-xs text-slate-900 mt-1">Booking &amp; Plan Approval</p>
                <p className="text-[10px] text-slate-500 mt-1">Architectural 3D &amp; Sanctions</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-primary-orange font-black text-lg">15%</span>
                <p className="font-bold text-xs text-slate-900 mt-1">Excavation &amp; Plinth</p>
                <p className="text-[10px] text-slate-500 mt-1">Foundation &amp; Sump RCC</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-primary-orange font-black text-lg">25%</span>
                <p className="font-bold text-xs text-slate-900 mt-1">Slab Casting</p>
                <p className="text-[10px] text-slate-500 mt-1">RCC Frame &amp; Columns</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-primary-orange font-black text-lg">25%</span>
                <p className="font-bold text-xs text-slate-900 mt-1">Masonry &amp; Plastering</p>
                <p className="text-[10px] text-slate-500 mt-1">Electrical &amp; Plumbing lines</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-emerald-600 font-black text-lg">25%</span>
                <p className="font-bold text-xs text-slate-900 mt-1">Finishing &amp; Handover</p>
                <p className="text-[10px] text-slate-500 mt-1">Tile work, Painting &amp; Keys</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
