import React from 'react';
import styles from './Composer.module.css';
import { Identity } from '../../../../lib/launchpad';

export function IdentitySelector({ identities, activeId, onChange, onHover }: any) {
  return (
    <div>
      <div className={styles.sectionTitleSmall}>Identity</div>
      <div className={styles.cardGridLarge}>
        {identities.map((i: any) => (
          <div 
            key={i.id} 
            className={`${styles.card} ${activeId === i.id ? styles.cardActive : ''}`}
            onClick={() => onChange(i.id)}
            onMouseEnter={() => onHover(i.id)}
            onMouseLeave={() => onHover(null)}
          >
            <div className={styles.identityCard}>
              <div className={styles.identityName}>{i.name}</div>
              <div className={styles.paletteStrip}>
                <div className={styles.paletteColor} style={{ background: i.colors.background }} />
                <div className={styles.paletteColor} style={{ background: i.colors.surface }} />
                <div className={styles.paletteColor} style={{ background: i.colors.primary }} />
                <div className={styles.paletteColor} style={{ background: i.colors.primary, opacity: 0.5 }} />
                <div className={styles.paletteColor} style={{ background: i.colors.surface, opacity: 0.5 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
