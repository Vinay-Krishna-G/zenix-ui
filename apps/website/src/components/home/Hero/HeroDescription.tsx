import React from 'react';
import styles from './Hero.module.css';

export function HeroDescription() {
  return (
    <>
      <p className={styles.description}>
        ZenixUI is a complete experience ecosystem for React. Browse production-ready blueprints, customize themes visually, and install via CLI.
      </p>
      <p className={styles.subDescription}>
        Like Tailwind UI meets Vercel templates — but with full theme generation and a CLI installer.
      </p>
    </>
  );
}
