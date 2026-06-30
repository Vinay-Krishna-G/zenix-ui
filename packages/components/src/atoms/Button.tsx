'use client';

import React, { useState } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'glass' | 'cyber' | 'organic';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', fullWidth, isLoading, children, disabled, style, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, ...props }, ref) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--zx-space-inline, 0.5rem)',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      opacity: disabled || isLoading ? 0.6 : (isActive ? 0.9 : 1),
      transform: isActive && !disabled && !isLoading ? 'scale(0.98)' : 'scale(1)',
      width: fullWidth ? '100%' : 'auto',
      border: 'none',
      fontFamily: 'inherit',
      transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
      boxSizing: 'border-box',
      outlineOffset: '2px', // for keyboard focus
      ...style,
    };

    const sizeStyles = {
      sm: { padding: 'var(--zx-space-control-y, 0.625rem) var(--zx-space-control-x, 1rem)', fontSize: '0.875rem' },
      md: { padding: 'calc(var(--zx-space-control-y, 0.625rem) * 1.2) calc(var(--zx-space-control-x, 1rem) * 1.5)', fontSize: '1rem' },
      lg: { padding: 'calc(var(--zx-space-control-y, 0.625rem) * 1.6) calc(var(--zx-space-control-x, 1rem) * 2)', fontSize: '1.125rem' },
    };

    const variantStyles = {
      default: {
        background: isHovered && !disabled && !isLoading ? 'var(--zx-primary-hover, var(--zx-primary))' : 'var(--zx-primary)',
        color: 'var(--zx-background)',
        borderRadius: 'var(--zx-radius-control, 6px)',
        fontWeight: 500,
        boxShadow: isHovered && !disabled && !isLoading ? '0 4px 12px rgba(var(--zx-primary-rgb, 0,0,0), 0.2)' : 'none',
      },
      glass: {
        background: isHovered && !disabled && !isLoading ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.15)',
        color: 'var(--zx-primary)',
        border: '1px solid var(--zx-glass-border, rgba(255,255,255,0.1))',
        borderRadius: 'var(--zx-radius-pill, 9999px)',
        backdropFilter: 'var(--zx-glass-blur, blur(12px))',
        fontWeight: 400,
      },
      cyber: {
        background: isHovered && !disabled && !isLoading ? 'var(--zx-primary)' : 'transparent',
        color: isHovered && !disabled && !isLoading ? 'var(--zx-background)' : 'var(--zx-primary)',
        border: '1px solid var(--zx-primary)',
        borderRadius: 0,
        fontWeight: 600,
        textTransform: 'uppercase' as any,
      },
      organic: {
        background: 'transparent',
        color: isHovered && !disabled && !isLoading ? 'var(--zx-primary-hover, var(--zx-primary))' : 'var(--zx-primary)',
        borderRadius: 0,
        fontWeight: 500,
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }
    };

    const mergedStyle = {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    const renderChildren = () => {
      if (isLoading) {
        return (
          <>
            <svg className="zx-spinner" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'zx-spin 1s linear infinite' }}>
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            {variant === 'cyber' ? '[PROCESSING...]' : 'Loading...'}
          </>
        );
      }
      if (variant === 'cyber' && typeof children === 'string') {
        return `[${children}]`;
      }
      return children;
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        style={mergedStyle}
        onMouseEnter={(e) => { setIsHovered(true); onMouseEnter?.(e); }}
        onMouseLeave={(e) => { setIsHovered(false); setIsActive(false); onMouseLeave?.(e); }}
        onMouseDown={(e) => { setIsActive(true); onMouseDown?.(e); }}
        onMouseUp={(e) => { setIsActive(false); onMouseUp?.(e); }}
        {...props}
      >
        <style>{`
          @keyframes zx-spin { 100% { transform: rotate(360deg); } }
          button:focus-visible { outline: 2px solid var(--zx-primary); outline-offset: 2px; }
        `}</style>
        {renderChildren()}
        {variant === 'organic' && !isLoading && <span>→</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
