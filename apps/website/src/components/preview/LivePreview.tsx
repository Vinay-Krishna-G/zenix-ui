'use client';

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

export function LivePreview({ experienceId, brandId, variantId, aestheticId, className, style }: LivePreviewProps) {
  const { isValid, brand, BlueprintComponent } = resolvePreview(experienceId, brandId, variantId, aestheticId);

  if (!isValid || !BlueprintComponent) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#09090B', color: '#FAFAFA' }}>
        Generating preview...
      </div>
    );
  }

  const themeStyles = createPreviewTheme(brand);

  return (
    <div 
      className={className}
      style={{ 
        width: '100%', 
        height: '100%',
        overflow: 'hidden',
        ...themeStyles,
        ...style 
      }}
    >
      <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
        <BlueprintComponent />
      </div>
    </div>
  );
}
