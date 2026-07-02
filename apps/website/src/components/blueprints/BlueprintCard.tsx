'use client';
import { buildBlueprintProps } from '../preview/PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

/**
 * BlueprintCard — Used on the homepage Blueprint Gallery section.
 *
 * Uses PreviewRenderer (live React preview) instead of the broken
 * previewImage PNG path, which never existed.
 */

import React from 'react';
import Link from 'next/link';
import { PreviewRenderer } from '../preview/PreviewRenderer';

interface BlueprintCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  // component is the actual React blueprint to render as a live preview
  component: React.ComponentType;
  theme: string;
}

export function BlueprintCard({ id, title, description, category, component, theme }: BlueprintCardProps) {
  return (
    <Link href={`/blueprints/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        style={{
          background: 'var(--zx-surface, #111)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(255,255,255,0.05)',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.5)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        }}
      >
        {/* Live preview — always accurate, zero 404s */}
        <PreviewRenderer
          Component={component as any}
          props={buildBlueprintProps(null, RenderMode.Thumbnail, Viewport.Desktop)}
          
          
        />

        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem', color: '#FFF' }}>{title}</h3>
          <p style={{ fontSize: '1rem', opacity: 0.6, margin: '0 0 2rem', lineHeight: 1.5, flex: 1 }}>{description}</p>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--zx-primary, #21F1A8)' }}>
              {category}
            </span>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.8 }}>View Blueprint &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
