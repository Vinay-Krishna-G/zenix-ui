import React from 'react';
import Link from 'next/link';
import { Surface } from '@zenixui/components';

interface BlueprintCardProps {
  categoryName: string;
  categoryId: string;
  count: number;
  previewImage?: string;
}

export function BlueprintCard({ categoryName, categoryId, count, previewImage }: BlueprintCardProps) {
  return (
    <Link href={`/blueprints?category=${categoryId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Surface variant="card" style={{ padding: '1rem', border: '1px solid var(--zx-border)', height: '100%', transition: 'transform 0.15s ease, border-color 0.15s ease' }}>
        <div style={{ width: '100%', height: '160px', background: 'var(--zx-surface)', borderRadius: 'calc(var(--zx-radius-sm, 6px) - 2px)', marginBottom: '1.5rem', backgroundImage: previewImage ? `url(${previewImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'top center' }} />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem', padding: '0 0.5rem' }}>{categoryName}</h3>
        <p style={{ opacity: 0.6, fontSize: '1rem', margin: 0, padding: '0 0.5rem' }}>{count} blueprints →</p>
      </Surface>
    </Link>
  );
}
