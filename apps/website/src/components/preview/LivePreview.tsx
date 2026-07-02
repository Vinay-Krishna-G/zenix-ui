'use client';

/**
 * LivePreview — Renders a blueprint component inside an interactive browser viewport.
 * Now acts as a thin wrapper around PreviewRenderer.
 */

import React from 'react';
import { resolvePreview } from './PreviewResolver';
import { PreviewRenderer } from './PreviewRenderer';
import { buildBlueprintProps } from './PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

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
          gap: '0.75rem',
          background: '#09090B',
          color: 'rgba(255,255,255,0.4)',
          ...style,
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

  return (
    <div className={className} style={{ width: '100%', height: '100%', position: 'relative', ...style }}>
      <PreviewRenderer
        Component={BlueprintComponent as any}
        props={buildBlueprintProps(brand, RenderMode.Interactive, Viewport.Desktop)}
      />
    </div>
  );
}
