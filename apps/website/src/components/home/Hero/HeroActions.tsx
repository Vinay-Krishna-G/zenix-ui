import React from 'react';
import Link from 'next/link';
import { Button } from '@zenixui/components';

export function HeroActions() {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Link href="/blueprints" style={{ textDecoration: 'none' }}>
        <Button size="lg" style={{ fontWeight: 600 }}>Browse Gallery</Button>
      </Link>
      <Link href="/studio" style={{ textDecoration: 'none' }}>
        <Button variant="glass" size="lg" style={{ fontWeight: 600 }}>Open Theme Studio</Button>
      </Link>
    </div>
  );
}
