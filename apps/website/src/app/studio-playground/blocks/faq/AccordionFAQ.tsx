import React, { useState } from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function AccordionFAQ({ instance }: FaqProps) {
  const props = instance.props || {};
  const faqs: FaqItem[] = Array.isArray(props.faqs) ? props.faqs : [];
  
  // Track open state of each accordion item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[var(--color-surface)] py-24 font-sans text-[var(--color-text)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {(props.title || props.subtitle) && (
          <div className="text-center mb-16 space-y-4">
            {props.title && (
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {props.title}
              </h2>
            )}
            {props.subtitle && (
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                {props.subtitle}
              </p>
            )}
          </div>
        )}

        {faqs.length > 0 ? (
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset"
                    onClick={() => toggleOpen(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-lg text-slate-900 pr-8">{faq.question || 'Question?'}</span>
                    <span className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer || 'Answer content goes here.'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
            No FAQs added yet.
          </div>
        )}
      </div>
    </div>
  );
}

export const accordionFAQDefinition: BlockDefinition = {
  type: 'faq',
  variant: 'accordion',
  component: AccordionFAQ,
  metadata: {
    name: 'Accordion FAQ',
    description: 'A list of frequently asked questions that expand on click.',
  },
  fieldGroups: [
    {
      id: 'header',
      title: 'Header Section',
      fields: {
        title: { type: 'text', label: 'Title', defaultValue: 'Frequently Asked Questions' },
        subtitle: { type: 'textarea', label: 'Subtitle', defaultValue: 'Everything you need to know about the product and billing.' }
      }
    },
    {
      id: 'content',
      title: 'Q&A Items',
      fields: {
        faqs: {
          type: 'array',
          label: 'FAQs',
          schema: {
            question: { type: 'text', label: 'Question', defaultValue: 'How does it work?' },
            answer: { type: 'textarea', label: 'Answer', defaultValue: 'It works by automating your workflow.' }
          }
        }
      }
    }
  ]
};
