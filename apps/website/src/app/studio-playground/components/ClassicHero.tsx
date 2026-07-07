import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface ClassicHeroProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function ClassicHero({ experience, instance }: ClassicHeroProps) {
  const props = instance.props || {};
  
  return (
    <div className="w-full bg-slate-50 flex flex-col items-center justify-center font-sans py-32 border-b border-slate-200">
      <div className="text-center space-y-6 max-w-2xl px-4">
        {experience.branding.logo && (
          <div className="w-16 h-16 mx-auto bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 mb-8 shadow-sm">
            {experience.branding.logo}
          </div>
        )}
        
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          {props.title || experience.branding.companyName || 'Your Company'}
        </h1>
        
        <p className="text-xl text-slate-600">
          {props.subtitle || experience.branding.tagline || 'We build amazing products.'}
        </p>

        <div className="pt-8">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors">
            {props.buttonText || 'Get Started'}
          </button>
        </div>
      </div>
      
      <div className="mt-16 text-sm text-slate-400">
        Rendering block: {instance.instanceId} (Classic)
      </div>
    </div>
  );
}

export const classicHeroDefinition: BlockDefinition = {
  type: 'hero',
  variant: 'classic',
  component: ClassicHero,
  metadata: {
    name: 'Classic Hero',
    description: 'A traditional centered hero section with logo, title, and call to action.',
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
        buttonText: { type: 'text', label: 'Button Text', defaultValue: 'Get Started' },
      }
    }
  ]
};
