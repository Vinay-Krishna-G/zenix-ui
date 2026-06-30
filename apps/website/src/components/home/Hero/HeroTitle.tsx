import React from 'react';
import styles from './Hero.module.css';

export function HeroTitle() {
  return (
    <h1 className={styles.title} style={{ fontSize: '4.5rem', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
      Launch complete websites.<br />
      <span className={styles.highlight} style={{ color: 'var(--zx-primary)' }}>Not component libraries.</span>
    </h1>
  );
}
