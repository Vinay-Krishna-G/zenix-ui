'use client';

import React, { useRef, useState, useEffect } from 'react';
import { preview } from '../../design';

interface PreviewSurfaceProps {
  children: React.ReactNode;
  /** Whether the surface is currently being hovered (triggers scale/light FX) */
  isHovered?: boolean;
}

/**
 * PreviewSurface
 * 
 * Handles layout sizing, clipping, and aspect ratio scaling for any blueprint preview.
 * By exposing this as a separate component, the PreviewRenderer remains completely
 * dumb to its surroundings.
 */
export function PreviewSurface({ children, isHovered = false }: PreviewSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const DESKTOP_WIDTH = 1200; // The fixed logical width blueprints render at

  useEffect(() => {
    if (!containerRef.current) return;
    
    // We observe our own width to calculate the scale factor required
    // to fit a 1200px desktop blueprint into whatever size we currently are.
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setScale(width / DESKTOP_WIDTH);
      }
    });
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%', // Fills whatever parent container bounds it
        position: 'relative',
        overflow: 'hidden',
        background: '#111112', // Surface base
      }}
    >
      {/* 
        This internal wrapper scales the 1200px content down to fit.
        It uses transformOrigin: top left so it stays pinned.
      */}
      <div style={{
        width: DESKTOP_WIDTH,
        height: `calc(100% / ${scale})`,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}>
        {children}
      </div>
    </div>
  );
}
