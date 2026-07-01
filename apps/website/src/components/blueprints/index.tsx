import React from 'react';
import Link from 'next/link';
import { PageSection, SectionHeader, SectionHeading, SectionDescription } from '@zenixui/components';
import { BlueprintGrid } from './BlueprintGrid';

export function BlueprintGallery() {
  return (
    <PageSection>
      <SectionHeader>
        <div>
          <SectionHeading>Blueprint Gallery</SectionHeading>
          <SectionDescription>Complete page experiences ready to ship.</SectionDescription>
        </div>
        <Link href="/blueprints" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8, whiteSpace: 'nowrap', transition: 'opacity 0.2s ease' }}>
          View all Blueprints →
        </Link>
      </SectionHeader>
      <BlueprintGrid />
    </PageSection>
  );
}
