'use client';

import React from 'react';
import Image from 'next/image';
import { getPreviewImage } from './PreviewManifest';

interface StaticPreviewProps {
  experienceId: string;
  brandId: string;
  variantId?: string;
  aestheticId?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StaticPreview({ experienceId, brandId, variantId = 'default', aestheticId = 'glass', className, style }: StaticPreviewProps) {
  const imagePath = getPreviewImage(experienceId, brandId, variantId, aestheticId);

  return (
    <div 
      className={className}
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'relative',
        background: '#09090B',
        overflow: 'hidden',
        ...style 
      }}
    >
      <Image 
        src={imagePath} 
        alt={`Preview of ${experienceId}`}
        fill 
        style={{ objectFit: 'cover', objectPosition: 'top' }}
        unoptimized
        onError={(e) => {
          // Fallback if screenshot hasn't been generated yet
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
  );
}
