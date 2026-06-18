import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'solid' | 'glass' | 'terminal' | 'organic';
  tone?: 'primary' | 'success' | 'error' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'solid', tone = 'neutral', size = 'sm', children, style, ...props }, ref) => {
    
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transition: 'all 0.2s',
      ...style,
    };

    const sizeStyles = {
      sm: { padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
      md: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
    };

    const colors = {
      primary: 'var(--zx-primary)',
      success: '#32D74B', // Standard success
      error: '#FF453A', // Standard error
      neutral: 'var(--zx-elevated)'
    };

    const terminalColors = {
      primary: 'var(--zx-primary)',
      success: '#00ff00',
      error: '#ff003c',
      neutral: 'var(--zx-elevated)'
    };

    const activeColor = variant === 'terminal' ? terminalColors[tone] : colors[tone];

    const variantStyles = {
      solid: {
        background: tone === 'neutral' ? activeColor : `${activeColor}20`,
        color: tone === 'neutral' ? 'var(--zx-primary)' : activeColor,
        borderRadius: 'var(--zx-radius-sm)',
        textTransform: 'uppercase' as any,
        letterSpacing: '0.05em',
        fontWeight: 600,
      },
      glass: {
        background: 'rgba(255,255,255,0.1)',
        color: 'var(--zx-primary)',
        border: '1px solid var(--zx-glass-border)',
        borderRadius: 'var(--zx-radius-round)',
        backdropFilter: 'var(--zx-glass-blur)',
        fontWeight: 400,
      },
      terminal: {
        background: 'transparent',
        color: activeColor,
        border: `1px solid ${activeColor}`,
        borderRadius: 0,
        textTransform: 'uppercase' as any,
        fontFamily: 'var(--zx-font-mono)',
      },
      organic: {
        background: 'transparent',
        color: activeColor,
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontWeight: 400,
      }
    };

    const mergedStyle = {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    const renderChildren = () => {
      if (variant === 'terminal' && typeof children === 'string') {
        return `[${children}]`;
      }
      return children;
    };

    return (
      <span ref={ref} style={mergedStyle} {...props}>
        {renderChildren()}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
