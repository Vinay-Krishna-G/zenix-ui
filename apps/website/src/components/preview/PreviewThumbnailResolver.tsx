'use client';

/**
 * PreviewThumbnailResolver — takes a blueprint ID and resolves the live component.
 *
 * This is used when Server Components (like documentation pages or templates pages)
 * need to render a BlueprintThumbnail but cannot pass the actual React component
 * function over the Server/Client boundary.
 *
 * Unlike DocsBlueprintCard, this component does NOT wrap itself in a Link or Surface,
 * making it safe to embed inside larger clickable cards without triggering hydration
 * errors from nested <a> tags.
 */

import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { BlueprintThumbnail } from './BlueprintThumbnail';

interface PreviewThumbnailResolverProps {
  id: string;
  previewHeight?: number;
  cardWidth?: number;
}

export function PreviewThumbnailResolver({ id, previewHeight = 120, cardWidth = 340 }: PreviewThumbnailResolverProps) {
  const bp = blueprints.find(b => b.id === id);
  if (!bp) return null;

  return (
    <div style={{ width: '100%', height: previewHeight, overflow: 'hidden' }}>
      <BlueprintThumbnail
        Component={bp.component}
        theme={bp.theme}
        previewHeight={previewHeight}
        cardWidth={cardWidth}
      />
    </div>
  );
}
