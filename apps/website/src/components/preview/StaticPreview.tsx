'use client';

/**
 * StaticPreview — Previously loaded PNG screenshots which caused 404s.
 *
 * Now uses resolvePreview() to get the actual React component and renders it
 * using BlueprintThumbnail for a live, scaled, zero-404 thumbnail.
 */

import React from 'react';
import { resolvePreview } from './PreviewResolver';
import { BlueprintThumbnail } from './BlueprintThumbnail';

interface StaticPreviewProps {
  experienceId: string;
  brandId: string;
  variantId?: string;
  aestheticId?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StaticPreview({
  experienceId,
  brandId,
  variantId = 'default',
  aestheticId = 'glass',
  className,
  style,
}: StaticPreviewProps) {
  const { isValid, BlueprintComponent, experience, brand, resolvedBlueprintId } = resolvePreview(
    experienceId,
    brandId,
    variantId,
    aestheticId
  );

  if (!isValid || !BlueprintComponent) {
    return (
      <div
        className={className}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          background: 'linear-gradient(135deg, #111113 0%, #1a1a1f 100%)',
          color: 'rgba(255,255,255,0.4)',
          position: 'relative',
          overflow: 'hidden',
          ...style,
        }}
      >
        <span style={{ fontSize: '2rem', opacity: 0.15, fontWeight: 800, letterSpacing: '0.1em' }}>
          {experience?.personality || 'N/A'}
        </span>
      </div>
    );
  }

  const bpTheme = require('@zenixui/blueprints').blueprints.find((b: any) => b.id === resolvedBlueprintId)?.theme || 'default';

  return (
    <div className={className} style={{ width: '100%', height: '100%', position: 'relative', ...style }}>
      <BlueprintThumbnail
        Component={BlueprintComponent}
        theme={bpTheme}
        previewHeight={400}
        cardWidth={600}
      />
    </div>
  );
}
