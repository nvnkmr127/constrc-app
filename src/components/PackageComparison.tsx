export default function PackageComparison() {
  return (
    <section className="py-24 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-charcoal mb-4">Package Comparison</h2>
          <p className="text-slate-500 font-medium">Choose the plan that fits your vision and budget</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Essential Package */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="bg-primary-orange py-4 text-center text-white font-bold">Essential Package</div>
            <div className="bg-[#fff9e6] p-6 text-center border-b border-gray-100">
              <div className="text-3xl font-black text-dark-charcoal">₹1,875</div>
              <div className="text-xs text-slate-500">/sqft (incl. GST)</div>
            </div>
            <div className="p-6 flex-grow space-y-4">
              <div className="text-xs font-bold text-primary-orange uppercase tracking-wider">Materials Used:</div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Steel:</span><span className="text-xs font-medium">SUNVIK</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Cement:</span><span className="text-xs font-medium">Dalmia</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Bathroom:</span><span className="text-xs font-medium">CERA</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Door &amp; Windows:</span><span className="text-xs font-medium">Niki</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Tank Capacity:</span><span className="text-xs font-medium">1,000/5,000 Ltr</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Electrical:</span><span className="text-xs font-medium">Legrand</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Paints:</span><span className="text-xs font-medium">Asian Paints</span></div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary-orange">home_repair_service</span>
                <div className="text-xs font-bold">Zero Cost Maintenance*<br /><span className="text-slate-500">5 Years</span></div>
              </div>
              <button className="w-full py-3 border border-primary-orange text-primary-orange rounded-xl font-bold text-sm hover:bg-primary-orange hover:text-white transition-colors">More Details</button>
            </div>
          </div>
          {/* Premier Package */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="bg-primary-orange py-4 text-center text-white font-bold">Premier Package</div>
            <div className="bg-[#fff9e6] p-6 text-center border-b border-gray-100">
              <div className="text-3xl font-black text-dark-charcoal">₹2,019</div>
              <div className="text-xs text-slate-500">/sqft (incl. GST)</div>
            </div>
            <div className="p-6 flex-grow space-y-4">
              <div className="text-xs font-bold text-[#8e443d] uppercase tracking-wider">Materials Used:</div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Steel:</span><span className="text-xs font-medium">JINDAL</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Cement:</span><span className="text-xs font-medium">Bharathi</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Bathroom:</span><span className="text-xs font-medium">Parryware</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Door &amp; Windows:</span><span className="text-xs font-medium">LESSO Niki</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Tank Capacity:</span><span className="text-xs font-medium">1,500/6,000 Ltr</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Electrical:</span><span className="text-xs font-medium">Legrand Allzy</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Paints:</span><span className="text-xs font-medium">Asian Paints</span></div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary-orange">home_repair_service</span>
                <div className="text-xs font-bold">Zero Cost Maintenance*<br /><span className="text-slate-500">5 Years</span></div>
              </div>
              <button className="w-full py-3 border border-primary-orange text-primary-orange rounded-xl font-bold text-sm hover:bg-primary-orange hover:text-white transition-colors">More Details</button>
            </div>
          </div>
          {/* Infinia Package */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="bg-primary-orange py-4 text-center text-white font-bold">Infinia Package</div>
            <div className="bg-[#fff9e6] p-6 text-center border-b border-gray-100">
              <div className="text-3xl font-black text-dark-charcoal">₹2,289</div>
              <div className="text-xs text-slate-500">/sqft (incl. GST)</div>
            </div>
            <div className="p-6 flex-grow space-y-4">
              <div className="text-xs font-bold text-[#8e443d] uppercase tracking-wider">Materials Used:</div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Steel:</span><span className="text-xs font-medium">JSW</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Cement:</span><span className="text-xs font-medium">Birla Super</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Bathroom:</span><span className="text-xs font-medium">Jaquar</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Door &amp; Windows:</span><span className="text-xs font-medium">LESSO Etti</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Tank Capacity:</span><span className="text-xs font-medium">2,000/7,000 Ltr</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Electrical:</span><span className="text-xs font-medium">Legrand Myrius</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Paints:</span><span className="text-xs font-medium">Asian Paints</span></div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary-orange">home_repair_service</span>
                <div className="text-xs font-bold">Zero Cost Maintenance*<br /><span className="text-slate-500">10 Years</span></div>
              </div>
              <button className="w-full py-3 border border-primary-orange text-primary-orange rounded-xl font-bold text-sm hover:bg-primary-orange hover:text-white transition-colors">More Details</button>
            </div>
          </div>
          {/* Pinnacle Package */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="bg-primary-orange py-4 text-center text-white font-bold">Pinnacle Package</div>
            <div className="bg-[#fff9e6] p-6 text-center border-b border-gray-100">
              <div className="text-3xl font-black text-dark-charcoal">₹2,478</div>
              <div className="text-xs text-slate-500">/sqft (incl. GST)</div>
            </div>
            <div className="p-6 flex-grow space-y-4">
              <div className="text-xs font-bold text-[#8e443d] uppercase tracking-wider">Materials Used:</div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Steel:</span><span className="text-xs font-medium">TATA TISCON</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Cement:</span><span className="text-xs font-medium">UltraTech</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Bathroom:</span><span className="text-xs font-medium">KOHLER</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Door &amp; Windows:</span><span className="text-xs font-medium">LESSO Etti</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Tank Capacity:</span><span className="text-xs font-medium">2,500/8,000 Ltr</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Electrical:</span><span className="text-xs font-medium">Legrand Mylinc</span></div>
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Paints:</span><span className="text-xs font-medium">Asian Paints</span></div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary-orange">home_repair_service</span>
                <div className="text-xs font-bold">Zero Cost Maintenance*<br /><span className="text-slate-500">10 Years</span></div>
              </div>
              <button className="w-full py-3 border border-primary-orange text-primary-orange rounded-xl font-bold text-sm hover:bg-primary-orange hover:text-white transition-colors">More Details</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-primary-orange text-white px-10 py-4 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity">Compare Packages</button>
          <button className="border-2 border-primary-orange text-primary-orange px-10 py-4 rounded-full font-bold hover:bg-primary-orange hover:text-white transition-all">Ask Our Experts</button>
        </div>
      </div>
    </section>
  );
}
