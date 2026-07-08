import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface CTAProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function CenteredCTA({ experience, instance }: CTAProps) {
  const props = instance.props || {};

  return (
    <div className="w-full bg-slate-900 py-32 font-sans text-center px-4 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none opacity-20" 
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      
      <div className="relative z-10 max-w-3xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          {props.title || 'Ready to dive in?'}
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {props.subtitle || 'Start your free trial today. No credit card required.'}
        </p>
        <div className="pt-6 flex justify-center space-x-4">
          <button className="px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
            {props.primaryButtonText || 'Get Started Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

export const centeredCTADefinition: BlockDefinition = {
  type: 'cta',
  variant: 'centered',
  component: CenteredCTA,
  metadata: {
    name: 'Centered CTA',
    description: 'A highly visible, centered Call to Action section.',
  },
  fieldGroups: [
    {
      id: 'content',
      title: 'Content',
      fields: {
        title: { type: 'text', label: 'Headline', defaultValue: 'Ready to dive in?' },
        subtitle: { type: 'textarea', label: 'Subtitle', defaultValue: 'Start your free trial today. No credit card required.' },
      }
    },
    {
      id: 'actions',
      title: 'Actions',
      fields: {
        primaryButtonText: { type: 'text', label: 'Primary Button', defaultValue: 'Get Started Now' },
      }
    }
  ]
};
