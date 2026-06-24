import React from 'react';
import { Pattern } from './Pattern';
import { Grid } from '../primitives/Grid';
import type { GridProps } from '../primitives/Grid';

export const FeaturesGrid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, columns = 3, spacing = 'lg', ...props }, ref) => (
    <Grid ref={ref} columns={columns} spacing={spacing} {...props}>
      {children}
    </Grid>
  )
);
FeaturesGrid.displayName = 'Features.Grid';

export const Features = {
  Root: Pattern.Root,
  Content: Pattern.Content,
  Grid: FeaturesGrid,
  Actions: Pattern.Actions,
};
