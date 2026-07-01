'use client';

/**
 * LivePreview — Renders a blueprint component inside a themed container.
 *
 * Uses resolvePreview() which now falls back gracefully when the exact
 * (experience, aesthetic) combination isn't explicitly mapped — so users
 * never see "Generating preview..." stuck indefinitely.
 */

import React from 'react';
import { resolvePreview } from './PreviewResolver';
import { createPreviewTheme } from './PreviewTheme';

interface LivePreviewProps {
  experienceId: string;
  brandId: string;
  variantId: string;
  aestheticId: string;
  className?: string;
  style?: React.CSSProperties;
}

export function LivePreview({
  experienceId,
  brandId,
  variantId,
  aestheticId,
  className,
  style,
}: LivePreviewProps) {
  const { isValid, brand, BlueprintComponent, experience } = resolvePreview(
    experienceId,
    brandId,
    variantId,
    aestheticId
  );

  // ── Not found state ─────────────────────────────────────────────────────────
  // Only shown when the experience itself doesn't exist or has no variants.
  // A partial aesthetic map is now handled by the resolver's fallback.
  if (!isValid || !BlueprintComponent) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          background: '#09090B',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        <div style={{ fontSize: '2rem', opacity: 0.3 }}>⬡</div>
        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
          {experience ? 'No blueprint mapped for this combination.' : 'Experience not found.'}
        </span>
        <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>
          {experienceId} / {aestheticId}
        </span>
      </div>
    );
  }

  // ── Live preview ────────────────────────────────────────────────────────────
  const themeStyles = createPreviewTheme(brand);

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...themeStyles,
        ...style,
      }}
    >
      <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
        <BlueprintComponent />
      </div>
    </div>
  );
}
