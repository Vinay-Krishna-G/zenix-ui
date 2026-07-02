'use client';

import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { PreviewRenderer } from './PreviewRenderer';
import { PreviewSurface } from './PreviewSurface';
import { buildBlueprintProps } from './PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

interface BlueprintThumbnailProps {
  id: string;
  previewHeight?: number | string;
}

export function BlueprintThumbnail({ id, previewHeight = 120 }: BlueprintThumbnailProps) {
  const bp = blueprints.find(b => b.id === id);
  if (!bp) return null;

  return (
    <div style={{ width: '100%', height: previewHeight, overflow: 'hidden' }}>
      <PreviewSurface>
        <PreviewRenderer
          Component={bp.component as any}
          props={buildBlueprintProps(null, RenderMode.Thumbnail, Viewport.Desktop)}
        />
      </PreviewSurface>
    </div>
  );
}
