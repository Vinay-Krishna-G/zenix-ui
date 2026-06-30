import React from 'react';
import styles from './Hero.module.css';

export function HeroTitle() {
  return (
    <h1 className={styles.title}>
      Build Entire Experiences.<br />
      <span className={styles.highlight}>Not Components.</span>
    </h1>
  );
}
