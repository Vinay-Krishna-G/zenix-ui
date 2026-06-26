import React from 'react';
import type { HTMLAttributes } from 'react';

export type SurfaceVariant = 'card' | 'hero' | 'navbar' | 'footer' | 'glass' | 'overlay' | 'transparent';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SurfaceVariant;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ variant = 'transparent', className = '', style, children, ...props }, ref) => {
    
    // Default mappings using CSS variables. Fallbacks ensure it works even if a pack hasn't explicitly set it.
    const variantStyles: React.CSSProperties = {
      ...(variant === 'card' && {
        background: 'var(--zx-card, var(--zx-surface, #ffffff))',
        borderRadius: 'var(--zx-radius-surface, 12px)',
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
        background: 'var(--zx-glass)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--zx-elevated)',
        borderRadius: '1rem',
      }),
      ...(variant === 'overlay' && {
        background: 'var(--zx-overlay)',
        position: 'absolute',
        inset: 0,
      }),
    };

    return (
      <div 
        ref={ref}
        className={`zx-surface zx-surface-${variant} ${className}`}
        style={{ ...variantStyles, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Surface.displayName = 'Surface';
