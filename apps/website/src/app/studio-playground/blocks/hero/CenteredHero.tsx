import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface CenteredHeroProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function CenteredHero({ experience, instance }: CenteredHeroProps) {
  const props = instance.props || {};
  
  return (
    <div className="relative w-full bg-white overflow-hidden font-sans border-b border-slate-100 py-32 lg:py-48 flex flex-col items-center justify-center">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none" />

      <div className="relative z-10 text-center space-y-8 max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        {experience.branding.logo && (
          <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-100 mb-8">
            {experience.branding.logo}
          </div>
        )}
        
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          {props.title || experience.branding.companyName || 'Your Company'}
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {props.subtitle || experience.branding.tagline || 'We build amazing products.'}
        </p>

        <div className="pt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
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
    </div>
  );
}

export const centeredHeroDefinition: BlockDefinition = {
  type: 'hero',
  variant: 'centered',
  component: CenteredHero,
  metadata: {
    name: 'Centered Hero',
    description: 'A traditional centered hero section with logo, title, and call to action.',
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
    }
  ]
};
