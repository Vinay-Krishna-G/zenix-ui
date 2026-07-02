'use client';

import React, { useState } from 'react';
import { PreviewRenderer } from '../../../components/preview/PreviewRenderer';
import { PreviewSurface } from '../../../components/preview/PreviewSurface';
import { oceanTheme } from '@zenixui/themes';
import { ExperienceListing } from '../mockListings';
import { blueprints } from '@zenixui/blueprints';
import { BlueprintProps, RenderMode, Viewport } from '@zenixui/core';

interface ObsidianCardProps {
  listing: ExperienceListing;
}

export function ObsidianCard({ listing }: ObsidianCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const blueprint = blueprints.find(bp => bp.id === listing.blueprintId);
  
  if (!blueprint) return null;

  const dynamicProps: BlueprintProps = {
    theme: oceanTheme,
    content: null,
    mode: RenderMode.Thumbnail,
    viewport: Viewport.Desktop
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        cursor: 'pointer',
      }}
    >
      {/* 85% Preview Area - Sharp corners, technical grid, inner shadow */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '8px', // Sharper corners
        background: '#0a0a0a',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
        // Crisp, technical elevation, almost like a 3D block
        boxShadow: isHovered 
          ? '0 16px 32px -8px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05) inset' 
          : '0 4px 12px rgba(0,0,0,0.5)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
      }}>
        {/* The Preview */}
        <div style={{
          width: '100%',
          height: '110%',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.3s ease-out',
        }}>
          <PreviewSurface isHovered={isHovered}>
            <PreviewRenderer 
              Component={blueprint.component as any}
              props={dynamicProps}
            />
          </PreviewSurface>
        </div>

        {/* Hover Actions - Very technical, icon-driven */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(-4px)',
          transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
          display: 'flex',
          gap: '8px',
        }}>
          <button style={{
            padding: '6px 12px',
            borderRadius: '4px',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'monospace',
            cursor: 'pointer',
          }}>
            Preview
          </button>
          <button style={{
            padding: '6px 12px',
            borderRadius: '4px',
            background: '#fff',
            border: '1px solid #fff',
            color: '#000',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>
            Install
          </button>
        </div>
      </div>

      {/* 15% Metadata Area - Monospaced / Technical */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <div>
          <h3 style={{ 
            fontSize: '14px', 
            fontWeight: 500, 
            color: '#fff',
            margin: '0 0 4px 0',
            letterSpacing: '0.01em',
          }}>
            {listing.name}
          </h3>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
            }}>
              {listing.creator}
            </span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)',
            }}>
              {blueprint.category}
            </span>
          </div>
        </div>
        
        {listing.premium ? (
           <span style={{
             fontSize: '12px',
             color: '#f59e0b', // Amber/Gold for premium in dark technical themes
             fontFamily: 'monospace',
           }}>
             $49
           </span>
        ) : (
           <span style={{
             fontSize: '12px',
             color: 'rgba(255,255,255,0.3)',
             fontFamily: 'monospace',
           }}>
             Free
           </span>
        )}
      </div>
    </div>
  );
}
