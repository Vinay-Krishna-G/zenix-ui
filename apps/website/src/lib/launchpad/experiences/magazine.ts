import { Experience } from '../types';

export const magazine: Experience = { id: 'magazine', name: 'Magazine', industryId: 'creator', description: 'Editorial layout.', perfectFor: ["Writers","Publishers"], averageSetupTime: '3 minutes', variants: [{"id":"editorial","name":"Editorial","blueprintIdMap":{"editorial":"autumn-portfolio"}}], includes: { outcomes: ['Homepage', 'About', 'Blog', 'Contact', 'SEO', 'Mobile Ready'], technicalDetails: { files: 14, components: 20, sections: 10 } }, coverImage: '/previews/glass-header.png', rating: 5.0, similarExperiences: [] };
