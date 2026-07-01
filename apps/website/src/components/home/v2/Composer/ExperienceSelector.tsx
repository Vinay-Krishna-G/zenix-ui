import React from 'react';
import styles from './Composer.module.css';
import { Experience } from '../../../../lib/launchpad';

export function ExperienceSelector({ experiences, activeId, onChange, onHover }: any) {
  return (
    <div className={styles.cardGridMedium}>
      {experiences.map((e: any) => (
        <div 
          key={e.id} 
          className={`${styles.card} ${activeId === e.id ? styles.cardActive : ''}`}
          onClick={() => onChange(e.id)}
          onMouseEnter={() => onHover(e.id)}
          onMouseLeave={() => onHover(null)}
        >
          <div className={styles.experienceImageContainer}>
            {e.id === 'dental-clinic' ? '🦷' : e.id === 'zenix-portfolio' ? '👨‍💻' : '✨'}
          </div>
          <div className={styles.experienceContent}>
            <div className={styles.experienceTitle}>{e.personality}</div>
            <div className={styles.experienceSubtitle}>{e.name}</div>
            {e.rating && <div className={styles.experienceRating}>{'★'.repeat(Math.floor(e.rating))}</div>}
            {e.promise && <div className={styles.experiencePromise}>Built for: {e.promise}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
