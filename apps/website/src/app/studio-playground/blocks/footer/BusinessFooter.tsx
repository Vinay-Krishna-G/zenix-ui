import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface FooterProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function BusinessFooter({ experience, instance }: FooterProps) {
  const props = instance.props || {};
  const year = new Date().getFullYear();
  const companyName = experience.branding.companyName || 'Your Company';

  return (
    <footer className="w-full bg-slate-50 py-16 border-t border-slate-200 font-sans text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-3 cursor-pointer group">
          {experience.branding.logo && (
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-sm shadow-sm border border-slate-200 transition-transform group-hover:scale-105">
              {experience.branding.logo}
            </div>
          )}
          <span className="text-slate-900 font-bold tracking-tight text-lg transition-colors group-hover:text-slate-700">
            {companyName}
          </span>
        </div>
        
        <div className="text-sm">
          {props.copyrightText 
            ? props.copyrightText.replace('{year}', year.toString()).replace('{company}', companyName)
            : `© ${year} ${companyName}. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}

export const businessFooterDefinition: BlockDefinition = {
  type: 'footer',
  variant: 'business',
  component: BusinessFooter,
  metadata: {
    name: 'Business Footer',
    description: 'A standard minimal footer with branding and copyright.',
  },
  fieldGroups: [
    {
      id: 'content',
      title: 'Content',
      fields: {
        copyrightText: { 
          type: 'text', 
          label: 'Copyright Text', 
          description: 'Use {year} and {company} as placeholders.',
          defaultValue: '© {year} {company}. All rights reserved.' 
        },
      }
    }
  ]
};
