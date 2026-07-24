export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-primary-orange"></div>
            <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">CONSTRUCTION COMPANY</span>
          </div>
          <h2 className="text-5xl font-extrabold text-dark-charcoal mb-8">Your Construction<br />FAQ For Customers</h2>
          <p className="text-gray-500 mb-12 max-w-md">Real stories from homeowners and investors who trusted us to guide their real estate journey.</p>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
            <img
              alt="Support"
              className="w-20 h-20 rounded-full object-cover"
              src="/images/indian_professional_man_1.png"
            />
            <div>
              <p className="font-bold text-lg">Hello, I'm Kiran From Support.</p>
              <p className="text-gray-400 text-sm mb-4">Let me know if you have any questions.</p>
              <a className="bg-primary-orange text-white px-4 py-2 rounded-full text-xs font-bold uppercase" href="#">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between cursor-pointer">
            <span className="font-bold text-dark-charcoal">What Kind Of Warranty Does Screw Wood Offer?</span>
            <span className="bg-primary-orange/10 text-primary-orange p-2 rounded-full text-xs font-bold">●</span>
          </div>
          <div className="bg-dark-charcoal rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-xl">What Is The Process For Working With Us?</span>
              <span className="bg-white text-dark-charcoal p-2 rounded-full text-xs font-bold">●</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We begin with a detailed vision session, followed by architectural planning and rigorous project management from foundation to final walkthrough.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between cursor-pointer">
            <span className="font-bold text-dark-charcoal">What Types Of Projects Do You Specialize In?</span>
            <span className="bg-primary-orange text-white p-2 rounded-full text-xs font-bold">●</span>
          </div>
        </div>
      </div>
    </section>
  );
}
