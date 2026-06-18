import React, { HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', className = '', style, children, ...props }, ref) => {
    
    const maxWMap = {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      full: '100%',
    };

    return (
      <div 
        ref={ref}
        className={`zx-container zx-container-${size} ${className}`}
        style={{
          width: '100%',
          maxWidth: maxWMap[size],
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = 'Container';
