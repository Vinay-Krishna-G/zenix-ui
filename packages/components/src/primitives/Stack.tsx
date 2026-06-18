import React, { HTMLAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    direction = 'column', 
    align = 'stretch', 
    justify = 'flex-start', 
    spacing = 'md',
    wrap = false,
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
        className={`zx-stack ${className}`}
        style={{
          display: 'flex',
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          gap: spacingMap[spacing],
          flexWrap: wrap ? 'wrap' : 'nowrap',
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Stack.displayName = 'Stack';
