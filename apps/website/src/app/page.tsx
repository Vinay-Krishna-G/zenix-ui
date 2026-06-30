import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { InteractiveCliDemo } from '@/components/home/InteractiveCliDemo';
import { SectionLibrary } from '@/components/home/SectionLibrary';
import { BlueprintGallery } from '@/components/home/BlueprintGallery';
import { ThemeShowcase } from '@/components/home/ThemeShowcase';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata: Metadata = {
  title: 'ZenixUI | Build Entire Experiences, Not Components',
  description: 'ZenixUI is a complete experience ecosystem for React. Browse production-ready blueprints, customize themes visually, and install via CLI. Not a component library.',
};

export default function Home() {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8rem 2rem 10rem' }}>
      <Hero />
      <InteractiveCliDemo />
      <SectionLibrary />
      <BlueprintGallery />
      <ThemeShowcase />
      <FooterCTA />
    </div>
  );
}
