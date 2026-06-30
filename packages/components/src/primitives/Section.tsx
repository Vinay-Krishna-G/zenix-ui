import React from 'react';
import type { HTMLAttributes } from 'react';

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
          paddingTop: padded ? 'var(--zx-space-section, 6rem)' : '0',
          paddingBottom: padded ? 'var(--zx-space-section, 6rem)' : '0',
          ...style
        }}
        {...props}
      >
        {children}
      </section>
    );
  }
);

export const PageSection = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className = '', style, children, ...props }, ref) => (
    <section ref={ref} className={`zx-page-section ${className}`} style={{ marginBottom: 'var(--zx-space-page, 10rem)', ...style }} {...props}>
      {children}
    </section>
  )
);

export const SectionHeading = React.forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', style, children, ...props }, ref) => (
    <h2 ref={ref} className={`zx-section-heading ${className}`} style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em', ...style }} {...props}>
      {children}
    </h2>
  )
);

export const SectionDescription = React.forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', style, children, ...props }, ref) => (
    <p ref={ref} className={`zx-section-description ${className}`} style={{ opacity: 0.6, fontSize: '1.25rem', margin: 0, ...style }} {...props}>
      {children}
    </p>
  )
);

export const SectionActions = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', style, children, ...props }, ref) => (
    <div ref={ref} className={`zx-section-actions ${className}`} style={{ display: 'flex', gap: 'var(--zx-space-stack, 1.5rem)', justifyContent: 'center', flexWrap: 'wrap', ...style }} {...props}>
      {children}
    </div>
  )
);

export const SectionHeader = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', style, children, ...props }, ref) => (
    <div ref={ref} className={`zx-section-header ${className}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--zx-space-card, 3.5rem)', ...style }} {...props}>
      {children}
    </div>
  )
);

Section.displayName = 'Section';
PageSection.displayName = 'PageSection';
SectionHeading.displayName = 'SectionHeading';
SectionDescription.displayName = 'SectionDescription';
SectionActions.displayName = 'SectionActions';
SectionHeader.displayName = 'SectionHeader';
