'use client';

import React from 'react';
import { PreviewRenderer } from '../PreviewRenderer';
import { ThemeTokens, RenderMode, Viewport, BlueprintProps } from '@zenixui/core';

interface MarketplacePreviewAdapterProps {
  Component: React.ComponentType<any>;
  previewHeight: number;
  cardWidth: number;
}

const fallbackTheme: ThemeTokens = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#f43f5e',
  background: '#09090b',
  surface: '#18181b',
  text: '#fafafa',
  muted: '#a1a1aa',
  border: '#27272a'
};

export function MarketplacePreviewAdapter({ Component, previewHeight, cardWidth }: MarketplacePreviewAdapterProps) {
  // The adapter generates the props internally.
  // PreviewRenderer remains 100% pure.
  const props: BlueprintProps = {
    theme: fallbackTheme,
    content: null,
    mode: RenderMode.Thumbnail,
    viewport: Viewport.Desktop
  };

  return (
    <PreviewRenderer
      Component={Component}
      props={props}
      previewHeight={previewHeight}
      cardWidth={cardWidth}
    />
  );
}
