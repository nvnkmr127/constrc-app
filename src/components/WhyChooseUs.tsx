export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-[2px] bg-primary-orange"></div>
          <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">Our Commitment</span>
        </div>
        <h2 className="text-5xl font-extrabold text-dark-charcoal">What Makes Us Different</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <img
              alt="Affordable"
              className="rounded-full w-48 h-48 object-cover"
              src="/images/bangalore_modern_interior.png"
            />
            <div className="absolute bottom-2 left-2 bg-primary-orange p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">savings</span>
            </div>
          </div>
          <h4 className="text-xl font-bold mb-4">Affordable Bangalore Realty</h4>
          <p className="text-gray-500 text-sm">We prioritize communication and simplicity, making your property journey smooth in the fast-paced IT hub.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <img
              alt="Expertise"
              className="rounded-full w-48 h-48 object-cover"
              src="/images/bangalore_architect_planning.png"
            />
            <div className="absolute bottom-2 left-2 bg-primary-orange p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">workspace_premium</span>
            </div>
          </div>
          <h4 className="text-xl font-bold mb-4">Local Expertise You Can Trust</h4>
          <p className="text-gray-500 text-sm">Our experience with BDA and BBMP approvals guides you through every step with knowledge and care.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <img
              alt="Process"
              className="rounded-full w-48 h-48 object-cover"
              src="/images/bangalore_house_construction.png"
            />
            <div className="absolute bottom-2 left-2 bg-primary-orange p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">autorenew</span>
            </div>
          </div>
          <h4 className="text-xl font-bold mb-4">Hassle-Free Process</h4>
          <p className="text-gray-500 text-sm">We make your property journey smooth and stress-free through every step of construction.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <img
              alt="Value"
              className="rounded-full w-48 h-48 object-cover"
              src="/images/bangalore_hero_building.png"
            />
            <div className="absolute bottom-2 left-2 bg-primary-orange p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">trending_up</span>
            </div>
          </div>
          <h4 className="text-xl font-bold mb-4">Long-Term Value</h4>
          <p className="text-gray-500 text-sm">Every project is built with quality and vision, designed to last for generations to come.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none">
        <img
          alt="Skyline"
          className="w-full"
          src="/images/bangalore_commercial_complex.png"
        />
      </div>
    </section>
  );
}
