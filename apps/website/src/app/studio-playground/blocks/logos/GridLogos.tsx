import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface LogoItem {
  name: string;
  image: string;
  alt: string;
}

interface LogosProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function GridLogos({ instance }: LogosProps) {
  const props = instance.props || {};
  const logos: LogoItem[] = Array.isArray(props.logos) ? props.logos : [];

  return (
    <div className="w-full bg-[var(--color-surface)] py-12 md:py-16 border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {props.label && (
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            {props.label}
          </p>
        )}
        
        {logos.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer"
                title={logo.name}
              >
                {logo.image ? (
                  <img 
                    src={logo.image} 
                    alt={logo.alt || logo.name} 
                    className="h-8 md:h-10 w-auto object-contain" 
                  />
                ) : (
                  <div className="text-xl font-bold tracking-tight text-slate-800">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl max-w-3xl mx-auto">
            No logos added yet.
          </div>
        )}
      </div>
    </div>
  );
}

export const gridLogosDefinition: BlockDefinition = {
  type: 'logos',
  variant: 'grid',
  component: GridLogos,
  metadata: {
    name: 'Logo Cloud',
    description: 'Displays a grid of trusted company logos.',
  },
  fieldGroups: [
    {
      id: 'content',
      title: 'Content',
      fields: {
        label: {
          type: 'text',
          label: 'Label',
          defaultValue: 'Trusted by innovative teams worldwide'
        },
        logos: {
          type: 'array',
          label: 'Logos',
          schema: {
            name: { type: 'text', label: 'Company Name', defaultValue: 'Acme Corp' },
            image: { type: 'text', label: 'Image URL', defaultValue: '' },
            alt: { type: 'text', label: 'Alt Text', defaultValue: 'Acme Corp Logo' }
          }
        }
      }
    }
  ]
};
