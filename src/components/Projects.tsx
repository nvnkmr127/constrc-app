export default function Projects() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary-orange"></div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">Our Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">We Provide Effective Solutions in Construction</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project Item 1 */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm flex flex-col group border border-slate-50">
              <div className="relative rounded-[35px] overflow-hidden mb-6 h-[400px]">
                <img
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src="/images/bangalore_commercial_complex.png"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="text-xs font-bold text-dark-charcoal flex items-center gap-1">📍 Whitefield, Bangalore</span>
                  </div>
                  <div className="bg-primary-orange p-2 rounded-full text-white text-xs">→</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold ml-2">Work With Energetic Team</h3>
            </div>
            {/* Project Item 2 */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm flex flex-col group border border-slate-50">
              <div className="relative rounded-[35px] overflow-hidden mb-6 h-[400px]">
                <img
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src="/images/bangalore_hero_building.png"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="text-xs font-bold text-dark-charcoal flex items-center gap-1">📍 Whitefield, Bangalore</span>
                  </div>
                  <div className="bg-primary-orange p-2 rounded-full text-white text-xs">→</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold ml-2">Mixed-Use Development</h3>
            </div>
            {/* Project Item 3 */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm flex flex-col group border border-slate-50">
              <div className="relative rounded-[35px] overflow-hidden mb-6 h-[400px]">
                <img
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src="/images/bangalore_modern_interior.png"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="text-xs font-bold text-dark-charcoal flex items-center gap-1">📍 Indiranagar, Bangalore</span>
                  </div>
                  <div className="bg-primary-orange p-2 rounded-full text-white text-xs">→</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold ml-2">Premier Office Tower</h3>
            </div>
            {/* Project Item 4 */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm flex flex-col group border border-slate-50">
              <div className="relative rounded-[35px] overflow-hidden mb-6 h-[400px]">
                <img
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src="/images/bangalore_house_construction.png"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="text-xs font-bold text-dark-charcoal flex items-center gap-1">📍 Whitefield, Bangalore</span>
                  </div>
                  <div className="bg-primary-orange p-2 rounded-full text-white text-xs">→</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold ml-2">Greenview Apartments</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative group">
              <img
                alt="Rahul Sharma"
                className="rounded-3xl w-full h-[350px] object-cover"
                src="/images/indian_professional_man_1.png"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-dark-charcoal p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <h5 className="text-white font-bold text-sm">Rahul Sharma</h5>
                  <p className="text-primary-orange text-[10px] uppercase">Chief Financial Officer</p>
                </div>
                <div className="bg-primary-orange p-2 rounded-full text-white">🔗</div>
              </div>
            </div>
            <div className="relative group">
              <img
                alt="Anjali Desai"
                className="rounded-3xl w-full h-[350px] object-cover"
                src="/images/indian_professional_woman_1.png"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-dark-charcoal p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <h5 className="text-white font-bold text-sm">Anjali Desai</h5>
                  <p className="text-primary-orange text-[10px] uppercase">Project Manager</p>
                </div>
                <div className="bg-primary-orange p-2 rounded-full text-white">🔗</div>
              </div>
            </div>
            <div className="col-span-2 flex gap-4 overflow-x-auto pb-4">
              <img
                alt="Small"
                className="w-32 h-32 rounded-2xl object-cover grayscale hover:grayscale-0 cursor-pointer"
                src="/images/indian_professional_man_2.png"
              />
              <img
                alt="Small"
                className="w-32 h-32 rounded-2xl object-cover grayscale hover:grayscale-0 cursor-pointer"
                src="/images/indian_professional_woman_1.png"
              />
              <img
                alt="Small"
                className="w-32 h-32 rounded-2xl object-cover grayscale hover:grayscale-0 cursor-pointer"
                src="/images/indian_professional_man_1.png"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary-orange"></div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">Our Expert Member</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-charcoal">Meet Our Expert Team</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              We are driven to improve the lives of our clients, our employees, and our community through our commitment to leadership.
            </p>
            <div className="grid grid-cols-5 gap-8 items-center opacity-40">
              <img alt="Logo" src="https://placehold.co/150x50/888?text=Client+Logo/AB6AXuAJ9jPEz_ObCivLzqb9C77PYBKlagNuXdvSNKzpzp5rVrRex_4fIiba6mmaYza5Y875BCiGefQLJPqoc98IEStHz3wdwyBfPCjVCCdKrqmQs-3BetUgVYVIEE0PmC9s0GU4vct7jj-Ut3n6enlOm1CrGSpVG1xgfkJiWO694txU_wMsOHE2UqoNoSwTGl9L6-Bq9ENUmt2ehqKEGU65rfiY1U1RbGNJOt2SyTEx2YXnTl-upMY0lgGKsPI10XZOFIri4RKpBOQV6qm2" />
              <img alt="Logo" src="https://placehold.co/150x50/888?text=Client+Logo/AB6AXuC7p4vIYxoXkyQ8A7Tlr_mIbpsTPhAD8hqZbpIcmYqFr0okrF_dbnz_wlBuqBrpw_Uhr3b6PA052LVwtzOa1oGCT_KV1CXGLNIIMqaguDbUkU8vZxlt35R2qeWJ7glyPU8zGjllsva_QryyTpzPb3QwbZYHQU4L3Q3SaE8SklifsefkbhTxY-9UCHf0TRVxeq1C7QGK3kJMh4Danf1p4XbCt0R63xAlUlpMNLr3RVGBhE42opmmrnBs0aZZucNK6OwxqEAbjQmEF3Us" />
              <img alt="Logo" src="https://placehold.co/150x50/888?text=Client+Logo/AB6AXuCK9jeCMiP05aVZqPO7eAhsgeQJQ2oMCrs-g3OXpvZM1emIr_njp1a3ho35-MpdEivB4bTY5DMFO9XVwjoGVw4A3kU9Tquk-BtN3OEToW2LbC3jHqilpsFl1FjmLFI_wzF8eYOZ8DXqn3-HB1o5IbY6Tz-EY6Bl5D76DDinMgRVbeWphLEQ55pMqwGOfHkoWSpq2vcEwBvJFeVufjgrO3wsBXTgZR71reBUoSFr5rVv56w8wfzPegJ2ed329XiOubin_u7N7TnngOTl" />
              <img alt="Logo" src="https://placehold.co/150x50/888?text=Client+Logo/AB6AXuAzF5QuLD8H8VSE5m1tR1EbpxCHAyMrzJxkMjR8Wg4P44bToL5pakYtJhrbJhNbthaJk8lvtk5RxPDgxfWaeXpT6ccIQsh0uty2-kYHheYi3irkf4AUGFuxiuubreGj4GJSFkvJwptzdb4Y6L6jnBwYHC3-JuhTviJz_Rv1Nt56LzTSkGh_H2sCA6UgHIPQia2fKhNhOHEVVeo8k0qfTNZSJF_V6EhhHQvXYpFO-UJYqfg8KCBT3gJn-GczDZKKtBKBmxngX2QjWx8L" />
              <img alt="Logo" src="https://placehold.co/150x50/888?text=Client+Logo/AB6AXuDbW1kSEu-fmVJ9Z5JULq5Ej6gMG5hPNbamU1uO5dx0u6eE-ntLfo8nhz5oARIyNBP8Me5hNRw6ipImmGINlsfoXDO9WWb_nKW1KrB7aPS3jMjPcxUjahdOcyKQnJi538GHEp2_0SfB5XAfPXk6QM8_BtHRGWefGgI9z5ECXOmNp-HCkmLVThdLEO5na-OuPyJ36FsMrFhHM1NNogjrU5jZPsGTLdAfpVpDxF2-myQzwT9tKVrRonXt314t05bew5vm0yylMskGAwor" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primary-orange py-6 overflow-hidden flex whitespace-nowrap border-y border-black/10">
        <div className="flex items-center space-x-12 animate-marquee text-white font-black text-2xl uppercase italic">
          <span>Building Construction ★ Home Construction ★ Material Recycling ★ Tools and Equipment</span>
          <span>Building Construction ★ Home Construction ★ Material Recycling ★ Tools and Equipment</span>
        </div>
      </div>
    </>
  );
}
