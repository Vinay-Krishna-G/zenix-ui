import React from 'react';
import styles from './Hero.module.css';

export function HeroDescription() {
  return (
    <>
      <p className={styles.description} style={{ fontSize: '1.5rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto 3rem' }}>
        From idea to production website. Save hundreds of hours without starting from scratch.
      </p>
    </>
  );
}
