import React from 'react';
import type { HTMLAttributes } from 'react';
import './layout.css';

export interface SplitProps extends HTMLAttributes<HTMLDivElement> {
  fraction?: '1/2' | '1/3' | '1/4' | 'auto-start' | 'auto-end';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Split = React.forwardRef<HTMLDivElement, SplitProps>(
  ({ 
    fraction = '1/2',
    gap = 'md',
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    // Map props to semantic classes
    let cls = `zx-split zx-gap-${gap}`;
    
    if (fraction === '1/2') cls += ' zx-split-1-2';
    if (fraction === '1/3') cls += ' zx-split-1-3';
    if (fraction === '1/4') cls += ' zx-split-1-4';
    if (fraction === 'auto-start') cls += ' zx-split-auto-start';
    if (fraction === 'auto-end') cls += ' zx-split-auto-end';

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
Split.displayName = 'Split';
