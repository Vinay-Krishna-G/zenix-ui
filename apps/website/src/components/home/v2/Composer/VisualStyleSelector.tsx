import React from 'react';
import styles from './Composer.module.css';
import { Aesthetic } from '../../../../lib/experiences';

export function VisualStyleSelector({ styles: aesthetics, activeId, onChange, onHover }: any) {
  return (
    <div>
      <div className={styles.sectionTitleSmall}>Visual Style</div>
      <div className={styles.cardGridMedium}>
        {aesthetics.map((a: any) => (
          <div 
            key={a.id} 
            className={`${styles.card} ${activeId === a.id ? styles.cardActive : ''}`}
            onClick={() => onChange(a.id)}
            onMouseEnter={() => onHover(a.id)}
            onMouseLeave={() => onHover(null)}
          >
            <div className={styles.styleCard}>
              <div className={styles.styleVisual}>
                <div className={styles.hintBlock1} style={{ borderRadius: a.id.includes('glass') ? 20 : 4 }} />
                <div className={styles.hintBlock2} />
                <div className={styles.hintBlock3} />
              </div>
              <div className={styles.styleName}>{a.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
