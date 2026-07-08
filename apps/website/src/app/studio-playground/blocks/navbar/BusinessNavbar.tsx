import React, { useState } from 'react';
import type { ExperienceConfig, BlockInstance, BlockDefinition } from '@zenixui/core';

interface NavbarProps {
  experience: ExperienceConfig;
  instance: BlockInstance;
}

export function BusinessNavbar({ experience, instance }: NavbarProps) {
  const props = instance.props || {};
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = Array.isArray(props.links) ? props.links : [];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            {experience.branding.logo && (
              <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center text-sm font-bold shadow-sm transition-transform group-hover:scale-105">
                {experience.branding.logo}
              </div>
            )}
            <span className="font-bold tracking-tight text-slate-900 text-lg transition-colors group-hover:text-slate-700">
              {experience.branding.companyName || 'Acme AI'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url || '#'}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label || 'Link'}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {props.showLogin && (
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {props.loginText || 'Log in'}
              </a>
            )}
            {props.ctaText && (
              <button className="text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
                {props.ctaText}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url || '#'}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              {link.label || 'Link'}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            {props.showLogin && (
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">
                {props.loginText || 'Log in'}
              </button>
            )}
            {props.ctaText && (
              <button className="w-full bg-slate-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">
                {props.ctaText}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export const businessNavbarDefinition: BlockDefinition = {
  type: 'navbar',
  variant: 'business',
  component: BusinessNavbar,
  metadata: {
    name: 'Business Navbar',
    description: 'A professional navigation bar with links and call to action.',
  },
  fieldGroups: [
    {
      id: 'navigation',
      title: 'Navigation Links',
      fields: {
        links: {
          type: 'array',
          label: 'Links',
          schema: {
            label: { type: 'text', label: 'Label', defaultValue: 'Features' },
            url: { type: 'text', label: 'URL', defaultValue: '#' },
          }
        }
      }
    },
    {
      id: 'actions',
      title: 'Actions',
      fields: {
        showLogin: { type: 'boolean', label: 'Show Login Link', defaultValue: true },
        loginText: { type: 'text', label: 'Login Text', defaultValue: 'Log in' },
        ctaText: { type: 'text', label: 'CTA Button', defaultValue: 'Get Started' },
      }
    }
  ]
};
