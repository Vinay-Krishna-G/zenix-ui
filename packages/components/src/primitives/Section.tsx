import React, { HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Enables vertical padding appropriate for major page sections */
  padded?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ padded = true, className = '', style, children, ...props }, ref) => {
    return (
      <section 
        ref={ref}
        className={`zx-section ${className}`}
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: padded ? '6rem' : '0',
          paddingBottom: padded ? '6rem' : '0',
          ...style
        }}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';
