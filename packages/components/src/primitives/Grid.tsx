import React from 'react';
import type { HTMLAttributes } from 'react';
import './layout.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'gallery' | 'cards' | 'pricing' | 'default';
  /**
   * Number of columns for default grid layout.
   * Note: If `variant` is provided (e.g. 'gallery', 'cards'), `columns` is ignored and `variant` takes precedence.
   */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ 
    variant = 'default',
    columns,
    gap = 'md',
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    let cls = `zx-grid zx-gap-${gap}`;
    if (variant !== 'default') {
      cls += ` zx-grid-${variant}`;
    }
    
    // If we're using arbitrary columns and no predefined variant, it's safer to use an inline style for just this dynamic value.
    const dynamicStyle = (variant === 'default' && columns) 
      ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, ...style }
      : style;

    return (
      <div 
        ref={ref}
        className={`${cls} ${className}`.trim()}
        style={dynamicStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = 'Grid';
