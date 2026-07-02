'use client';

import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { ExperienceCardPrototype } from './ExperienceCardPrototype';

const COLLECTIONS = [
  { id: 'startup', title: 'Startups & SaaS', subtitle: 'High-conversion landing pages for modern tech companies.' },
  { id: 'luxury', title: 'Luxury & Brand', subtitle: 'Sophisticated typography and expansive whitespace.' },
];

export function FeaturedCollectionsPrototype() {
  return (
    <div style={{ marginBottom: '8rem', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
      
      {COLLECTIONS.map((collection, index) => {
        // Mocking a different set of blueprints for each collection for the prototype
        const collectionBlueprints = index === 0 
          ? blueprints.filter(bp => bp.category === 'landing' || bp.category === 'dashboard').slice(0, 4)
          : blueprints.filter(bp => bp.theme === 'ocean' || bp.theme === 'midnight').slice(0, 4);

        return (
          <section key={collection.id}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '1.5rem',
            }}>
              <div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 600, 
                  letterSpacing: '-0.02em',
                  margin: '0 0 0.5rem',
                  color: '#fff' 
                }}>
                  {collection.title}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0
                }}>
                  {collection.subtitle}
                </p>
              </div>
              
              <button style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--zx-primary, #3b82f6)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                View All Collection <span style={{ fontSize: '1.2em' }}>→</span>
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}>
              {collectionBlueprints.map((bp) => (
                <ExperienceCardPrototype
                  key={bp.id + collection.id}
                  id={bp.id}
                  title={bp.title}
                  description={bp.description}
                  theme={bp.theme}
                  category={bp.category}
                  component={bp.component}
                />
              ))}
            </div>
          </section>
        );
      })}

    </div>
  );
}
