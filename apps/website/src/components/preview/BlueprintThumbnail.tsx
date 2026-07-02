'use client';

/**
 * BlueprintThumbnail — takes a blueprint ID and resolves the live component.
 *
 * Wraps PreviewRenderer in "thumbnail" mode for rendering inside templates or docs pages.
 */

import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { PreviewRenderer } from './PreviewRenderer';
import { buildBlueprintProps } from './PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

interface BlueprintThumbnailProps {
  id: string;
  previewHeight?: number;
  cardWidth?: number;
}

export function BlueprintThumbnail({ id, previewHeight = 120, cardWidth = 340 }: BlueprintThumbnailProps) {
  const bp = blueprints.find(b => b.id === id);
  if (!bp) return null;

  return (
    <div style={{ width: '100%', height: previewHeight, overflow: 'hidden' }}>
      <PreviewRenderer
        Component={bp.component as any}
        props={buildBlueprintProps(null, RenderMode.Thumbnail, Viewport.Desktop)}
        previewHeight={previewHeight}
        cardWidth={cardWidth}
      />
    </div>
  );
}
