import React from 'react';
import type { HTMLAttributes } from 'react';
import './layout.css';

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  intrinsic?: boolean;
}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ 
    intrinsic = false,
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    return (
      <div 
        ref={ref}
        className={`zx-center ${intrinsic ? 'zx-center--intrinsic' : ''} ${className}`.trim()}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Center.displayName = 'Center';
