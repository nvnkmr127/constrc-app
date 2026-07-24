export default function MaintenanceComparison() {
  return (
    <section className="py-24 bg-white overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary-orange mb-2">The 10-Year Gap</h2>
          <p className="text-3xl md:text-4xl font-bold text-dark-charcoal">Others Ignore, We Cover</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-red-500 py-4 text-center">
              <h4 className="text-white font-bold text-xl">With Others</h4>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start gap-4">
                <div className="text-red-500 font-bold whitespace-nowrap">Day 1</div>
                <div className="text-sm text-slate-600">Project completed. Responsibility ends.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-red-500 font-bold whitespace-nowrap">Year 1</div>
                <div className="text-sm text-slate-600">Minor cracks appear. You handle repairs.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-red-500 font-bold whitespace-nowrap">Year 2</div>
                <div className="text-sm text-slate-600">Leakage issues. Extra expenses begin.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-red-500 font-bold whitespace-nowrap">Year 5</div>
                <div className="text-sm text-slate-600">Structural wear. No long-term support.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-red-500 font-bold whitespace-nowrap">Year 7</div>
                <div className="text-sm text-slate-600">Major repair work. High maintenance cost.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-red-500 font-bold whitespace-nowrap">Year 10</div>
                <div className="text-sm text-slate-600">You spend ₹7–₹10 Lakhs extra on fixes.</div>
              </div>
              <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="text-red-500 font-black text-xl leading-tight">You<br />Spend</div>
                <div className="text-red-500 font-black text-xl">₹7–₹10 Lakhs Extra</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white p-4 shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500 border border-gray-200">
              <img
                alt="Architectural Render"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600"
              />
            </div>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-primary-orange py-4 text-center">
              <h4 className="text-white font-bold text-xl">With Screw Wood</h4>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start gap-4">
                <div className="text-primary-orange font-bold whitespace-nowrap">Day 1</div>
                <div className="text-sm text-slate-600">Project completed with upto 10-year maintenance support*.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-primary-orange font-bold whitespace-nowrap">Year 1</div>
                <div className="text-sm text-slate-600">Covered under zero-cost maintenance*.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-primary-orange font-bold whitespace-nowrap">Year 2</div>
                <div className="text-sm text-slate-600">Repairs handled by us.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-primary-orange font-bold whitespace-nowrap">Year 5</div>
                <div className="text-sm text-slate-600">Ongoing support and structural assurance.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-primary-orange font-bold whitespace-nowrap">Year 7</div>
                <div className="text-sm text-slate-600">Protected under long-term maintenance warranty*.</div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="text-primary-orange font-bold whitespace-nowrap">Year 10</div>
                <div className="text-sm text-slate-600">You save ₹7–₹10 Lakhs in repair costs.</div>
              </div>
              <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="text-green-600 font-black text-xl leading-tight">You<br />Save</div>
                <div className="text-green-600 font-black text-xl">₹7–₹10 Lakhs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
