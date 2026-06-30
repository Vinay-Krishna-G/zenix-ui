import React from 'react';
import type { HTMLAttributes } from 'react';
import './layout.css';

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right';
  sideWidth?: string;
  minContentWidth?: string;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ 
    side = 'left',
    sideWidth = '250px',
    minContentWidth = '50%',
    gap = 'md',
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    // Map props to semantic classes
    let cls = `zx-sidebar zx-gap-${gap}`;
    cls += side === 'left' ? ' zx-dir-row' : ' zx-dir-col-reverse'; // Actually row-reverse
    if (side === 'right') cls = cls.replace('zx-dir-col-reverse', 'zx-dir-row-reverse');

    return (
      <div 
        ref={ref}
        className={`${cls} ${className}`.trim()}
        style={style}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          const element = child as React.ReactElement<any>;
          const isSidebar = index === 0;
          
          // We keep flexBasis as an inline style because sideWidth and minContentWidth 
          // are arbitrary strings (e.g., '250px', '50%'). Generating a CSS class for 
          // every possible width is not practical.
          return React.cloneElement(element, {
            ...element.props,
            style: {
              ...element.props.style,
              flexBasis: isSidebar ? sideWidth : minContentWidth,
              flexGrow: isSidebar ? 0 : 1,
            }
          });
        })}
      </div>
    );
  }
);
Sidebar.displayName = 'Sidebar';
