'use client';

import React, { useState, useRef } from 'react';
import { MarketplacePreviewAdapter } from '../../../components/preview/adapters/MarketplacePreviewAdapter';
import { ExperienceListing } from '../mockListings';
import { blueprints } from '@zenixui/blueprints';

interface AuroraCardProps {
  listing: ExperienceListing;
}

export function AuroraCard({ listing }: AuroraCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  const blueprint = blueprints.find(bp => bp.id === listing.blueprintId);
  if (!blueprint) return null;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // Calculate 3D rotations based on mouse position (max 5 degrees)
  const rotateX = isHovered ? (mousePos.y - 0.5) * -10 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 10 : 0;
  // Calculate dynamic lighting based on mouse
  const lightX = mousePos.x * 100;
  const lightY = mousePos.y * 100;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
      onMouseMove={handleMouseMove}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        cursor: 'pointer',
        perspective: '1000px',
      }}
    >
      {/* 85% Preview Area - Motion first, 3D tilt */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '24px',
        background: '#111',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: isHovered 
          ? '0 30px 60px -12px rgba(0,0,0,0.8)' 
          : '0 8px 24px rgba(0,0,0,0.4)',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered 
          ? 'transform 0.1s ease-out, box-shadow 0.3s ease' 
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
      }}>
        {/* Dynamic Light Sweep */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 10,
          mixBlendMode: 'overlay',
        }} />

        {/* The Preview - moves slightly opposite to create depth */}
        <div style={{
          width: '100%', height: '100%',
          transform: isHovered 
            ? `translateZ(20px) scale(1.05)` 
            : 'translateZ(0) scale(1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
        }}>
          <MarketplacePreviewAdapter 
            Component={blueprint.component as any}
            previewHeight={300} 
            cardWidth={420} 
          />
        </div>

        {/* Floating Badges */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          right: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          transform: isHovered ? 'translateZ(40px)' : 'translateZ(0)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
          zIndex: 20,
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(12px)',
            padding: '6px 12px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {blueprint.theme}
          </div>

          {/* Action button pops in */}
          <button style={{
            background: '#fff',
            color: '#000',
            padding: '8px 16px',
            borderRadius: '99px',
            fontSize: '13px',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}>
            Get Experience
          </button>
        </div>
      </div>

      {/* 15% Metadata Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 8px',
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#fff',
          margin: '0 0 2px 0',
        }}>
          {listing.name}
        </h3>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          margin: 0,
        }}>
          By {listing.creator}
        </p>
      </div>
    </div>
  );
}
