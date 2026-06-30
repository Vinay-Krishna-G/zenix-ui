import React from 'react';
import Link from 'next/link';
import { Surface } from '@zenixui/components';

interface SectionCardProps {
  title: string;
  count: number;
}

export function SectionCard({ title, count }: SectionCardProps) {
  return (
    <Link href="/sections" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Surface variant="card" style={{ padding: '2.5rem 1.5rem', border: '1px solid var(--zx-border)', transition: 'transform 0.15s ease, border-color 0.15s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{title}</h3>
        <p style={{ opacity: 0.6, fontSize: '1rem', margin: 0, fontWeight: 500 }}>{count} available</p>
      </Surface>
    </Link>
  );
}
