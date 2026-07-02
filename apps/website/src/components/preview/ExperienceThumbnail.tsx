'use client';

/**
 * ExperienceThumbnail — Renders a scaled 1200px desktop layout thumbnail for a mapped Experience.
 * Now acts as a thin wrapper around PreviewRenderer.
 */

import React from 'react';
import { resolvePreview } from './PreviewResolver';
import { PreviewRenderer } from './PreviewRenderer';
import { buildBlueprintProps } from './PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

interface ExperienceThumbnailProps {
  experienceId: string;
  brandId: string;
  variantId?: string;
  aestheticId?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ExperienceThumbnail({
  experienceId,
  brandId,
  variantId = 'default',
  aestheticId = 'glass',
  className,
  style,
}: ExperienceThumbnailProps) {
  const { isValid, BlueprintComponent, experience, brand } = resolvePreview(
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

  return (
    <div className={className} style={{ width: '100%', height: '100%', position: 'relative', ...style }}>
      <PreviewRenderer
        Component={BlueprintComponent as any}
        props={buildBlueprintProps(brand, RenderMode.Thumbnail, Viewport.Desktop)}
        previewHeight={400}
        cardWidth={600}
      />
    </div>
  );
}
