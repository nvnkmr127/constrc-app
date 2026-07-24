export default function Stats() {
  return (
    <>
      <div className="bg-white border-y border-gray-100 py-8 overflow-hidden flex whitespace-nowrap">
        <div className="flex items-center space-x-12 animate-marquee text-sm font-bold text-slate-600 uppercase tracking-wider">
          <div className="flex items-center space-x-12">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Timely Delivery</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Premium Material Quality</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Transparent Pricing</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>3D Visualization Available</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Bespoke Construction Designs</div>
          </div>
          <div className="flex items-center space-x-12">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Timely Delivery</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Premium Material Quality</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Transparent Pricing</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>3D Visualization Available</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-orange"></span>Bespoke Construction Designs</div>
          </div>
        </div>
      </div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-10 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl font-extrabold text-dark-charcoal">240+</div>
                <div className="h-10 w-1 bg-primary-orange"></div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Projects, Clients Served</p>
              </div>
              <img
                alt="Design Plan"
                className="rounded-2xl shadow-2xl"
                src="/images/bangalore_architect_planning.png"
              />
              <div className="absolute -bottom-10 -right-10 w-48">
                <img
                  alt="Construction Label"
                  className="rounded-full animate-spin-slow"
                  src="/images/bangalore_house_construction.png"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary-orange"></div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">About Us</span>
            </div>
            <h2 className="text-5xl font-extrabold text-dark-charcoal mb-8 leading-tight">
              Turning Your Ideas Into Beautifully Crafted Spaces
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We embrace the latest technologies and sustainable practices to create environmentally friendly and energy-efficient buildings. Our mission is not just to construct structures, but to build communities and spaces where people thrive and prosper.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-dark-charcoal p-8 rounded-3xl text-white relative">
                <div className="mb-4">
                  <img
                    alt="Icon"
                    src="/images/bangalore_commercial_complex.png"
                  />
                </div>
                <div className="text-4xl font-bold mb-1">85+</div>
                <p className="text-sm text-gray-400">Locations in Bangalore</p>
                <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">LOCAL REACH</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-500 italic text-sm">"Our commitment to excellence drives every brick we lay."</p>
              </div>
            </div>
            <a className="bg-primary-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 w-fit transition hover:bg-orange-600" href="#">
              LEARN MORE <span className="bg-black/20 rounded-full p-1 text-xs">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
