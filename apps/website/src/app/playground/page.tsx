'use client';

import React from 'react';
import { FeaturedExperiencePrototype } from './FeaturedExperiencePrototype';

export default function PlaygroundPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#050505', 
      color: '#fff',
      padding: '2rem',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 0 1rem' }}>
          Sprint 1.1: Responsive Foundation
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '800px', margin: '0 auto' }}>
          Compare Desktop, Tablet, and Mobile layouts simultaneously. 
          The component uses a single React tree. Layout and reordering are handled entirely by CSS Grid tokens.
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '4rem', 
        overflowX: 'auto',
        padding: '2rem',
        alignItems: 'flex-start',
      }}>
        
        {/* Desktop View (Inherits :root by default) */}
        <div className="zx-breakpoint-desktop" style={{ flexShrink: 0, width: '1200px' }}>
          <div style={{ padding: '1rem', background: '#111', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#86868b', marginBottom: '2rem', textAlign: 'center' }}>Desktop (1200px+)</h2>
            <FeaturedExperiencePrototype />
          </div>
        </div>

        {/* Tablet View (Forced tokens via class) */}
        <div className="zx-breakpoint-tablet" style={{ flexShrink: 0, width: '768px' }}>
          <div style={{ padding: '1rem', background: '#111', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#86868b', marginBottom: '2rem', textAlign: 'center' }}>Tablet (768px - 1023px)</h2>
            <FeaturedExperiencePrototype />
          </div>
        </div>

        {/* Mobile View (Forced tokens via class) */}
        <div className="zx-breakpoint-mobile" style={{ flexShrink: 0, width: '375px' }}>
          <div style={{ padding: '1rem', background: '#111', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#86868b', marginBottom: '2rem', textAlign: 'center' }}>Mobile (375px)</h2>
            <FeaturedExperiencePrototype />
          </div>
        </div>

      </div>
    </div>
  );
}
