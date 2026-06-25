'use client';

import React, { useState } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  variant?: 'default' | 'glass' | 'terminal' | 'organic';
  status?: 'idle' | 'error' | 'success';
  prefixNode?: React.ReactNode;
  suffixNode?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', status = 'idle', type = 'text', prefixNode, suffixNode, style, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    // ── Base styles shared by all variants ────────────────────────────────
    const baseStyle: React.CSSProperties = {
      width: '100%',
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box',
      // IMPORTANT: color must be foreground/body text, NOT primary accent.
      // Primary accent is for borders and icons, not input text.
      color: 'inherit',
      background: 'transparent',
    };

    // ── Status-aware border colors ────────────────────────────────────────
    const borderColor = (() => {
      if (status === 'error')   return '#ef4444';
      if (status === 'success') return '#22c55e';
      if (isFocused)            return 'var(--zx-primary)';
      return 'var(--zx-elevated)';
    })();

    const focusShadow = isFocused && status === 'idle'
      ? '0 0 0 3px rgba(var(--zx-primary-rgb, 99,102,241), 0.15)'
      : 'none';

    const variantStyles = {
      // ── Default: solid surface, clearly distinct from page background ──
      default: {
        padding: '0.65rem 1rem',
        borderRadius: 'calc(var(--zx-radius-sm, 6px) + 2px)',
        border: `1px solid ${borderColor}`,
        // Uses --zx-surface (slightly elevated from background) for contrast
        background: 'var(--zx-surface)',
        fontSize: '0.9rem',
        lineHeight: '1.5',
        boxShadow: isFocused
          ? `${focusShadow}, inset 0 1px 2px rgba(0,0,0,0.04)`
          : 'inset 0 1px 2px rgba(0,0,0,0.04)',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
      },

      // ── Glass: frosted translucent surface ──────────────────────────────
      glass: {
        padding: '0.875rem 1.25rem',
        borderRadius: 'var(--zx-radius-round, 100px)',
        border: `1px solid ${isFocused ? 'rgba(255,255,255,0.25)' : 'var(--zx-glass-border, rgba(255,255,255,0.1))'}`,
        background: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        fontSize: '1rem',
        fontWeight: 400,
        boxShadow: isFocused
          ? `${focusShadow}, inset 0 1px 8px rgba(0,0,0,0.05)`
          : 'inset 0 1px 8px rgba(0,0,0,0.05)',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease',
      },

      // ── Terminal: monospace, high-contrast, minimal radius ──────────────
      terminal: {
        padding: '0.75rem 1rem',
        borderRadius: '0',
        border: `1px solid ${borderColor}`,
        background: 'rgba(0,0,0,0.2)',
        fontSize: '0.875rem',
        fontFamily: 'ui-monospace, "Cascadia Code", monospace',
        boxShadow: isFocused ? '0 0 0 1px rgba(34,197,94,0.3)' : 'none',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
      },

      // ── Organic: no border, bottom line only, editorial feel ────────────
      organic: {
        padding: '0.5rem 0',
        borderRadius: '0',
        border: 'none',
        borderBottom: `2px solid ${borderColor}`,
        fontSize: '1.1rem',
        background: 'transparent',
        boxShadow: 'none',
        transition: 'border-color 0.2s ease',
      },
    };

    const mergedInputStyle: React.CSSProperties = {
      ...baseStyle,
      ...variantStyles[variant],
      ...style,
    };

    const wrapperStyle: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    };

    return (
      <div style={wrapperStyle}>
        {prefixNode && (
          <div style={{ position: 'absolute', left: '1rem', zIndex: 2, opacity: 0.5 }}>
            {prefixNode}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={className}
          style={{
            ...mergedInputStyle,
            paddingLeft: prefixNode ? '3rem' : mergedInputStyle.paddingLeft ?? (mergedInputStyle.padding as string),
            paddingRight: suffixNode ? (variant === 'glass' ? '140px' : '3rem') : mergedInputStyle.paddingRight ?? (mergedInputStyle.padding as string),
          }}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {suffixNode && (
          <div style={{ position: 'absolute', right: variant === 'glass' ? '4px' : '1rem', zIndex: 2 }}>
            {suffixNode}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
