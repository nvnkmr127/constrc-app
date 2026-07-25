'use client';

import React, { useState } from 'react';
import { openCallModal } from '@/components/CallModal';

interface Project {
  id: string;
  title: string;
  category: 'villas' | 'apartments' | 'interiors';
  location: string;
  bua: string;
  packageTier: string;
  year: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Luxury 4BHK Villa & Terrace Garden',
    category: 'villas',
    location: 'Whitefield, Bengaluru',
    bua: '3,850 sq.ft.',
    packageTier: 'SIGNATURE (₹2,349/sqft)',
    year: 'Delivered 2025',
    image: '/images/bangalore_commercial_complex.png',
  },
  {
    id: '2',
    title: 'Modern G+3 Residential Apartment',
    category: 'apartments',
    location: 'HBR Layout, Bengaluru',
    bua: '6,400 sq.ft.',
    packageTier: 'PRIME (₹2,049/sqft)',
    year: 'Delivered 2025',
    image: '/images/bangalore_hero_building.png',
  },
  {
    id: '3',
    title: 'Contemporary Villa Interior Design',
    category: 'interiors',
    location: 'Indiranagar, Bengaluru',
    bua: '2,600 sq.ft.',
    packageTier: 'ELITE (₹2,699/sqft)',
    year: 'Delivered 2024',
    image: '/images/bangalore_modern_interior.png',
  },
  {
    id: '4',
    title: 'Greenview Independent Duplex',
    category: 'villas',
    location: 'Sarjapur Road, Bengaluru',
    bua: '4,200 sq.ft.',
    packageTier: 'PRIME (₹2,049/sqft)',
    year: 'Delivered 2024',
    image: '/images/bangalore_house_construction.png',
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'villas' | 'apartments' | 'interiors'>('all');

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <>
      <section className="py-20 md:py-28 bg-white" id="projects">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#f2bd19]/15 text-slate-900 border border-[#f2bd19]/40 text-xs font-black uppercase tracking-widest">
                ⚡ PORTFOLIO SHOWCASE
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Our Landmark Construction Projects
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-medium">
                Explore turnkey independent houses, duplex villas, and premium interiors built with 430+ QASCON quality checks across Bengaluru.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'villas', label: 'Villas & Duplex' },
                { id: 'apartments', label: 'Apartments' },
                { id: 'interiors', label: 'Interiors' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Swipeable Grid / Mobile Touch Carousel */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:pb-0 md:grid md:grid-cols-2 md:overflow-visible">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="min-w-[290px] sm:min-w-[340px] md:min-w-0 snap-center bg-white rounded-[32px] p-5 md:p-6 border border-slate-200/80 shadow-md flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 shrink-0 md:shrink"
              >
                {/* Image Container with Badges */}
                <div className="relative rounded-[26px] overflow-hidden mb-5 h-[280px] sm:h-[340px]">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-900 shadow-md uppercase tracking-wider">
                      {project.packageTier}
                    </span>
                    <span className="bg-[#f2bd19] text-slate-900 px-3 py-1 rounded-full text-[10px] font-black shadow-md uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Specs */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-slate-200 flex items-center gap-1">
                        📍 {project.location}
                      </span>
                      <span className="text-[10px] font-medium text-slate-300 block">
                        BUA: {project.bua}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={openCallModal}
                      className="bg-white hover:bg-[#f2bd19] text-slate-900 p-3 rounded-2xl shadow-lg transition-colors cursor-pointer"
                      aria-label="View Project Specs"
                    >
                      <span className="text-xs font-black">→</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500 pt-1 border-t border-slate-100">
                    <span>430+ QASCON Checked</span>
                    <span className="text-slate-900">Zero Cost Delay Penalty</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Showcase */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative group">
              <img
                alt="Rahul Sharma"
                className="rounded-3xl w-full h-[320px] object-cover shadow-lg border border-slate-200"
                src="/images/indian_professional_man_1.png"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl flex justify-between items-center text-white">
                <div>
                  <h5 className="font-extrabold text-xs">Rahul Sharma</h5>
                  <p className="text-[#f2bd19] text-[10px] font-bold uppercase tracking-wider">Chief Structural Engineer</p>
                </div>
                <span className="text-xs">🏗️</span>
              </div>
            </div>

            <div className="relative group">
              <img
                alt="Anjali Desai"
                className="rounded-3xl w-full h-[320px] object-cover shadow-lg border border-slate-200"
                src="/images/indian_professional_woman_1.png"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl flex justify-between items-center text-white">
                <div>
                  <h5 className="font-extrabold text-xs">Anjali Desai</h5>
                  <p className="text-[#f2bd19] text-[10px] font-bold uppercase tracking-wider">Lead Architect</p>
                </div>
                <span className="text-xs">📐</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f2bd19]/15 text-slate-900 border border-[#f2bd19]/40 text-xs font-black uppercase tracking-widest">
              ⚡ BENGALURU EXPERTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Driven By Senior Architects &amp; Structural Engineers
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
              Every Screw Wood project is supervised by dedicated structural engineers and BBMP/BDA plan architects to ensure zero structural compromises.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={openCallModal}
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                CONSULT OUR ARCHITECT TEAM 📞
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker Banner */}
      <div className="bg-[#f2bd19] py-5 overflow-hidden flex whitespace-nowrap border-y border-slate-900/10">
        <div className="flex items-center space-x-12 animate-marquee text-slate-950 font-black text-xl md:text-2xl uppercase tracking-wider">
          <span>Building Construction ★ Turnkey Villa Construction ★ Architectural Floor Plans ★ Structural Quality Audits</span>
          <span>Building Construction ★ Turnkey Villa Construction ★ Architectural Floor Plans ★ Structural Quality Audits</span>
        </div>
      </div>
    </>
  );
}
