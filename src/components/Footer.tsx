import React from 'react';
import Link from 'next/link';
import { openCallModal } from '@/components/CallModal';

export default function Footer() {
  return (
    <>
      {/* High-Conversion Cost Estimator Section */}
      <section className="max-w-7xl mx-auto px-4 -mb-28 relative z-20 mt-16">
        <div className="bg-[#1C1C1C] rounded-[48px] p-8 md:p-12 shadow-2xl border border-white/10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Ambient Background Radial Glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl" />

          {/* Left Column: Headlines & Feature Badges */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left relative z-10">
            <h3 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tight">
              Calculate Construction Cost
            </h3>

            <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed max-w-xl">
              Get guaranteed zero-hidden-cost pricing, 3D architectural floor plans, and instant project cost calculations for your plot in Bangalore.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-300">
                <span className="text-emerald-400">✓</span> Zero Hidden Costs
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-300">
                <span className="text-emerald-400">✓</span> Free 3D Floor Plan
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-300">
                <span className="text-emerald-400">✓</span> 10-Yr Structural Warranty
              </span>
            </div>
          </div>

          {/* Right Column: Dual Action Box */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl text-center space-y-4 relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-widest text-gray-300">
              Instant Estimation &amp; Consultation
            </p>

            <div className="space-y-3">
              <Link
                href="/how-it-works"
                className="w-full bg-primary-orange hover:bg-orange-600 text-white font-black text-xs md:text-sm uppercase tracking-wider py-4 px-6 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                LAUNCH COST ESTIMATOR{' '}
                <span className="bg-black/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                  →
                </span>
              </Link>

              <button
                type="button"
                onClick={openCallModal}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs md:text-sm uppercase tracking-wider py-3.5 px-6 rounded-2xl border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                TALK TO ADVISOR{' '}
                <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                  📞
                </span>
              </button>
            </div>

            <p className="text-[11px] text-gray-400 font-medium">
              Free 1-on-1 consultation with senior Bangalore architects
            </p>
          </div>
        </div>
      </section>

      {/* Main Footer Container */}
      <footer className="bg-[#111111] pt-48 pb-10 text-gray-400 text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-orange text-white font-black text-xl flex items-center justify-center shadow-lg">
                  S
                </div>
                <span className="text-white text-2xl font-extrabold tracking-tight">Screw Wood</span>
              </div>
              <p className="mb-6 text-gray-400 leading-relaxed text-sm font-normal">
                Bangalore's premier tech-enabled home construction company delivering quality homes with 430+ QASCON checks, escrow payment safety, and 10-year warranty.
              </p>
              <div className="flex space-x-3">
                {['FB', 'TW', 'IN', 'YT'].map((net) => (
                  <Link
                    key={net}
                    href="#"
                    className="w-9 h-9 rounded-xl bg-white/5 text-gray-300 hover:bg-primary-orange hover:text-white flex items-center justify-center text-xs font-bold transition-all"
                  >
                    {net}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
                Quick Links
              </h5>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <Link href="/" className="hover:text-primary-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-primary-orange font-bold hover:underline transition-colors">
                    How It Works &amp; Estimator
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-orange transition-colors">
                    Construction Packages
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-primary-orange transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-primary-orange transition-colors">
                    News &amp; Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
                Services
              </h5>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <Link href="/services" className="hover:text-primary-orange transition-colors">
                    Turnkey House Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-orange transition-colors">
                    Architectural &amp; 3D Floor Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-orange transition-colors">
                    Structural Quality Audits
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-orange transition-colors">
                    Interior Design &amp; Woodwork
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
                Bangalore Office
              </h5>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed font-normal">
                #58, 60 Feet Road, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560095
              </p>
              <p className="text-sm font-bold text-white mb-2">📞 +91 98765 43210</p>
              <p className="text-sm font-bold text-primary-orange">✉ support@screwwood.com</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs uppercase font-bold tracking-widest text-gray-500">
            <p>© {new Date().getFullYear()} Screw Wood Construction Technologies Pvt. Ltd. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-white transition-colors">
                Support Center
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Privacy &amp; Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
