import React from 'react';
import type { HTMLAttributes } from 'react';
import { Section } from '../primitives/Section';
import type { SectionProps } from '../primitives/Section';
import { Container } from '../primitives/Container';
import type { ContainerProps } from '../primitives/Container';
import { Stack } from '../primitives/Stack';
import type { StackProps } from '../primitives/Stack';

export interface PatternRootProps extends SectionProps {
  containerSize?: ContainerProps['size'];
}

export const PatternRoot = React.forwardRef<HTMLElement, PatternRootProps>(
  ({ containerSize = 'lg', children, ...props }, ref) => (
    <Section ref={ref} {...props}>
      <Container size={containerSize}>
        {children}
      </Container>
    </Section>
  )
);
PatternRoot.displayName = 'Pattern.Root';

export const PatternContent = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, spacing = 'xl', ...props }, ref) => (
    <Stack ref={ref} spacing={spacing} {...props}>
      {children}
    </Stack>
  )
);
PatternContent.displayName = 'Pattern.Content';

export const PatternVisual = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, style, ...props }, ref) => (
    <div ref={ref} style={{ position: 'relative', width: '100%', ...style }} {...props}>
      {children}
    </div>
  )
);
PatternVisual.displayName = 'Pattern.Visual';

export const PatternActions = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, direction = 'row', spacing = 'md', justify = 'flex-start', ...props }, ref) => (
    <Stack ref={ref} direction={direction} spacing={spacing} justify={justify} wrap {...props}>
      {children}
    </Stack>
  )
);
PatternActions.displayName = 'Pattern.Actions';

export const Pattern = {
  Root: PatternRoot,
  Content: PatternContent,
  Visual: PatternVisual,
  Actions: PatternActions,
};
