'use client';

import React from 'react';
import { mockListings } from './mockListings';
import { AppleCard } from './cards/AppleCard';
import { LinearCard } from './cards/LinearCard';
import { FramerCard } from './cards/FramerCard';
import { SteamCard } from './cards/SteamCard';

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
            Experience Card Concepts
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto' }}>
            Hover over the 4 concepts below to evaluate aesthetics, motion, and typography.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* A: Apple */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>A. Apple Concept</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Calm, minimal, almost invisible. Gentle lift.
            </p>
            <AppleCard listing={listing} />
          </div>

          {/* B: Linear */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>B. Linear Concept</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Dark, sharp, technical. Crisp 1px highlights.
            </p>
            <LinearCard listing={listing} />
          </div>

          {/* C: Framer */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>C. Framer Concept</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Creative, motion-first. 3D perspective shift.
            </p>
            <FramerCard listing={listing} />
          </div>

          {/* D: Steam */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>D. Steam/Netflix Concept</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
              Huge preview, content-first. Cinematic reveal.
            </p>
            <SteamCard listing={listing} />
          </div>
        </div>
        
      </div>
    </div>
  );
}
