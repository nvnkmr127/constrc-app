export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary-orange"></div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">What We Offer</span>
            </div>
            <h2 className="text-5xl font-extrabold text-dark-charcoal leading-tight">
              Driven By Quality, Defined By Results
            </h2>
          </div>
          <a className="bg-primary-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition hover:bg-orange-600" href="#">
            VIEW ALL SERVICES <span className="bg-black/20 rounded-full p-1 text-xs">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-4 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow group">
            <div className="relative overflow-hidden rounded-[30px] mb-6">
              <img
                alt="Building Construction"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                src="/images/bangalore_house_construction.png"
              />
              <div className="absolute bottom-4 right-4 bg-primary-orange p-3 rounded-full text-white">
                <span className="text-xs">→</span>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-orange text-2xl">engineering</span>
                </div>
                <h3 className="text-2xl font-bold">Building Construction</h3>
              </div>
              <p className="text-slate-500 text-sm">Expert residential construction across South and East Bangalore, adhering to strict BBMP guidelines.</p>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-4 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow group">
            <div className="relative overflow-hidden rounded-[30px] mb-6">
              <img
                alt="Commercial Renovate"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                src="/images/bangalore_commercial_complex.png"
              />
              <div className="absolute bottom-4 right-4 bg-primary-orange p-3 rounded-full text-white">
                <span className="text-xs">→</span>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-orange text-2xl">store</span>
                </div>
                <h3 className="text-2xl font-bold">Commercial Renovate</h3>
              </div>
              <p className="text-slate-500 text-sm">Transforming tech parks and commercial spaces in Whitefield, Indiranagar, and Koramangala.</p>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-4 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow group">
            <div className="relative overflow-hidden rounded-[30px] mb-6">
              <img
                alt="Architecture Design"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                src="/images/bangalore_architect_planning.png"
              />
              <div className="absolute bottom-4 right-4 bg-primary-orange p-3 rounded-full text-white">
                <span className="text-xs">→</span>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-orange text-2xl">architecture</span>
                </div>
                <h3 className="text-2xl font-bold">Architecture Design</h3>
              </div>
              <p className="text-slate-500 text-sm">Modern, climate-responsive architectural designs tailored for Bangalore's unique weather and space constraints.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
