import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export function HeroBadge() {
  return (
    <div className={styles.badge}>
      <span className={styles.badgePulse} />
      <span>v2.0 Released</span>
      <span style={{ opacity: 0.5 }}>•</span>
      <Link href="/roadmap" className={styles.badgeLink}>See what's new →</Link>
    </div>
  );
}
