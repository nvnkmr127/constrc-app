export default function Testimonials() {
  return (
    <>
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#FAF7F2] rounded-3xl md:rounded-[50px] md:rounded-tr-[90px] p-6 md:p-12 border border-orange-100/80 shadow-xs">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold text-dark-charcoal mb-2 tracking-tight">
                Turn Your Vision into Reality - In Just a Few Simple Steps
              </h2>
              <p className="text-slate-500 text-xs md:text-sm font-medium">
                Experience expert-designed construction &amp; interiors tailored to your style, budget, and lifestyle - effortlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Left Side 6 Steps Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xs relative min-h-[170px] flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
                      1
                    </div>
                    {/* Illustration Graphic 1 */}
                    <div className="w-14 h-12 flex items-center justify-end text-primary-orange/40">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-dark-charcoal mt-6 leading-snug">
                    Book<br />Consultation
                  </h4>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xs relative min-h-[170px] flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
                      2
                    </div>
                    {/* Illustration Graphic 2 */}
                    <div className="w-14 h-12 flex items-center justify-end text-primary-orange/40">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-dark-charcoal mt-6 leading-snug">
                    Meet Designer
                  </h4>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xs relative min-h-[170px] flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
                      3
                    </div>
                    {/* Illustration Graphic 3 */}
                    <div className="w-14 h-12 flex items-center justify-end text-primary-orange/40">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-dark-charcoal mt-6 leading-snug">
                    Share your<br />requirements
                  </h4>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xs relative min-h-[170px] flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
                      4
                    </div>
                    {/* Illustration Graphic 4 */}
                    <div className="w-14 h-12 flex items-center justify-end text-primary-orange/40">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-dark-charcoal mt-6 leading-snug">
                    Compare &amp;<br />Finalise
                  </h4>
                </div>

                {/* Step 5 */}
                <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xs relative min-h-[170px] flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
                      5
                    </div>
                    {/* Illustration Graphic 5 */}
                    <div className="w-14 h-12 flex items-center justify-end text-primary-orange/40">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-dark-charcoal mt-6 leading-snug">
                    Get quality<br />checked
                  </h4>
                </div>

                {/* Step 6 */}
                <div className="bg-white p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xs relative min-h-[170px] flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
                      6
                    </div>
                    {/* Illustration Graphic 6 */}
                    <div className="w-14 h-12 flex items-center justify-end text-primary-orange/40">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-dark-charcoal mt-6 leading-snug">
                    Move-In Made<br />Beautiful
                  </h4>
                </div>
              </div>

              {/* Right Side Video Testimonial Card */}
              <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-lg flex flex-col justify-between">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-52 group">
                  <img
                    alt="Kavita's Interior Transformation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/indian_professional_woman_1.png"
                  />
                  {/* Top Branding Badges */}
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-extrabold text-primary-orange shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-orange"></span>
                    Screw Wood
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-extrabold text-dark-charcoal shadow-sm">
                    Verified
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/35 transition-colors">
                    <div className="w-14 h-14 bg-primary-orange text-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-2xl font-black text-white tracking-tight drop-shadow-lg">
                      Screw Wood Homes
                    </span>
                  </div>
                </div>

                <div className="text-center flex-grow flex flex-col justify-between">
                  <p className="text-slate-500 text-xs font-medium px-2 mb-3 leading-relaxed">
                    They transformed their house into a dream home with Screw Wood Construction
                  </p>
                  <h5 className="text-xl font-extrabold text-dark-charcoal mb-4">Kavita</h5>

                  <div className="grid grid-cols-3 border-t border-slate-100 pt-4 text-center">
                    <div>
                      <p className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">Budget</p>
                      <p className="font-extrabold text-sm text-dark-charcoal mt-0.5">₹4.5 lacs</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">Home</p>
                      <p className="font-extrabold text-sm text-dark-charcoal mt-0.5">3BHK</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">City</p>
                      <p className="font-extrabold text-sm text-dark-charcoal mt-0.5">Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Wall of Love
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 font-medium">121 verified Google reviews • 5.0 star rating • Trusted across India.</p>
        </div>
        <div className="relative w-full overflow-hidden mb-16">
          <div className="flex animate-marquee-slow hover:[animation-play-state:paused] space-x-6 w-max px-4">
            {/* Card 1 */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_man_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I had my home construction done by Screw Wood. They provide the best quality and service that every company can't provide. They are the best in the industry."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg">MR</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Mohammed Rehan</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_woman_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I recently got my home constructed by Screw Wood and found this was the best place. They provided the best quality of work with real dedication."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">JS</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Jhansi Sony</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_man_2.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I chose Screw Wood for my apartment in Jayanagar Bangalore. I have got the best experience and the work on my project was excellent. Highly recommended."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">PM</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Prabavathi Muthukuru</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Card 4 */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_woman_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I am Nithil, from Marathahalli. I completed my home project with Screw Wood. They provide good service and supportive staff. I am very happy."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-lg">NB</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Nithil Bathli</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            {/* Clone set for seamless infinite scroll */}
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_man_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I had my home construction done by Screw Wood. Here they provide best service and quality that every company can't provide."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg">MR</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Mohammed Rehan</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
            <div className="w-[450px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="/images/indian_professional_woman_1.png"
                />
              </div>
              <p className="text-slate-600 text-lg mb-8 italic flex-grow">"I recently used Screw Wood and found this was the best choice. Their team provided the best quality of work."</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">JS</div>
                <div className="flex-grow">
                  <h5 className="text-slate-900 font-bold">Jhansi Sony</h5>
                  <p className="text-slate-400 text-xs uppercase font-bold">Happy Client</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                <img alt="Google" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
                Google Review • Screw Wood, Bangalore
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-fit mx-auto px-10 py-3 bg-white rounded-full shadow-lg border border-slate-100 flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_xkql96U6o2JB1YYdFR5IYCjecRx7ETRGZr6itw2blu15SMZY7CYf5wnFZNkbBK-R8xYwR9towv26Ksx1LlZiU1LHkz7RlpFt5Rrm6YcsfbjnVCXNRWpkmuzXug5QiJETxSYckJydOfqxj6evVHvLITKO7ozWwFWSh_D__ZQQhzEyRrbqXkJCZw35oLv6uDtwcCwWbWulpKS09kGJqy5uOYOCO3F_6Wl2yG6ZU_Y9cMIu4Bzql4YaZDpfR80yomZh0O2HWMYeWVg" />
            <span className="text-slate-900 text-lg">5.0 / 5.0</span>
          </div>
          <div className="flex text-yellow-400 text-base">★★★★★</div>
          <span className="text-slate-300">|</span>
          <span className="">121 Google Reviews</span>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1">
            Jayanagar, Bangalore
            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
