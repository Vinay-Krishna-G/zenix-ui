import React from 'react';
import type { HTMLAttributes } from 'react';
import './layout.css';

export interface ClusterProps extends HTMLAttributes<HTMLDivElement> {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  ({ 
    justify = 'flex-start',
    align = 'center',
    gap = 'sm',
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    // Map props to semantic classes
    let cls = `zx-cluster zx-gap-${gap}`;
    
    if (align === 'flex-start') cls += ' zx-align-start';
    if (align === 'center') cls += ' zx-align-center';
    if (align === 'flex-end') cls += ' zx-align-end';
    if (align === 'stretch') cls += ' zx-align-stretch';
    
    if (justify === 'flex-start') cls += ' zx-justify-start';
    if (justify === 'center') cls += ' zx-justify-center';
    if (justify === 'flex-end') cls += ' zx-justify-end';
    if (justify === 'space-between') cls += ' zx-justify-between';
    if (justify === 'space-around') cls += ' zx-justify-around';

    return (
      <div 
        ref={ref}
        className={`${cls} ${className}`.trim()}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Cluster.displayName = 'Cluster';
