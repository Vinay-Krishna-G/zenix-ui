import type { ExperienceConfig } from '@zenixui/core';

export const saasStartupExperience: ExperienceConfig = {
  id: 'saas-startup',
  metadata: {
    name: 'SaaS Startup',
    category: 'SaaS'
  },
  theme: {
    preset: 'zenix',
    colors: {
      primary: '#0ea5e9', // Sky blue for SaaS
      surface: '#ffffff',
      text: '#0f172a',
    }
  },
  branding: {
    companyName: 'NexusAI',
    tagline: 'Automate your workflow with intelligent agents.',
    logo: '⚡',
  },
  content: {},
  assets: {},
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
              { label: 'Product', url: '#' },
              { label: 'Solutions', url: '#' },
              { label: 'Pricing', url: '#' },
              { label: 'Docs', url: '#' }
            ],
            showLogin: true,
            loginText: 'Log in',
            ctaText: 'Start Free Trial'
          }
        },
        {
          instanceId: 'hero-1',
          type: 'hero',
          variant: 'centered',
          props: {
            title: 'Ship faster with AI agents',
            subtitle: 'NexusAI acts as your autonomous engineering team, automating the boring stuff so you can focus on the product.',
            primaryButtonText: 'Start Free Trial',
            secondaryButtonText: 'View Documentation'
          }
        },
        {
          instanceId: 'logos-1',
          type: 'logos',
          variant: 'grid',
          props: {
            label: 'Trusted by innovative teams worldwide',
            logos: [
              { name: 'Vercel', image: '', alt: 'Vercel' },
              { name: 'Stripe', image: '', alt: 'Stripe' },
              { name: 'Linear', image: '', alt: 'Linear' },
              { name: 'Raycast', image: '', alt: 'Raycast' },
              { name: 'Supabase', image: '', alt: 'Supabase' }
            ]
          }
        },
        {
          instanceId: 'features-1',
          type: 'features',
          variant: 'grid',
          props: {
            label: 'Features',
            title: 'Everything you need to scale',
            subtitle: 'Powerful automation tools that adapt to your unique workflow.',
            items: [
              { title: 'Automated PRs', description: 'Agents review and merge code automatically.', icon: '🔄' },
              { title: 'Smart Testing', description: 'Self-healing test suites that adapt to changes.', icon: '🧪' },
              { title: 'Security Scans', description: 'Continuous vulnerability detection.', icon: '🛡️' }
            ]
          }
        },
        {
          instanceId: 'stats-1',
          type: 'stats',
          variant: 'grid',
          props: {
            title: 'Built for scale and speed',
            subtitle: 'NexusAI delivers measurable impact from day one.',
            stats: [
              { value: '10x', label: 'Faster Shipping', description: 'Reduction in code review cycle times.', icon: '🚀' },
              { value: '99.9%', label: 'Uptime', description: 'Enterprise-grade reliability.', icon: '⚡' },
              { value: '500k+', label: 'PRs Merged', description: 'Handled automatically by agents.', icon: '🔄' },
              { value: '24/7', label: 'Availability', description: 'Agents never sleep.', icon: '🛡️' }
            ]
          }
        },
        {
          instanceId: 'pricing-1',
          type: 'pricing',
          variant: 'cards',
          props: {
            title: 'Simple, usage-based pricing',
            subtitle: 'Start for free, scale when you need to.',
            plans: [
              { name: 'Starter', description: 'For indie hackers', price: '$0', isPopular: false, buttonText: 'Start Free' },
              { name: 'Pro', description: 'For growing teams', price: '$49', isPopular: true, buttonText: 'Start 14-Day Trial' },
              { name: 'Enterprise', description: 'For large organizations', price: 'Custom', isPopular: false, buttonText: 'Contact Sales' }
            ]
          }
        },
        {
          instanceId: 'faq-1',
          type: 'faq',
          variant: 'accordion',
          props: {
            title: 'Frequently Asked Questions',
            subtitle: 'Everything you need to know about NexusAI and billing.',
            faqs: [
              { question: 'Is my codebase secure?', answer: 'Yes. We do not store your source code, and all agents run in isolated sandboxes.' },
              { question: 'Can I use custom agents?', answer: 'Absolutely. The Pro and Enterprise plans allow you to define custom agent behaviors.' },
              { question: 'What happens when I hit my limit?', answer: 'We will pause automated merges and notify you to upgrade your tier.' }
            ]
          }
        },
        {
          instanceId: 'cta-1',
          type: 'cta',
          variant: 'centered',
          props: {
            title: 'Ready to automate your team?',
            subtitle: 'Join 10,000+ developers shipping faster with NexusAI.',
            primaryButtonText: 'Start Your Free Trial'
          }
        },
        {
          instanceId: 'footer-1',
          type: 'footer',
          variant: 'business',
          props: {
            copyrightText: '© {year} {company}. Made with ZenixUI.'
          }
        }
      ]
    }
  }
};
