import React from 'react';
import { Pattern } from './Pattern';
import { Stack } from '../primitives/Stack';
import type { StackProps } from '../primitives/Stack';

export const FooterBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
);
FooterBrand.displayName = 'Footer.Brand';

export const FooterLinks = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, direction = 'row', spacing = 'md', ...props }, ref) => (
    <Stack ref={ref} direction={direction} spacing={spacing} wrap {...props}>
      {children}
    </Stack>
  )
);
FooterLinks.displayName = 'Footer.Links';

export const Footer = {
  Root: Pattern.Root,
  Content: Pattern.Content,
  Brand: FooterBrand,
  Links: FooterLinks,
};
