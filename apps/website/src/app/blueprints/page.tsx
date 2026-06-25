import { Metadata } from 'next';
import { ExperienceGalleryClient } from './ExperienceGalleryClient';

export const metadata: Metadata = {
  title: 'Blueprint Gallery | ZenixUI',
  description: 'Browse complete, production-ready website templates. Find an experience you love, copy the blueprint, and make it your own.',
};
export default function ExperiencesPage() {
  return <ExperienceGalleryClient />;
}
