import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface SplitHeroProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function SplitHero({ experience, instance }: SplitHeroProps) {
  const props = instance.props || {};

  return (
    <div className="w-full bg-slate-50 flex items-center justify-between font-sans py-24 px-12 border-b border-slate-200">
      <div className="flex-1 max-w-xl space-y-6">
        {experience.branding.logo && (
          <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-[10px] text-slate-500 mb-4 shadow-sm">
            {experience.branding.logo}
          </div>
        )}
        
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {props.title || experience.branding.companyName || 'Your Company'}
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed">
          {props.subtitle || experience.branding.tagline || 'We build amazing products.'}
        </p>

        <div className="pt-4 flex space-x-4">
          <button className="px-6 py-3 bg-slate-900 hover:bg-black text-white font-medium rounded-lg shadow-sm transition-colors">
            {props.primaryButtonText || 'Get Started'}
          </button>
          <button className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 font-medium rounded-lg shadow-sm border border-slate-200 transition-colors">
            {props.secondaryButtonText || 'Learn More'}
          </button>
        </div>
        
        <div className="mt-8 text-xs text-slate-400">
          Rendering block: {instance.instanceId} (Split)
        </div>
      </div>
      
      <div className="flex-1 flex justify-end">
        <div className="w-96 h-96 bg-gradient-to-tr from-indigo-100 to-indigo-50 rounded-2xl border border-indigo-100 shadow-xl flex items-center justify-center text-indigo-300">
          [ Hero Image Placeholder ]
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
        title: { type: 'text', label: 'Headline Override', description: 'Overrides the company name' },
        subtitle: { type: 'textarea', label: 'Subtitle Override', description: 'Overrides the tagline' },
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
