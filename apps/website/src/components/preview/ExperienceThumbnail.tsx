'use client';

import React from 'react';
import { resolvePreview } from './PreviewResolver';
import { PreviewRenderer } from './PreviewRenderer';
import { PreviewSurface } from './PreviewSurface';
import { buildBlueprintProps } from './PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

interface ExperienceThumbnailProps {
  experienceId: string;
  brandId: string;
  variantId: string;
  aestheticId: string;
  previewHeight?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export function ExperienceThumbnail({
  experienceId,
  brandId,
  variantId,
  aestheticId,
  previewHeight = 240,
  className,
  style,
}: ExperienceThumbnailProps) {
  const { isValid, brand, BlueprintComponent } = resolvePreview(
    experienceId,
    brandId,
    variantId,
    aestheticId
  );

  if (!isValid || !BlueprintComponent) {
    return (
      <div style={{ width: '100%', height: previewHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
        <span style={{ fontSize: '12px', opacity: 0.5 }}>Not Found</span>
      </div>
    );
  }

  return (
    <div className={className} style={{ width: '100%', height: previewHeight, overflow: 'hidden', ...style }}>
      <PreviewSurface>
        <PreviewRenderer
          Component={BlueprintComponent as any}
          props={buildBlueprintProps(brand, RenderMode.Thumbnail, Viewport.Desktop)}
        />
      </PreviewSurface>
    </div>
  );
}
