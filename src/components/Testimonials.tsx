export default function Testimonials() {
  return (
    <>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-charcoal mb-4">Turn Your Vision into Reality - In Just a Few Simple Steps</h2>
            <p className="text-slate-500 font-medium">Experience expert construction tailored to your style, budget, and lifestyle - effortlessly.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">1</div>
                <h4 className="text-xl font-bold text-dark-charcoal mb-2">Book Consultation</h4>
                <div className="w-full h-24 bg-white/50 rounded-2xl mt-4 flex items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-4xl text-primary-orange">calendar_month</span>
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">2</div>
                <h4 className="text-xl font-bold text-dark-charcoal mb-2">Meet Designer</h4>
                <div className="w-full h-24 bg-white/50 rounded-2xl mt-4 flex items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-4xl text-primary-orange">person</span>
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">3</div>
                <h4 className="text-xl font-bold text-dark-charcoal mb-2">Share your requirements</h4>
                <div className="w-full h-24 bg-white/50 rounded-2xl mt-4 flex items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-4xl text-primary-orange">assignment</span>
                </div>
              </div>
              {/* Step 4 */}
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">4</div>
                <h4 className="text-xl font-bold text-dark-charcoal mb-2">Compare &amp; Finalise</h4>
                <div className="w-full h-24 bg-white/50 rounded-2xl mt-4 flex items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-4xl text-primary-orange">compare_arrows</span>
                </div>
              </div>
              {/* Step 5 */}
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">5</div>
                <h4 className="text-xl font-bold text-dark-charcoal mb-2">Get quality checked</h4>
                <div className="w-full h-24 bg-white/50 rounded-2xl mt-4 flex items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-4xl text-primary-orange">verified</span>
                </div>
              </div>
              {/* Step 6 */}
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">6</div>
                <h4 className="text-xl font-bold text-dark-charcoal mb-2">Move-In Made Beautiful</h4>
                <div className="w-full h-24 bg-white/50 rounded-2xl mt-4 flex items-center justify-center opacity-40">
                  <span className="material-symbols-outlined text-4xl text-primary-orange">home</span>
                </div>
              </div>
            </div>
            {/* Video Testimonial Card */}
            <div className="bg-white p-6 rounded-[40px] shadow-2xl border border-gray-100 flex flex-col">
              <div className="relative rounded-[30px] overflow-hidden mb-6 h-64">
                <img
                  alt="Kavita's Home"
                  className="w-full h-full object-cover"
                  src="/images/indian_professional_woman_1.png"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-primary-orange shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="text-center flex-grow">
                <p className="text-slate-500 text-sm mb-4">They transformed their house into a dream home with Screw Wood Construction</p>
                <h5 className="text-2xl font-bold text-dark-charcoal mb-6">Kavita</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6 text-center sm:text-left">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Budget</p>
                    <p className="font-bold text-dark-charcoal">₹4.5 lacs</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Home</p>
                    <p className="font-bold text-dark-charcoal">3BHK</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">City</p>
                    <p className="font-bold text-dark-charcoal">Koramangala, BLR</p>
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
