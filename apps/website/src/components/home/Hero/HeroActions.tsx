import React from 'react';
import Link from 'next/link';
import { Button } from '@zenixui/components';
import styles from './Hero.module.css';

export function HeroActions() {
  return (
    <div className={styles.actions}>
      <Link href="/blueprints" style={{ textDecoration: 'none' }}>
        <Button size="lg" style={{ fontWeight: 600 }}>Browse Gallery</Button>
      </Link>
      <Link href="/docs" style={{ textDecoration: 'none' }}>
        <Button variant="glass" size="lg" style={{ fontWeight: 600, border: '1px solid var(--zx-border)', color: 'var(--zx-primary)' }}>Read the Docs</Button>
      </Link>
    </div>
  );
}
