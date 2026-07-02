import React from 'react';
import { HeroV2 } from '../../components/home/v2/HeroV2';
import { WorldScrollV2 } from '../../components/home/v2/WorldScrollV2';
import { ValuePropV2 } from '../../components/home/v2/ValuePropV2';
import { Composer } from '../../components/home/v2/Composer';

export default function Home() {
  return (
    <main style={{ background: '#09090B', color: '#FAFAFA' }}>
      <HeroV2 />
      <Composer />
      <WorldScrollV2 />
      <ValuePropV2 />
      
      {/* Final CTA */}
      <section style={{ padding: '96px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#09090B' }}>
        <h2 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.04em' }}>Ready to launch?</h2>
        <p style={{ fontSize: '20px', color: '#A1A1AA', marginBottom: '48px' }}>Explore premium experiences and find your business.</p>
        <a href="/experiences" style={{ textDecoration: 'none' }}>
          <button style={{ 
            padding: '16px 40px', background: '#FAFAFA', color: '#09090B', 
            border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: 700, 
            cursor: 'pointer', transition: 'all 150ms ease'
          }}>
            Browse Experiences
          </button>
        </a>
      </section>
    </main>
  );
}
