'use client';

import React from 'react';
import { mockListings } from './mockListings';
import { DiamondCard } from './cards/DiamondCard';
import { ObsidianCard } from './cards/ObsidianCard';
import { AuroraCard } from './cards/AuroraCard';
import { CinemaCard } from './cards/CinemaCard';
import { NovaCard } from './cards/NovaCard';

export default function PlaygroundPage() {
  // Use a stable, single mock listing to compare the 4 concepts fairly.
  const listing = mockListings[0];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#050505', // Very dark background to pop the cards
      color: '#fff',
      padding: '4rem 2rem 10rem',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 600, 
            letterSpacing: '-0.04em',
            margin: '0 0 1rem'
          }}>
            Version 2: The Nova Card
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto' }}>
            70% Diamond, 20% Cinema, 10% Obsidian. 
            Hover to see the 20% vertical scroll and the signature Identity Strip.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8rem' }}>
          <div style={{ width: '100%', maxWidth: '480px' }}>
            <NovaCard listing={listing} />
          </div>
        </div>

        <div style={{ marginBottom: '4rem', textAlign: 'center', opacity: 0.5 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Previous Concepts (v1)</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* A: Diamond */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>◇ Diamond</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Premium, calm, polished. Gentle lift.
            </p>
            <DiamondCard listing={listing} />
          </div>

          {/* B: Obsidian */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>◇ Obsidian</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Precise, sharp, engineered. Crisp 1px highlights.
            </p>
            <ObsidianCard listing={listing} />
          </div>

          {/* C: Aurora */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>◇ Aurora</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Motion, creativity, fluid. 3D perspective shift.
            </p>
            <AuroraCard listing={listing} />
          </div>

          {/* D: Cinema */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>◇ Cinema</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Immersive, visual-first. Cinematic reveal.
            </p>
            <CinemaCard listing={listing} />
          </div>
        </div>
        
      </div>
    </div>
  );
}
