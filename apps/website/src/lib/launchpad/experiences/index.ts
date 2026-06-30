import { Experience } from '../types';

export const studentPortfolio: Experience = {
  id: 'student-portfolio',
  name: 'Student Portfolio',
  industry: 'Education',
  description: 'A complete portfolio with projects, skills, and resume. Get hired faster.',
  perfectFor: ['Final year students', 'Internships', 'Placements', 'Graduate applications'],
  averageSetupTime: '3 minutes',
  variants: [
    { 
      id: 'modern', 
      name: 'Modern', 
      blueprintIdMap: {
        'Glass': 'ocean-portfolio',
        'Minimal': 'zenix-portfolio',
        'Terminal': 'midnight-portfolio',
        'Editorial': 'autumn-portfolio'
      }
    }
  ],
  includes: {
    outcomes: ['Homepage', 'Resume', 'Blog', 'Contact', 'SEO', 'Dark Mode', 'Mobile Ready'],
    technicalDetails: { files: 18, components: 32, sections: 14 }
  },
  coverImage: '/previews/glass-header.png',
  rating: 4.9,
  similarExperiences: ['developer-portfolio', 'creative-portfolio']
};

export const developerPortfolio: Experience = {
  id: 'developer-portfolio',
  name: 'Developer Portfolio',
  industry: 'Personal',
  description: 'A robust technical portfolio for software engineers and systems architects.',
  perfectFor: ['Software Engineers', 'Open Source Maintainers', 'Hackers', 'Systems Architects'],
  averageSetupTime: '4 minutes',
  variants: [
    { 
      id: 'terminal', 
      name: 'Terminal CLI', 
      blueprintIdMap: {
        'Terminal': 'midnight-portfolio'
      }
    }
  ],
  includes: {
    outcomes: ['Homepage', 'Uses', 'Writing', 'Guestbook', 'Contact', 'SEO', 'Dark Mode'],
    technicalDetails: { files: 24, components: 45, sections: 18 }
  },
  coverImage: '/previews/terminal-header.png',
  rating: 5.0,
  similarExperiences: ['student-portfolio', 'startup-saas']
};

export const pharmacy: Experience = {
  id: 'pharmacy',
  name: 'Pharmacy',
  industry: 'Healthcare',
  description: 'Local pharmacy layout with products, services, and booking.',
  perfectFor: ['Local Pharmacies', 'Clinics', 'Health Supplements', 'Dispensaries'],
  averageSetupTime: '15 minutes',
  variants: [
    { 
      id: 'clinical', 
      name: 'Clinical', 
      blueprintIdMap: {
        'Glass': 'ocean-portfolio', // Mock mapping
        'Minimal': 'zenix-portfolio'
      }
    }
  ],
  includes: {
    outcomes: ['Homepage', 'Services', 'Products Catalog', 'Booking Form', 'SEO', 'Locations', 'Dark Mode'],
    technicalDetails: { files: 22, components: 40, sections: 16 }
  },
  coverImage: '/previews/glass-header.png',
  rating: 4.8,
  similarExperiences: ['hospital', 'dental-clinic']
};

export const EXPERIENCES: Experience[] = [
  studentPortfolio,
  developerPortfolio,
  pharmacy
];
