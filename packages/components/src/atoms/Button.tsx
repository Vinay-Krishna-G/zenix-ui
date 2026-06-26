import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'glass' | 'cyber' | 'organic';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', fullWidth, isLoading, children, disabled, style, ...props }, ref) => {
    
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      opacity: disabled || isLoading ? 0.7 : 1,
      width: fullWidth ? '100%' : 'auto',
      border: 'none',
      fontFamily: 'inherit',
      transition: 'all 0.15s ease',
      boxSizing: 'border-box',
      ...style,
    };

    const sizeStyles = {
      sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
      md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
      lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    };

    const variantStyles = {
      default: {
        background: 'var(--zx-primary)',
        color: 'var(--zx-background)',
        borderRadius: 'var(--zx-radius-sm)',
        fontWeight: 500,
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.15)',
        color: 'var(--zx-primary)',
        border: '1px solid var(--zx-glass-border)',
        borderRadius: 'var(--zx-radius-round)',
        backdropFilter: 'var(--zx-glass-blur)',
        fontWeight: 400,
      },
      cyber: {
        background: 'transparent',
        color: 'var(--zx-primary)',
        border: '1px solid var(--zx-primary)',
        borderRadius: 0,
        fontWeight: 600,
        textTransform: 'uppercase' as any,
      },
      organic: {
        background: 'transparent',
        color: 'var(--zx-primary)',
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

    // For cyber variant, we often use [TEXT] format
    const renderChildren = () => {
      if (isLoading) {
        return variant === 'cyber' ? '[PROCESSING...]' : 'Loading...';
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
        {...props}
      >
        {renderChildren()}
        {variant === 'organic' && !isLoading && <span>→</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
