import React from 'react';
import styles from './Composer.module.css';

export function ProjectSummary({ isGenerating, onGenerate }: any) {
  return (
    <div className={styles.launchContainer}>
      <div className={styles.launchList}>
        <div className={styles.launchItem}><span className={styles.launchIcon}>✔</span> Homepage & Inner Pages</div>
        <div className={styles.launchItem}><span className={styles.launchIcon}>✔</span> SEO Optimized</div>
        <div className={styles.launchItem}><span className={styles.launchIcon}>✔</span> Dark & Light Mode</div>
        <div className={styles.launchItem}><span className={styles.launchIcon}>✔</span> Responsive Design</div>
        <div className={styles.launchItem}><span className={styles.launchIcon}>✔</span> Production Ready</div>
      </div>
      
      <button onClick={onGenerate} disabled={isGenerating} className={styles.launchButton}>
        {isGenerating ? 'Initializing...' : 'Continue →'}
      </button>
    </div>
  );
}
