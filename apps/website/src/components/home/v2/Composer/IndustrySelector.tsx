import React from 'react';
import styles from './Composer.module.css';
import { Industry, Experience } from '../../../../lib/launchpad';

export function IndustrySelector({ industries, experiences, activeId, onChange, onHover }: any) {
  return (
    <div className={styles.cardGridMedium}>
      {industries.map((i: any) => (
        <div 
          key={i.id} 
          className={`${styles.card} ${activeId === i.id ? styles.cardActive : ''}`}
          onClick={() => onChange(i.id)}
          onMouseEnter={() => onHover(i.id)}
          onMouseLeave={() => onHover(null)}
        >
          <div className={styles.industryCardContent}>
            <div className={styles.industryHeader}>
              <div className={styles.industryTitle}>{i.id === 'health' ? '🏥' : i.id === 'local' ? '🍔' : i.id === 'startup' ? '🚀' : i.id === 'creator' ? '🎨' : '🏢'} {i.name}</div>
              <div className={styles.industryBadge}>{experiences.filter((e: any) => e.industryId === i.id).length} EXP</div>
            </div>
            {/* Content removed to comply with Rule 10: No placeholder content */}
          </div>
        </div>
      ))}
    </div>
  );
}
