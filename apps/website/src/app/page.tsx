import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ExperienceShowcase } from '@/components/home/ExperienceShowcase';
import { LaunchFlowDemo } from '@/components/home/LaunchFlowDemo';
import { BeforeAfterDemo } from '@/components/home/BeforeAfterDemo';
import { BlueprintGallery } from '@/components/home/BlueprintGallery';
import { ThemeShowcase } from '@/components/home/ThemeShowcase';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata: Metadata = {
  title: 'ZenixUI | Launch complete websites in minutes',
  description: 'Launch an entire website in minutes. Not just component libraries.',
};

export default function Home() {
  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '8rem 0 10rem' }}>
        
        {/* Section 1: The Living Hero */}
        <div style={{ padding: '0 2rem' }}>
          <Hero />
        </div>
        
        {/* Section 1.5: The Reveal */}
        <div style={{ padding: '0 2rem' }}>
          <BeforeAfterDemo />
        </div>

        {/* Section 2: Sell Outcomes (Netflix Style Grid) */}
        <ExperienceShowcase />

        {/* Section 3: The Emotional Journey */}
        <div style={{ padding: '0 2rem' }}>
          <LaunchFlowDemo />
        </div>

        {/* Section 4: Progressive Disclosure for Developers (Blueprints, Themes) */}
        <div style={{ 
          marginTop: '8rem', 
          paddingTop: '8rem', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '8rem 2rem 0'
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

        <div style={{ padding: '0 2rem' }}>
          <FooterCTA />
        </div>
      </div>
    </div>
  );
}
