'use client';

import React, { useState } from 'react';
import { MarketplacePreviewAdapter } from '../../../components/preview/adapters/MarketplacePreviewAdapter';
import { ExperienceListing } from '../mockListings';
import { blueprints } from '@zenixui/blueprints';

interface SteamCardProps {
  listing: ExperienceListing;
}

export function SteamCard({ listing }: SteamCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const blueprint = blueprints.find(bp => bp.id === listing.blueprintId);
  
  if (!blueprint) return null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '12px',
        background: '#111',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: isHovered 
          ? '0 20px 40px -10px rgba(0,0,0,0.8)' 
          : '0 4px 12px rgba(0,0,0,0.5)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {/* 90% Preview Area */}
      <div style={{
        width: '100%', height: '100%',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.5s ease',
      }}>
        <MarketplacePreviewAdapter 
          Component={blueprint.component as any}
          previewHeight={300} 
          cardWidth={420} 
        />
      </div>

      {/* Default minimal gradient to make title readable */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
        transition: 'height 0.3s ease, background 0.3s ease',
      }} />

      {/* Cinematic Reveal Overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transform: isHovered ? 'translateY(0)' : 'translateY(24px)', // Shifts up on hover
        transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
      }}>
        <h3 style={{ 
          fontSize: '22px', 
          fontWeight: 700, 
          color: '#fff',
          margin: 0,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        }}>
          {listing.name}
        </h3>
        
        {/* These details fade in on hover */}
        <div style={{
          opacity: isHovered ? 1 : 0,
          height: isHovered ? 'auto' : 0, // Using opacity and height for the reveal
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          transition: 'opacity 0.3s ease',
        }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
             {listing.premium && (
               <span style={{
                 background: '#3b82f6',
                 color: '#fff',
                 padding: '2px 8px',
                 borderRadius: '4px',
                 fontSize: '11px',
                 fontWeight: 700,
                 textTransform: 'uppercase',
               }}>
                 Premium
               </span>
             )}
             <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
               {blueprint.category.toUpperCase()}
             </span>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
            <button style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: '4px',
              background: '#fff',
              color: '#000',
              border: 'none',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
            }}>
              Install Now
            </button>
            <button style={{
              width: '40px',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
            }}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
