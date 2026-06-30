import React from 'react';
import type { HTMLAttributes } from 'react';

export type SurfaceVariant = 'card' | 'hero' | 'navbar' | 'footer' | 'glass' | 'overlay' | 'transparent';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SurfaceVariant;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'pill' | 'full';
  background?: string;
  withBorder?: boolean;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ 
    variant, 
    elevation,
    padding,
    radius,
    background,
    withBorder,
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    // Legacy variant mappings (Backward Compatible)
    const variantStyles: React.CSSProperties = {
      ...(variant === 'card' && {
        background: 'var(--zx-card, var(--zx-surface, #ffffff))',
        borderRadius: 'var(--zx-radius-card, 16px)',
        border: '1px solid var(--zx-border, rgba(0,0,0,0.08))',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02), 0 4px 12px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.04)',
        overflow: 'hidden',
      }),
      ...(variant === 'hero' && {
        background: 'var(--zx-hero, transparent)',
      }),
      ...(variant === 'navbar' && {
        background: 'var(--zx-navbar, var(--zx-glass))',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--zx-elevated)',
      }),
      ...(variant === 'footer' && {
        background: 'var(--zx-footer, var(--zx-background))',
        borderTop: '1px solid var(--zx-elevated)',
      }),
      ...(variant === 'glass' && {
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'var(--zx-glass-blur, blur(16px))',
        border: '1px solid var(--zx-glass-border, rgba(255,255,255,0.1))',
        borderRadius: 'var(--zx-radius-card, 16px)',
      }),
      ...(variant === 'overlay' && {
        background: 'var(--zx-overlay, rgba(0,0,0,0.8))',
        position: 'absolute',
        inset: 0,
      }),
    };

    // Atomic Modifiers mapping (New Architecture)
    const atomicStyles: React.CSSProperties = {
      ...(padding === 'none' && { padding: 0 }),
      ...(padding === 'sm' && { padding: 'var(--zx-space-control-x, 1rem)' }),
      ...(padding === 'md' && { padding: 'var(--zx-space-stack, 1.5rem)' }),
      ...(padding === 'lg' && { padding: 'var(--zx-space-card, 2.5rem)' }),
      ...(padding === 'xl' && { padding: 'var(--zx-space-section, 6rem)' }),

      ...(radius === 'none' && { borderRadius: 0 }),
      ...(radius === 'sm' && { borderRadius: 'var(--zx-radius-control, 6px)' }),
      ...(radius === 'md' && { borderRadius: 'var(--zx-radius-card, 16px)' }),
      ...(radius === 'lg' && { borderRadius: 'var(--zx-radius-overlay, 24px)' }),
      ...(radius === 'pill' && { borderRadius: 'var(--zx-radius-pill, 9999px)' }),
      ...(radius === 'full' && { borderRadius: '50%' }),

      ...(elevation === 'none' && { boxShadow: 'none' }),
      ...(elevation === 'sm' && { boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }),
      ...(elevation === 'md' && { boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }),
      ...(elevation === 'lg' && { boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)' }),

      ...(background && { background }),
      
      ...(withBorder === true && { border: '1px solid var(--zx-border, rgba(150,150,150,0.2))' }),
      ...(withBorder === false && { border: 'none' }),
    };

    return (
      <div 
        ref={ref}
        className={`zx-surface ${variant ? `zx-surface-${variant}` : ''} ${className}`}
        style={{ 
          ...(variant ? variantStyles : {}), 
          ...atomicStyles, 
          ...style 
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Surface.displayName = 'Surface';
