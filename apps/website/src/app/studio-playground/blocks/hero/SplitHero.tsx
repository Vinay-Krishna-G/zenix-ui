import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface SplitHeroProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function SplitHero({ experience, instance }: SplitHeroProps) {
  const props = instance.props || {};

  return (
    <div className="relative w-full bg-white overflow-hidden font-sans border-b border-slate-100">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--color-surface)] to-white opacity-60 pointer-events-none" />
      <div 
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none opacity-20" 
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 max-w-2xl space-y-8 z-10">
          <div className="space-y-6">
            {experience.branding.logo && (
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-slate-100">
                {experience.branding.logo}
              </div>
            )}
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              {props.title || experience.branding.companyName || 'Your Company'}
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl">
              {props.subtitle || experience.branding.tagline || 'We build amazing products.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
              {props.primaryButtonText || 'Get Started'}
            </button>
            {props.secondaryButtonText && (
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg shadow-sm border border-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
                {props.secondaryButtonText}
              </button>
            )}
          </div>
        </div>
        
        <div className="flex-1 w-full flex justify-center lg:justify-end z-10">
          <div className="w-full max-w-lg aspect-square bg-gradient-to-tr from-slate-100 to-slate-50 rounded-2xl border border-slate-200 shadow-2xl flex items-center justify-center text-slate-400 overflow-hidden relative group">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {props.image ? (
              <img src={props.image} alt="Hero" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-3">
                <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Hero Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const splitHeroDefinition: BlockDefinition = {
  type: 'hero',
  variant: 'split',
  component: SplitHero,
  metadata: {
    name: 'Split Hero',
    description: 'A two-column hero layout with text on the left and a large feature image on the right.',
  },
  fieldGroups: [
    {
      id: 'content',
      title: 'Content',
      fields: {
        title: { type: 'text', label: 'Headline', description: 'Overrides the company name' },
        subtitle: { type: 'textarea', label: 'Subtitle', description: 'Overrides the tagline' },
      }
    },
    {
      id: 'actions',
      title: 'Actions',
      fields: {
        primaryButtonText: { type: 'text', label: 'Primary Button', defaultValue: 'Get Started' },
        secondaryButtonText: { type: 'text', label: 'Secondary Button', defaultValue: 'Learn More' },
      }
    },
    {
      id: 'media',
      title: 'Media',
      fields: {
        image: { type: 'image', label: 'Hero Image' },
      }
    }
  ]
};
