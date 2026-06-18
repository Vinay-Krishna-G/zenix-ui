import React, { useState } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'glass' | 'terminal' | 'organic';
  status?: 'idle' | 'error' | 'success';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', status = 'idle', style, rows = 4, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseStyle: React.CSSProperties = {
      width: '100%',
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.2s ease',
      color: 'var(--zx-primary)',
      background: 'transparent',
      resize: 'vertical',
    };

    const variantStyles = {
      default: {
        padding: '0.75rem 1rem',
        borderRadius: 'var(--zx-radius-sm)',
        border: status === 'error' ? '1px solid #ff3b30' : '1px solid var(--zx-elevated)',
        background: 'var(--zx-background)',
        fontSize: '0.875rem',
        borderColor: isFocused && status !== 'error' ? 'var(--zx-primary)' : undefined,
      },
      glass: {
        padding: '1rem 1.5rem',
        borderRadius: 'var(--zx-radius-md)',
        border: '1px solid var(--zx-glass-border)',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'var(--zx-glass-blur)',
        fontSize: '1rem',
        fontWeight: 300,
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)',
      },
      terminal: {
        padding: '0.75rem 1rem',
        borderRadius: 0,
        border: status === 'error' ? '1px solid #ff003c' : '1px solid var(--zx-elevated)',
        background: 'rgba(0,0,0,0.2)',
        fontSize: '0.875rem',
        textTransform: 'uppercase' as any,
        borderColor: isFocused && status !== 'error' ? '#00ff00' : undefined,
      },
      organic: {
        padding: '0.5rem 0',
        borderRadius: 0,
        border: 'none',
        borderBottom: '2px solid var(--zx-elevated)',
        fontSize: '1.1rem',
        borderColor: isFocused ? 'var(--zx-primary)' : undefined,
      }
    };

    const mergedStyle = {
      ...baseStyle,
      ...variantStyles[variant],
      ...style,
    };

    return (
      <textarea
        ref={ref}
        rows={rows}
        style={mergedStyle}
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
    );
  }
);

Textarea.displayName = 'Textarea';
