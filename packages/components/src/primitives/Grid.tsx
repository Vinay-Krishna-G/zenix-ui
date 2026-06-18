import React, { HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ 
    columns = 1,
    spacing = 'md',
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    const spacingMap = {
      none: '0',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '3rem',
    };

    return (
      <div 
        ref={ref}
        className={`zx-grid ${className}`}
        style={{
          display: 'grid',
          gridTemplateColumns: columns === 1 ? 'minmax(0, 1fr)' : `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`,
          gap: spacingMap[spacing],
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = 'Grid';
