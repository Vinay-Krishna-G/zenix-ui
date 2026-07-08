import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon?: string;
}

interface StatsProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function GridStats({ instance }: StatsProps) {
  const props = instance.props || {};
  const stats: StatItem[] = Array.isArray(props.stats) ? props.stats : [];

  return (
    <div className="w-full bg-white py-24 border-b border-slate-100 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(props.title || props.subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            {props.title && (
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {props.title}
              </h2>
            )}
            {props.subtitle && (
              <p className="text-lg text-slate-500">
                {props.subtitle}
              </p>
            )}
          </div>
        )}

        {stats.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0">
                {stat.icon && (
                  <div className="text-3xl mb-4 opacity-80">{stat.icon}</div>
                )}
                <div className="text-5xl font-extrabold tracking-tight text-[var(--color-primary)] mb-2">
                  {stat.value || '0'}
                </div>
                <div className="text-lg font-bold text-slate-900 mb-1">
                  {stat.label || 'Metric'}
                </div>
                {stat.description && (
                  <div className="text-sm text-slate-500 max-w-xs mx-auto">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl max-w-3xl mx-auto">
            No stats added yet.
          </div>
        )}
      </div>
    </div>
  );
}

export const gridStatsDefinition: BlockDefinition = {
  type: 'stats',
  variant: 'grid',
  component: GridStats,
  metadata: {
    name: 'Stats Grid',
    description: 'Displays key metrics or achievements in a grid.',
  },
  fieldGroups: [
    {
      id: 'header',
      title: 'Header Section',
      fields: {
        title: { type: 'text', label: 'Title', defaultValue: 'Trusted by numbers' },
        subtitle: { type: 'textarea', label: 'Subtitle', defaultValue: 'We have achieved significant milestones.' }
      }
    },
    {
      id: 'metrics',
      title: 'Metrics',
      fields: {
        stats: {
          type: 'array',
          label: 'Stats',
          schema: {
            value: { type: 'text', label: 'Value', defaultValue: '99%' },
            label: { type: 'text', label: 'Label', defaultValue: 'Satisfaction' },
            description: { type: 'textarea', label: 'Description', defaultValue: '' },
            icon: { type: 'text', label: 'Icon (Emoji)', defaultValue: '' }
          }
        }
      }
    }
  ]
};
