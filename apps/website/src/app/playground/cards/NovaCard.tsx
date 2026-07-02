'use client';

import React, { useState } from 'react';
import { PreviewRenderer } from '../../../components/preview/PreviewRenderer';
import { PreviewSurface } from '../../../components/preview/PreviewSurface';

import { ExperienceListing } from '../mockListings';
import { blueprints } from '@zenixui/blueprints';
import { BlueprintProps, RenderMode, Viewport } from '@zenixui/core';

import { oceanTheme, editorialTheme, luxuryTheme } from '@zenixui/themes';

// We inline a custom adapter for ZenixCard because we need to dynamically inject theme tokens
// based on the signature identity strip interaction.
const THEMES = [
  { id: 'ocean', name: 'Ocean', tokens: oceanTheme },
  { id: 'editorial', name: 'Editorial', tokens: editorialTheme },
  { id: 'luxury', name: 'Luxury', tokens: luxuryTheme },
];

interface NovaCardProps {
  listing: ExperienceListing;
}

export function NovaCard({ listing }: NovaCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const blueprint = blueprints.find(bp => bp.id === listing.blueprintId);
  
  if (!blueprint) return null;

  const currentTheme = THEMES[activeThemeIndex];

  // We construct the props dynamically based on the hovered theme strip
  const dynamicProps: BlueprintProps = {
    theme: currentTheme.tokens,
    content: null,
    mode: RenderMode.Thumbnail,
    viewport: Viewport.Desktop
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setActiveThemeIndex(0); }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        maxWidth: '480px',
        cursor: 'pointer',
      }}
    >
      {/* 85% Preview Area - 4:3 Aspect Ratio */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/3',
        borderRadius: '20px',
        background: '#111112',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.04)',
        // Apple calm shadow + Linear precision inner highlight
        boxShadow: isHovered 
          ? '0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08) inset' 
          : '0 8px 24px -8px rgba(0,0,0,0.5)',
        transform: isHovered ? 'scale(1.01)' : 'scale(1)',
        transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}>
        
        {/* The Scrolling Preview */}
        <div style={{
          width: '100%',
          height: '110%',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.4s ease-out',
        }}>
          <PreviewSurface isHovered={isHovered}>
            <PreviewRenderer 
              Component={blueprint.component as any}
              props={dynamicProps}
            />
          </PreviewSurface>
        </div>

        {/* Zenix Signature: Floating Identity Strip */}
        {/* Appears on hover, allows instant identity switching */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '50%',
          transform: `translateX(-50%) translateY(${isHovered ? '0' : '-10px'})`,
          opacity: isHovered ? 1 : 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '99px',
          padding: '4px',
          display: 'flex',
          gap: '4px',
          transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
          pointerEvents: isHovered ? 'auto' : 'none',
          zIndex: 20,
        }}>
          {THEMES.map((t, idx) => (
            <div
              key={t.id}
              onMouseEnter={() => setActiveThemeIndex(idx)}
              style={{
                padding: '4px 12px',
                borderRadius: '99px',
                fontSize: '11px',
                fontWeight: 600,
                color: activeThemeIndex === idx ? '#fff' : 'rgba(255,255,255,0.5)',
                background: activeThemeIndex === idx ? 'rgba(255,255,255,0.15)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {t.name}
            </div>
          ))}
        </div>

        {/* Reveal Intent Action (Instead of buttons) */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
          pointerEvents: 'none',
        }}>
          <span style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '99px',
            fontSize: '13px',
            fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            Click to Open Studio
          </span>
        </div>
      </div>

      {/* 15% Metadata Area - Reduced to 3 lines */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 8px', // Apple-style slight inset
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: 600, 
            color: '#f5f5f7',
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            {listing.name}
          </h3>
          <span style={{
            fontSize: '14px',
            color: '#86868b',
          }}>
            {blueprint.category.charAt(0).toUpperCase() + blueprint.category.slice(1)}
          </span>
        </div>
        
        {/* Single clear badge */}
        {listing.featured && (
          <span style={{
            fontSize: '12px',
            fontWeight: 500,
            color: '#fff',
            background: 'rgba(255,255,255,0.1)',
            padding: '4px 10px',
            borderRadius: '6px',
            letterSpacing: '0.01em',
          }}>
            Featured
          </span>
        )}
      </div>
    </div>
  );
}
