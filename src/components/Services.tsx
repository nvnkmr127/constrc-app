'use client';

import React from 'react';
import Link from 'next/link';
import { openCallModal } from '@/components/CallModal';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Turnkey House Construction',
    category: 'Core Service',
    description: 'Complete home construction from foundation to handover with 430+ QASCON checks & stage-wise escrow safety.',
    icon: 'engineering',
    image: '/images/bangalore_house_construction.png',
    tags: ['430+ Quality Checks', 'Escrow Safe', '10-Yr Warranty'],
  },
  {
    id: '2',
    title: 'Architectural & 3D Floor Planning',
    category: 'Design & Permits',
    description: 'Vastu-compliant 2D/3D floor layouts, structural drawings, and BBMP/BDA plan approval assistance.',
    icon: 'architecture',
    image: '/images/bangalore_architect_planning.png',
    tags: ['3D Elevations', 'Vastu Compliant', 'BBMP Permits'],
  },
  {
    id: '3',
    title: 'Interior Design & Woodwork',
    category: 'Custom Interiors',
    description: 'Factory-finish modular kitchens, teak wood doors, Italian marble flooring, and customized false ceilings.',
    icon: 'chair',
    image: '/images/bangalore_modern_interior.png',
    tags: ['Modular Kitchens', 'Teak Woodwork', 'Ambient Lighting'],
  },
  {
    id: '4',
    title: 'Structural Quality Audits',
    category: 'Quality Assurance',
    description: 'Independent lab tests for concrete compressive strength, steel rebar grade, and soil load bearing tests.',
    icon: 'verified',
    image: '/images/bangalore_hero_building.png',
    tags: ['Concrete Lab Test', 'Rebar Audits', 'Soil Analysis'],
  },
  {
    id: '5',
    title: 'Commercial Space Renovation',
    category: 'Commercial',
    description: 'Modern office fit-outs, retail showroom upgrades, and commercial complex construction across Whitefield & Indiranagar.',
    icon: 'store',
    image: '/images/bangalore_commercial_complex.png',
    tags: ['Tech Parks', 'Retail Shops', 'Space Optimization'],
  },
  {
    id: '6',
    title: 'Solar & Rainwater Eco Systems',
    category: 'Green Tech',
    description: 'Integrated rooftop solar power grid setups, rainwater harvesting sumps, and EV fast-charging points.',
    icon: 'solar_power',
    image: '/images/bangalore_house_construction.png',
    tags: ['Solar Roof Grid', 'Rainwater Sump', 'EV Station'],
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 font-sans" id="services">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f2bd19]/15 text-slate-900 border border-[#f2bd19]/40 text-xs font-black uppercase tracking-widest">
              ⚡ OUR CORE EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              What We Offer — Driven By Quality
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              End-to-end tech-enabled home construction, 3D architectural planning, and luxury interiors across Bengaluru.
            </p>
          </div>

          <Link
            href="/services"
            className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl shadow-md transition-all w-fit shrink-0 flex items-center gap-2"
          >
            VIEW ALL SERVICES <span className="bg-[#f2bd19] text-slate-900 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">→</span>
          </Link>
        </div>

        {/* 6 Services Grid (Swipeable on Mobile / 3-Col on Desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-white rounded-[32px] p-5 md:p-6 border border-slate-200/80 shadow-md flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shrink-0 md:shrink relative overflow-hidden"
            >
              <div>
                {/* Image Box */}
                <div className="relative rounded-[24px] overflow-hidden mb-5 h-[200px] sm:h-[220px]">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Category Badge */}
                  <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-900 shadow-sm uppercase tracking-wider">
                    {service.category}
                  </span>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-3.5 left-3.5 w-11 h-11 bg-[#f2bd19] text-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              <div>
                {/* Feature Tag Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-4">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-lg"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <button
                  type="button"
                  onClick={openCallModal}
                  className="w-full py-3 bg-slate-50 group-hover:bg-[#f2bd19] border border-slate-200 group-hover:border-[#f2bd19] text-slate-900 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Free Consultation <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
