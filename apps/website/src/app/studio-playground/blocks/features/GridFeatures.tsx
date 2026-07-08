import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface FeaturesProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function GridFeatures({ experience, instance }: FeaturesProps) {
  const props = instance.props || {};
  const items = Array.isArray(props.items) ? props.items : [];

  return (
    <div className="w-full bg-slate-50 py-24 lg:py-32 border-b border-slate-200 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-white rounded-full blur-3xl pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          {props.label && (
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2 text-[var(--color-primary)]">
              {props.label}
            </h2>
          )}
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {props.title || 'Everything you need'}
          </p>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {props.subtitle || 'All the features to build your next great product.'}
          </p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {items.map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-all duration-300 shadow-sm text-[var(--color-primary)] group-hover:text-white"
                     style={{ backgroundColor: 'var(--color-surface)' }}>
                  {/* Pseudo-element for light background */}
                  <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10 rounded-2xl group-hover:opacity-100 transition-opacity z-[-1]"></div>
                  {item.icon || '✨'}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title || 'Feature Title'}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.description || 'Describe the value this feature provides to the user.'}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            No features added yet.
          </div>
        )}
      </div>
    </div>
  );
}

export const gridFeaturesDefinition: BlockDefinition = {
  type: 'features',
  variant: 'grid',
  component: GridFeatures,
  metadata: {
    name: 'Grid Features',
    description: 'A multi-column grid displaying features or services.',
  },
  fieldGroups: [
    {
      id: 'header',
      title: 'Header Section',
      fields: {
        label: { type: 'text', label: 'Eyebrow Label', defaultValue: 'Features' },
        title: { type: 'text', label: 'Title', defaultValue: 'Everything you need' },
        subtitle: { type: 'textarea', label: 'Subtitle', defaultValue: 'All the features to build your next great product.' },
      }
    },
    {
      id: 'items',
      title: 'Feature Items',
      fields: {
        items: {
          type: 'array',
          label: 'Features List',
          schema: {
            title: { type: 'text', label: 'Title', defaultValue: 'New Feature' },
            description: { type: 'textarea', label: 'Description', defaultValue: 'Feature description...' },
            icon: { type: 'text', label: 'Icon (Emoji)', defaultValue: '✨' },
          }
        }
      }
    }
  ]
};
