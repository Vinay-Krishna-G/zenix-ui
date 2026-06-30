import React from 'react';
import { PageSection } from '@zenixui/components';
import { HeroBadge } from './HeroBadge';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';

export function Hero() {
  return (
    <PageSection style={{ textAlign: 'center', marginBottom: '8rem' }}>
      <HeroBadge />
      <HeroTitle />
      <HeroDescription />
      <HeroActions />
    </PageSection>
  );
}
