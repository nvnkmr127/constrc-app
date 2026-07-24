export default function Blog() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary-orange"></div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">OUR BLOG &amp; NEWS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-charcoal">Latest News Posts<br />And Articles</h2>
          </div>
          <a className="bg-primary-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2" href="#">
            VIEW ALL POSTS <span className="bg-black/20 rounded-full p-1 text-xs">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Cards */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-sm group border border-slate-100">
            <div className="relative h-64">
              <img
                alt="Blog"
                className="w-full h-full object-cover"
                src="/images/bangalore_modern_interior.png"
              />
              <div className="absolute bottom-4 right-4 bg-dark-charcoal text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase">30 MAY</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition">Navigating BBMP Construction Approvals</h4>
              <p className="text-gray-500 text-sm mb-6">Our clients trust us for delivering innovative solutions and exceptional service.</p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-[10px] font-bold uppercase text-gray-400">
                <span className="">👤 By Admin</span>
                <span className="">💬 02 Comments</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[40px] overflow-hidden shadow-sm group border border-slate-100">
            <div className="relative h-64">
              <img
                alt="Blog"
                className="w-full h-full object-cover"
                src="/images/bangalore_commercial_complex.png"
              />
              <div className="absolute bottom-4 right-4 bg-dark-charcoal text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase">09 JUNE</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition">Why Timely Delivery Matters in Bangalore Real Estate</h4>
              <p className="text-gray-500 text-sm mb-6">Innovative solutions that build customer trust for generations to come.</p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-[10px] font-bold uppercase text-gray-400">
                <span className="">👤 By Admin</span>
                <span className="">💬 03 Comments</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[40px] overflow-hidden shadow-sm group border border-slate-100">
            <div className="relative h-64">
              <img
                alt="Blog"
                className="w-full h-full object-cover"
                src="/images/bangalore_hero_building.png"
              />
              <div className="absolute bottom-4 right-4 bg-dark-charcoal text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase">25 APRIL</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition">Designing for Bangalore's Unique Climate</h4>
              <p className="text-gray-500 text-sm mb-6">Expert tips for defining the results that matter for your future home.</p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-[10px] font-bold uppercase text-gray-400">
                <span className="">👤 By Admin</span>
                <span className="">💬 02 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
