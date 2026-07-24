'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { openCallModal } from '@/components/CallModal';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="relative font-sans bg-black">
      {/* Floating CTA Banner overlapping Footer */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 -mb-32">
        <div className="bg-[#111111] text-white rounded-[32px] md:rounded-[40px] p-8 md:p-14 border border-white/10 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-orange/20 border border-primary-orange/40 text-primary-orange text-xs font-black uppercase tracking-widest">
                ⚡ Ready To Build Your Dream Home?
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Get Free Architectural 3D Floor Plan &amp; Cost Quote
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-normal max-w-2xl">
                Schedule a 1-on-1 consultation with Bangalore's leading structural engineers &amp; architects today.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/ai-house-construction-calculator"
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
                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs md:text-sm uppercase tracking-wider py-4 px-6 rounded-2xl border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                TALK TO AN ADVISOR 📞
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Container */}
      <footer className="bg-[#111111] pt-48 pb-10 text-gray-400 text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {/* Column 1: Brand Info */}
            <div className="col-span-1 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/logo.png"
                  alt="Screw Wood Logo"
                  className="h-16 w-auto object-contain drop-shadow-md"
                />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm font-normal">
                Bangalore's premier tech-enabled home construction company delivering quality homes with 430+ QASCON checks, escrow payment safety, and 10-year warranty.
              </p>
              <div className="flex space-x-3 pt-2">
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

            {/* Column 2: Quick Links (Collapsible on Mobile) */}
            <div className="border-b md:border-none border-white/10 pb-4 md:pb-0">
              <button
                type="button"
                onClick={() => toggleSection('links')}
                className="w-full flex justify-between items-center text-white font-bold mb-4 md:mb-8 uppercase tracking-widest text-xs cursor-pointer md:cursor-default"
              >
                <span>Quick Links</span>
                <span className="md:hidden text-primary-orange font-black text-lg">
                  {openSection === 'links' ? '−' : '+'}
                </span>
              </button>
              <ul className={`space-y-3.5 text-sm font-medium transition-all ${openSection === 'links' ? 'block' : 'hidden md:block'}`}>
                <li>
                  <Link href="/" className="hover:text-primary-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/ai-house-construction-calculator" className="text-primary-orange font-bold hover:underline transition-colors">
                    AI Construction Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-primary-orange transition-colors">
                    How It Works
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

            {/* Column 3: Services (Collapsible on Mobile) */}
            <div className="border-b md:border-none border-white/10 pb-4 md:pb-0">
              <button
                type="button"
                onClick={() => toggleSection('services')}
                className="w-full flex justify-between items-center text-white font-bold mb-4 md:mb-8 uppercase tracking-widest text-xs cursor-pointer md:cursor-default"
              >
                <span>Services</span>
                <span className="md:hidden text-primary-orange font-black text-lg">
                  {openSection === 'services' ? '−' : '+'}
                </span>
              </button>
              <ul className={`space-y-3.5 text-sm font-medium transition-all ${openSection === 'services' ? 'block' : 'hidden md:block'}`}>
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

            {/* Column 4: Office Location (Collapsible on Mobile) */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection('office')}
                className="w-full flex justify-between items-center text-white font-bold mb-4 md:mb-8 uppercase tracking-widest text-xs cursor-pointer md:cursor-default"
              >
                <span>Bangalore Office</span>
                <span className="md:hidden text-primary-orange font-black text-lg">
                  {openSection === 'office' ? '−' : '+'}
                </span>
              </button>
              <div className={`space-y-3 transition-all ${openSection === 'office' ? 'block' : 'hidden md:block'}`}>
                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  #58, 60 Feet Road, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560095
                </p>
                <p className="text-sm font-bold text-white">📞 +91 98765 43210</p>
                <p className="text-sm font-bold text-primary-orange">✉ support@screwwood.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase font-bold tracking-widest text-gray-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} Screw Wood Construction Technologies Pvt. Ltd. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link href="/contact" className="hover:text-gray-300">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-gray-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
