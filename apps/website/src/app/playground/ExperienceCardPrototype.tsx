'use client';

import React, { useState } from 'react';
import { MarketplacePreviewAdapter } from '../../components/preview/adapters/MarketplacePreviewAdapter';

interface ExperienceCardPrototypeProps {
  id: string;
  title: string;
  description: string;
  theme: string;
  category: string;
  component: React.ComponentType<any>;
}

export function ExperienceCardPrototype({ 
  id, title, description, theme, category, component 
}: ExperienceCardPrototypeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        background: '#09090b', // dark background
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isHovered 
          ? '0 20px 40px -10px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.03)' 
          : '0 10px 30px -10px rgba(0,0,0,0.6)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)',
        overflow: 'hidden',
        cursor: 'pointer',
        width: '100%',
        maxWidth: '420px',
      }}
    >
      {/* Animated Gradient Border effect on hover */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          zIndex: 10,
        }} 
      />

      {/* The Preview Layer */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
        <div style={{
          width: '100%', height: '100%',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        }}>
          <MarketplacePreviewAdapter 
            Component={component}
            previewHeight={300} 
            cardWidth={420} 
          />
        </div>
        
        {/* Theme Pill Overlay */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '0.25rem 0.75rem',
          borderRadius: '999px',
          fontSize: '0.7rem',
          fontWeight: 600,
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          opacity: isHovered ? 1 : 0.7,
          transition: 'opacity 0.3s ease',
          zIndex: 5,
        }}>
          {theme}
        </div>
      </div>

      {/* Elegant Details Layer */}
      <div style={{
        position: 'relative',
        padding: '1.5rem',
        background: 'rgba(14, 14, 16, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        zIndex: 5,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 500, 
            margin: 0, 
            color: '#fff',
            letterSpacing: '-0.02em',
          }}>
            {title}
          </h3>
          <span style={{ 
            fontSize: '0.75rem', 
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            paddingTop: '0.25rem'
          }}>
            {category}
          </span>
        </div>
        
        <p style={{
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.6)',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {description}
        </p>

        {/* Hover Action */}
        <div style={{
          marginTop: '1rem',
          height: isHovered ? '24px' : '0px',
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--zx-primary, #3b82f6)',
          fontSize: '0.875rem',
          fontWeight: 500,
        }}>
          Explore Experience 
          <span style={{
            transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>→</span>
        </div>
      </div>
    </div>
  );
}
