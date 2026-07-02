'use client';

import React, { useState } from 'react';
import { MarketplacePreviewAdapter } from '../../../components/preview/adapters/MarketplacePreviewAdapter';
import { ExperienceListing } from '../mockListings';
import { blueprints } from '@zenixui/blueprints';

interface DiamondCardProps {
  listing: ExperienceListing;
}

export function DiamondCard({ listing }: DiamondCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const blueprint = blueprints.find(bp => bp.id === listing.blueprintId);
  
  if (!blueprint) return null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        cursor: 'pointer',
      }}
    >
      {/* 85% Preview Area - Almost invisible container, highly rounded corners like Apple */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '20px',
        background: '#111112', // Very subtle off-black
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.03)',
        // Apple-style calm, diffuse shadow that barely lifts
        boxShadow: isHovered 
          ? '0 10px 40px -10px rgba(0,0,0,0.5)' 
          : '0 4px 12px -4px rgba(0,0,0,0.3)',
        transform: isHovered ? 'scale(1.005)' : 'scale(1)',
        transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}>
        {/* The Preview */}
        <div style={{
          width: '100%', height: '100%',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          <MarketplacePreviewAdapter 
            Component={blueprint.component as any}
            previewHeight={300} 
            cardWidth={420} 
          />
        </div>

        {/* Hover Actions Overlay - Very clean blur, fades in */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.2)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}>
          <button style={{
            padding: '8px 20px',
            borderRadius: '99px',
            background: '#fff',
            color: '#000',
            border: 'none',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>
            Get
          </button>
          <button style={{
            padding: '8px 20px',
            borderRadius: '99px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            border: 'none',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Preview
          </button>
        </div>
      </div>

      {/* 15% Metadata Area - Perfect typography, no noise */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 4px', // slight inset to align visually with rounded corners
      }}>
        <div>
          <h3 style={{ 
            fontSize: '15px', 
            fontWeight: 500, 
            color: '#f5f5f7',
            margin: '0 0 2px 0',
            letterSpacing: '-0.01em',
          }}>
            {listing.name}
          </h3>
          <p style={{
            fontSize: '13px',
            color: '#86868b',
            margin: 0,
          }}>
            {blueprint.category.charAt(0).toUpperCase() + blueprint.category.slice(1)} Experience
          </p>
        </div>
        
        {/* Tiny Metadata Tags */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {listing.premium && (
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#86868b',
              background: '#1d1d1f',
              padding: '2px 6px',
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}>
              Premium
            </span>
          )}
          {listing.featured && (
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#06c', // Apple blue
              background: 'rgba(0, 102, 204, 0.1)',
              padding: '2px 6px',
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}>
              New
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
