'use client';
import { buildBlueprintProps } from './preview/PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

/**
 * DocsBlueprintCard — Small blueprint preview card used in documentation pages.
 *
 * Takes only the blueprint `id` (serializable) and looks up the component
 * client-side from the blueprints registry. This is required because server
 * components cannot pass function props (React components) to client components.
 */

import React from 'react';
import Link from 'next/link';
import { Surface } from '@zenixui/components';
import { blueprints } from '@zenixui/blueprints';
import { PreviewRenderer } from './preview/PreviewRenderer';
import { PreviewSurface } from './preview/PreviewSurface';

interface DocsBlueprintCardProps {
  /** The blueprint ID. The component is resolved client-side from the registry. */
  id: string;
  title: string;
  category: string;
  /**
   * Optional: previewHeight. Defaults to 120 for compact doc cards.
   * Set to 200 for larger template page cards.
   */
  previewHeight?: number;
}

export function DocsBlueprintCard({ id, title, category, previewHeight = 120 }: DocsBlueprintCardProps) {
  // Resolve the component client-side — avoids passing functions across the
  // server/client boundary, which React 18 forbids.
  const bp = blueprints.find(b => b.id === id);
  if (!bp) return null;

  return (
    <Link href={`/blueprints/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Surface
        variant="card"
        style={{
          padding: 0,
          overflow: 'hidden',
          border: '1px solid var(--zx-elevated)',
          transition: 'border-color 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-primary)';
          (e.currentTarget as HTMLElement).style.transform   = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-elevated)';
          (e.currentTarget as HTMLElement).style.transform   = 'translateY(0)';
        }}
      >
        <div style={{ height: previewHeight, overflow: 'hidden' }}>
          <PreviewSurface>
            <PreviewRenderer
              Component={bp.component as any}
              props={buildBlueprintProps(null, RenderMode.Thumbnail, Viewport.Desktop)}
            />
          </PreviewSurface>
        </div>
        <div style={{ padding: '1rem' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.4, marginBottom: '0.25rem' }}>
            {category}
          </div>
          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{title}</div>
        </div>
      </Surface>
    </Link>
  );
}
