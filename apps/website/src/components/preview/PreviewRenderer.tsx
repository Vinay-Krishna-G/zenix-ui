'use client';

/**
 * PreviewRenderer — The core rendering engine for all previews in ZenixUI.
 *
 * Enforces unidirectional rendering: Blueprint -> Engine -> Identity Tokens.
 * Blueprints never import themes; they only receive semantic CSS variables from ThemeProvider.
 *
 * Responsibilities:
 * - Lazy loading via IntersectionObserver
 * - Theme injection
 * - Rendering the pure blueprint
 * 
 * NEVER manages aspect ratio, clipping, or scaling (handled by PreviewSurface).
 */

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { BlueprintProps, RenderMode, Viewport } from '@zenixui/core';

interface PreviewRendererProps<TContent = unknown> {
  /** The pure layout blueprint to render. */
  Component: React.ComponentType<BlueprintProps<TContent>>;
  /** The fully constructed BlueprintProps payload (read-only). */
  props: Readonly<BlueprintProps<TContent>>;
}

export function PreviewRenderer<TContent = unknown>({
  Component,
  props,
}: PreviewRendererProps<TContent>) {
  const { mode, theme } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(mode === RenderMode.Interactive);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (mode === RenderMode.Interactive) {
      setIsVisible(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mode]);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setIsMounted(true), mode === RenderMode.Interactive ? 0 : 50);
      return () => clearTimeout(t);
    }
  }, [isVisible, mode]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: theme.background,
        // Thumbnails are non-interactive by contract
        pointerEvents: mode === RenderMode.Thumbnail ? 'none' : 'auto',
        userSelect: mode === RenderMode.Thumbnail ? 'none' : 'auto',
      }}
    >
      {!isMounted && mode === RenderMode.Thumbnail && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${theme.surface} 0%, ${theme.background} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 4,
              borderRadius: 2,
              background: theme.accent,
              opacity: 0.7,
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
        </div>
      )}
      
      {isVisible && (
        <div
          style={{
            width: '100%',
            height: '100%',
            opacity: isMounted ? 1 : 0,
            transition: 'opacity 0.3s ease',
            overflowY: mode === RenderMode.Interactive ? 'auto' : 'hidden',
            overflowX: 'hidden',
          }}
        >
          <Suspense fallback={null}>
            <ThemeProvider theme={theme} style={{ minHeight: '100vh', width: '100%' }}>
              <Component {...props} />
            </ThemeProvider>
          </Suspense>
        </div>
      )}
    </div>
  );
}
