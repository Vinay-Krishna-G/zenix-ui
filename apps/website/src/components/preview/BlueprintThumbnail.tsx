'use client';

/**
 * BlueprintThumbnail — Live scaled React preview for marketplace cards.
 *
 * Renders the actual blueprint component at desktop width (1200px) and scales
 * it down via CSS transform to fit the card. This approach mirrors how Framer
 * shows previews: always accurate, never stale, zero screenshots, zero 404s.
 *
 * Performance: Uses IntersectionObserver to defer mounting until the card
 * enters the viewport, so the initial page load stays fast.
 */

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Experience } from '@zenixui/react';

// The full desktop width we render the blueprint at before scaling.
const RENDER_WIDTH = 1200;

// Theme preset → primary color mapping for the skeleton gradient.
const THEME_COLORS: Record<string, string> = {
  zenix:    '#6366f1',
  ocean:    '#0ea5e9',
  midnight: '#a855f7',
  autumn:   '#f97316',
};

interface BlueprintThumbnailProps {
  /** The actual React component to render. */
  Component: React.ComponentType;
  /** Theme preset name — used for the loading skeleton color. */
  theme: string;
  /** Height of the card preview area in pixels. Default: 220. */
  previewHeight?: number;
  /** Width of the card in pixels. Must match the card CSS. Default: 340. */
  cardWidth?: number;
}

export function BlueprintThumbnail({
  Component,
  theme,
  previewHeight = 220,
  cardWidth = 340,
}: BlueprintThumbnailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Scale factor: how much to shrink RENDER_WIDTH to fit cardWidth.
  const scale = cardWidth / RENDER_WIDTH;
  // The scaled height of the render window, based on a 16:9ish viewport.
  const renderHeight = Math.round(previewHeight / scale);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Start loading slightly before the card enters view.
      { rootMargin: '200px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Give the component a tick to paint before showing it.
  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setIsMounted(true), 50);
      return () => clearTimeout(t);
    }
  }, [isVisible]);

  const accentColor = THEME_COLORS[theme] ?? '#6366f1';

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: previewHeight,
        overflow: 'hidden',
        position: 'relative',
        background: '#09090B',
        // Prevent the scaled content from receiving pointer events.
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {/* Loading skeleton — shown until the component is ready */}
      {!isMounted && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, #111113 0%, #1a1a1f 50%, #111113 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {/* Animated accent bar */}
          <div
            style={{
              width: 48,
              height: 4,
              borderRadius: 2,
              background: accentColor,
              opacity: 0.7,
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.4; transform: scaleX(1); }
              50% { opacity: 0.9; transform: scaleX(1.3); }
            }
          `}</style>
        </div>
      )}

      {/* Live component render — only mounted when in viewport */}
      {isVisible && (
        <div
          style={{
            // Scale from top-left origin so the top of the page fills the card.
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
            width: RENDER_WIDTH,
            height: renderHeight,
            overflow: 'hidden',
            // Fade in once mounted.
            opacity: isMounted ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <Suspense fallback={null}>
            {/*
             * Wrap in Experience so CSS variables resolve correctly.
             * Use the blueprint's theme preset.
             */}
            <Experience preset={theme as any}>
              <Component />
            </Experience>
          </Suspense>
        </div>
      )}
    </div>
  );
}
