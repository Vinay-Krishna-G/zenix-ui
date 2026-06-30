import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ExperienceShowcase } from '@/components/home/ExperienceShowcase';
import { LaunchFlowDemo } from '@/components/home/LaunchFlowDemo';
import { BlueprintGallery } from '@/components/home/BlueprintGallery';
import { ThemeShowcase } from '@/components/home/ThemeShowcase';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata: Metadata = {
  title: 'ZenixUI | Launch complete websites in minutes',
  description: 'Launch an entire website in minutes. Not just component libraries.',
};

export default function Home() {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8rem 2rem 10rem' }}>
      {/* Section 1: 5 Second Rule (Hero tells the story instantly) */}
      <Hero />
      
      {/* Section 2: Sell Outcomes (Show the experiences available to launch) */}
      <ExperienceShowcase />

      {/* Section 3: The Emotional Journey (Choose -> Customize -> Launch) */}
      <LaunchFlowDemo />

      {/* Section 4: Progressive Disclosure for Developers (Blueprints, Themes) */}
      <div style={{ 
        marginTop: '8rem', 
        paddingTop: '8rem', 
        borderTop: '1px solid rgba(255,255,255,0.1)' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Built for Engineers</h2>
          <p style={{ opacity: 0.7, fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Underneath the launchpad is a rigorous architecture. Every experience is powered by typed Blueprints, Sections, and the ZenixUI Theme Engine.
          </p>
        </div>
        <BlueprintGallery />
        <ThemeShowcase />
      </div>

      <FooterCTA />
    </div>
  );
}
