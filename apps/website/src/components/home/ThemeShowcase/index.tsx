import React from 'react';
import Link from 'next/link';
import { PageSection, SectionHeader, SectionHeading, SectionDescription } from '@zenixui/components';
import { ThemeGrid } from './ThemeGrid';

export function ThemeShowcase() {
  return (
    <PageSection>
      <SectionHeader>
        <div>
          <SectionHeading>Design Languages</SectionHeading>
          <SectionDescription>Switch complete aesthetic recipes in one line.</SectionDescription>
        </div>
        <Link href="/themes" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s ease' }}>
          Explore All Languages →
        </Link>
      </SectionHeader>
      <ThemeGrid />
    </PageSection>
  );
}
