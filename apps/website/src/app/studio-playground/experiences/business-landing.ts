import type { ExperienceConfig } from '@zenixui/core';

export const businessLandingExperience: ExperienceConfig = {
  id: 'business-landing-01',
  metadata: {
    name: 'Business Landing',
    category: 'Landing Pages',
  },
  branding: {
    companyName: 'Acme AI',
    tagline: 'We build amazing AI experiences for everyone.',
    logo: '✨',
  },
  theme: {
    preset: 'zenix',
  },
  navigation: {},
  pages: {
    home: {
      path: '/',
      blocks: [
        {
          instanceId: 'navbar-1',
          type: 'navbar',
          variant: 'business',
          props: {
            links: [
              { label: 'Features', url: '#' },
              { label: 'Pricing', url: '#' },
              { label: 'Company', url: '#' }
            ],
            showLogin: true,
            loginText: 'Sign in',
            ctaText: 'Get Started'
          }
        },
        {
          instanceId: 'hero-1',
          type: 'hero',
          variant: 'split',
          props: {
            title: 'Build faster with Acme AI',
            subtitle: 'The ultimate toolkit for modern agencies. Ship products in days, not months.',
            primaryButtonText: 'Start Free Trial',
            secondaryButtonText: 'Book a Demo'
          },
        },
        {
          instanceId: 'features-1',
          type: 'features',
          variant: 'grid',
          props: {
            label: 'Platform',
            title: 'Everything your agency needs',
            subtitle: 'A complete suite of tools designed specifically for digital agencies.',
            items: [
              { title: 'Lightning Fast', description: 'Built on edge infrastructure for sub-second load times globally.', icon: '⚡' },
              { title: 'Fully Customizable', description: 'Tweak every pixel to match your client\'s brand perfectly.', icon: '🎨' },
              { title: 'Secure by Default', description: 'Enterprise-grade security built into every layer of the stack.', icon: '🔒' }
            ]
          },
        },
        {
          instanceId: 'pricing-1',
          type: 'pricing',
          variant: 'cards',
          props: {
            title: 'Plans for teams of all sizes',
            subtitle: 'Choose the perfect plan for your agency.',
            plans: [
              { name: 'Starter', description: 'Perfect for freelancers and small teams.', price: '$29', buttonText: 'Start Free Trial', isPopular: false },
              { name: 'Pro', description: 'Everything you need for a growing agency.', price: '$99', buttonText: 'Get Pro', isPopular: true },
              { name: 'Enterprise', description: 'Advanced features for large organizations.', price: '$299', buttonText: 'Contact Sales', isPopular: false }
            ]
          },
        },
        {
          instanceId: 'cta-1',
          type: 'cta',
          variant: 'centered',
          props: {
            title: 'Ready to scale your agency?',
            subtitle: 'Join thousands of agencies already using Acme AI to ship faster.',
            primaryButtonText: 'Create your free account'
          },
        },
        {
          instanceId: 'footer-1',
          type: 'footer',
          variant: 'business',
          props: {
            copyrightText: '© {year} {company}. Designed with ZenixUI.'
          },
        }
      ],
    }
  },
  content: {},
  assets: {},
};
