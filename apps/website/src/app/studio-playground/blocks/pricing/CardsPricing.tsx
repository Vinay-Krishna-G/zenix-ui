import React from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface PricingProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function CardsPricing({ experience, instance }: PricingProps) {
  const props = instance.props || {};
  const plans = Array.isArray(props.plans) ? props.plans : [];

  return (
    <div className="w-full bg-white py-24 lg:py-32 border-b border-slate-100 font-sans relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {props.title || 'Simple, transparent pricing'}
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            {props.subtitle || 'No hidden fees. No surprise charges.'}
          </p>
        </div>

        {plans.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const isPopular = plan.isPopular;
              return (
                <div 
                  key={index} 
                  className={`flex-1 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    isPopular 
                      ? 'bg-slate-900 text-white shadow-2xl ring-1 ring-slate-800 relative z-10' 
                      : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 inset-x-0 flex justify-center">
                      <span className="text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm bg-[var(--color-primary)]">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-8 mt-2">
                    <h3 className={`text-2xl font-bold mb-3 ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name || 'Plan Name'}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.description || 'Perfect for getting started.'}
                    </p>
                  </div>
                  
                  <div className="mb-8 flex items-baseline">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {plan.price || '$0'}
                    </span>
                    <span className={`text-lg font-medium ml-2 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      /mo
                    </span>
                  </div>
                  
                  <ul className="mb-10 space-y-5 flex-1">
                    {/* Simulated features list for visual completeness */}
                    <li className="flex items-start space-x-3">
                      <svg className={`flex-shrink-0 h-5 w-5 ${isPopular ? 'opacity-80' : ''} text-[var(--color-primary)]`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>Includes basic features</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className={`flex-shrink-0 h-5 w-5 ${isPopular ? 'opacity-80' : ''} text-[var(--color-primary)]`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>24/7 priority support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className={`flex-shrink-0 h-5 w-5 ${isPopular ? 'opacity-80' : ''} text-[var(--color-primary)]`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>Cancel anytime</span>
                    </li>
                  </ul>
                  
                  <button className={`w-full py-4 px-6 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isPopular 
                      ? 'text-white hover:opacity-90 focus:ring-offset-slate-900 bg-[var(--color-primary)]' 
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 focus:ring-slate-200'
                  }`}>
                    {plan.buttonText || 'Get Started'}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl max-w-3xl mx-auto">
            No pricing plans added yet.
          </div>
        )}
      </div>
    </div>
  );
}

export const cardsPricingDefinition: BlockDefinition = {
  type: 'pricing',
  variant: 'cards',
  component: CardsPricing,
  metadata: {
    name: 'Pricing Cards',
    description: 'Tiered pricing plans displayed as cards.',
  },
  fieldGroups: [
    {
      id: 'header',
      title: 'Header Section',
      fields: {
        title: { type: 'text', label: 'Title', defaultValue: 'Simple, transparent pricing' },
        subtitle: { type: 'textarea', label: 'Subtitle', defaultValue: 'No hidden fees. No surprise charges.' },
      }
    },
    {
      id: 'plans',
      title: 'Pricing Plans',
      fields: {
        plans: {
          type: 'array',
          label: 'Plans',
          schema: {
            name: { type: 'text', label: 'Plan Name', defaultValue: 'Pro' },
            description: { type: 'textarea', label: 'Description', defaultValue: 'Perfect for professionals.' },
            price: { type: 'text', label: 'Price', defaultValue: '$29' },
            buttonText: { type: 'text', label: 'Button Text', defaultValue: 'Get Started' },
            isPopular: { type: 'boolean', label: 'Highlight as Popular', defaultValue: false },
          }
        }
      }
    }
  ]
};
