'use client';

import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { ExperienceCardPrototype } from './ExperienceCardPrototype';

export function TrendingExperiencesPrototype() {
  // Grab a subset for trending
  const trendingBlueprints = blueprints.slice(3, 7);

  return (
    <div style={{ marginBottom: '8rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        marginBottom: '2rem' 
      }}>
        <div>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 600, 
            letterSpacing: '-0.02em',
            margin: '0 0 0.5rem',
            color: '#fff' 
          }}>
            Trending Experiences
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            color: 'rgba(255,255,255,0.5)',
            margin: 0
          }}>
            The most installed blueprints this week.
          </p>
        </div>
        
        {/* Simple navigation arrows */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{
            width: '40px', height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}>
            ←
          </button>
          <button style={{
            width: '40px', height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}>
            →
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        overflowX: 'auto',
        paddingBottom: '2rem', // for shadow clipping
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE
      }}>
        <style dangerouslySetInnerHTML={{__html: `
          ::-webkit-scrollbar { display: none; }
        `}} />
        
        {trendingBlueprints.map((bp) => (
          <div key={bp.id} style={{ minWidth: '400px' }}>
            <ExperienceCardPrototype
              id={bp.id}
              title={bp.title}
              description={bp.description}
              theme={bp.theme}
              category={bp.category}
              component={bp.component}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
