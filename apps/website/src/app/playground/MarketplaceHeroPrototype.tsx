'use client';

import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { MarketplacePreviewAdapter } from '../../components/preview/adapters/MarketplacePreviewAdapter';

export function MarketplaceHeroPrototype() {
  const heroBlueprint = blueprints.find(bp => bp.id === 'ocean-landing');
  if (!heroBlueprint) return null;
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      marginBottom: '8rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* ── Title ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', zIndex: 10 }}>
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          margin: '0 0 1rem',
          background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Build the extraordinary.
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Discover premium, production-ready experiences. Install with a single command.
        </p>
      </div>

      {/* ── Massive Preview ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        aspectRatio: '16/9',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.05)',
        transform: 'translateY(0)',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
      }}>
        {/* We use the adapter to render the OceanLanding blueprint cleanly */}
        <MarketplacePreviewAdapter 
          Component={heroBlueprint.component as any}
          previewHeight={675}
          cardWidth={1200}
        />

        {/* Subtle glass overlay gradient at the bottom to blend it in */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, #000 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}
