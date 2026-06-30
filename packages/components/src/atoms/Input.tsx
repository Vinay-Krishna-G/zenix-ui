'use client';

import React, { useState } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  variant?: 'default' | 'glass' | 'terminal' | 'organic';
  status?: 'idle' | 'error' | 'success';
  prefixNode?: React.ReactNode;
  suffixNode?: React.ReactNode;
  isLoading?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', status = 'idle', type = 'text', prefixNode, suffixNode, isLoading, disabled, style, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const isDisabled = disabled || isLoading;

    // ── Base styles shared by all variants ────────────────────────────────
    const baseStyle: React.CSSProperties = {
      width: '100%',
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box',
      color: 'inherit',
      background: 'transparent',
      opacity: isDisabled ? 0.6 : 1,
      cursor: isDisabled ? 'not-allowed' : 'text',
    };

    // ── Status-aware colors ────────────────────────────────────────
    const borderColor = (() => {
      if (status === 'error')   return 'var(--zx-error, #ef4444)';
      if (status === 'success') return 'var(--zx-success, #22c55e)';
      if (isFocused)            return 'var(--zx-primary)';
      return 'var(--zx-border, rgba(150,150,150,0.2))';
    })();

    // Focus ring styling using a solid spread to avoid rendering bugs
    const focusRing = isFocused 
      ? `0 0 0 2px var(--zx-background, #fff), 0 0 0 4px ${status === 'error' ? 'var(--zx-error, #ef4444)' : 'var(--zx-primary)'}` 
      : 'none';

    const variantStyles = {
      default: {
        padding: 'var(--zx-space-control-y, 0.625rem) var(--zx-space-control-x, 1rem)',
        borderRadius: 'var(--zx-radius-control, 6px)',
        border: `1px solid ${borderColor}`,
        background: 'var(--zx-surface)',
        fontSize: '0.875rem',
        lineHeight: '1.5',
        boxShadow: focusRing,
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease',
      },
      glass: {
        padding: 'var(--zx-space-control-y, 0.625rem) var(--zx-space-control-x, 1rem)',
        borderRadius: 'var(--zx-radius-pill, 9999px)',
        border: `1px solid ${isFocused ? 'rgba(255,255,255,0.4)' : 'var(--zx-glass-border, rgba(255,255,255,0.1))'}`,
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'var(--zx-glass-blur, blur(12px))',
        fontSize: '0.875rem',
        boxShadow: focusRing,
        transition: 'all 0.15s ease',
      },
      terminal: {
        padding: 'var(--zx-space-control-y, 0.625rem) var(--zx-space-control-x, 1rem)',
        borderRadius: 0,
        border: 'none',
        borderLeft: `2px solid ${borderColor}`,
        background: isFocused ? 'rgba(0,0,0,0.2)' : 'transparent',
        fontFamily: 'var(--zx-font-mono, monospace)',
        fontSize: '0.875rem',
        transition: 'all 0.15s ease',
      },
      organic: {
        padding: 'var(--zx-space-control-y, 0.625rem) 0',
        borderRadius: 0,
        border: 'none',
        borderBottom: `2px solid ${borderColor}`,
        background: 'transparent',
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontSize: '1.125rem',
        transition: 'border-color 0.3s ease',
      }
    };

    const containerStyle: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    };

    // Sub-element styling
    const prefixStyle: React.CSSProperties = {
      position: 'absolute',
      left: 'var(--zx-space-inline, 0.75rem)',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--zx-muted, #888)',
      pointerEvents: 'none',
    };

    const suffixStyle: React.CSSProperties = {
      position: 'absolute',
      right: 'var(--zx-space-inline, 0.75rem)',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--zx-muted, #888)',
    };

    // Calculate dynamic padding based on adornments
    const hasPrefix = !!prefixNode;
    const hasSuffix = !!suffixNode || isLoading;
    const dynamicPaddingStyle = {
      paddingLeft: hasPrefix ? '2.5rem' : variantStyles[variant].padding.split(' ')[1],
      paddingRight: hasSuffix ? '2.5rem' : variantStyles[variant].padding.split(' ')[1],
    };

    return (
      <div style={containerStyle} className="zx-input-container">
        {/* Placeholder styling via dynamic style tag */}
        <style>{`
          .zx-input::placeholder {
            color: var(--zx-muted, #9ca3af);
            opacity: 0.8;
            transition: opacity 0.15s ease;
          }
          .zx-input:focus::placeholder {
            opacity: 0.4;
          }
          /* Fix autofill background */
          .zx-input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px var(--zx-surface) inset !important;
            -webkit-text-fill-color: var(--zx-foreground) !important;
          }
        `}</style>
        
        {hasPrefix && (
          <div style={prefixStyle}>
            {prefixNode}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          disabled={isDisabled}
          className={`zx-input zx-input-${variant} ${className || ''}`}
          style={{
            ...baseStyle,
            ...variantStyles[variant],
            ...(variant !== 'organic' ? dynamicPaddingStyle : {}),
            ...style
          }}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />

        {hasSuffix && (
          <div style={suffixStyle}>
            {isLoading ? (
               <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'zx-spin 1s linear infinite' }}>
                 <path d="M21 12a9 9 0 1 1-6.219-8.56" />
               </svg>
            ) : suffixNode}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
