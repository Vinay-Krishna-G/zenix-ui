import React from 'react';
import Link from 'next/link';
import { Surface } from '@zenixui/components';

interface ThemeCardProps {
  id: string;
  name: string;
  tagline: string;
  color: string;
}

export function ThemeCard({ id, name, tagline, color }: ThemeCardProps) {
  return (
    <Link href="/studio" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Surface variant="card" style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', gap: '2.5rem', border: '1px solid var(--zx-border)', transition: 'transform 0.15s ease, border-color 0.15s ease' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: id === 'midnight' ? '0px' : id === 'ocean' ? '50%' : 'var(--zx-radius-surface, 16px)', background: color, flexShrink: 0 }} />
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{name}</h3>
          <p style={{ opacity: 0.6, margin: '0 0 1rem', fontSize: '1rem' }}>{tagline}</p>
          <span style={{ fontSize: '1rem', fontWeight: 600, color: color }}>
            Try in Theme Studio →
          </span>
        </div>
      </Surface>
    </Link>
  );
}
