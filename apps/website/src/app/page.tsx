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
      
      {/* 1. HERO - What is this? */}
      <Hero />

      {/* 2. INTERACTIVE CLI DEMO - How does it work? */}
      <section style={{ marginBottom: '10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Install exactly what you need.
          </h2>
          <p style={{ opacity: 0.6, fontSize: '1.25rem', margin: 0 }}>
            Pick a section, pick a design language, generate the command.
          </p>
        </div>
        
        <InteractiveCliDemo />
      </section>

      {/* 3. SECTION LIBRARY - What do I get? (Sections) */}
      <SectionLibrary />

      {/* 4. BLUEPRINT GALLERY - What do I get? (Complete Pages) */}
      <BlueprintGallery />

      {/* 5. DESIGN LANGUAGES & STUDIO - Can I customize? */}
      <ThemeShowcase />

      {/* BOTTOM CTA */}
      <FooterCTA />

    </div>
  );
}
