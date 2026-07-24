export default function Hero() {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern Interior"
          className="w-full h-full object-cover"
          src="/images/bangalore_hero_building.png"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-dark-charcoal text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Building <span className="text-primary-orange">Bangalore's</span> Dream Homes & Apartments
            </h1>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary-orange/10 p-2 rounded-full text-primary-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-dark-charcoal">1:1 Consultation with <span className="text-primary-orange">Bangalore's Top Architects</span></p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-orange/10 p-2 rounded-full text-primary-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-dark-charcoal">Meet <span className="text-primary-orange">Verified Contractors</span> for BDA/BBMP limits</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-orange/10 p-2 rounded-full text-primary-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-dark-charcoal">Compare <span className="text-primary-orange">quotes &amp; materials</span> for local climate needs</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary-orange/20 px-6 py-3 rounded-xl w-fit flex items-center gap-2 shadow-sm">
              <span className="text-primary-orange font-bold">✓</span>
              <span className="text-dark-charcoal font-bold">+1,500 Bangalore Homes Delivered</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-8 rounded-[40px] shadow-2xl w-full max-w-md border border-gray-100">
              <h3 className="text-2xl font-bold text-dark-charcoal mb-6 text-center">Start Your Construction Journey</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Full Name*</label>
                  <input className="w-full bg-gray-50 border-gray-200 rounded-2xl p-4 focus:ring-primary-orange focus:border-primary-orange" placeholder="Enter your name" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Mobile Number*</label>
                  <input className="w-full bg-gray-50 border-gray-200 rounded-2xl p-4 focus:ring-primary-orange focus:border-primary-orange" placeholder="Enter mobile number" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Select your property's city*</label>
                  <select className="w-full bg-gray-50 border-gray-200 rounded-2xl p-4 focus:ring-primary-orange focus:border-primary-orange" defaultValue="Bangalore">
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
                <button className="w-full bg-primary-orange text-white py-5 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 transition-colors mt-4" type="submit">
                  Talk to an Expert
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
