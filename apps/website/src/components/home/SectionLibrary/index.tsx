import React from 'react';
import Link from 'next/link';
import { PageSection, SectionHeader, SectionHeading, SectionDescription } from '@zenixui/components';
import { CategoryGrid } from './CategoryGrid';

export function SectionLibrary() {
  return (
    <PageSection>
      <SectionHeader>
        <div>
          <SectionHeading>Section Library</SectionHeading>
          <SectionDescription>Independently installable architectural blocks.</SectionDescription>
        </div>
        <Link href="/sections" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8, whiteSpace: 'nowrap', transition: 'opacity 0.2s ease' }}>
          Browse All Sections →
        </Link>
      </SectionHeader>
      <CategoryGrid />
    </PageSection>
  );
}
