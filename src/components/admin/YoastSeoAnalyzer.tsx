'use client';

import React, { useState } from 'react';

export interface YoastSeoState {
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  slug: string;
  content: string;
  ogImage: string;
  canonicalUrl: string;
  schemaType: 'Article' | 'LocalBusiness' | 'FAQPage' | 'Service';
  robotsIndex: boolean;
}

interface YoastSeoAnalyzerProps {
  seoState: YoastSeoState;
  onChange: (updatedState: Partial<YoastSeoState>) => void;
  siteDomain?: string;
}

export default function YoastSeoAnalyzer({
  seoState,
  onChange,
  siteDomain = 'https://screwwood.com',
}: YoastSeoAnalyzerProps) {
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  const {
    seoTitle,
    seoDescription,
    focusKeyword,
    slug,
    content,
    ogImage,
    canonicalUrl,
    schemaType,
    robotsIndex,
  } = seoState;

  // Real-time SEO Analysis Math
  const titleLength = seoTitle.length;
  const isTitleIdeal = titleLength >= 45 && titleLength <= 60;
  const isTitleTooLong = titleLength > 60;
  const isTitleTooShort = titleLength < 45;

  const descLength = seoDescription.length;
  const isDescIdeal = descLength >= 120 && descLength <= 160;
  const isDescTooLong = descLength > 160;
  const isDescTooShort = descLength < 120;

  const keywordLower = focusKeyword.toLowerCase().trim();
  const titleHasKeyword = keywordLower ? seoTitle.toLowerCase().includes(keywordLower) : false;
  const descHasKeyword = keywordLower ? seoDescription.toLowerCase().includes(keywordLower) : false;
  const slugHasKeyword = keywordLower ? slug.toLowerCase().includes(keywordLower) : false;

  // Content Keyword Density Calculation
  let contentKeywordCount = 0;
  if (keywordLower && content) {
    const regex = new RegExp(keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const matches = content.match(regex);
    contentKeywordCount = matches ? matches.length : 0;
  }

  // Calculate Overall Yoast Health Score (0 to 100)
  let score = 0;
  if (isTitleIdeal) score += 25;
  else if (titleLength > 20) score += 15;

  if (isDescIdeal) score += 25;
  else if (descLength > 50) score += 15;

  if (titleHasKeyword) score += 15;
  if (descHasKeyword) score += 15;
  if (slugHasKeyword) score += 10;
  if (contentKeywordCount > 0) score += 10;

  const scoreBadgeColor =
    score >= 80 ? 'bg-emerald-500 text-white' : score >= 50 ? 'bg-amber-500 text-slate-900' : 'bg-red-500 text-white';

  const scoreLabel = score >= 80 ? 'Good (SEO Ready)' : score >= 50 ? 'Needs Improvement' : 'Poor';

  const targetUrl = `${siteDomain.replace(/\/$/, '')}/${slug ? (slug.startsWith('/') ? slug.slice(1) : slug) : ''}`;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 text-slate-100 font-sans shadow-xl">
      {/* Top Header with Yoast Score Badge */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#f2bd19] text-slate-900 flex items-center justify-center font-black text-xl shadow-md">
            🎯
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-white">Yoast SEO Live Analyzer</h3>
              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${scoreBadgeColor}`}>
                {score}/100 • {scoreLabel}
              </span>
            </div>
            <p className="text-xs text-slate-400">Live Google SERP simulator &amp; metadata optimizer</p>
          </div>
        </div>

        {/* Device Preview Toggle */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-extrabold">
          <button
            type="button"
            onClick={() => setPreviewDevice('desktop')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              previewDevice === 'desktop' ? 'bg-[#f2bd19] text-slate-900 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            🖥️ Desktop
          </button>
          <button
            type="button"
            onClick={() => setPreviewDevice('mobile')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              previewDevice === 'mobile' ? 'bg-[#f2bd19] text-slate-900 shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            📱 Mobile
          </button>
        </div>
      </div>

      {/* Google SERP Snippet Preview Box */}
      <div className="space-y-2">
        <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
          Google Search Result Snippet Preview ({previewDevice.toUpperCase()})
        </label>
        <div
          className={`bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-left font-sans ${
            previewDevice === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'
          }`}
        >
          {/* Site Favicon & Breadcrumb URL */}
          <div className="flex items-center gap-2 text-xs mb-1">
            <div className="w-5 h-5 rounded-full bg-slate-900 text-[#f2bd19] flex items-center justify-center font-black text-[10px]">
              SW
            </div>
            <div className="min-w-0">
              <span className="text-slate-900 font-semibold block text-[12px] leading-none">Screw Wood</span>
              <span className="text-slate-500 text-[10px] block truncate">{targetUrl}</span>
            </div>
          </div>

          {/* Google Title Link */}
          <h4 className="text-[#1a0dab] hover:underline font-normal text-lg leading-snug cursor-pointer truncate">
            {seoTitle || 'Page Title Placeholder - Screw Wood Construction'}
          </h4>

          {/* Meta Description Text */}
          <p className="text-[#4d5156] text-xs leading-relaxed mt-1 line-clamp-2">
            {seoDescription || 'Add a compelling meta description to improve your click-through rate on Google search results...'}
          </p>
        </div>
      </div>

      {/* Input Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* SEO Title Input */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              SEO Title Tag *
            </label>
            <span
              className={`text-[10px] font-bold ${
                isTitleIdeal ? 'text-emerald-400' : isTitleTooLong ? 'text-red-400' : 'text-amber-400'
              }`}
            >
              {titleLength} / 60 chars
            </span>
          </div>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => onChange({ seoTitle: e.target.value })}
            placeholder="e.g. Turnkey House Construction Services Bangalore | Screw Wood"
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs font-bold text-white focus:outline-none focus:border-[#f2bd19]"
          />
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full transition-all ${
                isTitleIdeal ? 'bg-emerald-500' : isTitleTooLong ? 'bg-red-500' : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(100, Math.round((titleLength / 60) * 100))}%` }}
            />
          </div>
        </div>

        {/* Focus Keyword Input */}
        <div>
          <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
            Focus Keyword / Keyphrase
          </label>
          <input
            type="text"
            value={focusKeyword}
            onChange={(e) => onChange({ focusKeyword: e.target.value })}
            placeholder="e.g., house construction bangalore"
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs font-bold text-[#f2bd19] focus:outline-none focus:border-[#f2bd19]"
          />
          <p className="text-[10px] text-slate-500 mt-1 font-medium">
            Primary search phrase you want this page to rank for on Google.
          </p>
        </div>

        {/* Meta Description Input */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Meta Description Tag *
            </label>
            <span
              className={`text-[10px] font-bold ${
                isDescIdeal ? 'text-emerald-400' : isDescTooLong ? 'text-red-400' : 'text-amber-400'
              }`}
            >
              {descLength} / 160 chars
            </span>
          </div>
          <textarea
            rows={3}
            value={seoDescription}
            onChange={(e) => onChange({ seoDescription: e.target.value })}
            placeholder="Write a clear, persuasive 120-155 character description containing your focus keyword..."
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs font-medium text-white focus:outline-none focus:border-[#f2bd19]"
          />
          <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full transition-all ${
                isDescIdeal ? 'bg-emerald-500' : isDescTooLong ? 'bg-red-500' : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(100, Math.round((descLength / 160) * 100))}%` }}
            />
          </div>
        </div>

        {/* Schema.org & Social Customization */}
        <div>
          <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
            Schema.org Structured Data Type
          </label>
          <select
            value={schemaType}
            onChange={(e) => onChange({ schemaType: e.target.value as any })}
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs font-bold text-white focus:outline-none focus:border-[#f2bd19]"
          >
            <option value="Article">Article / BlogPosting Schema</option>
            <option value="LocalBusiness">LocalBusiness / Contractor Schema</option>
            <option value="Service">Service Detail Schema</option>
            <option value="FAQPage">FAQPage Rich Snippet Schema</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
            OpenGraph Social Share Image URL
          </label>
          <input
            type="text"
            value={ogImage}
            onChange={(e) => onChange({ ogImage: e.target.value })}
            placeholder="/images/bangalore_hero_building.png"
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs font-mono text-slate-300 focus:outline-none focus:border-[#f2bd19]"
          />
        </div>
      </div>

      {/* Yoast SEO Health Checklist (Green / Yellow Checks) */}
      <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-3">
        <h4 className="text-xs font-black uppercase tracking-wider text-white">
          📊 Yoast Analysis Checklist
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className={isTitleIdeal ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
              {isTitleIdeal ? '🟢' : '🟡'}
            </span>
            <span className={isTitleIdeal ? 'text-slate-200' : 'text-slate-400'}>
              Title Length: {titleLength} chars {isTitleIdeal ? '(Optimal)' : '(Target: 45-60)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={isDescIdeal ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
              {isDescIdeal ? '🟢' : '🟡'}
            </span>
            <span className={isDescIdeal ? 'text-slate-200' : 'text-slate-400'}>
              Description Length: {descLength} chars {isDescIdeal ? '(Optimal)' : '(Target: 120-160)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={titleHasKeyword ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              {titleHasKeyword ? '🟢' : '⚪'}
            </span>
            <span className={titleHasKeyword ? 'text-slate-200' : 'text-slate-400'}>
              Keyword in Title {titleHasKeyword ? '(Found)' : '(Missing)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={descHasKeyword ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              {descHasKeyword ? '🟢' : '⚪'}
            </span>
            <span className={descHasKeyword ? 'text-slate-200' : 'text-slate-400'}>
              Keyword in Meta Description {descHasKeyword ? '(Found)' : '(Missing)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={slugHasKeyword ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              {slugHasKeyword ? '🟢' : '⚪'}
            </span>
            <span className={slugHasKeyword ? 'text-slate-200' : 'text-slate-400'}>
              Keyword in URL Slug {slugHasKeyword ? '(Found)' : '(Missing)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={contentKeywordCount > 0 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              {contentKeywordCount > 0 ? '🟢' : '⚪'}
            </span>
            <span className={contentKeywordCount > 0 ? 'text-slate-200' : 'text-slate-400'}>
              Content Keyword Density: {contentKeywordCount} occurrence(s)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
